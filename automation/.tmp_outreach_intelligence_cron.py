#!/usr/bin/env python3
"""
Cron job: review outreach-log.jsonl and improvements.json, compute metrics,
append improvement digest, and draft hot-followup CEO reply if applicable.
"""
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

DATA_DIR = Path('/Users/miami2/zion.app/automation/data/lead-outreach')
OUTREACH_LOG = DATA_DIR / 'outreach-log.jsonl'
IMPROVEMENTS = DATA_DIR / 'improvements.json'
DRAFT_FILE = DATA_DIR / 'hot-followup-ceo-reply-draft.txt'
HOT_FOLLOWUP_SENT = DATA_DIR / 'hot-followup-sent.json'

def compute_metrics():
    """Compute metrics from outreach-log.jsonl."""
    if not OUTREACH_LOG.exists():
        return {
            'totalRuns': 0,
            'sendsAttempted': 0,
            'duplicatesSuppressed': 0,
            'authFailures': 0,
            'hotFollowups': 0,
            'latestComplete': None,
            'potentialClients': 0,
            'scanned': 0
        }
    
    records = []
    for line in OUTREACH_LOG.read_text().splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            records.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    
    total_runs = len(records)
    sends_attempted = 0
    duplicates_suppressed = 0
    auth_failures = 0
    hot_followups = 0
    latest_complete = None
    potential_clients = 0
    scanned = 0
    
    complete_timestamps = []
    
    for r in records:
        event = r.get('event', '')
        
        # Track complete/auth_missing for latestComplete
        if event in ('complete', 'auth_missing'):
            ts = r.get('ts')
            if ts:
                complete_timestamps.append(ts)
        
        # Get summary (may be nested or top-level)
        summary = r.get('summary', r)
        
        # Count sends
        sent = summary.get('sent', summary.get('emailsSentCount', 0))
        if isinstance(sent, (int, float)):
            sends_attempted += int(sent)
        
        # Count duplicates suppressed
        dup = summary.get('skippedDuplicateSuppression', 0)
        if isinstance(dup, (int, float)):
            duplicates_suppressed += int(dup)
        
        # Count auth failures
        errors = summary.get('errors', [])
        if isinstance(errors, list):
            err_text = ' '.join(errors)
        else:
            err_text = str(errors)
        if 'No auth for gmail' in err_text:
            auth_failures += 1
        
        # Count hot followups
        hf = summary.get('hotFollowups', 0)
        if isinstance(hf, (int, float)):
            hot_followups += int(hf)
        
        # Get potential clients and scanned from latest complete
        if event == 'complete':
            pc = summary.get('potentialClients', 0)
            if isinstance(pc, (int, float)):
                potential_clients = int(pc)
            sc = summary.get('scanned', 0)
            if isinstance(sc, (int, float)):
                scanned = int(sc)
    
    # Latest complete is max timestamp
    if complete_timestamps:
        latest_complete = max(complete_timestamps)
    
    return {
        'totalRuns': total_runs,
        'sendsAttempted': sends_attempted,
        'duplicatesSuppressed': duplicates_suppressed,
        'authFailures': auth_failures,
        'hotFollowups': hot_followups,
        'latestComplete': latest_complete,
        'potentialClients': potential_clients,
        'scanned': scanned
    }

def load_improvements():
    """Load existing improvements.json."""
    if not IMPROVEMENTS.exists():
        return {'digests': [], 'improvements': [], 'updatedAt': None}
    try:
        return json.loads(IMPROVEMENTS.read_text())
    except json.JSONDecodeError:
        return {'digests': [], 'improvements': [], 'updatedAt': None}

def save_improvements(data):
    """Save improvements.json."""
    IMPROVEMENTS.write_text(json.dumps(data, indent=2))
    print(f"Saved improvements.json")

def append_improvement_digest(metrics, pattern, recommendations):
    """Append a new entry to improvements array."""
    data = load_improvements()
    
    now = datetime.now(timezone.utc)
    ts = now.isoformat()
    
    entry = {
        'ts': ts,
        'metrics': {
            'totalRuns': metrics['totalRuns'],
            'sendsAttempted': metrics['sendsAttempted'],
            'duplicatesSuppressed': metrics['duplicatesSuppressed'],
            'authFailures': metrics['authFailures'],
            'hotFollowups': metrics['hotFollowups'],
            'latestComplete': metrics['latestComplete'],
            'potentialClients': metrics['potentialClients'],
            'scanned': metrics['scanned']
        },
        'pattern': pattern,
        'recommendations': recommendations
    }
    
    data['improvements'].append(entry)
    data['updatedAt'] = ts
    
    save_improvements(data)
    print(f"Appended improvement entry at {ts}")

def check_hot_followup_threads():
    """Check for hot-follow-up threads via gog command."""
    import subprocess
    
    try:
        # Probe for hot-follow-up threads
        result = subprocess.run(
            ['gog', 'gmail', 'search', 'label:!!!hot-follow-up', '--max', '5', '--plain', '--no-input'],
            capture_output=True,
            text=True,
            timeout=30
        )
        output = result.stdout + result.stderr
        print(f"Hot-followup probe output: {output[:500]}")
        return output
    except subprocess.TimeoutExpired:
        print("Hot-followup probe timed out")
        return ""
    except FileNotFoundError:
        print("gog command not found")
        return ""
    except Exception as e:
        print(f"Hot-followup probe error: {e}")
        return ""

def load_hot_followup_sent():
    """Load the hot-followup sent registry."""
    if not HOT_FOLLOWUP_SENT.exists():
        return {}
    try:
        return json.loads(HOT_FOLLOWUP_SENT.read_text())
    except json.JSONDecodeError:
        return {}

def draft_ceo_reply(thread_subject, thread_id, recipient):
    """Draft a CEO reply for hot-followup thread."""
    # Check if already sent
    sent_registry = load_hot_followup_sent()
    if thread_id in sent_registry:
        print(f"Thread {thread_id} already sent - skipping draft")
        return None
    
    # Determine language from subject
    subject_lower = thread_subject.lower() if thread_subject else ''
    is_portuguese = any(pt_word in subject_lower for pt_word in ['parceria', 'operações', 'ti', 'brasil', 'português'])
    is_spanish = any(es_word in subject_lower for es_word in ['parceiro', 'operaciones', 'tecnología', 'español'])
    
    if is_portuguese:
        language = 'pt'
        greeting = "Olá"
        sign_off = "Atenciosamente,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group"
        body_template = """{greeting},

Obrigado pelo contato e pelo interesse em Zion Tech Group.

Estamos expandindo nossos serviços de IA com soluções inovadoras para empresas brasileiras:

• Automação de IA para Enterprise — redução de custos operacionais e aumento de eficiência
• Consultoria em Estratégia de IA — diagnóstico e roadmap personalizado
• Implementação de Modelos de Linguagem — soluções customizadas para seu caso de uso
• Integração de IA em Processos Existentes — sem interrupção das operações

Nossas ferramentas gratuitas também estão disponíveis:
→ AI Automation ROI Calculator 2026
→ How to Choose AI Automation Partner
→ AI Automation for Brazilian Enterprises

Agende uma conversa para explorar como podemos ajudar:
https://calendly.com/kleber-ziontechgroup

Mais informações:
https://ziontechgroup.com

{sign_off}"""
    elif is_spanish:
        language = 'es'
        greeting = "Hola"
        sign_off = "Saludos cordiales,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group"
        body_template = """{greeting},

Gracias por tu interés en Zion Tech Group.

Estamos expandiendo nuestros servicios de IA con soluciones innovadoras para empresas:

• Automatización de IA para Enterprise — reducción de costos operativos y aumento de eficiencia
• Consultoría en Estrategia de IA — diagnóstico y roadmap personalizado
• Implementación de Modelos de Lenguaje — soluciones personalizadas para tu caso de uso
• Integración de IA en Procesos Existentes — sin interrupción de operaciones

Nuestras herramientas gratuitas también están disponibles:
→ AI Automation ROI Calculator 2026
→ How to Choose AI Automation Partner
→ AI Automation for Brazilian Enterprises

Agenda una conversación para explorar cómo podemos ayudarte:
https://calendly.com/kleber-ziontechgroup

Más información:
https://ziontechgroup.com

{sign_off}"""
    else:
        language = 'en'
        greeting = "Hi"
        sign_off = "Best regards,\nKleber Garcia Alcatrão\nCEO, Zion Tech Group"
        body_template = """{greeting},

Thanks for reaching out and for your interest in Zion Tech Group.

We're expanding our AI services with innovative solutions for enterprises:

• AI Automation for Enterprise — reduce operational costs and increase efficiency
• AI Strategy Consulting — diagnostic and personalized roadmap
• Language Model Implementation — custom solutions for your use case
• AI Integration into Existing Processes — without disrupting operations

Our free tools are also available:
→ AI Automation ROI Calculator 2026
→ How to Choose AI Automation Partner
→ AI Automation for Brazilian Enterprises

Schedule a call to explore how we can help:
https://calendly.com/kleber-ziontechgroup

More info:
https://ziontechgroup.com

{sign_off}"""
    
    draft_content = body_template.format(
        greeting=greeting,
        sign_off=sign_off
    )
    
    # Write draft file
    DRAFT_FILE.write_text(draft_content)
    print(f"Drafted CEO reply for thread {thread_id} to {recipient}")
    print(f"Subject: {thread_subject}")
    print(f"Language: {language}")
    print(f"Draft saved to: {DRAFT_FILE}")
    
    return {
        'thread_id': thread_id,
        'recipient': recipient,
        'subject': thread_subject,
        'language': language,
        'draft_path': str(DRAFT_FILE)
    }

def main():
    print("=" * 60)
    print("OUTREACH INTELLIGENCE CRON JOB")
    print("=" * 60)
    
    # Compute metrics
    print("\n[1] Computing metrics from outreach-log.jsonl...")
    metrics = compute_metrics()
    print(f"    totalRuns: {metrics['totalRuns']}")
    print(f"    sendsAttempted: {metrics['sendsAttempted']}")
    print(f"    duplicatesSuppressed: {metrics['duplicatesSuppressed']}")
    print(f"    authFailures: {metrics['authFailures']}")
    print(f"    hotFollowups: {metrics['hotFollowups']}")
    print(f"    latestComplete: {metrics['latestComplete']}")
    print(f"    potentialClients: {metrics['potentialClients']}")
    print(f"    scanned: {metrics['scanned']}")
    
    # Load existing improvements
    print("\n[2] Loading existing improvements.json...")
    data = load_improvements()
    print(f"    Existing entries: {len(data.get('improvements', []))}")
    print(f"    Existing digests: {len(data.get('digests', []))}")
    
    # Check if state has changed meaningfully
    last_improvement = data['improvements'][-1] if data['improvements'] else None
    if last_improvement:
        last_metrics = last_improvement.get('metrics', {})
        print(f"\n[3] Comparing with last improvement entry...")
        print(f"    Last totalRuns: {last_metrics.get('totalRuns', 'N/A')}")
        print(f"    Last sendsAttempted: {last_metrics.get('sendsAttempted', 'N/A')}")
        print(f"    Last duplicatesSuppressed: {last_metrics.get('duplicatesSuppressed', 'N/A')}")
        print(f"    Last authFailures: {last_metrics.get('authFailures', 'N/A')}")
        print(f"    Last potentialClients: {last_metrics.get('potentialClients', 'N/A')}")
    
    # Determine if meaningful delta
    print("\n[4] Checking for meaningful state delta...")
    meaningful_delta = False
    delta_reason = ""
    
    if last_improvement:
        last_m = last_improvement.get('metrics', {})
        if (metrics['totalRuns'] != last_m.get('totalRuns', 0) or
            metrics['sendsAttempted'] != last_m.get('sendsAttempted', 0) or
            metrics['duplicatesSuppressed'] != last_m.get('duplicatesSuppressed', 0) or
            metrics['authFailures'] != last_m.get('authFailures', 0) or
            metrics['potentialClients'] != last_m.get('potentialClients', 0)):
            meaningful_delta = True
            delta_reason = "Metrics changed since last entry"
    
    if not meaningful_delta and metrics['authFailures'] > 0:
        meaningful_delta = True
        delta_reason = "Auth failures detected"
    
    print(f"    Meaningful delta: {meaningful_delta}")
    if meaningful_delta:
        print(f"    Reason: {delta_reason}")
    
    # Build pattern and recommendations
    print("\n[5] Building improvement digest...")
    
    # Check for suppression/prompt/scoring patterns
    suppression_pattern = ""
    if metrics['sendsAttempted'] > 0 and metrics['duplicatesSuppressed'] > 0:
        suppression_ratio = metrics['duplicatesSuppressed'] / metrics['sendsAttempted']
        if suppression_ratio > 0.3:
            suppression_pattern = f"High duplicate suppression ratio ({suppression_ratio:.1%}) — consider expanding suppression window"
        elif suppression_ratio < 0.05:
            suppression_pattern = f"Low duplicate suppression ({suppression_ratio:.1%}) — suppression window may be too wide or candidates too diverse"
    
    if metrics['sendsAttempted'] == 0:
        suppression_pattern = "No suppression data — sendsAttempted=0, suppression window unexercised"
    
    # Auth health
    auth_status = "healthy" if metrics['authFailures'] == 0 else f"degraded ({metrics['authFailures']} failures)"
    
    # Build pattern
    pattern = f"""{datetime.now(timezone.utc).isoformat()}: Outreach intelligence review.

Metrics: totalRuns={metrics['totalRuns']}, sendsAttempted={metrics['sendsAttempted']}, duplicatesSuppressed={metrics['duplicatesSuppressed']}, authFailures={metrics['authFailures']}, hotFollowups={metrics['hotFollowups']}, latestComplete={metrics['latestComplete']}, potentialClients={metrics['potentialClients']}, scanned={metrics['scanned']}.

Auth status: {auth_status}.
Suppression pattern: {suppression_pattern}.

"""
    
    if metrics['sendsAttempted'] == 0:
        pattern += """No suppression-window, prompt-wording, or scoring pattern actionable: 0 sends means suppression is never exercised and content experiments are unobservable until sends resume.
"""
    elif metrics['duplicatesSuppressed'] > 0:
        pattern += f"""Duplicates suppressed: {metrics['duplicatesSuppressed']} across {metrics['sendsAttempted']} sends. """
        if metrics['duplicatesSuppressed'] / metrics['sendsAttempted'] > 0.3:
            pattern += "High suppression rate suggests candidates may be repeating across windows — consider expanding suppression window or reviewing dedupe logic.\n"
        else:
            pattern += "Suppression rate within normal range.\n"
    else:
        pattern += "No duplicates suppressed — suppression window may be too wide or candidate pool too fresh.\n"
    
    # Recommendations
    recommendations = []
    
    if metrics['sendsAttempted'] == 0:
        recommendations.append("No suppression-window tuning warranted: duplicatesSuppressed=0 because canonical sends are never attempted. The 7-day window is unexercised, not misconfigured.")
        recommendations.append("No prompt wording or scoring changes: effect unobservable until canonical sends resume and recipients respond.")
        recommendations.append("Primary blocker remains send-path wiring: Gmail search discovers candidates but canonical send pipeline does not convert them. Restoring send auth/wiring is prerequisite for any suppression/prompt/scoring experiment.")
    else:
        if metrics['duplicatesSuppressed'] / metrics['sendsAttempted'] > 0.3:
            recommendations.append("Consider expanding suppression window — high duplicate rate suggests candidates repeat across windows.")
        elif metrics['duplicatesSuppressed'] / metrics['sendsAttempted'] < 0.05:
            recommendations.append("Suppression window may be too wide — few duplicates suppressed relative to sends.")
        
        recommendations.append("Continue monitoring response rates to evaluate prompt wording effectiveness.")
        recommendations.append("Score adjustments should wait for sufficient response data to measure quality by variant.")
    
    if metrics['authFailures'] > 0:
        recommendations.append(f"Auth failures detected ({metrics['authFailures']}) — investigate Gmail auth configuration before further sends.")
    
    if metrics['potentialClients'] == 0 and metrics['sendsAttempted'] == 0:
        recommendations.append("Candidate pool exhausted — broaden inbox scan criteria or expand scan window/frequency to surface new contacts.")
    
    pattern += "\n".join(recommendations)
    
    # Append improvement entry if meaningful delta
    if meaningful_delta:
        print("\n[6] Appending improvement digest...")
        append_improvement_digest(metrics, pattern, recommendations)
    else:
        print("\n[6] No meaningful delta — skipping append (avoiding duplicate entry)")
    
    # Check hot-followup threads
    print("\n[7] Checking hot-followup threads...")
    hf_output = check_hot_followup_threads()
    
    # Simple parsing of gog output for threads
    # Format is typically TSV with columns: id, thread_id, from, date, subject
    hot_threads = []
    if hf_output:
        lines = hf_output.strip().split('\n')
        for line in lines:
            if line.strip() and not line.startswith('Fetched'):
                parts = line.split('\t')
                if len(parts) >= 5:
                    thread_id = parts[1] if len(parts) > 1 else parts[0]
                    subject = parts[4] if len(parts) > 4 else ''
                    recipient = parts[2] if len(parts) > 2 else ''
                    hot_threads.append({
                        'thread_id': thread_id,
                        'subject': subject,
                        'recipient': recipient
                    })
    
    print(f"    Found {len(hot_threads)} hot-followup threads")
    
    # Draft CEO reply for first unsent thread
    if hot_threads:
        print("\n[8] Drafting CEO reply for hot-followup thread...")
        sent_registry = load_hot_followup_sent()
        
        for thread in hot_threads:
            if thread['thread_id'] not in sent_registry:
                result = draft_ceo_reply(
                    thread['subject'],
                    thread['thread_id'],
                    thread['recipient']
                )
                if result:
                    print(f"    Draft prepared: {result['draft_path']}")
                    break
        else:
            print("    All hot-followup threads already sent — no new draft needed")
    else:
        print("\n[8] No hot-followup threads found — no draft needed")
    
    print("\n" + "=" * 60)
    print("CRON JOB COMPLETE")
    print("=" * 60)

if __name__ == '__main__':
    main()
