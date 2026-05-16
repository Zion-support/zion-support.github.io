#!/usr/bin/env python3
"""
Smart Escalation Engine - Automatic alert routing

Triggers:
- Negative sentiment → Telegram
- Priority >= 80 → Immediate response + alert
- VIP client → Personal signature
"""

import json
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys_path_added = False

try:
    from google_workspace import telegram_send
except ImportError:
    sys_path_added = True
    import sys
    sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
    from google_workspace import telegram_send

DATA_DIR = WORKSPACE / 'zion.app' / 'data'
ESCALATION_DATA = DATA_DIR / 'escalation_log.json'

def should_escalate(sentiment: dict, priority: int, tier: str) -> dict:
    """Determine escalation needs."""
    escalation = {'needs_alert': False, 'reason': '', 'level': 'normal'}
    
    # Negative sentiment
    if sentiment.get('sentiment') == 'negative':
        escalation['needs_alert'] = True
        escalation['reason'] = 'negative_sentiment'
        escalation['level'] = 'high'
    
    # High priority
    if priority >= 80:
        escalation['needs_alert'] = True
        escalation['reason'] = escalation.get('reason', '') + '_high_priority'
        escalation['level'] = 'critical'
    
    # VIP with issues
    if tier == 'VIP' and priority >= 60:
        escalation['needs_alert'] = True
        escalation['reason'] = escalation.get('reason', '') + '_vip'
    
    return escalation

def trigger_escalation(alert_data: dict):
    """Send escalation alerts."""
    message = f"🚨 EMAIL ALERT\n{alert_data.get('reason', 'Unknown issue')}"
    
    try:
        telegram_send(message)
    except Exception as e:
        print(f"Telegram alert failed: {e}")

def log_escalation(alert_data: dict):
    """Log escalation event."""
    log = []
    if ESCALATION_DATA.exists():
        log = json.loads(ESCALATION_DATA.read_text())
    
    log.append({
        'timestamp': alert_data.get('timestamp'),
        'reason': alert_data.get('reason'),
        'level': alert_data.get('level')
    })
    
    ESCALATION_DATA.parent.mkdir(parents=True, exist_ok=True)
    ESCALATION_DATA.write_text(json.dumps(log[-100:]))  # Keep last 100

if __name__ == '__main__':
    print("🔔 Smart Escalation Engine ready")
    print("Will alert on negative sentiment, high priority, VIP issues")