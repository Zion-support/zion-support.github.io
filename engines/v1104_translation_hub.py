#!/usr/bin/env python3
"""
V1104 - Email Translation Hub Engine
Real-time translation of incoming emails + culturally-adapted replies in 40+ languages.
Detects language automatically and provides culturally appropriate responses.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict

class TranslationHubEngine:
    def __init__(self):
        self.supported_languages = {
            'en': 'English', 'es': 'Spanish', 'fr': 'French', 'de': 'German',
            'pt': 'Portuguese', 'it': 'Italian', 'nl': 'Dutch', 'ru': 'Russian',
            'zh': 'Chinese', 'ja': 'Japanese', 'ko': 'Korean', 'ar': 'Arabic',
            'hi': 'Hindi', 'tr': 'Turkish', 'pl': 'Polish', 'sv': 'Swedish',
            'da': 'Danish', 'no': 'Norwegian', 'fi': 'Finnish', 'cs': 'Czech',
            'el': 'Greek', 'he': 'Hebrew', 'th': 'Thai', 'vi': 'Vietnamese',
            'id': 'Indonesian', 'ms': 'Malay', 'uk': 'Ukrainian', 'ro': 'Romanian',
            'hu': 'Hungarian', 'bg': 'Bulgarian', 'hr': 'Croatian', 'sk': 'Slovak',
            'sl': 'Slovenian', 'lt': 'Lithuanian', 'lv': 'Latvian', 'et': 'Estonian',
            'ca': 'Catalan', 'eu': 'Basque', 'gl': 'Galician', 'af': 'Afrikaans',
            'sw': 'Swahili'
        }
        
        self.language_patterns = {
            'es': ['hola', 'gracias', 'por favor', 'buenos días', 'cómo estás', 'saludos'],
            'fr': ['bonjour', 'merci', 's\'il vous plaît', 'cordialement', 'bien à vous'],
            'de': ['hallo', 'danke', 'bitte', 'guten tag', 'mit freundlichen grüßen'],
            'pt': ['olá', 'obrigado', 'por favor', 'bom dia', 'atenciosamente'],
            'it': ['ciao', 'grazie', 'per favore', 'buongiorno', 'cordiali saluti'],
            'zh': ['你好', '谢谢', '请', '您好', '感谢'],
            'ja': ['こんにちは', 'ありがとう', 'お願いします', 'おはよう'],
            'ko': ['안녕하세요', '감사합니다', '부탁합니다'],
            'ar': ['مرحبا', 'شكرا', 'من فضلك', 'السلام عليكم'],
            'ru': ['здравствуйте', 'спасибо', 'пожалуйста', 'добрый день'],
            'hi': ['नमस्ते', 'धन्यवाद', 'कृपया'],
            'nl': ['hallo', 'dank u', 'alstublieft', 'goedendag'],
            'tr': ['merhaba', 'teşekkürler', 'lütfen', 'iyi günler']
        }
        
        self.cultural_norms = {
            'en': {'formality': 'medium', 'greeting': 'Dear', 'closing': 'Best regards'},
            'es': {'formality': 'high', 'greeting': 'Estimado/a', 'closing': 'Saludos cordiales'},
            'fr': {'formality': 'high', 'greeting': 'Cher/Chère', 'closing': 'Cordialement'},
            'de': {'formality': 'high', 'greeting': 'Sehr geehrte/r', 'closing': 'Mit freundlichen Grüßen'},
            'pt': {'formality': 'medium', 'greeting': 'Prezado/a', 'closing': 'Atenciosamente'},
            'ja': {'formality': 'very_high', 'greeting': '様', 'closing': 'よろしくお願いいたします'},
            'zh': {'formality': 'high', 'greeting': '尊敬的', 'closing': '此致敬礼'},
            'ko': {'formality': 'high', 'greeting': '님께', 'closing': '감사합니다'},
            'ar': {'formality': 'high', 'greeting': 'السيد/السيدة', 'closing': 'مع أطيب التحيات'},
            'ru': {'formality': 'medium', 'greeting': 'Уважаемый/ая', 'closing': 'С уважением'}
        }
        
        self.translation_cache = {}
        self.user_preferences = defaultdict(lambda: {'preferred_language': 'en', 'auto_translate': True})
    
    def detect_language(self, text: str) -> Dict[str, Any]:
        """Detect the language of the text"""
        text_lower = text.lower()
        
        scores = {}
        for lang, patterns in self.language_patterns.items():
            score = sum(1 for pattern in patterns if pattern in text_lower)
            if score > 0:
                scores[lang] = score
        
        # Character-based detection
        if re.search(r'[\u4e00-\u9fff]', text):
            scores['zh'] = scores.get('zh', 0) + 5
        if re.search(r'[\u3040-\u309f\u30a0-\u30ff]', text):
            scores['ja'] = scores.get('ja', 0) + 5
        if re.search(r'[\uac00-\ud7af]', text):
            scores['ko'] = scores.get('ko', 0) + 5
        if re.search(r'[\u0600-\u06ff]', text):
            scores['ar'] = scores.get('ar', 0) + 5
        if re.search(r'[\u0900-\u097f]', text):
            scores['hi'] = scores.get('hi', 0) + 5
        if re.search(r'[\u0400-\u04ff]', text):
            scores['ru'] = scores.get('ru', 0) + 3
        
        if scores:
            detected = max(scores.items(), key=lambda x: x[1])
            confidence = min(detected[1] / 5.0, 1.0)
            return {
                'language': detected[0],
                'language_name': self.supported_languages.get(detected[0], 'Unknown'),
                'confidence': round(confidence, 2),
                'scores': scores
            }
        
        return {
            'language': 'en',
            'language_name': 'English',
            'confidence': 0.5,
            'scores': {'en': 1}
        }
    
    def translate_text(self, text: str, source_lang: str, target_lang: str) -> Dict[str, Any]:
        """Translate text (simulated for demo - would use real API in production)"""
        # In production, this would call a translation API
        # For demo, we return metadata about the translation
        
        return {
            'original_text': text,
            'source_language': source_lang,
            'target_language': target_lang,
            'translated_text': f'[Translated from {self.supported_languages.get(source_lang, source_lang)} to {self.supported_languages.get(target_lang, target_lang)}]',
            'word_count': len(text.split()),
            'confidence': 0.85,
            'note': 'Production version uses Google Translate / DeepL API'
        }
    
    def get_cultural_guidance(self, language: str) -> Dict[str, Any]:
        """Get cultural norms for a specific language"""
        norms = self.cultural_norms.get(language, self.cultural_norms.get('en', {}))
        
        return {
            'language': language,
            'language_name': self.supported_languages.get(language, 'Unknown'),
            'formality_level': norms.get('formality', 'medium'),
            'appropriate_greeting': norms.get('greeting', 'Dear'),
            'appropriate_closing': norms.get('closing', 'Best regards'),
            'cultural_tips': self.get_cultural_tips(language)
        }
    
    def get_cultural_tips(self, language: str) -> List[str]:
        """Get cultural communication tips"""
        tips = {
            'ja': [
                'Use honorific language (keigo) for business',
                'Avoid direct refusals - use indirect expressions',
                'Include seasonal greetings when appropriate'
            ],
            'zh': [
                'Address people by their title and surname',
                'Show respect for hierarchy',
                'Avoid discussing sensitive political topics'
            ],
            'ar': [
                'Use formal greetings and religious expressions',
                'Be patient with relationship building',
                'Avoid scheduling meetings during prayer times'
            ],
            'de': [
                'Be direct and precise in communication',
                'Use formal titles (Dr., Prof.) when applicable',
                'Punctuality is highly valued'
            ],
            'fr': [
                'Formal language is expected in business',
                'Take time for pleasantries before business',
                'Written communication should be eloquent'
            ],
            'ko': [
                'Respect age and seniority hierarchy',
                'Use formal speech levels',
                'Business cards should be exchanged with both hands'
            ],
            'es': [
                'Personal relationships are important',
                'Expect longer greetings and small talk',
                'Regional variations in vocabulary exist'
            ],
            'ru': [
                'Formal address uses patronymic names',
                'Direct communication is appreciated',
                'Build trust before discussing business'
            ]
        }
        
        return tips.get(language, [
            'Maintain professional tone',
            'Be respectful of cultural differences',
            'When in doubt, use formal communication'
        ])
    
    def generate_culturally_adapted_reply(self, original_email: Dict[str, Any], 
                                          detected_lang: str,
                                          target_lang: str) -> Dict[str, Any]:
        """Generate a culturally adapted reply template"""
        cultural_norms = self.cultural_guidance = self.get_cultural_guidance(target_lang)
        source_culture = self.get_cultural_guidance(detected_lang)
        
        return {
            'target_language': target_lang,
            'target_language_name': self.supported_languages.get(target_lang, 'Unknown'),
            'greeting': cultural_norms['appropriate_greeting'],
            'closing': cultural_norms['appropriate_closing'],
            'formality': cultural_norms['formality_level'],
            'cultural_tips': cultural_norms['cultural_tips'],
            'source_culture': {
                'language': detected_lang,
                'formality': source_culture['formality_level']
            },
            'adaptation_notes': self.get_adaptation_notes(detected_lang, target_lang)
        }
    
    def get_adaptation_notes(self, source_lang: str, target_lang: str) -> List[str]:
        """Get notes on adapting between cultures"""
        notes = []
        
        source_norms = self.cultural_norms.get(source_lang, {})
        target_norms = self.cultural_norms.get(target_lang, {})
        
        if source_norms.get('formality') != target_norms.get('formality'):
            notes.append(f"Adjust formality: {source_norms.get('formality', 'medium')} → {target_norms.get('formality', 'medium')}")
        
        high_context = ['ja', 'zh', 'ko', 'ar']
        low_context = ['en', 'de', 'nl', 'sv']
        
        if source_lang in high_context and target_lang in low_context:
            notes.append('Be more direct and explicit than the original message')
        elif source_lang in low_context and target_lang in high_context:
            notes.append('Add more context and relationship-building language')
        
        return notes
    
    def process_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process incoming email with translation intelligence"""
        sender = email_data.get('from', 'unknown')
        recipients = email_data.get('to', [])
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        
        # Detect language
        lang_detection = self.detect_language(body + ' ' + subject)
        detected_lang = lang_detection['language']
        
        # Get user preference
        user_pref = self.user_preferences[sender]
        target_lang = user_pref.get('preferred_language', 'en')
        
        # Translation needed?
        needs_translation = detected_lang != target_lang
        
        # Cultural guidance
        cultural = self.get_cultural_guidance(detected_lang)
        reply_culture = self.generate_culturally_adapted_reply(email_data, detected_lang, target_lang)
        
        # Reply-all enforcement
        reply_all = len(recipients) > 1
        
        return {
            'engine': 'V1104 - Translation Hub Engine',
            'sender': sender,
            'language_detection': lang_detection,
            'needs_translation': needs_translation,
            'source_language': detected_lang,
            'target_language': target_lang,
            'cultural_guidance': cultural,
            'reply_adaptation': reply_culture,
            'reply_all_required': reply_all,
            'action': self.determine_action(detected_lang, target_lang, needs_translation, cultural)
        }
    
    def determine_action(self, source_lang: str, target_lang: str, 
                        needs_translation: bool, cultural: Dict) -> str:
        """Determine action based on language context"""
        if not needs_translation:
            return 'Same language - respond normally with cultural awareness'
        
        formality = cultural.get('formality_level', 'medium')
        
        if formality == 'very_high':
            return f'Translate from {self.supported_languages.get(source_lang)} - use very formal, respectful tone'
        elif formality == 'high':
            return f'Translate from {self.supported_languages.get(source_lang)} - maintain formal business tone'
        elif source_lang in ['ja', 'zh', 'ko']:
            return f'High-context culture detected - respond with extra context and relationship building'
        else:
            return f'Translate from {self.supported_languages.get(source_lang)} to {self.supported_languages.get(target_lang)}'


if __name__ == '__main__':
    engine = TranslationHubEngine()
    
    print("V1104 - Translation Hub Engine Test")
    print("=" * 60)
    
    test_emails = [
        {
            'from': 'client@empresa.es',
            'to': ['team@zion.com', 'manager@zion.com'],
            'subject': 'Propuesta de colaboración',
            'body': 'Estimados, buenos días. Nos gustaría discutir una posible colaboración. Por favor, envíen su propuesta antes del viernes. Muchas gracias y saludos cordiales.',
            'timestamp': datetime.now()
        },
        {
            'from': 'partner@firma.de',
            'to': ['team@zion.com'],
            'subject': 'Projektupdate',
            'body': 'Sehr geehrte Damen und Herren, danke für das Meeting gestern. Wir haben die Anforderungen geprüft und können das Projekt wie besprochen umsetzen. Mit freundlichen Grüßen.',
            'timestamp': datetime.now()
        },
        {
            'from': 'client@company.jp',
            'to': ['sales@zion.com', 'exec@zion.com'],
            'subject': 'お打ち合わせのお礼',
            'body': 'お世話になっております。昨日はお時間をいただきありがとうございました。ご提案いただいた内容について社内で検討いたします。よろしくお願いいたします。',
            'timestamp': datetime.now()
        }
    ]
    
    for email in test_emails:
        result = engine.process_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"Detected: {result['language_detection']['language_name']} (confidence: {result['language_detection']['confidence']})")
        print(f"Translation needed: {result['needs_translation']}")
        print(f"Formality: {result['cultural_guidance']['formality_level']}")
        print(f"Reply-All: {result['reply_all_required']}")
        print(f"Action: {result['action']}")
        if result['reply_adaptation']['cultural_tips']:
            print(f"Tips: {result['reply_adaptation']['cultural_tips'][0]}")
