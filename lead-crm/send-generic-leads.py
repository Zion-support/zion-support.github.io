#!/usr/bin/env python3
"""Send 26 generic-but-valid leads via Resend. Uses urllib only — no resend SDK needed."""

import json
import os
import urllib.request
import urllib.parse
from datetime import datetime, timezone

API_KEY = os.environ.get("RESEND_API_KEY", "")
if not API_KEY:
    raise SystemExit("RESEND_API_KEY not set in environment")

FROM = "Kleber | Zion Tech Group <kleber@ziontechgroup.com>"

LEADS = [
    # score 75
    ("hello@agencyaisolutions.com",      "agencyaisolutions.com",      75),
    ("suporte@allusivedigital.com",       "allusivedigital.com",       75),
    ("email@krishangtechnolab.com",      "krishangtechnolab.com",     75),
    ("info@mail.shopee.com.br",          "mail.shopee.com.br",        75),
    ("newsletters@nl.technologyadvice.com","nl.technologyadvice.com", 75),
    ("contato@entechus.com",             "entechus.com",              75),
    ("contato@e.drogaraia.com.br",       "e.drogaraia.com.br",        75),
    # score 60
    ("founders@getdarwin.ai",            "getdarwin.ai",              60),
    ("founders@getenter.ai",             "getenter.ai",               60),
    ("hello@lambda.ai",                  "lambda.ai",                 60),
    ("contato@elenta.tech",              "elenta.tech",               60),
    ("info@aiautomationagency.co.uk",    "aiautomationagency.co.uk",  60),
    # score 50
    ("founders@kahunalabs.com",          "kahunalabs.com",            50),
    ("contato@kahunalabs.com",           "kahunalabs.com",            50),
    ("contato@frontlinemsp.com",         "frontlinemsp.com",          50),
    ("contato@wheelhouseit.com",         "wheelhouseit.com",          50),
    ("contato@xovakstudio.com",          "xovakstudio.com",           50),
    ("marketing@addee.com.br",           "addee.com.br",              50),
    ("hello@1password.com",              "1password.com",             50),
    # score 35
    ("hello@canary.is",                  "canary.is",                 35),
    ("info@innovationglobalexperience.org","innovationglobalexperience.org",35),
    ("sales@pro.io",                     "pro.io",                    35),
    ("partners@pro.io",                  "pro.io",                    35),
    ("contact@intellectit.com.au",       "intellectit.com.au",        35),
    ("contact@gridware.com.au",          "gridware.com.au",           35),
    ("contact@cybercx.com.au",           "cybercx.com.au",            35),
]

results = []
total = len(LEADS)

for i, (to_email, domain, score) in enumerate(LEADS, 1):
    subject = f"Parceria Zion Tech Group — IA, automação e cloud para {domain}"
    body_text = (
        f"Olá!\n\n"
        f"Somos a Zion Tech Group e atuamos com IA, automação, FinOps, "
        f"zero-trust, inspeção por visão computacional e modernização de plataformas.\n\n"
        f"Gostaríamos de explorar uma possível parceria ou projeto conjunto com {domain}.\n\n"
        f"Agende uma conversa: https://calendly.com/kleber-ziontechgroup\n"
        f"Serviços e ferramentas gratuitas: https://ziontechgroup.com\n\n"
        f"Atenciosamente,\nKleber\nZion Tech Group"
    )
    body_html = body_text.replace("\n", "<br>")
    
    payload = json.dumps({
        "from": FROM,
        "to": [to_email],
        "subject": subject,
        "text": body_text,
        "html": body_html,
    }).encode("utf-8")
    
    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method="POST",
    )
    
    print(f"[{i:02d}/{total}] {to_email} ({domain}) [score={score}]...", end=" ", flush=True)
    
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            status_code = resp.status
            raw = resp.read().decode("utf-8")
            data = json.loads(raw)
            msg_id = data.get("id", "n/a")
            print(f"✓ {status_code} {msg_id}")
            results.append({
                "to": to_email, "domain": domain, "score": score,
                "status": "sent", "http_status": status_code,
                "message_id": msg_id,
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "note": "generic-lead-approved",
            })
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"✗ HTTP {e.code}: {body[:120]}")
        results.append({
            "to": to_email, "domain": domain, "score": score,
            "status": "failed", "http_status": e.code,
            "error": body[:500],
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "note": "generic-lead-approved",
        })
    except Exception as e:
        print(f"✗ ERROR: {e}")
        results.append({
            "to": to_email, "domain": domain, "score": score,
            "status": "failed", "http_status": None,
            "error": str(e),
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "note": "generic-lead-approved",
        })

sent = sum(1 for r in results if r["status"] == "sent")
failed = total - sent
output = {
    "send_type": "generic-lead-approved",
    "description": "Generic email leads (info@/contact@/founders@/hello@/etc.) — filtrados como único/contato apropriado",
    "total_attempted": total,
    "timestamp": datetime.now(timezone.utc).isoformat(),
    "results": results,
}
log_path = "/Users/miami2/zion.app/lead-crm/generic-lead-send-log.json"
with open(log_path, "w") as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"\n=== RESUMO ===")
print(f"Total: {total}")
print(f"Enviados: {sent}")
print(f"Falhos: {failed}")
print(f"Log: {log_path}")
print(f"Empresas: {', '.join(r['domain'] for r in results)}")
