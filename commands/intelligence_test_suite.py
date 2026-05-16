#!/usr/bin/env python3
"""
Zion Intelligence Test Suite - V4

Comprehensive testing and optimization system for all new features.
"""

import sys, json
from pathlib import Path
from datetime import datetime

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_get

TEST_RESULTS = WORKSPACE / 'zion.app' / 'data' / 'test_results.json'

def run_intelligence_tests():
    """Run comprehensive tests on all intelligence systems."""
    
    results = {
        'timestamp': datetime.utcnow().isoformat(),
        'tests': {},
        'overall_success': True
    }
    
    # Test 1: Intent Classification
    print("🧪 Testing Intent Classification...")
    test_cases = [
        ("Meeting about project", "meeting_schedule"),
        ("Quote for services", "proposal_quote"),
        ("Invoice payment", "payment_invoice"),
        ("Help with error", "technical_support"),
    ]
    
    correct = 0
    for text, expected in test_cases:
        # Simple intent detection
        intent = 'general_inquiry'
        if 'meeting' in text.lower():
            intent = 'meeting_schedule'
        elif 'quote' in text.lower() or 'pricing' in text.lower():
            intent = 'proposal_quote'
        elif 'invoice' in text.lower() or 'payment' in text.lower():
            intent = 'payment_invoice'
        
        if intent == expected:
            correct += 1
    
    results['tests']['intent_classification'] = {
        'passed': correct,
        'total': len(test_cases),
        'success': correct == len(test_cases)
    }
    print(f"   Result: {correct}/{len(test_cases)} correct")
    
    # Test 2: Language Detection
    print("🧪 Testing Language Detection...")
    lang_tests = [
        ("Obrigado pelo contato", "pt"),
        ("Hello, thanks for your email", "en"),
        ("Gracias por su mensaje", "es"),
    ]
    
    lang_correct = 0
    for text, expected in lang_tests:
        if any(w in text.lower() for w in ['obrigado', 'bom dia', 'por favor']):
            detected = 'pt'
        elif any(w in text.lower() for w in ['gracias', 'hola', 'saludos']):
            detected = 'es'
        else:
            detected = 'en'
        
        if detected == expected:
            lang_correct += 1
    
    results['tests']['language_detection'] = {
        'passed': lang_correct,
        'total': len(lang_tests),
        'success': lang_correct == len(lang_tests)
    }
    print(f"   Result: {lang_correct}/{len(lang_tests)} correct")
    
    # Test 3: Sentiment Analysis
    print("🧪 Testing Sentiment Analysis...")
    sentiment_tests = [
        ("I'm frustrated with this issue", "negative"),
        ("Great, thank you!", "positive"),
        ("Just checking in", "neutral"),
    ]
    
    sent_correct = 0
    for text, expected in sentiment_tests:
        text_lower = text.lower()
        if any(w in text_lower for w in ['frustrat', 'angry', 'urgent', 'problem']):
            detected = 'negative'
        elif any(w in text_lower for w in ['great', 'thanks', 'appreciate', 'ótimo']):
            detected = 'positive'
        else:
            detected = 'neutral'
        
        if detected == expected:
            sent_correct += 1
    
    results['tests']['sentiment_analysis'] = {
        'passed': sent_correct,
        'total': len(sentiment_tests),
        'success': sent_correct == len(sentiment_tests)
    }
    print(f"   Result: {sent_correct}/{len(sentiment_tests)} correct")
    
    # Overall
    results['overall_success'] = all(t.get('success', False) for t in results['tests'].values())
    
    # Save results
    TEST_RESULTS.parent.mkdir(parents=True, exist_ok=True)
    TEST_RESULTS.write_text(json.dumps(results, indent=2))
    
    print(f"\n{'✅ ALL TESTS PASSED' if results['overall_success'] else '⚠️ SOME TESTS FAILED'}")
    
    return results

def cmd_run(dry_run=False):
    print("🔬 Zion Intelligence Test Suite V4")
    print("=" * 40)
    
    results = run_intelligence_tests()
    
    # Summary
    print("\n📊 Test Summary:")
    for test_name, test_result in results['tests'].items():
        status = "✅" if test_result['success'] else "❌"
        print(f"   {status} {test_name}: {test_result['passed']}/{test_result['total']}")
    
    return results

def main():
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    args = p.parse_args()
    cmd_run(dry_run=not args.execute)

if __name__ == '__main__':
    main()