#!/usr/bin/env python3
"""
Zion Tech Group – Email Feedback Analyzer
Learns from historical email interactions to predict optimal responses.
"""

import os, json, logging
from datetime import datetime, timedelta
from pathlib import Path
from collections import defaultdict, Counter
import re

# Setup logging
WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
LOG_FILE = WORKDIR / "logs" / "email_feedback_analyzer.log"
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[logging.FileHandler(LOG_FILE), logging.StreamHandler()]
)
logger = logging.getLogger(__name__)

FEEDBACK_LOG = WORKDIR / "logs" / "email_feedback.jsonl"
MODEL_FILE = WORKDIR / "data" / "email_response_model.json"

class EmailFeedbackAnalyzer:
    def __init__(self):
        self.model = self.load_model()
        
    def load_model(self):
        """Load the learned model from file."""
        if MODEL_FILE.exists():
            try:
                with open(MODEL_FILE, "r") as f:
                    return json.load(f)
            except Exception as e:
                logger.error(f"Failed to load model: {e}")
        return self.initialize_model()
    
    def initialize_model(self):
        """Initialize a new model structure."""
        return {
            "version": "1.0",
            "last_updated": datetime.utcnow().isoformat(),
            "total_interactions": 0,
            "sender_patterns": {},  # sender_email -> patterns
            "intent_patterns": {},  # intent -> effective actions
            "urgency_patterns": {}, # urgency level -> effective actions
            "sentiment_patterns": {}, # sentiment -> effective actions
            "time_patterns": {},    # time of day -> effective actions
            "action_effectiveness": {}, # action -> success rate
            "response_templates": {}  # template_id -> {usage_count, success_rate}
        }
    
    def save_model(self):
        """Save the model to file."""
        try:
            self.model["last_updated"] = datetime.utcnow().isoformat()
            with open(MODEL_FILE, "w") as f:
                json.dump(self.model, f, indent=2)
            logger.info(f"Model saved to {MODEL_FILE}")
        except Exception as e:
            logger.error(f"Failed to save model: {e}")
    
    def analyze_feedback(self):
        """Analyze all feedback to update the model."""
        if not FEEDBACK_LOG.exists():
            logger.warning("No feedback log found")
            return
        
        logger.info("Analyzing email feedback to update response model...")
        
        # Reset pattern counters for this analysis
        sender_patterns = defaultdict(lambda: defaultdict(int))
        intent_patterns = defaultdict(lambda: defaultdict(int))
        urgency_patterns = defaultdict(lambda: defaultdict(int))
        sentiment_patterns = defaultdict(lambda: defaultdict(int))
        time_patterns = defaultdict(lambda: defaultdict(int))
        action_effectiveness = defaultdict(lambda: {"success": 0, "total": 0})
        
        # Process each feedback entry
        interactions_processed = 0
        with open(FEEDBACK_LOG, "r") as f:
            for line_num, line in enumerate(f, 1):
                try:
                    entry = json.loads(line.strip())
                    interactions_processed += 1
                    
                    # Extract data
                    email_data = {
                        "from": entry.get("from", "").lower(),
                        "subject": entry.get("subject", ""),
                        "body_preview": entry.get("body_preview", ""),
                        "timestamp": entry.get("timestamp")
                    }
                    analysis = entry.get("analysis", {})
                    action_taken = entry.get("action_taken", "")
                    
                    # Determine if action was successful (simple heuristic)
                    success = self._is_action_successful(action_taken, analysis)
                    
                    # Update patterns
                    self._update_sender_patterns(sender_patterns, email_data, action_taken, success)
                    self._update_intent_patterns(intent_patterns, analysis, action_taken, success)
                    self._update_urgency_patterns(urgency_patterns, analysis, action_taken, success)
                    self._update_sentiment_patterns(sentiment_patterns, analysis, action_taken, success)
                    self._update_time_patterns(time_patterns, email_data, action_taken, success)
                    self._update_action_effectiveness(action_effectiveness, action_taken, success)
                    
                except json.JSONDecodeError as e:
                    logger.warning(f"Invalid JSON on line {line_num}: {e}")
                except Exception as e:
                    logger.error(f"Error processing feedback line {line_num}: {e}")
        
        # Update model with new patterns (weighted average with existing)
        self._merge_patterns(self.model["sender_patterns"], sender_patterns)
        self._merge_patterns(self.model["intent_patterns"], intent_patterns)
        self._merge_patterns(self.model["urgency_patterns"], urgency_patterns)
        self._merge_patterns(self.model["sentiment_patterns"], sentiment_patterns)
        self._merge_patterns(self.model["time_patterns"], time_patterns)
        self._merge_action_effectiveness(self.model["action_effectiveness"], action_effectiveness)
        
        self.model["total_interactions"] += interactions_processed
        self.save_model()
        
        logger.info(f"Analyzed {interactions_processed} interactions. Model updated.")
    
    def _is_action_successful(self, action_taken, analysis):
        """Determine if an action was successful based on feedback."""
        # Simple heuristics - can be made more sophisticated
        if "human_review" in action_taken:
            # Human review might indicate complexity, not necessarily failure
            return analysis.get("urgency") != "high"  # If not high urgency, human review was good
        elif "auto_reply" in action_taken and "failed" not in action_taken:
            return True
        elif "auto_reply_no_draft" in action_taken:
            return False
        elif "auto_reply_failed" in action_taken:
            return False
        else:
            # Default: assume other actions are neutral/successful
            return True
    
    def _update_sender_patterns(self, patterns, email_data, action_taken, success):
        """Update patterns for a specific sender."""
        sender = email_data["from"]
        if not sender:
            return
            
        key = f"{sender}:{action_taken}"
        patterns[sender][action_taken] += 1 if success else -1  # Positive for success, negative for failure
    
    def _update_intent_patterns(self, patterns, analysis, action_taken, success):
        """Update patterns for email intent."""
        intent = analysis.get("intent", "unknown")
        key = f"{intent}:{action_taken}"
        patterns[intent][action_taken] += 1 if success else -1
    
    def _update_urgency_patterns(self, patterns, analysis, action_taken, success):
        """Update patterns for urgency level."""
        urgency = analysis.get("urgency", "unknown")
        key = f"{urgency}:{action_taken}"
        patterns[urgency][action_taken] += 1 if success else -1
    
    def _update_sentiment_patterns(self, patterns, analysis, action_taken, success):
        """Update patterns for sentiment."""
        sentiment = analysis.get("sentiment", "unknown")
        key = f"{sentiment}:{action_taken}"
        patterns[sentiment][action_taken] += 1 if success else -1
    
    def _update_time_patterns(self, patterns, email_data, action_taken, success):
        """Update patterns for time of day."""
        try:
            if email_data["timestamp"]:
                dt = datetime.fromisoformat(email_data["timestamp"].replace("Z", "+00:00"))
                hour = dt.hour
                time_bucket = f"{hour//3*3}-{(hour//3*3)+3}"  # 3-hour buckets
                key = f"{time_bucket}:{action_taken}"
                patterns[time_bucket][action_taken] += 1 if success else -1
        except Exception:
            pass  # Skip time pattern if timestamp invalid
    
    def _update_action_effectiveness(self, effectiveness, action_taken, success):
        """Update overall effectiveness of an action."""
        effectiveness[action_taken]["success"] += 1 if success else 0
        effectiveness[action_taken]["total"] += 1
    
    def _merge_patterns(self, model_patterns, new_patterns):
        """Merge new patterns into model with weighted average."""
        for key, subdict in new_patterns.items():
            if key not in model_patterns:
                model_patterns[key] = {}
            for subkey, value in subdict.items():
                current = model_patterns[key].get(subkey, 0)
                # Simple weighted average: give new data 30% weight
                model_patterns[key][subkey] = int(current * 0.7 + value * 0.3)
    
    def _merge_action_effectiveness(self, model_eff, new_eff):
        """Merge action effectiveness statistics."""
        for action, stats in new_eff.items():
            if action not in model_eff:
                model_eff[action] = {"success": 0, "total": 0}
            model_eff[action]["success"] += stats["success"]
            model_eff[action]["total"] += stats["total"]
    
    def predict_best_actions(self, email_data, analysis):
        """
        Predict the best actions for an email based on learned patterns.
        Returns a list of (action, confidence_score) tuples sorted by confidence.
        """
        if self.model["total_interactions"] < 5:
            # Not enough data yet - return default predictions
            return self._get_default_predictions(analysis)
        
        scores = defaultdict(float)
        
        # Get sender-based scores
        sender = email_data.get("from", "").lower()
        if sender in self.model["sender_patterns"]:
            for action, score in self.model["sender_patterns"][sender].items():
                scores[action] += score * 0.3  # 30% weight for sender
        
        # Get intent-based scores
        intent = analysis.get("intent", "unknown")
        if intent in self.model["intent_patterns"]:
            for action, score in self.model["intent_patterns"][intent].items():
                scores[action] += score * 0.25  # 25% weight for intent
        
        # Get urgency-based scores
        urgency = analysis.get("urgency", "unknown")
        if urgency in self.model["urgency_patterns"]:
            for action, score in self.model["urgency_patterns"][urgency].items():
                scores[action] += score * 0.2  # 20% weight for urgency
        
        # Get sentiment-based scores
        sentiment = analysis.get("sentiment", "unknown")
        if sentiment in self.model["sentiment_patterns"]:
            for action, score in self.model["sentiment_patterns"][sentiment].items():
                scores[action] += score * 0.15  # 15% weight for sentiment
        
        # Get time-based scores
        try:
            if "timestamp" in email_data and email_data["timestamp"]:
                dt = datetime.fromisoformat(email_data["timestamp"].replace("Z", "+00:00"))
                hour = dt.hour
                time_bucket = f"{hour//3*3}-{(hour//3*3)+3}"
                if time_bucket in self.model["time_patterns"]:
                    for action, score in self.model["time_patterns"][time_bucket].items():
                        scores[action] += score * 0.1  # 10% weight for time
        except Exception:
            pass
        
        # Normalize scores to 0-1 range
        if scores:
            max_score = max(abs(v) for v in scores.values()) if scores else 1
            if max_score > 0:
                for action in scores:
                    scores[action] = (scores[action] + max_score) / (2 * max_score)  # Shift to 0-1
            else:
                # All scores are zero or negative - use default
                return self._get_default_predictions(analysis)
        
        # Convert to list and sort by score descending
        ranked_actions = [(action, score) for action, score in scores.items()]
        ranked_actions.sort(key=lambda x: x[1], reverse=True)
        
        return ranked_actions if ranked_actions else self._get_default_predictions(analysis)
    
    def _get_default_predictions(self, analysis):
        """Get default predictions when insufficient data."""
        # Rule-based defaults based on analysis
        intent = analysis.get("intent", "other")
        urgency = analysis.get("urgency", "low")
        sentiment = analysis.get("sentiment", "neutral")
        
        defaults = []
        
        if intent == "inquiry":
            if urgency == "high":
                defaults = [("answer_question", 0.8), ("provide_info", 0.7)]
            else:
                defaults = [("provide_info", 0.75), ("answer_question", 0.7)]
        elif intent == "complaint":
            defaults = [("handle_complaint", 0.85), ("acknowledge", 0.6)]
        elif intent == "request":
            defaults = [("provide_info", 0.7), ("answer_question", 0.65)]
        elif intent == "feedback":
            defaults = [("acknowledge", 0.7), ("provide_info", 0.6)]
        else:  # other
            defaults = [("acknowledge", 0.6), ("human_review", 0.5)]
        
        # Adjust based on sentiment
        if sentiment == "negative":
            # Boost acknowledge and handle_complaint
            for i, (action, score) in enumerate(defaults):
                if action in ["acknowledge", "handle_complaint"]:
                    defaults[i] = (action, min(0.9, score + 0.15))
        elif sentiment == "positive":
            # Boost acknowledge and provide_info
            for i, (action, score) in enumerate(defaults):
                if action in ["acknowledge", "provide_info"]:
                    defaults[i] = (action, min(0.9, score + 0.1))
        
        # Adjust based on urgency
        if urgency == "high":
            # Boost quick actions
            for i, (action, score) in enumerate(defaults):
                if action in ["acknowledge", "answer_question"]:
                    defaults[i] = (action, min(0.9, score + 0.1))
        
        return defaults[:3]  # Return top 3

def main():
    """Run the feedback analysis."""
    analyzer = EmailFeedbackAnalyzer()
    analyzer.analyze_feedback()
    
    # Print summary
    print(f"\n📊 Email Feedback Analysis Complete")
    print(f"   Total interactions learned: {analyzer.model['total_interactions']}")
    print(f"   Model saved to: {MODEL_FILE}")
    
    # Show top effective actions
    if analyzer.model["action_effectiveness"]:
        print(f"\n🏆 Top Effective Actions:")
        sorted_actions = sorted(
            analyzer.model["action_effectiveness"].items(),
            key=lambda x: x[1]["success"] / max(x[1]["total"], 1),
            reverse=True
        )
        for action, stats in sorted_actions[:5]:
            rate = stats["success"] / max(stats["total"], 1) * 100
            print(f"   {action}: {rate:.1f}% ({stats['success']}/{stats['total']})")

if __name__ == "__main__":
    main()