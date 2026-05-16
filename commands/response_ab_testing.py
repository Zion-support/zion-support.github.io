#!/usr/bin/env python3
"""
Response A/B Testing Tracker - V11

Features:
- Track which response styles get replies
- A/B test different variants
- Learn from successful patterns
"""

import json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
DATA_DIR = WORKSPACE / 'zion.app' / 'data'
AB_TEST_DATA = DATA_DIR / 'ab_test_results.json'

def record_response_variant(msg_id: str, variant: str, priority: int, tier: str):
    """Record which variant was used for this response."""
    data = []
    if AB_TEST_DATA.exists():
        data = json.loads(AB_TEST_DATA.read_text())
    
    data.append({
        'msg_id': msg_id,
        'variant': variant,
        'priority': priority,
        'tier': tier,
        'timestamp': datetime.now().isoformat(),
        'got_reply': False  # Will be updated when reply received
    })
    
    AB_TEST_DATA.parent.mkdir(parents=True, exist_ok=True)
    AB_TEST_DATA.write_text(json.dumps(data[-500:]))  # Keep last 500

def mark_reply_received(msg_id: str):
    """Mark that a reply was received for this message."""
    if not AB_TEST_DATA.exists():
        return
    
    data = json.loads(AB_TEST_DATA.read_text())
    for record in data:
        if record['msg_id'] == msg_id:
            record['got_reply'] = True
            break
    
    AB_TEST_DATA.write_text(json.dumps(data))
    analyze_results(data)

def analyze_results(data):
    """Analyze A/B test results."""
    variant_stats = {}
    for record in data:
        variant = record['variant']
        if variant not in variant_stats:
            variant_stats[variant] = {'total': 0, 'replies': 0}
        variant_stats[variant]['total'] += 1
        if record.get('got_reply'):
            variant_stats[variant]['replies'] += 1
    
    # Save analysis
    analysis = {}
    for variant, stats in variant_stats.items():
        if stats['total'] >= 5:  # Min sample
            analysis[variant] = {
                'reply_rate': stats['replies'] / stats['total'],
                'volume': stats['total']
            }
    
    analysis_file = DATA_DIR / 'ab_test_analysis.json'
    analysis_file.write_text(json.dumps(analysis, indent=2))

def get_best_variant() -> str:
    """Get the currently best performing variant."""
    analysis_file = DATA_DIR / 'ab_test_analysis.json'
    if not analysis_file.exists():
        return 'direct'
    
    analysis = json.loads(analysis_file.read_text())
    best = 'direct'
    best_rate = 0
    
    for variant, stats in analysis.items():
        if stats['reply_rate'] > best_rate and stats['volume'] >= 10:
            best = variant
            best_rate = stats['reply_rate']
    
    return best

if __name__ == '__main__':
    print(f"Best variant: {get_best_variant()}")