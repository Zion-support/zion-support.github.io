#!/usr/bin/env python3
"""
Lead Forge — refresh the lead pool from configured public sources.

Steps:
  1. Load the existing lead pool (data/zion_leads_free.json + .csv).
  2. Query each configured source, tracking queries_used / pages_checked.
  3. Forge new lead records from source data (real records only).
  4. De-duplicate against the existing pool and merge.
  5. Write the merged pool back to data/zion_leads_free.{json,csv}.
  6. Print the report block (queries_used, pages_checked, forged, existing_pool,
     new_total_after_merge).

Note: external sources that render as JS single-page apps / require an API session
are parsed with best-effort extractors and contribute 0 records when no record is
present. Nothing is fabricated.
"""

import csv
import json
import os
import re
import ssl
import urllib.request
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
POOL_CSV = os.path.join(DATA_DIR, "zion_leads_free.csv")
POOL_JSON = os.path.join(DATA_DIR, "zion_leads_free.json")

FIELDS = [
    "empresa", "site", "localidade", "servico_relevante", "motivo",
    "fonte", "tipo", "estimado_valor", "prioridade",
]

# Source fetch configs. Each entry: label, url, extractor(html)->list[dict].
SOURCES = [
    {
        "label": "SAM.gov contract opportunities",
        "url": "https://sam.gov/opportunities",
        "extract": "parse_sam_opportunities",
    },
]


# --------------------------------------------------------------------------- #
# pool io
# --------------------------------------------------------------------------- #
def load_json_pool(path=POOL_JSON):
    with open(path, encoding="utf-8") as fh:
        payload = json.load(fh)
    if isinstance(payload, list):
        return payload
    return payload.get("leads", [])


def load_csv_pool(path=POOL_CSV):
    with open(path, encoding="utf-8", newline="") as fh:
        return list(csv.DictReader(fh))


def dedupe(leads):
    seen, out = set(), []
    for lead in leads:
        key = ((lead.get("site") or "").strip(),
               (lead.get("empresa") or "").strip().lower())
        if key in seen:
            continue
        seen.add(key)
        out.append(lead)
    return out


def load_existing_pool():
    json_pool = load_json_pool()
    csv_pool = load_csv_pool()
    return dedupe(json_pool + csv_pool)


# --------------------------------------------------------------------------- #
# source fetching / extraction
# --------------------------------------------------------------------------- #
def fetch(url):
    req = urllib.request.Request(
        url, headers={"User-Agent": "Mozilla/5.0 (lead-forge)"}
    )
    ctx = ssl._create_unverified_context()
    with urllib.request.urlopen(req, timeout=20, context=ctx) as resp:
        return resp.status, resp.read().decode("utf-8", "ignore")


def parse_sam_opportunities(html):
    """Best-effort extraction of opportunity records from SAM.gov HTML.

    The public SAM.gov pages are JavaScript single-page applications whose
    opportunity records are rendered client-side; no serializable records
    appear in the server HTML, so this returns zero records rather than
    guessing at companies.
    """
    records = []
    # Collect any opportunity/agency/title hints present in the raw page.
    hints = []
    for m in re.finditer(r"<a[^>]+href=\"([^\"]+)\"[^>]*>(.*?)</a>", html, re.S):
        href, label = m.group(1), re.sub(r"<[^>]+>", "", m.group(2)).strip()
        if ("sam.gov" in href and ("opp" in href.lower() or "node" in href.lower())):
            hints.append((href, label))
    # If we found structure, convert hints to canonical records; otherwise none.
    if hints:
        for href, label in hints:
            records.append({
                "empresa": label or "SAM.gov opportunity",
                "site": href,
                "localidade": "",
                "servico_relevante": "",
                "motivo": "SAM.gov contract opportunity (public page)",
                "fonte": "SAM.gov (public)",
                "tipo": "government_rfp",
                "estimado_valor": "Not disclosed",
                "prioridade": "media",
            })
    return records


# --------------------------------------------------------------------------- #
# main
# --------------------------------------------------------------------------- #
def main():
    import re  # imported lazily here to keep module-level clean

    existing_pool = dedupe(load_existing_pool())
    existing_pool_count = len(existing_pool)

    queries_used = 0
    pages_checked = 0
    forged_records = []

    for src in SOURCES:
        queries_used += 1
        try:
            status, html = fetch(src["url"])
            pages_checked += 1
            extractor = globals().get(src["extract"])
            if extractor is None:
                raise ValueError(f"unknown extractor '{src['extract']}'")
            forged_records.extend(extractor(html))
        except Exception as exc:
            print(f"[lead_forge] {src['label']} -> fetch failed: {exc}")

    # Forge: normalize/harden any records pulled from sources.
    forged = []
    for rec in forged_records:
        rec = {k: ((v or "").strip()) for k, v in rec.items()}
        if rec.get("empresa"):
            forged.append(rec)

    # Merge: existing pool + forged (deduplicated).
    merged = dedupe(existing_pool + forged)
    new_total = len(merged)

    # Persist merged pool (JSON canonical + CSV mirror).
    os.makedirs(DATA_DIR, exist_ok=True)
    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "generated_by": "lead_forge",
        "total_leads": new_total,
        "leads": merged,
    }
    with open(POOL_JSON, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False, indent=2)

    with open(POOL_CSV, "w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=FIELDS)
        writer.writeheader()
        for rec in merged:
            writer.writerow({k: rec.get(k, "") for k in FIELDS})

    # Report.
    print(f"queries_used: {queries_used}")
    print(f"pages_checked: {pages_checked}")
    print(f"forged: {len(forged)}")
    print(f"existing_pool: {existing_pool_count}")
    print(f"new_total_after_merge: {new_total}")


if __name__ == "__main__":
    main()
