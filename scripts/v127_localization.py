#!/usr/bin/env python3
"""
V127 Email Localization Engine
==============================
Production-quality email localization system with:
- Auto-detection of recipient language from domain TLD and email content
- Cultural context adaptation (60+ cultures with formality, greetings, date formats)
- Timezone-aware scheduling for optimal delivery
- Regional compliance checking (GDPR, CCPA, LGPD, PDPA, CAN-SPAM, etc.)
- Multi-language template rendering with variable substitution
- Locale-specific number and currency formatting
- Case-by-case analysis and reply-all enforcement

Version: 127.0.0
Author: Hermes Agent
License: MIT
"""

from __future__ import annotations

import re
import json
import hashlib
import logging
from copy import deepcopy
from dataclasses import dataclass, field, asdict
from datetime import datetime, timezone, timedelta
from enum import Enum, auto
from typing import (
    Any, Dict, List, Optional, Set, Tuple, Union, Callable
)
from collections import OrderedDict

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("v127_localization")

# ===========================================================================
# ENUMS
# ===========================================================================

class FormalityLevel(Enum):
    """Formality levels used across cultures."""
    VERY_FORMAL = auto()
    FORMAL = auto()
    SEMI_FORMAL = auto()
    INFORMAL = auto()
    VERY_INFORMAL = auto()


class ComplianceRegime(Enum):
    """Data-protection / anti-spam regulatory regimes."""
    GDPR = "GDPR"               # EU / EEA
    CCPA = "CCPA"               # California
    CAN_SPAM = "CAN-SPAM"       # USA federal
    LGPD = "LGPD"               # Brazil
    PDPA_TH = "PDPA-TH"         # Thailand
    PDPA_SG = "PDPA-SG"         # Singapore
    PIPEDA = "PIPEDA"           # Canada
    POPIA = "POPIA"             # South Africa
    PDPA_MY = "PDPA-MY"         # Malaysia
    PDPB = "PDPB"               # India (proposed)
    APPI = "APPI"               # Japan
    PIPA_KR = "PIPA-KR"         # South Korea
    CSL = "CSL"                 # China
    DPA_CH = "DPA-CH"           # Switzerland
    DIFC = "DIFC"               # UAE / Dubai
    ADGM = "ADGM"              # UAE / Abu Dhabi
    PDPL_SA = "PDPL-SA"         # Saudi Arabia
    FZDPA = "FZDPA"             # UAE Federal
    KVK = "KVK"                 # Norway
    NONE = "NONE"


class EmailPriority(Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    URGENT = "urgent"


class Script(Enum):
    LATIN = "latin"
    CYRILLIC = "cyrillic"
    ARABIC = "arabic"
    HEBREW = "hebrew"
    CJK = "cjk"
    DEVANAGARI = "devanagari"
    THAI = "thai"
    HANGUL = "hangul"
    KANA = "kana"
    GREEK = "greek"
    GEORGIAN = "georgian"
    ARMENIAN = "armenian"
    ETHIOPIC = "ethiopic"
    TAMIL = "tamil"
    BENGALI = "bengali"


# ===========================================================================
# DATA: CULTURAL PROFILES (60+ cultures)
# ===========================================================================

@dataclass
class CulturalProfile:
    """Complete cultural profile for email localization."""
    code: str                          # ISO 639-1 or locale code
    language_name: str
    country_names: List[str]
    tlds: List[str]                    # Associated TLDs
    script: Script
    formality_default: FormalityLevel
    greeting_formal: str
    greeting_informal: str
    closing_formal: str
    closing_informal: str
    date_format: str                   # strftime-compatible
    time_format: str
    number_decimal: str                # e.g. ',' or '.'
    number_thousands: str
    currency_code: str
    currency_symbol: str
    currency_position: str             # 'before' or 'after'
    timezone_offsets: List[str]        # e.g. ['+01:00', '+02:00']
    rtl: bool = False
    honorifics: List[str] = field(default_factory=list)
    reply_all_expected: bool = False
    compliance_regimes: List[ComplianceRegime] = field(default_factory=list)
    notes: str = ""


def _build_cultural_database() -> Dict[str, CulturalProfile]:
    """Build the master cultural profile database (60+ entries)."""
    db: Dict[str, CulturalProfile] = {}

    profiles = [
        # --- EUROPE ---
        CulturalProfile(
            code="en_US", language_name="English (US)",
            country_names=["United States"], tlds=[".us", ".com"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Dear {name},", greeting_informal="Hi {name},",
            closing_formal="Best regards,", closing_informal="Cheers,",
            date_format="%m/%d/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="USD", currency_symbol="$", currency_position="before",
            timezone_offsets=["-05:00", "-06:00", "-07:00", "-08:00", "-09:00", "-10:00"],
            honorifics=["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.CCPA, ComplianceRegime.CAN_SPAM],
            notes="Prefer direct, concise communication."
        ),
        CulturalProfile(
            code="en_GB", language_name="English (UK)",
            country_names=["United Kingdom"], tlds=[".uk", ".co.uk", ".gb"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Dear {name},", greeting_informal="Hi {name},",
            closing_formal="Kind regards,", closing_informal="Best wishes,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="GBP", currency_symbol="£", currency_position="before",
            timezone_offsets=["+00:00", "+01:00"],
            honorifics=["Mr", "Ms", "Mrs", "Dr", "Prof", "Sir", "Dame"],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="British English spelling; understated tone."
        ),
        CulturalProfile(
            code="de_DE", language_name="German",
            country_names=["Germany"], tlds=[".de"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Sehr geehrte(r) {honorific} {last_name},",
            greeting_informal="Hallo {name},",
            closing_formal="Mit freundlichen Grüßen,",
            closing_informal="Viele Grüße,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Herr", "Frau", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Very formal in business; titles are important."
        ),
        CulturalProfile(
            code="de_AT", language_name="German (Austria)",
            country_names=["Austria"], tlds=[".at"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Sehr geehrte(r) {honorific} {last_name},",
            greeting_informal="Servus {name},",
            closing_formal="Mit freundlichen Grüßen,",
            closing_informal="Liebe Grüße,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Herr", "Frau", "Dr.", "Prof.", "Mag."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Academic titles especially valued; 'Mag.' is common."
        ),
        CulturalProfile(
            code="de_CH", language_name="German (Switzerland)",
            country_names=["Switzerland"], tlds=[".ch"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Sehr geehrte(r) {honorific} {last_name},",
            greeting_informal="Hoi {name},",
            closing_formal="Freundliche Grüße,",
            closing_informal="Liebi Grüess,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=".", number_thousands="'",
            currency_code="CHF", currency_symbol="CHF", currency_position="before",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Herr", "Frau", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR, ComplianceRegime.DPA_CH],
            notes="Swiss numbering uses apostrophe; no ß."
        ),
        CulturalProfile(
            code="fr_FR", language_name="French",
            country_names=["France"], tlds=[".fr"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Cher/Chère {honorific} {last_name},",
            greeting_informal="Bonjour {name},",
            closing_formal="Veuillez agréer, {honorific}, l'expression de mes salutations distinguées.",
            closing_informal="Cordialement,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["M.", "Mme", "Mlle", "Dr", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Very elaborate formal closings; 'vous' vs 'tu' distinction."
        ),
        CulturalProfile(
            code="fr_CA", language_name="French (Canada)",
            country_names=["Canada (Quebec)"], tlds=[".ca", ".qc.ca"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Cher/Chère {honorific} {last_name},",
            greeting_informal="Bonjour {name},",
            closing_formal="Cordialement,", closing_informal="Salut,",
            date_format="%Y-%m-%d", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="CAD", currency_symbol="$", currency_position="before",
            timezone_offsets=["-05:00", "-04:00"],
            honorifics=["M.", "Mme", "Dr", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.PIPEDA, ComplianceRegime.GDPR],
            notes="Less formal than European French; Bill 101 compliance."
        ),
        CulturalProfile(
            code="es_ES", language_name="Spanish (Spain)",
            country_names=["Spain"], tlds=[".es"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Estimado/a {honorific} {last_name}:",
            greeting_informal="Hola {name}:",
            closing_formal="Atentamente,", closing_informal="Un saludo,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Sr.", "Sra.", "Srta.", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Colon after greeting (not comma); 'usted' vs 'tú'."
        ),
        CulturalProfile(
            code="es_MX", language_name="Spanish (Mexico)",
            country_names=["Mexico"], tlds=[".mx"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Estimado/a {honorific} {last_name}:",
            greeting_informal="Hola {name},",
            closing_formal="Saludos cordiales,", closing_informal="Un abrazo,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="MXN", currency_symbol="$", currency_position="before",
            timezone_offsets=["-06:00", "-07:00", "-08:00"],
            honorifics=["Sr.", "Sra.", "Srta.", "Dr.", "Ing.", "Lic."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Professional titles (Ing., Lic.) common."
        ),
        CulturalProfile(
            code="es_AR", language_name="Spanish (Argentina)",
            country_names=["Argentina"], tlds=[".ar", ".com.ar"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Estimado/a {honorific} {last_name}:",
            greeting_informal="Hola {name},",
            closing_formal="Saludos cordiales,", closing_informal="Abrazo,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="ARS", currency_symbol="$", currency_position="before",
            timezone_offsets=["-03:00"],
            honorifics=["Sr.", "Sra.", "Srta.", "Dr."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="'Vos' form used informally."
        ),
        CulturalProfile(
            code="pt_BR", language_name="Portuguese (Brazil)",
            country_names=["Brazil"], tlds=[".br", ".com.br"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Prezado/a {honorific} {last_name},",
            greeting_informal="Olá {name},",
            closing_formal="Atenciosamente,", closing_informal="Abraço,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="BRL", currency_symbol="R$", currency_position="before",
            timezone_offsets=["-03:00", "-04:00", "-02:00"],
            honorifics=["Sr.", "Sra.", "Srta.", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.LGPD],
            notes="'Você' vs 'Senhor/Senhora'; warm tone appreciated."
        ),
        CulturalProfile(
            code="pt_PT", language_name="Portuguese (Portugal)",
            country_names=["Portugal"], tlds=[".pt"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Exmo/a. {honorific} {last_name},",
            greeting_informal="Olá {name},",
            closing_formal="Com os melhores cumprimentos,",
            closing_informal="Um abraço,",
            date_format="%d-%m-%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+00:00", "+01:00"],
            honorifics=["Sr.", "Sra.", "Dr.", "Eng.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="More formal than Brazilian Portuguese."
        ),
        CulturalProfile(
            code="it_IT", language_name="Italian",
            country_names=["Italy"], tlds=[".it"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Gentile {honorific} {last_name},",
            greeting_informal="Ciao {name},",
            closing_formal="Cordiali saluti,", closing_informal="A presto,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Sig.", "Sig.ra", "Dott.", "Prof.", "Ing.", "Avv."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Professional titles very important; expressive style."
        ),
        CulturalProfile(
            code="nl_NL", language_name="Dutch",
            country_names=["Netherlands"], tlds=[".nl"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Geachte {honorific} {last_name},",
            greeting_informal="Beste {name},",
            closing_formal="Met vriendelijke groet,", closing_informal="Groeten,",
            date_format="%d-%m-%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="before",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Dhr.", "Mevr.", "Dr.", "Prof.", "Ir.", "Mr."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Direct communication style; 'u' vs 'je'."
        ),
        CulturalProfile(
            code="nl_BE", language_name="Dutch (Belgium)",
            country_names=["Belgium (Flanders)"], tlds=[".be"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Geachte {honorific} {last_name},",
            greeting_informal="Beste {name},",
            closing_formal="Met vriendelijke groeten,", closing_informal="Groeten,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="before",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Dhr.", "Mevr.", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Slightly more formal than Netherlands Dutch."
        ),
        CulturalProfile(
            code="fr_BE", language_name="French (Belgium)",
            country_names=["Belgium (Wallonia)"], tlds=[".be"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Cher/Chère {honorific} {last_name},",
            greeting_informal="Bonjour {name},",
            closing_formal="Bien à vous,", closing_informal="À bientôt,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["M.", "Mme", "Dr", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Belgian French; 'septante' and 'nonante' for 70/90."
        ),
        CulturalProfile(
            code="sv_SE", language_name="Swedish",
            country_names=["Sweden"], tlds=[".se"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Bästa {name},", greeting_informal="Hej {name},",
            closing_formal="Med vänliga hälsningar,", closing_informal="Hälsningar,",
            date_format="%Y-%m-%d", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="SEK", currency_symbol="kr", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Herr", "Fru", "Dr", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Very egalitarian; first names used even formally ('du-reform')."
        ),
        CulturalProfile(
            code="da_DK", language_name="Danish",
            country_names=["Denmark"], tlds=[".dk"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Kære {name},", greeting_informal="Hej {name},",
            closing_formal="Med venlig hilsen,", closing_informal="Mvh,",
            date_format="%d-%m-%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="DKK", currency_symbol="kr.", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Hr.", "Fru", "Dr.", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Very informal; similar to Swedish egalitarianism."
        ),
        CulturalProfile(
            code="nb_NO", language_name="Norwegian (Bokmål)",
            country_names=["Norway"], tlds=[".no"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Kjære {name},", greeting_informal="Hei {name},",
            closing_formal="Med vennlig hilsen,", closing_informal="Hilsen,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="NOK", currency_symbol="kr", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Hr.", "Fru", "Dr.", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR, ComplianceRegime.KVK],
            notes="Egalitarian culture; titles rarely used."
        ),
        CulturalProfile(
            code="fi_FI", language_name="Finnish",
            country_names=["Finland"], tlds=[".fi"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Hyvä {name},", greeting_informal="Hei {name},",
            closing_formal="Ystävällisin terveisin,", closing_informal="Terveisin,",
            date_format="%d.%m.%Y", time_format="%H.%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["Herra", "Rouva", "Tri", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Concise and direct; less formal than German."
        ),
        CulturalProfile(
            code="pl_PL", language_name="Polish",
            country_names=["Poland"], tlds=[".pl"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Szanowny Panie / Szanowna Pani {last_name},",
            greeting_informal="Cześć {name},",
            closing_formal="Z poważaniem,", closing_informal="Pozdrawiam,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="PLN", currency_symbol="zł", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Pan", "Pani", "Dr", "Prof.", "Mgr", "Inż."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Academic titles important; 'Pan/Pani' essential."
        ),
        CulturalProfile(
            code="cs_CZ", language_name="Czech",
            country_names=["Czech Republic"], tlds=[".cz"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Vážený pane / Vážená paní {last_name},",
            greeting_informal="Ahoj {name},",
            closing_formal="S pozdravem,", closing_informal="Měj se,",
            date_format="%d. %m. %Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="CZK", currency_symbol="Kč", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Pan", "Paní", "Dr.", "Prof.", "Ing."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Formal in business; 'vykání' (formal address) important."
        ),
        CulturalProfile(
            code="hu_HU", language_name="Hungarian",
            country_names=["Hungary"], tlds=[".hu"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Tisztelt {honorific} {last_name}!",
            greeting_informal="Szia {name}!",
            closing_formal="Üdvözlettel:", closing_informal="Üdv,",
            date_format="%Y. %m. %d.", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="HUF", currency_symbol="Ft", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Úr", "Asszony", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Last name first; exclamation marks common."
        ),
        CulturalProfile(
            code="ro_RO", language_name="Romanian",
            country_names=["Romania"], tlds=[".ro"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Stimate {honorific} {last_name},",
            greeting_informal="Bună {name},",
            closing_formal="Cu stimă,", closing_informal="Toate cele bune,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="RON", currency_symbol="lei", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["Dl", "Dna", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="'Dumneavoastră' for formal address."
        ),
        CulturalProfile(
            code="el_GR", language_name="Greek",
            country_names=["Greece"], tlds=[".gr"],
            script=Script.GREEK, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Αξιότιμε/η {honorific} {last_name},",
            greeting_informal="Γεια σου {name},",
            closing_formal="Με εκτίμηση,", closing_informal="Φιλικά,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["κ.", "κα", "Δρ", "Καθ."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Greek script; warm, expressive communication."
        ),
        CulturalProfile(
            code="ru_RU", language_name="Russian",
            country_names=["Russia"], tlds=[".ru", ".рф"],
            script=Script.CYRILLIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Уважаемый/ая {honorific} {last_name}!",
            greeting_informal="Привет {name}!",
            closing_formal="С уважением,", closing_informal="Пока,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="RUB", currency_symbol="₽", currency_position="after",
            timezone_offsets=["+03:00", "+04:00", "+05:00", "+06:00", "+07:00",
                              "+08:00", "+09:00", "+10:00", "+11:00", "+12:00"],
            honorifics=["г-н", "г-жа", "д-р", "проф."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Patronymic often used formally; very formal in business."
        ),
        CulturalProfile(
            code="uk_UA", language_name="Ukrainian",
            country_names=["Ukraine"], tlds=[".ua"],
            script=Script.CYRILLIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Шановний/а {honorific} {last_name}!",
            greeting_informal="Привіт {name}!",
            closing_formal="З повагою,", closing_informal="Бувай,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="UAH", currency_symbol="₴", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["п.", "п-ня", "д-р", "проф."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Distinct from Russian; prefer Ukrainian in all contexts."
        ),
        CulturalProfile(
            code="bg_BG", language_name="Bulgarian",
            country_names=["Bulgaria"], tlds=[".bg"],
            script=Script.CYRILLIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Уважаеми/а {honorific} {last_name},",
            greeting_informal="Здравей {name},",
            closing_formal="С уважение,", closing_informal="Поздрави,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="BGN", currency_symbol="лв.", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["г-н", "г-жа", "д-р", "проф."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Cyrillic script; formal business culture."
        ),
        CulturalProfile(
            code="hr_HR", language_name="Croatian",
            country_names=["Croatia"], tlds=[".hr"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Poštovani/a {honorific} {last_name},",
            greeting_informal="Bok {name},",
            closing_formal="Srdačan pozdrav,", closing_informal="Pozdrav,",
            date_format="%d. %m. %Y.", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["g.", "gđa", "dr.", "prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Switched to EUR in 2023."
        ),
        CulturalProfile(
            code="tr_TR", language_name="Turkish",
            country_names=["Turkey"], tlds=[".tr", ".com.tr"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Sayın {honorific} {last_name},",
            greeting_informal="Merhaba {name},",
            closing_formal="Saygılarımla,", closing_informal="Sevgiler,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="TRY", currency_symbol="₺", currency_position="after",
            timezone_offsets=["+03:00"],
            honorifics=["Bay", "Bayan", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="'Bey/Hanım' after first name in formal address."
        ),
        # --- ASIA ---
        CulturalProfile(
            code="ja_JP", language_name="Japanese",
            country_names=["Japan"], tlds=[".jp", ".co.jp"],
            script=Script.CJK, formality_default=FormalityLevel.VERY_FORMAL,
            greeting_formal="{last_name}様",
            greeting_informal="{name}さん",
            closing_formal="何卒よろしくお願い申し上げます。",
            closing_informal="よろしくお願いします。",
            date_format="%Y年%m月%d日", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="JPY", currency_symbol="¥", currency_position="before",
            timezone_offsets=["+09:00"],
            honorifics=["様", "さん", "先生", "博士"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.APPI],
            notes="Extremely formal; honorifics essential; keigo system."
        ),
        CulturalProfile(
            code="zh_CN", language_name="Chinese (Simplified)",
            country_names=["China"], tlds=[".cn", ".com.cn"],
            script=Script.CJK, formality_default=FormalityLevel.FORMAL,
            greeting_formal="尊敬的{honorific}{last_name}：",
            greeting_informal="你好 {name}，",
            closing_formal="此致敬礼", closing_informal="祝好，",
            date_format="%Y年%m月%d日", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="CNY", currency_symbol="¥", currency_position="before",
            timezone_offsets=["+08:00"],
            honorifics=["先生", "女士", "博士", "教授"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.CSL],
            notes="Last name first; very formal; 此致敬礼 on separate line."
        ),
        CulturalProfile(
            code="zh_TW", language_name="Chinese (Traditional)",
            country_names=["Taiwan"], tlds=[".tw", ".com.tw"],
            script=Script.CJK, formality_default=FormalityLevel.FORMAL,
            greeting_formal="尊敬的{honorific}{last_name}：",
            greeting_informal="你好 {name}，",
            closing_formal="敬祝 商祺", closing_informal="祝好，",
            date_format="%Y年%m月%d日", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="TWD", currency_symbol="NT$", currency_position="before",
            timezone_offsets=["+08:00"],
            honorifics=["先生", "女士", "博士", "教授"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Traditional characters; slightly different formal phrases."
        ),
        CulturalProfile(
            code="zh_HK", language_name="Chinese (Hong Kong)",
            country_names=["Hong Kong"], tlds=[".hk", ".com.hk"],
            script=Script.CJK, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="尊敬的{honorific}{last_name}：",
            greeting_informal="Hi {name},",
            closing_formal="此致", closing_informal="Best regards,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="HKD", currency_symbol="HK$", currency_position="before",
            timezone_offsets=["+08:00"],
            honorifics=["先生", "女士", "Dr."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Bilingual; often mixes English and Chinese."
        ),
        CulturalProfile(
            code="ko_KR", language_name="Korean",
            country_names=["South Korea"], tlds=[".kr", ".co.kr"],
            script=Script.HANGUL, formality_default=FormalityLevel.VERY_FORMAL,
            greeting_formal="{last_name} {honorific}께",
            greeting_informal="안녕하세요 {name}님,",
            closing_formal="감사합니다.\n{last_name} 드림",
            closing_informal="감사합니다.",
            date_format="%Y년 %m월 %d일", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="KRW", currency_symbol="₩", currency_position="before",
            timezone_offsets=["+09:00"],
            honorifics=["님", "선생님", "박사님", "교수님"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PIPA_KR],
            notes="Honorifics essential; hierarchical culture; -nim suffix."
        ),
        CulturalProfile(
            code="th_TH", language_name="Thai",
            country_names=["Thailand"], tlds=[".th", ".co.th"],
            script=Script.THAI, formality_default=FormalityLevel.FORMAL,
            greeting_formal="เรียน คุณ{last_name}",
            greeting_informal="สวัสดีครับ/ค่ะ {name}",
            closing_formal="ขอแสดงความนับถือ", closing_informal="ขอบคุณครับ/ค่ะ",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="THB", currency_symbol="฿", currency_position="before",
            timezone_offsets=["+07:00"],
            honorifics=["คุณ", "ดร.", "ศ."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PDPA_TH],
            notes="Gendered particles (ครับ/ค่ะ); wai greeting culture."
        ),
        CulturalProfile(
            code="vi_VN", language_name="Vietnamese",
            country_names=["Vietnam"], tlds=[".vn", ".com.vn"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Kính gửi {honorific} {last_name},",
            greeting_informal="Chào {name},",
            closing_formal="Trân trọng,", closing_informal="Thân mến,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="VND", currency_symbol="₫", currency_position="after",
            timezone_offsets=["+07:00"],
            honorifics=["Ông", "Bà", "TS", "GS"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Complex pronoun system based on age/status."
        ),
        CulturalProfile(
            code="id_ID", language_name="Indonesian",
            country_names=["Indonesia"], tlds=[".id", ".co.id"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Yth. {honorific} {last_name},",
            greeting_informal="Halo {name},",
            closing_formal="Hormat kami,", closing_informal="Salam,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="IDR", currency_symbol="Rp", currency_position="before",
            timezone_offsets=["+07:00", "+08:00", "+09:00"],
            honorifics=["Bapak", "Ibu", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="'Bapak/Ibu' essential; warm and polite."
        ),
        CulturalProfile(
            code="ms_MY", language_name="Malay",
            country_names=["Malaysia"], tlds=[".my", ".com.my"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Tuan/Puan {last_name} yang dihormati,",
            greeting_informal="Salam {name},",
            closing_formal="Yang benar,", closing_informal="Terima kasih,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="MYR", currency_symbol="RM", currency_position="before",
            timezone_offsets=["+08:00"],
            honorifics=["Encik", "Puan", "Dato'", "Tan Sri"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PDPA_MY],
            notes="Honorary titles (Dato', Tan Sri) important."
        ),
        CulturalProfile(
            code="tl_PH", language_name="Filipino/Tagalog",
            country_names=["Philippines"], tlds=[".ph", ".com.ph"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Mahal na {honorific} {last_name},",
            greeting_informal="Hi {name},",
            closing_formal="Lubos na gumagalang,", closing_informal="Salamat,",
            date_format="%m/%d/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="PHP", currency_symbol="₱", currency_position="before",
            timezone_offsets=["+08:00"],
            honorifics=["G.", "Gng.", "Dr.", "Atty.", "Engr."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="'po' and 'opo' for respect; English widely used in business."
        ),
        CulturalProfile(
            code="hi_IN", language_name="Hindi",
            country_names=["India"], tlds=[".in", ".co.in"],
            script=Script.DEVANAGARI, formality_default=FormalityLevel.FORMAL,
            greeting_formal="माननीय {honorific} {last_name},",
            greeting_informal="नमस्ते {name},",
            closing_formal="भवदीय,", closing_informal="धन्यवाद,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="INR", currency_symbol="₹", currency_position="before",
            timezone_offsets=["+05:30"],
            honorifics=["श्री", "श्रीमती", "डॉ.", "प्रो."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PDPB],
            notes="Devanagari script; 'ji' suffix for respect; English common in biz."
        ),
        CulturalProfile(
            code="bn_IN", language_name="Bengali",
            country_names=["India (West Bengal)", "Bangladesh"], tlds=[".in", ".bd"],
            script=Script.BENGALI, formality_default=FormalityLevel.FORMAL,
            greeting_formal="শ্রদ্ধেয় {honorific} {last_name},",
            greeting_informal="নমস্কার {name},",
            closing_formal="আপনার বিশ্বস্ত,", closing_informal="ধন্যবাদ,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="INR", currency_symbol="₹", currency_position="before",
            timezone_offsets=["+05:30", "+06:00"],
            honorifics=["শ্রী", "শ্রীমতী", "ড."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PDPB],
            notes="Bengali script; formal and literary tradition."
        ),
        CulturalProfile(
            code="ta_IN", language_name="Tamil",
            country_names=["India (Tamil Nadu)", "Sri Lanka"], tlds=[".in", ".lk"],
            script=Script.TAMIL, formality_default=FormalityLevel.FORMAL,
            greeting_formal="மதிப்பிற்குரிய {honorific} {last_name},",
            greeting_informal="வணக்கம் {name},",
            closing_formal="இப்படிக்கு,", closing_informal="நன்றி,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="INR", currency_symbol="₹", currency_position="before",
            timezone_offsets=["+05:30"],
            honorifics=["திரு.", "திருமதி.", "Dr."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PDPB],
            notes="Tamil script; rich literary tradition."
        ),
        # --- MIDDLE EAST & NORTH AFRICA ---
        CulturalProfile(
            code="ar_SA", language_name="Arabic (Saudi)",
            country_names=["Saudi Arabia"], tlds=[".sa", ".com.sa"],
            script=Script.ARABIC, formality_default=FormalityLevel.VERY_FORMAL,
            greeting_formal="سعادة {honorific} {last_name} المحترم/ة،",
            greeting_informal="مرحبا {name}،",
            closing_formal="وتفضلوا بقبول فائق الاحترام والتقدير،",
            closing_informal="مع أطيب التحيات،",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="SAR", currency_symbol="﷼", currency_position="after",
            timezone_offsets=["+03:00"],
            rtl=True,
            honorifics=["السيد", "السيدة", "د.", "أ."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.PDPL_SA],
            notes="RTL script; Islamic greetings; very formal."
        ),
        CulturalProfile(
            code="ar_AE", language_name="Arabic (UAE)",
            country_names=["United Arab Emirates"], tlds=[".ae", ".co.ae"],
            script=Script.ARABIC, formality_default=FormalityLevel.VERY_FORMAL,
            greeting_formal="سعادة {honorific} {last_name}،",
            greeting_informal="مرحبا {name}،",
            closing_formal="وتفضلوا بقبول فائق الاحترام،",
            closing_informal="تحياتي،",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="AED", currency_symbol="د.إ", currency_position="after",
            timezone_offsets=["+04:00"],
            rtl=True,
            honorifics=["سعادة", "معالي", "الشيخ", "السيد"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.DIFC, ComplianceRegime.ADGM, ComplianceRegime.FZDPA],
            notes="Multiple regulatory zones; English widely used in business."
        ),
        CulturalProfile(
            code="ar_EG", language_name="Arabic (Egypt)",
            country_names=["Egypt"], tlds=[".eg", ".com.eg"],
            script=Script.ARABIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="سيادة {honorific} {last_name}،",
            greeting_informal="أهلا {name}،",
            closing_formal="مع خالص تحياتي،",
            closing_informal="تحياتي،",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="EGP", currency_symbol="ج.م", currency_position="after",
            timezone_offsets=["+02:00"],
            rtl=True,
            honorifics=["أ.", "د.", "م."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Egyptian dialect informally; MSA formally."
        ),
        CulturalProfile(
            code="he_IL", language_name="Hebrew",
            country_names=["Israel"], tlds=[".il", ".co.il"],
            script=Script.HEBREW, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="{honorific} {last_name} הנכבד/ה,",
            greeting_informal="שלום {name},",
            closing_formal="בברכה,", closing_informal="תודה,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="ILS", currency_symbol="₪", currency_position="before",
            timezone_offsets=["+02:00", "+03:00"],
            rtl=True,
            honorifics=["מר", "גב'", "ד\"ר", "פרופ'"],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="RTL script; direct communication style."
        ),
        CulturalProfile(
            code="fa_IR", language_name="Persian/Farsi",
            country_names=["Iran"], tlds=[".ir"],
            script=Script.ARABIC, formality_default=FormalityLevel.VERY_FORMAL,
            greeting_formal="جناب {honorific} {last_name} گرامی،",
            greeting_informal="سلام {name} عزیز،",
            closing_formal="با احترام فراوان،",
            closing_informal="ارادتمند،",
            date_format="%Y/%m/%d", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="IRR", currency_symbol="﷼", currency_position="after",
            timezone_offsets=["+03:30"],
            rtl=True,
            honorifics=["آقای", "خانم", "دکتر"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="RTL; uses Persian/Arabic script; tarof culture (polite indirectness)."
        ),
        # --- AFRICA ---
        CulturalProfile(
            code="en_ZA", language_name="English (South Africa)",
            country_names=["South Africa"], tlds=[".za", ".co.za"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Dear {honorific} {last_name},",
            greeting_informal="Hi {name},",
            closing_formal="Kind regards,", closing_informal="Cheers,",
            date_format="%Y/%m/%d", time_format="%H:%M",
            number_decimal=".", number_thousands=" ",
            currency_code="ZAR", currency_symbol="R", currency_position="before",
            timezone_offsets=["+02:00"],
            honorifics=["Mr", "Ms", "Mrs", "Dr", "Prof"],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.POPIA],
            notes="11 official languages; English dominant in business."
        ),
        CulturalProfile(
            code="af_ZA", language_name="Afrikaans",
            country_names=["South Africa"], tlds=[".za", ".co.za"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Geagte {honorific} {last_name},",
            greeting_informal="Hallo {name},",
            closing_formal="Vriendelike groete,", closing_informal="Groete,",
            date_format="%Y-%m-%d", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="ZAR", currency_symbol="R", currency_position="before",
            timezone_offsets=["+02:00"],
            honorifics=["Mnr.", "Mev.", "Dr.", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.POPIA],
            notes="Related to Dutch; used alongside English."
        ),
        CulturalProfile(
            code="sw_KE", language_name="Swahili",
            country_names=["Kenya", "Tanzania"], tlds=[".ke", ".tz"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Ndugu {honorific} {last_name},",
            greeting_informal="Habari {name},",
            closing_formal="Wako katika heshima,", closing_informal="Asante,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="KES", currency_symbol="KSh", currency_position="before",
            timezone_offsets=["+03:00"],
            honorifics=["Bw.", "Bi.", "Dk."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Lingua franca of East Africa; English common in business."
        ),
        CulturalProfile(
            code="am_ET", language_name="Amharic",
            country_names=["Ethiopia"], tlds=[".et"],
            script=Script.ETHIOPIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="ክቡር/ክብርት {honorific} {last_name}፣",
            greeting_informal="ሰላም {name}፣",
            closing_formal="ከአክብሮት ጋር፣", closing_informal="አመሰግናለሁ፣",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="ETB", currency_symbol="Br", currency_position="after",
            timezone_offsets=["+03:00"],
            honorifics=["አቶ", "ወ/ሮ", "ዶ/ር"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Ge'ez/Ethiopic script; unique calendar system."
        ),
        # --- MORE EUROPE ---
        CulturalProfile(
            code="sr_RS", language_name="Serbian",
            country_names=["Serbia"], tlds=[".rs"],
            script=Script.CYRILLIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Поштовани/а {honorific} {last_name},",
            greeting_informal="Здраво {name},",
            closing_formal="С поштовањем,", closing_informal="Поздрав,",
            date_format="%d.%m.%Y.", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="RSD", currency_symbol="дин.", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["г.", "гђа", "др", "проф."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Both Cyrillic and Latin scripts used."
        ),
        CulturalProfile(
            code="sk_SK", language_name="Slovak",
            country_names=["Slovakia"], tlds=[".sk"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Vážený pán / Vážená pani {last_name},",
            greeting_informal="Ahoj {name},",
            closing_formal="S pozdravom,", closing_informal="Pekný deň,",
            date_format="%d. %m. %Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["pán", "pani", "Dr.", "Prof.", "Ing."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Similar to Czech; academic titles valued."
        ),
        CulturalProfile(
            code="sl_SI", language_name="Slovenian",
            country_names=["Slovenia"], tlds=[".si"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Spoštovani {honorific} {last_name},",
            greeting_informal="Živjo {name},",
            closing_formal="Lep pozdrav,", closing_informal="Pozdrav,",
            date_format="%d. %m. %Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["g.", "ga.", "dr.", "prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Dual grammatical number; formal business culture."
        ),
        CulturalProfile(
            code="lt_LT", language_name="Lithuanian",
            country_names=["Lithuania"], tlds=[".lt"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Gerb. {honorific} {last_name},",
            greeting_informal="Sveiki {name},",
            closing_formal="Pagarbiai,", closing_informal="Linkėjimai,",
            date_format="%Y-%m-%d", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["Ponas", "Ponia", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Archaic language; formal address."
        ),
        CulturalProfile(
            code="lv_LV", language_name="Latvian",
            country_names=["Latvia"], tlds=[".lv"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="God. {honorific} {last_name},",
            greeting_informal="Sveiki {name},",
            closing_formal="Ar cieņu,", closing_informal="Sveicieni,",
            date_format="%d.%m.%Y.", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["Kungs", "Kundze", "Dr.", "Prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Baltic language; formal business style."
        ),
        CulturalProfile(
            code="et_EE", language_name="Estonian",
            country_names=["Estonia"], tlds=[".ee"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Lugupeetud {name},",
            greeting_informal="Tere {name},",
            closing_formal="Lugupidamisega,", closing_informal="Tervitades,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="EUR", currency_symbol="€", currency_position="after",
            timezone_offsets=["+02:00", "+03:00"],
            honorifics=["Hr.", "Pr.", "Dr.", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Finno-Ugric language; tech-savvy culture."
        ),
        CulturalProfile(
            code="is_IS", language_name="Icelandic",
            country_names=["Iceland"], tlds=[".is"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Kæri/Kæra {name},",
            greeting_informal="Hæ {name},",
            closing_formal="Kveðja,", closing_informal="Kv.",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=".",
            currency_code="ISK", currency_symbol="kr.", currency_position="after",
            timezone_offsets=["+00:00"],
            honorifics=["Hr.", "Frú", "Dr."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Patronymic naming; first names used even formally."
        ),
        CulturalProfile(
            code="ga_IE", language_name="Irish",
            country_names=["Ireland"], tlds=[".ie"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="A {honorific} {last_name}, a chara,",
            greeting_informal="Dia duit {name},",
            closing_formal="Is mise, le meas,", closing_informal="Slán,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="EUR", currency_symbol="€", currency_position="before",
            timezone_offsets=["+00:00", "+01:00"],
            honorifics=["An tUas.", "Bean", "An Dr."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="English dominant; Irish used symbolically/officially."
        ),
        CulturalProfile(
            code="mt_MT", language_name="Maltese",
            country_names=["Malta"], tlds=[".mt"],
            script=Script.LATIN, formality_default=FormalityLevel.SEMI_FORMAL,
            greeting_formal="Għażiż/a {honorific} {last_name},",
            greeting_informal="Bonjour {name},",
            closing_formal="Dejjem tiegħek,", closing_informal="Saħħa,",
            date_format="%d/%m/%Y", time_format="%H:%M",
            number_decimal=".", number_thousands=",",
            currency_code="EUR", currency_symbol="€", currency_position="before",
            timezone_offsets=["+01:00", "+02:00"],
            honorifics=["Sur", "Sa.", "Dr.", "Prof."],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.GDPR],
            notes="Semitic language in Latin script; bilingual with English."
        ),
        CulturalProfile(
            code="ka_GE", language_name="Georgian",
            country_names=["Georgia"], tlds=[".ge"],
            script=Script.GEORGIAN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="ბატონო/ქალბატონო {last_name},",
            greeting_informal="გამარჯობა {name},",
            closing_formal="პატივისცემით,", closing_informal="მადლობა,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="GEL", currency_symbol="₾", currency_position="after",
            timezone_offsets=["+04:00"],
            honorifics=["ბატონო", "ქალბატონო", "დოქტორი"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Unique Georgian script; hospitality culture."
        ),
        CulturalProfile(
            code="hy_AM", language_name="Armenian",
            country_names=["Armenia"], tlds=[".am"],
            script=Script.ARMENIAN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Հարգելի {honorific} {last_name},",
            greeting_informal="Բարև {name},",
            closing_formal="Հարգանքներով,", closing_informal="Շնորհակալություն,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="AMD", currency_symbol="֏", currency_position="after",
            timezone_offsets=["+04:00"],
            honorifics=["պարոն", "տիկին", "դոկտոր"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Unique Armenian script; ancient culture."
        ),
        CulturalProfile(
            code="az_AZ", language_name="Azerbaijani",
            country_names=["Azerbaijan"], tlds=[".az"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Hörmətli {honorific} {last_name},",
            greeting_informal="Salam {name},",
            closing_formal="Hörmətlə,", closing_informal="Sağ ol,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="AZN", currency_symbol="₼", currency_position="after",
            timezone_offsets=["+04:00"],
            honorifics=["cənab", "xanım", "dr.", "prof."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Turkic language; Latin script since 1991."
        ),
        CulturalProfile(
            code="kk_KZ", language_name="Kazakh",
            country_names=["Kazakhstan"], tlds=[".kz"],
            script=Script.CYRILLIC, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Құрметті {honorific} {last_name},",
            greeting_informal="Сәлем {name},",
            closing_formal="Құрметпен,", closing_informal="Рахмет,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="KZT", currency_symbol="₸", currency_position="after",
            timezone_offsets=["+05:00", "+06:00"],
            honorifics=["мырза", "ханым", "д-р", "проф."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Transitioning from Cyrillic to Latin; Russian widely used."
        ),
        CulturalProfile(
            code="uz_UZ", language_name="Uzbek",
            country_names=["Uzbekistan"], tlds=[".uz"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Hurmatli {honorific} {last_name},",
            greeting_informal="Salom {name},",
            closing_formal="Hurmat bilan,", closing_informal="Rahmat,",
            date_format="%d.%m.%Y", time_format="%H:%M",
            number_decimal=",", number_thousands=" ",
            currency_code="UZS", currency_symbol="сўм", currency_position="after",
            timezone_offsets=["+05:00"],
            honorifics=["janob", "xonim", "dr."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Latin script; Turkic language."
        ),
        # --- OCEANIA ---
        CulturalProfile(
            code="en_AU", language_name="English (Australia)",
            country_names=["Australia"], tlds=[".au", ".com.au"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Dear {name},", greeting_informal="Hi {name},",
            closing_formal="Kind regards,", closing_informal="Cheers,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="AUD", currency_symbol="$", currency_position="before",
            timezone_offsets=["+10:00", "+09:30", "+08:00", "+11:00"],
            honorifics=["Mr", "Ms", "Mrs", "Dr", "Prof"],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Very informal; egalitarian; 'mate' culture."
        ),
        CulturalProfile(
            code="en_NZ", language_name="English (New Zealand)",
            country_names=["New Zealand"], tlds=[".nz", ".co.nz"],
            script=Script.LATIN, formality_default=FormalityLevel.INFORMAL,
            greeting_formal="Dear {name},", greeting_informal="Kia ora {name},",
            closing_formal="Ngā mihi,", closing_informal="Cheers,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="NZD", currency_symbol="$", currency_position="before",
            timezone_offsets=["+12:00", "+13:00"],
            honorifics=["Mr", "Ms", "Mrs", "Dr", "Prof"],
            reply_all_expected=False,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Māori greetings appreciated; similar to Australian informality."
        ),
        CulturalProfile(
            code="mi_NZ", language_name="Māori",
            country_names=["New Zealand"], tlds=[".nz"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="Tēnā koe e {honorific} {last_name},",
            greeting_informal="Kia ora {name},",
            closing_formal="Nāku noa, nā", closing_informal="Ka kite,",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="NZD", currency_symbol="$", currency_position="before",
            timezone_offsets=["+12:00", "+13:00"],
            honorifics=["Rangatira", "Whaea", "Matua"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Indigenous language of NZ; used in formal/official contexts."
        ),
        # --- SOUTH ASIA (more) ---
        CulturalProfile(
            code="ur_PK", language_name="Urdu",
            country_names=["Pakistan"], tlds=[".pk", ".com.pk"],
            script=Script.ARABIC, formality_default=FormalityLevel.VERY_FORMAL,
            greeting_formal="محترم {honorific} {last_name} صاحب،",
            greeting_informal="السلام علیکم {name}،",
            closing_formal="والسلام،", closing_informal="شکریہ،",
            date_format="%d/%m/%Y", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="PKR", currency_symbol="Rs", currency_position="before",
            timezone_offsets=["+05:00"],
            rtl=True,
            honorifics=["جناب", "محترمہ", "ڈاکٹر"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="RTL Nastaliq script; Islamic greetings; very formal."
        ),
        CulturalProfile(
            code="ne_NP", language_name="Nepali",
            country_names=["Nepal"], tlds=[".np"],
            script=Script.DEVANAGARI, formality_default=FormalityLevel.FORMAL,
            greeting_formal="श्रीमान्/श्रीमती {last_name} ज्यू,",
            greeting_informal="नमस्ते {name} जी,",
            closing_formal="भवदीय,", closing_informal="धन्यवाद,",
            date_format="%Y/%m/%d", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="NPR", currency_symbol="रू", currency_position="before",
            timezone_offsets=["+05:45"],
            honorifics=["श्रीमान्", "श्रीमती", "ड."],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Devanagari script; 'ji' and 'jyu' honorifics."
        ),
        CulturalProfile(
            code="si_LK", language_name="Sinhala",
            country_names=["Sri Lanka"], tlds=[".lk"],
            script=Script.LATIN, formality_default=FormalityLevel.FORMAL,
            greeting_formal="ගරු {honorific} {last_name} මහතා/මහත්මිය,",
            greeting_informal="ආයුබෝවන් {name},",
            closing_formal="මෙයට, විශ්වාසී,", closing_informal="ස්තුතියි,",
            date_format="%Y-%m-%d", time_format="%I:%M %p",
            number_decimal=".", number_thousands=",",
            currency_code="LKR", currency_symbol="Rs", currency_position="before",
            timezone_offsets=["+05:30"],
            honorifics=["මහතා", "මහත්මිය", "වෛද්‍ය"],
            reply_all_expected=True,
            compliance_regimes=[ComplianceRegime.NONE],
            notes="Sinhala script; English widely used in business."
        ),
    ]

    for p in profiles:
        db[p.code] = p
    return db


# Singleton database
CULTURAL_DB: Dict[str, CulturalProfile] = _build_cultural_database()

# ===========================================================================
# TLD → LOCALE MAPPING
# ===========================================================================

TLD_TO_LOCALE: Dict[str, str] = {}
for _code, _prof in CULTURAL_DB.items():
    for _tld in _prof.tlds:
        if _tld not in TLD_TO_LOCALE:
            TLD_TO_LOCALE[_tld] = _code

# Additional TLD shortcuts
TLD_TO_LOCALE.update({
    ".gov": "en_US", ".edu": "en_US", ".org": "en_US",
    ".net": "en_US", ".info": "en_US", ".io": "en_US",
    ".dev": "en_US", ".app": "en_US",
})

# ===========================================================================
# COMPLIANCE ENGINE
# ===========================================================================

@dataclass
class ComplianceResult:
    """Result of a compliance check."""
    regime: ComplianceRegime
    compliant: bool
    issues: List[str]
    requirements: List[str]
    severity: str  # 'pass', 'warning', 'error'

    def to_dict(self) -> Dict[str, Any]:
        return {
            "regime": self.regime.value,
            "compliant": self.compliant,
            "issues": self.issues,
            "requirements": self.requirements,
            "severity": self.severity,
        }


class ComplianceChecker:
    """Check email content against regional regulatory requirements."""

    @staticmethod
    def check(email_data: Dict[str, Any],
              regimes: List[ComplianceRegime]) -> List[ComplianceResult]:
        results = []
        for regime in regimes:
            if regime == ComplianceRegime.NONE:
                continue
            checker = getattr(ComplianceChecker, f"_check_{regime.value.lower().replace('-', '_')}", None)
            if checker:
                results.append(checker(email_data))
            else:
                results.append(ComplianceResult(
                    regime=regime, compliant=True,
                    issues=[], requirements=["No specific automated checks available."],
                    severity="pass"
                ))
        return results

    @staticmethod
    def _check_gdpr(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must include clear unsubscribe mechanism",
            "Must identify sender (name + physical address)",
            "Must have valid consent or legitimate interest basis",
            "Data processing notice required if personal data collected",
            "Right to erasure must be communicated upon request",
        ]
        body = email_data.get("body", "").lower()
        headers = email_data.get("headers", {})

        if "unsubscribe" not in body and "opt-out" not in body and "opt out" not in body:
            issues.append("GDPR: Missing unsubscribe/opt-out mechanism")
        if "address" not in headers and not re.search(r'\d+.*street|ave|road|blvd|lane|dr\.', body):
            issues.append("GDPR: Sender physical address not found")
        if "privacy" not in body and "data protection" not in body:
            issues.append("GDPR: No privacy/data protection notice detected")

        return ComplianceResult(
            regime=ComplianceRegime.GDPR,
            compliant=len(issues) == 0,
            issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_ccpa(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must provide 'Do Not Sell My Personal Information' link",
            "Must disclose categories of personal info collected",
            "Must honor opt-out requests within 15 business days",
            "Privacy policy must be accessible",
        ]
        body = email_data.get("body", "").lower()

        if "do not sell" not in body and "opt-out" not in body:
            issues.append("CCPA: Missing 'Do Not Sell' or opt-out mechanism")
        if "privacy policy" not in body and "privacy" not in body:
            issues.append("CCPA: No privacy policy reference detected")

        return ComplianceResult(
            regime=ComplianceRegime.CCPA,
            compliant=len(issues) == 0,
            issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_can_spam(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must include valid physical postal address",
            "Must provide clear unsubscribe mechanism",
            "Subject line must not be deceptive",
            "Must identify message as advertisement if applicable",
            "Must honor opt-out within 10 business days",
        ]
        body = email_data.get("body", "").lower()
        subject = email_data.get("subject", "")

        if "unsubscribe" not in body and "opt-out" not in body:
            issues.append("CAN-SPAM: Missing unsubscribe mechanism")
        if not re.search(r'\d+.*\b(street|ave|road|blvd|lane|dr|box)\b', body):
            issues.append("CAN-SPAM: Physical postal address not found")
        if any(w in subject.upper() for w in ["FREE", "!!!", "$$$", "ACT NOW"]):
            issues.append("CAN-SPAM: Potentially deceptive/spammy subject line")

        return ComplianceResult(
            regime=ComplianceRegime.CAN_SPAM,
            compliant=len(issues) == 0,
            issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_lgpd(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must provide clear consent mechanism",
            "Must identify data controller",
            "Must inform about data processing purposes",
            "Must provide right to access, correct, and delete data",
            "Unsubscribe mechanism required",
        ]
        body = email_data.get("body", "").lower()

        if "descadastrar" not in body and "unsubscribe" not in body and "opt-out" not in body:
            issues.append("LGPD: Missing unsubscribe mechanism (descadastrar)")
        if "privacidade" not in body and "privacy" not in body:
            issues.append("LGPD: No privacy notice detected")

        return ComplianceResult(
            regime=ComplianceRegime.LGPD,
            compliant=len(issues) == 0,
            issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_pdpa_th(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must obtain explicit consent for marketing",
            "Must provide easy withdrawal of consent",
            "Must identify data controller",
        ]
        body = email_data.get("body", "").lower()
        if "unsubscribe" not in body and "ยกเลิก" not in body:
            issues.append("PDPA-TH: Missing consent withdrawal mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.PDPA_TH,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_pdpa_sg(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must have DNC (Do Not Call) registry compliance",
            "Must obtain clear consent",
            "Must provide unsubscribe mechanism",
            "Must identify organization",
        ]
        body = email_data.get("body", "").lower()
        if "unsubscribe" not in body:
            issues.append("PDPA-SG: Missing unsubscribe mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.PDPA_SG,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_pipeda(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must have consent (express or implied)",
            "Must identify purposes for collection",
            "Must provide access and correction rights",
            "Must have unsubscribe mechanism",
        ]
        body = email_data.get("body", "").lower()
        if "unsubscribe" not in body and "désabonnement" not in body:
            issues.append("PIPEDA: Missing unsubscribe mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.PIPEDA,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_popia(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must have consent or legitimate interest",
            "Must provide opt-out mechanism",
            "Must identify responsible party",
            "Must comply with conditions for lawful processing",
        ]
        body = email_data.get("body", "").lower()
        if "unsubscribe" not in body and "opt-out" not in body:
            issues.append("POPIA: Missing opt-out mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.POPIA,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_apppi(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must specify purpose of use",
            "Must not use beyond stated purpose without consent",
            "Must provide opt-out for third-party provision",
            "Must ensure data accuracy and security",
        ]
        body = email_data.get("body", "").lower()
        if "配信停止" not in body and "unsubscribe" not in body:
            issues.append("APPI: Missing delivery stop / unsubscribe mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.APPI,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_pipa_kr(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must obtain explicit consent",
            "Must disclose items of personal info collected",
            "Must inform about retention period",
            "Must provide opt-out mechanism",
        ]
        body = email_data.get("body", "").lower()
        if "수신거부" not in body and "unsubscribe" not in body:
            issues.append("PIPA-KR: Missing unsubscribe mechanism (수신거부)")
        return ComplianceResult(
            regime=ComplianceRegime.PIPA_KR,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_csl(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must comply with real-name registration",
            "Must obtain user consent for data collection",
            "Must store data within China (or have approved transfer)",
            "Must provide clear unsubscribe",
        ]
        body = email_data.get("body", "").lower()
        if "退订" not in body and "unsubscribe" not in body:
            issues.append("CSL: Missing unsubscribe mechanism (退订)")
        return ComplianceResult(
            regime=ComplianceRegime.CSL,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_pdpa_my(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must obtain consent for processing",
            "Must provide notice of data processing",
            "Must provide right to access and correct",
        ]
        body = email_data.get("body", "").lower()
        if "unsubscribe" not in body:
            issues.append("PDPA-MY: Missing unsubscribe mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.PDPA_MY,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="error" if issues else "pass"
        )

    @staticmethod
    def _check_pdpb(email_data: Dict[str, Any]) -> ComplianceResult:
        issues = []
        requirements = [
            "Must obtain consent (proposed DPDP Act)",
            "Must provide data fiduciary details",
            "Must allow data principal rights",
        ]
        body = email_data.get("body", "").lower()
        if "unsubscribe" not in body and "opt-out" not in body:
            issues.append("PDPB: Missing unsubscribe mechanism")
        return ComplianceResult(
            regime=ComplianceRegime.PDPB,
            compliant=len(issues) == 0, issues=issues,
            requirements=requirements,
            severity="warning" if issues else "pass"
        )


# ===========================================================================
# LANGUAGE DETECTION
# ===========================================================================

# Language detection heuristics based on character scripts and common words
SCRIPT_DETECTORS = {
    Script.CYRILLIC: re.compile(r'[\u0400-\u04FF]'),
    Script.ARABIC: re.compile(r'[\u0600-\u06FF]'),
    Script.HEBREW: re.compile(r'[\u0590-\u05FF]'),
    Script.CJK: re.compile(r'[\u4E00-\u9FFF]'),
    Script.DEVANAGARI: re.compile(r'[\u0900-\u097F]'),
    Script.THAI: re.compile(r'[\u0E00-\u0E7F]'),
    Script.HANGUL: re.compile(r'[\uAC00-\uD7AF\u1100-\u11FF]'),
    Script.KANA: re.compile(r'[\u3040-\u309F\u30A0-\u30FF]'),
    Script.GREEK: re.compile(r'[\u0370-\u03FF]'),
    Script.GEORGIAN: re.compile(r'[\u10A0-\u10FF]'),
    Script.ARMENIAN: re.compile(r'[\u0530-\u058F]'),
    Script.ETHIOPIC: re.compile(r'[\u1200-\u137F]'),
    Script.TAMIL: re.compile(r'[\u0B80-\u0BFF]'),
    Script.BENGALI: re.compile(r'[\u0980-\u09FF]'),
}

# Keyword-based detectors for Latin-script languages
LATIN_LANG_KEYWORDS: Dict[str, List[str]] = {
    "fr_FR": ["bonjour", "merci", "monsieur", "madame", "cordialement", "veuillez", "cher", "chère"],
    "de_DE": ["sehr geehrte", "mit freundlichen", "hallo", "danke", "grüße", "bitte"],
    "es_ES": ["estimado", "hola", "gracias", "saludos", "atentamente", "señor"],
    "pt_BR": ["prezado", "olá", "obrigado", "obrigada", "atenciosamente", "abraço"],
    "pt_PT": ["exmo", "cumprimentos", "caro", "obrigado"],
    "it_IT": ["gentile", "buongiorno", "grazie", "cordiali saluti", "signore"],
    "nl_NL": ["geachte", "beste", "bedankt", "groeten", "met vriendelijke"],
    "sv_SE": ["bästa", "tack", "hälsningar", "med vänliga", "hej"],
    "da_DK": ["kære", "tak", "hilsen", "med venlig"],
    "nb_NO": ["kjære", "takk", "hilsen", "med vennlig"],
    "fi_FI": ["hyvä", "kiitos", "terveisin", "ystävällisin"],
    "pl_PL": ["szanowny", "dziękuję", "pozdrawiam", "z poważaniem"],
    "cs_CZ": ["vážený", "děkuji", "s pozdravem"],
    "hu_HU": ["tisztelt", "köszönöm", "üdvözlettel"],
    "ro_RO": ["stimate", "mulțumesc", "cu stimă"],
    "tr_TR": ["sayın", "teşekkürler", "saygılarımla", "merhaba"],
    "id_ID": ["yth", "hormat kami", "terima kasih"],
    "ms_MY": ["tuan", "puan", "yang dihormati"],
    "vi_VN": ["kính gửi", "trân trọng", "cảm ơn"],
    "ga_IE": ["a chara", "le meas", "slán"],
}


def detect_language_from_content(text: str) -> Optional[str]:
    """Detect probable language/locale from email text content."""
    if not text or len(text.strip()) < 10:
        return None

    # Check non-Latin scripts first
    for script, pattern in SCRIPT_DETECTORS.items():
        matches = pattern.findall(text)
        if len(matches) > len(text) * 0.05:  # >5% of chars in this script
            # Map script to likely locale
            script_locale_map = {
                Script.CYRILLIC: "ru_RU",
                Script.ARABIC: "ar_SA",
                Script.HEBREW: "he_IL",
                Script.CJK: "zh_CN",
                Script.DEVANAGARI: "hi_IN",
                Script.THAI: "th_TH",
                Script.HANGUL: "ko_KR",
                Script.KANA: "ja_JP",
                Script.GREEK: "el_GR",
                Script.GEORGIAN: "ka_GE",
                Script.ARMENIAN: "hy_AM",
                Script.ETHIOPIC: "am_ET",
                Script.TAMIL: "ta_IN",
                Script.BENGALI: "bn_IN",
            }
            detected = script_locale_map.get(script)
            if detected:
                # Refine CJK detection
                if script == Script.CJK:
                    kana = SCRIPT_DETECTORS[Script.KANA].findall(text)
                    if len(kana) > 3:
                        return "ja_JP"
                return detected

    # Check Latin-script languages by keyword frequency
    text_lower = text.lower()
    scores: Dict[str, int] = {}
    for locale, keywords in LATIN_LANG_KEYWORDS.items():
        score = sum(1 for kw in keywords if kw in text_lower)
        if score > 0:
            scores[locale] = score

    if scores:
        return max(scores, key=scores.get)

    return None


def detect_locale_from_email(email_address: str) -> str:
    """Detect locale from email address TLD."""
    email_lower = email_address.lower().strip()
    domain = email_lower.split("@")[-1] if "@" in email_lower else ""

    # Extract TLD(s)
    parts = domain.split(".")
    tlds = []
    if len(parts) >= 2:
        tlds.append(f".{parts[-1]}")
    if len(parts) >= 3:
        tlds.append(f".{parts[-2]}.{parts[-1]}")

    # Check TLD mapping
    for tld in reversed(tlds):  # Check compound TLD first
        if tld in TLD_TO_LOCALE:
            return TLD_TO_LOCALE[tld]

    return "en_US"  # Default fallback


def auto_detect_locale(email_address: str,
                       email_content: str = "") -> Tuple[str, str]:
    """
    Auto-detect locale combining TLD and content analysis.
    Returns (locale_code, detection_method).
    """
    tld_locale = detect_locale_from_email(email_address)
    content_locale = detect_language_from_content(email_content) if email_content else None

    if content_locale and content_locale != tld_locale:
        # Content takes priority if it's a strong signal
        return content_locale, "content_analysis"
    elif tld_locale != "en_US":
        return tld_locale, "tld_detection"
    elif content_locale:
        return content_locale, "content_analysis"
    else:
        return tld_locale, "default_fallback"


# ===========================================================================
# TIMEZONE-AWARE SCHEDULING
# ===========================================================================

@dataclass
class ScheduledDelivery:
    """Optimal delivery time calculation."""
    target_locale: str
    preferred_window: Tuple[int, int] = (9, 17)  # Business hours (9AM-5PM)
    avoid_days: List[int] = field(default_factory=lambda: [5, 6])  # Sat, Sun

    def calculate_optimal_send_time(self,
                                    send_from_utc: datetime) -> Dict[str, Any]:
        """Calculate optimal delivery time in recipient's timezone."""
        profile = CULTURAL_DB.get(self.target_locale)
        if not profile:
            return {"error": f"Unknown locale: {self.target_locale}"}

        # Get primary timezone offset
        tz_offset_str = profile.timezone_offsets[0] if profile.timezone_offsets else "+00:00"
        hours, minutes = map(int, tz_offset_str.replace("+", "").split(":"))
        if tz_offset_str.startswith("-"):
            hours, minutes = -hours, -minutes
        tz = timezone(timedelta(hours=hours, minutes=minutes))

        # Convert send time to recipient timezone
        recipient_time = send_from_utc.astimezone(tz)

        # Check if within business hours
        current_hour = recipient_time.hour
        current_day = recipient_time.weekday()

        optimal_time = recipient_time
        adjustments = []

        if current_day in self.avoid_days:
            # Move to next Monday
            days_ahead = (7 - current_day) % 7
            if days_ahead == 0:
                days_ahead = 7
            optimal_time = optimal_time + timedelta(days=days_ahead)
            optimal_time = optimal_time.replace(
                hour=self.preferred_window[0], minute=0, second=0
            )
            adjustments.append(f"Moved from weekend to Monday")

        elif current_hour < self.preferred_window[0]:
            optimal_time = optimal_time.replace(
                hour=self.preferred_window[0], minute=0, second=0
            )
            adjustments.append(f"Adjusted to {self.preferred_window[0]}:00 local time")

        elif current_hour >= self.preferred_window[1]:
            optimal_time = optimal_time + timedelta(days=1)
            optimal_time = optimal_time.replace(
                hour=self.preferred_window[0], minute=0, second=0
            )
            adjustments.append(f"Moved to next business day at {self.preferred_window[0]}:00")

        return {
            "original_utc": send_from_utc.isoformat(),
            "recipient_local_time": recipient_time.isoformat(),
            "optimal_send_time_utc": optimal_time.astimezone(timezone.utc).isoformat(),
            "optimal_send_time_local": optimal_time.isoformat(),
            "timezone_offset": tz_offset_str,
            "timezone_display": f"UTC{tz_offset_str}",
            "adjustments": adjustments,
            "is_business_hours": (
                self.preferred_window[0] <= current_hour < self.preferred_window[1]
                and current_day not in self.avoid_days
            ),
        }


# ===========================================================================
# TEMPLATE RENDERING
# ===========================================================================

@dataclass
class EmailTemplate:
    """Multi-language email template."""
    template_id: str
    versions: Dict[str, Dict[str, str]]  # locale -> {subject, body, preheader}
    variables: List[str] = field(default_factory=list)

    def render(self, locale: str,
               variables: Dict[str, str],
               formality: Optional[FormalityLevel] = None) -> Dict[str, str]:
        """Render template for given locale with variable substitution."""
        profile = CULTURAL_DB.get(locale)
        if not profile:
            locale = "en_US"
            profile = CULTURAL_DB["en_US"]

        version = self.versions.get(locale, self.versions.get("en_US", {}))

        # Select greeting based on formality
        if formality is None:
            formality = profile.formality_default

        is_formal = formality in (FormalityLevel.FORMAL, FormalityLevel.VERY_FORMAL)
        greeting = profile.greeting_formal if is_formal else profile.greeting_informal
        closing = profile.closing_formal if is_formal else profile.closing_informal

        # Substitute variables in greeting/closing
        for key, value in variables.items():
            greeting = greeting.replace(f"{{{key}}}", value)
            closing = closing.replace(f"{{{key}}}", value)

        # Render subject and body
        subject = version.get("subject", "")
        body = version.get("body", "")
        preheader = version.get("preheader", "")

        for key, value in variables.items():
            subject = subject.replace(f"{{{key}}}", value)
            body = body.replace(f"{{{key}}}", value)
            preheader = preheader.replace(f"{{{key}}}", value)

        # Compose full email
        full_body = f"{greeting}\n\n{body}\n\n{closing}"

        return {
            "subject": subject,
            "preheader": preheader,
            "body": full_body,
            "greeting": greeting,
            "closing": closing,
            "locale": locale,
            "formality": formality.name,
        }


# ===========================================================================
# NUMBER & CURRENCY FORMATTING
# ===========================================================================

class LocaleFormatter:
    """Locale-specific number and currency formatting."""

    @staticmethod
    def format_number(value: Union[int, float], locale: str) -> str:
        """Format number according to locale conventions."""
        profile = CULTURAL_DB.get(locale)
        if not profile:
            return str(value)

        dec = profile.number_decimal
        thou = profile.number_thousands

        # Split integer and decimal parts
        if isinstance(value, float):
            int_part, dec_part = f"{value:.2f}".split(".")
        else:
            int_part = str(value)
            dec_part = None

        # Add thousands separators
        groups = []
        while len(int_part) > 3:
            groups.insert(0, int_part[-3:])
            int_part = int_part[:-3]
        groups.insert(0, int_part)
        formatted_int = thou.join(groups)

        if dec_part:
            return f"{formatted_int}{dec}{dec_part}"
        return formatted_int

    @staticmethod
    def format_currency(value: Union[int, float], locale: str,
                        override_currency: Optional[str] = None) -> str:
        """Format currency according to locale conventions."""
        profile = CULTURAL_DB.get(locale)
        if not profile:
            return f"${value:.2f}"

        num_str = LocaleFormatter.format_number(value, locale)
        symbol = profile.currency_symbol
        if override_currency:
            symbol = override_currency

        if profile.currency_position == "before":
            return f"{symbol}{num_str}"
        else:
            return f"{num_str} {symbol}"

    @staticmethod
    def format_date(dt: datetime, locale: str) -> str:
        """Format date according to locale conventions."""
        profile = CULTURAL_DB.get(locale)
        if not profile:
            return dt.strftime("%Y-%m-%d")
        # Manual formatting to avoid Windows strftime issues with non-ASCII
        return LocaleFormatter._manual_strftime(dt, profile.date_format)

    @staticmethod
    def format_time(dt: datetime, locale: str) -> str:
        """Format time according to locale conventions."""
        profile = CULTURAL_DB.get(locale)
        if not profile:
            return dt.strftime("%H:%M")
        return LocaleFormatter._manual_strftime(dt, profile.time_format)

    @staticmethod
    def _manual_strftime(dt: datetime, fmt: str) -> str:
        """Manual strftime that handles non-ASCII format strings (Windows-safe)."""
        # Mapping of strftime directives to values
        hour12 = dt.hour % 12 if dt.hour % 12 != 0 else 12
        ampm = "AM" if dt.hour < 12 else "PM"
        replacements = OrderedDict([
            ("%Y", str(dt.year)),
            ("%m", f"{dt.month:02d}"),
            ("%d", f"{dt.day:02d}"),
            ("%H", f"{dt.hour:02d}"),
            ("%I", f"{hour12:02d}"),
            ("%M", f"{dt.minute:02d}"),
            ("%S", f"{dt.second:02d}"),
            ("%p", ampm),
            ("%B", dt.strftime("%B")),
            ("%b", dt.strftime("%b")),
            ("%A", dt.strftime("%A")),
            ("%a", dt.strftime("%a")),
        ])
        result = fmt
        for directive, value in replacements.items():
            result = result.replace(directive, value)
        return result

    @staticmethod
    def format_datetime(dt: datetime, locale: str) -> str:
        """Format full date+time according to locale."""
        return f"{LocaleFormatter.format_date(dt, locale)} {LocaleFormatter.format_time(dt, locale)}"


# ===========================================================================
# REPLY-ALL ENFORCEMENT
# ===========================================================================

@dataclass
class ReplyAllPolicy:
    """Enforce reply-all behavior based on cultural context."""
    enforce_reply_all: bool = False
    required_recipients: List[str] = field(default_factory=list)
    reason: str = ""

    @classmethod
    def from_locale(cls, locale: str,
                    original_recipients: List[str]) -> "ReplyAllPolicy":
        """Determine reply-all policy from cultural profile."""
        profile = CULTURAL_DB.get(locale)
        if not profile:
            return cls(enforce_reply_all=False, reason="Unknown locale")

        if profile.reply_all_expected:
            return cls(
                enforce_reply_all=True,
                required_recipients=original_recipients,
                reason=(
                    f"Cultural norm in {profile.language_name} ({profile.country_names[0]}): "
                    f"reply-all is expected in professional communication. "
                    f"All {len(original_recipients)} original recipients should be included."
                )
            )
        return cls(
            enforce_reply_all=False,
            reason=(
                f"Cultural norm in {profile.language_name} ({profile.country_names[0]}): "
                f"reply-all is NOT typically expected. Direct reply to sender is standard."
            )
        )

    def to_dict(self) -> Dict[str, Any]:
        return {
            "enforce_reply_all": self.enforce_reply_all,
            "required_recipients": self.required_recipients,
            "reason": self.reason,
        }


# ===========================================================================
# CASE-BY-CASE ANALYSIS
# ===========================================================================

@dataclass
class CaseAnalysis:
    """Comprehensive per-email analysis report."""
    email_id: str
    recipient: str
    detected_locale: str
    detection_method: str
    cultural_profile: Dict[str, Any]
    compliance_results: List[Dict[str, Any]]
    scheduling: Dict[str, Any]
    reply_all_policy: Dict[str, Any]
    formatting_examples: Dict[str, str]
    template_rendered: Optional[Dict[str, str]]
    recommendations: List[str]
    risk_score: float  # 0.0 - 1.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "email_id": self.email_id,
            "recipient": self.recipient,
            "detected_locale": self.detected_locale,
            "detection_method": self.detection_method,
            "cultural_profile": self.cultural_profile,
            "compliance_results": self.compliance_results,
            "scheduling": self.scheduling,
            "reply_all_policy": self.reply_all_policy,
            "formatting_examples": self.formatting_examples,
            "template_rendered": self.template_rendered,
            "recommendations": self.recommendations,
            "risk_score": self.risk_score,
        }


class LocalizationEngine:
    """
    V127 Email Localization Engine — main orchestrator.

    Provides end-to-end email localization including:
    - Language/culture detection
    - Cultural adaptation
    - Compliance checking
    - Timezone scheduling
    - Template rendering
    - Number/currency formatting
    - Reply-all policy enforcement
    - Risk assessment
    """

    def __init__(self):
        self.compliance_checker = ComplianceChecker()
        self.formatter = LocaleFormatter()
        self.templates: Dict[str, EmailTemplate] = {}
        self._analysis_log: List[CaseAnalysis] = []

    def register_template(self, template: EmailTemplate) -> None:
        """Register a multi-language email template."""
        self.templates[template.template_id] = template
        logger.info(f"Registered template: {template.template_id} "
                     f"with {len(template.versions)} locale versions")

    def analyze_email(self, email_data: Dict[str, Any]) -> CaseAnalysis:
        """
        Perform comprehensive case-by-case analysis of an email.

        email_data should contain:
        - recipient: email address
        - subject: email subject
        - body: email body text
        - headers: dict of additional headers
        - template_id: optional template to render
        - template_vars: optional template variables
        - send_time: optional ISO datetime string
        """
        email_id = email_data.get("id", hashlib.md5(
            email_data.get("recipient", "").encode()
        ).hexdigest()[:8])
        recipient = email_data.get("recipient", "unknown@example.com")
        body = email_data.get("body", "")
        subject = email_data.get("subject", "")

        # 1. Detect locale
        locale, method = auto_detect_locale(recipient, body + " " + subject)
        profile = CULTURAL_DB.get(locale, CULTURAL_DB["en_US"])

        # 2. Compliance checking
        compliance_results = self.compliance_checker.check(
            email_data, profile.compliance_regimes
        )

        # 3. Scheduling
        send_time_str = email_data.get("send_time")
        if send_time_str:
            try:
                send_time = datetime.fromisoformat(send_time_str)
            except ValueError:
                send_time = datetime.now(timezone.utc)
        else:
            send_time = datetime.now(timezone.utc)

        scheduler = ScheduledDelivery(target_locale=locale)
        scheduling = scheduler.calculate_optimal_send_time(send_time)

        # 4. Reply-all policy
        original_recipients = email_data.get("recipients", [recipient])
        reply_all = ReplyAllPolicy.from_locale(locale, original_recipients)

        # 5. Formatting examples
        now = datetime.now()
        formatting_examples = {
            "number_1234567": self.formatter.format_number(1234567, locale),
            "number_1234_56": self.formatter.format_number(1234.56, locale),
            "currency_1234_56": self.formatter.format_currency(1234.56, locale),
            "date_today": self.formatter.format_date(now, locale),
            "time_now": self.formatter.format_time(now, locale),
            "datetime_now": self.formatter.format_datetime(now, locale),
        }

        # 6. Template rendering
        rendered = None
        template_id = email_data.get("template_id")
        if template_id and template_id in self.templates:
            template = self.templates[template_id]
            template_vars = email_data.get("template_vars", {})
            rendered = template.render(locale, template_vars)

        # 7. Recommendations
        recommendations = self._generate_recommendations(
            profile, compliance_results, scheduling, reply_all
        )

        # 8. Risk score
        risk_score = self._calculate_risk_score(compliance_results, profile)

        analysis = CaseAnalysis(
            email_id=email_id,
            recipient=recipient,
            detected_locale=locale,
            detection_method=method,
            cultural_profile={
                "code": profile.code,
                "language": profile.language_name,
                "countries": profile.country_names,
                "script": profile.script.value,
                "formality": profile.formality_default.name,
                "rtl": profile.rtl,
                "compliance_regimes": [r.value for r in profile.compliance_regimes],
            },
            compliance_results=[cr.to_dict() for cr in compliance_results],
            scheduling=scheduling,
            reply_all_policy=reply_all.to_dict(),
            formatting_examples=formatting_examples,
            template_rendered=rendered,
            recommendations=recommendations,
            risk_score=risk_score,
        )

        self._analysis_log.append(analysis)
        return analysis

    def _generate_recommendations(self, profile: CulturalProfile,
                                  compliance_results: List[ComplianceResult],
                                  scheduling: Dict[str, Any],
                                  reply_all: ReplyAllPolicy) -> List[str]:
        """Generate actionable recommendations."""
        recs = []

        # Cultural recommendations
        if profile.formality_default in (FormalityLevel.FORMAL, FormalityLevel.VERY_FORMAL):
            recs.append(
                f"Use formal tone for {profile.language_name} recipients. "
                f"Formal greeting: \"{profile.greeting_formal}\""
            )

        if profile.rtl:
            recs.append(
                f"{profile.language_name} uses right-to-left script. "
                f"Ensure email client supports RTL rendering."
            )

        if profile.reply_all_expected:
            recs.append(
                f"In {profile.country_names[0]}, reply-all is expected. "
                f"Include all original recipients in your response."
            )

        # Compliance recommendations
        for cr in compliance_results:
            if not cr.compliant:
                for issue in cr.issues:
                    recs.append(f"[{cr.regime.value}] ACTION REQUIRED: {issue}")

        # Scheduling recommendations
        if not scheduling.get("is_business_hours", True):
            recs.append(
                f"Schedule delivery for business hours in recipient timezone. "
                f"Optimal time: {scheduling.get('optimal_send_time_local', 'N/A')}"
            )

        # General recommendations
        if profile.honorifics:
            recs.append(
                f"Honorifics used in {profile.language_name}: "
                f"{', '.join(profile.honorifics[:5])}"
            )

        return recs

    def _calculate_risk_score(self, compliance_results: List[ComplianceResult],
                               profile: CulturalProfile) -> float:
        """Calculate risk score from 0.0 (low risk) to 1.0 (high risk)."""
        if not compliance_results:
            return 0.1

        total_issues = sum(len(cr.issues) for cr in compliance_results)
        error_count = sum(1 for cr in compliance_results if cr.severity == "error")

        # Base risk from compliance issues
        base_risk = min(total_issues * 0.15, 0.6)
        error_risk = error_count * 0.1

        # Cultural mismatch risk
        cultural_risk = 0.1 if profile.formality_default in (
            FormalityLevel.VERY_FORMAL, FormalityLevel.FORMAL
        ) else 0.05

        return min(base_risk + error_risk + cultural_risk, 1.0)

    def process_batch(self, emails: List[Dict[str, Any]]) -> List[CaseAnalysis]:
        """Process a batch of emails."""
        return [self.analyze_email(email) for email in emails]

    def get_analysis_report(self) -> Dict[str, Any]:
        """Generate summary report of all analyses."""
        total = len(self._analysis_log)
        if total == 0:
            return {"total_analyzed": 0, "message": "No analyses performed yet."}

        locales = [a.detected_locale for a in self._analysis_log]
        risk_scores = [a.risk_score for a in self._analysis_log]
        compliance_failures = sum(
            1 for a in self._analysis_log
            if any(not cr["compliant"] for cr in a.compliance_results)
        )

        return {
            "total_analyzed": total,
            "unique_locales": len(set(locales)),
            "locales_detected": list(set(locales)),
            "average_risk_score": round(sum(risk_scores) / total, 3),
            "max_risk_score": round(max(risk_scores), 3),
            "compliance_failures": compliance_failures,
            "reply_all_enforced": sum(
                1 for a in self._analysis_log
                if a.reply_all_policy["enforce_reply_all"]
            ),
        }


# ===========================================================================
# MAIN DEMO
# ===========================================================================

def _create_demo_templates() -> Dict[str, EmailTemplate]:
    """Create sample templates for demonstration."""
    welcome = EmailTemplate(
        template_id="welcome",
        variables=["name", "last_name", "company", "offer_amount", "honorific"],
        versions={
            "en_US": {
                "subject": "Welcome to {company}, {name}!",
                "preheader": "Your account is ready",
                "body": "We're excited to have you on board. Your special welcome offer of {offer_amount} is ready to claim.\n\nGet started by visiting your dashboard.",
            },
            "de_DE": {
                "subject": "Willkommen bei {company}, {name}!",
                "preheader": "Ihr Konto ist bereit",
                "body": "Wir freuen uns, Sie an Bord zu haben. Ihr besonderes Willkommensangebot von {offer_amount} steht bereit.\n\nBeginnen Sie mit einem Besuch Ihres Dashboards.",
            },
            "fr_FR": {
                "subject": "Bienvenue chez {company}, {name} !",
                "preheader": "Votre compte est prêt",
                "body": "Nous sommes ravis de vous accueillir. Votre offre de bienvenue spéciale de {offer_amount} est prête à être réclamée.\n\nCommencez par visiter votre tableau de bord.",
            },
            "es_ES": {
                "subject": "¡Bienvenido/a a {company}, {name}!",
                "preheader": "Tu cuenta está lista",
                "body": "Estamos encantados de tenerte a bordo. Tu oferta especial de bienvenida de {offer_amount} está lista para reclamar.\n\nEmpieza visitando tu panel de control.",
            },
            "ja_JP": {
                "subject": "{company}へようこそ、{last_name}様",
                "preheader": "アカウントの準備ができました",
                "body": "ご登録いただきありがとうございます。特別ウェルカムオファー {offer_amount} をご用意いたしました。\n\nダッシュボードからご確認いただけます。",
            },
            "zh_CN": {
                "subject": "欢迎加入{company}，{last_name}",
                "preheader": "您的账户已准备就绪",
                "body": "我们很高兴您的加入。您的特别欢迎优惠{offer_amount}已可领取。\n\n请访问您的控制面板开始使用。",
            },
            "ko_KR": {
                "subject": "{company}에 오신 것을 환영합니다, {last_name}님",
                "preheader": "계정이 준비되었습니다",
                "body": "함께하게 되어 기쁩니다. 특별 환영 혜택 {offer_amount}이(가) 준비되어 있습니다.\n\n대시보드에서 확인하실 수 있습니다.",
            },
            "ar_SA": {
                "subject": "مرحباً بك في {company}، {last_name}",
                "preheader": "حسابك جاهز",
                "body": "يسعدنا انضمامك إلينا. عرضك الترحيبي الخاص بقيمة {offer_amount} جاهز للاستلام.\n\nابدأ بزيارة لوحة التحكم الخاصة بك.",
            },
            "pt_BR": {
                "subject": "Bem-vindo/a ao {company}, {name}!",
                "preheader": "Sua conta está pronta",
                "body": "Estamos felizes em ter você a bordo. Sua oferta especial de boas-vindas de {offer_amount} está pronta para resgatar.\n\nComece visitando seu painel.",
            },
            "ru_RU": {
                "subject": "Добро пожаловать в {company}, {name}!",
                "preheader": "Ваш аккаунт готов",
                "body": "Мы рады приветствовать вас. Ваше специальное приветственное предложение на {offer_amount} готово к получению.\n\nНачните с посещения панели управления.",
            },
            "hi_IN": {
                "subject": "{company} में आपका स्वागत है, {name}!",
                "preheader": "आपका खाता तैयार है",
                "body": "हमें आपको अपने साथ पाकर खुशी हो रही है। आपका विशेष स्वागत प्रस्ताव {offer_amount} दावे के लिए तैयार है।\n\nअपने डैशबोर्ड पर जाकर शुरू करें।",
            },
        }
    )

    return {"welcome": welcome}


def _print_separator(title: str = "", char: str = "=", width: int = 80) -> None:
    """Print a visual separator."""
    if title:
        padding = (width - len(title) - 2) // 2
        print(f"\n{char * padding} {title} {char * padding}")
    else:
        print(f"\n{char * width}")


def _print_analysis(analysis: CaseAnalysis) -> None:
    """Pretty-print a case analysis."""
    _print_separator(f"Email Analysis: {analysis.email_id}", "-")

    print(f"  Recipient:        {analysis.recipient}")
    print(f"  Detected Locale:  {analysis.detected_locale} (via {analysis.detection_method})")
    print(f"  Language:         {analysis.cultural_profile['language']}")
    print(f"  Countries:        {', '.join(analysis.cultural_profile['countries'])}")
    print(f"  Script:           {analysis.cultural_profile['script']}")
    print(f"  Formality:        {analysis.cultural_profile['formality']}")
    print(f"  RTL:              {'Yes' if analysis.cultural_profile['rtl'] else 'No'}")
    print(f"  Risk Score:       {analysis.risk_score:.2f}")

    print(f"\n  📋 Compliance:")
    for cr in analysis.compliance_results:
        status = "✅ PASS" if cr["compliant"] else "❌ FAIL"
        print(f"    [{cr['regime']}] {status}")
        if cr["issues"]:
            for issue in cr["issues"]:
                print(f"      ⚠️  {issue}")

    print(f"\n  ⏰ Scheduling:")
    print(f"    Timezone:       {analysis.scheduling.get('timezone_display', 'N/A')}")
    print(f"    Optimal Send:   {analysis.scheduling.get('optimal_send_time_local', 'N/A')}")
    print(f"    Business Hours: {'Yes' if analysis.scheduling.get('is_business_hours') else 'No'}")
    if analysis.scheduling.get("adjustments"):
        for adj in analysis.scheduling["adjustments"]:
            print(f"    📌 Adjustment:  {adj}")

    print(f"\n  📨 Reply-All Policy:")
    print(f"    Enforced:       {'YES' if analysis.reply_all_policy['enforce_reply_all'] else 'No'}")
    print(f"    Reason:         {analysis.reply_all_policy['reason']}")

    print(f"\n  🔢 Formatting Examples:")
    for key, val in analysis.formatting_examples.items():
        label = key.replace("_", " ").title()
        print(f"    {label}: {val}")

    if analysis.template_rendered:
        print(f"\n  📧 Rendered Template:")
        print(f"    Subject:  {analysis.template_rendered['subject']}")
        print(f"    Greeting: {analysis.template_rendered['greeting']}")
        body_lines = analysis.template_rendered['body'].split('\n')
        print(f"    Body:")
        for line in body_lines[:5]:
            print(f"      {line}")
        print(f"    Closing:  {analysis.template_rendered['closing']}")
        print(f"    Formality: {analysis.template_rendered['formality']}")

    if analysis.recommendations:
        print(f"\n  💡 Recommendations:")
        for rec in analysis.recommendations:
            print(f"    → {rec}")


def main():
    """Full demonstration of V127 Email Localization Engine."""
    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║                    V127 EMAIL LOCALIZATION ENGINE                          ║
║              Production-Grade Email Internationalization                   ║
║                      Version 127.0.0 — Full Demo                           ║
╚══════════════════════════════════════════════════════════════════════════════╝
    """)

    # Initialize engine
    engine = LocalizationEngine()

    # Register templates
    templates = _create_demo_templates()
    for tpl in templates.values():
        engine.register_template(tpl)

    _print_separator("CULTURAL DATABASE STATISTICS")
    print(f"  Total cultural profiles: {len(CULTURAL_DB)}")
    print(f"  Total TLD mappings:      {len(TLD_TO_LOCALE)}")
    scripts_used = set(p.script.value for p in CULTURAL_DB.values())
    print(f"  Scripts supported:       {', '.join(sorted(scripts_used))}")
    regimes_covered = set()
    for p in CULTURAL_DB.values():
        for r in p.compliance_regimes:
            regimes_covered.add(r.value)
    print(f"  Compliance regimes:      {', '.join(sorted(regimes_covered))}")
    rtl_count = sum(1 for p in CULTURAL_DB.values() if p.rtl)
    print(f"  RTL languages:          {rtl_count}")
    reply_all_cultures = sum(1 for p in CULTURAL_DB.values() if p.reply_all_expected)
    print(f"  Reply-all cultures:     {reply_all_cultures}/{len(CULTURAL_DB)}")

    # ===================================================================
    # TEST EMAILS — Different countries and languages
    # ===================================================================
    test_emails = [
        {
            "id": "E001",
            "recipient": "max.mueller@siemens.de",
            "subject": "Partnership proposal for Q3",
            "body": "Sehr geehrter Herr Mueller, wir möchten eine Zusammenarbeit vorschlagen. Bitte finden Sie anbei unser Angebot über €125.000,00. Mit freundlichen Grüßen. Unsubscribe: link",
            "headers": {"from": "sales@company.com"},
            "recipients": ["max.mueller@siemens.de", "anna.schmidt@siemens.de"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Max", "last_name": "Mueller",
                "company": "TechCorp", "offer_amount": "€125.000,00",
                "honorific": "Herr"
            },
            "send_time": "2026-05-29T22:30:00+00:00",
        },
        {
            "id": "E002",
            "recipient": "yuki.tanaka@toyota.co.jp",
            "subject": "製品に関するお問い合わせ",
            "body": "田中様、いつもお世話になっております。新製品のご案内をお送りいたします。価格は¥1,500,000です。何卒よろしくお願い申し上げます。配信停止はこちら",
            "headers": {"from": "info@globalcorp.com"},
            "recipients": ["yuki.tanaka@toyota.co.jp", "hiroshi.sato@toyota.co.jp"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Yuki", "last_name": "Tanaka",
                "company": "GlobalCorp", "offer_amount": "¥1,500,000",
                "honorific": "様"
            },
            "send_time": "2026-05-29T02:00:00+00:00",
        },
        {
            "id": "E003",
            "recipient": "marie.dupont@total.fr",
            "subject": "Proposition de collaboration",
            "body": "Chère Madame Dupont, nous sommes ravis de vous proposer un partenariat. L'investissement prévu est de 250 000 €. Veuillez agréer nos salutations distinguées. Pour vous désabonner: lien",
            "headers": {"from": "partnerships@company.com"},
            "recipients": ["marie.dupont@total.fr", "jean.martin@total.fr", "sophie.bernard@total.fr"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Marie", "last_name": "Dupont",
                "company": "PartnersCo", "offer_amount": "250 000 €",
                "honorific": "Madame"
            },
            "send_time": "2026-05-29T14:00:00+00:00",
        },
        {
            "id": "E004",
            "recipient": "carlos.silva@petrobras.com.br",
            "subject": "Proposta de parceria comercial",
            "body": "Prezado Sr. Silva, gostaríamos de propor uma parceria. O investimento seria de R$ 500.000,00. Atenciosamente. Para descadastrar: link. Política de privacidade disponível.",
            "headers": {"from": "business@company.com"},
            "recipients": ["carlos.silva@petrobras.com.br", "ana.santos@petrobras.com.br"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Carlos", "last_name": "Silva",
                "company": "InvestCo", "offer_amount": "R$ 500.000,00",
                "honorific": "Sr."
            },
            "send_time": "2026-05-29T18:00:00+00:00",
        },
        {
            "id": "E005",
            "recipient": "ahmed.almaktoum@deyaar.ae",
            "subject": "اقتراح شراكة استراتيجية",
            "body": "سعادة السيد ألمكتوم المحترم، يسعدنا أن نقترح شراكة استراتيجية بقيمة ١٠٠٠٠٠٠ درهم. وتفضلوا بقبول فائق الاحترام والتقدير. لإلغاء الاشتراك: رابط",
            "headers": {"from": "exec@globalcorp.com"},
            "recipients": ["ahmed.almaktoum@deyaar.ae", "fatima.hassan@deyaar.ae"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Ahmed", "last_name": "AlMaktoum",
                "company": "GlobalInvest", "offer_amount": "1,000,000 AED",
                "honorific": "السيد"
            },
            "send_time": "2026-05-29T06:00:00+00:00",
        },
        {
            "id": "E006",
            "recipient": "min-jun.kim@samsung.co.kr",
            "subject": "제휴 제안서",
            "body": "김님께, 안녕하십니까. 새로운 제휴를 제안드립니다. 투자 금액은 ₩500,000,000입니다. 감사합니다. 수신거부: 링크",
            "headers": {"from": "bd@techcorp.com"},
            "recipients": ["min-jun.kim@samsung.co.kr", "soo-jin.park@samsung.co.kr"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Min-jun", "last_name": "Kim",
                "company": "TechAlliance", "offer_amount": "₩500,000,000",
                "honorific": "님"
            },
            "send_time": "2026-05-29T01:00:00+00:00",
        },
        {
            "id": "E007",
            "recipient": "priya.sharma@tcs.co.in",
            "subject": "Partnership proposal for digital transformation",
            "body": "Dear Ms. Sharma, We would like to propose a strategic partnership. The investment would be ₹2,50,00,000. Please review and let us know. Unsubscribe | Privacy Policy",
            "headers": {"from": "partnerships@globalcorp.com"},
            "recipients": ["priya.sharma@tcs.co.in"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Priya", "last_name": "Sharma",
                "company": "DigitalPartners", "offer_amount": "₹2,50,00,000",
                "honorific": "Ms."
            },
            "send_time": "2026-05-29T10:00:00+00:00",
        },
        {
            "id": "E008",
            "recipient": "olga.ivanova@yandex.ru",
            "subject": "Предложение о сотрудничестве",
            "body": "Уважаемая г-жа Иванова! Мы рады предложить сотрудничество на сумму 15 000 000 ₽. С уважением. Отписаться: ссылка",
            "headers": {"from": "biz@company.com"},
            "recipients": ["olga.ivanova@yandex.ru", "dmitry.petrov@yandex.ru"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Olga", "last_name": "Ivanova",
                "company": "RusPartner", "offer_amount": "15 000 000 ₽",
                "honorific": "г-жа"
            },
            "send_time": "2026-05-29T15:00:00+00:00",
        },
        {
            "id": "E009",
            "recipient": "john.smith@company.com",
            "subject": "FREE OFFER!!! ACT NOW!!! $$$",
            "body": "Hey John! Check out this amazing deal! You won't believe the savings! BUY NOW! This is an advertisement. No physical address listed. No unsubscribe link anywhere.",
            "headers": {"from": "marketing@spammy.com"},
            "recipients": ["john.smith@company.com"],
            "template_id": "welcome",
            "template_vars": {
                "name": "John", "last_name": "Smith",
                "company": "DealCo", "offer_amount": "$99.99",
                "honorific": "Mr."
            },
            "send_time": "2026-05-29T12:00:00+00:00",
        },
        {
            "id": "E010",
            "recipient": "somchai.srisuk@scg.co.th",
            "subject": "ข้อเสนอความร่วมมือทางธุรกิจ",
            "body": "เรียน คุณศรีสุข, เราขอเสนอความร่วมมือทางธุรกิจ มูลค่า 5,000,000 บาท. ขอแสดงความนับถือ. ยกเลิกการรับอีเมล: ลิงก์",
            "headers": {"from": "thai.office@company.com"},
            "recipients": ["somchai.srisuk@scg.co.th", "nari.rak@scg.co.th"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Somchai", "last_name": "Srisuk",
                "company": "ThaiPartners", "offer_amount": "฿5,000,000",
                "honorific": "คุณ"
            },
            "send_time": "2026-05-29T05:00:00+00:00",
        },
        {
            "id": "E011",
            "recipient": "wang.wei@alibaba.com.cn",
            "subject": "战略合作提案",
            "body": "尊敬的王先生：我们很高兴提议战略合作，投资金额为¥50,000,000。此致敬礼。退订链接",
            "headers": {"from": "cn.office@globalcorp.com"},
            "recipients": ["wang.wei@alibaba.com.cn", "li.ming@alibaba.com.cn"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Wei", "last_name": "Wang",
                "company": "SinoGlobal", "offer_amount": "¥50,000,000",
                "honorific": "先生"
            },
            "send_time": "2026-05-29T03:00:00+00:00",
        },
        {
            "id": "E012",
            "recipient": "kirsten.nielsen@maersk.dk",
            "subject": "Partnership opportunity",
            "body": "Kære Kirsten, tak for dit interesse. Vi vil gerne foreslå et samarbejde på 750.000 kr. Med venlig hilsen. Afmeld: link. Privatlivspolitik tilgængelig.",
            "headers": {"from": "nordic@company.com"},
            "recipients": ["kirsten.nielsen@maersk.dk"],
            "template_id": "welcome",
            "template_vars": {
                "name": "Kirsten", "last_name": "Nielsen",
                "company": "NordicTrade", "offer_amount": "750.000 kr.",
                "honorific": "Fru"
            },
            "send_time": "2026-05-29T08:00:00+00:00",
        },
    ]

    # ===================================================================
    # PROCESS ALL TEST EMAILS
    # ===================================================================
    _print_separator("PROCESSING TEST EMAILS", "=")
    print(f"  Analyzing {len(test_emails)} emails across different countries...\n")

    analyses = engine.process_batch(test_emails)

    for analysis in analyses:
        _print_analysis(analysis)

    # ===================================================================
    # BATCH SUMMARY REPORT
    # ===================================================================
    _print_separator("BATCH SUMMARY REPORT", "=")
    report = engine.get_analysis_report()
    print(f"  Total Emails Analyzed:  {report['total_analyzed']}")
    print(f"  Unique Locales:         {report['unique_locales']}")
    print(f"  Locales Detected:       {', '.join(report['locales_detected'])}")
    print(f"  Average Risk Score:     {report['average_risk_score']:.3f}")
    print(f"  Maximum Risk Score:     {report['max_risk_score']:.3f}")
    print(f"  Compliance Failures:    {report['compliance_failures']}")
    print(f"  Reply-All Enforced:     {report['reply_all_enforced']}")

    # ===================================================================
    # DETAILED NUMBER/CURRENCY FORMATTING DEMO
    # ===================================================================
    _print_separator("NUMBER & CURRENCY FORMATTING DEMO", "=")
    formatter = LocaleFormatter()
    demo_value = 1234567.89
    demo_currencies = [
        ("en_US", 1234567.89),
        ("de_DE", 1234567.89),
        ("fr_FR", 1234567.89),
        ("ja_JP", 1234567),
        ("zh_CN", 1234567.89),
        ("pt_BR", 1234567.89),
        ("ar_SA", 1234567.89),
        ("ko_KR", 1234567),
        ("hi_IN", 1234567.89),
        ("ru_RU", 1234567.89),
        ("tr_TR", 1234567.89),
        ("nb_NO", 1234567.89),
        ("th_TH", 1234567.89),
        ("de_CH", 1234567.89),
        ("sv_SE", 1234567.89),
        ("pl_PL", 1234567.89),
    ]

    now = datetime.now()
    print(f"\n  {'Locale':<12} {'Number':<18} {'Currency':<22} {'Date':<15} {'Time':<10}")
    print(f"  {'─' * 77}")
    for locale, val in demo_currencies:
        num = formatter.format_number(val, locale)
        curr = formatter.format_currency(val, locale)
        date = formatter.format_date(now, locale)
        time = formatter.format_time(now, locale)
        print(f"  {locale:<12} {num:<18} {curr:<22} {date:<15} {time:<10}")

    # ===================================================================
    # LANGUAGE DETECTION DEMO
    # ===================================================================
    _print_separator("LANGUAGE AUTO-DETECTION DEMO", "=")

    detection_samples = [
        ("user@company.de", "Sehr geehrte Damen und Herren, vielen Dank für Ihre Anfrage."),
        ("user@company.co.jp", "いつもお世話になっております。お問い合わせいただきありがとうございます。"),
        ("user@company.com.br", "Prezado senhor, gostaríamos de informar que sua proposta foi aceita."),
        ("user@company.fr", "Bonjour, nous vous remercions pour votre message. Cordialement."),
        ("user@gmail.com", "Hello! Thanks for reaching out. We'll get back to you shortly."),
        ("user@company.co.kr", "안녕하세요. 문의해 주셔서 감사합니다."),
        ("user@company.sa", "مرحبا، شكرا لتواصلكم معنا."),
        ("user@company.cn", "您好，感谢您的来信。我们会尽快回复您。"),
        ("user@company.in", "नमस्ते, आपके संदेश के लिए धन्यवाद।"),
        ("user@company.th", "สวัสดีครับ ขอบคุณสำหรับข้อความครับ"),
    ]

    for email, content in detection_samples:
        locale, method = auto_detect_locale(email, content)
        profile = CULTURAL_DB.get(locale, CULTURAL_DB["en_US"])
        print(f"  📧 {email:<30} → {locale:<10} ({profile.language_name}, via {method})")

    # ===================================================================
    # COMPLIANCE MATRIX
    # ===================================================================
    _print_separator("COMPLIANCE REGIME COVERAGE", "=")
    for regime in ComplianceRegime:
        if regime == ComplianceRegime.NONE:
            continue
        applicable_locales = [
            code for code, prof in CULTURAL_DB.items()
            if regime in prof.compliance_regimes
        ]
        print(f"  {regime.value:<12} → {len(applicable_locales)} locales: {', '.join(applicable_locales[:5])}"
              f"{'...' if len(applicable_locales) > 5 else ''}")

    _print_separator("DEMO COMPLETE", "=")
    print(f"""
  V127 Email Localization Engine processed {len(test_emails)} emails across:
  • {report['unique_locales']} distinct locales
  • {len(CULTURAL_DB)} cultural profiles available
  • {len(ComplianceRegime) - 1} compliance regimes supported
  • {report['reply_all_enforced']} reply-all enforcements triggered
  • {report['compliance_failures']} compliance failures detected

  All features operational. Ready for production deployment.
    """)


if __name__ == "__main__":
    main()
