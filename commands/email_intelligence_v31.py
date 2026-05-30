#!/usr/bin/env python3
"""
commands/email_intelligence_v31.py — V31 Deep Intelligence Layer (RECREATED)

This file was lost during merge conflicts. Recreated from memory.
Contains: spam/phishing detection, newsletter detection, FAQ matching,
smart reply-all, attachment analysis.
"""

import json, re, hashlib, time
from datetime import datetime, timezone
from pathlib import Path

# ═══════════════════════════════════════════════════════════════
#  V31: FAQ / Knowledge Base
# ═══════════════════════════════════════════════════════════════

FAQ_KB = [
    {
        'patterns': [r'pricing', r'how much', r'cost', r'quote', r'rate', r'price'],
        'question': 'What are your pricing/rates?',
        'answer_en': 'Our pricing varies by project scope. AI services start at $149/mo, IT services from $2,500/project, and Micro-SaaS from $19/mo. For a custom proposal, visit https://ziontechgroup.com/contact or reply with your specific needs.',
        'answer_pt': 'Nossos preços variam por escopo do projeto. Serviços de IA começam em $149/mo, serviços de TI a partir de $2.500/projeto e Micro-SaaS a partir de $19/mo. Para uma proposta personalizada, visite https://ziontechgroup.com/contact.',
        'intent': 'sales',
    },
    {
        'patterns': [r'email.*responder', r'auto.*email', r'email.*automat', r'smart.*email'],
        'question': 'Tell me about the AI Email Responder',
        'answer_en': 'Our AI Email Responder handles incoming emails 24/7 — categorizing, prioritizing, drafting replies with human-in-the-loop approval. It supports EN/PT/ES, detects sentiment, smart reply-all, and escalates critical issues. Plans from $39/mo to $299/mo. Learn more: https://ziontechgroup.com/services/micro-saas-ai-email-responder',
        'answer_pt': 'Nosso Email Responder com IA gerencia e-mails 24/7 — categoriza, prioriza, cria rascunhos com aprovação humana. Suporta EN/PT/ES, detecta sentimento, reply-all inteligente e escalona problemas críticos.',
        'intent': 'sales',
    },
    {
        'patterns': [r'cloud.*migrat', r'migrat.*cloud', r'aws', r'azure', r'gcp'],
        'question': 'Do you do cloud migration?',
        'answer_en': 'Yes — we handle end-to-end cloud migration (AWS, Azure, GCP) with zero downtime. Includes assessment, planning, execution, and post-optimization. Starts at $2,500/project. Info: https://ziontechgroup.com/services/it-cloud-migration-service',
        'answer_pt': 'Sim — fazemos migração completa para nuvem (AWS, Azure, GCP) com tempo de inatividade zero. A partir de $2.500/projeto.',
        'intent': 'sales',
    },
    {
        'patterns': [r'cyber.*secur', r'security.*audit', r'penetration', r'vulnerability', r'soc2', r'hipaa', r'gdpr'],
        'question': 'Do you offer cybersecurity audits?',
        'answer_en': 'Yes — comprehensive cybersecurity audit including vulnerability scanning, penetration testing, and compliance gap analysis (SOC2/HIPAA/GDPR). From $1,999/audit. Info: https://ziontechgroup.com/services/it-cybersecurity-audit',
        'answer_pt': 'Sim — auditoria abrangente de cibersegurança incluindo varredura de vulnerabilidades, teste de penetração e análise de conformidade (SOC2/HIPAA/GDPR). A partir de $1.999/auditoria.',
        'intent': 'sales',
    },
    {
        'patterns': [r'chatbot', r'customer.*support.*bot', r'ai.*chat', r'whatsapp.*bot'],
        'question': 'Do you build customer support chatbots?',
        'answer_en': 'Yes — we deploy AI chatbots for 24/7 customer support with natural language understanding, automatic ticket creation, and human handoff. Integrates with website, WhatsApp, and social media. From $149/mo. Info: https://ziontechgroup.com/services/ai-customer-support-chatbot',
        'answer_pt': 'Sim — implantamos chatbots com IA para suporte 24/7 com compreensão de linguagem natural, criação automática de tickets e transferência para humanos. A partir de $149/mo.',
        'intent': 'sales',
    },
    {
        'patterns': [r'document.*process', r'ocr', r'invoice.*automat', r'contract.*analys'],
        'question': 'Can you automate document processing?',
        'answer_en': 'Yes — our AI Document Processor extracts, classifies, and processes data from invoices, contracts, receipts, and forms with 99%+ accuracy. OCR + AI. From $99/mo. Info: https://ziontechgroup.com/services/ai-document-processor',
        'answer_pt': 'Sim — nosso processador de documentos com IA extrai, classifica e processa dados de notas fiscais, contratos, recibos e formulários com 99%+ de precisão. A partir de $99/mo.',
        'intent': 'sales',
    },
    {
        'patterns': [r'get.*start', r'how.*start', r'onboard', r'sign.*up', r'register'],
        'question': 'How do I get started?',
        'answer_en': 'Getting started is easy! Reply with your specific need, visit https://ziontechgroup.com/contact, or call \U0001f4f1 +1 302 464 0950. We respond within 24 hours with a custom proposal.',
        'answer_pt': 'Começar é fácil! Responda com sua necessidade específica, visite https://ziontechgroup.com/contact, ou ligue \U0001f4f1 +1 302 464 0950. Respondemos em 24 horas.',
        'intent': 'sales',
    },
    {
        'patterns': [r'contact', r'reach.*you', r'phone', r'email.*you', r'call'],
        'question': 'How do I contact you?',
        'answer_en': '\U0001f4f1 Phone/WhatsApp: +1 302 464 0950\n\u2709\ufe0f Email: kleber@ziontechgroup.com\n\U0001f4cd Address: 364 E Main St STE 1008, Middletown DE 19709\n\U0001f310 Web: https://ziontechgroup.com/contact\nWe respond within 24 hours.',
        'answer_pt': '\U0001f4f1 Telefone/WhatsApp: +1 302 464 0950\n\u2709\ufe0f E-mail: kleber@ziontechgroup.com\n\U0001f310 Web: https://ziontechgroup.com/contact\nRespondemos em 24 horas.',
        'intent': 'general',
    },
]


def match_faq(body, subject, lang='en'):
    text = (subject + ' ' + body).lower()
    best_match = None
    best_score = 0
    for faq in FAQ_KB:
        score = sum(1 for p in faq['patterns'] if re.search(p, text))
        if score > best_score:
            best_score = score
            best_match = faq
    if best_match and best_score >= 1:
        answer = best_match.get(f'answer_{lang}', best_match['answer_en'])
        return {
            'matched': True,
            'question': best_match['question'],
            'answer': answer,
            'confidence': min(0.95, 0.5 + 0.15 * best_score),
            'intent': best_match.get('intent', 'general'),
        }
    return None


# ═══════════════════════════════════════════════════════════════
#  V31: Spam / Phishing Detector
# ═══════════════════════════════════════════════════════════════

_SPAM_SIGNALS = [
    r'you.*won', r'congratulations.*prize', r'claim.*reward',
    r'urgent.*verify.*account', r'suspended.*unless.*click',
    r'free.*gift.*click', r'limited.*time.*act now',
    r'\$\d+.*million', r'wire transfer.*fee', r'nigerian',
    r'crypto.*investment.*guaranteed', r'double.*your.*bitcoin',
]

_PHISHING_SIGNALS = [
    r'verify.*identity.*immediately', r'account.*will.*be.*closed',
    r'confirm.*credit.*card', r'ssn.*required', r'social security',
    r'bank.*account.*verify', r'login.*from.*unusual.*location',
    r'click.*here.*within.*\d+.*hours', r'password.*expired',
]


def detect_spam(body, subject, sender):
    text = (subject + ' ' + body).lower()
    spam_score = sum(1 for p in _SPAM_SIGNALS if re.search(p, text))
    phishing_score = sum(1 for p in _PHISHING_SIGNALS if re.search(p, text))
    sender_lower = sender.lower()
    if any(kw in sender_lower for kw in ['noreply', 'no-reply', 'donotreply']):
        spam_score += 0.5
    total = spam_score + phishing_score * 2
    return {
        'is_spam': total >= 2,
        'is_phishing': phishing_score >= 1,
        'spam_score': spam_score,
        'phishing_score': phishing_score,
        'confidence': min(1.0, total / 5),
        'action': 'phishing_alert' if phishing_score >= 1 else ('auto_trash' if total >= 3 else ('auto_archive' if total >= 2 else 'none')),
    }


# ═══════════════════════════════════════════════════════════════
#  V31: Smart Reply-All Engine
# ═══════════════════════════════════════════════════════════════

def smart_reply_all(sender, to_hdr, cc_hdr, subject, body, reply_history=None):
    text = (subject + ' ' + body).lower()
    cc_list = [c.strip() for c in cc_hdr.split(',') if c.strip()] if cc_hdr else []
    to_list = [t.strip() for t in to_hdr.split(',') if t.strip()] if to_hdr else []
    
    private_signals = ['just you', 'only you', 'private', 'confidential', 'between us', 'not for distribution', 'do not reply all']
    if any(sig in text for sig in private_signals):
        return {'reply_all': False, 'reason': 'private_signals', 'cc_list': []}
    
    list_signals = ['list-', '-request@', 'majordomo', 'listserv', 'mailing list']
    if any(sig in text or sig in sender.lower() for sig in list_signals):
        return {'reply_all': False, 'reason': 'mailing_list', 'cc_list': [], 'to_override': sender}
    
    auto_systems = ['noreply', 'no-reply', 'donotreply', 'mailer-daemon', 'postmaster', 'notifications@', 'alerts@', 'updates@', 'automated@']
    if any(sig in sender.lower() for sig in auto_systems):
        return {'reply_all': False, 'reason': 'auto_system', 'cc_list': [], 'to_override': sender}
    
    self_email = 'kleber@ziontechgroup.com'
    filtered_cc = [c for c in cc_list if self_email not in c.lower() and not any(kw in c.lower() for kw in ['noreply', 'no-reply', 'donotreply', 'bounce', 'mailer-daemon'])]
    
    group_keywords = ['team', 'group', 'project', 'all', 'everyone', 'hi all', 'hello all', 'hey team', 'team update', 'department', 'staff', 'all-hands', 'townhall', 'standup']
    meeting_keywords = ['meeting', 'call', 'zoom', 'teams', 'calendar', 'schedule', 'availability', 'sync up', 'catch up']
    is_group = any(kw in text for kw in group_keywords) or len(cc_list) > 2
    is_meeting = any(kw in text for kw in meeting_keywords)
    
    if reply_history:
        our_reply_hash = hashlib.md5(f"re:{subject}".encode()).hexdigest()[:16]
        if our_reply_hash in [r.get('hash', '') for r in reply_history]:
            return {'reply_all': False, 'reason': 'already_replied', 'cc_list': []}
    
    if is_group and filtered_cc:
        reply_all, reason = True, 'group_with_cc'
    elif is_meeting and filtered_cc:
        reply_all, reason = True, 'meeting_with_cc'
    elif len(filtered_cc) > 1:
        reply_all, reason = True, 'multiple_cc'
    elif 'fwd:' in subject.lower() and filtered_cc:
        reply_all, reason = True, 'forwarded_thread'
    else:
        reply_all, reason = False, 'direct_message'
    
    return {
        'reply_all': reply_all, 'reason': reason, 'cc_list': filtered_cc,
        'original_cc_count': len(cc_list), 'filtered_cc_count': len(filtered_cc),
        'is_group': is_group, 'is_meeting': is_meeting,
    }


# ═══════════════════════════════════════════════════════════════
#  V31: Newsletter / Auto-Notification Detector
# ═══════════════════════════════════════════════════════════════

_NEWSLETTER_SIGALS = ['unsubscribe', 'view in browser', 'email preferences', 'this email was sent to', 'you are receiving this because', 'manage preferences', 'email settings', 'opt out', 'promotional', 'marketing email', 'newsletter']
_NOTIFICATION_SIGNALS = ['notification', 'alert', 'your report is ready', 'has been updated', 'action required', 'automated message', 'no-reply', 'do not reply', 'system notification', 'account activity', 'security alert', 'password changed', 'new login']

def detect_newsletter(body, subject, sender):
    text = (subject + ' ' + body).lower()
    ns = sum(1 for s in _NEWSLETTER_SIGALS if s in text)
    nts = sum(1 for s in _NOTIFICATION_SIGNALS if s in text)
    iss = any(kw in sender.lower() for kw in ['@mail.', '@newsletter.', '@notifications.', '@marketing.', 'updates@', 'alerts@', 'newsletter@'])
    result = {'is_newsletter': ns >= 2 or iss, 'is_notification': nts >= 1, 'newsletter_score': ns, 'notification_score': nts, 'auto_action': 'none'}
    if result['is_newsletter']: result['auto_action'] = 'auto_archive'
    elif result['is_notification']: result['auto_action'] = 'auto_ack'
    return result


# ═══════════════════════════════════════════════════════════════
#  V31: Attachment Deep Analyzer
# ═══════════════════════════════════════════════════════════════

_ATTACHMENT_RULES = {
    'invoice': {'patterns': ['invoice', 'bill', 'payment due', 'amount due', 'total due'], 'action': 'auto_thank', 'priority': 'high'},
    'contract': {'patterns': ['contract', 'agreement', 'terms', 'SOW', 'statement of work', 'NDA', 'non-disclosure'], 'action': 'escalate_legal', 'priority': 'critical'},
    'proposal': {'patterns': ['proposal', 'pitch deck', 'deck', 'partnership proposal', 'business plan'], 'action': 'draft_meeting', 'priority': 'high'},
    'resume': {'patterns': ['resume', 'CV', 'curriculum vitae', 'application'], 'action': 'draft_hiring', 'priority': 'medium'},
    'legal': {'patterns': ['legal', 'cease and desist', 'subpoena', 'lawsuit', 'attorney', 'patent', 'trademark'], 'action': 'escalate_legal', 'priority': 'critical'},
}

def analyze_attachment(filename, content_preview=''):
    text = (filename + ' ' + content_preview).lower()
    for att_type, rule in _ATTACHMENT_RULES.items():
        if any(p in text for p in rule['patterns']):
            return {'type': att_type, 'action': rule['action'], 'priority': rule['priority'], 'needs_escalation': rule['action'].startswith('escalate')}
    return {'type': 'unknown', 'action': 'draft_general', 'priority': 'medium', 'needs_escalation': False}
