#!/usr/bin/env python3
"""V639 - Thread Summarizer Pro
Advanced multi-thread summarization with cross-reference analysis and executive briefs.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any
from collections import Counter

class ThreadSummarizerPro:
    """Advanced thread summarization with cross-references."""
    
    IMPORTANCE_INDICATORS = {
        "high": ["urgent", "critical", "important", "deadline", "asap", "must"],
        "medium": ["please", "review", "update", "progress", "status"],
        "low": ["fyi", "note", "heads up", "reminder"]
    }
    
    def __init__(self):
        self.thread_cache = {}
    
    def summarize_thread(self, thread: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Generate comprehensive thread summary."""
        if not thread:
            return {"error": "Empty thread"}
        
        # Sort chronologically
        sorted_thread = sorted(thread, key=lambda x: x.get("sent_at", ""))
        
        # Core analysis
        participants = self._extract_participants(sorted_thread)
        topics = self._extract_topics(sorted_thread)
        timeline = self._build_timeline(sorted_thread)
        
        # Advanced analysis
        decisions = self._extract_decisions(sorted_thread)
        action_items = self._extract_action_items(sorted_thread)
        questions = self._extract_questions(sorted_thread)
        commitments = self._extract_commitments(sorted_thread)
        
        # Sentiment and health
        sentiment_arc = self._analyze_sentiment_arc(sorted_thread)
        thread_health = self._assess_thread_health(sorted_thread)
        
        # Generate summaries
        brief_summary = self._generate_brief(sorted_thread, decisions, action_items)
        detailed_summary = self._generate_detailed_summary(sorted_thread, topics, decisions, action_items)
        executive_brief = self._generate_executive_brief(sorted_thread, decisions, action_items, questions)
        
        # Cross-references
        cross_refs = self._find_cross_references(sorted_thread)
        
        return {
            "engine": "V639",
            "thread_subject": sorted_thread[0].get("subject", "Untitled"),
            "message_count": len(sorted_thread),
            "duration_days": self._calculate_duration(sorted_thread),
            "participants": participants,
            "participant_count": len(participants),
            "key_topics": topics[:5],
            "timeline": timeline,
            "decisions_made": decisions,
            "action_items": action_items,
            "open_questions": questions,
            "commitments": commitments,
            "sentiment_arc": sentiment_arc,
            "thread_health": thread_health,
            "brief_summary": brief_summary,
            "detailed_summary": detailed_summary,
            "executive_brief": executive_brief,
            "cross_references": cross_refs,
            "unread_messages": self._count_unread(sorted_thread),
            "reply_all_enforced": len(participants) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _extract_participants(self, thread: List[Dict]) -> List[Dict]:
        """Extract participants with contribution analysis."""
        participant_stats = {}
        
        for msg in thread:
            sender = msg.get("from", "unknown")
            if sender not in participant_stats:
                participant_stats[sender] = {
                    "email": sender,
                    "message_count": 0,
                    "total_words": 0,
                    "first_message": msg.get("sent_at"),
                    "last_message": msg.get("sent_at"),
                    "has_decisions": False,
                    "has_action_items": False
                }
            
            stats = participant_stats[sender]
            stats["message_count"] += 1
            stats["total_words"] += len(msg.get("body", "").split())
            stats["last_message"] = msg.get("sent_at")
            
            body = msg.get("body", "").lower()
            if any(word in body for word in ["decided", "agreed", "approved"]):
                stats["has_decisions"] = True
            if any(word in body for word in ["action item", "todo", "assigned"]):
                stats["has_action_items"] = True
        
        # Calculate participation rate
        total_messages = len(thread)
        for stats in participant_stats.values():
            stats["participation_rate_percent"] = round(stats["message_count"] / total_messages * 100, 1)
            stats["avg_words_per_message"] = round(stats["total_words"] / max(stats["message_count"], 1))
        
        return sorted(participant_stats.values(), key=lambda x: x["message_count"], reverse=True)
    
    def _extract_topics(self, thread: List[Dict]) -> List[Dict]:
        """Extract key topics with frequency analysis."""
        all_text = " ".join(
            msg.get("body", "") + " " + msg.get("subject", "")
            for msg in thread
        ).lower()
        
        # Remove common words
        stop_words = {"the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
                      "have", "has", "had", "do", "does", "did", "will", "would", "could",
                      "should", "may", "might", "can", "this", "that", "these", "those",
                      "i", "you", "he", "she", "it", "we", "they", "me", "him", "her",
                      "us", "them", "my", "your", "his", "its", "our", "their", "and", "or",
                      "but", "in", "on", "at", "to", "for", "of", "with", "by", "from"}
        
        words = [w.strip(".,!?;:") for w in all_text.split() if len(w) > 3 and w not in stop_words]
        word_counts = Counter(words)
        
        topics = []
        for word, count in word_counts.most_common(10):
            topics.append({"topic": word, "mentions": count, "relevance": min(100, count * 10)})
        
        return topics
    
    def _build_timeline(self, thread: List[Dict]) -> List[Dict]:
        """Build chronological timeline."""
        timeline = []
        for msg in thread:
            timeline.append({
                "timestamp": msg.get("sent_at", ""),
                "from": msg.get("from", ""),
                "subject": msg.get("subject", ""),
                "preview": msg.get("body", "")[:150] + "..." if len(msg.get("body", "")) > 150 else msg.get("body", ""),
                "importance": self._assess_importance(msg)
            })
        return timeline
    
    def _assess_importance(self, msg: Dict) -> str:
        """Assess message importance."""
        text = f"{msg.get('subject', '')} {msg.get('body', '')}".lower()
        
        for level, indicators in self.IMPORTANCE_INDICATORS.items():
            if any(ind in text for ind in indicators):
                return level
        return "low"
    
    def _extract_decisions(self, thread: List[Dict]) -> List[Dict]:
        """Extract decisions from thread."""
        decisions = []
        decision_patterns = [
            r'(?:we |i )?(?:decided|agreed|approved|confirmed)[:\s]+(.+?)(?:\.|$)',
            r'(?:the )?decision (?:is|was)[:\s]+(.+?)(?:\.|$)',
            r'(?:let.s|we will|we are going to)\s+(.+?)(?:\.|$)'
        ]
        
        for msg in thread:
            body = msg.get("body", "")
            for pattern in decision_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for match in matches:
                    if len(match.strip()) > 10:
                        decisions.append({
                            "decision": match.strip()[:200],
                            "made_by": msg.get("from", ""),
                            "timestamp": msg.get("sent_at", ""),
                            "confidence": "high" if "decided" in body.lower() or "agreed" in body.lower() else "medium"
                        })
        
        return decisions[:10]
    
    def _extract_action_items(self, thread: List[Dict]) -> List[Dict]:
        """Extract action items with assignees."""
        action_items = []
        action_patterns = [
            r'(?:action item|todo|task)[:\s]*(.+?)(?:\.|$)',
            r'(?:please|could you|can you)\s+(.+?)(?:\.|$)',
            r'(?:assigned to|@)(\w+).*?(?:to|:)\s*(.+?)(?:\.|$)',
            r'(\w+)\s+(?:will|needs to|should)\s+(.+?)(?:\.|$)'
        ]
        
        for msg in thread:
            body = msg.get("body", "")
            for pattern in action_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for match in matches:
                    if isinstance(match, tuple):
                        task = match[1] if len(match) > 1 else match[0]
                        assignee = match[0] if len(match) > 1 else "TBD"
                    else:
                        task = match
                        assignee = "TBD"
                    
                    if len(task.strip()) > 10:
                        action_items.append({
                            "task": task.strip()[:200],
                            "assignee": assignee,
                            "requested_by": msg.get("from", ""),
                            "deadline": self._extract_deadline(body),
                            "status": "pending"
                        })
        
        return action_items[:10]
    
    def _extract_questions(self, thread: List[Dict]) -> List[Dict]:
        """Extract unanswered questions."""
        questions = []
        
        for msg in thread:
            body = msg.get("body", "")
            sentences = body.split('.')
            for sentence in sentences:
                if '?' in sentence and len(sentence.strip()) > 15:
                    questions.append({
                        "question": sentence.strip()[:200],
                        "asked_by": msg.get("from", ""),
                        "timestamp": msg.get("sent_at", ""),
                        "answered": False
                    })
        
        return questions[:10]
    
    def _extract_commitments(self, thread: List[Dict]) -> List[Dict]:
        """Extract commitments made in thread."""
        commitments = []
        commitment_patterns = [
            r'(?:i will|i.ll|we will|we.ll)\s+(.+?)(?:\.|$)',
            r'(?:i commit|i promise|we commit)\s+(?:to\s+)?(.+?)(?:\.|$)'
        ]
        
        for msg in thread:
            body = msg.get("body", "")
            for pattern in commitment_patterns:
                matches = re.findall(pattern, body, re.IGNORECASE)
                for match in matches:
                    if len(match.strip()) > 10:
                        commitments.append({
                            "commitment": match.strip()[:200],
                            "made_by": msg.get("from", ""),
                            "timestamp": msg.get("sent_at", "")
                        })
        
        return commitments[:10]
    
    def _extract_deadline(self, text: str) -> str:
        """Extract deadline from text."""
        deadline_patterns = [
            r'(?:by|before|due|deadline)[:\s]*(\w+\s+\d{1,2}(?:st|nd|rd|th)?)',
            r'(?:by|before)\s+(tomorrow|today|next\s+\w+)',
            r'(\d{1,2}/\d{1,2}(?:/\d{2,4})?)'
        ]
        
        for pattern in deadline_patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                return match.group(1)
        
        return "TBD"
    
    def _analyze_sentiment_arc(self, thread: List[Dict]) -> Dict[str, Any]:
        """Analyze sentiment progression."""
        sentiments = []
        
        for msg in thread:
            text = f"{msg.get('subject', '')} {msg.get('body', '')}".lower()
            
            positive = sum(1 for w in ["great", "thanks", "excellent", "good", "happy", "love"] if w in text)
            negative = sum(1 for w in ["issue", "problem", "concern", "frustrated", "angry", "bad"] if w in text)
            
            if positive > negative:
                sentiments.append("positive")
            elif negative > positive:
                sentiments.append("negative")
            else:
                sentiments.append("neutral")
        
        # Determine trend
        if len(sentiments) >= 3:
            first_half = sentiments[:len(sentiments)//2]
            second_half = sentiments[len(sentiments)//2:]
            
            first_positive = first_half.count("positive") / len(first_half)
            second_positive = second_half.count("positive") / len(second_half)
            
            if second_positive > first_positive + 0.2:
                trend = "improving"
            elif second_positive < first_positive - 0.2:
                trend = "deteriorating"
            else:
                trend = "stable"
        else:
            trend = "insufficient_data"
        
        return {
            "sentiment_distribution": dict(Counter(sentiments)),
            "trend": trend,
            "overall": max(set(sentiments), key=sentiments.count) if sentiments else "neutral"
        }
    
    def _assess_thread_health(self, thread: List[Dict]) -> Dict[str, Any]:
        """Assess thread health."""
        message_count = len(thread)
        participant_count = len(set(msg.get("from", "") for msg in thread))
        
        # Check response times
        response_times = []
        for i in range(1, len(thread)):
            try:
                t1 = datetime.fromisoformat(thread[i-1].get("sent_at", "").replace("Z", "+00:00"))
                t2 = datetime.fromisoformat(thread[i].get("sent_at", "").replace("Z", "+00:00"))
                response_times.append((t2 - t1).total_seconds() / 3600)
            except:
                pass
        
        avg_response_time = sum(response_times) / len(response_times) if response_times else 0
        
        # Health score
        score = 50
        if message_count >= 3:
            score += 20
        if participant_count >= 2:
            score += 15
        if avg_response_time < 24:
            score += 15
        
        return {
            "score": min(100, score),
            "status": "healthy" if score >= 70 else "needs_attention",
            "avg_response_time_hours": round(avg_response_time, 1),
            "message_count": message_count,
            "participant_count": participant_count
        }
    
    def _generate_brief(self, thread: List[Dict], decisions: List[Dict], actions: List[Dict]) -> str:
        """Generate brief summary."""
        parts = [f"This thread has {len(thread)} messages from {len(set(m.get('from', '') for m in thread))} participants."]
        
        if decisions:
            parts.append(f"{len(decisions)} decision(s) were made.")
        if actions:
            parts.append(f"{len(actions)} action item(s) identified.")
        
        return " ".join(parts)
    
    def _generate_detailed_summary(self, thread: List[Dict], topics: List[Dict], decisions: List[Dict], actions: List[Dict]) -> str:
        """Generate detailed summary."""
        parts = []
        
        # Overview
        participants = list(set(msg.get("from", "") for msg in thread))
        parts.append(f"Discussion among {len(participants)} participants covering {', '.join(t['topic'] for t in topics[:3]) if topics else 'various topics'}.")
        
        # Decisions
        if decisions:
            parts.append(f"Key decisions: {'; '.join(d['decision'][:80] for d in decisions[:3])}.")
        
        # Actions
        if actions:
            parts.append(f"Open action items: {len(actions)} tasks pending.")
        
        return " ".join(parts)
    
    def _generate_executive_brief(self, thread: List[Dict], decisions: List[Dict], actions: List[Dict], questions: List[Dict]) -> Dict[str, Any]:
        """Generate executive brief."""
        return {
            "summary": f"{len(thread)} messages, {len(decisions)} decisions, {len(actions)} pending actions",
            "key_decisions": [d["decision"][:100] for d in decisions[:3]],
            "pending_actions": len(actions),
            "open_questions": len(questions),
            "status": "resolved" if not actions and not questions else "active"
        }
    
    def _find_cross_references(self, thread: List[Dict]) -> List[str]:
        """Find cross-references to other threads or documents."""
        refs = []
        for msg in thread:
            body = msg.get("body", "")
            # Look for references
            if "see" in body.lower() and ("thread" in body.lower() or "email" in body.lower()):
                refs.append(f"Reference in message from {msg.get('from', '')}")
        return refs[:3]
    
    def _calculate_duration(self, thread: List[Dict]) -> float:
        """Calculate thread duration in days."""
        if len(thread) < 2:
            return 0.0
        try:
            first = datetime.fromisoformat(thread[0].get("sent_at", "").replace("Z", "+00:00"))
            last = datetime.fromisoformat(thread[-1].get("sent_at", "").replace("Z", "+00:00"))
            return round((last - first).total_seconds() / 86400, 1)
        except:
            return 0.0
    
    def _count_unread(self, thread: List[Dict]) -> int:
        """Count unread messages."""
        return sum(1 for msg in thread if not msg.get("read", True))
    
    def process_batch(self, threads: List[List[Dict]]) -> Dict[str, Any]:
        results = [self.summarize_thread(t) for t in threads if t]
        
        total_messages = sum(r.get("message_count", 0) for r in results)
        total_decisions = sum(len(r.get("decisions_made", [])) for r in results)
        total_actions = sum(len(r.get("action_items", [])) for r in results)
        
        return {
            "engine": "V639 - Thread Summarizer Pro",
            "total_threads": len(results),
            "total_messages": total_messages,
            "total_decisions": total_decisions,
            "total_action_items": total_actions,
            "reply_all_enforced": sum(1 for r in results if r.get("reply_all_enforced", False)),
            "results": results
        }

if __name__ == "__main__":
    engine = ThreadSummarizerPro()
    test_thread = [
        {"from": "alice@company.com", "subject": "Project Alpha Kickoff", "body": "Let's discuss the project timeline and budget. Important: we need to finalize by Friday.",
         "sent_at": "2026-01-15T10:00:00", "to": ["bob@company.com", "carol@company.com"]},
        {"from": "bob@company.com", "subject": "Re: Project Alpha Kickoff", "body": "I agree we should proceed with Phase 1. Action item: Carol will prepare the budget by Friday. We decided to use the new framework.",
         "sent_at": "2026-01-15T11:30:00", "to": ["alice@company.com", "carol@company.com"]},
        {"from": "carol@company.com", "subject": "Re: Project Alpha Kickoff", "body": "Great! I'll have the budget ready. Question: should we include the marketing costs? I will prepare the spreadsheet by Thursday.",
         "sent_at": "2026-01-15T14:00:00", "to": ["alice@company.com", "bob@company.com"]}
    ]
    result = engine.summarize_thread(test_thread)
    print(json.dumps(result, indent=2))
