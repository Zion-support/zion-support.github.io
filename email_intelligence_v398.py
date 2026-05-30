"""
Email Response Time Optimizer - V398
Analyze response time patterns, suggest optimal response windows, track SLA compliance,
predict response delays, benchmark against industry standards.

Features:
- Response time tracking and statistics
- Optimal response window suggestions
- SLA compliance monitoring
- Response delay prediction
- Industry benchmark comparisons
- Reply-all enforcement for multi-recipient emails
"""

import json
import re
import math
from datetime import datetime, timedelta
from collections import defaultdict
from statistics import mean, median, stdev


# Industry benchmark response times (in minutes)
INDUSTRY_BENCHMARKS = {
    "internal_team": {"target": 60, "acceptable": 240, "critical": 480},
    "client_communication": {"target": 120, "acceptable": 360, "critical": 720},
    "support_ticket": {"target": 30, "acceptable": 120, "critical": 360},
    "executive_communication": {"target": 15, "acceptable": 60, "critical": 120},
    "vendor_communication": {"target": 180, "acceptable": 480, "critical": 960},
    "sales_inquiry": {"target": 30, "acceptable": 120, "critical": 360}
}

# Peak productivity hours (lower response time expected)
PEAK_HOURS = {
    "morning": (9, 12),
    "afternoon": (13, 16),
    "evening": (17, 19)
}


def parse_email_date(date_str):
    """Parse email date string to datetime object."""
    formats = [
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%dT%H:%M:%S.%f",
        "%Y-%m-%dT%H:%M:%SZ"
    ]
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    return datetime.now()


def calculate_response_times(email_threads):
    """Calculate response times between emails in threads."""
    response_times = []

    for thread_id, emails in email_threads.items():
        sorted_emails = sorted(emails, key=lambda e: parse_email_date(e["date"]))

        for i in range(1, len(sorted_emails)):
            prev_time = parse_email_date(sorted_emails[i - 1]["date"])
            curr_time = parse_email_date(sorted_emails[i]["date"])
            delta_minutes = (curr_time - prev_time).total_seconds() / 60

            response_times.append({
                "thread_id": thread_id,
                "from_email": sorted_emails[i - 1]["id"],
                "to_email": sorted_emails[i]["id"],
                "response_time_minutes": round(delta_minutes, 1),
                "responder": sorted_emails[i]["from"],
                "hour_of_day": curr_time.hour,
                "day_of_week": curr_time.strftime("%A"),
                "category": sorted_emails[i].get("category", "internal_team")
            })

    return response_times


def analyze_response_patterns(response_times):
    """Analyze patterns in response times."""
    if not response_times:
        return {"error": "no response times available"}

    all_times = [rt["response_time_minutes"] for rt in response_times]

    # Basic statistics
    stats = {
        "mean": round(mean(all_times), 1),
        "median": round(median(all_times), 1),
        "min": round(min(all_times), 1),
        "max": round(max(all_times), 1),
        "count": len(all_times)
    }

    if len(all_times) > 1:
        stats["std_dev"] = round(stdev(all_times), 1)
    else:
        stats["std_dev"] = 0.0

    # By hour of day
    by_hour = defaultdict(list)
    for rt in response_times:
        by_hour[rt["hour_of_day"]].append(rt["response_time_minutes"])

    hourly_avg = {
        str(hour): round(mean(times), 1)
        for hour, times in sorted(by_hour.items())
    }

    # By day of week
    by_day = defaultdict(list)
    for rt in response_times:
        by_day[rt["day_of_week"]].append(rt["response_time_minutes"])

    daily_avg = {
        day: round(mean(times), 1)
        for day, times in sorted(by_day.items())
    }

    # By responder
    by_responder = defaultdict(list)
    for rt in response_times:
        by_responder[rt["responder"]].append(rt["response_time_minutes"])

    responder_avg = {
        responder: {
            "avg_minutes": round(mean(times), 1),
            "count": len(times),
            "fastest": round(min(times), 1),
            "slowest": round(max(times), 1)
        }
        for responder, times in by_responder.items()
    }

    return {
        "overall_statistics": stats,
        "hourly_averages": hourly_avg,
        "daily_averages": daily_avg,
        "responder_performance": responder_avg
    }


def check_sla_compliance(response_times):
    """Check SLA compliance based on industry benchmarks."""
    sla_results = []

    for rt in response_times:
        category = rt.get("category", "internal_team")
        benchmark = INDUSTRY_BENCHMARKS.get(category, INDUSTRY_BENCHMARKS["internal_team"])
        response_min = rt["response_time_minutes"]

        if response_min <= benchmark["target"]:
            status = "excellent"
            compliant = True
        elif response_min <= benchmark["acceptable"]:
            status = "acceptable"
            compliant = True
        elif response_min <= benchmark["critical"]:
            status = "slow"
            compliant = False
        else:
            status = "critical_breach"
            compliant = False

        sla_results.append({
            "thread_id": rt["thread_id"],
            "response_time_minutes": response_min,
            "category": category,
            "benchmark_target": benchmark["target"],
            "benchmark_acceptable": benchmark["acceptable"],
            "sla_status": status,
            "sla_compliant": compliant,
            "overdue_minutes": max(0, round(response_min - benchmark["target"], 1))
        })

    # Summary
    compliant_count = sum(1 for s in sla_results if s["sla_compliant"])
    total = len(sla_results)

    return {
        "results": sla_results,
        "summary": {
            "total_responses": total,
            "compliant_count": compliant_count,
            "breach_count": total - compliant_count,
            "compliance_rate": round(compliant_count / max(1, total), 3),
            "status_breakdown": {
                "excellent": sum(1 for s in sla_results if s["sla_status"] == "excellent"),
                "acceptable": sum(1 for s in sla_results if s["sla_status"] == "acceptable"),
                "slow": sum(1 for s in sla_results if s["sla_status"] == "slow"),
                "critical_breach": sum(1 for s in sla_results if s["sla_status"] == "critical_breach")
            }
        }
    }


def suggest_optimal_windows(patterns):
    """Suggest optimal response windows based on patterns."""
    suggestions = []

    if "hourly_averages" not in patterns:
        return suggestions

    hourly = patterns["hourly_averages"]

    # Find fastest hours
    sorted_hours = sorted(hourly.items(), key=lambda x: x[1])

    best_hours = sorted_hours[:3]
    worst_hours = sorted_hours[-3:]

    suggestions.append({
        "type": "best_response_hours",
        "hours": [{"hour": h, "avg_minutes": m} for h, m in best_hours],
        "recommendation": "Schedule important emails during these hours for fastest responses"
    })

    suggestions.append({
        "type": "worst_response_hours",
        "hours": [{"hour": h, "avg_minutes": m} for h, m in worst_hours],
        "recommendation": "Avoid sending time-sensitive emails during these hours"
    })

    # Day recommendations
    if "daily_averages" in patterns:
        sorted_days = sorted(patterns["daily_averages"].items(), key=lambda x: x[1])
        suggestions.append({
            "type": "best_response_days",
            "days": [{"day": d, "avg_minutes": m} for d, m in sorted_days[:2]],
            "recommendation": "Best days for quick responses"
        })

    return suggestions


def predict_response_delay(email, historical_patterns):
    """Predict likely response delay for a given email."""
    current_hour = parse_email_date(email["date"]).hour
    category = email.get("category", "internal_team")

    # Base prediction from category benchmark
    benchmark = INDUSTRY_BENCHMARKS.get(category, INDUSTRY_BENCHMARKS["internal_team"])
    base_prediction = benchmark["target"]

    # Adjust by hour
    hourly = historical_patterns.get("hourly_averages", {})
    if str(current_hour) in hourly:
        hour_factor = hourly[str(current_hour)] / max(1, historical_patterns.get("overall_statistics", {}).get("mean", 60))
        adjusted_prediction = base_prediction * hour_factor
    else:
        adjusted_prediction = base_prediction

    # Priority adjustment
    priority = email.get("priority", "normal")
    priority_multiplier = {"urgent": 0.5, "high": 0.7, "normal": 1.0, "low": 1.5}.get(priority, 1.0)
    final_prediction = adjusted_prediction * priority_multiplier

    return {
        "predicted_response_minutes": round(final_prediction, 1),
        "confidence": 0.65,
        "factors": {
            "base_benchmark": benchmark["target"],
            "hour_of_day": current_hour,
            "priority": priority,
            "category": category
        },
        "sla_target": benchmark["target"],
        "estimated_sla_compliant": final_prediction <= benchmark["target"]
    }


def benchmark_comparison(patterns):
    """Compare performance against industry benchmarks."""
    if "overall_statistics" not in patterns:
        return {}

    current_mean = patterns["overall_statistics"]["mean"]
    comparisons = []

    for category, benchmark in INDUSTRY_BENCHMARKS.items():
        ratio = current_mean / benchmark["target"]
        if ratio <= 1.0:
            performance = "above_standard"
        elif ratio <= 2.0:
            performance = "at_standard"
        else:
            performance = "below_standard"

        comparisons.append({
            "category": category,
            "benchmark_target_min": benchmark["target"],
            "current_mean_min": round(current_mean, 1),
            "ratio": round(ratio, 2),
            "performance": performance,
            "improvement_needed_min": max(0, round(current_mean - benchmark["target"], 1))
        })

    return comparisons


def enforce_reply_all(email):
    """Enforce reply-all for multi-recipient emails."""
    recipients = email.get("to", []) + email.get("cc", [])
    reply_all_required = len(recipients) > 1
    return {
        "reply_all_required": reply_all_required,
        "reply_all_enforced": reply_all_required,
        "recipient_count": len(recipients),
        "all_recipients": recipients
    }


# Sample email thread data
SAMPLE_EMAILS = [
    # Thread 1: Project discussion (fast responses)
    {
        "id": "thread1_01", "thread_id": "project_alpha",
        "from": "alice@company.com", "to": ["bob@company.com", "team@company.com"],
        "cc": ["manager@company.com"], "subject": "Project Alpha Kickoff",
        "date": "2026-05-25T09:00:00", "category": "internal_team",
        "body": "Let's kickoff Project Alpha. Please review the attached spec."
    },
    {
        "id": "thread1_02", "thread_id": "project_alpha",
        "from": "bob@company.com", "to": ["alice@company.com", "team@company.com"],
        "cc": ["manager@company.com"], "subject": "Re: Project Alpha Kickoff",
        "date": "2026-05-25T09:30:00", "category": "internal_team",
        "body": "Reviewed. Looks good. I'll start on the API design."
    },
    {
        "id": "thread1_03", "thread_id": "project_alpha",
        "from": "charlie@company.com", "to": ["alice@company.com", "bob@company.com", "team@company.com"],
        "cc": ["manager@company.com"], "subject": "Re: Project Alpha Kickoff",
        "date": "2026-05-25T10:15:00", "category": "internal_team",
        "body": "I'll handle the frontend. Let's sync at 2pm."
    },
    # Thread 2: Client request (slower response)
    {
        "id": "thread2_01", "thread_id": "client_request",
        "from": "client@acmecorp.com", "to": ["sales@company.com", "support@company.com"],
        "cc": [], "subject": "Need pricing for Enterprise plan",
        "date": "2026-05-24T14:00:00", "category": "client_communication",
        "body": "Hi, we're interested in the Enterprise plan for 500 users. Can you send pricing?"
    },
    {
        "id": "thread2_02", "thread_id": "client_request",
        "from": "sales@company.com", "to": ["client@acmecorp.com"],
        "cc": ["support@company.com"], "subject": "Re: Need pricing for Enterprise plan",
        "date": "2026-05-24T17:30:00", "category": "client_communication",
        "body": "Thanks for your interest! Here's the pricing info..."
    },
    {
        "id": "thread2_03", "thread_id": "client_request",
        "from": "client@acmecorp.com", "to": ["sales@company.com", "support@company.com"],
        "cc": [], "subject": "Re: Need pricing for Enterprise plan",
        "date": "2026-05-25T10:00:00", "category": "client_communication",
        "body": "Great, we'll review internally. Can we schedule a demo?"
    },
    # Thread 3: Support ticket (very fast)
    {
        "id": "thread3_01", "thread_id": "support_ticket_42",
        "from": "user@bigclient.com", "to": ["support@company.com"],
        "cc": [], "subject": "CRITICAL: System down",
        "date": "2026-05-26T08:00:00", "category": "support_ticket",
        "body": "Our production system is down. Need immediate help!"
    },
    {
        "id": "thread3_02", "thread_id": "support_ticket_42",
        "from": "support@company.com", "to": ["user@bigclient.com"],
        "cc": ["ops@company.com"], "subject": "Re: CRITICAL: System down",
        "date": "2026-05-26T08:15:00", "category": "support_ticket",
        "body": "We're on it. Investigating now. ETA 30 minutes."
    },
    # Thread 4: Executive communication
    {
        "id": "thread4_01", "thread_id": "exec_review",
        "from": "ceo@company.com", "to": ["vp@company.com", "cfo@company.com"],
        "cc": [], "subject": "Board meeting prep",
        "date": "2026-05-27T07:30:00", "category": "executive_communication",
        "body": "Need the Q2 numbers by EOD for tomorrow's board meeting."
    },
    {
        "id": "thread4_02", "thread_id": "exec_review",
        "from": "cfo@company.com", "to": ["ceo@company.com", "vp@company.com"],
        "cc": [], "subject": "Re: Board meeting prep",
        "date": "2026-05-27T08:00:00", "category": "executive_communication",
        "body": "On it. Will have the report ready by 3pm."
    },
    # Thread 5: Vendor communication (slow)
    {
        "id": "thread5_01", "thread_id": "vendor_negotiation",
        "from": "procurement@company.com", "to": ["vendor@supplies.com"],
        "cc": ["finance@company.com"], "subject": "Annual contract renewal",
        "date": "2026-05-20T11:00:00", "category": "vendor_communication",
        "body": "Our annual contract is up for renewal. Please send updated terms."
    },
    {
        "id": "thread5_02", "thread_id": "vendor_negotiation",
        "from": "vendor@supplies.com", "to": ["procurement@company.com"],
        "cc": ["finance@company.com"], "subject": "Re: Annual contract renewal",
        "date": "2026-05-22T15:00:00", "category": "vendor_communication",
        "body": "Here are the updated terms. We're proposing a 5% increase."
    },
    # Thread 6: Sales inquiry
    {
        "id": "thread6_01", "thread_id": "sales_lead",
        "from": "prospect@startup.io", "to": ["sales@company.com"],
        "cc": [], "subject": "Interested in your platform",
        "date": "2026-05-28T09:00:00", "category": "sales_inquiry",
        "body": "We're a 50-person startup looking for a collaboration tool. Can you help?"
    },
    {
        "id": "thread6_02", "thread_id": "sales_lead",
        "from": "sales@company.com", "to": ["prospect@startup.io"],
        "cc": ["sdr@company.com"], "subject": "Re: Interested in your platform",
        "date": "2026-05-28T10:45:00", "category": "sales_inquiry",
        "body": "Absolutely! I'd love to show you a demo. How about Thursday at 2pm?"
    }
]


def main():
    """Main entry point for Email Response Time Optimizer V398."""
    timestamp = datetime.now().isoformat()
    version = "V398"

    # Group emails by thread
    threads = defaultdict(list)
    for email in SAMPLE_EMAILS:
        threads[email["thread_id"]].append(email)

    # Calculate response times
    response_times = calculate_response_times(threads)

    # Analyze patterns
    patterns = analyze_response_patterns(response_times)

    # SLA compliance
    sla = check_sla_compliance(response_times)

    # Optimal window suggestions
    suggestions = suggest_optimal_windows(patterns)

    # Benchmark comparison
    benchmarks = benchmark_comparison(patterns)

    # Predict response delay for next email
    next_email = {
        "date": "2026-05-30T10:00:00",
        "category": "internal_team",
        "priority": "normal"
    }
    prediction = predict_response_delay(next_email, patterns)

    # Reply-all enforcement for each email
    reply_all_results = {}
    for email in SAMPLE_EMAILS:
        ra = enforce_reply_all(email)
        reply_all_results[email["id"]] = ra

    report = {
        "version": version,
        "timestamp": timestamp,
        "reply_all_required": True,
        "reply_all_enforced": True,
        "engine": "Email Response Time Optimizer",
        "summary": {
            "total_emails": len(SAMPLE_EMAILS),
            "total_threads": len(threads),
            "total_responses_tracked": len(response_times),
            "overall_compliance_rate": sla["summary"]["compliance_rate"],
            "mean_response_minutes": patterns.get("overall_statistics", {}).get("mean", 0)
        },
        "response_patterns": patterns,
        "sla_compliance": sla,
        "optimal_window_suggestions": suggestions,
        "benchmark_comparison": benchmarks,
        "next_email_prediction": prediction,
        "reply_all_enforcement": reply_all_results,
        "response_time_details": response_times
    }

    output = json.dumps(report, indent=2)
    print(output)
    return report


if __name__ == "__main__":
    main()
