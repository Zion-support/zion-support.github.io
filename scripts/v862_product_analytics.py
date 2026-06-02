#!/usr/bin/env python3
"""
V862: Product Analytics & Feature Adoption Engine
Feature usage tracking, user behavior analysis, retention cohorts, A/B test analysis.
Enforces reply-all for product analytics communications.
"""
import json, re, datetime

class ProductAnalyticsEngine:
    def __init__(self):
        self.metrics_categories = ["acquisition", "activation", "retention", "revenue", "referral"]
        self.cohort_types = ["time_based", "behavior_based", "segment_based"]

    def analyze_product_email(self, email):
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        recipients = email.get("recipients", [])
        cc = email.get("cc", [])
        text = body + " " + subject

        detected_activities = []
        activity_patterns = {
            "feature_adoption": r"feature.*adopt|feature.*usage|feature.*discover|feature.*engagement",
            "retention_analysis": r"retention.*rate|churn.*analysis|cohort.*analysis|user.*retention",
            "ab_testing": r"a/?b.*test|experiment|split.*test|multivariate.*test|variant",
            "user_behavior": r"user.*behavior|user.*journey|funnel.*analysis|path.*analysis|session.*replay",
            "product_led_growth": r"plg|product.?led|freemium|trial.*conversion|self.?serve|viral.*loop",
            "engagement_metrics": r"dau|mau|session.*length|feature.*stickiness|engagement.*score",
            "onboarding": r"onboarding.*flow|activation.*rate|time.*to.*value|aha.*moment"
        }
        for activity, pattern in activity_patterns.items():
            if re.search(pattern, text, re.IGNORECASE):
                detected_activities.append(activity)

        feature_analysis = {}
        if "feature_adoption" in detected_activities:
            feature_analysis = {
                "adoption_curve": "Track feature adoption over time (early adopters → majority)",
                "usage_patterns": "Identify power users vs. casual users",
                "feature_correlation": "Correlate feature usage with retention and revenue",
                "recommendations": [
                    "Improve feature discoverability with in-app guidance",
                    "Create feature-specific onboarding flows",
                    "Identify and promote power user workflows",
                    "A/B test feature positioning and messaging"
                ]
            }

        retention_insights = {}
        if "retention_analysis" in detected_activities:
            retention_insights = {
                "cohort_analysis": "Track retention by signup cohort, feature usage, and segment",
                "churn_predictors": "Identify behaviors that predict churn (declining usage, missing features)",
                "retention_levers": "Actions that improve retention (feature adoption, engagement triggers)",
                "metrics": {"d1_retention": "45%", "d7_retention": "32%", "d30_retention": "18%", "target_d30": "25%"}
            }

        experiment_results = {}
        if "ab_testing" in detected_activities:
            experiment_results = {
                "test_design": "Proper randomization, sample size calculation, significance threshold",
                "metrics_tracked": ["Primary KPI", "Guardrail metrics", "Secondary metrics"],
                "analysis": "Statistical significance, confidence intervals, practical significance",
                "recommendations": [
                    "Run tests for minimum 2 weeks to capture weekly patterns",
                    "Monitor guardrail metrics for unintended consequences",
                    "Segment results by user cohorts for deeper insights",
                    "Document learnings for future experiments"
                ]
            }

        plg_metrics = {}
        if "product_led_growth" in detected_activities:
            plg_metrics = {
                "funnel_metrics": {"signup_rate": "12%", "activation_rate": "45%", "trial_conversion": "8%", "expansion": "15%"},
                "viral_coefficient": "0.3 (target: >1.0 for viral growth)",
                "time_to_value": "Reduce from 15 min to <5 min",
                "recommendations": [
                    "Optimize signup flow to reduce friction",
                    "Accelerate time-to-value with guided onboarding",
                    "Implement viral loops (invite, share, collaborate)",
                    "Create upgrade prompts at value moments"
                ]
            }

        analysis = {
            "engine": "V862 Product Analytics & Feature Adoption",
            "timestamp": datetime.datetime.now().isoformat(),
            "detected_activities": detected_activities,
            "feature_analysis": feature_analysis,
            "retention_insights": retention_insights,
            "experiment_results": experiment_results,
            "plg_metrics": plg_metrics,
            "reply_all_enforced": len(recipients) + len(cc) > 1
        }

        if len(recipients) + len(cc) > 1:
            analysis["reply_action"] = "REPLY_ALL"
            analysis["reply_to"] = recipients + cc
        else:
            analysis["reply_action"] = "REPLY"
            analysis["reply_to"] = recipients

        if "retention_analysis" in detected_activities:
            analysis["action"] = "RETENTION_INTERVENTION"
            analysis["priority"] = "HIGH"
        elif "ab_testing" in detected_activities:
            analysis["action"] = "REVIEW_EXPERIMENT_RESULTS"
            analysis["priority"] = "HIGH"
        else:
            analysis["action"] = "PRODUCT_ANALYTICS_REVIEW"
            analysis["priority"] = "NORMAL"

        return analysis

if __name__ == "__main__":
    engine = ProductAnalyticsEngine()
    test = {
        "subject": "Feature Adoption Drop-off & A/B Test Results",
        "body": "Feature adoption for the new dashboard dropped 30% after launch. "
                "A/B test results show variant B improved activation by 15%. "
                "Retention analysis shows D30 retention at 18%, below our 25% target. "
                "Need to analyze user behavior and improve onboarding flow.",
        "recipients": ["product@company.com", "engineering@company.com"],
        "cc": ["vp-product@company.com", "data@company.com"]
    }
    result = engine.analyze_product_email(test)
    print(json.dumps(result, indent=2))
    print(f"\nReply-All Enforced: {result['reply_all_enforced']}")
    print(f"Action: {result['action']}")
