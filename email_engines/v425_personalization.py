#!/usr/bin/env python3
"""
V425: AI Email Personalization Engine
Analyzes recipient profiles and personalizes email responses based on
communication history, preferences, and relationship context.
Enforces reply-all for multi-recipient personalized emails.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional, Tuple


class V425PersonalizationEngine:
    """Personalizes email responses based on recipient profiles"""
    
    # Communication style indicators
    STYLE_INDICATORS = {
        "formal": {
            "keywords": ["dear", "sincerely", "regards", "respectfully", "cordially"],
            "patterns": [r'^Dear\s+\w+', r'(?:Sincerely|Regards|Respectfully)'],
            "traits": {"greeting": "Dear {name},", "closing": "Best regards,", "tone": "professional"}
        },
        "casual": {
            "keywords": ["hey", "hi", "thanks", "cheers", "later"],
            "patterns": [r'^(?:Hey|Hi)\s+\w+', r'(?:Thanks|Cheers|Later)'],
            "traits": {"greeting": "Hi {name},", "closing": "Thanks,", "tone": "friendly"}
        },
        "brief": {
            "keywords": ["quick", "short", "tl;dr", "bottom line"],
            "patterns": [r'(?:quick|short)\s+(?:question|note|update)'],
            "traits": {"greeting": "{name},", "closing": "Best,", "tone": "concise"}
        },
        "detailed": {
            "keywords": ["detailed", "comprehensive", "thorough", "in-depth"],
            "patterns": [r'(?:detailed|comprehensive)\s+(?:explanation|breakdown|analysis)'],
            "traits": {"greeting": "Hello {name},", "closing": "Please let me know if you need more details.\n\nBest regards,", "tone": "thorough"}
        }
    }
    
    # Relationship types
    RELATIONSHIP_TYPES = {
        "client": {
            "indicators": ["invoice", "project", "deliverable", "timeline", "budget"],
            "response_style": "professional and solution-oriented",
            "personalization": ["reference project name", "mention last interaction", "offer next steps"]
        },
        "colleague": {
            "indicators": ["team", "meeting", "deadline", "sprint", "standup"],
            "response_style": "collaborative and direct",
            "personalization": ["reference shared goals", "mention team context", "suggest collaboration"]
        },
        "vendor": {
            "indicators": ["quote", "proposal", "service", "contract", "delivery"],
            "response_style": "professional and clear",
            "personalization": ["reference agreement terms", "mention service level", "clarify expectations"]
        },
        "executive": {
            "indicators": ["strategy", "ROI", "quarterly", "board", "stakeholder"],
            "response_style": "executive summary with key metrics",
            "personalization": ["lead with impact", "use metrics", "be concise"]
        }
    }
    
    # Personal details to track
    PERSONAL_DETAILS = {
        "name_patterns": [r'Dear\s+(\w+)', r'Hi\s+(\w+)', r'Hello\s+(\w+)', r'Best regards,?\s*\n\s*(\w+)'],
        "company_patterns": [r'at\s+(\w+(?:\s+\w+)?)', r'from\s+(\w+(?:\s+\w+)?)'],
        "location_patterns": [r'(?:in|from)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)'],
        "interest_patterns": [r'(?:interested in|passionate about|love)\s+([a-zA-Z\s]+)']
    }
    
    def analyze_communication_style(self, emails: List[Dict]) -> Dict:
        """Analyze communication style from email history"""
        if not emails:
            return {"style": "formal", "confidence": 0.5}
        
        style_scores = {style: 0 for style in self.STYLE_INDICATORS.keys()}
        
        for email in emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            
            for style, indicators in self.STYLE_INDICATORS.items():
                # Check keywords
                keyword_matches = sum(1 for kw in indicators["keywords"] if kw in text)
                style_scores[style] += keyword_matches
                
                # Check patterns
                for pattern in indicators["patterns"]:
                    if re.search(pattern, text, re.IGNORECASE):
                        style_scores[style] += 2
        
        # Determine dominant style
        total_score = sum(style_scores.values())
        if total_score > 0:
            dominant_style = max(style_scores, key=style_scores.get)
            confidence = style_scores[dominant_style] / total_score
        else:
            dominant_style = "formal"
            confidence = 0.5
        
        return {
            "style": dominant_style,
            "confidence": round(confidence, 2),
            "scores": style_scores,
            "traits": self.STYLE_INDICATORS[dominant_style]["traits"]
        }
    
    def detect_relationship_type(self, emails: List[Dict]) -> Dict:
        """Detect relationship type from email content"""
        if not emails:
            return {"type": "colleague", "confidence": 0.5}
        
        type_scores = {rtype: 0 for rtype in self.RELATIONSHIP_TYPES.keys()}
        
        for email in emails:
            text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
            
            for rtype, indicators in self.RELATIONSHIP_TYPES.items():
                indicator_matches = sum(1 for ind in indicators["indicators"] if ind in text)
                type_scores[rtype] += indicator_matches
        
        # Determine dominant relationship type
        total_score = sum(type_scores.values())
        if total_score > 0:
            dominant_type = max(type_scores, key=type_scores.get)
            confidence = type_scores[dominant_type] / total_score
        else:
            dominant_type = "colleague"
            confidence = 0.5
        
        return {
            "type": dominant_type,
            "confidence": round(confidence, 2),
            "scores": type_scores,
            "characteristics": self.RELATIONSHIP_TYPES[dominant_type]
        }
    
    def extract_personal_details(self, emails: List[Dict]) -> Dict:
        """Extract personal details from email history"""
        details = {
            "name": None,
            "company": None,
            "location": None,
            "interests": []
        }
        
        for email in emails:
            text = email.get('body', '')
            
            # Extract name
            if not details["name"]:
                for pattern in self.PERSONAL_DETAILS["name_patterns"]:
                    match = re.search(pattern, text)
                    if match:
                        details["name"] = match.group(1)
                        break
            
            # Extract company
            if not details["company"]:
                for pattern in self.PERSONAL_DETAILS["company_patterns"]:
                    match = re.search(pattern, text)
                    if match:
                        details["company"] = match.group(1)
                        break
            
            # Extract location
            if not details["location"]:
                for pattern in self.PERSONAL_DETAILS["location_patterns"]:
                    match = re.search(pattern, text)
                    if match:
                        details["location"] = match.group(1)
                        break
            
            # Extract interests
            for pattern in self.PERSONAL_DETAILS["interest_patterns"]:
                matches = re.findall(pattern, text, re.IGNORECASE)
                details["interests"].extend([m.strip() for m in matches if len(m.strip()) > 3])
        
        # Deduplicate interests
        details["interests"] = list(set(details["interests"]))[:5]
        
        return details
    
    def generate_personalized_response(self, original_email: Dict, profile: Dict) -> Dict:
        """Generate personalized response template"""
        name = profile.get("personal_details", {}).get("name", "there")
        style_traits = profile.get("communication_style", {}).get("traits", {})
        relationship = profile.get("relationship_type", {}).get("type", "colleague")
        
        # Generate greeting
        greeting = style_traits.get("greeting", "Hi {name},").format(name=name)
        
        # Generate closing
        closing = style_traits.get("closing", "Best regards,")
        
        # Generate personalization suggestions
        suggestions = []
        
        if profile.get("personal_details", {}).get("interests"):
            interests = profile["personal_details"]["interests"]
            suggestions.append(f"Reference their interest in {interests[0]} if relevant")
        
        if profile.get("personal_details", {}).get("location"):
            location = profile["personal_details"]["location"]
            suggestions.append(f"Mention {location} if contextually appropriate")
        
        if profile.get("personal_details", {}).get("company"):
            company = profile["personal_details"]["company"]
            suggestions.append(f"Reference their work at {company}")
        
        # Relationship-specific suggestions
        rel_chars = self.RELATIONSHIP_TYPES.get(relationship, {}).get("personalization", [])
        suggestions.extend(rel_chars)
        
        return {
            "greeting": greeting,
            "closing": closing,
            "tone": style_traits.get("tone", "professional"),
            "personalization_suggestions": suggestions,
            "template": f"{greeting}\n\n[Your response here - use {style_traits.get('tone', 'professional')} tone]\n\n{closing}"
        }
    
    def process(self, email: Dict, email_history: List[Dict] = None) -> Dict:
        """Process email and generate personalization profile"""
        if email_history is None:
            email_history = [email]
        
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Analyze profile
        communication_style = self.analyze_communication_style(email_history)
        relationship_type = self.detect_relationship_type(email_history)
        personal_details = self.extract_personal_details(email_history)
        
        # Build profile
        profile = {
            "communication_style": communication_style,
            "relationship_type": relationship_type,
            "personal_details": personal_details
        }
        
        # Generate personalized response
        personalized_response = self.generate_personalized_response(email, profile)
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V425 Personalization Engine",
            "timestamp": datetime.now().isoformat(),
            "profile": profile,
            "personalized_response": personalized_response,
            "email_count_analyzed": len(email_history),
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Personalized response to {len(all_recipients)} recipients" if should_reply_all else "Single recipient"
        }
        
        return result


if __name__ == "__main__":
    # Test with email history
    test_history = [
        {
            "sender": "john.smith@acme.com",
            "subject": "Project update",
            "body": "Hi there,\n\nJust wanted to give you a quick update on the project. We're making good progress and should hit the deadline.\n\nCheers,\nJohn",
            "to": ["team@company.com"],
            "cc": []
        },
        {
            "sender": "john.smith@acme.com",
            "subject": "Re: Meeting notes",
            "body": "Hey,\n\nThanks for the notes. I'm passionate about improving our process. Let me know if you need anything from my end.\n\nThanks,\nJohn\nAcme Corp",
            "to": ["team@company.com"],
            "cc": []
        }
    ]
    
    test_email = {
        "sender": "john.smith@acme.com",
        "subject": "Quick question",
        "body": "Hey,\n\nQuick question about the timeline. Can we chat tomorrow?\n\nThanks,\nJohn",
        "to": ["manager@company.com", "lead@company.com"],
        "cc": ["team@company.com"]
    }
    
    engine = V425PersonalizationEngine()
    result = engine.process(test_email, test_history)
    print(json.dumps(result, indent=2))
