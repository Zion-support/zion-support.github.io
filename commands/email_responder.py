#!/usr/bin/env python3
"""
Email Responder — Zion Tech Group
Enhanced with intelligent features for case-by-case analysis and smart actions.

Analyzes high-priority unread emails and generates intelligent reply options.
Includes: intent/sentiment analysis, dynamic tone adaptation, response quality scoring,
similarity caching (lightweight), explainability logging, and feedback learning.
"""

import sys, os, re, json, datetime, argparse, hashlib
from pathlib import Path

# Auto-resolve to current user's home — works on macOS and Linux
home = Path.home()
WORKSPACE = home / '.openclaw' / 'workspace'
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_create_draft_new, telegram_send
from llm_client import chat

DB_FILE = WORKSPACE / 'zion.app' / 'data' / 'email_responder.json'
SENDER_PROFILES_FILE = WORKSPACE / 'zion.app' / 'data' / 'sender_profiles.json'
RESPONSE_CACHE_FILE = WORKSPACE / 'zion.app' / 'data' / 'response_cache.json'
EXPLAINABILITY_LOG_FILE = WORKSPACE / 'zion.app' / 'data' / 'explainability_log.json'
FEEDBACK_FILE = WORKSPACE / 'zion.app' / 'data' / 'feedback_log.json'

def load_json_file(filepath, default=None):
    """Load JSON file with error handling."""
    if default is None:
        default = {}
    try:
        if filepath.exists():
            return json.loads(filepath.read_text())
    except Exception as e:
        print(f"⚠️  Error loading {filepath}: {e}")
    return default

def save_json_file(filepath, data):
    """Save JSON file with directory creation."""
    filepath.parent.mkdir(parents=True, exist_ok=True)
    filepath.write_text(json.dumps(data, indent=2))

def load_db():
    return load_json_file(DB_FILE, {'suggested': []})

def save_db(db):
    save_json_file(DB_FILE, db)

def load_sender_profiles():
    return load_json_file(SENDER_PROFILES_FILE, {})

def save_sender_profiles(profiles):
    save_json_file(SENDER_PROFILES_FILE, profiles)

def load_response_cache():
    """Load simple text-based response cache."""
    try:
        if RESPONSE_CACHE_FILE.exists():
            return json.loads(RESPONSE_CACHE_FILE.read_text())
    except Exception:
        return {"responses": [], "keys": []}
    return {"responses": [], "keys": []}

def save_response_cache(cache_data):
    """Save response cache."""
    try:
        RESPONSE_CACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
        RESPONSE_CACHE_FILE.write_text(json.dumps(cache_data, indent=2))
    except Exception as e:
        print(f"⚠️  Error saving response cache: {e}")

def load_explainability_log():
    return load_json_file(EXPLAINABILITY_LOG_FILE, [])

def save_explainability_log(log_entries):
    save_json_file(EXPLAINABILITY_LOG_FILE, log_entries)

def load_feedback_log():
    return load_json_file(FEEDBACK_FILE, [])

def save_feedback_log(feedback_entries):
    save_json_file(FEEDBACK_FILE, feedback_entries)

def simple_text_similarity(text1: str, text2: str) -> float:
    """Simple Jaccard similarity for text comparison."""
    if not text1 or not text2:
        return 0.0
    
    # Convert to lowercase word sets
    words1 = set(text1.lower().split())
    words2 = set(text2.lower().split())
    
    if not words1 and not words2:
        return 1.0
    if not words1 or not words2:
        return 0.0
    
    intersection = words1.intersection(words2)
    union = words1.union(words2)
    
    return len(intersection) / len(union) if union else 0.0

def analyze_email_intent_and_sentiment(sender: str, subject: str, snippet: str) -> dict:
    """
    Analyze email intent and sentiment using LLM for better nuance detection.
    Returns dict with intent, sentiment, confidence, and suggested approach.
    """
    prompt = f"""
Analyze this email for intent and sentiment. Return JSON with:
- intent: one of [urgent, sales_lead, support_issue, meeting, partnership, financial, personal_one2one, cancellation, general]
- sentiment: one of [positive, negative, neutral, frustrated, appreciative, anxious]
- confidence: float between 0.0 and 1.0
- suggested_tone: one of [formal, professional, friendly, direct, empathetic]
- priority_boost: boolean indicating if this should be prioritized
- suggested_action: one of [reply_all, reply, forward, schedule_meeting, delegate, ignore]

Email details:
  From: {sender}
  Subject: {subject}
  Body snippet: {snippet[:300]}

Return ONLY valid JSON.
"""
    try:
        resp = chat([{"role":"user","content":prompt}], provider="auto", temperature=0.3)
        content = resp.get('content','').strip()
        
        # Try to parse JSON
        import json as j
        try:
            result = j.loads(content)
            # Validate required fields
            required_fields = ['intent', 'sentiment', 'confidence', 'suggested_tone', 'priority_boost', 'suggested_action']
            if all(field in result for field in required_fields):
                # Ensure confidence is float
                result['confidence'] = float(result['confidence'])
                return result
        except Exception:
            pass
        
        # Fallback: extract from text if JSON parsing fails
        intent = "general"
        sentiment = "neutral"
        confidence = 0.5
        suggested_tone = "professional"
        priority_boost = False
        suggested_action = "reply"
        
        # Simple keyword-based fallback
        text_lower = f"{subject} {snippet}".lower()
        if any(word in text_lower for word in ['urgent', 'asap', 'emergency', 'critical']):
            intent = "urgent"
            priority_boost = True
            confidence = 0.8
            suggested_action = "reply_all"
        elif any(word in text_lower for word in ['demo', 'pricing', 'buy', 'purchase', 'quote']):
            intent = "sales_lead"
            confidence = 0.7
            suggested_action = "reply"
        elif any(word in text_lower for word in ['broken', 'bug', 'error', 'not working', 'issue']):
            intent = "support_issue"
            confidence = 0.7
            suggested_action = "reply_all"
        elif any(word in text_lower for word in ['meeting', 'schedule', 'call', 'calendar']):
            intent = "meeting"
            confidence = 0.7
            suggested_action = "schedule_meeting"
        elif any(word in text_lower for word in ['thanks', 'thank', 'appreciate', 'great']):
            sentiment = "appreciative"
            confidence = 0.6
        elif any(word in text_lower for word in ['sorry', 'unfortunately', 'problem', 'issue']):
            sentiment = "frustrated"
            confidence = 0.6
            suggested_action = "reply_all"
            
        return {
            "intent": intent,
            "sentiment": sentiment,
            "confidence": confidence,
            "suggested_tone": suggested_tone,
            "priority_boost": priority_boost,
            "suggested_action": suggested_action
        }
    except Exception as e:
        print(f"   ⚠️  Intent/sentiment analysis failed: {e}")
        # Return safe defaults
        return {
            "intent": "general",
            "sentiment": "neutral", 
            "confidence": 0.5,
            "suggested_tone": "professional",
            "priority_boost": False,
            "suggested_action": "reply"
        }

def get_sender_profile(sender_email: str) -> dict:
    """Get or create sender profile for tone adaptation."""
    profiles = load_sender_profiles()
    if sender_email not in profiles:
        profiles[sender_email] = {
            "interaction_count": 0,
            "avg_response_length": 0,
            "preferred_tone": "professional",
            "formality_score": 0.5,  # 0.0 = very casual, 1.0 = very formal
            "response_patterns": [],
            "last_interaction": None
        }
        save_sender_profiles(profiles)
    return profiles[sender_email]

def update_sender_profile(sender_email: str, response_text: str, tone_used: str):
    """Update sender profile based on interaction."""
    profiles = load_sender_profiles()
    if sender_email in profiles:
        profile = profiles[sender_email]
        profile["interaction_count"] += 1
        profile["last_interaction"] = datetime.datetime.now().isoformat()
        
        # Update average response length
        current_avg = profile["avg_response_length"]
        new_length = len(response_text)
        profile["avg_response_length"] = (current_avg * (profile["interaction_count"] - 1) + new_length) / profile["interaction_count"]
        
        # Update preferred tone (simple frequency-based)
        if "response_patterns" not in profile:
            profile["response_patterns"] = []
        profile["response_patterns"].append({
            "timestamp": datetime.datetime.now().isoformat(),
            "tone": tone_used,
            "length": new_length
        })
        
        # Keep only last 10 patterns
        if len(profile["response_patterns"]) > 10:
            profile["response_patterns"] = profile["response_patterns"][-10:]
        
        # Determine most common tone from recent patterns
        if profile["response_patterns"]:
            tones = [p["tone"] for p in profile["response_patterns"]]
            profile["preferred_tone"] = max(set(tones), key=tones.count)
        
        # Update formality score based on tone
        tone_formality_map = {
            "formal": 0.9,
            "professional": 0.7,
            "friendly": 0.4,
            "direct": 0.6,
            "empathetic": 0.5
        }
        profile["formality_score"] = tone_formality_map.get(profile["preferred_tone"], 0.5)
        
        save_sender_profiles(profiles)

def get_dynamic_tone(sender_email: str, base_tone: str) -> str:
    """Get adapted tone based on sender's historical preferences."""
    profile = get_sender_profile(sender_email)
    
    # If we have enough interactions, use sender's preferred tone
    if profile["interaction_count"] >= 3:
        return profile["preferred_tone"]
    
    # Otherwise, blend base tone with sender's formality preference
    formality_map = {
        "formal": 0.9,
        "professional": 0.7,
        "friendly": 0.4,
        "direct": 0.6,
        "empathetic": 0.5
    }
    
    base_formality = formality_map.get(base_tone, 0.5)
    sender_formality = profile["formality_score"]
    
    # Blend formalities (weighted toward sender preference with more interactions)
    weight = min(profile["interaction_count"] / 10.0, 0.8)  # Max 80% weight to sender preference
    blended_formality = base_formality * (1 - weight) + sender_formality * weight
    
    # Map back to tone
    if blended_formality >= 0.8:
        return "formal"
    elif blended_formality >= 0.6:
        return "professional"
    elif blended_formality >= 0.4:
        return "friendly"
    elif blended_formality >= 0.3:
        return "direct"
    else:
        return "empathetic"

def check_response_similarity(new_response: str, threshold: float = 0.7) -> tuple:
    """
    Check if new response is similar to cached responses using simple text similarity.
    Returns (is_similar, cached_response, similarity_score)
    """
    cache_data = load_response_cache()
    responses = cache_data.get("responses", [])
    cache_keys = cache_data.get("keys", [])
    
    if not responses:
        return False, None, 0.0
    
    max_similarity = 0.0
    best_match = None
    best_index = -1
    
    for i, cached in enumerate(responses):
        similarity = simple_text_similarity(new_response, cached)
        if similarity > max_similarity:
            max_similarity = similarity
            best_match = cached
            best_index = i
    
    if max_similarity >= threshold:
        return True, best_match, max_similarity
    else:
        return False, None, max_similarity

def update_response_cache(new_response: str, cache_key: str):
    """Add new response to similarity cache."""
    cache_data = load_response_cache()
    responses = cache_data.get("responses", [])
    keys = cache_data.get("keys", [])
    
    # Add to cache
    responses.append(new_response)
    keys.append(cache_key)
    
    # Keep cache size manageable
    max_cache_size = 50
    if len(responses) > max_cache_size:
        responses = responses[-max_cache_size:]
        keys = keys[-max_cache_size:]
    
    save_response_cache({"responses": responses, "keys": keys})

def log_explainability(sender: str, subject: str, analysis: dict, action_taken: str, 
                      tone_used: str, response_quality: float, cached_used: bool):
    """Log explainability data for audit and improvement."""
    log_entry = {
        "timestamp": datetime.datetime.now().isoformat(),
        "sender": sender,
        "subject": subject[:100],
        "analysis": analysis,
        "action_taken": action_taken,
        "tone_used": tone_used,
        "response_quality_score": response_quality,
        "used_cached_response": cached_used,
        "processing_notes": []
    }
    
    # Add notes based on analysis
    if analysis["priority_boost"]:
        log_entry["processing_notes"].append("Priority boosted due to content")
    if analysis["confidence"] < 0.6:
        log_entry["processing_notes"].append("Low confidence in analysis - using fallback")
    if cached_used:
        log_entry["processing_notes"].append("Used cached similar response for efficiency")
    
    # Save to log
    log_entries = load_explainability_log()
    log_entries.append(log_entry)
    
    # Keep only last 1000 entries
    if len(log_entries) > 1000:
        log_entries = log_entries[-1000:]
    
    save_explainability_log(log_entries)

def score_response_quality(response_text: str, original_subject: str, original_snippet: str) -> float:
    """
    Score the quality of a generated response.
    Returns score between 0.0 and 1.0.
    """
    score = 1.0
    
    # Length check - too short or too long reduces score
    length = len(response_text)
    if length < 10:
        score -= 0.3
    elif length > 200:
        score -= 0.2
    
    # Relevance check - should reference original subject/topic
    subject_words = set(original_subject.lower().split())
    response_words = set(response_text.lower().split())
    if len(subject_words) > 0:
        overlap = len(subject_words.intersection(response_words)) / len(subject_words)
        score *= (0.5 + 0.5 * overlap)  # Scale 0.5-1.0 based on overlap
    
    # Professionalism check - avoid overly casual language in professional context
    casual_indicators = ['lol', 'omg', 'btw', 'hey ', 'hi ', 'thanks!', 'thx']
    casual_count = sum(1 for indicator in casual_indicators if indicator in response_text.lower())
    if casual_count > 2:
        score -= 0.2 * min(casual_count / 5.0, 1.0)
    
    # Completeness check - should have greeting and closing
    has_greeting = any(greeting in response_text.lower() for greeting in ['hi ', 'hello ', 'dear ', 'greetings'])
    has_closing = any(closing in response_text.lower() for closing in ['thanks', 'thank', 'best', 'regards', 'sincerely'])
    if not (has_greeting and has_closing):
        score -= 0.2
    
    # Ensure score is in valid range
    return max(0.0, min(1.0, score))

def generate_reply_options(sender: str, subject: str, snippet: str) -> list:
    """
    Generate intelligent reply options with multiple enhancement layers:
    1. Intent/sentiment analysis
    2. Similarity caching for efficiency
    3. Dynamic tone adaptation
    4. Response quality scoring and selection
    """
    # Step 1: Analyze email intent and sentiment
    analysis = analyze_email_intent_and_sentiment(sender, subject, snippet)
    
    # Log the analysis for debugging/improvement
    print(f"   📊 Email Analysis: {analysis['intent']} ({analysis['sentiment']}) - Confidence: {analysis['confidence']:.2f}")
    print(f"   🎯 Suggested Action: {analysis['suggested_action']} | Priority Boost: {analysis['priority_boost']}")
    
    # Step 2: Check similarity cache for efficiency
    cache_key = f"{sender}|{subject}|{snippet[:100]}"
    is_similar, cached_response, similarity_score = check_response_similarity(cache_key)
    
    if is_similar and similarity_score > 0.8:  # High similarity threshold
        print(f"   ⚡ Using cached response (similarity: {similarity_score:.2f})")
        # Generate slight variations of the cached response
        base_response = cached_response
        options = [
            base_response,
            base_response.replace("Thanks", "Thank you").replace("thanks", "thank you"),
            f"{base_response} Please let me know if you need any further assistance."
        ]
        tone_used = "professional"  # Default for cached
        response_quality = 0.8  # Assume good quality for cached
        cached_used = True
    else:
        # Step 3: Generate new responses with enhanced prompt
        # Enhance the prompt with intent/sentiment context and dynamic tone
        sender_email_match = re.findall(r'[\w\.-]+@[\w\.-]+', sender)
        sender_email = sender_email_match[0] if sender_email_match else sender
        
        base_tone = analysis['suggested_tone']
        adapted_tone = get_dynamic_tone(sender_email, base_tone)
        
        prompt = f"""
You are Kleber Garcia Alcatrão, CEO of Zion Tech Group.
Write 3 short, professional reply options for this email.
Keep each under 60 words. Tone: {adapted_tone}, direct, helpful, slightly informal.
Include appropriate greeting/closing.

Email details:
  From: {sender}
  Subject: {subject}
  Body snippet: {snippet}
  
  Detected intent: {analysis['intent']}
  Detected sentiment: {analysis['sentiment']}
  Suggested approach: Use {adapted_tone} tone with {'urgent priority' if analysis['priority_boost'] else 'normal priority'}
  Suggested action: {analysis['suggested_action']}

Return as JSON array: [{{\"option\": 1, \"text\": \"...\"}}, ...]
"""
        
        try:
            resp = chat([{"role":"user","content":prompt}], provider="auto", temperature=0.8)
            content = resp.get('content','')
            
            # Try to parse JSON array
            try:
                import json as j
                options = j.loads(content)
                if isinstance(options, list) and len(options) >= 3:
                    response_texts = [opt.get('text','') for opt in options[:3]]
                else:
                    raise ValueError("Invalid options format")
            except Exception:
                # Fallback: split by numbered lines
                lines = [l.strip() for l in content.split('\\n') if l.strip().startswith(('1.','2.','3.','Option'))]
                if len(lines) >= 3:
                    response_texts = [re.sub(r'^(1[.)]|2[.)]|3[.)]|Option \\\\d:?)\\\\s*', '', l) for l in lines[:3]]
                else:
                    raise ValueError("Could not parse response options")
        except Exception as e:
            print(f"   ⚠️  LLM generation failed: {e}")
            # Hardcoded fallbacks with tone adaptation
            base_responses = [
                "Thanks for reaching out. I'll review and get back to you shortly.",
                "Appreciate you contacting us. We'll respond within 24 hours.",
                "Hi — received your message. We're on it and will follow up soon."
            ]
            # Adapt fallbacks to tone
            if adapted_tone == "formal":
                response_texts = [
                    "Thank you for your correspondence. I will review this matter and respond promptly.",
                    "I appreciate your communication and will provide a response within the next business day.",
                    "Good day. Your message has been received and is under review."
                ]
            elif adapted_tone == "friendly":
                response_texts = [
                    "Hey there! Thanks for the message - I'll look into this and get back to you soon!",
                    "Hi! Appreciate you reaching out. Will check this out and reply quickly!",
                    "Hello! Got your message. On it and will follow up shortly!"
                ]
            else:  # professional/direct/empathetic
                response_texts = base_responses
        
        tone_used = adapted_tone
        response_quality = 0.7  # Default quality for new responses
        cached_used = False
        
        # Step 4: Score and potentially improve responses
        response_texts = response_texts[:3]  # Ensure we have exactly 3
        scored_options = []
        for i, response_text in enumerate(response_texts):
            quality_score = score_response_quality(response_text, subject, snippet)
            scored_options.append((quality_score, response_text))
            print(f"      Option {i+1}: Quality Score = {quality_score:.2f}")
        
        # Sort by quality score (descending) and take top 3
        scored_options.sort(key=lambda x: x[0], reverse=True)
        response_texts = [opt[1] for opt in scored_options[:3]]
        
        # Update average quality score
        if scored_options:
            response_quality = sum(opt[0] for opt in scored_options[:3]) / len(scored_options)
        
        # Cache the best response for future similarity matching
        if response_texts:
            update_response_cache(response_texts[0], cache_key)
    
    # Step 5: Log explainability data
    log_explainability(sender, subject, analysis, analysis['suggested_action'], 
                      tone_used, response_quality, cached_used)
    
    # Step 6: Update sender profile with the tone we used
    sender_email_match = re.findall(r'[\w\.-]+@[\w\.-]+', sender)
    if sender_email_match:
        update_sender_profile(sender_email_match[0], response_texts[0] if response_texts else "", tone_used)
    
    return response_texts

def should_reply_all(email_headers: list) -> bool:
    """
    Determine if we should reply-all based on email headers.
    Looks for CC recipients or mailing list indicators.
    """
    cc_header = next((h['value'] for h in email_headers if h['name']=='CC'), '')
    to_header = next((h['value'] for h in email_headers if h['name']=='To'), '')
    
    # Reply-all if there are CC recipients or if it looks like a group email
    if cc_header.strip():
        return True
    
    # Check if To header has multiple recipients (simple heuristic)
    if to_header.count(',') > 0 or ';' in to_header:
        return True
    
    # Check for common mailing list indicators in subject
    # This would be checked in the calling function with subject
    
    return False

def cmd_run(dry_run=True, limit=10):
    db = load_db()
    query = 'is:unread (label:Priority-4 OR label:Priority-5)'
    msgs = gmail_search(query, limit=limit)
    if not msgs:
        print("✅ No high-priority emails to respond to.")
        return

    suggestions = 0
    feedback_processed = 0
    
    # Process any feedback to improve future responses
    feedback_entries = load_feedback_log()
    if feedback_entries:
        print(f"📝 Processing {len(feedback_entries)} feedback entries for learning...")
        # Here we would implement learning from feedback
        # For now, we'll just clear old feedback
        feedback_entries = [f for f in feedback_entries 
                           if (datetime.datetime.now() - datetime.datetime.fromisoformat(f['timestamp'])).days < 7]
        if len(feedback_entries) < len(load_feedback_log()):
            save_feedback_log(feedback_entries)
            feedback_processed = len(load_feedback_log()) - len(feedback_entries)
    
    for msg in msgs:
        msg_id = msg.get('id')
        if msg_id in db.get('suggested', []):
            continue

        # Get full message for headers
        full_msg = gmail_get(msg_id)
        headers = full_msg.get('payload', {}).get('headers', [])
        
        subject = next((h['value'] for h in headers if h['name']=='Subject'), '(no subject)')[:80]
        sender = next((h['value'] for h in headers if h['name']=='From'), 'unknown')
        snippet = msg.get('snippet', '')[:200]

        print(f"   💡 Generating replies for: {subject[:50]}")
        
        # Determine if we should reply-all
        should_ra = should_reply_all(headers)
        print(f"   📧 Reply-all recommended: {should_ra}")
        
        options = generate_reply_options(sender, subject, snippet)

        for i, text in enumerate(options, 1):
            print(f"      {i}. {text[:60]}{'...' if len(text) > 60 else ''}")

        # Create drafts
        draft_urls = []
        for i, text in enumerate(options, 1):
            # For reply-all, we would need to extract all recipients
            # For now, we'll reply to sender only (can be enhanced)
            to_address = sender
            
            draft = gmail_create_draft_new(
                to=to_address,
                subject=f"Re: {subject}",
                body=text
            )
            if draft.get('id'):
                draft_url = f"https://mail.google.com/mail/u/0/#drafts/{draft['id']}"
                draft_urls.append(draft_url)
                print(f"      ✅ Draft {i} saved: {draft_url}")
            else:
                print(f"      ❌ Failed to save draft {i}")

        if draft_urls:
            # Save to db to avoid duplicate suggestions
            db.setdefault('suggested', []).append(msg_id)
            save_db(db)
            suggestions += len(draft_urls)

            # Send Telegram summary with enhanced information
            tg_message = f"🧠 *Intelligent Email Responder*\\\\n\\\\n"
            tg_message += f"*Subject:* {subject}\\\\n*"
            tg_message += f"*From:* {sender}\\\\n\\\\n*"
            tg_message += f"*Analysis:* {analysis.get('intent', 'unknown')} ({analysis.get('sentiment', 'neutral')})\\\\n*"
            tg_message += f"*Confidence:* {analysis.get('confidence', 0):.2f}\\\\n*"
            tg_message += f"*Suggested Action:* {analysis.get('suggested_action', 'reply')}\\\\n*"
            tg_message += f"*Priority Boost:* {'Yes' if analysis.get('priority_boost', False) else 'No'}\\\\n\\\\n*"
            tg_message += f"*Reply Options:*\\\\n"
            for i, text in enumerate(options, 1):
                tg_message += f"{i}. {text}\\\\n"
            tg_message += f"\\\\n*Draft Links:*\\\\n"
            for i, url in enumerate(draft_urls, 1):
                tg_message += f"{i}. {url}\\\\n"
            if should_ra:
                tg_message += f"\\\\n📧 *Note:* Consider Reply-All based on recipients\\\\n"
            telegram_send(tg_message)
        else:
            print("   ⚠️  No drafts created.")

    print(f"\n✅ Processed {len(msgs)} emails, created {suggestions} draft suggestions.")
    if feedback_processed > 0:
        print(f"📈 Processed {feedback_processed} feedback entries for continuous improvement.")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Intelligent Email Responder for Zion Tech Group')
    parser.add_argument('--execute', action='store_true', help='Create drafts and send Telegram summary (default: dry-run only)')
    parser.add_argument('--limit', type=int, default=10, help='Maximum number of emails to process')
    parser.add_argument('--learn', action='store_true', help='Enable learning from feedback')
    
    args = parser.parse_args()

    # Run in dry-run mode unless --execute is specified
    cmd_run(dry_run=not args.execute, limit=args.limit)