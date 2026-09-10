#!/usr/bin/env python3
"""Hot-followup CEO reply draft builder. Reads latest thread, writes draft file."""

import json
import sys
from pathlib import Path

SPECIAL_ACCOUNT = "kleber@ziontechgroup.com"
SENT_PATH = Path("/Users/miami2/zion.app/lead-crm/hot-followup-sent.json")
DRAFT_PATH = Path("/Users/miami2/zion.app/lead-crm/hot-followup-ceo-reply-draft.txt")
CONDENSED_THRESHOLD_DAYS = 2
CALENDLY = "https://calendly.com/kleber-ziontechgroup"
SITE = "https://ziontechgroup.com"

PT_BR_FOLLOWUP = """\
Assunto: Re: {subject}

Olá {name},

Obrigado pelo seu interesse e pela conversa recente — foi um prazer trocar ideias sobre como a Zion Tech Group pode apoiar o {company}.

Refletindo sobre o que conversamos, vejo algumas oportunidades concretas para avançarmos juntos:

1. {next_step_1}
2. {next_step_2}

Se fizer sentido, podemos combinar uma conversa rápida (15–20 minutos) para alinharmos detalhes e ver como formalizar a próxima etapa. Agende diretamente aqui:

👉 {calendly}

Também convido você a explorar nossos serviços e ferramentas gratuitas no site:

👉 {site}

Estou à disposição.

Um abraço,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
"""

EN_FOLLOWUP = """\
Subject: Re: {subject}

Hi {name},

Thank you for the recent conversation — I really enjoyed discussing how Zion Tech Group can support {company}.

Reflecting on what we talked about, here are a couple of concrete next steps that could move things forward:

1. {next_step_1}
2. {next_step_2}

If it makes sense, let's set up a quick 15–20 minute call to align on details and figure out how to make the next step happen. You can book directly here:

👉 {calendly}

You're also welcome to explore our services and free tools on the site:

👉 {site}

I'm happy to help.

Best,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
"""

ES_FOLLOWUP = """\
Asunto: Re: {subject}

Hola {name},

Gracias por la conversación reciente — me dio mucho gusto hablar sobre cómo Zion Tech Group puede apoyar a {company}.

Reflexionando sobre lo que hablamos, veo algunas oportunidades concretas para avanzar juntos:

1. {next_step_1}
2. {next_step_2}

Si tiene sentido, podemos coordinar una conversación rápida (15–20 minutos) para alinear detalles y ver cómo formalizar el siguiente paso. Puedes agendar directamente aquí:

👉 {calendly}

También te invito a explorar nuestros servicios y herramientas gratuitas en el sitio:

👉 {site}

Quedo a tu disposición.

Saludos,
Kleber Garcia Alcatrão
CEO, Zion Tech Group
"""


def detect_language(subject: str) -> str:
    import re
    if not subject:
        return "en"
    text = subject.lower()
    pt_signals = ["re:", "preciso", "ajuda", "obrigado", " Olá", "cliente", "parceiro", "zap"]
    es_signals = ["asunto:", "hola", "gracias", "parceiro", "cliente"]
    pt_score = sum(1 for s in pt_signals if s in text)
    es_score = sum(1 for s in es_signals if s in text)
    if pt_score > es_score:
        return "pt"
    if es_score > 0:
        return "es"
    return "en"


def extract_name_from_subject(subject: str) -> str:
    import re
    # Try to extract a name/token after common prefixes
    m = re.search(r"(?:re|asunto|subject)[:\s]+(.+)", subject, re.I)
    if m:
        raw = m.group(1).strip()
        # Take first chunk before comma/parenthesis
        chunk = re.split(r"[,(\[].*", raw)[0].strip()
        return chunk if chunk else "there"
    return "there"


def build_followup_body(subject: str, lang: str) -> str:
    name = extract_name_from_subject(subject)
    return {
        "pt": PT_BR_FOLLOWUP,
        "en": EN_FOLLOWUP,
        "es": ES_FOLLOWUP,
    }[lang].format(
        subject=subject,
        name=name,
        company=name.title() if len(name) < 20 else "your company",
        next_step_1="discuss which AI automation service fits best — cloud, security, data, blockchain, or IoT",
        next_step_2="explore a custom AI pilot or free tools available on our site",
        calendly=CALENDLY,
        site=SITE,
    )


def main():
    # 1. Load existing sent record (deduplication guard)
    sent_record = {}
    if SENT_PATH.exists():
        try:
            sent_record = json.loads(SENT_PATH.read_text())
        except (json.JSONDecodeError, OSError):
            sent_record = {}

    # 2. Locate the latest hot thread label or fallback search
    import subprocess
    import shlex
    import os

    def gog_search(query: str, max_count: int = 25):
        cmd = ["gog", "gmail", "search", query, "--max", str(max_count), "--plain", "--no-input"]
        try:
            env = os.environ.copy()
            env.setdefault("PATH", "/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin")
            res = subprocess.run(cmd, capture_output=True, text=True, timeout=45, env=env)
            if res.returncode != 0:
                return []
            return res.stdout.splitlines()
        except (FileNotFoundError, subprocess.TimeoutExpired) as e:
            print(f"[WARN] gog search failed: {e}", file=sys.stderr)
            return []

    # Prefer dedicated hot-followup label when present
    label_lines = gog_search("label:!!!/hot-follow-up --max 25 --plain")
    # Fallback / plain search with marker
    plain_lines = gog_search('subject:"hot follow up" OR subject:"follow up" OR from:clients OR subject:"quick question"', 25)

    # Combine, dedupe by id/token heuristic
    seen = set()
    threads = []
    for line in label_lines + plain_lines:
        stripped = line.strip()
        if not stripped or stripped in seen:
            continue
        # crude token-based dedup: first 32 chars as proxy id
        pid = stripped[:32]
        if pid in seen:
            continue
        seen.add(pid)
        threads.append(stripped)

    if not threads:
        print("[INFO] No active hot-followup threads found; skipping draft.", file=sys.stderr)
        return 0

    # 3. Pick latest by simplistic last-element heuristic (label output tends to be newest-first)
    latest = threads[0] if threads else ""
    subject = "Following up — Zion Tech Group"
    for candidate in threads:
        if candidate and len(candidate) > 4:
            subject = candidate
            break

    # 4. Build draft
    lang = detect_language(subject)
    body = build_followup_body(subject, lang)

    # 5. Write draft file
    header = f"TO: {SPECIAL_ACCOUNT}\n" f"SUBJECT: {subject}\n" f"LANG: {lang}\n" f"DRAFT_TIMESTAMP: {__import__('datetime').datetime.utcnow().isoformat()}Z\n\n"
    DRAFT_PATH.write_text(header + body)

    # 6. Emit structured JSON summary to stdout for downstream parsing
    summary = {
        "draft_path": str(DRAFT_PATH),
        "subject": subject,
        "language": lang,
        "recipient": SPECIAL_ACCOUNT,
        "threads_considered": len(threads),
        "action": "draft_ready_not_sent",
    }
    print(json.dumps(summary, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
