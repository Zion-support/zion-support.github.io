#!/usr/bin/env python3
"""
V59: Email Personalization Engine
Dynamically personalizes EVERY outbound email with recipient-specific data:
recent company news, LinkedIn activity, mutual connections, industry trends,
personal milestones, and previous email engagement history — making each
email feel individually crafted by a human who did their research.
Data stored in: data/v59_personalization_cache.json, data/v59_linkedin_cache.json
"""
import json, os, re
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional
from collections import defaultdict

DATA_DIR = Path("data")
PERS_CACHE_FILE = DATA_DIR / "v59_personalization_cache.json"
LI_CACHE_FILE = DATA_DIR / "v59_linkedin_cache.json"
os.makedirs(DATA_DIR, exist_ok=True)

# ── Personalization tokens ───────────────────────────────────────────────────────
PERSONALIZATION_TOKENS = {
    "{first_name}": "recipient_first_name",
    "{last_name}": "recipient_last_name",
    "{full_name}": "recipient_full_name",
    "{company}": "company_name",
    "{company_size}": "company_size",
    "{industry}": "industry",
    "{job_title}": "job_title",
    "{recent_news}": "recent_company_news",
    "{mutual_connection}": "mutual_connection",
    "{linkedin_activity}": "linkedin_activity",
    "{industry_trend}": "industry_trend",
    "{personal_milestone}": "personal_milestone",
    "{recent_achievement}": "recent_achievement",
    "{previous_email_topic}": "previous_email_topic",
    "{their_product}": "their_product",
    "{pain_point}": "identified_pain_point",
    "{competitor_they_use}": "competitor_they_use",
    "{recent_post}": "recent_linkedin_post",
    "{location}": "location",
    "{timezone}": "timezone",
    "{recent_win}": "recent_company_win",
}

# ── Industry trends (mock — in production, pull from news API) ──────────────────
INDUSTRY_TRENDS = {
    "technology": "AI adoption is accelerating across enterprise — 73% of CTOs plan to increase AI budgets in 2026.",
    "healthcare": "Digital health transformation continues — telehealth and AI diagnostics are top investment priorities.",
    "finance": "Regulatory technology spending is up 40% as compliance requirements tighten globally.",
    "retail": "Unified commerce is the top priority — blending in-store and digital experiences drives 2.3x revenue.",
    "manufacturing": "Smart factory initiatives are scaling — predictive maintenance and digital twins are top ROI drivers.",
    "education": "EdTech integration is accelerating — AI-powered personalized learning is the top institutional priority.",
    "legal": "Legal tech adoption is at an inflection point — contract intelligence and e-discovery drive the market.",
    "marketing": "First-party data strategies are critical — AI-driven personalization and intent signals lead channel investment.",
    "saas": "Customer retention and expansion revenue are the top SaaS metrics as new logo growth slows.",
    "default": "Innovation and operational efficiency remain the top two business priorities across all industries.",
}

# ── Company size segments ────────────────────────────────────────────────────────
COMPANY_SIZE_SEGMENTS = {
    "1-10":   {"label": "startup", "pain_points": ["scaling", "hiring", "product-market fit"], "focus": "growth"},
    "11-50":  {"label": "scale-up", "pain_points": ["process", "retention", "fundraising"], "focus": "efficiency"},
    "51-200": {"label": "mid-market", "pain_points": ["cross-team alignment", "technology debt", "hiring"], "focus": "scale"},
    "201-1000":{"label": "enterprise", "pain_points": ["digital transformation", "compliance", "ROI"], "focus": "transformation"},
    "1000+":  {"label": "large enterprise", "pain_points": ["innovation velocity", "legacy systems", "talent"], "focus": "optimization"},
}

def _load_cache() -> dict:
    if PERS_CACHE_FILE.exists():
        try: return json.loads(PERS_CACHE_FILE.read_text())
        except: pass
    return {}

def _save_cache(cache: dict) -> None:
    PERS_CACHE_FILE.write_text(json.dumps(cache, indent=2, ensure_ascii=False))

def _load_linkedin_cache() -> dict:
    if LI_CACHE_FILE.exists():
        try: return json.loads(LI_CACHE_FILE.read_text())
        except: pass
    return {}

def _infer_company_size_segment(employee_count: str) -> str:
    """Infer company size segment from employee count string."""
    try:
        count = int(re.sub(r'[\D]', '', employee_count.split('-')[0] if '-' in employee_count else employee_count))
        if count <= 10: return "1-10"
        elif count <= 50: return "11-50"
        elif count <= 200: return "51-200"
        elif count <= 1000: return "201-1000"
        else: return "1000+"
    except:
        return "51-200"  # default

def build_recipient_profile(recipient_email: str) -> dict:
    """
    Build a personalization profile for a recipient from their email + history.
    In production: enrich with Clearbit, Apollo, LinkedIn Sales Navigator, ZoomInfo.
    Returns: {first_name, last_name, company, job_title, industry, company_size, ...}
    """
    cache = _load_cache()
    profile_key = recipient_email.lower()

    if profile_key in cache:
        cached = cache[profile_key]
        # Refresh if older than 7 days
        if cached.get("cached_at"):
            age_days = (datetime.now(timezone.utc) - datetime.fromisoformat(cached["cached_at"]).replace(tzinfo=timezone.utc)).total_seconds() / 86400
            if age_days < 7:
                return cached

    # Parse from email
    name_part = recipient_email.split("@")[0]
    domain = recipient_email.split("@")[-1] if "@" in recipient_email else ""

    # Infer company from domain
    company_from_domain = domain.split(".")[0].capitalize()

    # Build mock profile (in production: API enrichment)
    profile = {
        "email": recipient_email,
        "recipient_first_name": name_part.split(".")[0].capitalize() if "." in name_part else name_part.capitalize(),
        "recipient_last_name": name_part.split(".")[1].capitalize() if "." in name_part else "",
        "company": company_from_domain,
        "industry": "technology",
        "job_title": "Professional",
        "company_size": "51-200",
        "location": "United States",
        "timezone": "US/Eastern",
        "recent_company_news": f"{company_from_domain} continues to grow in the enterprise market.",
        "mutual_connection": None,
        "linkedin_activity": None,
        "recent_achievement": None,
        "identified_pain_point": None,
        "competitor_they_use": None,
        "their_product": None,
        "personalization_score": 0.4,  # Low without enrichment
        "enrichment_source": "inferred",
        "cached_at": datetime.now(timezone.utc).isoformat(),
    }

    cache[profile_key] = profile
    _save_cache(cache)
    return profile

def enrich_recipient_profile(recipient_email: str, enrichment_data: dict) -> dict:
    """Enrich a profile with additional data from enrichment APIs."""
    cache = _load_cache()
    profile_key = recipient_email.lower()
    profile = cache.get(profile_key, build_recipient_profile(recipient_email))

    # Apply enrichment
    if enrichment_data.get("first_name"): profile["recipient_first_name"] = enrichment_data["first_name"]
    if enrichment_data.get("last_name"): profile["recipient_last_name"] = enrichment_data["last_name"]
    if enrichment_data.get("company"): profile["company"] = enrichment_data["company"]
    if enrichment_data.get("job_title"): profile["job_title"] = enrichment_data["job_title"]
    if enrichment_data.get("industry"): profile["industry"] = enrichment_data["industry"]
    if enrichment_data.get("company_size"): profile["company_size"] = enrichment_data["company_size"]
    if enrichment_data.get("location"): profile["location"] = enrichment_data["location"]
    if enrichment_data.get("linkedin_url"): profile["linkedin_url"] = enrichment_data["linkedin_url"]
    if enrichment_data.get("recent_news"): profile["recent_company_news"] = enrichment_data["recent_news"]
    if enrichment_data.get("recent_achievement"): profile["recent_achievement"] = enrichment_data["recent_achievement"]
    if enrichment_data.get("mutual_connection"): profile["mutual_connection"] = enrichment_data["mutual_connection"]
    if enrichment_data.get("identified_pain_point"): profile["identified_pain_point"] = enrichment_data["identified_pain_point"]
    if enrichment_data.get("competitor_they_use"): profile["competitor_they_use"] = enrichment_data["competitor_they_use"]
    if enrichment_data.get("their_product"): profile["their_product"] = enrichment_data["their_product"]

    # Update personalization score
    score = 0.4  # base
    if enrichment_data.get("first_name"): score += 0.1
    if enrichment_data.get("company"): score += 0.1
    if enrichment_data.get("job_title"): score += 0.1
    if enrichment_data.get("industry"): score += 0.1
    if enrichment_data.get("recent_news"): score += 0.1
    profile["personalization_score"] = min(score, 1.0)
    profile["enrichment_source"] = enrichment_data.get("source", "api")
    profile["cached_at"] = datetime.now(timezone.utc).isoformat()

    cache[profile_key] = profile
    _save_cache(cache)
    return profile

def personalize_email_template(
    template: str,
    recipient_email: str,
    sender_email: str = "",
    previous_email_subject: str = "",
) -> dict:
    """
    Main entry point for V59.
    Personalizes an email template with recipient-specific data.
    Returns: {personalized_email, tokens_resolved, personalization_score, context_used}
    """
    profile = build_recipient_profile(recipient_email)
    personalized = template
    tokens_resolved = []
    context_used = []

    # Resolve each token
    for token, field_key in PERSONALIZATION_TOKENS.items():
        if token not in personalized:
            continue

        value = profile.get(field_key)
        if not value:
            # Fallback generation
            if field_key == "recent_company_news":
                value = f"{profile['company']} is growing in the {profile['industry']} sector."
            elif field_key == "industry_trend":
                value = INDUSTRY_TRENDS.get(profile["industry"], INDUSTRY_TRENDS["default"])
            elif field_key == "identified_pain_point":
                size_segment = _infer_company_size_segment(profile["company_size"])
                value = COMPANY_SIZE_SEGMENTS.get(size_segment, COMPANY_SIZE_SEGMENTS["default"])["pain_points"][0]
            elif field_key == "recent_achievement":
                value = None
            else:
                value = None

        if value:
            personalized = personalized.replace(token, str(value))
            tokens_resolved.append({"token": token, "value": str(value)[:80]})
            context_used.append(f"{token} → {str(value)[:40]}")
        else:
            # Remove unresolved token
            personalized = personalized.replace(token, "")

    # Add personalized opener if we have enough data
    score = profile.get("personalization_score", 0)
    if score >= 0.5:
        first_name = profile.get("recipient_first_name", "")
        company = profile.get("company", "")
        if first_name and personalized:
            # Prepend personalized opener
            context = []
            if profile.get("recent_achievement"):
                context.append(f"congratulations on {profile['recent_achievement']}")
            if profile.get("recent_company_news") and "continues" in profile["recent_company_news"].lower():
                context.append(f"I saw that {company} is expanding")
            if profile.get("mutual_connection"):
                context.append(f"{profile['mutual_connection']} suggested I reach out")

            if context:
                opener = f"Hi {first_name}, "
                if personalized[:3].lower() not in ["hi ", "dear"]:
                    personalized = opener + personalized[0].lower() + personalized[1:]

    # Remove any remaining unresolved tokens
    for token in PERSONALIZATION_TOKENS:
        personalized = personalized.replace(token, "")

    return {
        "original_template": template,
        "personalized_email": personalized.strip(),
        "recipient_email": recipient_email,
        "personalization_score": score,
        "tokens_resolved": tokens_resolved,
        "context_used": context_used,
        "profile_summary": {
            "name": f"{profile['recipient_first_name']} {profile['recipient_last_name']}",
            "company": profile["company"],
            "job_title": profile["job_title"],
            "industry": profile["industry"],
            "personalization_level": "high" if score >= 0.7 else "medium" if score >= 0.5 else "basic",
        },
    }

def generate_personalized_outreach_sequence(
    recipient_email: str,
    template_type: str = "cold_outreach",
) -> list:
    """
    Generate a 3-email personalized sequence.
    Each email gets progressively deeper personalization.
    """
    profile = build_recipient_profile(recipient_email)
    first_name = profile["recipient_first_name"]
    company = profile["company"]
    industry = profile["industry"]
    size_segment = _infer_company_size_segment(profile["company_size"])
    segment_info = COMPANY_SIZE_SEGMENTS.get(size_segment, COMPANY_SIZE_SEGMENTS["default"])
    pain_point = segment_info["pain_points"][0]
    trend = INDUSTRY_TRENDS.get(industry, INDUSTRY_TRENDS["default"])

    sequences = {
        "cold_outreach": [
            {
                "step": 1,
                "subject": f"Quick thought for {company}",
                "body": f"""Hi {first_name},

I noticed {company} is growing in the {industry} space. We've been helping companies like yours solve {pain_point} challenges with AI-powered automation.

Would a 10-minute call be worth exploring if there's a potential fit?

Best,
 Kleber""",
            },
            {
                "step": 2,
                "subject": f"Re: Quick thought for {company}",
                "body": f"""Hi {first_name},

Following up — I came across news that {company} is investing in operational efficiency. Our AI automation platform has helped similar {segment_info['label']} companies reduce manual work by 40%.

Happy to share a quick 2-minute overview if useful.

Best,
 Kleber""",
            },
            {
                "step": 3,
                "subject": f"Thought for {first_name} at {company}",
                "body": f"""Hi {first_name},

Last one from me — I wanted to share a relevant case study from a {segment_info['label']} in {industry} that reduced their {pain_point} by 60% in 90 days.

If that's useful context, I'm here. Otherwise, best of luck with {company}'s growth!

Best,
 Kleber""",
            },
        ],
    }

    return sequences.get(template_type, sequences["cold_outreach"])

if __name__ == "__main__":
    print("V59: Email Personalization Engine")
    tests = [
        ("alice@techcorp.de", "Hi, wanted to connect about {company}."),
        ("kenji@kaisha.jp", "Hello {first_name}, congrats on {recent_achievement} at {company}!"),
        ("sarah@startup.io", "{first_name} — quick idea for {company} re: {industry_trend}"),
    ]
    templates = [
        "Hi {first_name}, I noticed {company} is growing in the {industry} space. Would love to share how we've helped similar companies solve {identified_pain_point} challenges.",
        "Hi {first_name}, {mutual_connection} suggested I reach out. {company}'s work in {industry} caught my attention — particularly the trend toward {industry_trend}.",
        "{first_name} — I came across {company}'s recent expansion and had an idea that could help with {identified_pain_point}. Quick 10 min?",
    ]
    for (email, orig), template in zip(tests, templates):
        result = personalize_email_template(template, email)
        print(f"\nTo: {email} | score={result['personalization_score']:.0%}")
        print(f"  Tokens resolved: {[t['token'] for t in result['tokens_resolved']]}")
        print(f"  Output: {result['personalized_email'][:100]}...")
