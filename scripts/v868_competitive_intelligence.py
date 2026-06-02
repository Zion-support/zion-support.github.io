#!/usr/bin/env python3
"""
V868: AI Competitive Intelligence Engine
Market monitoring, win/loss analysis, battle card generation, strategic positioning.
Enforces reply-all for competitive intelligence communications.
"""
import json, re, datetime

class CompetitiveIntelligenceEngine:
    def __init__(self):
        self.intelligence_sources = ["news", "product_updates", "pricing_changes", "customer_feedback", "job_postings", "patent_filings"]
        self.analysis_types = ["win_loss", "feature_comparison", "positioning", "market_share", "strategic_moves"]

    def analyze_competitive_email(self, email):
        body = email.get("body", "").lower()
        subject = email.get("subject", "").lower()
        recipients = email.get("recipients", [])
        cc = email.get("cc", [])
        text = body + " " + subject

        detected_activities = []
        activity_patterns = {
            "market_monitoring": r"market.*monitor|competitor.*news|industry.*trend|market.*intelligence",
            "win_loss_analysis": r"win.*loss|deal.*analysis|competitive.*deal|lost.*deal|won.*deal",
            "battle_cards": r"battle.*card|competitive.*position|objection.*handling|competitor.*comparison",
            "strategic_positioning": r"strategic.*position|market.*position|differentiation|value.*proposition",
            "product_intelligence": r"competitor.*product|feature.*launch|product.*roadmap|competitor.*release",
            "pricing_intelligence": r"competitor.*pric|pricing.*change|discount.*strateg|price.*war"
        }
        for activity, pattern in activity_patterns.items():
            if re.search(pattern, text, re.IGNORECASE):
                detected_activities.append(activity)

        win_loss_report = {}
        if "win_loss_analysis" in detected_activities:
            win_loss_report = {
                "win_rate": "62% (target: 65%)",
                "top_win_reasons": ["Product features", "Customer support", "Integration capabilities"],
                "top_loss_reasons": ["Price", "Existing relationship", "Specific feature gap"],
                "competitor_win_rates": {
                    "Competitor A": "45% win rate against",
                    "Competitor B": "68% win rate against",
                    "Competitor C": "52% win rate against"
                },
                "actionable_insights": [
                    "Strengthen pricing narrative with ROI calculator",
                    "Address feature gap X in Q4 roadmap",
                    "Create displacement playbook for Competitor A"
                ]
            }

        battle_card_data = {}
        if "battle_cards" in detected_activities:
            battle_card_data = {
                "competitors_tracked": 8,
                "key_differentiators": [
                    "Only solution with native AI-powered analytics",
                    "2x faster implementation than competitors",
                    "Industry-leading customer satisfaction (4.8/5.0)"
                ],
                "common_objections": [
                    {"objection": "Too expensive", "response": "ROI calculator shows 3.2x payback in 6 months"},
                    {"objection": "Missing feature X", "response": "Workaround available, native feature in Q1"},
                    {"objection": "Long implementation", "response": "Average 30 days vs competitor 90 days"}
                ],
                "update_frequency": "Weekly automated updates with manual review"
            }

        market_intelligence = {}
        if "market_monitoring" in detected_activities:
            market_intelligence = {
                "alerts_this_week": 23,
                "key_movements": [
                    "Competitor A launched new pricing tier",
                    "Competitor B acquired Company X for $200M",
                    "Competitor C hired new VP Product from our target market"
                ],
                "market_share_trends": "Our share: 18% (+2% YoY), Market leader: 24% (-1% YoY)",
                "strategic_recommendations": [
                    "Monitor Competitor A pricing impact on our deals",
                    "Evaluate acquisition target similar to Company X",
                    "Proactive outreach to accounts where Competitor C is hiring"
                ]
            }

        analysis = {
            "engine": "V868 Competitive Intelligence",
            "timestamp": datetime.datetime.now().isoformat(),
            "detected_activities": detected_activities,
            "win_loss_report": win_loss_report,
            "battle_card_data": battle_card_data,
            "market_intelligence": market_intelligence,
            "reply_all_enforced": len(recipients) + len(cc) > 1
        }

        if len(recipients) + len(cc) > 1:
            analysis["reply_action"] = "REPLY_ALL"
            analysis["reply_to"] = recipients + cc
        else:
            analysis["reply_action"] = "REPLY"
            analysis["reply_to"] = recipients

        if win_loss_report:
            analysis["action"] = "UPDATE_COMPETITIVE_STRATEGY"
            analysis["priority"] = "HIGH"
        elif "battle_cards" in detected_activities:
            analysis["action"] = "REFRESH_BATTLE_CARDS"
            analysis["priority"] = "HIGH"
        else:
            analysis["action"] = "COMPETITIVE_MONITORING"
            analysis["priority"] = "NORMAL"

        return analysis

if __name__ == "__main__":
    engine = CompetitiveIntelligenceEngine()
    test = {
        "subject": "Competitive Intelligence Update - Win/Loss Analysis & Battle Cards",
        "body": "Monthly competitive review. Win rate at 62% (target 65%). Top loss reason is price. "
                "Competitor A launched new pricing tier. Need to update battle cards and "
                "strengthen pricing narrative. Market share trending positive at 18%.",
        "recipients": ["product-marketing@company.com", "sales-enablement@company.com"],
        "cc": ["vp-marketing@company.com", "sales@company.com"]
    }
    result = engine.analyze_competitive_email(test)
    print(json.dumps(result, indent=2))
    print(f"\nReply-All Enforced: {result['reply_all_enforced']}")
    print(f"Action: {result['action']}")
