#!/usr/bin/env python3
"""
Zion Intelligence Dashboard - Real-time System Status

Shows status of all intelligence engines and their performance.
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search

def generate_dashboard():
    dashboard = {
        'timestamp': datetime.utcnow().isoformat(),
        'systems': {},
        'metrics': {},
        'recommendations': []
    }
    
    # Check system files
    systems = [
        ('master_intelligence_engine.py', 'V4 Master Engine'),
        ('ultra_intelligence_v5.py', 'V5 Ultra Engine'),
        ('robust_responder_v3.py', 'V3 Robust Responder'),
        ('smart_meeting_scheduler.py', 'Meeting Scheduler'),
        ('sender_behavior_intelligence.py', 'Behavior Intelligence'),
        ('followup_processor.py', 'Follow-up Processor')
    ]
    
    for filename, name in systems:
        filepath = WORKSPACE / 'zion.app' / 'commands' / filename
        if filepath.exists():
            stat = filepath.stat()
            dashboard['systems'][name] = {
                'status': 'ready',
                'size_kb': round(stat.st_size / 1024, 1),
                'path': filename
            }
        else:
            dashboard['systems'][name] = {'status': 'missing', 'path': filename}
    
    # Get email metrics
    try:
        unread = len(gmail_search('label:inbox is:unread', limit=50))
        dashboard['metrics']['unread_emails'] = unread
    except Exception:
        dashboard['metrics']['unread_emails'] = 'error'
    
    # Check data files
    data_files = [
        ('email_kb.json', 'Knowledge Base'),
        ('sender_behavior.json', 'Sender Patterns'),
        ('followups.json', 'Pending Follow-ups')
    ]
    
    for filename, name in data_files:
        filepath = WORKSPACE / 'zion.app' / 'data' / filename
        if filepath.exists():
            try:
                data = json.loads(filepath.read_text())
                if isinstance(data, dict):
                    dashboard['metrics'][f'{name}_entries'] = len(data)
                else:
                    dashboard['metrics'][f'{name}_entries'] = 0
            except Exception:
                dashboard['metrics'][f'{name}_entries'] = 'error'
    
    # Generate recommendations
    if dashboard.get('metrics', {}).get('unread_emails', 0) > 50:
        dashboard['recommendations'].append('High email volume - consider increasing processing limit')
    
    if not any('V5' in s for s in dashboard['systems']):
        dashboard['recommendations'].append('Deploy V5 for emotional intelligence features')
    
    return dashboard

def cmd_run():
    print("📊 ZION INTELLIGENCE DASHBOARD")
    print("=" * 50)
    
    dashboard = generate_dashboard()
    
    print("\n🔧 SYSTEMS STATUS:")
    for name, status in dashboard['systems'].items():
        emoji = "✅" if status['status'] == 'ready' else "❌"
        print(f"   {emoji} {name}: {status['status']} ({status.get('size_kb', 0)}KB)")
    
    print("\n📈 METRICS:")
    for key, value in dashboard['metrics'].items():
        print(f"   • {key}: {value}")
    
    if dashboard['recommendations']:
        print("\n💡 RECOMMENDATIONS:")
        for rec in dashboard['recommendations']:
            print(f"   • {rec}")
    
    # Save dashboard
    out_file = WORKSPACE / 'zion.app' / 'data' / 'dashboard.json'
    out_file.parent.mkdir(parents=True, exist_ok=True)
    out_file.write_text(json.dumps(dashboard, indent=2))
    
    print(f"\n💾 Dashboard saved to {out_file}")

def main():
    cmd_run()

if __name__ == '__main__':
    main()