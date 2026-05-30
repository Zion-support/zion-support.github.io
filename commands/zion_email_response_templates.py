#!/usr/bin/env python3
"""
Zion Tech Group – Email Response Templates
Templates for generating response variants based on email analysis.
"""

import json
from pathlib import Path
import os

WORKDIR = Path(os.environ.get("ZION_ROOT", str(Path(__file__).resolve().parent.parent)))
TEMPLATES_FILE = WORKDIR / "data" / "email_response_templates.json"

# Default response templates
DEFAULT_TEMPLATES = {
    "acknowledge": [
        "Thank you for reaching out to Zion Tech Group. We've received your message and will review it shortly.",
        "Thanks for your email. We appreciate your interest in our services and will get back to you soon.",
        "Hello! Thank you for contacting Zion Tech Group. Your message is important to us and we'll respond promptly."
    ],
    "answer_question": [
        "Thank you for your question. Here's the information you requested:",
        "I'm happy to help with your inquiry. Please find the details below:",
        "Great question! Here's what you need to know:"
    ],
    "handle_complaint": [
        "We're sorry to hear about your concern. Your satisfaction is important to us, and we're looking into this immediately.",
        "Thank you for bringing this to our attention. We take all feedback seriously and are working to resolve this issue.",
        "We apologize for any inconvenience caused. Please allow us to investigate and we'll get back to you with a solution soon."
    ],
    "provide_info": [
        "Here's the information you requested about our services:",
        "As discussed, please find the details below:",
        "Following up on your request, here's what you need to know:"
    ],
    "human_review": [
        "This message has been flagged for personal attention from our team. We'll respond shortly.",
        "Your message requires special handling and has been escalated to a specialist.",
        "We're reviewing your request carefully and will provide a detailed response soon."
    ],
    "follow_up": [
        "Just following up on our previous conversation. Please let us know if you have any further questions.",
        "Checking in to see if you need any additional assistance with this matter.",
        "Hi there! Just wanted to see if you needed any more information or help."
    ],
    "thank_you": [
        "Thank you for your business and continued partnership with Zion Tech Group.",
        "We appreciate your trust in our services. Thank you!",
        "Thanks for choosing Zion Tech Group. We're grateful for the opportunity to work with you."
    ]
}

def load_templates():
    """Load response templates from file, or create default if not exists."""
    if TEMPLATES_FILE.exists():
        try:
            with open(TEMPLATES_FILE, "r") as f:
                return json.load(f)
        except Exception as e:
            print(f"Warning: Could not load templates from {TEMPLATES_FILE}: {e}")
            return DEFAULT_TEMPLATES
    else:
        # Create the directory and file with default templates
        TEMPLATES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(TEMPLATES_FILE, "w") as f:
            json.dump(DEFAULT_TEMPLATES, f, indent=2)
        return DEFAULT_TEMPLATES

def save_templates(templates):
    """Save response templates to file."""
    try:
        TEMPLATES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(TEMPLATES_FILE, "w") as f:
            json.dump(templates, f, indent=2)
        return True
    except Exception as e:
        print(f"Error saving templates: {e}")
        return False

def get_template_variants(action_type, count=3):
    """
    Get response variants for a given action type.
    Returns a list of template strings.
    """
    templates = load_templates()
    variants = templates.get(action_type, [])
    # If we don't have enough variants, return what we have or fallback to acknowledge
    if len(variants) == 0:
        variants = templates.get("acknowledge", ["Thank you for your message."])
    # Return up to 'count' variants
    return variants[:count]

def personalize_template(template, sender_info, email_data):
    """
    Personalize a template with sender information.
    Simple placeholder replacement for now.
    """
    # Replace placeholders
    personalized = template
    personalized = personalized.replace("{sender_name}", sender_info.get("name", "there"))
    personalized = personalized.replace("{sender_company}", sender_info.get("company", ""))
    personalized = personalized.replace("{sender_role}", sender_info.get("role", ""))
    
    # Add specific details if available
    if sender_info.get("interaction_count", 0) > 5:
        # Loyal customer - add appreciation
        if "{loyalty_note}" in personalized:
            personalized = personalized.replace("{loyalty_note}", "We value your continued partnership.")
        else:
            personalized += " We value your continued partnership."
    
    return personalized

def generate_response_options(email_data, analysis, sender_info=None):
    """
    Generate multiple response options ranked by predicted effectiveness.
    This is a simplified version - in the full system, this would use the predictor model.
    """
    if sender_info is None:
        sender_info = {}
    
    # Get predicted best actions from feedback analyzer (would be imported)
    # For now, we'll use a simple rule-based approach to get top actions
    intent = analysis.get("intent", "other")
    urgency = analysis.get("urgency", "low")
    sentiment = analysis.get("sentiment", "neutral")
    
    # Map to action types
    action_map = {
        ("inquiry", "high"): ["answer_question", "provide_info"],
        ("inquiry", "low"): ["provide_info", "answer_question"],
        ("complaint", any): ["handle_complaint", "acknowledge"],
        ("request", any): ["provide_info", "answer_question"],
        ("feedback", any): ["acknowledge", "provide_info"],
        ("other", any): ["acknowledge", "human_review"]
    }
    
    # Determine likely actions
    likely_actions = []
    for (intent_key, urgency_key), actions in action_map.items():
        if intent_key == intent and (urgency_key == urgency or urgency_key == "any"):
            likely_actions = actions
            break
    
    if not likely_actions:
        likely_actions = ["acknowledge", "human_review"]
    
    # Generate response variants for each likely action
    options = []
    for action in likely_actions[:2]:  # Top 2 actions
        variants = get_template_variants(action, count=2)
        for variant in variants:
            personalized = personalize_template(variant, sender_info, email_data)
            options.append({
                "action": action,
                "template": personalized,
                # In a real system, this would come from the predictor model
                "predicted_effectiveness": 0.7  # Placeholder
            })
    
    # Sort by predicted effectiveness (descending)
    options.sort(key=lambda x: x["predicted_effectiveness"], reverse=True)
    return options[:3]  # Return top 3 options

if __name__ == "__main__":
    # Test the templates
    print("📧 Testing Email Response Templates")
    print("=" * 50)
    
    # Load and show some templates
    templates = load_templates()
    print(f"Loaded {len(templates)} template categories")
    
    # Show a few examples
    for category in ["acknowledge", "answer_question", "handle_complaint"]:
        if category in templates:
            print(f"\n{category.upper()} examples:")
            for i, template in enumerate(templates[category][:2], 1):
                print(f"  {i}. {template}")
    
    # Test personalization
    sender_info = {
        "name": "John Doe",
        "company": "Acme Corp",
        "role": "Manager",
        "interaction_count": 7
    }
    email_data = {"subject": "Question about pricing"}
    analysis = {"intent": "inquiry", "urgency": "medium", "sentiment": "neutral"}
    
    options = generate_response_options(email_data, analysis, sender_info)
    print(f"\n🎯 Generated {len(options)} response options:")
    for i, opt in enumerate(options, 1):
        print(f"\n{i}. Action: {opt['action']} (Effectiveness: {opt['predicted_effectiveness']:.0%})")
        print(f"   {opt['template']}")