#!/usr/bin/env python3
"""
Zion Tech Group – Email Response Predictor
Predicts optimal email responses using learned patterns and templates.
"""

import os, json, logging
from datetime import datetime
from pathlib import Path
from typing import List, Dict, Tuple, Optional, Any

# Import local modules
import sys
sys.path.append(str(Path(__file__).parent))

from zion_email_feedback_analyzer import EmailFeedbackAnalyzer
from zion_email_response_templates import get_template_variants, personalize_template, load_templates

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG_FILE = WORKDIR / "logs" / "email_response_predictor.log"
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[logging.FileHandler(LOG_FILE), logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

class EmailResponsePredictor:
    def __init__(self):
        self.analyzer = EmailFeedbackAnalyzer()
        self.templates = load_templates()
        # Load sender history for personalization (same as enhanced agent)
        self.sender_history = self._load_sender_history()
        logger.info("EmailResponsePredictor initialized")
    
    def _load_sender_history(self):
        """Load sender history/CRM data for personalization."""
        crm_path = WORKDIR / "data" / "crm" / "sender_history.json"
        try:
            if crm_path.exists():
                with open(crm_path, "r") as f:
                    data = json.load(f)
                    return data.get("senders", {})
            else:
                logger.warning(f"CRM file not found at {crm_path}")
                return {}
        except Exception as e:
            logger.error(f"Failed to load sender history: {e}")
            return {}
    
    def predict_responses(self, email_data: Dict[str, Any], analysis: Dict[str, Any], sender_info: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        """
        Predict the best response options for an email.
        
        Returns:
            List of dictionaries with keys:
            - action: suggested action type
            - template: personalized response template
            - confidence: predicted effectiveness score (0-1)
            - reasoning: explanation of why this was chosen
        """
        if sender_info is None:
            sender_email = email_data.get("from", "").lower()
            sender_info = self.sender_history.get(sender_email, {})
        
        # Ensure sender_info is a dict
        if not isinstance(sender_info, dict):
            sender_info = {}
        
        # Get predicted actions from feedback analyzer
        predicted_actions = self.analyzer.predict_best_actions(email_data, analysis)
        
        # Generate response options for each predicted action
        options = []
        for action_tuple in predicted_actions[:3]:  # Top 3 actions
            # Handle both (action, confidence) and just action formats
            if isinstance(action_tuple, tuple) and len(action_tuple) == 2:
                action, base_confidence = action_tuple
            else:
                action = str(action_tuple)
                base_confidence = 0.5  # Default confidence
            
            # Get template variants for this action
            variants = get_template_variants(action, count=2)
            
            for variant_template in variants:
                # Personalize the template
                personalized = personalize_template(variant_template, sender_info, email_data)
                
                # Calculate confidence based on:
                # 1. Base confidence from feedback analysis
                # 2. Template-specific adjustments (could be learned)
                # 3. Sender-specific adjustments
                confidence = self._calculate_confidence(
                    float(base_confidence), action, sender_info, email_data, analysis
                )
                
                options.append({
                    "action": action,
                    "template": personalized,
                    "confidence": round(confidence, 3),
                    "reasoning": self._generate_reasoning(action, email_data, analysis, sender_info)
                })
        
        # Sort by confidence descending
        options.sort(key=lambda x: x["confidence"], reverse=True)
        
        # Ensure we have at least one option
        if not options:
            options = self._get_fallback_option(email_data, analysis, sender_info)
        
        return options[:3]  # Return top 3 options
    
    def _calculate_confidence(self, base_confidence: float, action: str, 
                            sender_info: Dict[str, Any], email_data: Dict[str, Any], analysis: Dict[str, Any]) -> float:
        """Calculate final confidence score with adjustments."""
        confidence = base_confidence
        
        # Sender relationship boost
        interaction_count = sender_info.get("interaction_count", 0)
        if interaction_count > 10:
            confidence += 0.05  # Loyal customers get slight boost
        elif interaction_count == 0:
            confidence -= 0.1   # New senders slightly less predictable
        
        # Action-specific adjustments
        if action == "human_review":
            # Human review confidence based on analysis uncertainty
            if analysis.get("intent") == "other" or analysis.get("sentiment") == "neutral":
                confidence += 0.1  # More likely to need human review for unclear emails
        
        elif action in ["answer_question", "provide_info"]:
            # Info-providing actions more confident for clear inquiries
            if analysis.get("intent") == "inquiry":
                confidence += 0.05
        
        elif action == "handle_complaint":
            # Complaint handling more confident for negative sentiment
            if analysis.get("sentiment") == "negative":
                confidence += 0.1
        
        # Ensure confidence stays in bounds
        return max(0.0, min(1.0, confidence))
    
    def _generate_reasoning(self, action: str, email_data: Dict[str, Any], analysis: Dict[str, Any], sender_info: Dict[str, Any]) -> str:
        """Generate a human-readable explanation for the prediction."""
        reasons = []
        
        # Sender-based reasoning
        sender = email_data.get("from", "").lower()
        sender_detail = self.sender_history.get(sender, {})
        if sender_detail.get("interaction_count", 0) > 0:
            reasons.append(f"based on {sender_detail['interaction_count']} previous interactions")
        else:
            reasons.append("sender is new (no prior history)")
        
        # Analysis-based reasoning
        intent = analysis.get("intent", "unknown")
        urgency = analysis.get("urgency", "unknown")
        sentiment = analysis.get("sentiment", "unknown")
        
        if intent != "unknown":
            reasons.append(f"email intent: {intent}")
        if urgency != "unknown":
            reasons.append(f"urgency level: {urgency}")
        if sentiment != "unknown":
            reasons.append(f"sentiment: {sentiment}")
        
        # Action-specific reasoning
        action_reasons = {
            "acknowledge": "simple acknowledgment appropriate",
            "answer_question": "email contains a clear question to answer",
            "handle_complaint": "negative sentiment suggests complaint handling needed",
            "provide_info": "email requests information",
            "human_review": "complex or ambiguous content requires human judgment",
            "follow_up": "part of an ongoing conversation",
            "thank_you": "positive interaction worthy of thanks"
        }
        if action in action_reasons:
            reasons.append(action_reasons[action])
        
        return "; ".join(reasons)
    
    def _get_fallback_option(self, email_data: Dict[str, Any], analysis: Dict[str, Any], sender_info: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Get a fallback option when predictions fail."""
        sender_name = sender_info.get("name", 
                     email_data.get("from", "").split("@")[0] if "@" in email_data.get("from", "") else "there")
        
        fallback_template = f"Hello {sender_name},\n\nThank you for contacting Zion Tech Group. We've received your message and will review it shortly.\n\nBest regards,\nZion Tech Group Team"
        
        return [{
            "action": "acknowledge",
            "template": fallback_template,
            "confidence": 0.5,
            "reasoning": "fallback response due to insufficient data"
        }]
    
    def get_top_prediction(self, email_data: Dict[str, Any], analysis: Dict[str, Any], sender_info: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Get the single highest-confidence prediction."""
        options = self.predict_responses(email_data, analysis, sender_info)
        return options[0] if options else self._get_fallback_option(email_data, analysis, sender_info or {})[0]

def main():
    """Test the predictor with sample data."""
    print("🧠 Testing Email Response Predictor")
    print("=" * 50)
    
    predictor = EmailResponsePredictor()
    
    # Test case 1: Inquiry from known sender
    email1 = {
        "from": "john.doe@example.com",
        "subject": "Question about pricing plans",
        "body": "Hi, I'm interested in your AI services. Can you send me pricing information?"
    }
    analysis1 = {
        "sentiment": "positive",
        "urgency": "medium",
        "intent": "inquiry",
        "suggested_action": "provide_info",
        "auto_reply": "yes",
        "reply_all": "no",
        "draft_reply": ""
    }
    sender_info1 = {
        "name": "John Doe",
        "company": "Example Corp",
        "role": "Manager",
        "interaction_count": 3,
        "last_interaction": "2026-05-20",
        "preferred_tone": "professional",
        "common_topics": ["pricing", "ai services"],
        "relationship_status": "prospect"
    }
    
    print("\n📧 Test Case 1: Pricing inquiry from known sender")
    options1 = predictor.predict_responses(email1, analysis1, sender_info1)
    for i, opt in enumerate(options1, 1):
        print(f"\n{i}. {opt['action'].upper()} (confidence: {opt['confidence']:.0%})")
        print(f"   Reasoning: {opt['reasoning']}")
        print(f"   Response: {opt['template'][:100]}...")
    
    # Test case 2: Complaint from new sender
    email2 = {
        "from": "angry.customer@complaint.com",
        "subject": "Service is not working!",
        "body": "Your AI chatbot is broken and I need help NOW!"
    }
    analysis2 = {
        "sentiment": "negative",
        "urgency": "high",
        "intent": "complaint",
        "suggested_action": "handle_complaint",
        "auto_reply": "yes",
        "reply_all": "no",
        "draft_reply": ""
    }
    sender_info2 = {
        "name": "Angry Customer",
        "company": "Unknown",
        "role": "Customer",
        "interaction_count": 0,
        "last_interaction": "Unknown",
        "preferred_tone": "apologetic",
        "common_topics": [],
        "relationship_status": "unknown"
    }
    
    print("\n📧 Test Case 2: High-urgency complaint from new sender")
    options2 = predictor.predict_responses(email2, analysis2, sender_info2)
    for i, opt in enumerate(options2, 1):
        print(f"\n{i}. {opt['action'].upper()} (confidence: {opt['confidence']:.0%})")
        print(f"   Reasoning: {opt['reasoning']}")
        print(f"   Response: {opt['template'][:100]}...")
    
    # Show top prediction for each
    print("\n🏆 Top Predictions:")
    top1 = predictor.get_top_prediction(email1, analysis1, sender_info1)
    print(f"1. {top1['action']} ({top1['confidence']:.0%}) - {top1['reasoning']}")
    
    top2 = predictor.get_top_prediction(email2, analysis2, sender_info2)
    print(f"2. {top2['action']} ({top2['confidence']:.0%}) - {top2['reasoning']}")

if __name__ == "__main__":
    main()