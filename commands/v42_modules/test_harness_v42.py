#!/usr/bin/env python3
"""
V42 Test Harness
Tests Smart Response Router + ReAct Email Analyzer
"""
import sys, json, time
from pathlib import Path

WORKSPACE = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(WORKSPACE / "commands"))

from commands.v42_modules.smart_response_router import route_email, _classify_intent
from commands.v42_modules.react_email_analyzer import ReActEmailAnalyzer


def check(condition, label):
    prefix = "  ✅" if condition else "  ❌"
    print(f"{prefix} {label}")
    return condition


def section(label):
    print(f"\n{'='*50}")
    print(f"  {label}")
    print("=" * 50)


def test_router_intent_classification():
    section("V42-P1: Smart Response Router — Intent Classification")
    
    cases = [
        # (email_dict, expected_intent_fragments, description)
        (
            {"subject": "What is the price for your AI service?", "snippet": "I need a quote for 10 users", "body": ""},
            ["sales_inquiry", "price", "quote"],
            "Sales inquiry with price keyword"
        ),
        (
            {"subject": "Server is down, need help ASAP", "snippet": "Our production server crashed", "body": ""},
            ["support_request", "urgent", "server down"],
            "Urgent support request"
        ),
        (
            {"subject": "Invoice question regarding last payment", "snippet": "I was charged twice", "body": ""},
            ["billing_inquiry", "invoice", "payment"],
            "Billing inquiry"
        ),
        (
            {"subject": "Partnership opportunity with our company", "snippet": "We would like to integrate your API", "body": ""},
            ["partnership", "integration"],
            "Partnership inquiry"
        ),
        (
            {"subject": "Meeting to discuss the project next week", "snippet": "Are you available Tuesday at 3pm?", "body": ""},
            ["meeting_request", "available", "meeting"],
            "Meeting request"
        ),
        (
            {"subject": "Following up on our previous conversation", "snippet": "Just checking in on the proposal", "body": ""},
            ["follow_up", "checking in", "proposal"],
            "Follow up"
        ),
        (
            {"subject": "This is an automated newsletter", "snippet": "Unsubscribe link below", "body": ""},
            ["newsletter", "auto_reply"],
            "Newsletter (should skip)"
        ),
        (
            {"subject": "Your service is terrible, I'm very unhappy", "snippet": "Worst experience ever with your support", "body": ""},
            ["complaint", "negative"],
            "Complaint (negative sentiment)"
        ),
    ]

    passed = 0
    for email, expected_frags, desc in cases:
        intent, conf = _classify_intent(email["subject"], email["snippet"], email.get("body", ""))
        result = route_email(email)
        
        # Check intent was detected
        ok = check(
            result["intent"] != "unknown" or desc.startswith("Newsletter"),
            f"  [{desc}] → intent={intent} (conf={conf})"
        )
        # Check confidence is a valid float
        ok2 = check(isinstance(result["confidence"], float) and 0.0 <= result["confidence"] <= 1.0,
            f"    confidence valid: {result['confidence']}")
        # Check reply_all_recommended is boolean
        ok3 = check(isinstance(result["reply_all_recommended"], bool),
            f"    reply_all_recommended is bool: {result['reply_all_recommended']}")
        # Check priority is set
        ok4 = check(result["priority"] in ("high", "medium", "low"),
            f"    priority={result['priority']}")
        if ok and ok2 and ok3 and ok4:
            passed += 1
    
    print(f"\n  Router passed: {passed}/{len(cases)} cases")
    return passed == len(cases)


def test_router_skip_cases():
    section("V42-P1: Newsletter/AutoReply Detection")
    
    cases = [
        ({"subject": "Automated Message: Your order was shipped", "snippet": "Tracking number inside", "body": ""}, "skip"),
        ({"subject": "Don't reply to this message", "snippet": "Automated notification", "body": ""}, "skip"),
        ({"subject": "Weekly Newsletter — January 2026", "snippet": "Read the latest updates", "body": ""}, "skip"),
    ]
    
    passed = 0
    for email, expected_action in cases:
        result = route_email(email)
        ok = check(
            result["suggested_action"] == "skip",
            f"  {email['subject'][:40]} → {result['suggested_action']}"
        )
        if ok:
            passed += 1
    
    print(f"\n  Skip cases passed: {passed}/{len(cases)}")
    return passed == len(cases)


def test_react_analyzer():
    section("V42-P2: ReAct Email Analyzer")
    
    analyzer = ReActEmailAnalyzer(dry_run=True)
    
    test_emails = [
        {
            "id": "test_001",
            "thread_id": "thread_001",
            "sender": "john.doe@gmail.com",
            "subject": "What packages do you offer for AI automation?",
            "snippet": "Looking for pricing information for your AI services",
            "body": "Hi, we are interested in your AI automation solutions for our enterprise. What packages do you offer?",
            "cc": "",
            "labels": [],
        },
        {
            "id": "test_002",
            "thread_id": "thread_002",
            "sender": "support@acme-corp.com",
            "subject": "URGENT: Production server is DOWN",
            "snippet": "Our server has been offline for 2 hours, customers cannot access our site",
            "body": "URGENT: The production server went down at 9am. We need immediate assistance.",
            "cc": "",
            "labels": ["urgent"],
        },
        {
            "id": "test_003",
            "thread_id": "thread_003",
            "sender": "partners@bigcorp.com",
            "subject": "Partnership opportunity",
            "snippet": "We would like to explore a reseller partnership",
            "body": "Hello, our company is interested in becoming a reseller of your AI solutions.",
            "cc": "",
            "labels": [],
        },
    ]
    
    passed = 0
    for email in test_emails:
        result = analyzer.analyze(email)
        decision = result["decision"]
        
        # Check trace has all 6 steps
        step_names = [s.step for s in result["trace"].steps]
        has_all_steps = check(
            all(step in step_names for step in ["observe", "classify", "plan", "draft", "verify", "send"]),
            f"  [{email['id']}] All 6 ReAct steps: {' → '.join(step_names)}"
        )
        
        # Check decision has required fields
        has_fields = check(
            all(k in decision for k in ["action", "intent", "urgency", "tone", "reply_all", "confidence", "total_elapsed_ms"]),
            f"  [{email['id']}] Decision fields complete"
        )
        
        # Check elapsed time is reasonable (<10s for in-memory analysis)
        is_fast = check(
            decision["total_elapsed_ms"] < 10000,
            f"  [{email['id']}] Elapsed: {decision['total_elapsed_ms']}ms (<10s OK)"
        )
        
        # Check confidence in valid range
        conf_ok = check(
            0.0 <= decision["confidence"] <= 1.0,
            f"  [{email['id']}] Confidence: {decision['confidence']}"
        )
        
        if has_all_steps and has_fields and is_fast and conf_ok:
            passed += 1
        
        print(f"  → Final action: {decision['action']} | intent: {decision['intent']} | urgency: {decision['urgency']}")
    
    print(f"\n  ReAct analyzer passed: {passed}/{len(test_emails)} emails")
    return passed == len(test_emails)


def test_react_verification_fails():
    section("V42-P2: ReAct — Verification Fail on Unfilled Placeholders")
    
    analyzer = ReActEmailAnalyzer(dry_run=True)
    email_with_placeholder = {
        "id": "test_verify_001",
        "thread_id": "thread_verify",
        "sender": "client@example.com",
        "subject": "Question about your service",
        "snippet": "Hello, I have a question",
        "body": "Dear <sender_name>, we would like to propose a meeting regarding <placeholder>.",
        "cc": "",
        "labels": [],
    }
    
    result = analyzer.analyze(email_with_placeholder)
    verdict = result["decision"]
    
    # If body has unfilled placeholder and passes through, QA should catch it
    issues = result["trace"].steps[4].outcome  # verify step outcome
    ok = check(
        "unfilled_placeholder" in str(result["trace"].steps[4].observation) or not result["trace"].steps[4].outcome == "verified",
        f"  Placeholder detected by verify step"
    )
    print(f"  Verification step observation: {result['trace'].steps[4].observation}")
    print(f"  Verification step outcome: {result['trace'].steps[4].outcome}")
    print(f"  Final action: {verdict['action']}")
    
    return ok


def test_react_cc_coverage():
    section("V42-P2: ReAct — Reply-All Coverage Matrix")
    
    test_cases = [
        ("sales_inquiry", False, "Sales → Reply-All NOT recommended"),
        ("billing_inquiry", True, "Billing → Reply-All recommended"),
        ("partnership", True, "Partnership → Reply-All recommended"),
        ("meeting_request", True, "Meeting → Reply-All recommended"),
        ("follow_up", True, "Follow-up → Reply-All recommended"),
        ("support_request", False, "Support → Reply-All NOT recommended"),
        ("complaint", False, "Complaint → Reply-All NOT recommended"),
    ]
    
    analyzer = ReActEmailAnalyzer(dry_run=True)
    passed = 0
    for intent, expected_ra, desc in test_cases:
        email = {
            "id": f"test_{intent}",
            "thread_id": f"thread_{intent}",
            "sender": "test@example.com",
            "subject": f"Test {intent}",
            "snippet": f"Testing {intent}",
            "body": "",
            "cc": "",
            "labels": [],
        }
        result = analyzer.analyze(email)
        ra = result["decision"]["reply_all"]
        ok = check(
            ra == expected_ra,
            f"  {desc} → reply_all={ra}"
        )
        if ok:
            passed += 1
    
    print(f"\n  Reply-All coverage passed: {passed}/{len(test_cases)}")
    return passed == len(test_cases)


def main():
    print("=" * 60)
    print("  V42 Test Harness — Smart Response Router + ReAct Analyzer")
    print("=" * 60)
    
    results = {}
    results["router_intent"] = test_router_intent_classification()
    results["router_skip"] = test_router_skip_cases()
    results["react_analyzer"] = test_react_analyzer()
    results["react_verification"] = test_react_verification_fails()
    results["react_cc_coverage"] = test_react_cc_coverage()
    
    total = sum(1 for v in results.values() if v)
    print(f"\n{'='*60}")
    print(f"  OVERALL: {total}/{len(results)} test groups PASSED")
    print(f"{'='*60}")
    
    return 0 if total == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
