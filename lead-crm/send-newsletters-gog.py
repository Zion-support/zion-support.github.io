#!/usr/bin/env python3
"""Envia 4 newsletters via gog gmail (backend que funciona)."""

import json, os, subprocess
from datetime import datetime, timezone

ACCOUNT = "kleber@ziontechgroup.com"

NEWSLETTERS = [
    {
        "to": "contato@infopremium.com.br",
        "subject": "IA, automação e FinOps: o braço tecnológico que sua empresa precisa em 2026",
        "html": """<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333;max-width:680px;margin:0 auto;padding:20px}h1{color:#1a56db;font-size:22px}.btn{display:inline-block;background:#1a56db;color:#fff;padding:10px 22px;text-decoration:none;border-radius:6px;margin-top:12px}.section{background:#f9fafb;border-left:4px solid #1a56db;padding:14px 18px;margin:18px 0}.logo{color:#1a56db;font-weight:700}.footer{border-top:1px solid #e5e7eb;margin-top:24px;padding-top:16px;font-size:12px;color:#6b7280}</style></head><body>
<div style="margin-bottom:20px">
  <span class="logo">Zion Tech Group</span>
  <p style="color:#6b7280;font-size:13px;margin-top:4px">IA · Automação · FinOps · Segurança</p>
</div>
<h1>IA, automação e FinOps: o braço tecnológico que sua empresa precisa em 2026</h1>
<p>Olá! Somos a <strong>Zion Tech Group</strong> e ajudamos empresas a se tornarem mais inteligentes, seguras e eficientes com tecnologia de ponta.</p>
<div class="section">
  <strong>Em 2026, três forças estão redefinindo o jogo corporativo:</strong>
  <ul>
    <li><strong>Inteligência Artificial</strong> — já não é opcional. Quem não usa IA para otimizar processos, prever demanda e automatizar tarefas repetitivas estará para trás.</li>
    <li><strong>Automação inteligente</strong> — conecta sistemas, elimina gargalos e libera sua equipe para o que realmente importa.</li>
    <li><strong>FinOps de dados</strong> — transforma informações brutas em decisões financeiras precisas, reduzindo desperdícios e revelando oportunidades.</li>
  </ul>
</div>
<p>Essas são exatamente as competências que a <strong>Zion Tech Group</strong> traz para empresas como a <strong>infopremium.com.br</strong>. Nossa abordagem combina consultoria estratégica com implementação prática — não entregamos slides, entregamos resultados.</p>
<div class="section">
  <strong>O que podemos fazer por você:</strong>
  <ul>
    <li>Auditoria de IA e automação: identificamos onde sua empresa pode reduzir custos e aumentar velocidade</li>
    <li>Implementação de soluções de FinOps: controle financeiro baseado em dados reais</li>
    <li>Segurança e zero-trust: proteção moderna para ambientes distribuídos</li>
    <li>Modernização de plataformas legadas</li>
  </ul>
</div>
<p>Agende uma conversa inicial sem compromisso:</p>
<p style="text-align:center;margin:24px 0">
  <a href="https://calendly.com/kleber-ziontechgroup" class="btn">Agendar 15 minutos →</a>
</p>
<p>Ou explore nossas ferramentas e cases gratuitamente em <a href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
<div class="footer">
  <p>Zion Tech Group · Kleber Garcia Alcatrão · São Paulo, Brasil</p>
  <p>Responda este e-mail ou visite ziontechgroup.com para saber mais.</p>
  <p>© 2026 Zion Tech Group. Todos os direitos reservados.</p>
</div>
</body></html>""",
    },
    {
        "to": "sac@casatech.com.br",
        "subject": "Segurança de dados e LGPD: como a CasaTech se protege em 2026?",
        "html": """<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333;max-width:680px;margin:0 auto;padding:20px}h1{color:#b91c1c;font-size:22px}.btn{display:inline-block;background:#b91c1c;color:#fff;padding:10px 22px;text-decoration:none;border-radius:6px;margin-top:12px}.section{background:#fef2f2;border-left:4px solid #b91c1c;padding:14px 18px;margin:18px 0}.logo{color:#b91c1c;font-weight:700}.footer{border-top:1px solid #e5e7eb;margin-top:24px;padding-top:16px;font-size:12px;color:#6b7280}</style></head><body>
<div style="margin-bottom:20px">
  <span class="logo">Zion Tech Group</span>
  <p style="color:#6b7280;font-size:13px;margin-top:4px">IA · Automação · FinOps · Segurança</p>
</div>
<h1>Segurança de dados e LGPD: como a CasaTech se protege em 2026?</h1>
<p>Olá! Somos a <strong>Zion Tech Group</strong> e trabalhamos com segurança de informação, LGPD e proteção de dados para empresas de todos os portes.</p>
<div class="section">
  <strong>O cenário é desafiador — e as consequências são reais:</strong>
  <ul>
    <li>Multas da ANPD podem chegar a <strong>R$ 50 milhões por incidente</strong></li>
    <li>Fracasso de auditorias de compliance custa reputação e parceiros</li>
    <li>Ciberataques double extortion (roubo + ransomware) crescem 35% ao ano no Brasil</li>
    <li>Clientes e fornecedores exigem comprovação de segurança antes de fechar contratos</li>
  </ul>
</div>
<p>A <strong>CasaTech</strong> não está imune a esses riscos. Mas também não precisa desesperar — a segurança apropriada ao seu tamanho e setor existe e é acessível.</p>
<div class="section">
  <strong>O que a Zion entrega em segurança e LGPD:</strong>
  <ul>
    <li>Mapeamento completo de dados pessoais (o primeiro passo exigido pela LGPD)</li>
    <li>Políticas de segurança sob medida para sua operação</li>
    <li>Implementação de controle de acesso e zero-trust</li>
    <li>Treinamento da equipe — o eslabon mais falho em 80% dos incidentes</li>
    <li>Plano de resposta a incidentes e notificação à ANPD</li>
  </ul>
</div>
<p>Uma conversa de 15 minutos pode identificar os pontos cegos na segurança da CasaTech:</p>
<p style="text-align:center;margin:24px 0">
  <a href="https://calendly.com/kleber-ziontechgroup" class="btn">Agendar avaliação →</a>
</p>
<p>Saiba mais em <a href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
<div class="footer">
  <p>Zion Tech Group · Kleber Garcia Alcatrão · São Paulo, Brasil</p>
  <p>Responda este e-mail ou visite ziontechgroup.com.</p>
  <p>© 2026 Zion Tech Group. Todos os direitos reservados.</p>
</div>
</body></html>""",
    },
    {
        "to": "sac@fundacaovici.com.br",
        "subject": "Tecnologia a serviço da inclusão: como a Vici pode ampliar seu impacto com IA",
        "html": """<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333;max-width:680px;margin:0 auto;padding:20px}h1{color:#047857;font-size:22px}.btn{display:inline-block;background:#047857;color:#fff;padding:10px 22px;text-decoration:none;border-radius:6px;margin-top:12px}.section{background:#ecfdf5;border-left:4px solid #047857;padding:14px 18px;margin:18px 0}.logo{color:#047857;font-weight:700}.footer{border-top:1px solid #e5e7eb;margin-top:24px;padding-top:16px;font-size:12px;color:#6b7280}</style></head><body>
<div style="margin-bottom:20px">
  <span class="logo">Zion Tech Group</span>
  <p style="color:#6b7280;font-size:13px;margin-top:4px">IA · Automação · FinOps · Segurança</p>
</div>
<h1>Tecnologia a serviço da inclusão: como a Vici pode ampliar seu impacto com IA</h1>
<p>Olá! Somos a <strong>Zion Tech Group</strong> e acreditamos que tecnologia de ponta deve estar ao alcance de organizações que geram impacto social real.</p>
<div class="section">
  <strong>A Fundação Vici já faz a diferença. A tecnologia pode amplificar esse trabalho:</strong>
  <ul>
    <li><strong>Automação de processos administrativos</strong> — libere tempo da equipe para o que importa: as pessoas</li>
    <li><strong>IA para análise de impacto</strong> — entenda quais programas geram mais resultado com menos recurso</li>
    <li><strong>Plataformas de conexão</strong> — facilite o match entre voluntários, beneficiários e oportunidades</li>
    <li><strong>Comunicação inteligente</strong> — conteúdo mais eficaz para doadores, parceiros e comunidade</li>
    <li><strong>FinOps para ONGs</strong> — controle financeiro transparente que aumenta a credibilidade e atrai mais recursos</li>
  </ul>
</div>
<p>Nossa abordagem com organizações do terceiro setor é diferente: não buscamos vender o mais caro, buscamos entregar o que transforma. Muitas vezes, nossas soluções de IA e automação são acessíveis o suficiente para serem implementadas dentro do orçamento de uma fundação.</p>
<div class="section">
  <strong>Próximos passos:</strong>
  <p>Agende uma conversa informal. Nossa equipe avaliará, de forma honesta, onde a tecnologia pode (e não pode) ajudar a Vici a atingir mais pessoas com menos esforço.</p>
</div>
<p style="text-align:center;margin:24px 0">
  <a href="https://calendly.com/kleber-ziontechgroup" class="btn">Agendar conversa →</a>
</p>
<p>Conheça mais sobre a Zion em <a href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
<div class="footer">
  <p>Zion Tech Group · Kleber Garcia Alcatrão · São Paulo, Brasil</p>
  <p>Responda este e-mail para qualquer dúvida.</p>
  <p>© 2026 Zion Tech Group. Todos os direitos reservados.</p>
</div>
</body></html>""",
    },
    {
        "to": "contato@jaul.com.br",
        "subject": "Sobrevivendo à tempestade: Como a Jaul protege seu negócio com TI resiliente em tempos de crise",
        "html": """<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#333;max-width:680px;margin:0 auto;padding:20px}h1{color:#7c3aed;font-size:22px}.btn{display:inline-block;background:#7c3aed;color:#fff;padding:10px 22px;text-decoration:none;border-radius:6px;margin-top:12px}.section{background:#f5f3ff;border-left:4px solid #7c3aed;padding:14px 18px;margin:18px 0}.logo{color:#7c3aed;font-weight:700}.footer{border-top:1px solid #e5e7eb;margin-top:24px;padding-top:16px;font-size:12px;color:#6b7280}</style></head><body>
<div style="margin-bottom:20px">
  <span class="logo">Zion Tech Group</span>
  <p style="color:#6b7280;font-size:13px;margin-top:4px">IA · Automação · FinOps · Segurança</p>
</div>
<h1>Sobrevivendo à tempestade: Como a Jaul protege seu negócio com TI resiliente em tempos de crise</h1>
<p>Olá! Somos a <strong>Zion Tech Group</strong> e codificamos uma convicção: uma infraestrutura de TI resiliente é a diferença entre uma empresa que resiste à crise e uma que se adapta a ela.</p>
<div class="section">
  <strong>Em tempos de incerteza econômica, competitividade e ameaças cibernéticas, sua infraestrutura de TI precisa de três qualidades:</strong>
  <ul>
    <li><strong>Resiliência</strong> — recuperação rápida de falhas, redundância inteligente e continuidade de operações</li>
    <li><strong>Eficiência</strong> — reduzir custos com cloud, otimizar licenças e eliminar gastos com tecnologia que não agrega valor</li>
    <li><strong>Segurança</strong> — proteção de dados, prevenção de incidentes e conformidade que garante paz de mente</li>
  </ul>
</div>
<p>A <strong>Zion Tech Group</strong> ajuda empresas como a <strong>Jaul</strong> a construir exatamente esse tipo de infraestrutura: robusta quando precisa ser, ágil quando a situação exige, e economicamente inteligente sempre.</p>
<div class="section">
  <strong>Nossas áreas de atuação para empresas em cenário desafiador:</strong>
  <ul>
    <li>Infraestrutura cloud com otimização de custos (FinOps)</li>
    <li>Proteção cibernética e compliance LGPD</li>
    <li>Automação de processos para reduzir custos operacionais</li>
    <li>Modernização de sistemas legados que drenam recursos</li>
    <li>Consultoria estratégica de TI alinhada ao modelo de negócio</li>
  </ul>
</div>
<p>Uma avaliação de TI de 15 minutos pode revelar oportunidades de redução de custos e riscos que sua equipe não está vendo:</p>
<p style="text-align:center;margin:24px 0">
  <a href="https://calendly.com/kleber-ziontechgroup" class="btn">Agendar avaliação →</a>
</p>
<p>Saiba mais em <a href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
<div class="footer">
  <p>Zion Tech Group · Kleber Garcia Alcatrão · São Paulo, Brasil</p>
  <p>Responda este e-mail para mais informações.</p>
  <p>© 2026 Zion Tech Group. Todos os direitos reservados.</p>
</div>
</body></html>""",
    },
]

LOG_PATH = "/Users/miami2/zion.app/lead-crm/outreach_send_log.json"
results = []

for i, n in enumerate(NEWSLETTERS, 1):
    to_email = n["to"]
    subject = n["subject"]
    # gog expects plain text body, not HTML
    body_text = n["html"]
    # extrair texto simples do HTML para o gog
    import re
    body_plain = re.sub(r'<[^>]+>', ' ', body_text)
    body_plain = re.sub(r'\s+', ' ', body_plain).strip()
    
    print(f"[{i}/4] Enviando para {to_email}... ", end="", flush=True)
    
    cmd = [
        "gog", "gmail", "send",
        "--account", ACCOUNT,
        "--to", to_email,
        "--subject", subject,
        "--body", body_plain,
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
            results.append({
                "to": to_email,
                "subject": subject,
                "status": "sent",
                "message_id": msg_id,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            err = r.stderr.strip() or r.stdout.strip() or f"exit {r.returncode}"
            print(f"✗ falhou: {err[:100]}")
            results.append({
                "to": to_email,
                "subject": subject,
                "status": "failed",
                "error": err[:300],
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
    except Exception as e:
        print(f"✗ erro: {e}")
        results.append({
            "to": to_email,
            "subject": subject,
            "status": "failed",
            "error": str(e),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        })

# Atualiza log
existing = {}
if os.path.exists(LOG_PATH):
    try:
        with open(LOG_PATH) as f:
            existing = json.load(f)
    except Exception:
        pass

for r in results:
    existing[r["to"]] = {
        "last_status": r["status"],
        "last_error": r.get("error", ""),
        "last_message_id": r.get("message_id", ""),
        "last_subject": r["subject"],
        "last_attempt": r["timestamp"],
    }

with open(LOG_PATH, "w") as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)

sent = sum(1 for r in results if r["status"] == "sent")
failed = len(results) - sent
print(f"\n=== RESUMO ===")
print(f"Total: {len(results)}")
print(f"Enviados: {sent}")
print(f"Falhos: {failed}")
print(f"Log atualizado: {LOG_PATH}")
print(f"Endereços: {', '.join(r['to'] for r in results)}")

# Também atualiza o newsletter stats
stats_path = "/Users/miami2/zion.app/lead-crm/newsletter_stats.json"
existing_stats = {}
if os.path.exists(stats_path):
    try:
        with open(stats_path) as f:
            existing_stats = json.load(f)
    except Exception:
        pass
existing_stats["last_bulk_send"] = datetime.now(timezone.utc).isoformat()
existing_stats["last_bulk_status"] = "sent" if failed == 0 else "partial_failure"
existing_stats["last_bulk_total"] = len(results)
existing_stats["last_bulk_sent"] = sent
existing_stats["last_bulk_failed"] = failed
with open(stats_path, "w") as f:
    json.dump(existing_stats, f, indent=2, ensure_ascii=False)
