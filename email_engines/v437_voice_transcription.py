#!/usr/bin/env python3
"""
V437: AI Email Voice Transcription
Converts voice messages and audio attachments to text with speaker
identification, sentiment analysis, and action item extraction.
Case-by-case analysis.
Enforces reply-all for multi-recipient transcription results.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V437VoiceTranscription:
    """Transcribes voice messages and extracts insights"""
    
    AUDIO_FORMATS = {
        "mp3": {"mime": "audio/mpeg", "max_duration": 300},
        "wav": {"mime": "audio/wav", "max_duration": 300},
        "m4a": {"mime": "audio/mp4", "max_duration": 300},
        "ogg": {"mime": "audio/ogg", "max_duration": 300},
        "webm": {"mime": "audio/webm", "max_duration": 300}
    }
    
    SPEAKER_PATTERNS = {
        "formal": ["mr.", "mrs.", "ms.", "dr.", "professor"],
        "casual": ["hey", "hi", "what's up"],
        "professional": ["regarding", "project", "deadline", "meeting"]
    }
    
    def detect_audio_attachments(self, attachments: List[Dict]) -> List[Dict]:
        """Detect audio attachments"""
        audio_files = []
        
        for attachment in attachments:
            filename = attachment.get("filename", "").lower()
            content_type = attachment.get("content_type", "").lower()
            
            for fmt, config in self.AUDIO_FORMATS.items():
                if filename.endswith(f".{fmt}") or config["mime"] in content_type:
                    audio_files.append({
                        "filename": attachment.get("filename"),
                        "format": fmt,
                        "size": attachment.get("size", 0),
                        "duration_estimate": self._estimate_duration(attachment.get("size", 0))
                    })
                    break
        
        return audio_files
    
    def _estimate_duration(self, size_bytes: int) -> int:
        """Estimate audio duration from file size"""
        # Rough estimate: 1MB ≈ 1 minute for typical voice recording
        return max(1, size_bytes // (1024 * 1024))
    
    def simulate_transcription(self, audio_file: Dict) -> Dict:
        """Simulate transcription (in production, use Whisper/AssemblyAI/etc.)"""
        # This is a simulation - real implementation would call transcription API
        duration = audio_file.get("duration_estimate", 1)
        
        # Simulate transcription result
        word_count = duration * 150  # ~150 words per minute
        speakers = min(3, max(1, duration // 2))  # Estimate speakers
        
        return {
            "filename": audio_file.get("filename"),
            "duration_minutes": duration,
            "word_count": word_count,
            "speakers_detected": speakers,
            "confidence": 0.92,
            "transcript": f"[Simulated transcript: {word_count} words from {speakers} speaker(s)]",
            "language": "en"
        }
    
    def identify_speakers(self, transcript: str) -> Dict:
        """Identify speakers in transcript"""
        # Simple speaker detection based on patterns
        speakers = []
        lines = transcript.split('\n')
        
        for line in lines:
            # Check for speaker labels like "Speaker 1:" or "John:"
            speaker_match = re.match(r'^([A-Za-z\s]+):', line)
            if speaker_match:
                speaker_name = speaker_match.group(1).strip()
                if speaker_name not in speakers:
                    speakers.append(speaker_name)
        
        # Analyze speaker characteristics
        speaker_analysis = []
        for speaker in speakers:
            speaker_lines = [line for line in lines if line.startswith(f"{speaker}:")]
            speaker_text = " ".join(speaker_lines)
            
            # Determine formality level
            formality_score = 0
            for formality_type, patterns in self.SPEAKER_PATTERNS.items():
                for pattern in patterns:
                    if pattern in speaker_text.lower():
                        formality_score += 1
            
            speaker_analysis.append({
                "speaker": speaker,
                "lines": len(speaker_lines),
                "formality": "formal" if formality_score > 2 else "casual",
                "dominant": len(speaker_lines) > len(lines) / 2
            })
        
        return {
            "speakers": speakers,
            "total_speakers": len(speakers),
            "analysis": speaker_analysis
        }
    
    def extract_action_items(self, transcript: str) -> List[Dict]:
        """Extract action items from transcript"""
        action_items = []
        
        # Patterns for action items
        patterns = [
            r'(?:please|could you|can you)\s+(.+?)(?:\.|$)',
            r'(?:need to|have to|must)\s+(.+?)(?:\.|$)',
            r'(?:action item|task|todo)[:\s]+(.+?)(?:\.|$)',
            r'(?:by|before|due)\s+(.+?)(?:\.|$)'
        ]
        
        for pattern in patterns:
            matches = re.finditer(pattern, transcript, re.IGNORECASE)
            for match in matches:
                action_text = match.group(1).strip()
                if len(action_text) > 10:  # Filter out short matches
                    action_items.append({
                        "action": action_text,
                        "confidence": 0.8,
                        "source": "transcript"
                    })
        
        return action_items[:10]  # Limit to top 10
    
    def analyze_sentiment(self, transcript: str) -> Dict:
        """Analyze sentiment of transcript"""
        text_lower = transcript.lower()
        
        # Simple sentiment analysis
        positive_words = ["great", "excellent", "good", "happy", "pleased", "thanks", "appreciate"]
        negative_words = ["bad", "poor", "unhappy", "disappointed", "problem", "issue", "concern"]
        
        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)
        
        total = positive_count + negative_count
        if total == 0:
            sentiment = "neutral"
            score = 0.5
        else:
            score = positive_count / total
            sentiment = "positive" if score > 0.6 else "negative" if score < 0.4 else "neutral"
        
        return {
            "sentiment": sentiment,
            "score": round(score, 2),
            "positive_indicators": positive_count,
            "negative_indicators": negative_count
        }
    
    def generate_summary(self, transcript: str, speakers: Dict) -> Dict:
        """Generate summary of transcript"""
        words = transcript.split()
        sentences = re.split(r'[.!?]+', transcript)
        
        # Extract key topics (simplified)
        word_freq = {}
        for word in words:
            word_lower = word.lower().strip('.,!?')
            if len(word_lower) > 4:  # Skip short words
                word_freq[word_lower] = word_freq.get(word_lower, 0) + 1
        
        top_words = sorted(word_freq.items(), key=lambda x: x[1], reverse=True)[:5]
        
        return {
            "word_count": len(words),
            "sentence_count": len(sentences),
            "speakers": speakers["total_speakers"],
            "key_topics": [word for word, _ in top_words],
            "summary": f"Conversation with {speakers['total_speakers']} speaker(s) covering {', '.join([word for word, _ in top_words[:3]])}"
        }
    
    def process(self, email: Dict) -> Dict:
        """Process email with voice attachments"""
        attachments = email.get('attachments', [])
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Detect audio files
        audio_files = self.detect_audio_attachments(attachments)
        
        if not audio_files:
            return {
                "engine": "V437 Voice Transcription",
                "timestamp": datetime.now().isoformat(),
                "has_audio": False,
                "message": "No audio attachments detected"
            }
        
        # Process each audio file
        transcriptions = []
        all_action_items = []
        all_sentiments = []
        
        for audio_file in audio_files:
            # Transcribe
            transcription = self.simulate_transcription(audio_file)
            
            # Analyze speakers
            speakers = self.identify_speakers(transcription["transcript"])
            
            # Extract action items
            action_items = self.extract_action_items(transcription["transcript"])
            all_action_items.extend(action_items)
            
            # Analyze sentiment
            sentiment = self.analyze_sentiment(transcription["transcript"])
            all_sentiments.append(sentiment)
            
            # Generate summary
            summary = self.generate_summary(transcription["transcript"], speakers)
            
            transcriptions.append({
                "audio_file": audio_file,
                "transcription": transcription,
                "speakers": speakers,
                "action_items": action_items,
                "sentiment": sentiment,
                "summary": summary
            })
        
        # Calculate overall sentiment
        avg_sentiment_score = sum(s["score"] for s in all_sentiments) / len(all_sentiments)
        overall_sentiment = "positive" if avg_sentiment_score > 0.6 else "negative" if avg_sentiment_score < 0.4 else "neutral"
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V437 Voice Transcription",
            "timestamp": datetime.now().isoformat(),
            "has_audio": True,
            "audio_files_count": len(audio_files),
            "transcriptions": transcriptions,
            "overall_action_items": all_action_items,
            "overall_sentiment": {
                "sentiment": overall_sentiment,
                "score": round(avg_sentiment_score, 2)
            },
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Transcription shared with {len(all_recipients)} recipients" if should_reply_all else "Single recipient transcription"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "client@example.com",
        "subject": "Voice message",
        "body": "Please listen to the attached voice message",
        "to": ["manager@company.com"],
        "cc": ["team@company.com"],
        "attachments": [
            {
                "filename": "meeting_notes.mp3",
                "size": 5242880,  # 5MB
                "content_type": "audio/mpeg"
            }
        ]
    }
    
    transcriber = V437VoiceTranscription()
    result = transcriber.process(test_email)
    print(json.dumps(result, indent=2))
