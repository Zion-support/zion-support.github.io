#!/usr/bin/env python3
"""V1050: AI Email Localization Engine
Auto-translate emails while preserving tone, idioms, and business context.
Support 50+ languages with cultural adaptation.
MANDATORY: Reply-all enforcement for multi-recipient emails.
"""

import re
import json
from datetime import datetime
from collections import defaultdict

class EmailLocalizationEngine:
    def __init__(self):
        self.translation_cache = {}
        self.language_detection_history = []
        
        self.supported_languages = {
            'en': {'name': 'English', 'formality_levels': 3, 'script': 'latin'},
            'es': {'name': 'Spanish', 'formality_levels': 2, 'script': 'latin'},
            'fr': {'name': 'French', 'formality_levels': 3, 'script': 'latin'},
            'de': {'name': 'German', 'formality_levels': 3, 'script': 'latin'},
            'it': {'name': 'Italian', 'formality_levels': 2, 'script': 'latin'},
            'pt': {'name': 'Portuguese', 'formality_levels': 2, 'script': 'latin'},
            'nl': {'name': 'Dutch', 'formality_levels': 2, 'script': 'latin'},
            'ru': {'name': 'Russian', 'formality_levels': 2, 'script': 'cyrillic'},
            'zh': {'name': 'Chinese (Simplified)', 'formality_levels': 3, 'script': 'chinese'},
            'zh-TW': {'name': 'Chinese (Traditional)', 'formality_levels': 3, 'script': 'chinese'},
            'ja': {'name': 'Japanese', 'formality_levels': 4, 'script': 'japanese'},
            'ko': {'name': 'Korean', 'formality_levels': 4, 'script': 'korean'},
            'ar': {'name': 'Arabic', 'formality_levels': 2, 'script': 'arabic'},
            'hi': {'name': 'Hindi', 'formality_levels': 2, 'script': 'devanagari'},
            'th': {'name': 'Thai', 'formality_levels': 3, 'script': 'thai'},
            'vi': {'name': 'Vietnamese', 'formality_levels': 2, 'script': 'latin'},
            'pl': {'name': 'Polish', 'formality_levels': 2, 'script': 'latin'},
            'tr': {'name': 'Turkish', 'formality_levels': 2, 'script': 'latin'},
            'sv': {'name': 'Swedish', 'formality_levels': 2, 'script': 'latin'},
            'da': {'name': 'Danish', 'formality_levels': 2, 'script': 'latin'},
            'no': {'name': 'Norwegian', 'formality_levels': 2, 'script': 'latin'},
            'fi': {'name': 'Finnish', 'formality_levels': 2, 'script': 'latin'},
            'cs': {'name': 'Czech', 'formality_levels': 2, 'script': 'latin'},
            'el': {'name': 'Greek', 'formality_levels': 2, 'script': 'greek'},
            'he': {'name': 'Hebrew', 'formality_levels': 2, 'script': 'hebrew'},
            'id': {'name': 'Indonesian', 'formality_levels': 2, 'script': 'latin'},
            'ms': {'name': 'Malay', 'formality_levels': 2, 'script': 'latin'},
            'uk': {'name': 'Ukrainian', 'formality_levels': 2, 'script': 'cyrillic'},
            'ro': {'name': 'Romanian', 'formality_levels': 2, 'script': 'latin'},
            'hu': {'name': 'Hungarian', 'formality_levels': 2, 'script': 'latin'},
            'bg': {'name': 'Bulgarian', 'formality_levels': 2, 'script': 'cyrillic'},
            'hr': {'name': 'Croatian', 'formality_levels': 2, 'script': 'latin'},
            'sk': {'name': 'Slovak', 'formality_levels': 2, 'script': 'latin'},
            'sl': {'name': 'Slovenian', 'formality_levels': 2, 'script': 'latin'},
            'et': {'name': 'Estonian', 'formality_levels': 2, 'script': 'latin'},
            'lv': {'name': 'Latvian', 'formality_levels': 2, 'script': 'latin'},
            'lt': {'name': 'Lithuanian', 'formality_levels': 2, 'script': 'latin'},
            'fa': {'name': 'Persian', 'formality_levels': 2, 'script': 'arabic'},
            'bn': {'name': 'Bengali', 'formality_levels': 2, 'script': 'bengali'},
            'ta': {'name': 'Tamil', 'formality_levels': 2, 'script': 'tamil'},
            'te': {'name': 'Telugu', 'formality_levels': 2, 'script': 'telugu'},
            'ml': {'name': 'Malayalam', 'formality_levels': 2, 'script': 'malayalam'},
            'kn': {'name': 'Kannada', 'formality_levels': 2, 'script': 'kannada'},
            'gu': {'name': 'Gujarati', 'formality_levels': 2, 'script': 'gujarati'},
            'mr': {'name': 'Marathi', 'formality_levels': 2, 'script': 'devanagari'},
            'pa': {'name': 'Punjabi', 'formality_levels': 2, 'script': 'gurmukhi'},
            'ur': {'name': 'Urdu', 'formality_levels': 2, 'script': 'arabic'},
            'sw': {'name': 'Swahili', 'formality_levels': 2, 'script': 'latin'},
            'af': {'name': 'Afrikaans', 'formality_levels': 2, 'script': 'latin'},
            'ca': {'name': 'Catalan', 'formality_levels': 2, 'script': 'latin'}
        }
        
        # Language detection patterns
        self.language_indicators = {
            'es': ['hola', 'gracias', 'por favor', 'buenos', 'estoy', 'como', 'usted'],
            'fr': ['bonjour', 'merci', 's\'il vous plait', 'je suis', 'comment', 'vous'],
            'de': ['hallo', 'danke', 'bitte', 'ich bin', 'wie', 'sie'],
            'it': ['ciao', 'grazie', 'per favore', 'sono', 'come', 'lei'],
            'pt': ['ola', 'obrigado', 'por favor', 'estou', 'como', 'voce'],
            'ja': ['こんにちは', 'ありがとう', 'お願いします', 'です', 'ます'],
            'ko': ['안녕하세요', '감사합니다', '부탁합니다'],
            'zh': ['你好', '谢谢', '请', '是', '的'],
            'ru': ['привет', 'спасибо', 'пожалуйста', 'как'],
            'ar': ['مرحبا', 'شكرا', 'من فضلك']
        }
        
        # Business phrase translations (common patterns)
        self.business_phrases = {
            'en': {
                'greeting_formal': 'Dear {name},',
                'greeting_informal': 'Hi {name},',
                'closing_formal': 'Best regards,',
                'closing_informal': 'Thanks,',
                'follow_up': 'I wanted to follow up on...',
                'as_discussed': 'As discussed,',
                'please_find': 'Please find attached...',
                'looking_forward': 'Looking forward to hearing from you.'
            },
            'es': {
                'greeting_formal': 'Estimado/a {name},',
                'greeting_informal': 'Hola {name},',
                'closing_formal': 'Saludos cordiales,',
                'closing_informal': 'Gracias,',
                'follow_up': 'Quería hacer seguimiento sobre...',
                'as_discussed': 'Como hablamos,',
                'please_find': 'Adjunto encontrará...',
                'looking_forward': 'Quedo a la espera de su respuesta.'
            },
            'fr': {
                'greeting_formal': 'Cher/Chère {name},',
                'greeting_informal': 'Bonjour {name},',
                'closing_formal': 'Cordialement,',
                'closing_informal': 'Merci,',
                'follow_up': 'Je voulais faire le suivi de...',
                'as_discussed': 'Comme discuté,',
                'please_find': 'Veuillez trouver ci-joint...',
                'looking_forward': 'Dans l\'attente de votre réponse.'
            },
            'de': {
                'greeting_formal': 'Sehr geehrte(r) {name},',
                'greeting_informal': 'Hallo {name},',
                'closing_formal': 'Mit freundlichen Grüßen,',
                'closing_informal': 'Danke,',
                'follow_up': 'Ich wollte nachfassen bezüglich...',
                'as_discussed': 'Wie besprochen,',
                'please_find': 'Anbei finden Sie...',
                'looking_forward': 'Ich freue mich auf Ihre Antwort.'
            },
            'ja': {
                'greeting_formal': '{name}様',
                'greeting_informal': '{name}さん',
                'closing_formal': 'よろしくお願いいたします',
                'closing_informal': 'ありがとうございます',
                'follow_up': '～についてフォローアップさせていただきます',
                'as_discussed': 'お話しした通り、',
                'please_find': '添付ファイルをご確認ください',
                'looking_forward': 'ご返信をお待ちしております'
            },
            'zh': {
                'greeting_formal': '尊敬的{name}：',
                'greeting_informal': '{name}你好，',
                'closing_formal': '此致 敬礼',
                'closing_informal': '谢谢，',
                'follow_up': '我想跟进一下...',
                'as_discussed': '如我们所讨论的，',
                'please_find': '请查收附件...',
                'looking_forward': '期待您的回复。'
            },
            'pt': {
                'greeting_formal': 'Prezado(a) {name},',
                'greeting_informal': 'Olá {name},',
                'closing_formal': 'Atenciosamente,',
                'closing_informal': 'Obrigado,',
                'follow_up': 'Gostaria de fazer um acompanhamento sobre...',
                'as_discussed': 'Conforme conversamos,',
                'please_find': 'Segue em anexo...',
                'looking_forward': 'Aguardo sua resposta.'
            }
        }
        
        # Cultural adaptation rules
        self.cultural_rules = {
            'ja': {
                'directness': 'indirect',
                'honorifics': True,
                'apology_first': True,
                'note': 'Use keigo (honorific language). Start with apology for inconvenience.'
            },
            'ko': {
                'directness': 'indirect',
                'honorifics': True,
                'note': 'Use appropriate honorifics based on recipient status.'
            },
            'zh': {
                'directness': 'moderate',
                'face_saving': True,
                'note': 'Avoid direct criticism. Use indirect language for negative feedback.'
            },
            'ar': {
                'directness': 'indirect',
                'greetings_extended': True,
                'note': 'Include extended greetings and well-wishes. Right-to-left formatting.'
            },
            'de': {
                'directness': 'direct',
                'formality': 'high',
                'note': 'Be precise and formal. Use titles (Dr., Prof.) when applicable.'
            },
            'fr': {
                'directness': 'moderate',
                'formality': 'high',
                'note': 'Use formal language. Include polite expressions.'
            },
            'en': {
                'directness': 'direct',
                'formality': 'low',
                'note': 'Be concise and direct. Informal tone acceptable in most cases.'
            }
        }
    
    def process_email(self, email_data):
        """Process email for localization."""
        sender = email_data.get('sender', 'unknown')
        recipients = email_data.get('recipients', [])
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        target_language = email_data.get('target_language', None)
        
        # REPLY-ALL ENFORCEMENT
        reply_all = len(recipients) > 1
        
        # Detect source language
        source_lang = self._detect_language(subject + ' ' + body)
        
        # Determine target languages based on recipients
        if not target_language:
            target_languages = self._determine_target_languages(recipients, source_lang)
        else:
            target_languages = [target_language]
        
        # Translate email
        translations = {}
        for target_lang in target_languages:
            if target_lang != source_lang:
                translation = self._translate_email(subject, body, source_lang, target_lang)
                translations[target_lang] = translation
        
        # Cultural adaptations
        cultural_notes = self._get_cultural_adaptations(target_languages)
        
        # Quality score
        quality_scores = self._calculate_translation_quality(translations)
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all,
            'source_language': source_lang,
            'source_language_name': self.supported_languages.get(source_lang, {}).get('name', 'Unknown'),
            'target_languages': target_languages,
            'translations': translations,
            'cultural_adaptations': cultural_notes,
            'quality_scores': quality_scores,
            'localized_subject': translations.get(target_languages[0], {}).get('subject', subject) if translations else subject,
            'localized_body': translations.get(target_languages[0], {}).get('body', body) if translations else body,
            'language_support': {
                'total_languages': len(self.supported_languages),
                'available': list(self.supported_languages.keys())[:20]  # Show first 20
            },
            'recommendations': self._generate_recommendations(source_lang, target_languages, quality_scores, reply_all),
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _detect_language(self, text):
        """Detect the language of the text."""
        text_lower = text.lower()
        scores = {}
        
        for lang, indicators in self.language_indicators.items():
            score = sum(1 for indicator in indicators if indicator in text_lower)
            if score > 0:
                scores[lang] = score
        
        if scores:
            detected = max(scores, key=scores.get)
            self.language_detection_history.append({
                'timestamp': datetime.now().isoformat(),
                'detected': detected,
                'confidence': min(100, scores[detected] * 25)
            })
            return detected
        
        # Check for non-latin scripts
        if re.search(r'[\u4e00-\u9fff]', text):  # Chinese
            return 'zh'
        elif re.search(r'[\u3040-\u309f\u30a0-\u30ff]', text):  # Japanese
            return 'ja'
        elif re.search(r'[\uac00-\ud7af]', text):  # Korean
            return 'ko'
        elif re.search(r'[\u0400-\u04ff]', text):  # Cyrillic
            return 'ru'
        elif re.search(r'[\u0600-\u06ff]', text):  # Arabic
            return 'ar'
        
        return 'en'  # Default to English
    
    def _determine_target_languages(self, recipients, source_lang):
        """Determine target languages based on recipients."""
        target_langs = set()
        
        for recipient in recipients:
            domain = recipient.split('@')[-1] if '@' in recipient else ''
            
            # Map domains to languages
            lang_map = {
                '.es': 'es', '.mx': 'es', '.ar': 'es', '.co': 'es',  # Spanish
                '.fr': 'fr', '.be': 'fr',  # French
                '.de': 'de', '.at': 'de', '.ch': 'de',  # German
                '.it': 'it',  # Italian
                '.pt': 'pt', '.br': 'pt',  # Portuguese
                '.jp': 'ja',  # Japanese
                '.kr': 'ko',  # Korean
                '.cn': 'zh', '.hk': 'zh-TW', '.tw': 'zh-TW',  # Chinese
                '.ru': 'ru',  # Russian
                '.in': 'hi',  # Hindi
                '.nl': 'nl',  # Dutch
                '.se': 'sv',  # Swedish
                '.dk': 'da',  # Danish
                '.no': 'no',  # Norwegian
                '.fi': 'fi',  # Finnish
                '.pl': 'pl',  # Polish
                '.tr': 'tr',  # Turkish
                '.cz': 'cs',  # Czech
                '.gr': 'el',  # Greek
                '.il': 'he',  # Hebrew
                '.ae': 'ar', '.sa': 'ar',  # Arabic
                '.th': 'th',  # Thai
                '.vn': 'vi',  # Vietnamese
                '.id': 'id',  # Indonesian
                '.ua': 'uk',  # Ukrainian
            }
            
            for domain_suffix, lang in lang_map.items():
                if domain_suffix in domain:
                    target_langs.add(lang)
                    break
        
        # Remove source language from targets
        target_langs.discard(source_lang)
        
        # If no targets detected, return empty (no translation needed)
        return list(target_langs) if target_langs else []
    
    def _translate_email(self, subject, body, source_lang, target_lang):
        """Translate email content (simulated translation)."""
        # In production, this would call a translation API
        # For demo, we'll simulate with language-specific templates
        
        translated_subject = f"[{target_lang.upper()}] {subject}"
        
        # Get business phrases for target language
        target_phrases = self.business_phrases.get(target_lang, self.business_phrases['en'])
        
        # Simple template-based translation simulation
        translated_body = body
        
        # Replace common English phrases with target language equivalents
        if source_lang == 'en':
            replacements = {
                'Dear': target_phrases.get('greeting_formal', 'Dear').split('{')[0],
                'Hi': target_phrases.get('greeting_informal', 'Hi').split('{')[0],
                'Best regards': target_phrases.get('closing_formal', 'Best regards').rstrip(','),
                'Thanks': target_phrases.get('closing_informal', 'Thanks').rstrip(','),
                'I wanted to follow up': target_phrases.get('follow_up', 'I wanted to follow up'),
                'As discussed': target_phrases.get('as_discussed', 'As discussed'),
                'Please find attached': target_phrases.get('please_find', 'Please find attached'),
                'Looking forward': target_phrases.get('looking_forward', 'Looking forward')
            }
            
            for eng, target in replacements.items():
                translated_body = re.sub(re.escape(eng), target, translated_body, flags=re.IGNORECASE)
        
        # Add translation metadata
        translated_body = f"[Translated from {source_lang.upper()} to {target_lang.upper()}]\n\n{translated_body}"
        
        return {
            'subject': translated_subject,
            'body': translated_body,
            'source_language': source_lang,
            'target_language': target_lang,
            'translation_method': 'template_based',
            'confidence': 75  # Simulated confidence
        }
    
    def _get_cultural_adaptations(self, target_languages):
        """Get cultural adaptation notes for target languages."""
        adaptations = []
        
        for lang in target_languages:
            rules = self.cultural_rules.get(lang, {})
            if rules:
                adaptations.append({
                    'language': lang,
                    'language_name': self.supported_languages.get(lang, {}).get('name', lang),
                    'directness': rules.get('directness', 'moderate'),
                    'formality': rules.get('formality', 'medium'),
                    'note': rules.get('note', 'Standard business communication'),
                    'special_considerations': self._get_special_considerations(lang)
                })
        
        return adaptations
    
    def _get_special_considerations(self, lang):
        """Get special considerations for a language."""
        considerations = {
            'ja': ['Use honorifics (keigo)', 'Include apology for inconvenience', 'Be indirect'],
            'ko': ['Use appropriate honorifics', 'Respect hierarchy', 'Be polite'],
            'zh': ['Avoid direct criticism', 'Use face-saving language', 'Be respectful'],
            'ar': ['Extended greetings expected', 'Right-to-left formatting', 'Religious sensitivity'],
            'de': ['Be precise and formal', 'Use titles when applicable', 'Direct communication'],
            'fr': ['Formal language preferred', 'Polite expressions important', 'Moderate directness'],
            'ru': ['Formal tone for business', 'Patronymics may be used', 'Direct but polite']
        }
        return considerations.get(lang, ['Standard business etiquette'])
    
    def _calculate_translation_quality(self, translations):
        """Calculate quality scores for translations."""
        scores = {}
        
        for lang, translation in translations.items():
            # Simulated quality metrics
            confidence = translation.get('confidence', 75)
            
            # Adjust based on language complexity
            lang_info = self.supported_languages.get(lang, {})
            formality_levels = lang_info.get('formality_levels', 2)
            
            # Higher formality levels = harder to translate accurately
            formality_penalty = (formality_levels - 2) * 3
            
            quality_score = max(50, confidence - formality_penalty)
            
            scores[lang] = {
                'quality_score': quality_score,
                'confidence': confidence,
                'formality_match': quality_score >= 70,
                'cultural_adaptation': quality_score >= 65,
                'recommendation': 'READY_TO_SEND' if quality_score >= 75 else 'REVIEW_RECOMMENDED' if quality_score >= 60 else 'MANUAL_REVIEW_REQUIRED'
            }
        
        return scores
    
    def _generate_recommendations(self, source_lang, target_languages, quality_scores, reply_all):
        """Generate localization recommendations."""
        recs = []
        
        if not target_languages:
            recs.append('✅ No translation needed - all recipients speak the source language')
            return recs
        
        recs.append(f'🌍 Translating from {source_lang.upper()} to: {", ".join(target_languages)}')
        
        # Check quality scores
        low_quality = [lang for lang, scores in quality_scores.items() if scores['quality_score'] < 70]
        if low_quality:
            recs.append(f'⚠️ Manual review recommended for: {", ".join(low_quality)}')
        
        # Cultural notes
        for lang in target_languages[:3]:  # Show first 3
            rules = self.cultural_rules.get(lang, {})
            if rules.get('note'):
                recs.append(f'💡 {lang.upper()}: {rules["note"]}')
        
        if reply_all:
            recs.append('👥 REPLY ALL: Ensure translated version is sent to all recipients')
            recs.append('🔍 Verify all recipients can read the target language(s)')
        
        return recs
    
    def get_localization_report(self):
        """Generate localization analytics report."""
        return {
            'generated_at': datetime.now().isoformat(),
            'total_languages_supported': len(self.supported_languages),
            'detection_history': self.language_detection_history[-20:],
            'most_detected': self._get_most_detected_language(),
            'translation_stats': {
                'total_translations': len(self.translation_cache),
                'avg_quality': 78  # Simulated
            }
        }
    
    def _get_most_detected_language(self):
        """Get most frequently detected language."""
        if not self.language_detection_history:
            return 'N/A'
        
        lang_counts = defaultdict(int)
        for detection in self.language_detection_history:
            lang_counts[detection['detected']] += 1
        
        if lang_counts:
            most_common = max(lang_counts, key=lang_counts.get)
            return f"{most_common} ({lang_counts[most_common]} times)"
        return 'N/A'


if __name__ == '__main__':
    engine = EmailLocalizationEngine()
    
    test_emails = [
        {
            'id': 'e001',
            'sender': 'kleber@ziontechgroup.com',
            'recipients': ['cliente@empresa.es', 'director@firma.fr', 'manager@company.de'],
            'subject': 'Project Update - AI Platform Implementation',
            'body': """Dear Team,

I wanted to follow up on our discussion last week regarding the AI platform implementation. As discussed, we are on track to deliver the beta version by next Friday.

Please find attached the updated project timeline and technical specifications.

Looking forward to hearing from you.

Best regards,
Kleber""",
            'timestamp': '2026-05-30T10:00:00'
        },
        {
            'id': 'e002',
            'sender': 'cliente@empresa.es',
            'recipients': ['kleber@ziontechgroup.com'],
            'subject': 'Re: Actualización del Proyecto',
            'body': """Hola Kleber,

Gracias por la actualización. Estamos muy contentos con el progreso. Por favor, envíenos los documentos técnicos cuando estén listos.

Saludos cordiales,
María""",
            'timestamp': '2026-05-30T14:00:00'
        }
    ]
    
    print("=== V1050: AI Email Localization Engine ===\n")
    
    for email in test_emails:
        result = engine.process_email(email)
        print(f"Email: {email['subject'][:50]}...")
        print(f"  Source Language: {result['source_language_name']} ({result['source_language']})")
        print(f"  Target Languages: {result['target_languages']}")
        print(f"  Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
        
        if result['translations']:
            print(f"  Translations Generated: {len(result['translations'])}")
            for lang, trans in list(result['translations'].items())[:2]:
                print(f"    🌍 {lang}: Quality {result['quality_scores'][lang]['quality_score']}/100")
        
        for adaptation in result['cultural_adaptations'][:2]:
            print(f"  💡 Cultural Note ({adaptation['language']}): {adaptation['note'][:60]}...")
        
        for rec in result['recommendations'][:3]:
            print(f"  → {rec}")
        print()
    
    report = engine.get_localization_report()
    print(f"=== Localization Report ===")
    print(f"Languages Supported: {report['total_languages_supported']}")
