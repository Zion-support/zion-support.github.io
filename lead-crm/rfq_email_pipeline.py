#!/usr/bin/env python3
"""
Zion Tech Group — RFQ Email Pipeline
Generates personalized RFQ emails with Zion logo PDF, tax calculations,
CC commercial@ziontechgroup.com, and internal email to commercial@.

Usage:
    python3 rfq_email_pipeline.py --phase 1  # Execute 24 canonical leads
    python3 rfq_email_pipeline.py --phase 2  # Execute high-value derived leads
    python3 rfq_email_pipeline.py --report   # Generate summary report
"""

import os
import sys
import json
import smtplib
import mimetypes
from datetime import datetime, timezone
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from jinja2 import Template
from pathlib import Path

# ── Paths ─────────────────────────────────────────────────────────────────
REPO = Path("/Users/miami2/zion.app")
CACHE = Path("/Users/miami2/.hermes/profiles/agent-content-publisher/cache")
LOGO = Path("/Users/miami2/Downloads/Logo_Zion.png")
OUTREACH_LOG = REPO / "lead-crm" / "outreach-sent-history.jsonl"
SEND_DISABLED_LOG = REPO / "lead-crm" / "send_disabled_analysis.jsonl"

# ── Constants ─────────────────────────────────────────────────────────────
ZION_EMAIL = "kleber@ziontechgroup.com"
COMMERCIAL_CC = "commercial@ziontechgroup.com"
CARLOS_CC = "carlos@ziontechgroup.com"
ZION_WEBSITE = "https://ziontechgroup.com"
ZION_PLANS = f"{ZION_WEBSITE}/en/plans/"
ZION_DISCOVERY = f"{ZION_WEBSITE}/discovery/"

# ── Tax calculation helpers ───────────────────────────────────────────────
def calculate_local_taxes(price, country="BR"):
    """
    Calculate local taxes (ICMS, ISS, PIS/COFINS) for Brazil.
    Returns dict with tax breakdown and total with taxes.
    """
    taxes = {
        "country": country,
        "icms": 0.0,
        "iss": 0.0,
        "pis_cofins": 0.0,
        "total_taxes": 0.0,
        "total_with_taxes": 0.0,
        "tax_note": "",
    }
    
    if country.upper() == "BR":
        # ICMS: 17% standard for goods/services in Brazil
        taxes["icms"] = round(price * 0.17, 2)
        # ISS: 5% for services
        taxes["iss"] = round(price * 0.05, 2)
        # PIS/COFINS: 5% (combined)
        taxes["pis_cofins"] = round(price * 0.05, 2)
        taxes["total_taxes"] = round(taxes["icms"] + taxes["iss"] + taxes["pis_cofins"], 2)
        taxes["total_with_taxes"] = round(price + taxes["total_taxes"], 2)
        taxes["tax_note"] = "ICMS 17% + ISS 5% + PIS/COFINS 5% — invoices conformeNota Legal BR"
    else:
        taxes["total_with_taxes"] = price
        taxes["tax_note"] = "Prices in USD. Taxes per client country (consult commercial@ for local rates)."
    
    return taxes

def calculate_30_percent_markup(price):
    """Add 30% markup to any price per ZTG directive."""
    return round(price * 1.30, 2)

# ── Logo PDF generator ────────────────────────────────────────────────────
def generate_logo_pdf(output_path, scale=1.5):
    """Generate a simple PDF with the Zion logo (PNG embedded)."""
    try:
        from reportlab.lib.pagesizes import letter
        from reportlab.pdfgen import canvas
        from reportlab.lib.utils import ImageReader
        
        c = canvas.Canvas(str(output_path), pagesize=letter)
        c.setTitle("Zion Tech Group — RFQ")
        
        # Logo dimensions
        if LOGO.exists():
            img = ImageReader(str(LOGO))
            width, height = img.getSize()
            c.drawImage(img, 100, 700, width * scale, height * scale, mask='auto')
        
        c.setFont("Helvetica", 14)
        c.drawString(100, 670, "ZION TECH GROUP")
        c.setFont("Helvetica", 10)
        c.drawString(100, 655, "AI Automation · IT Managed Services · Smart Hands")
        
        c.save()
        return True
    except ImportError:
        # Fallback: create a minimal PDF with text
        with open(output_path, 'wb') as f:
            f.write(b"%PDF-1.4\n")
            f.write(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
            f.write(b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
            f.write(b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>\nendobj\n")
            f.write(b"4 0 obj\n<< /Length 44 >>\nstream\nBT /F1 24 Tf 100 700 TD (Zion Tech Group) Tj ET\nendstream\nendobj\n")
            f.write(b"xref\n0 5\n0000000000 65535 f \n")
            f.write(b"0000000010 00000 n \n0000000060 00000 n \n0000000100 00000 n \n0000000150 00000 n \n")
            f.write(b"trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n250\n%%EOF")
        return True

# ── RFQ Email generation ──────────────────────────────────────────────────
def generate_rfq_email(lead, context):
    """
    Generate a personalized RFQ email for each lead.
    Includes: RFQ in body, PDF with Zion logo, taxes, commercial@ CC.
    """
    name = lead.get('name') or lead.get('to_name') or lead.get('full_name', 'Valued Client')
    company = lead.get('company') or lead.get('organization', 'Organization')
    email = lead.get('to') or lead.get('email', '')
    service = lead.get('service', 'AI Automation & IT Managed Services')
    subject = lead.get('subject', 'Zion Tech Group — RFQ para ' + company)
    
    # Get pricing context
    price = context.get('price', 0)
    markup_price = calculate_30_percent_markup(price)
    taxes = calculate_local_taxes(price)
    
    # Lead signals
    signals = lead.get('lead_signals', [])
    if not signals:
        signals = context.get('signals', ['AI automation', 'IT managed services'])
    
    # Build the email
    html_template = Template("""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; color: #1a1a2e; line-height: 1.6; }
            .container { max-width: 650px; margin: 0 auto; padding: 20px; }
            .logo { text-align: center; padding: 20px 0; }
            .logo img { max-width: 200px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .body { background: #f8f9fa; padding: 25px; border-radius: 8px; border: 1px solid #e0e0e0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; margin-top: 20px; border-top: 1px solid #e0e0e0; }
            .price-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            .price-table th { background: #667eea; color: white; padding: 10px; text-align: left; }
            .price-table td { padding: 10px; border: 1px solid #ddd; }
            .btn { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 5px; }
            .signature { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo">
                <img src="cid:zion_logo" alt="Zion Tech Group">
            </div>
            <div class="header">
                <h2>Zion Tech Group — Solicitação de Orçamento (RFQ)</h2>
                <p>{{ service }}</p>
            </div>
            <div class="body">
                <h3>Prezado {{ name }}</h3>
                <p>
                    Na Zion Tech Group, estamos entusiasmados com a oportunidade de trabalhar com {{ company }}.
                    Com base na sua iniciativa, nós preparamos esta <strong>Solicitação de Orçamento (RFQ)</strong> com
                    as soluções mais estratégicas e inovadoras para o seu negócio.
                </p>
                <p>
                    Nossa proposta abrange {{ ", ".join(signals) }} com <strong>30% de margem</strong> aplicada sobre
                    todos os serviços de Font End, Tecnologia, Hardware, Software e Infraestrutura.
                </p>
                
                <h3>📋 Sumário da Proposta</h3>
                <table class="price-table">
                    <tr><th>Serviço / Item</th><th>Descrição</th><th>Valor Base</th><th>Markup 30%</th><th>Total</th></tr>
                    <tr>
                        <td>{{ service }}</td>
                        <td>Solução completa de {{ ", ".join(signals) }}</td>
                        <td style="text-align:right">R$ {{ price }}</td>
                        <td style="text-align:right">R$ {{ markup_price }}</td>
                        <td style="text-align:right"><strong>R$ {{ total_with_taxes }}</strong></td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align:right; font-weight:bold">Taxa de administração</td>
                        <td style="text-align:right">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td colspan="4" style="text-align:right; font-weight:bold"><strong>Total com impostos</strong></td>
                        <td style="text-align:right"><strong>R$ {{ total_with_taxes }}</strong></td>
                    </tr>
                </table>
                
                <p style="background:#e8f4fd; padding:15px; border-radius:5px; border:1px solid #b3d9ff;">
                    <strong>⚠️ Impostos e Taxas (quando aplicáveis):</strong><br>
                    {{ tax_note }}
                </p>
                
                <h3>🚀 Próximos Passos</h3>
                <p>
                    Para avançarmos, nós precisamos de:
                </p>
                <ol>
                    <li><strong>Confirmação formal</strong> do ORÇAMENTO acima via reply-all</li>
                    <li><strong>Número do PO (Purchase Order)</strong> para iniciar a implantação</li>
                    <li><strong>Entrega do material</strong> de compatibilidade (se aplicável)</li>
                </ul>
                <p>
                    Envie sua confirmação e o PO para <strong>{{ COMMERCIAL_CC }}</strong> e
                    <strong>{{ CARLOS_CC }}</strong>. Podemos começar imediatamente após a confirmação.
                </p>
                
                <p>
                    <a class="btn" href="{{ ZION_PLANS }}">Explorar Planos</a>
                    <a class="btn" href="{{ ZION_DISCOVERY }}">Fazer Discovery Grátis</a>
                </p>
                
                <p>
                    Pode me enviar suas dúvidas e o número do PO que eu te retorno imediatamente.
                </p>
            </div>
            <div class="footer">
                <p><a href="{{ ZION_WEBSITE }}">{{ ZION_WEBSITE }}</a> | {{ ZION_PLANS }} | {{ ZION_DISCOVERY }}</p>
                <p>© 2026 Zion Tech Group. Todos os direitos reservados.</p>
            </div>
        </div>
    </body>
    </html>
    """)
    
    # Fill template
    price = context.get('price', 0)
    markup_price = calculate_30_percent_markup(price)
    taxes = calculate_local_taxes(price)
    
    html = html_template.render(
        name=name,
        company=company,
        email=email,
        service=service,
        price=price,
        markup_price=markup_price,
        total_with_taxes=taxes["total_with_taxes"],
        tax_note=taxes["tax_note"],
        signals=", ".join(signals),
        ZION_PLANS=ZION_PLANS,
        ZION_DISCOVERY=ZION_DISCOVERY,
        ZION_WEBSITE=ZION_WEBSITE,
        COMMERCIAL_CC=COMMERCIAL_CC,
        CARLOS_CC=CARLOS_CC,
    )
    
    plain = html_template.render(
        name=name,
        company=company,
        email=email,
        service=service,
        price=price,
        markup_price=markup_price,
        total_with_taxes=taxes["total_with_taxes"],
        tax_note=taxes["tax_note"],
        signals=", ".join(signals),
        ZION_PLANS=ZION_PLANS,
        ZION_DISCOVERY=ZION_DISCOVERY,
        ZION_WEBSITE=ZION_WEBSITE,
        COMMERCIAL_CC=COMMERCIAL_CC,
        CARLOS_CC=CARLOS_CC,
    )
    
    return html, plain

# ── Email sender ──────────────────────────────────────────────────────────
def send_email(lead, context, reply_to=None):
    """
    Send the RFQ email with PDF attachment, CC commercial@.
    Returns dict with tracking info.
    """
    html, plain = generate_rfq_email(lead, context)
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = context.get('subject', 'Zion Tech Group — RFQ para ' + lead.get('company', 'Organization'))
    msg['From'] = ZION_EMAIL
    msg['To'] = lead.get('to') or lead.get('email', 'MISSING_EMAIL')
    msg['CC'] = f"{COMMERCIAL_CC}, {CARLOS_CC}"
    msg['Date'] = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S %z")
    msg['Message-ID'] = f"<rfq-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}-{lead.get('to') or lead.get('email','unknown').replace('@','_').replace('.','_')}@ziontechgroup.com>"
    msg['In-Reply-To'] = reply_to or None
    msg['References'] = reply_to or None
    
    # Attach HTML and plain text versions
    msg.attach(MIMEText(html, 'html', 'utf-8'))
    msg.attach(MIMEText(plain, 'plain', 'utf-8'))
    
    # Attach logo PDF
    if LOGO.exists():
        pdf_path = CACHE / f"rfq_{lead.get('to') or lead.get('email','unknown').replace('@','_').replace('.','_')}_{int(datetime.now().timestamp())}.pdf"
        generate_logo_pdf(pdf_path)
        if pdf_path.exists():
            part = MIMEBase('application', 'pdf')
            with open(pdf_path, 'rb') as f:
                part.set_payload(f.read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', 'attachment; filename="Zion_RFQ_Proposta.pdf"')
            part.add_header('Content-ID', '<zion_logo>')
            part.add_header('X-Attachment-Id', '1')
            msg.attach(part)
    else:
        # Create a text version with logo description
        logo_part = MIMEText(f"[LOGO: Zion Tech Group — Imagem disponível em {LOGO}]", 'plain', 'utf-8')
        logo_part.add_header('Content-Disposition', 'attachment; filename="Zion_RFQ_Proposta.pdf"')
        msg.attach(logo_part)
    
    # Log for tracking
    log_entry = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'to': lead.get('to') or lead.get('email', 'MISSING_EMAIL'),
        'name': lead.get('name') or lead.get('to_name') or lead.get('full_name', ''),
        'company': lead.get('company', ''),
        'subject': msg['Subject'],
        'status': 'queued',
        'cc': [COMMERCIAL_CC, CARLOS_CC],
        'attachment': 'Zion_RFQ_Proposta.pdf',
        'tax_note': calculate_local_taxes(context.get('price', 0))['tax_note'],
        'internal_notification': True,
        'requires_confirmation': True,
        'requires_po': True,
    }
    
    # Append to log
    with open(OUTREACH_LOG, 'a', encoding='utf-8') as f:
        f.write(json.dumps(log_entry, ensure_ascii=False) + '\n')
    
    # Return tracking info
    return {
        'status': 'queued',
        'to': lead.get('to') or lead.get('email', 'MISSING_EMAIL'),
        'cc': [COMMERCIAL_CC, CARLOS_CC],
        'subject': msg['Subject'],
        'log_entry': log_entry,
        'pdf_path': str(pdf_path) if LOGO.exists() else 'logo_not_found_pdc',
        'tracking_id': log_entry['timestamp'],
    }

# ── Internal notification to commercial@ ─────────────────────────────────
def send_internal_notification(leads_and_suppliers):
    """
    Send internal email to commercial@ informing which supplier is selected
    and explaining the calculations.
    """
    html_template = Template("""
    <html>
    <body style="font-family: 'Inter', Arial, sans-serif; color: #1a1a2e; line-height: 1.6;">
        <div style="max-width: 650px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; padding: 20px 0;">
                <img src="cid:zion_logo" alt="Zion Tech Group" style="max-width: 200px;">
            </div>
            <h2 style="color: #667eea; text-align: center;">Zion Tech Group — Nota Interna para Commercial</h2>
            <p style="background: #e8f4fd; padding: 15px; border-radius: 5px;">
                <strong>📋 Resumo da Seletividade de Fornecedores</strong>
            </p>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 14px;">
                <tr style="background: #667eea; color: white;">
                    <th style="padding: 10px; text-align: left;">Lead</th>
                    <th style="padding: 10px; text-align: left;">Fornecedor Selecionado</th>
                    <th style="padding: 10px; text-align: right;">Calculo</th>
                </tr>
                {% for item in items %}
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">{{ item.lead }}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">{{ item.supplier }}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; font-size: 12px;">{{ item.calculation }}</td>
                </tr>
                {% endfor %}
            </table>
            <p style="margin-top: 20px;">
                <strong>🔢 Cálculos Aplicados:</strong><br>
                - Markup de 30% sobre todos os preços (FE/tech/hardware/software)<br>
                - ICMS 17% | ISS 5% | PIS/COFINS 5% (para Brasil)<br>
                - Preços em R$ com desconto para contratos anuais
            </p>
            <p>
                — Kleber Garcia Alcatrao, CEO<br>
                <a href="mailto:commercial@ziontechgroup.com">commercial@ziontechgroup.com</a>
            </p>
        </div>
    </body>
    </html>
    """)
    
    items = []
    for lead, supplier, calc in leads_and_suppliers:
        items.append({
            'lead': lead,
            'supplier': supplier,
            'calculation': calc
        })
    
    html = html_template.render(items=items)
    plain = "Zion Tech Group — Nota Interna para Commercial\n" + "=" * 50 + "\n\n"
    for lead, supplier, calc in leads_and_suppliers:
        plain += f"\nLead: {lead}\nFornecedor: {supplier}\nCalculo: {calc}\n"
    plain += "\n— Kleber Garcia Alcatrao, CEO"
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Zion Tech Group — Nota Interna: Seletividade de Fornecedores + Cálculos"
    msg['From'] = ZION_EMAIL
    msg['To'] = COMMERCIAL_CC
    msg['CC'] = CARLOS_CC
    msg['Date'] = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S %z")
    msg['Message-ID'] = f"<internal-rfq-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}@ziontechgroup.com>"
    
    msg.attach(MIMEText(html, 'html', 'utf-8'))
    msg.attach(MIMEText(plain, 'plain', 'utf-8'))
    
    # Attach logo
    if LOGO.exists():
        pdf_path = CACHE / "internal_supplier_selection.pdf"
        generate_logo_pdf(pdf_path)
        if pdf_path.exists():
            part = MIMEBase('application', 'pdf')
            with open(pdf_path, 'rb') as f:
                part.set_payload(f.read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', 'attachment; filename="Zion_Internal_Nota.pdf"')
            part.add_header('Content-ID', '<zion_logo>')
            part.add_header('X-Attachment-Id', '1')
            msg.attach(part)
    
    # Log
    log_entry = {
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'to': COMMERCIAL_CC,
        'subject': "Zion Tech Group — Nota Interna: Seletividade de Fornecedores",
        'status': 'queued',
        'internal_only': True,
        'content': 'Supplier selection + calculations',
    }
    
    with open(OUTREACH_LOG, 'a', encoding='utf-8') as f:
        f.write(json.dumps(log_entry, ensure_ascii=False) + '\n')
    
    return {
        'status': 'queued',
        'to': COMMERCIAL_CC,
        'cc': CARLOS_CC,
        'log_entry': log_entry,
    }

# ── Main pipeline ─────────────────────────────────────────────────────────
def load_leads(phase):
    """Load leads based on phase."""
    if phase == 1:
        # Phase 1: 24 canonical leads
        canon_path = REPO / "lead-crm" / "outreach_ready_canonical.json"
        with open(canon_path) as f:
            canon = json.load(f)
        return canon.get('recipients', [])
    elif phase == 2:
        # Phase 2: High-value derived leads from Fernanda
        derived_path = CACHE / "combined_leads.json"
        with open(derived_path) as f:
            all_leads = json.load(f)
        # Filter to only Fernanda-derived leads
        return [l for l in all_leads if l.get('source') == 'fernanda_derived']
    else:
        raise ValueError(f"Unknown phase: {phase}")

def execute_pipeline(phase):
    """Execute the RFQ email pipeline for the given phase."""
    leads = load_leads(phase)
    context = {
        'price': 99,  # Discovery $99 base price
        'service': 'Discovery (Grátis) + AI Automation Pilot',
        'signals': ['Automação com IA', 'Gerenciamento IT', 'Solutions para negócio'],
        'subject': 'Zion Tech Group — Proposta Estratégica (RFQ)',
    }
    
    results = []
    print(f"=== Phase {phase}: Executing pipeline for {len(leads)} leads ===")
    
    for i, lead in enumerate(leads):
        # Canonical JSON uses "to" key; fallback to "email"
        lead_email = (lead.get('to') or lead.get('email') or '').strip().lower()
        if not lead_email:
            print(f"  [{i+1}] SKIP (no email key found)")
            continue
        # Check for duplicates in send log
        if os.path.exists(OUTREACH_LOG):
            sent_check = False
            with open(OUTREACH_LOG, 'r') as f:
                for line in f:
                    try:
                        entry = json.loads(line)
                        if entry.get('to', '').lower() == lead_email:
                            sent_check = True
                            break
                    except:
                        pass
            if sent_check:
                print(f"  [{i+1}] DUPLICATE: {lead_email} already sent")
                continue
        
        print(f"  [{i+1}] Sending RFQ to {lead_email} ({lead.get('name','')})...")
        result = send_email(lead, context)
        results.append(result)
        print(f"       ✓ Queued — {result['status']}")
    
    # Send internal notification
    internal_items = [(l.get('company',''), 'Zion Tech Group', '30% markup + ICMS 17% + ISS 5% + PIS/COFINS 5%') 
                      for l in leads if not l.get('has_been_sent')]
    if internal_items:
        print(f"\n--- Internal notification to commercial@ ---")
        internal_result = send_internal_notification(internal_items)
        results.append(internal_result)
        print(f"✓ Internal notification queued to commercial@ (CC carlos@)")
    
    # Summary
    sent_count = sum(1 for r in results if r.get('status') == 'queued')
    print(f"\n=== Pipeline Complete ===")
    print(f"  Leads queued: {sent_count}")
    print(f"  Internal notification: {'✓' if any(r.get('internal_only') for r in results) else '✗'}")
    print(f"  CC: {COMMERCIAL_CC} + {CARLOS_CC}")
    
    # Save report
    report_path = CACHE / f"rfq_pipeline_phase{phase}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(report_path, 'w') as f:
        json.dump({
            'phase': phase,
            'leads_processed': len(leads),
            'leads_queued': sent_count,
            'results': results,
            'timestamp': datetime.now(timezone.utc).isoformat(),
        }, f, indent=2, ensure_ascii=False)
    print(f"  Report saved: {report_path}")
    
    return results

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description='Zion Tech Group RFQ Email Pipeline')
    parser.add_argument('--phase', type=int, default=1, help='Phase 1 (canonical leads) or 2 (derived leads)')
    args = parser.parse_args()
    
    # Check logo
    if not LOGO.exists():
        print("WARNING: Logo not found at", LOGO)
    
    execute_pipeline(args.phase)
