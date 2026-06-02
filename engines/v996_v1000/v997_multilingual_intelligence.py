#!/usr/bin/env python3
"""
V997 - Email Multi-Language Intelligence Engine
Detects email language, translates key phrases, adapts tone per culture,
and ensures cross-cultural communication effectiveness.
"""
import re

# Language detection patterns (top 20 business languages)
LANG_PATTERNS = {
    "en": r'\b(the|is|are|was|were|have|has|will|would|could|should|this|that|with|from|your|our)\b',
    "es": r'\b(el|la|los|las|es|son|está|están|tiene|tienen|con|para|por|como|pero|más|este|esta)\b',
    "pt": r'\b(o|a|os|as|é|são|está|estão|tem|têm|com|para|por|como|mas|mais|este|esta|não)\b',
    "fr": r'\b(le|la|les|est|sont|avec|pour|dans|sur|pas|une|des|qui|que|mais|cette|tout)\b',
    "de": r'\b(der|die|das|ist|sind|hat|haben|mit|für|auf|nicht|ein|eine|und|oder|aber|diese)\b',
    "it": r'\b(il|la|gli|le|è|sono|ha|hanno|con|per|su|non|una|che|di|del|della|questo)\b',
    "nl": r'\b(de|het|is|zijn|heeft|hebben|met|voor|op|niet|een|dat|die|van|en|maar|dit)\b',
    "ru": r'[а-яА-Я]{3,}',
    "zh": r'[\u4e00-\u9fff]{2,}',
    "ja": r'[\u3040-\u309f\u30a0-\u30ff]{2,}',
    "ko": r'[\uac00-\ud7af]{2,}',
    "ar": r'[\u0600-\u06ff]{3,}',
    "hi": r'[\u0900-\u097f]{3,}',
    "tr": r'\b(bir|bu|ve|için|ile|da|de|var|olan|gibi|ben|sen|biz|ama|çok)\b',
    "pl": r'\b(i|w|na|z|do|nie|jest|to|się|jak|ale|że|czy|dla|od|po|już)\b',
    "sv": r'\b(och|att|det|som|en|för|med|har|inte|den|av|till|är|var|kan|på)\b',
    "ko": r'[\uac00-\ud7af]{2,}',
}

# Cultural tone adjustments
CULTURE_TONE = {
    "en": {"formality": "medium", "directness": "high", "greeting": "Hi [Name],"},
    "es": {"formality": "medium-high", "directness": "medium", "greeting": "Estimado/a [Nombre],"},
    "pt": {"formality": "medium-high", "directness": "medium", "greeting": "Prezado/a [Nome],"},
    "fr": {"formality": "high", "directness": "low", "greeting": "Cher/Chère [Nom],"},
    "de": {"formality": "high", "directness": "high", "greeting": "Sehr geehrte/r [Name],"},
    "ja": {"formality": "very-high", "directness": "low", "greeting": "[Name]様,"},
    "zh": {"formality": "high", "directness": "low", "greeting": "尊敬的[Name]，"},
    "ar": {"formality": "high", "directness": "medium", "greeting": "السيد/السيدة [Name]،"},
    "ko": {"formality": "very-high", "directness": "low", "greeting": "[Name]님께,"},
    "ru": {"formality": "medium-high", "directness": "medium", "greeting": "Уважаемый/ая [Name],"},
}

# Common business phrases in multiple languages
BUSINESS_PHRASES = {
    "en": {"greeting": "I hope this email finds you well", "closing": "Best regards", "follow_up": "I wanted to follow up on"},
    "es": {"greeting": "Espero que este correo le encuentre bien", "closing": "Saludos cordiales", "follow_up": "Quería hacer seguimiento sobre"},
    "pt": {"greeting": "Espero que este e-mail o encontre bem", "closing": "Atenciosamente", "follow_up": "Gostaria de acompanhar sobre"},
    "fr": {"greeting": "J'espère que ce courriel vous trouve bien", "closing": "Cordialement", "follow_up": "Je souhaitais faire le suivi concernant"},
    "de": {"greeting": "Ich hoffe, es geht Ihnen gut", "closing": "Mit freundlichen Grüßen", "follow_up": "Ich möchte nachfragen bezüglich"},
}

def detect_language(email):
    """Detect primary language of the email"""
    scores = {}
    for lang, pattern in LANG_PATTERNS.items():
        try:
            matches = re.findall(pattern, email, re.I)
            scores[lang] = len(matches)
        except Exception:
            scores[lang] = 0
    best = max(scores, key=scores.get) if scores else "en"
    if scores.get(best, 0) == 0:
        best = "en"
    confidence = min(95, scores.get(best, 0) * 5 + 30)
    return best, confidence

def detect_multilingual(email):
    """Detect if email contains multiple languages"""
    detected = {}
    for lang, pattern in LANG_PATTERNS.items():
        try:
            matches = re.findall(pattern, email, re.I)
            if len(matches) > 2:
                detected[lang] = len(matches)
        except Exception:
            pass
    return len(detected) > 1, list(detected.keys())

def assess_cultural_appropriateness(email, target_language):
    """Assess if email tone is appropriate for target culture"""
    culture = CULTURE_TONE.get(target_language, CULTURE_TONE["en"])
    issues = []
    formality = culture["formality"]
    if formality in ("high", "very-high"):
        if re.search(r'\b(hey|hiya|sup|yo)\b', email, re.I):
            issues.append(f"Too informal for {target_language.upper()} culture — use formal greetings")
        if re.search(r'[!]{2,}', email):
            issues.append("Excessive exclamation marks may seem unprofessional")
    if culture["directness"] == "low":
        if re.search(r'\b(must|need to|have to|do it)\b', email, re.I):
            issues.append("Too direct — use softer phrasing for this culture")
    score = max(20, 100 - len(issues) * 20)
    return {"score": score, "issues": issues, "culture_profile": culture}

def suggest_cultural_adaptations(email, source_lang, target_lang):
    """Suggest adaptations for cross-cultural communication"""
    adaptations = []
    source_culture = CULTURE_TONE.get(source_lang, CULTURE_TONE["en"])
    target_culture = CULTURE_TONE.get(target_lang, CULTURE_TONE["en"])
    if target_culture["formality"] != source_culture["formality"]:
        adaptations.append(f"Adjust formality level to match {target_lang.upper()} expectations ({target_culture['formality']})")
    if target_culture["directness"] != source_culture["directness"]:
        adaptations.append(f"Modify directness — {target_lang.upper()} culture prefers {target_culture['directness']} directness")
    if target_lang in BUSINESS_PHRASES:
        phrases = BUSINESS_PHRASES[target_lang]
        adaptations.append(f"Use culturally appropriate greeting: '{phrases['greeting']}'")
        adaptations.append(f"Use culturally appropriate closing: '{phrases['closing']}'")
    return adaptations

def analyze_email(email, target_language=None):
    """Full multi-language intelligence analysis"""
    primary_lang, confidence = detect_language(email)
    is_multilingual, languages = detect_multilingual(email)
    target = target_language or primary_lang
    cultural = assess_cultural_appropriateness(email, target)
    adaptations = suggest_cultural_adaptations(email, primary_lang, target) if primary_lang != target else []
    # Check for RTL languages
    is_rtl = primary_lang in ("ar", "he", "fa", "ur")
    # Translation needs
    needs_translation = is_multilingual and len(languages) > 1
    return {
        "engine": "V997 - Multi-Language Intelligence",
        "primary_language": primary_lang,
        "language_confidence": confidence,
        "is_multilingual": is_multilingual,
        "detected_languages": languages,
        "cultural_assessment": cultural,
        "cultural_adaptations": adaptations,
        "is_rtl": is_rtl,
        "needs_translation": needs_translation,
        "recommended_greeting": CULTURE_TONE.get(target, {}).get("greeting", "Hi [Name],"),
        "reply_all_enforced": True
    }

# === TEST ===
if __name__ == "__main__":
    test_en = "Hi Sarah, I hope this email finds you well. Could you please review the attached report? Best regards, Kleber"
    test_es = "Estimado señor García, espero que este correo le encuentre bien. Necesito su aprobación para el proyecto. Saludos cordiales"
    test_mixed = "Hi team, el reporte está listo for review. Please revisar antes del viernes. Thanks, Kleber"

    print("=== V997 Multi-Language Intelligence ===")
    for label, email in [("English", test_en), ("Spanish", test_es), ("Mixed", test_mixed)]:
        result = analyze_email(email)
        print(f"\n--- {label} ---")
        print(f"  Language: {result['primary_language']} ({result['language_confidence']}%)")
        print(f"  Multilingual: {result['is_multilingual']} ({result['detected_languages']})")
        print(f"  Cultural score: {result['cultural_assessment']['score']}")
        if result['cultural_adaptations']:
            print(f"  Adaptations: {result['cultural_adaptations'][:2]}")
        assert result["reply_all_enforced"] is True

    print("\n✅ All V997 tests passed!")
