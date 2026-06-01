#!/usr/bin/env python3
"""
Zion Tech Group — Email Response Templates v1.0
Generates intelligent, personalized response templates based on email intent, sentiment, and industry.
Part of the predictive email responder system (V44+).
"""

import json, os, re
from datetime import datetime

HERMES_HOME = os.environ.get("HERMES_HOME", os.path.expanduser("~/.hermes"))
TEMPLATES_DIR = os.path.join(HERMES_HOME, "email_templates")
TEMPLATES_FILE = os.path.join(TEMPLATES_DIR, "response_templates.json")

os.makedirs(TEMPLATES_DIR, exist_ok=True)

# Contact information (must match the responder)
CONTACT = {
    "name": "Kleber Garcia", "company": "Zion Tech Group",
    "phone": "+1 302 464 0950", "email": "kleber@ziontechgroup.com",
    "website": "https://ziontechgroup.com",
    "address": "364 E Main St STE 1008, Middletown, DE 19709",
}

# Industry-specific vocabularies and CTAs
INDUSTRY_VOCAB = {
    "Finance": {
        "greetings": ["Dear", "Hello", "Hi"],
        "focus_phrases": [
            "ROI optimization", "risk management", "financial compliance", 
            "wealth growth strategies", "capital preservation", "investment performance"
        ],
        "ctas": [
            "schedule a portfolio review", "discuss your investment strategy", 
            "explore wealth management options", "review your financial plan",
            "analyze your risk exposure", "optimize your asset allocation"
        ],
        "closing_phrases": [
            "Warm regards", "Best regards", "Sincerely", "Respectfully"
        ]
    },
    "Healthcare": {
        "greetings": ["Hello", "Hi", "Dear"],
        "focus_phrases": [
            "patient outcomes", "regulatory compliance", "operational efficiency",
            "care quality improvement", "cost reduction", "technology adoption"
        ],
        "ctas": [
            "arrange a compliance consultation", "discuss patient care solutions",
            "explore healthcare IT optimization", "review your workflow efficiency",
            "assess your technology needs", "plan a system upgrade"
        ],
        "closing_phrases": [
            "Warm regards", "Best regards", "Sincerely", "With appreciation"
        ]
    },
    "Technology": {
        "greetings": ["Hi", "Hello", "Dear"],
        "focus_phrases": [
            "scalability", "innovation", "performance optimization",
            "security enhancement", "cost efficiency", "digital transformation"
        ],
        "ctas": [
            "book a technical demo", "discuss your infrastructure needs",
            "explore cloud migration options", "review your security posture",
            "analyze your performance bottlenecks", "plan a technology roadmap"
        ],
        "closing_phrases": [
            "Best regards", "Thanks and best", "Sincerely", "Looking forward"
        ]
    },
    "General": {
        "greetings": ["Hello", "Hi", "Dear"],
        "focus_phrases": [
            "business growth", "operational excellence", "customer satisfaction",
            "process improvement", "cost savings", "competitive advantage"
        ],
        "ctas": [
            "schedule a free consultation", "discuss your business needs",
            "explore solution options", "review your current challenges",
            "analyze opportunities for improvement", "plan a strategic approach"
        ],
        "closing_phrases": [
            "Best regards", "Warm regards", "Sincerely", "Thank you"
        ]
    }
}

# Sentence starters by sentiment
SENTIMENT_STARTERS = {
    "positive": [
        "Thank you for your positive feedback!",
        "I'm glad to hear that our services resonated with you!",
        "Your enthusiasm is greatly appreciated!",
        "Thanks for sharing your positive experience!",
        "It's wonderful to know we're meeting your expectations!"
    ],
    "negative": [
        "I understand your concerns and appreciate you bringing them to our attention.",
        "Thank you for sharing your feedback - we take these matters seriously.",
        "I apologize for any inconvenience caused and want to make things right.",
        "Your feedback is valuable as we work to improve our services.",
        "Thank you for letting us know about this issue - we're on it."
    ],
    "neutral": [
        "Thank you for reaching out to Zion Tech Group.",
        "I appreciate your inquiry and will provide you with detailed information.",
        "Thanks for contacting us - let me address your questions.",
        "I received your message and will respond with the information you need.",
        "Thank you for your interest in our services."
    ]
}

# Closing phrases by intent
INTENT_CLOSINGS = {
    "ready_to_buy": [
        "Let's move forward with getting you started.",
        "I'll prepare the necessary documentation for our engagement.",
        "Looking forward to helping you achieve your goals.",
        "Let's schedule the kickoff call to begin our partnership.",
        "Excited to work together on this initiative!"
    ],
    "needs_nurture": [
        "I'll keep you informed about relevant updates and insights.",
        "Feel free to reach out if you have any questions as you evaluate.",
        "I'm here to provide information whenever you need it.",
        "Let's stay in touch as you consider your options.",
        "I'll share some case studies that might be relevant to your situation."
    ],
    "meeting": [
        "Looking forward to our discussion.",
        "I'll send a calendar invite shortly.",
        "Prepared to dive into the details during our meeting.",
        "Excited to explore how we can collaborate.",
        "Let's make the most of our time together."
    ],
    "partnership": [
        "I believe we can create significant value together.",
        "Let's explore how our combined strengths can benefit both parties.",
        "Looking forward to discussing potential collaboration areas.",
        "Let's outline the next steps for our partnership discussion.",
        "Excited about the possibilities of working together."
    ],
    "invoice": [
        "Please let me know if you have any questions about the charges.",
        "Payment details are included in the attached invoice.",
        "Thank you for your prompt attention to this matter.",
        "We appreciate your business and timely payment.",
        "Feel free to reach out if you need clarification on any items."
    ],
    "support": [
        "I'm here to help resolve this issue for you.",
        "Let's work together to get this sorted out quickly.",
        "I'll keep you updated on our progress toward resolution.",
        "Thank you for your patience as we address this concern.",
        "We're committed to ensuring your satisfaction."
    ],
    "complaint": [
        "I take your feedback seriously and want to make things right.",
        "Let's discuss how we can address your concerns effectively.",
        "I'm committed to resolving this to your satisfaction.",
        "Thank you for bringing this to our attention - we'll improve.",
        "Let's make sure we get this resolved properly."
    ],
    "rfq": [
        "I'll prepare a detailed proposal based on your requirements.",
        "Let me know if you need any additional information for your evaluation.",
        "Looking forward to providing you with a competitive quote.",
        "I'll ensure our proposal addresses all your specifications.",
        "Thank you for considering Zion Tech Group for your needs."
    ],
    "unknown": [
        "Please let me know if you'd like to discuss further.",
        "I'm here to help with any questions you may have.",
        "Feel free to reach out if you need additional information.",
        "Let's connect if you'd like to explore this further.",
        "I'll be happy to provide more details as needed."
    ]
}

def load_templates():
    """Load response templates from file, return default if file doesn't exist or is invalid."""
    try:
        if os.path.exists(TEMPLATES_FILE):
            with open(TEMPLATES_FILE, 'r') as f:
                return json.load(f)
    except Exception as e:
        print(f"Warning: Could not load templates from {TEMPLATES_FILE}: {e}")
    
    # Return default structure
    return {
        "version": "1.0",
        "last_updated": datetime.now().isoformat(),
        "templates": {}
    }

def save_templates(templates_data):
    """Save templates data to file."""
    try:
        templates_data["last_updated"] = datetime.now().isoformat()
        with open(TEMPLATES_FILE, 'w') as f:
            json.dump(templates_data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error saving templates to {TEMPLATES_FILE}: {e}")
        return False

def get_industry_vocab(industry):
    """Get vocabulary for a specific industry, fallback to General."""
    return INDUSTRY_VOCAB.get(industry, INDUSTRY_VOCAB["General"])

def get_sentiment_starters(sentiment):
    """Get sentence starters for a specific sentiment."""
    return SENTIMENT_STARTERS.get(sentiment, SENTIMENT_STARTERS["neutral"])

def get_intent_closings(intent):
    """Get closing phrases for a specific intent."""
    return INTENT_CLOSINGS.get(intent, INTENT_CLOSINGS["unknown"])

def generate_base_template(intent, sentiment, industry, sender_name="there"):
    """
    Generate a base template structure for customization.
    """
    vocab = get_industry_vocab(industry)
    starters = get_sentiment_starters(sentiment)
    closings = get_intent_closings(intent)
    
    # Select random elements (in practice, would use weights or ML)
    import random
    greeting = random.choice(vocab["greetings"])
    focus = random.choice(vocab["focus_phrases"])
    cta = random.choice(vocab["ctas"])
    closing = random.choice(vocab["closing_phrases"])
    starter = random.choice(starters)
    intent_closing = random.choice(closings)
    
    # Format greeting based on formality
    if greeting == "Dear" and sender_name != "there":
        greeting_line = f"{greeting} {sender_name},"
    else:
        greeting_line = f"Hello {sender_name}," if sender_name != "there" else "Hello,"
    
    # Build template
    template = f"""{greeting_line}

{starter}

Thank you for reaching out to Zion Tech Group. We specialize in {focus.lower()} that helps businesses like yours achieve better results.

{intent_closing}

Would you like to {cta}?

📞 {CONTACT['phone']}
✉ {CONTACT['email']}

{closing},
{CONTACT['name']}
{CONTACT['company']}"""
    
    return template.strip()

def generate_response_variants(intent_label, sentiment_label, industry, count=3):
    """
    Generate multiple response variants for A/B testing.
    
    Args:
        intent_label (str): Classified intent (e.g., 'ready_to_buy', 'partnership')
        sentiment_label (str): Detected sentiment ('positive', 'negative', 'neutral')
        industry (str): Business sector ('Finance', 'Healthcare', 'Technology', 'General')
        count (int): Number of variants to generate
        
    Returns:
        list: List of variant dictionaries with 'text' and metadata
    """
    variants = []
    
    for i in range(count):
        try:
            # We need a sender_name for the template, but in this context we don't have one.
            # We'll use a placeholder and let the responder fill it in later.
            # For the variant generation, we'll use "there" as the sender_name.
            sender_name = "there"
            
            # Generate base template
            body_text = generate_base_template(intent_label, sentiment_label, industry, sender_name)
            
            # Add variant-specific modifications
            if i == 1:  # Second variant: more formal
                vocab = get_industry_vocab(industry)
                if "Dear" in vocab["greetings"]:
                    # Make more formal
                    lines = body_text.split('\n')
                    if lines and lines[0].startswith("Hello"):
                        lines[0] = lines[0].replace("Hello", "Dear")
                    body_text = '\n'.join(lines)
            elif i == 2:  # Third variant: more concise
                # Make more concise by removing some filler
                lines = body_text.split('\n')
                if len(lines) > 4:
                    # Remove one middle paragraph if it exists
                    if len(lines) > 5:
                        lines.pop(3)  # Remove fourth line
                body_text = '\n'.join(lines)
            
            variant = {
                "id": f"variant_{i+1}",
                "text": body_text,
                "intent": intent_label,
                "sentiment": sentiment_label,
                "industry": industry,
                "version": "1.0",
                "generated_at": datetime.now().isoformat(),
                "metadata": {
                    "formality_level": ["standard", "formal", "concise"][i],
                    "template_type": "predictive_v44"
                }
            }
            variants.append(variant)
            
        except Exception as e:
            print(f"Error generating variant {i+1}: {e}")
            # Add a fallback variant
            sender_name = "there"
            fallback = f"""Hello {sender_name},

Thank you for contacting Zion Tech Group. We specialize in providing {industry.lower()} solutions tailored to your needs.

Would you like to schedule a free consultation to discuss how we can help?

📞 {CONTACT['phone']}
✉ {CONTACT['email']}

Best regards,
{CONTACT['name']}
{CONTACT['company']}"""
            
            variants.append({
                "id": f"fallback_{i+1}",
                "text": fallback,
                "intent": intent_label,
                "sentiment": sentiment_label,
                "industry": industry,
                "version": "1.0",
                "generated_at": datetime.now().isoformat(),
                "metadata": {"fallback": True, "error": str(e)}
            })
    
    return variants

def update_template_from_feedback(intent, sentiment, industry, template_text, rating):
    """
    Update template effectiveness based on user feedback.
    In a full implementation, this would adjust weights or ML models.
    """
    # For now, just log the feedback
    feedback_log = os.path.join(HERMES_HOME, "template_feedback.jsonl")
    try:
        with open(feedback_log, 'a') as f:
            f.write(json.dumps({
                "timestamp": datetime.now().isoformat(),
                "intent": intent,
                "sentiment": sentiment,
                "industry": industry,
                "template_hash": hash(template_text) % 10000,
                "rating": rating,
                "action": "template_performance"
            }) + '\n')
    except Exception as e:
        print(f"Could not write template feedback: {e}")

def get_template_effectiveness(intent, sentiment, industry):
    """
    Get historical effectiveness scores for templates.
    Returns a score from 0-100.
    """
    # Placeholder - in reality would analyze feedback_log
    return 75  # Default moderate effectiveness

if __name__ == "__main__":
    # Example usage
    variants = generate_response_variants("ready_to_buy", "positive", "Finance", 3)
    print(json.dumps(variants, indent=2))