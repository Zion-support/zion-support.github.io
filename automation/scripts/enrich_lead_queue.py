import json
from pathlib import Path
from datetime import datetime, timezone

BASE = Path("/Users/miami2/zion.app")
AUTOMATION = BASE / "automation"
DATA = AUTOMATION / "data"
SEND_LOG = BASE / "outreach-send-log.jsonl"

LEADS_PATH = DATA / "zion_leads_free.json"
VALID_EMAILS = DATA / "valid_personal_emails.json"
COMPANIES = DATA / "companies_to_process.json"
OUTPUT = DATA / "zion_leads_free_enriched.json"

BLOCKED_DOMAINS = {
    "google.com", "github.com", "clutch.co", "sam.gov", "goodfirms.co",
    "linkedin.com", "facebook.com", "twitter.com", "verifier.me", "hunter.io",
    "lobster.com", "crunchbase.com", "angellist.com", "wellfound.com", "producthunt.com",
    "microsoft.com", "apple.com", "amazon.com", "oracle.com", "ibm.com", "salesforce.com",
    "zendesk.com", "hubspot.com", "atlassian.com", "slack.com", "zoom.us",
    "oracle.com", "adobe.com", "cisco.com", "dell.com", "hp.com", "intel.com",
    "amd.com", "nvidia.com", "redhat.com", "vmware.com", "dell.com"
}

GENERIC_PREFIXES = {"info", "contact", "hello", "admin", "support", "sales", "ceo", "founder"}


def load_json(path):
    if not path.exists():
        return []
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            return json.load(f)
    except Exception:
        return []


def load_sent():
    sent = set()
    if SEND_LOG.exists():
        with open(SEND_LOG, "r", encoding="utf-8", errors="ignore") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    r = json.loads(line)
                    to = (r.get("to") or "").strip().lower()
                    if r.get("status") == "sent" and to:
                        sent.add(to)
                except Exception:
                    pass
    return sent


def is_valid_email(email: str):
    if "@" not in email:
        return False
    local, domain = email.split("@", 1)
    if not local or not domain:
        return False
    if "." not in domain:
        return False
    if domain.lower() in BLOCKED_DOMAINS:
        return False
    if local.lower() in GENERIC_PREFIXES:
        return False
    return True


def clean_name(text: str):
    out = []
    for ch in (text or ""):
        if ch.isalpha():
            out.append(ch.lower())
        elif ch in " -":
            if out and out[-1] != " ":
                out.append(" ")
        elif ch in "().,:/":
            continue
    s = "".join(out).strip()
    while "  " in s:
        s = s.replace("  ", " ")
    return s


def normalize(text: str):
    return (text or "").strip()


def generate_candidates(company: dict, domain: str, base_name: str):
    name = clean_name(base_name) or clean_name(company.get("empresa", ""))
    domain = normalize(domain)
    if not domain:
        return []
    parts = [p for p in name.replace(",", " ").replace("/", " ").split() if p]
    first = parts[0].lower() if parts else "contact"
    last = parts[-1].lower() if len(parts) > 1 else first
    fl = f"{first}.{last}@"
    lf = f"{last}.{first}@"
    fl_only = f"{first[0]}{last}@" if first and last else None
    concat_duplicates = {f"{first}{last}@", f"{last}{first}@"}
    candidates = [
        f"{first}.{last}@{domain}",
        f"{last}.{first}@{domain}",
        f"{first}{last[0]}@{domain}" if last else None,
        f"{first[0]}{last}@{domain}" if last else None,
        f"{first}@{domain}",
        f"{last}@{domain}",
        f"contato@{domain}",
        f"vendas@{domain}",
        f"comercial@{domain}",
        f"suporte@{domain}",
        f"atendimento@{domain}",
    ]
    candidates += [fl + domain, lf + domain]
    if fl_only:
        candidates += [fl_only + domain]
    seen = set()
    out = []
    for c in candidates:
        if not c:
            continue
        if c.lower() in seen:
            continue
        local = c.split("@", 1)[0].lower()
        if local in concat_duplicates and "." not in local:
            continue
        seen.add(c.lower())
        out.append(c)
    return out


def main():
    now = datetime.now(timezone.utc).isoformat()
    raw_leads = load_json(LEADS_PATH)
    if isinstance(raw_leads, dict):
        leads = raw_leads.get("leads", [])
    else:
        leads = raw_leads
        raw_leads = {"leads": leads}
    valid_personal = load_json(VALID_EMAILS)
    companies = load_json(COMPANIES)
    sent = load_sent()

    existing_emails = set()
    for lead in leads:
        if isinstance(lead, str):
            continue
        em = normalize(lead.get("email")).lower()
        if em:
            existing_emails.add(em)

    new_leads = []
    seen = set(existing_emails)

    def add(lead):
        em = normalize(lead.get("email")).lower()
        if not em or em in seen or em in sent:
            return
        if not is_valid_email(em):
            return
        seen.add(em)
        lead.setdefault("tipo", lead.get("tipo", "company"))
        lead.setdefault("prioridade", lead.get("prioridade", "media"))
        lead.setdefault("contato_proventivo", lead.get("contato_proventivo") or em)
        lead.setdefault("created_at", now)
        new_leads.append(lead)

    for company in companies:
        emp = normalize(company.get("empresa")) or "Company"
        to = normalize(company.get("to"))
        if not to:
            continue
        domain = to.split("@", 1)[-1].lower()
        if domain in BLOCKED_DOMAINS:
            continue
        candidates = generate_candidates({"empresa": emp}, domain, emp)
        for cand in candidates:
            lead = {
                "empresa": emp,
                "email": cand,
                "site": company.get("subject") and f"https://{domain}" or "",
                "servico_relevante": company.get("service") or "AI Automation",
                "motivo": "Enriquecido automaticamente por dominio/descoberta.",
                "fonte": "enrich",
                "tipo": "company",
                "prioridade": "alta" if not cand.lower().startswith("contato") else "media",
                "contato_proventivo": cand,
                "created_at": now,
            }
            add(lead)

    for item in valid_personal:
        emp = normalize(item.get("empresa")) or "Company"
        domain = normalize(item.get("domain")).lower()
        if not domain or domain in BLOCKED_DOMAINS:
            continue
        email = normalize(item.get("email"))
        base_name = emp
        candidates = generate_candidates({"empresa": emp}, domain, base_name)
        if email:
            lead = {
                "empresa": emp,
                "email": email,
                "site": item.get("primary_site") or f"https://{domain}",
                "servico_relevante": "AI Automation",
                "motivo": "Validado por descoberta anterior.",
                "fonte": "validated-enrich",
                "tipo": "company",
                "prioridade": "alta",
                "contato_proventivo": email,
                "created_at": now,
            }
            add(lead)
        for cand in candidates:
            lead = {
                "empresa": emp,
                "email": cand,
                "site": item.get("primary_site") or f"https://{domain}",
                "servico_relevante": "AI Automation",
                "motivo": "Candidato baseado em descoberta anterior.",
                "fonte": "enrich",
                "tipo": "company",
                "prioridade": "media",
                "contato_proventivo": cand,
                "created_at": now,
            }
            add(lead)

    enriched = leads + new_leads
    payload = {
        "generated_at": now,
        "generated_by": "enrich_lead_queue",
        "total_leads": len(enriched),
        "leads": enriched,
    }
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2))
    print(json.dumps({
        "status": "ok",
        "existing": len(leads),
        "new_valid": len(new_leads),
        "total": len(enriched),
        "sent_skipped": len([l for l in new_leads if l.get("email","").lower() in sent]),
        "output": str(OUTPUT),
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
