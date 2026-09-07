#!/usr/bin/env python3
"""Processa leads do zion_leads_free.json e envia cold outreach via gog gmail — versão corrigida."""

import json, subprocess, sys, re
import os
from datetime import datetime, timezone
from pathlib import Path

LEADS_PRIMARY = Path("/Users/miami2/zion.app/automation/data/zion_leads_free.json")
LEADS_PRIMARY_FALLBACK = Path("/Users/miami2/zion.app/lead-crm/outreach_ready_canonical.json")
LEADS_FALLBACK = LEADS_PRIMARY_FALLBACK
LOG_PATH = Path("/Users/miami2/zion.app/outreach-send-log-campaign.jsonl")
ACCOUNT = "kleber@ziontechgroup.com"
BASE = Path("/Users/miami2/zion.app")

# Canonical send adapter toggle
# Enable with ZION_SEND_ADAPTER=1 without changing global policy defaults.
# Trigger source:
#   env   -> requires LIVE_SEND_ALLOW_SEND and DRY_RUN_OUTREACH != 1
#   manual-> always allow when adapter is enabled
ZION_SEND_ADAPTER = os.environ.get("ZION_SEND_ADAPTER", "").strip() == "1"
ZION_SEND_ADAPTER_TRIGGER = os.environ.get("ZION_SEND_ADAPTER_TRIGGER", "env").strip().lower()

def _adapter_allows_send() -> bool:
    if not ZION_SEND_ADAPTER:
        return False
    if ZION_SEND_ADAPTER_TRIGGER == "manual":
        return True
    return "LIVE_SEND_ALLOW_SEND" in os.environ and os.environ.get("DRY_RUN_OUTREACH", "0").strip() != "1"

# Optional send backend override: auto/gog/composio
ZION_SEND_BACKEND = os.environ.get("ZION_SEND_BACKEND", "auto").strip().lower()

def _send_email_via_backend(to_email, subject, body):
    backend = ZION_SEND_BACKEND
    if backend == "composio":
        cmd = [
            "python3",
            str(Path("/Users/miami2/zion.app/automation/scripts/composio_send_adapter.py")),
            "gmail",
            "--to", to_email,
            "--subject", subject,
            "--body", body,
            "--sender", "Zion <noreply@ziontechgroup.com>",
        ]
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if r.returncode == 0:
            return "sent", None
        return "failed", (r.stderr.strip() or r.stdout.strip() or f"exit {r.returncode}")
    # default gog path
    return send_email(to_email, subject, body)
# Domínios que são agregadores/plataformas — não usar como alvo de e-mail
BLOCKED_DOMAINS = [
    "google.com", "github.com", "clutch.co", "sam.gov", "goodfirms.co",
    "linkedin.com", "facebook.com", "twitter.com",
    "verifier.me", "hunter.io", "lobster.com", "crunchbase.com",
    "angellist.com", "wellfound.com", "producthunt.com",
]

GENERIC_EMAILS = {"info@", "contact@", "hello@", "admin@", "support@", "sales@", "ceo@", "founder@", "founders@"}

def is_already_sent(email, log_path):
    """Verifica se o email foi enviado com sucesso (somente status 'sent')."""
    if not log_path.exists():
        return False
    email_lower = email.lower()
    try:
        with open(log_path) as f:
            for line in f:
                if line.strip():
                    try:
                        r = json.loads(line)
                        if r.get("status") == "sent" and r.get("to", "").lower() == email_lower:
                            return True
                    except (json.JSONDecodeError, KeyError):
                        pass
    except Exception:
        pass
    return False

def is_blocked_domain(email):
    domain = email.lower().split("@")[-1] if "@" in email else ""
    return any(bd in domain for bd in BLOCKED_DOMAINS)

def extract_email(lead):
    """Extrai melhor e-mail disponível do lead, evitando domínios de agregadores."""
    candidates = []
    
    # 1) Contato proventivo explícito
    cp = lead.get("contato_proventivo") or ""
    if cp:
        candidates.append(cp)
    
    # 2) Campo email explícito
    for key in ("email", "contato", "contact"):
        val = lead.get(key, "")
        if val:
            candidates.append(val)
    
    # 3) Extrair emails que já estão nos campos de texto
    for cand in candidates:
        emails = re.findall(r'[\w.+-]+@[\w-]+\.[\w.-]+', str(cand))
        for e in emails:
            el = e.lower()
            if "ziontechgroup" in el:
                continue
            yield e, el
    
    # 4) Se site é dominio real (não agregador), tentar prefixos comuns
    site = lead.get("site", "") or ""
    site_match = re.search(r'(?:https?://)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', str(site))
    if site_match:
        domain = site_match.group(1).lower()
        if not is_blocked_domain(f"test@{domain}"):
            for prefix in ["contato", "contato", "info", "sales", "founder", "founders", "diretoria", "ti", "tech"]:
                email_cand = f"{prefix}@{domain}"
                if not is_blocked_domain(email_cand):
                    yield email_cand, email_cand.lower()

def classify_service(lead):
    sr = (lead.get("servico_relevante") or "").lower()
    si = " ".join(lead.get("servicos_interesse") or []).lower()
    motivo = (lead.get("motivo") or "").lower()
    combined = f"{sr} {si} {motivo}"
    
    cyber_keywords = ["cybersecurity", "cyber", "segurança", "security", "compliance", "threat", "soc"]
    if any(k in combined for k in cyber_keywords):
        return "Cybersecurity"
    
    cloud_keywords = ["cloud", "aws", "azure", "gcp", "migração", "migration", "infraestrutura"]
    if any(k in combined for k in cloud_keywords):
        return "Cloud Cost"
    
    ai_keywords = ["ai", "automation", "automação", "chatbot", "ia", "llm", "rag", "agent"]
    if any(k in combined for k in ai_keywords):
        return "AI Automation"
    
    return "AI Automation"

def build_email(lead, service):
    empresa = lead.get("empresa", "").strip()
    
    if service == "Cybersecurity":
        assunto = f"Proteção cibernética para {empresa}"
        body = f"""Olá, analisei o perfil da {empresa} e identifiquei uma oportunidade relevante em Cybersecurity.

{empresa} opera com dados e sistemas que merecem proteção de nível enterprise. A Zion Tech Group ajuda organizações como a sua a:
• Implementar monitoramento de ameaças 24/7 e resposta a incidentes
• Cumprir frameworks como ISO 27001, NIST e LGPD
• Proteger dados sensíveis com arquiteturas zero-trust
• Reduzir riscos com auditorias e treinamentos

Se segurança cibernética está na sua radar, posso agendar uma conversa rápida para entender suas prioridades atuais.

Atenciosamente,
 Kleber | Zion Tech Group
 kleber@ziontechgroup.com"""
    elif service == "Cloud Cost":
        assunto = f"Otimização de custos cloud para {empresa}"
        body = f"""Olá, analisei o perfil da {empresa} e identifiquei uma oportunidade relevante em Cloud Cost Optimization.

Muitas empresas estão pagando mais por infraestrutura cloud do que o necessário. A Zion Tech Group ajuda organizações como a {empresa} a:
• Auditam e otimizam instâncias, armazenamento e data transfer
• Implementam FinOps com dashboards e alertas de custo
• Planejam migração de workloads com redução de 20-40% nos custos
• Negociam com provedores e implementam reserved instances

Se gestão de custos cloud é uma dor atual, podemos agendar uma conversa rápida.

Atenciosamente,
 Kleber | Zion Tech Group
 kleber@ziontechgroup.com"""
    else:
        assunto = f"Automação com IA para {empresa}"
        body = f"""Olá, analisei o perfil da {empresa} e identifiquei uma oportunidade relevante em AI Automation.

A {empresa} tem processos que podem ser potencializados com automação inteligente. A Zion Tech Group ajuda organizações como a sua a:
• Criar chatbots e assistentes de IA para atendimento e operações
• Automatizar pipelines de dados e análises com IA generativa
• Implementar RAG e agentes para recuperação e processamento de conhecimento
• Integrar IA em fluxos existentes sem refatoração completa

Se automação com IA é uma prioridade, posso agendar uma conversa rápida para explorar juntos.

Atenciosamente,
 Kleber | Zion Tech Group
 kleber@ziontechgroup.com"""
    
    words = body.split()
    if len(words) > 150:
        body = " ".join(words[:150]) + "..."
    
    return assunto, body

def send_email(to_email, subject, body):
    cmd = [
        "gog", "gmail", "send",
        "--to", to_email,
        "--subject", subject,
        "--body", body,
        "--account", ACCOUNT,
        "--no-input",
        "--json"
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            return "sent", None
        else:
            err = result.stderr.strip() or result.stdout.strip() or f"exit code {result.returncode}"
            return "failed", err
    except subprocess.TimeoutExpired:
        return "failed", "timeout"
    except Exception as e:
        return "failed", str(e)

def normalize_canonical(item):
    return {
        "empresa": item.get("domain") or item.get("email") or "Lead",
        "prioridade": "alta",
        "contato_proventivo": item.get("email") or "",
        "site": f"https://{item.get('domain')}" if item.get("domain") else "",
        "servico_relevante": "AI Automation",
        "servicos_interesse": [],
        "motivo": "outreach-ready canonical queue",
    }

def load_leads(path: Path):
    with open(path) as f:
        data = json.load(f)
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        if "ready" in data and isinstance(data["ready"], list):
            return [normalize_canonical(item) for item in data["ready"] if item.get("email")]
        return data.get("leads", [])
    return []

def choose_primary_source(primary: Path, fallback: Path, primary_requires_min: int = 3):
    primary_exists = primary.exists()
    fallback_exists = fallback.exists()
    if not primary_exists and not fallback_exists:
        return None, None
    if primary_exists and not fallback_exists:
        return primary, load_leads(primary)
    if fallback_exists and not primary_exists:
        return fallback, load_leads(fallback)
    primary_leads = load_leads(primary)
    fallback_leads = load_leads(fallback)
    usable_primary = [l for l in primary_leads if isinstance(l, dict) and any(l.get(k) for k in ("contato_proventivo", "email", "site"))]
    usable_fallback = [l for l in fallback_leads if isinstance(l, dict) and any(l.get(k) for k in ("contato_proventivo", "email", "site"))]
    if len(usable_primary) >= primary_requires_min and len(usable_primary) >= len(usable_fallback):
        return primary, primary_leads
    return fallback, fallback_leads

def main():
    chosen_source, leads = choose_primary_source(LEADS_PRIMARY, LEADS_FALLBACK)
    if leads is None:
        print("Nenhuma fonte de leads encontrada.")
        return
    print(f"Total leads no arquivo: {len(leads)}")
    print(f"Fonte utilizada: {chosen_source}")
    
    results = {"total": len(leads), "enviados": 0, "falhados": 0, "pulados": 0, "detalhes": []}
    
    for i, lead in enumerate(leads):
        empresa = lead.get("empresa", f"Lead #{i+1}")
        priority = lead.get("prioridade", "media")
        
        emails = list(extract_email(lead))
        # Filtra bloqueados e genéricos ruins
        valid_emails = [(e, el) for e, el in emails if not is_blocked_domain(el)]
        
        non_generic = [(e, el) for e, el in valid_emails if not any(g in el for g in GENERIC_EMAILS)]
        
        if non_generic:
            chosen = non_generic[0]
            chosen_is_generic = False
        elif valid_emails:
            chosen = valid_emails[0]
            chosen_is_generic = True
        else:
            chosen = None
        
        if not chosen:
            results["pulados"] += 1
            results["detalhes"].append({"empresa": empresa, "status": "pulado", "motivo": "sem email disponível"})
            print(f"[{i+1}/{len(leads)}] ⏭ {empresa} — pulado (sem email)")
            continue
        
        email_raw, email_clean = chosen
        
        if is_already_sent(email_clean, LOG_PATH):
            results["pulados"] += 1
            results["detalhes"].append({"empresa": empresa, "status": "pulado", "motivo": f"email já enviado ({email_clean})"})
            print(f"[{i+1}/{len(leads)}] ⏭ {empresa} — pulado (duplicado: {email_clean})")
            continue
        
        if chosen_is_generic and priority != "alta":
            results["pulados"] += 1
            results["detalhes"].append({"empresa": empresa, "status": "pulado", "motivo": f"email genérico com prioridade {priority}"})
            print(f"[{i+1}/{len(leads)}] ⏭ {empresa} — pulado (genérico + prioridade {priority})")
            continue
        
        service = classify_service(lead)
        subject, body = build_email(lead, service)

        if not _adapter_allows_send():
            status = "send_disabled"
            error = "send path disabled: enable ZION_SEND_ADAPTER=1 with ZION_SEND_ADAPTER_TRIGGER=env/manual"
            print(f"[{i+1}/{len(leads)}] 🚫 {empresa} → {email_clean} ({service}) : send_disabled")
            results["falhados"] += 1
            results["detalhes"].append({
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "to": email_clean,
                "empresa": empresa,
                "subject": subject,
                "service": service,
                "status": status,
                "error": error,
            })
            with open(LOG_PATH, "a") as f:
                f.write(json.dumps(results["detalhes"][-1], ensure_ascii=False) + "\n")
            print(f"      ❌ Falhou: {error}")
            continue
        else:
            print(f"[{i+1}/{len(leads)}] 📤 {empresa} → {email_clean} ({service})")
            print(f"      Subject: {subject}")
            status, error = send_email(email_clean, subject, body)

        log_entry = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "to": email_clean,
            "empresa": empresa,
            "subject": subject,
            "service": service,
            "status": status,
            "error": error
        }
        LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
        with open(LOG_PATH, "a") as f:
            f.write(json.dumps(log_entry, ensure_ascii=False) + "\n")
        
        if status == "sent":
            results["enviados"] += 1
            # Marca como enviado no log (já feito via LOG_PATH.write_text acima)
            pass
            print(f"      ✅ Enviado")
        else:
            results["falhados"] += 1
            print(f"      ❌ Falhou: {error}")
        
        results["detalhes"].append(log_entry)
    
    print("\n" + "="*60)
    print("RESUMO DO COLD OUTREACH")
    print("="*60)
    print(f"Total de leads processados : {results['total']}")
    print(f"Enviados com sucesso        : {results['enviados']}")
    print(f"Falhados                   : {results['falhados']}")
    print(f"Pulados (sem email/contato): {results['pulados']}")
    print(f"\nLog salvo em: {LOG_PATH}")
    
    if results["falhados"] > 0:
        print("\nDetalhes dos falhados:")
        for d in results["detalhes"]:
            if d["status"] == "failed":
                print(f"  • {d['empresa']} → {d['to']}: {d.get('error', 'erro desconhecido')}")
    
    if results["pulados"] > 0:
        print("\nDetalhes dos pulados:")
        for d in results["detalhes"]:
            if d["status"] == "pulado":
                print(f"  • {d['empresa']}: {d.get('motivo', '')}")
    
    return results

if __name__ == "__main__":
    main()
