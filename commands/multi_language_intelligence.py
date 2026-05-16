#!/usr/bin/env python3
"""
Multi-Language Email Intelligence - Auto-detect and respond in correct language

Supports: English, Portuguese, Spanish
"""

import re
from typing import Dict

def detect_language(text: str) -> str:
    """Detect email language from content."""
    text_lower = text.lower()
    
    # Portuguese indicators
    pt_words = ['obrigado', 'prezado', 'atenciosamente', 'olá', 'bom dia', 'boa tarde', 'urgente', 'por favor']
    pt_score = sum(2 for w in pt_words if w in text_lower)
    
    # Spanish indicators
    es_words = ['gracias', 'estimado', 'atentamente', 'hola', 'buen día', 'buenas', 'urgente', 'por favor']
    es_score = sum(2 for w in es_words if w in text_lower)
    
    # English indicators
    en_words = ['thanks', 'dear', 'regards', 'hello', 'hi', 'urgent', 'please']
    en_score = sum(2 for w in en_words if w in text_lower)
    
    scores = {'pt': pt_score, 'es': es_score, 'en': en_score}
    winner = max(scores, key=scores.get)
    
    return winner if scores[winner] > 0 else 'en'

def get_response_template(intent: str, language: str, tier: str) -> str:
    """Get localized response template."""
    templates = {
        'pt': {
            'general': "Prezado(a),\n\nObrigado pelo contato. Estou analisando sua mensagem e retornarei em breve.\n\nAtenciosamente,\nKleber Garcia Alcatrão",
            'urgent': "Prezado(a),\n\nRecebi sua mensagem urgente. Vou tratar isso com prioridade e retorno em até 2 horas.\n\nKleber Garcia Alcatrão",
            'vip': "Prezado(a),\n\nObrigado por entrar em contato. Dada nossa relação estabelecida, tratarei isso com prioridade máxima.\n\nCordiais cumprimentos,\nKleber"
        },
        'es': {
            'general': "Estimado,\n\nGracias por su mensaje. Lo estoy revisando y le responderé pronto.\n\nAtentamente,\nKleber Garcia Alcatrão",
            'urgent': "Estimado,\n\nRecibí su mensaje urgente. Lo atenderé con prioridad y respondo en 2 horas.\n\nKleber Garcia Alcatrão",
            'vip': "Estimado,\n\nGracias por contactar. Dada nuestra relación establecida, trataré esto con máxima prioridad.\n\nSaludos cordiales,\nKleber"
        },
        'en': {
            'general': "Dear,\n\nThank you for your email. I'm reviewing and will respond shortly.\n\nBest regards,\nKleber Garcia Alcatrão",
            'urgent': "Dear,\n\nReceived your urgent message. Prioritizing this with response within 2 hours.\n\nKleber Garcia Alcatrão",
            'vip': "Dear,\n\nThank you for reaching out. Given our established relationship, I'm treating this with priority.\n\nBest regards,\nKleber"
        }
    }
    
    key = 'vip' if tier == 'VIP' else 'urgent' if language == 'en' else 'general'
    return templates.get(language, templates['en']).get(key, templates['en']['general'])

if __name__ == '__main__':
    # Test
    test_emails = [
        "Prezado Kleber, gostaria de uma atualização urgente por favor",
        "Estimado, necesito información urgente por favor",
        "Hi Kleber, just checking in on the project"
    ]
    
    for email in test_emails:
        lang = detect_language(email)
        print(f"'{email[:40]}...' -> {lang}")