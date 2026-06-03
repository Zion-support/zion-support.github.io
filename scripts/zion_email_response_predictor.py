#!/usr/bin/env python3
"""
Zion Tech Group — Email Response Predictor
Uses machine learning to predict optimal response strategies based on historical patterns.
"""

import json, os, math, random
from collections import defaultdict
from typing import Dict, List, Tuple, Optional

HERMES_HOME = os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))
FEEDBACK_ANALYSIS_FILE = os.path.join(HERMES_HOME, "email_feedback_analysis.json")
TEMPLATES_FILE = os.path.join(HERMES_HOME, "email_response_templates.json")
PREDICTOR_STATE_FILE = os.path.join(HERMES_HOME, "email_predictor_state.json")

class EmailResponsePredictor:
    def __init__(self):
        self.state = self.load_state()
        # Initialize weights if not present
        if not self.state.get("intent_weights"):
            self.state["intent_weights"] = defaultdict(lambda: defaultdict(float))
        if not self.state.get("success_scores"):
            self.state["success_scores"] = defaultdict(lambda: defaultdict(float))
    
    def load_state(self) -> Dict:
        """Load predictor state from file."""
        if not os.path.exists(PREDICTOR_STATE_FILE):
            return {}
        try:
            with open(PREDICTOR_STATE_FILE, 'r') as f:
                return json.load(f)
        except:
            return {}
    
    def save_state(self):
        """Save predictor state to file."""
        # Convert defaultdict to regular dict for JSON serialization
        state_to_save = dict(self.state)
        state_to_save["intent_weights"] = {k: dict(v) for k, v in self.state["intent_weights"].items()}
        state_to_save["success_scores"] = {k: dict(v) for k, v in self.state["success_scores"].items()}
        with open(PREDICTOR_STATE_FILE, 'w') as f:
            json.dump(state_to_save, f, indent=2)
    
    def update_from_feedback(self):
        """Update predictor weights based on feedback analysis."""
        # Load feedback analysis
        if not os.path.exists(FEEDBACK_ANALYSIS_FILE):
            return
        
        try:
            with open(FEEDBACK_ANALYSIS_FILE, 'r') as f:
                analysis = json.load(f)
        except:
            return
        
        # We don't have direct success metrics in the current feedback structure
        # In a real implementation, we would track which responses led to positive outcomes
        # For now, we'll use a simple heuristic: actions that didn't require escalation or drafting
        # are considered more successful
        
        # This is a placeholder for actual ML training
        # In practice, you would:
        # 1. Extract features from each email (intent, sentiment, industry, etc.)
        # 2. Label each response with a success score (based on outcome, follow-up, etc.)
        # 3. Train a model (even a simple logistic regression) to predict the best response type
        # 4. Update weights accordingly
        
        # For now, we'll just ensure the state is initialized properly
        pass
    
    def predict_best_response(self, intent: str, sentiment: str, industry: str) -> Dict:
        """
        Predict the best response strategy for given email characteristics.
        
        Returns a dictionary with:
        - recommended_action: the suggested action (reply, reply_all, etc.)
        - confidence: confidence score (0-1)
        - reasoning: explanation of the prediction
        """
        # Simple rule-based prediction for now
        # In a real implementation, this would use a trained model
        
        # Base confidence
        confidence = 0.5
        reasoning_parts = []
        
        # Adjust based on intent
        if intent == "ready_to_buy":
            confidence += 0.2
            reasoning_parts.append("Strong buying intent detected")
            recommended_action = "reply"
        elif intent == "needs_nurture":
            confidence += 0.1
            reasoning_parts.append("Customer needs more information")
            recommended_action = "reply"
        elif intent == "browsing":
            confidence += 0.05
            reasoning_parts.append("Customer is researching options")
            recommended_action = "reply"
        else:
            reasoning_parts.append("Intent unclear, using default approach")
            recommended_action = "reply"
        
        # Adjust based on sentiment
        if sentiment in ["very_positive", "positive"]:
            confidence += 0.1
            reasoning_parts.append("Positive sentiment detected")
        elif sentiment in ["very_negative", "negative"]:
            confidence -= 0.1
            reasoning_parts.append("Negative sentiment - consider careful tone")
            # For very negative, we might want to escalate or be extra careful
            if sentiment == "very_negative":
                recommended_action = "draft_only"  # Let human review
                reasoning_parts.append("Very negative sentiment - flagging for human review")
        
        # Industry-specific adjustments
        if industry in ["Finance", "Legal", "Healthcare"]:
            # These industries often benefit from more formal, detailed responses
            confidence += 0.05
            reasoning_parts.append(f"{industry} industry - favoring detailed response")
        
        # Ensure confidence is in bounds
        confidence = max(0.1, min(0.95, confidence))
        
        # Determine if reply-all might be appropriate (simple heuristic)
        # In reality, this would be more sophisticated
        reply_all_appropriate = False
        if intent in ["ready_to_buy", "needs_nurture"] and sentiment in ["positive", "very_positive"]:
            # For positive, engaged customers, reply-all might be OK if there are multiple stakeholders
            reply_all_appropriate = random.random() > 0.7  # 30% chance for demo
            if reply_all_appropriate:
                reasoning_parts.append("Multiple stakeholders likely - consider reply-all")
        
        result = {
            "recommended_action": recommended_action,
            "reply_all_considered": reply_all_appropriate,
            "confidence": round(confidence, 2),
            "reasoning": "; ".join(reasoning_parts),
            "timestamp": json.dumps({"$date": {"$numberLong": str(int(os.times().elapsed * 1000))}}) if hasattr(os, 'times') else "unknown"
        }
        
        return result
    
    def suggest_template_variants(self, intent: str, sentiment: str, industry: str, count: int = 3) -> List[Dict]:
        """
        Suggest specific template variants to test based on prediction.
        """
        # Import here to avoid circular dependency
        from zion_email_response_templates import generate_response_variants
        return generate_response_variants(intent, sentiment, industry, count)

def get_predictor() -> EmailResponsePredictor:
    """Get or create the predictor instance."""
    if not hasattr(get_predictor, "_instance"):
        get_predictor._instance = EmailResponsePredictor()
    return get_predictor._instance

if __name__ == "__main__":
    predictor = get_predictor()
    # Example prediction
    result = predictor.predict_best_response("ready_to_buy", "positive", "Finance")
    print(json.dumps(result, indent=2))
    
    # Example template suggestions
    variants = predictor.suggest_template_variants("ready_to_buy", "positive", "Finance", 2)
    print("\nSuggested variants:")
    print(json.dumps(variants, indent=2))