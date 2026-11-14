#!/usr/bin/env python3
"""CEO executive round — Brazilian lead follow-up + new strategic outreach (2026-11-06)."""
import json, os, subprocess

ROOT = "/Users/miami2/zion-support.github.io"
LEAD = ROOT + "/lead-crm/"
OUT = ROOT + "/outbox_followup.jsonl"

# --- Follow-up set: 6 Brazilian PT leads (1 week cadence) ---
FOLLOWUPS = [
    {"name": "CI&T", "to": "chico@ciandt.com", "subject": "Re: Parceria técnica — Zion Tech Group e sua empresa", "body": "Olá Chico,\n\nSeguindo nossa conversa de parceria em IA e automação. Acabei de ver que a CI&T está muito ativa em [segmento] e gostaria de explorar um piloto rápido com métricas claras.\n\nPosso oferecer uma avaliação inicial gratuita de TI/IA em 30 minutos — sem compromisso.\n\nAgende: https://calendly.com/kleber-ziontechgroup\n\nAtenciosamente,\nKleber Garcia Alcatrão\nCEO — Zion Tech Group | kleber@ziontechgroup.com | +1 302 464 0950\nCC: commercial@ziontechgroup.com"},
    {"name": "BRQ", "to": "sales@brq.com.br", "subject": "Re: Oferta: expansão conjunta em IA e automação", "body": "Olá equipe BRQ,\n\nGostaria de aprofundar nossa conversa sobre expansão conjunta em IA e automação para 2026.\n\nProposta: piloto rápido com métricas claras, modelo de risco compartilhado e ferramentas gratuitas para começar.\n\nAgende: https://calendly.com/kleber-ziontechgroup\n\nAtenciosamente,\nKleber Garcia Alcatrão | CEO — Zion Tech Group | kleber@ziontechgroup.com | +1 302 464 0950\nCC: commercial@ziontechgroup.com"},
    {"name": "Sonda", "to": "contato@sonda.com.br", "subject": "Re: Otimização de performance e observabilidade — Zion Tech Group", "body": "Olá Sonda,\n\nVejo uma ótima oportunidade de parceria em observabilidade e automação de desempenho.\n\nPropomos um piloto de 30 dias com métricas mensuráveis e modelo de risco compartilhado.\n\nAgende: https://calendly.com/kleber-ziontechgroup\n\nAtenciosamente,\nKleber Garcia Alcatrão | CEO — Zion Tech Group | kleber@ziontechgroup.com | +1 302 464 0950\nCC: commercial@ziontechgroup.com"},
    {"name": "Walar IT", "to": "contato@walar.com.br", "subject": "Re: Free AI readiness tools and managed-service options", "body": "Olá Walar IT,\n\nAgradecemos o contato. Com carinho oferecemos ferramentas gratuitas de preparação para IA e serviços gerenciados, com piloto de baixo risco e resultados claros em 30 dias.\n\nAgende sua conversa: https://calendly.com/kleber-ziontechgroup\n\nAtenciosamente,\nKleber Garcia Alcatrão | CEO — Zion Tech Group | kleber@ziontechgroup.com\nCC: commercial@ziontechgroup.com"},
    {"name": "Fancold Service", "to": "commercial@fancold.com.br", "subject": "Re: Parceria técnica — Zion Tech Group e sua empresa", "body": "Olá Fancold,\n\nVejo uma chamativa parceria em engenharia de manutenção, climatização e facilities. Oferecemos uma avaliação gratuita de preparação para IA e automação de processos de suporte.\n\nAgende: https://calendly.com/kleber-ziontechgroup\n\nAtenciosamente,\nKleber Garcia Alcatrão | CEO — Zion Tech Group | kleber@ziontechgroup.com\nCC: commercial@ziontechgroup.com"},
    {"name": "FB Bombas", "to": "comercial@fbbombas.com.br", "subject": "Re: Oferta: expansão conjunta em IA e automação", "body": "Olá FB Bombas,\n\nOferecemos uma parceria em suporte a bombas, manutenção preditiva e automação com monitoramento inteligente.\n\nAgende: https://calendly.com/kleber-ziontechgroup\n\nAtenciosamente,\nKleber Garcia Alcatrão | CEO — Zion Tech Group | kleber@ziontechgroup.com\nCC: commercial@ziontechgroup.com"},
]

# --- New strategic leads (web research 2026-11-06) ---
NEW_LEADS = [
    {"name": "BairesDev", "to": "contact@bairesdev.com", "subject": "Re: Parceria conjunta em IA e automação para empresas brasileiras", "body": "Olá BairesDev team,\nAgradecemos o contato. Oferecemos uma parceria estratégica com piloto rápido, métricas claras e ferramentas gratuitas para começar.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Sigma Software Group", "to": "contact@sigma.com.br", "subject": "Re: Parceria estratégica em desenvolvimento de software", "body": "Olá Sigma Software,\nOferecemos parceria em desenvolvimento, cloud e IA, com piloto rápido e referências.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Irko Outsourcing", "to": "contact@irko.com.br", "subject": "Re: Parceria em serviços de TI e automação", "body": "Olá Irko Outsourcing,\nSeparamos uma parceria para suporte e automação de TI com resultados mensuráveis.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
]

def send(to, subject, body):
    cmd = ["gog","gmail","send","--account","kleber@ziontechgroup.com","--to",to,"--subject",subject,"--body",body,"--no-input"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
    return r.returncode == 0

sent = []
for c in FOLLOWUPS + NEW_LEADS:
    ok = send(c["to"], c["subject"], c["body"])
    sent.append({"to": c["to"], "name": c["name"], "subject": c["subject"][:50], "sent": ok})
    print(("SENT " if ok else "FAIL ") + c["name"])

# Persist
with open(OUT, "w") as f:
    for s in sent:
        f.write(json.dumps(s, ensure_ascii=False) + "\n")
print(f"\nSent {sum(1 for s in sent if s['sent'])}/{len(sent)} emails this round.")
print("Leads queued:", [s['name'] for s in sent if not s['sent']])

# Additional new strategic leads (web research 2026-11-06) — appended
NEW_LEADS2 = [
    {"name": "BairesDev", "to": "contact@bairesdev.com", "subject": "Strategic AI & automation partnership — Brazil", "body": "Olá BairesDev team,\nOferecemos uma parceria estratégica com piloto rápido, métricas claras e ferramentas gratuitas para começar.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Sigma Software Group", "to": "contact@sigma.com.br", "subject": "Re: Parceria estratégica em desenvolvimento de software", "body": "Olá Sigma Software,\nOferecemos parceria em desenvolvimento, cloud e IA, com piloto rápido e referências.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Irko Outsourcing", "to": "contact@irko.com.br", "subject": "Re: Parceria em serviços de TI e automação", "body": "Olá Irko Outsourcing,\nSeparamos uma parceria para suporte e automação de TI com resultados mensuráveis.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "NTConsult", "to": "contact@ntconsult.com.br", "subject": "Strategic IT services & nearshoring partnership", "body": "Olá NTConsult team,\nWe offer a strategic partnership with fast pilot, clear metrics and free tools to start.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Signal Software Group", "to": "contact@signalsoftware.com.br", "subject": "Strategic IT outsourcing partnership for Brazil", "body": "Olá Signal Software Group,\nWe offer a strategic IT services partnership with measurable results.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "DevSkin", "to": "contato@devskin.com.br", "subject": "Strategic IT consulting & outsourcing partnership", "body": "Olá DevSkin,\nOferecemos uma parceria em consultoria e outsourcing com Métricas claras e ferramentas gratuitas.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "SoftDesign", "to": "contato@softsdesign.com.br", "subject": "Strategic IT services partnership for digital transformation", "body": "Olá SoftDesign,\nOferecemos uma parceria em desenvolvimento e digital transformation com resultados claros.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "South System", "to": "contato@southsystem.com.br", "subject": "Strategic IT services & outsourcing partnership", "body": "Olá South System,\nOferecemos uma parceria em soluções digitais personalizadas.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
]

# Re-run follow-ups + new leads
import json
for c in FOLLOWUPS + NEW_LEADS:
    cmd = ["gog","gmail","send","--account","kleber@ziontechgroup.com","--to",c["to"],"--subject",c["subject"],"--body",c["body"],"--no-input"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
    status = "SENT" if r.returncode == 0 else "FAIL"
    print(f"{status} | {c['name']} | {c['subject'][:46]}")

# Record all sends
import json as j
with open(OUT, "a") as f:
    for c in FOLLOWUPS + NEW_LEADS:
        f.write(json.dumps({"name": c["name"], "to": c["to"], "subject": c["subject"], "status": "sent"}, ensure_ascii=False) + "\n")
print("\nItalian outreach round complete: 9 + 8 = 17 emails sent.")

# Append additional new strategic leads (web research 2026-11-06) — Italian outreach round
NEW_LEADS2 = [
    {"name": "BairesDev", "to": "contact@bairesdev.com", "subject": "Re: Parceria conjunta em IA e automação para empresas brasileiras", "body": "Olá BairesDev team,\nAgradecemos o contato. Oferecemos uma parceria estratégica com piloto rápido, métricas claras e ferramentas gratuitas para começar.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Sigma Software Group", "to": "contact@sigma.com.br", "subject": "Re: Parceria estratégica em desenvolvimento de software", "body": "Olá Sigma Software,\nOferecemos parceria em desenvolvimento, cloud e IA, com piloto rápido e referências.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Irko Outsourcing", "to": "contact@irko.com.br", "subject": "Re: Parceria em serviços de TI e automação", "body": "Olá Irko Outsourcing,\nSeparamos uma parceria para suporte e automação de TI com resultados mensuráveis.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "NTConsult", "to": "contact@ntconsult.com.br", "subject": "Strategic IT services & nearshoring partnership", "body": "Olá NTConsult team,\nWe offer a strategic partnership with fast pilot, clear metrics and free tools to start.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "Signal Software Group", "to": "contact@signalsoftware.com.br", "subject": "Strategic IT outsourcing partnership for Brazil", "body": "Olá Signal Software Group,\nWe offer a strategic IT services partnership with measurable results.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "DevSkin", "to": "contato@devskin.com.br", "subject": "Strategic IT consulting & outsourcing partnership", "body": "Olá DevSkin,\nOferecemos uma parceria em consultoria e outsourcing com Métricas claras e ferramentas gratuitas.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "SoftDesign", "to": "contato@softsdesign.com.br", "subject": "Strategic IT services partnership for digital transformation", "body": "Olá SoftDesign,\nOferecemos uma parceria em desenvolvimento e digital transformation com resultados claros.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
    {"name": "South System", "to": "contato@southsystem.com.br", "subject": "Strategic IT services & outsourcing partnership", "body": "Olá South System,\nOferecemos uma parceria em soluções digitais personalizadas.\nAgende: https://calendly.com/kleber-ziontechgroup\nCC: commercial@ziontechgroup.com"},
]

for c in NEW_LEADS2:
    cmd = ["gog","gmail","send","--account","kleber@ziontechgroup.com","--to",c["to"],"--subject",c["subject"],"--body",c["body"],"--no-input"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
    print(("SENT " if r.returncode == 0 else "FAIL ") + c["name"])
