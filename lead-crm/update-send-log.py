#!/usr/bin/env python3
"""Atualiza log de envio e newsletter_stats com os resultados do dia."""

import json, os
from datetime import datetime, timezone

LOG_PATH = "/Users/miami2/zion.app/lead-crm/outreach_send_log.json"
STATS_PATH = "/Users/miami2/zion.app/lead-crm/newsletter_stats.json"

# Carrega log existente
existing_log = {}
if os.path.exists(LOG_PATH):
    try:
        with open(LOG_PATH) as f:
            existing_log = json.load(f)
    except Exception:
        pass

# Novos envios registrados
new_sends = {
    "contato@infopremium.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b299d7fd89c32",
        "last_subject": "IA, automação e FinOps: o braço tecnológico que sua empresa precisa em 2026",
        "last_attempt": "2026-09-18T03:40:22Z",
    },
    "sac@casatech.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b299dc8a43406",
        "last_subject": "Segurança de dados e LGPD: como a CasaTech se protege em 2026?",
        "last_attempt": "2026-09-18T03:40:23Z",
    },
    "sac@fundacaovici.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b299e39036f21",
        "last_subject": "Tecnologia a serviço da inclusão: como a Vici pode ampliar seu impacto com IA",
        "last_attempt": "2026-09-18T03:40:25Z",
    },
    "contato@jaul.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b299e9d51b751",
        "last_subject": "Sobrevivendo à tempestade: Como a Jaul protege seu negócio com TI resiliente em tempos de crise",
        "last_attempt": "2026-09-18T03:40:26Z",
    },
    "suporte@allusivedigital.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c28e5c67a8",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:26Z",
    },
    "email@krishangtechnolab.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c2d8b67041",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:28Z",
    },
    "info@mail.shopee.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c35c55e3ef",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:29Z",
    },
    "newsletters@nl.technologyadvice.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c3847aea00",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:30Z",
    },
    "contato@entechus.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c3fca9f0ed",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:32Z",
    },
    "contato@e.drogaraia.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c453a9499d",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:33Z",
    },
    "hello@agencyaisolutions.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c4bea8ff2a",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:34Z",
    },
    "founders@getdarwin.ai": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c4e862115d",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:36Z",
    },
    "founders@getenter.ai": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c56bb303f7",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:37Z",
    },
    "hello@lambda.ai": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c5df72febc",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:38Z",
    },
    "contato@elenta.tech": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c64d6c766c",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:40Z",
    },
    "info@aiautomationagency.co.uk": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c6a2c7729c",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:42Z",
    },
    "founders@kahunalabs.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c6ec47d860",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:43Z",
    },
    "contato@kahunalabs.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c75daeed10",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:44Z",
    },
    "contato@frontlinemsp.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c79bf89ef0",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:46Z",
    },
    "contato@wheelhouseit.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c81f18349d",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:47Z",
    },
    "contato@xovakstudio.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c890079d10",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:49Z",
    },
    "marketing@addee.com.br": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c8fb615cbd",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:51Z",
    },
    "hello@1password.com": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c9416c0dea",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:52Z",
    },
    "hello@canary.is": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c9a1cba823",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:54Z",
    },
    "info@innovationglobalexperience.org": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29c9e8fcad8e",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:55Z",
    },
    "sales@pro.io": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29ca5f6f8907",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:57Z",
    },
    "partners@pro.io": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29ca9ed1f5e7",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:41:59Z",
    },
    "contact@intellectit.com.au": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29cb09cd1e88",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:42:00Z",
    },
    "contact@gridware.com.au": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29cb7facc773",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:42:01Z",
    },
    "contact@cybercx.com.au": {
        "last_status": "sent",
        "last_http_status": 200,
        "last_message_id": "1a0b29cba8c8f041",
        "last_subject": "Parceria Zion Tech Group — operações e eficiência para TI",
        "last_attempt": "2026-09-18T03:42:03Z",
    },
}

# Merge no log
merged_log = {}
for addr, data in existing_log.items():
    merged_log[addr] = data
for addr, data in new_sends.items():
    merged_log[addr] = data

with open(LOG_PATH, "w") as f:
    json.dump(merged_log, f, indent=2, ensure_ascii=False)

# Atualiza stats
stats = {}
if os.path.exists(STATS_PATH):
    try:
        with open(STATS_PATH) as f:
            stats = json.load(f)
    except Exception:
        pass

stats["last_bulk_send"] = "2026-09-18T03:42:03Z"
stats["last_bulk_status"] = "all_sent"
stats["last_bulk_total"] = 30
stats["last_bulk_sent"] = 30
stats["last_bulk_failed"] = 0
stats["last_bulk_newsletters"] = 4
stats["last_bulk_generic_leads"] = 26
stats["backend_used"] = "gog_gmail"
stats["resend_api_blocked"] = True
stats["resend_block_error"] = "Cloudflare Error 1010 — browser signature banned"

with open(STATS_PATH, "w") as f:
    json.dump(stats, f, indent=2, ensure_ascii=False)

print(f"Log atualizado: {len(merged_log)} registros")
print(f"Stats atualizados: {STATS_PATH}")
