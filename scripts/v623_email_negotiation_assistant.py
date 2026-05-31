#!/usr/bin/env python3
"""V623 - Email Negotiation Assistant
Detect negotiation patterns and suggest optimal strategies.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any

class NegotiationAssistant:
    """AI-powered negotiation analysis and strategy suggestions."""
    
    NEGOTIATION_SIGNALS = {
        "price_objection": ["too expensive", "over budget", "price is high", "can't afford"],
        "discount_request": ["discount", "better price", "special offer", "deal"],
        "timeline_pressure": ["urgent", "need it by", "deadline", "asap"],
        "competitor_mention": ["competitor", "other vendor", "alternative", "cheaper option"],
        "authority_limitation": ["need approval", "check with", "get back to you", "discuss internally"],
        "commitment_signal": ["ready to proceed", "let's move forward", "sign the contract"]
    }
    
    STRATEGIES = {
        "price_objection": "Value-based selling: Emphasize ROI and unique value proposition",
        "discount_request": "Conditional discount: Offer discount for longer commitment or larger volume",
        "timeline_pressure": "Urgency matching: Show how you can meet their timeline with premium service",
        "competitor_mention": "Differentiation: Highlight unique advantages and success stories",
        "authority_limitation": "Enable champion: Provide materials to help them sell internally",
        "commitment_signal": "Close the deal: Make it easy to proceed with clear next steps"
    }
    
    def __init__(self):
        self.negotiations = []
    
    def analyze_negotiation(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email for negotiation signals."""
        content = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        detected_signals = self._detect_signals(content)
        negotiation_stage = self._determine_stage(detected_signals)
        leverage_score = self._calculate_leverage(detected_signals, email)
        
        recommended_strategy = self._recommend_strategy(detected_signals, negotiation_stage)
        talking_points = self._generate_talking_points(detected_signals, email)
        risk_factors = self._identify_risks(detected_signals)
        
        next_move = self._suggest_next_move(negotiation_stage, leverage_score)
        
        return {
            "engine": "V623",
            "email_subject": email.get("subject", ""),
            "detected_signals": detected_signals,
            "negotiation_stage": negotiation_stage,
            "leverage_score": round(leverage_score, 1),
            "recommended_strategy": recommended_strategy,
            "talking_points": talking_points,
            "risk_factors": risk_factors,
            "suggested_next_move": next_move,
            "confidence_level": self._calculate_confidence(detected_signals),
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _detect_signals(self, content: str) -> List[Dict]:
        """Detect negotiation signals in content."""
        signals = []
        
        for signal_type, keywords in self.NEGOTIATION_SIGNALS.items():
            for keyword in keywords:
                if keyword in content:
                    signals.append({
                        "type": signal_type,
                        "keyword": keyword,
                        "strength": "strong" if keyword in content[:100] else "moderate"
                    })
        
        return signals[:5]
    
    def _determine_stage(self, signals: List[Dict]) -> str:
        """Determine negotiation stage."""
        signal_types = [s["type"] for s in signals]
        
        if "commitment_signal" in signal_types:
            return "closing"
        elif "price_objection" in signal_types or "discount_request" in signal_types:
            return "objection_handling"
        elif "timeline_pressure" in signal_types:
            return "urgency_negotiation"
        elif "competitor_mention" in signal_types:
            return "competitive_positioning"
        elif "authority_limitation" in signal_types:
            return "internal_approval"
        else:
            return "discovery"
    
    def _calculate_leverage(self, signals: List[Dict], email: Dict) -> float:
        """Calculate negotiation leverage (0-100)."""
        leverage = 50.0
        
        for signal in signals:
            if signal["type"] == "commitment_signal":
                leverage += 20
            elif signal["type"] == "competitor_mention":
                leverage -= 15
            elif signal["type"] == "timeline_pressure":
                leverage += 10
            elif signal["type"] == "authority_limitation":
                leverage -= 10
        
        return max(0, min(100, leverage))
    
    def _recommend_strategy(self, signals: List[Dict], stage: str) -> Dict[str, Any]:
        """Recommend negotiation strategy."""
        primary_signal = signals[0]["type"] if signals else "general"
        
        return {
            "primary_strategy": self.STRATEGIES.get(primary_signal, "Build rapport and understand needs"),
            "stage": stage,
            "approach": "collaborative" if len(signals) < 3 else "assertive",
            "key_message": self._generate_key_message(primary_signal, stage)
        }
    
    def _generate_talking_points(self, signals: List[Dict], email: Dict) -> List[str]:
        """Generate talking points for response."""
        points = []
        
        for signal in signals[:3]:
            if signal["type"] == "price_objection":
                points.append("Highlight ROI: Show how solution pays for itself")
                points.append("Break down cost per use/benefit")
            elif signal["type"] == "discount_request":
                points.append("Offer value-add instead of discount when possible")
                points.append("Tie discount to commitment (annual vs monthly)")
            elif signal["type"] == "timeline_pressure":
                points.append("Confirm exact deadline and consequences of missing it")
                points.append("Offer premium timeline with clear pricing")
            elif signal["type"] == "competitor_mention":
                points.append("Acknowledge competitor respectfully")
                points.append("Highlight unique differentiators and proof points")
        
        if not points:
            points.append("Ask open-ended questions to understand needs better")
            points.append("Share relevant case studies or testimonials")
        
        return points[:5]
    
    def _identify_risks(self, signals: List[Dict]) -> List[str]:
        """Identify negotiation risks."""
        risks = []
        
        signal_types = [s["type"] for s in signals]
        
        if "competitor_mention" in signal_types:
            risks.append("Risk of losing to competitor - differentiate strongly")
        
        if "price_objection" in signal_types and "authority_limitation" in signal_types:
            risks.append("Budget constraints may be real - explore flexible options")
        
        if len(signals) > 3:
            risks.append("Multiple objections suggest misalignment - reassess fit")
        
        if not risks:
            risks.append("Low risk - proceed with confidence")
        
        return risks
    
    def _suggest_next_move(self, stage: str, leverage: float) -> str:
        """Suggest next move in negotiation."""
        if stage == "closing" and leverage > 70:
            return "Send contract and create urgency with limited-time offer"
        elif stage == "objection_handling":
            return "Address objections with specific proof points and case studies"
        elif stage == "discovery":
            return "Ask deeper questions to uncover pain points and budget"
        elif leverage < 40:
            return "Strengthen position with unique value demonstration"
        else:
            return "Move forward with proposed solution and next steps"
    
    def _calculate_confidence(self, signals: List[Dict]) -> str:
        """Calculate confidence level in analysis."""
        if len(signals) >= 3:
            return "high"
        elif len(signals) >= 1:
            return "medium"
        return "low"
    
    def _generate_key_message(self, signal_type: str, stage: str) -> str:
        """Generate key message for response."""
        messages = {
            "price_objection": "Focus on value and ROI, not price",
            "discount_request": "Offer conditional incentives",
            "timeline_pressure": "Show capability to deliver quickly",
            "competitor_mention": "Emphasize unique advantages",
            "authority_limitation": "Provide materials for internal selling",
            "commitment_signal": "Make it easy to say yes"
        }
        return messages.get(signal_type, "Build trust and understand needs")
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.analyze_negotiation(e) for e in emails]
        
        stage_distribution = {}
        for r in results:
            stage = r["negotiation_stage"]
            stage_distribution[stage] = stage_distribution.get(stage, 0) + 1
        
        avg_leverage = sum(r["leverage_score"] for r in results) / len(results) if results else 50
        
        return {
            "engine": "V623 - Negotiation Assistant",
            "total_analyzed": len(results),
            "stage_distribution": stage_distribution,
            "average_leverage_score": round(avg_leverage, 1),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = NegotiationAssistant()
    test_emails = [
        {"subject": "Pricing concern", "body": "Your solution looks great but it's too expensive for our budget. Can you offer a discount?",
         "to": ["sales@company.com"], "from": "prospect@client.com"},
        {"subject": "Ready to proceed", "body": "We've reviewed everything and are ready to move forward. Please send the contract.",
         "to": ["sales@company.com", "legal@company.com"], "from": "decision_maker@client.com"}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
