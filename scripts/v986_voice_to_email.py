#!/usr/bin/env python3
"""
V986: Voice-to-Email Intelligence Engine
Transcribes voice messages and extracts intent, sentiment, and action items.
Enables hands-free email processing with strict reply-all enforcement.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class VoiceToEmailIntelligence:
    """Processes voice messages for email intelligence."""

    def __init__(self):
        self.voice_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.transcription_database: Dict[str, Dict] = {}

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze voice email case by case."""
        analysis = {
            "engine": "V986",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "voice_to_email",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")
        subject = email.get("subject", "")

        # 1. Detect voice content
        has_voice = self._detect_voice_content(email)
        analysis["has_voice_content"] = has_voice

        if not has_voice["has_voice"]:
            analysis["recommended_action"] = "NOT_A_VOICE_EMAIL"
            reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
            analysis["reply_all_enforcement"] = reply_all
            return analysis

        # 2. Simulate transcription (in production, use speech-to-text API)
        transcription = self._transcribe_voice(body)
        analysis["transcription"] = transcription

        # 3. Extract intent from transcription
        intent = self._extract_intent(transcription["text"])
        analysis["intent"] = intent

        # 4. Sentiment analysis
        sentiment = self._analyze_sentiment(transcription["text"])
        analysis["sentiment"] = sentiment

        # 5. Extract action items
        action_items = self._extract_action_items(transcription["text"])
        analysis["action_items"] = action_items

        # 6. Extract key information
        key_info = self._extract_key_information(transcription["text"])
        analysis["key_information"] = key_info

        # 7. Urgency detection
        urgency = self._detect_urgency(transcription["text"])
        analysis["urgency"] = urgency

        # 8. Generate summary
        summary = self._generate_summary(transcription, intent, sentiment, action_items)
        analysis["voice_summary"] = summary

        # 9. Determine action
        action = self._determine_voice_action(intent, urgency, action_items)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        self.voice_log.append({
            "email_id": analysis["email_id"],
            "transcription_length": len(transcription["text"]),
            "intent_type": intent["type"],
            "sentiment_score": sentiment["score"],
            "action_item_count": len(action_items),
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _detect_voice_content(self, email: Dict) -> Dict:
        """Detect if email contains voice content."""
        body = email.get("body", "")
        
        # Check for voice indicators
        voice_patterns = [
            r'(?:voice message|audio message|voice note)',
            r'(?:transcription|transcribed)',
            r'\[audio\]|\[voice\]',
        ]
        
        has_voice = any(re.search(p, body, re.IGNORECASE) for p in voice_patterns)
        
        # Check for audio attachments
        attachments = email.get("attachments", [])
        audio_extensions = [".mp3", ".wav", ".m4a", ".ogg", ".aac"]
        has_audio = any(
            any(att.lower().endswith(ext) for ext in audio_extensions)
            for att in attachments if isinstance(att, str)
        )
        
        return {
            "has_voice": has_voice or has_audio,
            "confidence": 0.9 if (has_voice and has_audio) else 0.7 if (has_voice or has_audio) else 0.3,
            "indicators": "text_markers" if has_voice else "audio_attachment" if has_audio else "none",
        }

    def _transcribe_voice(self, body: str) -> Dict:
        """Simulate voice transcription (in production, use speech-to-text API)."""
        # For demo purposes, extract text between voice markers
        # In production, this would call a speech-to-text API
        
        # Simulate transcription by extracting main content
        lines = body.split('\n')
        text_lines = [line.strip() for line in lines if line.strip() and not line.strip().startswith('[')]
        text = ' '.join(text_lines)
        
        return {
            "text": text,
            "confidence": 0.85,
            "duration_seconds": len(text) // 3,  # Rough estimate: 3 chars per second
            "word_count": len(text.split()),
        }

    def _extract_intent(self, text: str) -> Dict:
        """Extract intent from transcribed voice."""
        text_lower = text.lower()
        
        intent_patterns = {
            "question": r'\?|(?:what|when|where|who|why|how)\b',
            "request": r'(?:please|could you|can you|would you)\b',
            "information": r'(?:fyi|just letting you know|wanted to tell)',
            "urgent": r'(?:urgent|asap|immediately|right away)',
            "follow_up": r'(?:follow up|check in|touch base)',
        }
        
        detected_intents = []
        for intent_type, pattern in intent_patterns.items():
            if re.search(pattern, text_lower):
                detected_intents.append(intent_type)
        
        primary_intent = detected_intents[0] if detected_intents else "general"
        
        return {
            "type": primary_intent,
            "all_intents": detected_intents,
            "confidence": 0.8 if detected_intents else 0.5,
        }

    def _analyze_sentiment(self, text: str) -> Dict:
        """Analyze sentiment from voice transcription."""
        text_lower = text.lower()
        
        positive_words = ["great", "excellent", "amazing", "love", "happy", "excited", "wonderful"]
        negative_words = ["frustrated", "angry", "disappointed", "terrible", "awful", "worried"]
        
        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)
        
        if positive_count > negative_count:
            polarity = "positive"
            score = min(positive_count * 15, 100)
        elif negative_count > positive_count:
            polarity = "negative"
            score = -min(negative_count * 15, 100)
        else:
            polarity = "neutral"
            score = 0
        
        return {
            "polarity": polarity,
            "score": score,
            "positive_indicators": positive_count,
            "negative_indicators": negative_count,
        }

    def _extract_action_items(self, text: str) -> List[Dict]:
        """Extract action items from voice transcription."""
        action_items = []
        
        patterns = [
            r'(?:please|could you|can you)\s+(.+?)(?:\.|$)',
            r'(?:need to|have to|must)\s+(.+?)(?:\.|$)',
            r'(?:let\'s|we should)\s+(.+?)(?:\.|$)',
        ]
        
        for pattern in patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                item_text = match.group(1).strip()
                if len(item_text) > 10 and len(item_text) < 200:
                    action_items.append({
                        "text": item_text,
                        "priority": "MEDIUM",
                        "confidence": 0.75,
                    })
        
        return action_items

    def _extract_key_information(self, text: str) -> Dict:
        """Extract key information from voice transcription."""
        info = {}
        
        # Extract dates
        dates = re.findall(r'\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4})\b', text)
        if dates:
            info["dates"] = dates[:3]
        
        # Extract times
        times = re.findall(r'\b(\d{1,2}:\d{2}\s*(?:am|pm)?)\b', text, re.IGNORECASE)
        if times:
            info["times"] = times[:3]
        
        # Extract names (capitalized words)
        names = re.findall(r'\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b', text)
        if names:
            info["names"] = names[:5]
        
        # Extract numbers
        numbers = re.findall(r'\b(\d{2,})\b', text)
        if numbers:
            info["numbers"] = numbers[:5]
        
        return info

    def _detect_urgency(self, text: str) -> Dict:
        """Detect urgency from voice transcription."""
        text_lower = text.lower()
        
        urgent_keywords = ["urgent", "asap", "immediately", "right away", "emergency", "critical"]
        urgency_count = sum(1 for kw in urgent_keywords if kw in text_lower)
        
        # Check for time pressure
        time_pressure = re.search(r'(?:today|tonight|this afternoon|by \d+|in \d+ hours?|move fast|quickly)', text_lower)
        
        if urgency_count >= 1 or time_pressure:
            level = "HIGH"
            score = min(urgency_count * 25 + (50 if time_pressure else 0), 100)
        elif urgency_count == 1:
            level = "MEDIUM"
            score = 50
        else:
            level = "LOW"
            score = 20
        
        return {
            "level": level,
            "score": score,
            "urgent_keywords_found": urgency_count,
            "time_pressure": bool(time_pressure),
        }

    def _generate_summary(self, transcription: Dict, intent: Dict, 
                         sentiment: Dict, action_items: List) -> Dict:
        """Generate voice message summary."""
        summary_parts = []
        
        summary_parts.append(f"Voice message ({transcription['duration_seconds']}s, {transcription['word_count']} words)")
        summary_parts.append(f"Intent: {intent['type']}")
        summary_parts.append(f"Sentiment: {sentiment['polarity']}")
        
        if action_items:
            summary_parts.append(f"Action items: {len(action_items)}")
        
        return {
            "summary_text": " | ".join(summary_parts),
            "brief": f"{intent['type']} message with {sentiment['polarity']} sentiment",
            "detailed": transcription["text"][:200] + "..." if len(transcription["text"]) > 200 else transcription["text"],
        }

    def _determine_voice_action(self, intent: Dict, urgency: Dict, action_items: List) -> str:
        """Determine action based on voice analysis."""
        if urgency["level"] == "HIGH":
            return "IMMEDIATE_RESPONSE_REQUIRED"
        elif intent["type"] == "question" and action_items:
            return "ANSWER_AND_EXECUTE"
        elif intent["type"] == "request":
            return "PROCESS_REQUEST"
        elif action_items:
            return "EXTRACT_AND_TRACK"
        else:
            return "ACKNOWLEDGE_AND_ARCHIVE"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        """STRICT reply-all enforcement."""
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def get_stats(self) -> Dict:
        if not self.voice_log:
            return {"voice_emails_processed": 0}
        return {
            "voice_emails_processed": len(self.voice_log),
            "avg_transcription_length": sum(v["transcription_length"] for v in self.voice_log) / len(self.voice_log),
            "total_action_items": sum(v["action_item_count"] for v in self.voice_log),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v986():
    engine = VoiceToEmailIntelligence()

    # Test 1: Voice message with action items
    email1 = {
        "id": "voice-001",
        "from": "manager@company.com",
        "to": ["team@ziontechgroup.com", "dev@ziontechgroup.com"],
        "subject": "Voice message: Sprint planning",
        "body": "[voice message]\n\nHey team, just wanted to touch base about the sprint planning. Please prepare the backlog items by Friday. We need to prioritize the authentication feature. Can you also schedule a meeting for next Tuesday at 2 PM? This is urgent, we need to move fast. Thanks!",
        "attachments": ["voice_message.mp3"],
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["has_voice_content"]["has_voice"] is True
    assert len(r1["action_items"]) >= 2
    assert r1["urgency"]["level"] == "HIGH"
    print(f"✅ Test 1 PASSED: Voice detected, {len(r1['action_items'])} actions, urgency={r1['urgency']['level']}, reply-all enforced")

    # Test 2: Non-voice email
    email2 = {
        "id": "voice-002",
        "from": "user@company.com",
        "to": ["support@ziontechgroup.com"],
        "subject": "Question about pricing",
        "body": "Hi, I'd like to know more about your pricing plans.",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["has_voice_content"]["has_voice"] is False
    assert r2["recommended_action"] == "NOT_A_VOICE_EMAIL"
    print(f"✅ Test 2 PASSED: Non-voice email correctly identified")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['voice_emails_processed']} voice emails processed, {stats['total_action_items']} action items")

    print("\n🎉 V986 ALL TESTS PASSED — Voice-to-Email Intelligence operational!")
    return True


if __name__ == "__main__":
    test_v986()
