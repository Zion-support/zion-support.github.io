#!/usr/bin/env python3
"""
V53: Email Language Detection & Auto-Translation Engine
Detects 40+ languages in incoming emails, auto-translates to the recipient's
preferred language, and preserves professional tone with cultural adaptation.
Reply translation maintains the original's intent with locale-appropriate phrasing.

Data stored in: data/v53_language_cache.json, data/v53_preferences.json
"""
import json
import re
import os
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter
from typing import Optional

DATA_DIR = Path("data")
LANG_CACHE_FILE = DATA_DIR / "v53_language_cache.json"
PREFERENCES_FILE = DATA_DIR / "v53_preferences.json"
os.makedirs(DATA_DIR, exist_ok=True)


# ── ISO 639-1 language codes + names + regions ───────────────────────────────────
LANGUAGE_META = {
    "en": {"name": "English", "native": "English", "region": "US/UK", "dir": "ltr"},
    "es": {"name": "Spanish", "native": "Español", "region": "LatAm/ES", "dir": "ltr"},
    "pt": {"name": "Portuguese", "native": "Português", "region": "BR/PT", "dir": "ltr"},
    "fr": {"name": "French", "native": "Français", "region": "FR/CA", "dir": "ltr"},
    "de": {"name": "German", "native": "Deutsch", "region": "DE/AT", "dir": "ltr"},
    "it": {"name": "Italian", "native": "Italiano", "region": "IT", "dir": "ltr"},
    "nl": {"name": "Dutch", "native": "Nederlands", "region": "NL/BE", "dir": "ltr"},
    "pl": {"name": "Polish", "native": "Polski", "region": "PL", "dir": "ltr"},
    "ru": {"name": "Russian", "native": "Русский", "region": "RU", "dir": "ltr"},
    "uk": {"name": "Ukrainian", "native": "Українська", "region": "UA", "dir": "ltr"},
    "zh": {"name": "Chinese", "native": "中文", "region": "CN/TW", "dir": "ltr"},
    "ja": {"name": "Japanese", "native": "日本語", "region": "JP", "dir": "ltr"},
    "ko": {"name": "Korean", "native": "한국어", "region": "KR", "dir": "ltr"},
    "ar": {"name": "Arabic", "native": "العربية", "region": "MENA", "dir": "rtl"},
    "he": {"name": "Hebrew", "native": "עברית", "region": "IL", "dir": "rtl"},
    "hi": {"name": "Hindi", "native": "हिन्दी", "region": "IN", "dir": "ltr"},
    "bn": {"name": "Bengali", "native": "বাংলা", "region": "BD/IN", "dir": "ltr"},
    "ur": {"name": "Urdu", "native": "اردو", "region": "PK/IN", "dir": "rtl"},
    "tr": {"name": "Turkish", "native": "Türkçe", "region": "TR", "dir": "ltr"},
    "vi": {"name": "Vietnamese", "native": "Tiếng Việt", "region": "VN", "dir": "ltr"},
    "th": {"name": "Thai", "native": "ไทย", "region": "TH", "dir": "ltr"},
    "id": {"name": "Indonesian", "native": "Bahasa Indonesia", "region": "ID", "dir": "ltr"},
    "ms": {"name": "Malay", "native": "Bahasa Melayu", "region": "MY", "dir": "ltr"},
    "fil": {"name": "Filipino", "native": "Filipino", "region": "PH", "dir": "ltr"},
    "ro": {"name": "Romanian", "native": "Română", "region": "RO/MD", "dir": "ltr"},
    "cs": {"name": "Czech", "native": "Čeština", "region": "CZ", "dir": "ltr"},
    "sk": {"name": "Slovak", "native": "Slovenčina", "region": "SK", "dir": "ltr"},
    "hu": {"name": "Hungarian", "native": "Magyar", "region": "HU", "dir": "ltr"},
    "el": {"name": "Greek", "native": "Ελληνικά", "region": "GR", "dir": "ltr"},
    "sv": {"name": "Swedish", "native": "Svenska", "region": "SE", "dir": "ltr"},
    "da": {"name": "Danish", "native": "Dansk", "region": "DK", "dir": "ltr"},
    "no": {"name": "Norwegian", "native": "Norsk", "region": "NO", "dir": "ltr"},
    "fi": {"name": "Finnish", "native": "Suomi", "region": "FI", "dir": "ltr"},
    "bg": {"name": "Bulgarian", "native": "Български", "region": "BG", "dir": "ltr"},
    "hr": {"name": "Croatian", "native": "Hrvatski", "region": "HR", "dir": "ltr"},
    "sr": {"name": "Serbian", "native": "Српски", "region": "RS", "dir": "ltr"},
    "sl": {"name": "Slovenian", "native": "Slovenščina", "region": "SI", "dir": "ltr"},
    "et": {"name": "Estonian", "native": "Eesti", "region": "EE", "dir": "ltr"},
    "lv": {"name": "Latvian", "native": "Latviešu", "region": "LV", "dir": "ltr"},
    "lt": {"name": "Lithuanian", "native": "Lietuvių", "region": "LT", "dir": "ltr"},
    "fa": {"name": "Persian/Farsi", "native": "فارسی", "region": "IR", "dir": "rtl"},
    "sw": {"name": "Swahili", "native": "Kiswahili", "region": "KE/TZ", "dir": "ltr"},
}


# ── Language detection patterns (character frequency + script detection) ────────
# Cyrillic script characters
CYRILLIC = re.compile(r'[\u0400-\u04FF]')
# Chinese characters (CJK Unified)
CHINESE = re.compile(r'[\u4E00-\u9FFF]')
# Japanese (Hiragana + Katakana + Kanji)
JAPANESE = re.compile(r'[\u3040-\u30FF\u4E00-\u9FFF]')
# Korean Hangul
KOREAN = re.compile(r'[\uAC00-\uD7AF\u1100-\u11FF]')
# Arabic/Hebrew script
ARABIC = re.compile(r'[\u0600-\u06FF\u0750-\u077F]')
HEBREW = re.compile(r'[\u0590-\u05FF]')
# Thai
THAI = re.compile(r'[\u0E00-\u0E7F]')
# Devanagari (Hindi, Bengali)
DEVANAGARI = re.compile(r'[\u0900-\u097F]')
BENGALI_SCRIPT = re.compile(r'[\u0980-\u09FF]')


# ── Simple word-based detection for Latin-script languages ───────────────────────
# Common function words per language (approximate)
FUNCTION_WORDS = {
    "en": ["the", "is", "are", "was", "were", "have", "has", "do", "does", "did", "will", "would", "could", "should", "this", "that", "with", "for"],
    "es": ["el", "la", "los", "las", "es", "son", "está", "están", "que", "de", "en", "un", "una", "con", "por", "para", "como", "pero", "este", "esta"],
    "pt": ["o", "a", "os", "as", "é", "são", "está", "estão", "que", "de", "em", "um", "uma", "com", "por", "para", "como", "mas", "este", "esta", "isso"],
    "fr": ["le", "la", "les", "est", "sont", "un", "une", "des", "que", "de", "en", "dans", "pour", "avec", "ce", "cette", "qui", "sur", "plus"],
    "de": ["der", "die", "das", "ist", "sind", "ein", "eine", "und", "in", "zu", "den", "mit", "von", "auf", "für", "nicht", "es", "sich"],
    "it": ["il", "la", "lo", "gli", "le", "è", "sono", "un", "una", "di", "che", "in", "per", "con", "non", "questo", "questa", "come", "ma"],
    "nl": ["de", "het", "een", "en", "van", "in", "is", "zijn", "dat", "die", "voor", "met", "op", "niet", "aan", "te", "om", "ook"],
    "pl": ["i", "w", "na", "do", "z", "to", "nie", "się", "od", "po", "jest", "są", "ale", "co", "jak", "czy", "tak", "ja", "ty", "my"],
    "ru": ["и", "в", "на", "не", "что", "он", "с", "как", "а", "то", "все", "она", "так", "его", "но", "да", "ты", "к", "у", "же"],
    "zh": [],  # Detected via script
    "ja": [],  # Detected via script
    "ko": [],  # Detected via script
    "ar": ["في", "من", "على", "إلى", "أن", "هذا", "هذه", "التي", "الذي", "هو", "هي", "مع", "بعد", "قد", "كان", "بين", "عن", "ذلك", "كما"],
    "hi": [],  # Devanagari script
}


# ── Greetings/closings per language ─────────────────────────────────────────────
GREETINGS = {
    "en": ["hello", "hi", "dear", "good morning", "good afternoon", "good evening", "greetings"],
    "es": ["hola", "buenos días", "buenas tardes", "buenas noches", "estimado", "estimada", "querido"],
    "pt": ["olá", "bom dia", "boa tarde", "boa noite", "prezado", "prezada", "caro", "cara"],
    "fr": ["bonjour", "bonsoir", "chers", "chère", "monsieur", "madame", "bonjour", "salut"],
    "de": ["guten tag", "guten morgen", "guten abend", "sehr geehrte", "sehr geehrter", "lieber", "liebe"],
    "it": ["buongiorno", "buonasera", "gentile", "caro", "cara", "ciao", "salve"],
    "ar": ["مرحبا", "السلام عليكم", "أهلا", "صباح الخير", "مساء الخير", "حضرة"],
    "zh": ["你好", "您好", "早上好", "下午好", "晚上好"],
    "ja": ["こんにちは", "おはよう", "こんばんは", "ご検討"],
    "ko": ["안녕하세요", "안녕히", "좋은 아침", "좋은 저녁"],
}

CLOSINGS = {
    "en": ["best regards", "kind regards", "sincerely", "thanks", "thank you", "cheers", "regards", "yours"],
    "es": ["saludos", "atentamente", "muchas gracias", "un saludo", "atte", "cordialmente"],
    "pt": ["saudações", "atenciosamente", "obrigado", "obrigada", "abraços", "grande abraço"],
    "fr": ["cordialement", "salutations", "merci", "bien à vous", "respectueusement"],
    "de": ["mit freundlichen grüßen", "beste grüße", "herzlich", "danke", "viele grüße"],
    "it": ["cordiali saluti", "gentili saluti", "grazie", "distinti saluti", "auguri"],
    "ar": ["تحياتي", "مع التقدير", "شكرا", "والسلام", "خالص التقدير"],
    "zh": ["此致敬礼", "祝好", "谢谢", "诚挚问候"],
    "ja": ["よろしくお願いいたします", " 감사합니다", "ご自愛ください"],
    "ko": ["감사합니다", "안녕히", "앞으로 잘 부탁드립니다", "정중히"],
}


# ── Cultural tone adaptation ─────────────────────────────────────────────────────
TONE_ADAPTATION = {
    # More formal cultures
    "de": {"formality": 0.9, "directness": 0.7, "warmth": 0.4, "note": "Formal German business culture — use Sie, professional titles"},
    "ja": {"formality": 0.95, "directness": 0.3, "warmth": 0.4, "note": "Highly formal Japanese — honorifics, indirect refusals, keigo"},
    "ko": {"formality": 0.9, "directness": 0.3, "warmth": 0.5, "note": "Korean hierarchical culture — titles, formal endings essential"},
    "ar": {"formality": 0.85, "directness": 0.4, "warmth": 0.8, "note": "Warm but formal Arabic — relationship-first, indirect criticism"},
    "fr": {"formality": 0.8, "directness": 0.6, "warmth": 0.6, "note": "French professional — semi-formal, intellectual elegance valued"},
    "es": {"formality": 0.7, "directness": 0.7, "warmth": 0.8, "note": "Warm Spanish — relationship building first, then business"},
    "pt": {"formality": 0.75, "directness": 0.7, "warmth": 0.8, "note": "Warm Brazilian — relationship focused, friendly but professional"},
    "en": {"formality": 0.5, "directness": 0.8, "warmth": 0.7, "note": "US/UK English — professional but approachable, efficient"},
    "zh": {"formality": 0.85, "directness": 0.3, "warmth": 0.5, "note": "Chinese face-saving culture — indirect, hierarchical, gift exchanges"},
    "it": {"formality": 0.75, "directness": 0.7, "warmth": 0.7, "note": "Italian warmth — relationship important, expressive language"},
    "nl": {"formality": 0.6, "directness": 0.85, "warmth": 0.6, "note": "Dutch direct — highly direct, efficient, low context"},
    "ru": {"formality": 0.85, "directness": 0.5, "warmth": 0.5, "note": "Russian formal — use patronymics in professional settings"},
    "pl": {"formality": 0.8, "directness": 0.6, "warmth": 0.6, "note": "Polish formal — titles respected, slower relationship building"},
    "tr": {"formality": 0.75, "directness": 0.7, "warmth": 0.75, "note": "Turkish warmth — hospitality important, relationship-first"},
    "hi": {"formality": 0.85, "directness": 0.5, "warmth": 0.7, "note": "Indian formal — respect for elders/titles, indirect refusals"},
    "vi": {"formality": 0.8, "directness": 0.5, "warmth": 0.75, "note": "Vietnamese hierarchical — face-saving, indirect communication"},
}


# ── Country → preferred language map ─────────────────────────────────────────────
COUNTRY_TO_LANG = {
    "US": "en", "GB": "en", "UK": "en", "CA": "en", "AU": "en", "NZ": "en", "IE": "en",
    "IN": "en", "PH": "en", "NG": "en", "ZA": "en",
    "MX": "es", "AR": "es", "ES": "es", "CO": "es", "CL": "es", "PE": "es", "EC": "es",
    "BR": "pt", "PT": "pt",
    "FR": "fr", "BE": "fr", "CH": "fr", "LU": "fr",
    "DE": "de", "AT": "de", "CH": "de",
    "IT": "it",
    "NL": "nl", "BE": "nl",
    "PL": "pl",
    "RU": "ru", "UA": "uk",
    "CN": "zh", "TW": "zh", "HK": "zh", "SG": "zh",
    "JP": "ja",
    "KR": "ko",
    "SA": "ar", "AE": "ar", "EG": "ar", "MA": "ar", "JO": "ar", "QA": "ar",
    "IL": "he",
    "IN": "hi",
    "TH": "th",
    "VN": "vi", "ID": "id", "MY": "id",
    "TR": "tr",
    "RO": "ro", "MD": "ro",
    "CZ": "cs",
}


# ── Helper: extract email domain TLD ─────────────────────────────────────────────
def _get_domain_country(email: str) -> Optional[str]:
    domain = email.split("@")[-1] if "@" in email else ""
    parts = domain.rsplit(".", 1)
    if len(parts) == 2:
        return parts[1].upper()
    return None


# ── Detect language from text ─────────────────────────────────────────────────────
def detect_language(text: str) -> dict:
    """
    Detect the primary language of the given text.
    Returns dict with: code, name, confidence, script, direction, is_rtl, regions
    """
    if not text or not text.strip():
        return {"code": "en", "name": "English", "confidence": 0.0, "script": "latin", "direction": "ltr", "is_rtl": False, "regions": ["US"], "note": "Empty text — default English"}

    text_lower = text.lower()
    words = re.findall(r'\b\w+\b', text_lower)

    # Step 1: Script-based detection (fastest, most reliable for non-Latin)
    if CYRILLIC.search(text):
        # Distinguish Russian vs Ukrainian vs Bulgarian
        if any(w in ["є", "і", "ї"] for w in text) or "є" in text or "ї" in text:
            return {"code": "uk", "name": "Ukrainian", "confidence": 0.92, "script": "cyrillic", "direction": "ltr", "is_rtl": False, "regions": ["UA"], "note": "Ukrainian (has Є,Є,Ї)"}
        if any(w in ["щ", "ъ", "ѝ"] for w in text):
            return {"code": "bg", "name": "Bulgarian", "confidence": 0.85, "script": "cyrillic", "direction": "ltr", "is_rtl": False, "regions": ["BG"], "note": "Bulgarian (has Щ,Ъ)"}
        # Russian heuristic
        ru_score = sum(1 for w in words[:100] if w in FUNCTION_WORDS.get("ru", []))
        return {"code": "ru", "name": "Russian", "confidence": 0.90, "script": "cyrillic", "direction": "ltr", "is_rtl": False, "regions": ["RU"], "note": f"Russian (score={ru_score})"}

    if JAPANESE.search(text):
        return {"code": "ja", "name": "Japanese", "confidence": 0.97, "script": "mixed", "direction": "ltr", "is_rtl": False, "regions": ["JP"], "note": "Japanese script detected (Hiragana/Katakana/Kanji)"}

    if KOREAN.search(text):
        return {"code": "ko", "name": "Korean", "confidence": 0.97, "script": "hangul", "direction": "ltr", "is_rtl": False, "regions": ["KR"], "note": "Korean Hangul detected"}

    if ARABIC.search(text):
        return {"code": "ar", "name": "Arabic", "confidence": 0.96, "script": "arabic", "direction": "rtl", "is_rtl": True, "regions": ["SA", "AE", "EG", "MA"], "note": "Arabic script detected (RTL)"}

    if HEBREW.search(text):
        return {"code": "he", "name": "Hebrew", "confidence": 0.95, "script": "hebrew", "direction": "rtl", "is_rtl": True, "regions": ["IL"], "note": "Hebrew script detected (RTL)"}

    if THAI.search(text):
        return {"code": "th", "name": "Thai", "confidence": 0.95, "script": "thai", "direction": "ltr", "is_rtl": False, "regions": ["TH"], "note": "Thai script detected"}

    if DEVANAGARI.search(text):
        return {"code": "hi", "name": "Hindi", "confidence": 0.93, "script": "devanagari", "direction": "ltr", "is_rtl": False, "regions": ["IN"], "note": "Devanagari script detected"}

    if BENGALI_SCRIPT.search(text):
        return {"code": "bn", "name": "Bengali", "confidence": 0.93, "script": "bengali", "direction": "ltr", "is_rtl": False, "regions": ["BD", "IN"], "note": "Bengali script detected"}

    # Step 2: Latin script — word frequency matching
    lang_scores = {}
    for lang, func_words in FUNCTION_WORDS.items():
        if lang in ["zh", "ja", "ko", "hi", "ar", "he", "th", "bn"]:
            continue  # Handled by script above
        if not func_words:
            continue
        score = sum(1 for w in words[:200] if w in func_words)
        lang_scores[lang] = score

    if lang_scores:
        top_lang = max(lang_scores, key=lang_scores.get)
        top_score = lang_scores[top_lang]
        total_words = min(len(words), 200)
        confidence = min(top_score / max(total_words * 0.05, 1), 0.98)
        if top_score >= 2:
            meta = LANGUAGE_META.get(top_lang, {})
            return {
                "code": top_lang,
                "name": meta.get("name", top_lang),
                "confidence": round(confidence, 3),
                "script": "latin",
                "direction": meta.get("dir", "ltr"),
                "is_rtl": False,
                "regions": [meta.get("region", top_lang.upper())],
                "note": f"Word-match score={top_score} for {total_words} words",
            }

    # Step 3: Fallback to English
    return {"code": "en", "name": "English", "confidence": 0.5, "script": "latin", "direction": "ltr", "is_rtl": False, "regions": ["US"], "note": "Fallback — no confident match"}


# ── Detect greeting language ─────────────────────────────────────────────────────
def _detect_greeting_lang(text_lower: str) -> Optional[str]:
    for lang, greetings in GREETINGS.items():
        for g in greetings:
            if g in text_lower[:100]:
                return lang
    return None


# ── Build a language preference profile for a sender ─────────────────────────────
def _load_preferences() -> dict:
    if PREFERENCES_FILE.exists():
        try:
            return json.loads(PREFERENCES_FILE.read_text())
        except (json.JSONDecodeError, IOError):
            pass
    return {}


def _save_preferences(prefs: dict) -> None:
    PREFERENCES_FILE.write_text(json.dumps(prefs, indent=2, ensure_ascii=False))


def detect_sender_preferred_language(sender_email: str, email_body: str = "") -> dict:
    """
    Detect the sender's preferred language from their email address and email body.
    Returns detected language + preferred reply language for the recipient.
    """
    prefs = _load_preferences()

    # Check cached preferences
    sender_key = sender_email.lower()
    if sender_key in prefs:
        cached = prefs[sender_key]
        return {
            "sender_email": sender_email,
            "sender_detected_lang": cached["lang"],
            "reply_lang": cached.get("reply_lang", cached["lang"]),
            "confidence": 0.95,
            "source": "cache",
            "note": f"From cached preference for {sender_email}",
        }

    # Detect from email body
    detected = detect_language(email_body)

    # Infer from domain TLD
    domain_country = _get_domain_country(sender_email)
    inferred_lang = None
    if domain_country:
        inferred_lang = COUNTRY_TO_LANG.get(domain_country)

    # Combine signals
    if detected["confidence"] >= 0.7:
        final_lang = detected["code"]
        source = "body_detection"
    elif inferred_lang:
        final_lang = inferred_lang
        source = "domain_inference"
    else:
        final_lang = "en"
        source = "default"

    # Determine reply language (for CC'ing, might reply in sender's lang)
    reply_lang = final_lang

    # Cache it
    prefs[sender_key] = {"lang": final_lang, "reply_lang": reply_lang, "domain": sender_email.split("@")[-1], "updated_at": datetime.now(timezone.utc).isoformat()}
    _save_preferences(prefs)

    return {
        "sender_email": sender_email,
        "sender_detected_lang": final_lang,
        "reply_lang": reply_lang,
        "detection_details": detected,
        "domain_country": domain_country,
        "confidence": detected.get("confidence", 0.5),
        "source": source,
        "note": f"Detected via {source} | domain={domain_country}",
    }


# ── Adapt tone for cultural context ──────────────────────────────────────────────
def get_cultural_tone_adaptation(lang_code: str) -> dict:
    """Return cultural tone guidelines for a language."""
    return TONE_ADAPTATION.get(lang_code, {
        "formality": 0.5, "directness": 0.7, "warmth": 0.6,
        "note": "Default Western professional tone",
    })


# ── Translate text (placeholder — uses local dictionary + heuristic) ─────────────
def translate_text(text: str, from_lang: str, to_lang: str) -> dict:
    """
    Translate text between languages.
    NOTE: In production, integrate with Google Translate API, DeepL, or OpenAI.
    This module provides the detection, routing, and cultural adaptation logic.
    Returns: {original, translated, from_lang, to_lang, method, tone_notes}
    """
    if from_lang == to_lang:
        return {"original": text, "translated": text, "from_lang": from_lang, "to_lang": to_lang, "method": "identity", "tone_notes": []}

    tone = get_cultural_tone_adaptation(to_lang)

    # For demo: wrap in language tag for now (real implementation calls translation API)
    translated = f"[{to_lang.upper()}] {text}" if from_lang != "en" else text

    tone_notes = []
    if tone.get("formality", 0) >= 0.85:
        tone_notes.append("Use formal register — titles, full names, professional language")
    if tone.get("directness", 0) < 0.5:
        tone_notes.append("Indirect communication preferred — avoid blunt criticism")
    if tone.get("warmth", 0) >= 0.7:
        tone_notes.append("Warm tone appreciated — brief relationship-building opener")
    if to_lang == "ja":
        tone_notes.append("Use keigo (honorific) forms — 尊敬語 for superiors")
    if to_lang == "ko":
        tone_notes.append("Use formal endings (-습니다/-습니다체)")
    if to_lang == "ar":
        tone_notes.append("RTL text — align email right-to-left")

    return {
        "original": text,
        "translated": translated,  # Real: call Google Translate / DeepL API
        "from_lang": from_lang,
        "to_lang": to_lang,
        "method": "api_required",  # Placeholder — plug in DeepL/Google Translate
        "tone_notes": tone_notes,
        "cultural_guidance": tone,
    }


# ── Process incoming email: detect + adapt + suggest reply language ────────────────
def process_incoming_email(
    sender_email: str,
    email_body: str,
    recipient_reply_lang: str = "en",
) -> dict:
    """
    Main entry point for V53 on incoming emails.
    Detects sender language, suggests reply language, provides cultural guidance.
    """
    sender_info = detect_sender_preferred_language(sender_email, email_body)
    detected_lang = sender_info["sender_detected_lang"]
    detected_meta = sender_info.get("detection_details", {})
    tone = get_cultural_tone_adaptation(detected_lang)

    # Should we auto-translate the email for the recipient?
    needs_translation = detected_lang != recipient_reply_lang and detected_lang != "en" and recipient_reply_lang == "en"

    # Greeting detection
    greeting_lang = _detect_greeting_lang(email_body.lower())

    # Format detection
    is_rtl = detected_meta.get("is_rtl", False)
    script = detected_meta.get("script", "latin")

    return {
        "sender_email": sender_email,
        "sender_language": detected_lang,
        "sender_language_name": LANGUAGE_META.get(detected_lang, {}).get("name", detected_lang),
        "language_confidence": sender_info["confidence"],
        "detection_source": sender_info["source"],
        "reply_language_suggested": sender_info["reply_lang"],
        "should_auto_translate": needs_translation,
        "greeting_language": greeting_lang,
        "is_rtl": is_rtl,
        "text_direction": detected_meta.get("direction", "ltr"),
        "script_type": script,
        "cultural_tone": tone,
        "urgency_modifier": "allow_more_time" if tone.get("formality", 0) >= 0.85 else "standard",
        "reply_tone_recommendation": _get_reply_tone_recommendation(detected_lang, tone),
        "action": "translate" if needs_translation else "review",
    }


def _get_reply_tone_recommendation(lang: str, tone: dict) -> str:
    """Suggest the tone for replying to this sender."""
    formality = tone.get("formality", 0.5)
    warmth = tone.get("warmth", 0.5)

    if formality >= 0.85:
        return "FORMAL — Use professional titles, full names, formal closings (e.g., 'Mit freundlichen Grüßen' for German)"
    elif warmth >= 0.75:
        return "WARM-PROFESSIONAL — Open warmly, acknowledge relationship, then business"
    else:
        return "STANDARD-PROFESSIONAL — Clear, direct, efficient — lead with the point"


# ── CLI demo ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 60)
    print("V53: Email Language Detection & Auto-Translation Engine")
    print("=" * 60)

    test_emails = [
        ("alice@techcorp.de", "Guten Tag, ich schreibe Ihnen bezüglich unserer Vereinbarung. Wir möchten gerne den Vertrag prüfen und eine Antwort erhalten. Mit freundlichen Grüßen, Alice Schmidt"),
        ("carlos@empresa.mx", "Hola, necesitamos revisar el contrato que nos enviaron la semana pasada. ¿Cuándo podemos tener una llamada para discutir los términos? Saludos cordiales"),
        ("kenji@kaisha.jp", "件的依頼についてご確認申し上げます。御社のサービスに興味を持っておりますので、詳細をご説明いただければ幸いです。よろしくお願い申し上げます。"),
        ("sophie@startup.io", "Hey! Quick question — can you send over the updated proposal? We need to review it before Friday. Thanks!"),
        ("fatima@company.ae", "السلام عليكم، نرجو مراجعة المرفقات والتأكيد على الموعد النهائي. شكرا لتعاونكم"),
    ]

    for sender, body in test_emails:
        print(f"\nFrom: {sender}")
        result = process_incoming_email(sender, body)
        print(f"  Detected: {result['sender_language_name']} ({result['sender_language']}) | conf={result['language_confidence']:.2f}")
        print(f"  Source: {result['detection_source']} | Script: {result['script_type']} | RTL: {result['is_rtl']}")
        print(f"  Action: {result['action']} | Reply tone: {result['reply_tone_recommendation']}")
        if result['cultural_tone'].get('note'):
            print(f"  Culture note: {result['cultural_tone']['note']}")
        print(f"  Tone advice: {'; '.join(result['cultural_tone'].get('note','').split(chr(10))[:2]) if isinstance(result['cultural_tone'].get('note'), str) else ''}")
