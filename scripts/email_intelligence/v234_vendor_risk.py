#!/usr/bin/env python3
"""V234 - AI Email Vendor Risk Scorer
Analyze vendor emails for risk signals and generate vendor scorecards
covering financial stability, responsiveness, compliance, and quality.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class VendorScorecard:
    vendor_name: str
    overall_score: float  # 0-100
    financial_health: float
    responsiveness: float
    compliance_risk: float
    quality_signals: float
    risk_level: str  # "low", "medium", "high", "critical"
    red_flags: List[str]
    green_flags: List[str]
    recommendation: str

class VendorAnalyzer:
    FINANCIAL_RISK_SIGNALS = ["budget cut", "cost reduction", "downsizing", "restructuring", "layoffs", "cash flow", "payment delay", "invoice dispute"]
    FINANCIAL_GREEN_SIGNALS = ["revenue growth", "expansion", "new funding", "profitable", "investment", "hiring"]
    COMPLIANCE_RISK_SIGNALS = ["compliance issue", "audit finding", "regulatory", "violation", "penalty", "fine", "breach", "non-compliant"]
    QUALITY_RED_SIGNALS = ["bug", "defect", "rework", "quality issue", "error rate", "downtime", "outage", "SLA breach"]
    QUALITY_GREEN_SIGNALS = ["99.9%", "uptime", "zero defects", "certified", "award", "excellent quality", "best in class"]
    RESPONSIVENESS_RED = ["sorry for the delay", "apologies for late", "been busy", "getting back to you late"]
    RESPONSIVENESS_GREEN = ["prompt", "quick turnaround", "same day", "immediately", "within hours"]
    
    def score(self, vendor_name: str, emails: List[Dict]) -> VendorScorecard:
        all_text = " ".join(e.get("body", "") + " " + e.get("subject", "") for e in emails).lower()
        red_flags, green_flags = [], []
        
        # Financial
        fin_risk = sum(1 for s in self.FINANCIAL_RISK_SIGNALS if s in all_text)
        fin_green = sum(1 for s in self.FINANCIAL_GREEN_SIGNALS if s in all_text)
        financial = max(0, min(100, 50 + fin_green * 15 - fin_risk * 20))
        if fin_risk > 0: red_flags.append(f"Financial concerns: {fin_risk} signal(s)")
        if fin_green > 0: green_flags.append(f"Financial strength: {fin_green} signal(s)")
        
        # Responsiveness
        resp_red = sum(1 for s in self.RESPONSIVENESS_RED if s in all_text)
        resp_green = sum(1 for s in self.RESPONSIVENESS_GREEN if s in all_text)
        responsiveness = max(0, min(100, 50 + resp_green * 15 - resp_red * 20))
        if resp_red > 0: red_flags.append(f"Slow responses: {resp_red} incident(s)")
        if resp_green > 0: green_flags.append(f"Responsive: {resp_green} signal(s)")
        
        # Compliance
        comp_risk = sum(1 for s in self.COMPLIANCE_RISK_SIGNALS if s in all_text)
        compliance = max(0, min(100, 80 - comp_risk * 25))
        if comp_risk > 0: red_flags.append(f"Compliance risks: {comp_risk} issue(s)")
        
        # Quality
        qual_red = sum(1 for s in self.QUALITY_RED_SIGNALS if s in all_text)
        qual_green = sum(1 for s in self.QUALITY_GREEN_SIGNALS if s in all_text)
        quality = max(0, min(100, 50 + qual_green * 15 - qual_red * 15))
        if qual_red > 0: red_flags.append(f"Quality concerns: {qual_red} signal(s)")
        if qual_green > 0: green_flags.append(f"Quality excellence: {qual_green} signal(s)")
        
        overall = (financial * 0.3 + responsiveness * 0.25 + compliance * 0.25 + quality * 0.2)
        
        if overall >= 75: risk_level, rec = "low", "Recommended — strong vendor relationship"
        elif overall >= 55: risk_level, rec = "medium", "Monitor closely — address identified concerns"
        elif overall >= 35: risk_level, rec = "high", "Review relationship — significant risks detected"
        else: risk_level, rec = "critical", "Consider alternatives — critical risks identified"
        
        return VendorScorecard(vendor_name, round(overall, 1), round(financial, 1),
            round(responsiveness, 1), round(compliance, 1), round(quality, 1),
            risk_level, red_flags, green_flags, rec)

class VendorRiskEngine:
    def __init__(self):
        self.analyzer = VendorAnalyzer()
    
    def score_vendor(self, vendor_name: str, emails: List[Dict],
                      recipients: List[str] = None) -> Dict:
        scorecard = self.analyzer.score(vendor_name, emails)
        return {
            **scorecard.__dict__,
            "emails_analyzed": len(emails),
            "reply_all_required": len(recipients or []) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

if __name__ == "__main__":
    engine = VendorRiskEngine()
    emails = [
        {"subject": "Vendor Update", "body": "We're pleased to report 99.9% uptime this quarter. Revenue growth of 40%. We're hiring 50 new engineers."},
        {"subject": "Invoice #1234", "body": "Please find attached invoice. Same day processing as always. Prompt payment appreciated."},
        {"subject": "Compliance Update", "body": "Our SOC2 certification has been renewed. Zero audit findings. We remain best in class for quality."},
    ]
    print(json.dumps(engine.score_vendor("Acme Corp", emails, ["procurement@zion.com", "finance@zion.com"]), indent=2))
