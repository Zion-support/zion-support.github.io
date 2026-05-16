#!/usr/bin/env python3
"""
Response Learning Engine - Learn from what works

Tracks response outcomes and optimizes future responses
"""

import json
from pathlib import Path
from datetime import datetime, timedelta
from collections import defaultdict

WORKSPACE = Path('/root/.openclaw/workspace')
DATA_DIR = WORKSPACE / 'zion.app' / 'data'
LEARNING_DATA = DATA_DIR / 'response_learning.json'

def load_learning_data():
    if LEARNING_DATA.exists():
        return json.loads(LEARNING_DATA.read_text())
    return {'attempts': [], 'best_patterns': {}}

def save_learning_data(data):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    LEARNING_DATA.write_text(json.dumps(data, indent=2))

def record_response_attempt(msg_id: str, response: str, priority: int, intent: str):
    """Record a response attempt for learning."""
    data = load_learning_data()
    
    data['attempts'].append({
        'msg_id': msg_id,
        'response': response[:100],  # Truncate for storage
        'priority': priority,
        'intent': intent,
        'timestamp': datetime.now().isoformat(),
        'replied': False  # Will be updated if recipient replies
    })
    
    save_learning_data(data)

def mark_reply_received(msg_id: str):
    """Mark that recipient replied to an email."""
    data = load_learning_data()
    
    for attempt in data['attempts']:
        if attempt['msg_id'] == msg_id:
            attempt['replied'] = True
            break
    
    save_learning_data(data)
    update_best_patterns(data)

def update_best_patterns(data):
    """Analyze what response patterns work best."""
    patterns = defaultdict(lambda: {'total': 0, 'replied': 0})
    
    for attempt in data['attempts']:
        key = f"{attempt['intent']}_{attempt['priority']//20*20}"
        patterns[key]['total'] += 1
        if attempt.get('replied'):
            patterns[key]['replied'] += 1
    
    best_patterns = {}
    for key, stats in patterns.items():
        if stats['total'] >= 3:  # Need minimum attempts
            reply_rate = stats['replied'] / stats['total']
            best_patterns[key] = {
                'reply_rate': reply_rate,
                'confidence': min(stats['total'] / 10, 1.0)  # More data = more confidence
            }
    
    data['best_patterns'] = best_patterns
    save_learning_data(data)

def get_optimal_style(intent: str, priority: int) -> str:
    """Get best response style based on learning."""
    data = load_learning_data()
    key = f"{intent}_{priority//20*20}"
    
    pattern = data.get('best_patterns', {}).get(key, {})
    
    if pattern.get('reply_rate', 0) > 0.5 and pattern.get('confidence', 0) > 0.3:
        return 'optimized'
    elif priority >= 70:
        return 'urgent'
    else:
        return 'standard'

if __name__ == '__main__':
    print("📚 Response Learning Engine initialized")
    print("Tracking response outcomes to optimize future replies")