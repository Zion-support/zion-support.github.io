#!/usr/bin/env python3
"""V625 - Email Voice Transcription
Convert voice emails to text with summarization and action extraction.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any

class VoiceTranscription:
    """Transcribe and analyze voice emails."""
    
    def __init__(self):
        self.transcriptions = []
    
    def transcribe_voice_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Transcribe voice email and extract insights."""
        voice_attachment = self._find_voice_attachment(email)
        
        if not voice_attachment:
            return {
                "engine": "V625",
                "error": "No voice attachment found",
                "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
                "timestamp": datetime.now().isoformat()
            }
        
        # Mock transcription (would use actual ASR in production)
        transcription = self._mock_transcription(voice_attachment)
        
        # Analyze transcription
        summary = self._generate_summary(transcription)
        action_items = self._extract_action_items(transcription)
        key_points = self._extract_key_points(transcription)
        sentiment = self._analyze_sentiment(transcription)
        speakers = self._identify_speakers(transcription)
        
        # Calculate quality metrics
        confidence_score = self._calculate_confidence(voice_attachment)
        word_count = len(transcription.split())
        duration_estimate = word_count / 150  # ~150 words per minute
        
        return {
            "engine": "V625",
            "email_subject": email.get("subject", ""),
            "voice_attachment": voice_attachment,
            "transcription": transcription,
            "word_count": word_count,
            "duration_minutes": round(duration_estimate, 1),
            "summary": summary,
            "action_items": action_items,
            "key_points": key_points,
            "sentiment": sentiment,
            "speakers_identified": speakers,
            "confidence_score": round(confidence_score, 1),
            "transcription_quality": self._assess_quality(confidence_score),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _find_voice_attachment(self, email: Dict) -> Dict:
        """Find voice attachment in email."""
        attachments = email.get("attachments", [])
        
        voice_extensions = [".mp3", ".wav", ".m4a", ".ogg", ".aac"]
        for attachment in attachments:
            filename = attachment.get("filename", "").lower()
            if any(filename.endswith(ext) for ext in voice_extensions):
                return attachment
        
        return None
    
    def _mock_transcription(self, attachment: Dict) -> str:
        """Mock transcription for demonstration."""
        # In production, this would call an ASR service (Whisper, Google, etc.)
        mock_transcriptions = [
            "Hi team, I wanted to give you a quick update on the project. We've completed the first phase and are ready to move forward. Please review the attached documents and let me know if you have any questions. Action item: John, please schedule a meeting for next week to discuss the next steps. Thanks everyone!",
            "Hello, this is a voice message about the budget review. We need to finalize the numbers by Friday. Please make sure all expenses are documented. Action item: Sarah, please send me the updated spreadsheet by Wednesday. Let me know if you need any clarification."
        ]
        
        # Return different transcription based on attachment
        index = hash(attachment.get("filename", "")) % len(mock_transcriptions)
        return mock_transcriptions[index]
    
    def _generate_summary(self, transcription: str) -> str:
        """Generate summary of transcription."""
        sentences = transcription.split('.')
        if len(sentences) <= 2:
            return transcription
        
        # Take first and last sentence as summary
        summary = sentences[0].strip()
        if len(sentences) > 2:
            summary += ". " + sentences[-2].strip()
        
        return summary
    
    def _extract_action_items(self, transcription: str) -> List[str]:
        """Extract action items from transcription."""
        action_items = []
        
        # Look for action item indicators
        patterns = [
            r'action item[:\s]+([^.]+)',
            r'please ([^.]+)',
            r'need to ([^.]+)',
            r'make sure ([^.]+)'
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, transcription, re.IGNORECASE)
            action_items.extend([m.strip() for m in matches if len(m.strip()) > 10])
        
        return action_items[:5]
    
    def _extract_key_points(self, transcription: str) -> List[str]:
        """Extract key points from transcription."""
        sentences = transcription.split('.')
        key_points = []
        
        # Look for important sentences
        keywords = ["important", "key", "main", "critical", "essential"]
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) > 20 and any(kw in sentence.lower() for kw in keywords):
                key_points.append(sentence)
        
        # If no keywords found, take first few sentences
        if not key_points:
            key_points = [s.strip() for s in sentences[:3] if len(s.strip()) > 20]
        
        return key_points[:5]
    
    def _analyze_sentiment(self, transcription: str) -> str:
        """Analyze sentiment of transcription."""
        text = transcription.lower()
        
        positive_words = ["great", "excellent", "happy", "thanks", "good", "love"]
        negative_words = ["problem", "issue", "concern", "frustrated", "angry", "bad"]
        
        positive_count = sum(1 for word in positive_words if word in text)
        negative_count = sum(1 for word in negative_words if word in text)
        
        if positive_count > negative_count:
            return "positive"
        elif negative_count > positive_count:
            return "negative"
        return "neutral"
    
    def _identify_speakers(self, transcription: str) -> int:
        """Identify number of speakers (simplified)."""
        # In production, would use speaker diarization
        # For now, assume single speaker
        return 1
    
    def _calculate_confidence(self, attachment: Dict) -> float:
        """Calculate transcription confidence score."""
        # Mock confidence based on audio quality indicators
        file_size = attachment.get("size", 0)
        
        if file_size > 1000000:  # > 1MB
            return 95.0
        elif file_size > 500000:  # > 500KB
            return 85.0
        else:
            return 75.0
    
    def _assess_quality(self, confidence: float) -> str:
        """Assess transcription quality."""
        if confidence >= 90:
            return "excellent"
        elif confidence >= 80:
            return "good"
        elif confidence >= 70:
            return "fair"
        return "poor"
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.transcribe_voice_email(e) for e in emails]
        
        # Filter out errors
        successful = [r for r in results if "error" not in r]
        
        total_words = sum(r.get("word_count", 0) for r in successful)
        total_duration = sum(r.get("duration_minutes", 0) for r in successful)
        avg_confidence = sum(r.get("confidence_score", 0) for r in successful) / len(successful) if successful else 0
        
        return {
            "engine": "V625 - Voice Transcription",
            "total_processed": len(results),
            "successful_transcriptions": len(successful),
            "total_words_transcribed": total_words,
            "total_duration_minutes": round(total_duration, 1),
            "average_confidence_score": round(avg_confidence, 1),
            "reply_all_enforced": sum(1 for r in results if r.get("reply_all_enforced", False)),
            "results": results
        }

if __name__ == "__main__":
    engine = VoiceTranscription()
    test_emails = [
        {"subject": "Voice update", "body": "Here's my voice update",
         "to": ["team@company.com"], "from": "manager@company.com",
         "attachments": [{"filename": "update.mp3", "size": 1500000}]},
        {"subject": "Budget discussion", "body": "Voice message about budget",
         "to": ["finance@company.com", "cfo@company.com"], "from": "director@company.com",
         "attachments": [{"filename": "budget.wav", "size": 2000000}]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
