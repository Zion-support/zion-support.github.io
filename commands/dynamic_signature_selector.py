#!/usr/bin/env python3
"""
Dynamic Signature Selector - Context-aware signatures

Selects the most appropriate signature based on:
- Sender tier (VIP gets personal signature)
- Sentiment (negative gets empathetic closing)
- Industry (industry-specific credentials)
- Language (localized signatures)
"""

import re
from typing import Dict

SIGNATURES = {
    'en': {
        'default': """

Best regards,
Kleber Garcia Alcatrão
Zion Tech Group (a Zion Holdings Company)
Mobile: +1 302 464 0950
Website: https://www.ziontechgroup.com""",
        'vip': """

Kind regards,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
Direct: +1 302 464 0950
Skype: kleber.alcatrao""",
        'negative': """

I appreciate your patience and look forward to resolving this.

Best regards,
Kleber Garcia Alcatrão
Zion Tech Group""",
        'pt': """

Atenciosamente,
Kleber Garcia Alcatrão
Zion Tech Group (a Zion Holdings Company)
WhatsApp: +1 302 464 0950""",
        'es': """

Saludos cordiales,
Kleber Garcia Alcatrão
Zion Tech Group
Móvil: +1 302 464 0950"""
    }
}

INDUSTRY_KEYWORDS = {
    'finance': ['bank', 'investment', 'trading', 'btg', 'pactual', 'asset', 'wealth', 'financ'],
    'healthcare': ['medical', 'health', 'hospital', 'clinic', 'patient', 'care'],
    'tech': ['software', 'ai', 'ml', 'developer', 'engineer', 'code', 'tech'],
    'realestate': ['property', 'real estate', 'apartment', 'rental', 'lease'],
    'hospitality': ['hotel', 'resort', 'airbnb', 'booking', 'guest']
}

def detect_industry(sender: str, subject: str, snippet: str) -> str:
    """Detect sender industry for tailored responses."""
    text = f"{sender} {subject} {snippet}".lower()
    
    scores = {}
    for industry, keywords in INDUSTRY_KEYWORDS.items():
        scores[industry] = sum(1 for kw in keywords if kw in text)
    
    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else 'general'

def select_signature(tier: str, sentiment: Dict, language: str) -> str:
    """Select appropriate signature based on context."""
    sigs = SIGNATURES.get(language, SIGNATURES['en'])
    
    # Negative sentiment override
    if sentiment.get('sentiment') == 'negative':
        return sigs.get('negative', sigs['default'])
    
    # VIP override
    if tier == 'VIP':
        return sigs.get('vip', sigs['default'])
    
    # Default for language
    return sigs.get(language, sigs['default'])

def get_industry_mention(industry: str) -> str:
    """Get industry-specific mention for response."""
    mentions = {
        'finance': "Given the finance context, I understand timing is critical.",
        'healthcare': "In healthcare, accuracy and compliance are paramount.",
        'tech': "As a tech professional, you'll appreciate the technical approach.",
        'realestate': "For real estate matters, I'll ensure we move quickly.",
        'hospitality': "In hospitality, customer experience is everything."
    }
    return mentions.get(industry, "")

if __name__ == '__main__':
    # Test
    print("VIP signature:", select_signature('VIP', {'sentiment': 'neutral'}, 'en'))
    print("Industry:", detect_industry("Bank XYZ", "Investment proposal", "Looking to invest"))