#!/usr/bin/env python3
"""
V907: Smart Email Response Generator
Generates context-aware, personalized email responses with tone matching and reply-all enforcement.
"""

import json
from datetime import datetime
from typing import Dict, List, Optional

class SmartEmailResponseGenerator:
    def __init__(self):
        self.responses = []
        self.tone_profiles = {
            'professional': {'formality': 'high', 'emoji': False, 'signature': True},
            'friendly': {'formality': 'medium', 'emoji': True, 'signature': True},
            'urgent': {'formality': 'high', 'emoji': False, 'signature': True, 'priority': 'high'},
            'casual': {'formality': 'low', 'emoji': True, 'signature': False}
        }
    
    def analyze_incoming_email(self, email_id: str, subject: str, body: str,
                              sender: str, recipients: List[str],
                              cc: List[str] = None, thread_history: List[Dict] = None) -> Dict:
        """Analyze incoming email for response generation"""
        
        # Detect tone from email
        tone = self._detect_tone(body)
        
        # Detect language
        language = self._detect_language(body)
        
        # Extract key points
        key_points = self._extract_key_points(body)
        
        # Determine reply-all requirement
        total_recipients = len(recipients) + len(cc or [])
        reply_all_required = total_recipients > 1
        
        # Check thread context
        is_reply = thread_history and len(thread_history) > 0
        thread_depth = len(thread_history) if thread_history else 0
        
        analysis = {
            'email_id': email_id,
            'subject': subject,
            'sender': sender,
            'recipients': recipients,
            'cc': cc or [],
            'detected_tone': tone,
            'language': language,
            'key_points': key_points,
            'reply_all_required': reply_all_required,
            'total_recipients': total_recipients,
            'is_reply': is_reply,
            'thread_depth': thread_depth,
            'analyzed_at': datetime.now().isoformat()
        }
        
        return {
            'success': True,
            'analysis': analysis,
            'reply_all': reply_all_required
        }
    
    def _detect_tone(self, text: str) -> str:
        """Detect tone from email text"""
        text_lower = text.lower()
        
        urgent_indicators = ['urgent', 'asap', 'immediately', 'critical', 'emergency', '!!!']
        friendly_indicators = ['thanks', 'thank you', 'great', 'awesome', 'hope', 'happy', '😊', '👍']
        formal_indicators = ['dear', 'sincerely', 'regards', 'respectfully', 'please find']
        
        urgent_score = sum(1 for ind in urgent_indicators if ind in text_lower)
        friendly_score = sum(1 for ind in friendly_indicators if ind in text_lower)
        formal_score = sum(1 for ind in formal_indicators if ind in text_lower)
        
        if urgent_score > 2:
            return 'urgent'
        elif friendly_score > formal_score:
            return 'friendly'
        elif formal_score > 2:
            return 'professional'
        else:
            return 'professional'
    
    def _detect_language(self, text: str) -> str:
        """Simple language detection"""
        # Simplified - in production use langdetect library
        portuguese_words = ['obrigado', 'olá', 'bom', 'como', 'você', 'não', 'sim']
        spanish_words = ['gracias', 'hola', 'bueno', 'como', 'usted', 'no', 'sí']
        
        text_lower = text.lower()
        pt_score = sum(1 for word in portuguese_words if word in text_lower)
        es_score = sum(1 for word in spanish_words if word in text_lower)
        
        if pt_score > es_score and pt_score > 2:
            return 'pt'
        elif es_score > 2:
            return 'es'
        else:
            return 'en'
    
    def _extract_key_points(self, body: str) -> List[str]:
        """Extract key points from email body"""
        sentences = body.split('.')
        key_points = []
        
        for sentence in sentences:
            sentence = sentence.strip()
            if len(sentence) > 20 and '?' in sentence:
                key_points.append(f"Question: {sentence}")
            elif any(word in sentence.lower() for word in ['need', 'require', 'please', 'must']):
                key_points.append(f"Request: {sentence}")
        
        return key_points[:5]
    
    def generate_response(self, analysis: Dict, response_type: str = 'acknowledgment',
                         custom_context: Dict = None) -> Dict:
        """Generate smart email response"""
        
        tone = analysis['detected_tone']
        reply_all = analysis['reply_all_required']
        key_points = analysis['key_points']
        
        # Generate response based on type and tone
        if response_type == 'acknowledgment':
            body = self._generate_acknowledgment(analysis, tone)
        elif response_type == 'detailed':
            body = self._generate_detailed_response(analysis, tone)
        elif response_type == 'question':
            body = self._generate_question_response(analysis, tone)
        else:
            body = self._generate_generic_response(analysis, tone)
        
        # Determine recipients
        to = analysis['recipients'] if reply_all else [analysis['sender']]
        cc = analysis['cc'] if reply_all else []
        
        response = {
            'original_email_id': analysis['email_id'],
            'subject': f"Re: {analysis['subject']}",
            'body': body,
            'to': to,
            'cc': cc,
            'reply_all': reply_all,
            'tone_matched': tone,
            'response_type': response_type,
            'generated_at': datetime.now().isoformat()
        }
        
        self.responses.append(response)
        
        return {
            'success': True,
            'response': response,
            'reply_all_enforced': reply_all,
            'total_recipients': len(to) + len(cc)
        }
    
    def _generate_acknowledgment(self, analysis: Dict, tone: str) -> str:
        """Generate acknowledgment response"""
        greeting = self._get_greeting(tone, analysis['sender'])
        closing = self._get_closing(tone)
        
        if tone == 'urgent':
            return f"""{greeting}

I've received your urgent email regarding "{analysis['subject']}" and am addressing it immediately.

{chr(10).join(f'• {point}' for point in analysis['key_points']) if analysis['key_points'] else 'I understand the urgency of this matter.'}

I'll provide you with an update within the hour.

{closing}"""
        
        elif tone == 'friendly':
            return f"""{greeting}

Thanks for reaching out about "{analysis['subject']}"! 😊

{chr(10).join(f'• {point}' for point in analysis['key_points']) if analysis['key_points'] else 'I appreciate you sharing this with me.'}

I'll get back to you with a detailed response shortly. Have a great day!

{closing}"""
        
        else:  # professional
            return f"""{greeting}

Thank you for your email regarding "{analysis['subject']}".

{chr(10).join(f'• {point}' for point in analysis['key_points']) if analysis['key_points'] else 'I have received your message and am reviewing the details.'}

I will provide a comprehensive response within 24 hours.

{closing}"""
    
    def _generate_detailed_response(self, analysis: Dict, tone: str) -> str:
        """Generate detailed response"""
        greeting = self._get_greeting(tone, analysis['sender'])
        closing = self._get_closing(tone)
        
        return f"""{greeting}

Thank you for your email regarding "{analysis['subject']}".

I've carefully reviewed your message and here are my responses to your key points:

{chr(10).join(f'• {point} - I will address this item and provide specific details.' for point in analysis['key_points']) if analysis['key_points'] else 'I have analyzed your request and will provide detailed information.'}

If you have any additional questions or need clarification, please don't hesitate to ask.

{closing}"""
    
    def _generate_question_response(self, analysis: Dict, tone: str) -> str:
        """Generate response with clarifying questions"""
        greeting = self._get_greeting(tone, analysis['sender'])
        closing = self._get_closing(tone)
        
        return f"""{greeting}

Thank you for your email about "{analysis['subject']}".

To provide you with the most accurate and helpful response, I have a few clarifying questions:

1. Could you provide more details about the specific requirements?
2. What is your timeline for this request?
3. Are there any constraints or preferences I should be aware of?

Once I have this information, I'll be able to give you a comprehensive answer.

{closing}"""
    
    def _generate_generic_response(self, analysis: Dict, tone: str) -> str:
        """Generate generic response"""
        greeting = self._get_greeting(tone, analysis['sender'])
        closing = self._get_closing(tone)
        
        return f"""{greeting}

I've received your email regarding "{analysis['subject']}" and am reviewing it now.

I'll respond with more details shortly.

{closing}"""
    
    def _get_greeting(self, tone: str, sender: str) -> str:
        """Get appropriate greeting based on tone"""
        greetings = {
            'professional': f"Dear {sender},",
            'friendly': f"Hi {sender}! 👋",
            'urgent': f"Dear {sender},",
            'casual': f"Hey {sender},"
        }
        return greetings.get(tone, greetings['professional'])
    
    def _get_closing(self, tone: str) -> str:
        """Get appropriate closing based on tone"""
        closings = {
            'professional': "Best regards,\n[Your Name]\n+1 302 464 0950\nkleber@ziontechgroup.com",
            'friendly': "Thanks again! 😊\n\nBest,\n[Your Name]\n+1 302 464 0950",
            'urgent': "Regards,\n[Your Name]\n+1 302 464 0950\nkleber@ziontechgroup.com",
            'casual': "Cheers,\n[Your Name]"
        }
        return closings.get(tone, closings['professional'])
    
    def generate_report(self) -> str:
        """Generate comprehensive report"""
        total_responses = len(self.responses)
        reply_all_count = sum(1 for r in self.responses if r['reply_all'])
        
        report = f"""
✉️ SMART EMAIL RESPONSE GENERATOR REPORT (V907)
{'='*60}

RESPONSE OVERVIEW:
- Total Responses Generated: {total_responses}
- Reply-All Enforcement Rate: {reply_all_count / max(total_responses, 1) * 100:.1f}%
- Tone Matching: Active

CAPABILITIES:
- Context-aware response generation
- Automatic tone detection and matching
- Multi-language support (EN, PT, ES)
- Key point extraction and addressing
- Reply-all enforcement for multi-recipient emails
- Thread context awareness
- Personalized greetings and closings

RESPONSE TYPES:
- Acknowledgment (quick confirmation)
- Detailed (comprehensive answer)
- Question (clarifying questions)
- Generic (standard response)

TONE PROFILES:
- Professional (formal, no emoji)
- Friendly (casual, emoji enabled)
- Urgent (high priority, immediate)
- Casual (informal, relaxed)

REPLY-ALL ENFORCEMENT:
✅ Detects multi-recipient emails automatically
✅ Enforces reply-all when recipients > 1
✅ Includes all CC recipients
✅ Prevents accidental reply-sender-only
✅ Maintains thread context

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Contact: +1 302 464 0950 | kleber@ziontechgroup.com
"""
        return report


def analyze_email_content(email_text: str) -> Dict:
    """Analyze email for response generation requests"""
    email_keywords = ['email', 'response', 'reply', 'generate', 'answer']
    
    has_email = any(kw in email_text.lower() for kw in email_keywords)
    
    return {
        'email_type': 'email_response',
        'response_request': has_email,
        'reply_all_required': True,
        'priority': 'high' if has_email else 'medium'
    }


if __name__ == '__main__':
    engine = SmartEmailResponseGenerator()
    
    # Analyze email
    analysis = engine.analyze_incoming_email(
        'email-001',
        'Project deadline question',
        'Hi! When is the project deadline? Can we extend it? Thanks!',
        'client@company.com',
        ['pm@company.com', 'dev@company.com'],
        ['manager@company.com']
    )
    
    # Generate response
    response = engine.generate_response(analysis['analysis'], 'acknowledgment')
    
    print(engine.generate_report())
    print(f"\nGenerated Response: {json.dumps(response, indent=2)}")
