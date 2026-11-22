#!/usr/bin/env python3
"""Envia os 26 leads genéricos aprovados via gog gmail — backend funcional."""

import json, os, subprocess
from datetime import datetime, timezone

ACCOUNT = "kleber@ziontechgroup.com"

# Leads genéricos aprovados
LEADS = [
    # score 75 — priority 1
    {"to": "suporte@allusivedigital.com",       "domain": "allusivedigital.com",       "score": 75},
    {"to": "email@krishangtechnolab.com",      "domain": "krishangtechnolab.com",     "score": 75},
    {"to": "info@mail.shopee.com.br",          "domain": "mail.shopee.com.br",        "score": 75},
    {"to": "newsletters@nl.technologyadvice.com","domain": "nl.technologyadvice.com", "score": 75},
    {"to": "contato@entechus.com",             "domain": "entechus.com",              "score": 75},
    {"to": "contato@e.drogaraia.com.br",       "domain": "e.drogaraia.com.br",        "score": 75},
    {"to": "hello@agencyaisolutions.com",      "domain": "agencyaisolutions.com",     "score": 75},
    # score 60
    {"to": "founders@getdarwin.ai",            "domain": "getdarwin.ai",              "score": 60},
    {"to": "founders@getenter.ai",             "domain": "getenter.ai",               "score": 60},
    {"to": "hello@lambda.ai",                  "domain": "lambda.ai",                 "score": 60},
    {"to": "contato@elenta.tech",              "domain": "elenta.tech",               "score": 60},
    {"to": "info@aiautomationagency.co.uk",    "domain": "aiautomationagency.co.uk",  "score": 60},
    # score 50
    {"to": "founders@kahunalabs.com",          "domain": "kahunalabs.com",            "score": 50},
    {"to": "contato@kahunalabs.com",           "domain": "kahunalabs.com",            "score": 50},
    {"to": "contato@frontlinemsp.com",         "domain": "frontlinemsp.com",          "score": 50},
    {"to": "contato@wheelhouseit.com",         "domain": "wheelhouseit.com",          "score": 50},
    {"to": "contato@xovakstudio.com",          "domain": "xovakstudio.com",           "score": 50},
    {"to": "marketing@addee.com.br",           "domain": "addee.com.br",              "score": 50},
    {"to": "hello@1password.com",              "domain": "1password.com",             "score": 50},
    # score 35
    {"to": "hello@canary.is",                  "domain": "canary.is",                 "score": 35},
    {"to": "info@innovationglobalexperience.org","domain": "innovationglobalexperience.org", "score": 35},
    {"to": "sales@pro.io",                     "domain": "pro.io",                    "score": 35},
    {"to": "partners@pro.io",                  "domain": "pro.io",                    "score": 35},
    {"to": "contact@intellectit.com.au",       "domain": "intellectit.com.au",        "score": 35},
    {"to": "contact@gridware.com.au",          "domain": "gridware.com.au",           "score": 35},
    {"to": "contact@cybercx.com.au",           "domain": "cybercx.com.au",            "score": 35},
]

BODY = """Olá!

Somos a Zion Tech Group e atuamos com IA, automação, FinOps, zero-trust, inspeção por visão computacional e modernização de plataformas.

Gostaríamos de explorar uma possível parceria ou projeto conjunto com {domain}.

Agende uma conversa: https://calendly.com/kleber-ziontechgroup
Serviços e ferramentas gratuitas: https://ziontechgroup.com

Atenciosamente,
Kleber | Zion Tech Group"""

LOG_PATH = "/Users/miami2/zion.app/lead-crm/outreach_send_log.json"
results = []
total = len(LEADS)

for i, lead in enumerate(LEADS, 1):
    to = lead["to"]
    domain = lead["domain"]
    score = lead["score"]
    subject = f"Parceria Zion Tech Group — IA, automação e cloud para {domain}"
    body = BODY.format(domain=domain)
    
    print(f"[{i:02d}/{total}] {to} ({domain}) [score={score}]...", end=" ", flush=True)
    
    cmd = [
        "gog", "gmail", "send",
        "--account", ACCOUNT,
        "--to", to,
        "--subject", subject,
        "--body", body,
        "--no-input",
    ]
    
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if r.returncode == 0:
            msg_id = ""
            for line in r.stdout.splitlines():
                if line.startswith("message_id"):
                    msg_id = line.split("\t", 1)[1].strip()
            print(f"✓ enviado (msg_id={msg_id})")
            results.append({"to": to, "domain": domain, "score": score, "status": "sent", "message_id": msg_id})
        else:
            err = r.stderr.strip() or r.stdout.strip() or f"exit {r.returncode}"
            print(f"✗ falhou: {err[:80]}")
            results.append({"to": to, "domain": domain, "score": score, "status": "failed", "error": err[:200]})
    except Exception as e:
        print(f"✗ erro: {e}")
        results.append({"to": to, "domain": domain, "score": score, "status": "failed", "error": str(e)})

sent = sum(1 for r in results if r["status"] == "sent")
failed = total - sent

print(f"\n=== RESUMO ===")
print(f"Total: {total}")
print(f"Enviados: {sent}")
print(f"Falhos: {failed}")
print(f"Empresas: {', '.join(r['domain'] for r in results)}")
