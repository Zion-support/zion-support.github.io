#!/usr/bin/env python3
"""
V442: AI Email Signature Manager
Manages dynamic email signatures with branding, legal disclaimers,
social links, and personalization. Case-by-case analysis.
Enforces reply-all for multi-recipient signature updates.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V442SignatureManager:
    """Manages dynamic email signatures"""
    
    SIGNATURE_TEMPLATES = {
        "professional": {
            "format": """{name}
{title} | {company}
📞 {phone} | ✉️ {email}
📍 {address}
🌐 {website}""",
            "includes": ["name", "title", "company", "phone", "email", "address", "website"]
        },
        "minimal": {
            "format": """{name}
{title} | {company}
{email}""",
            "includes": ["name", "title", "company", "email"]
        },
        "social": {
            "format": """{name}
{title} | {company}
📞 {phone} | ✉️ {email}
🔗 {linkedin} | 🐦 {twitter} | 💼 {github}""",
            "includes": ["name", "title", "company", "phone", "email", "linkedin", "twitter", "github"]
        },
        "legal": {
            "format": """{name}
{title} | {company}
📞 {phone} | ✉️ {email}

{disclaimer}""",
            "includes": ["name", "title", "company", "phone", "email", "disclaimer"]
        }
    }
    
    LEGAL_DISCLAIMERS = {
        "standard": "This email and any attachments are confidential and intended solely for the addressee. If you received this in error, please notify the sender and delete immediately.",
        "gdpr": "This email contains personal data protected under GDPR. Unauthorized disclosure is prohibited. Contact our DPO at dpo@company.com for data requests.",
        "hipaa": "This message contains protected health information (PHI) under HIPAA. Unauthorized disclosure is strictly prohibited and may result in penalties.",
        "financial": "This communication contains confidential financial information. Distribution without authorization violates securities regulations."
    }
    
    def analyze_current_signature(self, email: Dict) -> Dict:
        """Analyze existing email signature"""
        body = email.get("body", "")
        
        # Try to extract signature (usually after -- or ___)
        signature_patterns = [
            r'--\s*\n(.+?)$',
            r'___+\s*\n(.+?)$',
            r'Regards,?\s*\n(.+?)$',
            r'Best regards,?\s*\n(.+?)$',
            r'Sincerely,?\s*\n(.+?)$'
        ]
        
        signature = None
        for pattern in signature_patterns:
            match = re.search(pattern, body, re.DOTALL | re.IGNORECASE)
            if match:
                signature = match.group(1).strip()
                break
        
        if not signature:
            return {
                "has_signature": False,
                "confidence": 0.3,
                "reason": "No signature pattern detected"
            }
        
        # Analyze signature content
        elements_found = {
            "name": bool(re.search(r'[A-Z][a-z]+\s+[A-Z][a-z]+', signature)),
            "title": bool(re.search(r'(?:CEO|CTO|Manager|Director|Engineer|Developer)', signature, re.I)),
            "company": bool(re.search(r'[A-Z][a-z]+\s+(?:Inc|LLC|Corp|Ltd|Group)', signature, re.I)),
            "phone": bool(re.search(r'\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', signature)),
            "email": bool(re.search(r'[\w.+-]+@[\w-]+\.[\w.]+', signature)),
            "website": bool(re.search(r'https?://[\w.-]+', signature)),
            "address": bool(re.search(r'\d+\s+[\w\s]+(?:St|Ave|Blvd|Rd|Dr)', signature, re.I)),
            "social": bool(re.search(r'(?:linkedin|twitter|github|facebook)', signature, re.I))
        }
        
        completeness = sum(elements_found.values()) / len(elements_found)
        
        return {
            "has_signature": True,
            "signature": signature,
            "elements_found": elements_found,
            "completeness_score": round(completeness, 2),
            "missing_elements": [k for k, v in elements_found.items() if not v]
        }
    
    def generate_signature(self, profile: Dict, template_type: str = "professional") -> Dict:
        """Generate email signature from profile"""
        if template_type not in self.SIGNATURE_TEMPLATES:
            template_type = "professional"
        
        template = self.SIGNATURE_TEMPLATES[template_type]
        
        # Fill template with profile data
        signature = template["format"]
        
        replacements = {
            "{name}": profile.get("name", "Your Name"),
            "{title}": profile.get("title", "Your Title"),
            "{company}": profile.get("company", "Your Company"),
            "{phone}": profile.get("phone", "+1 (555) 123-4567"),
            "{email}": profile.get("email", "you@company.com"),
            "{address}": profile.get("address", "123 Main St, City, State 12345"),
            "{website}": profile.get("website", "https://company.com"),
            "{linkedin}": profile.get("linkedin", "linkedin.com/in/yourprofile"),
            "{twitter}": profile.get("twitter", "@yourhandle"),
            "{github}": profile.get("github", "github.com/yourusername"),
            "{disclaimer}": self.LEGAL_DISCLAIMERS.get(profile.get("disclaimer_type", "standard"), "")
        }
        
        for placeholder, value in replacements.items():
            signature = signature.replace(placeholder, value)
        
        # Check completeness
        included_elements = template["includes"]
        profile_completeness = sum(1 for elem in included_elements if profile.get(elem)) / len(included_elements)
        
        return {
            "signature": signature,
            "template_type": template_type,
            "included_elements": included_elements,
            "profile_completeness": round(profile_completeness, 2),
            "character_count": len(signature),
            "line_count": signature.count('\n') + 1
        }
    
    def validate_signature(self, signature: str) -> Dict:
        """Validate signature for common issues"""
        issues = []
        warnings = []
        
        # Check length
        if len(signature) > 500:
            issues.append("Signature too long (>500 characters)")
        elif len(signature) > 300:
            warnings.append("Signature is getting long (>300 characters)")
        
        # Check for broken links
        urls = re.findall(r'https?://[\w.-]+', signature)
        for url in urls:
            if not url.startswith(("http://", "https://")):
                issues.append(f"Invalid URL: {url}")
        
        # Check for valid email
        emails = re.findall(r'[\w.+-]+@[\w-]+\.[\w.]+', signature)
        for email in emails:
            if not re.match(r'^[\w.+-]+@[\w-]+\.[\w.]+$', email):
                issues.append(f"Invalid email: {email}")
        
        # Check for phone format
        phones = re.findall(r'\+?1?\s*\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', signature)
        if not phones:
            warnings.append("No phone number detected")
        
        # Check for social links
        social_patterns = [
            (r'linkedin\.com/in/', "LinkedIn"),
            (r'twitter\.com/', "Twitter"),
            (r'github\.com/', "GitHub")
        ]
        
        social_found = []
        for pattern, platform in social_patterns:
            if re.search(pattern, signature, re.I):
                social_found.append(platform)
        
        if not social_found:
            warnings.append("No social media links detected")
        
        return {
            "is_valid": len(issues) == 0,
            "issues": issues,
            "warnings": warnings,
            "social_links_found": social_found,
            "urls_found": len(urls),
            "emails_found": len(emails),
            "phones_found": len(phones)
        }
    
    def suggest_improvements(self, signature_analysis: Dict, profile: Dict) -> List[str]:
        """Suggest signature improvements"""
        suggestions = []
        
        if not signature_analysis.get("has_signature"):
            suggestions.append("Add a professional signature to build trust")
            return suggestions
        
        # Check completeness
        completeness = signature_analysis.get("completeness_score", 0)
        if completeness < 0.5:
            suggestions.append("Signature is incomplete - add missing contact information")
        
        missing = signature_analysis.get("missing_elements", [])
        if "phone" in missing:
            suggestions.append("Add phone number for direct contact")
        if "website" in missing:
            suggestions.append("Add website link for more information")
        if "address" in missing:
            suggestions.append("Add physical address for legitimacy")
        if "social" in missing:
            suggestions.append("Add social media links for networking")
        
        # Check profile completeness
        if not profile.get("title"):
            suggestions.append("Add your professional title")
        if not profile.get("company"):
            suggestions.append("Add your company name")
        
        return suggestions
    
    def process(self, email: Dict, profile: Dict = None) -> Dict:
        """Process email and manage signature"""
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Analyze current signature
        signature_analysis = self.analyze_current_signature(email)
        
        # Generate new signature if profile provided
        generated_signature = None
        if profile:
            generated_signature = self.generate_signature(profile, profile.get("template_type", "professional"))
        
        # Validate signature
        validation = None
        if signature_analysis.get("has_signature"):
            validation = self.validate_signature(signature_analysis["signature"])
        elif generated_signature:
            validation = self.validate_signature(generated_signature["signature"])
        
        # Suggest improvements
        suggestions = self.suggest_improvements(signature_analysis, profile or {})
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V442 Signature Manager",
            "timestamp": datetime.now().isoformat(),
            "signature_analysis": signature_analysis,
            "generated_signature": generated_signature,
            "validation": validation,
            "suggestions": suggestions,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Signature update for {len(all_recipients)} recipients" if should_reply_all else "Single recipient signature"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "john@company.com",
        "subject": "Meeting Follow-up",
        "body": """Hi team,

Thanks for the productive meeting today. Here are the action items we discussed.

Best regards,

John Smith
Senior Developer | Tech Corp
📞 +1 (555) 123-4567 | ✉️ john@techcorp.com
🌐 https://techcorp.com""",
        "to": ["team@company.com"],
        "cc": ["manager@company.com"]
    }
    
    test_profile = {
        "name": "Kleber Garcia",
        "title": "CEO",
        "company": "Zion Tech Group",
        "phone": "+1 302 464 0950",
        "email": "kleber@ziontechgroup.com",
        "address": "364 E Main St STE 1008, Middletown DE 19709",
        "website": "https://ziontechgroup.com",
        "template_type": "professional"
    }
    
    manager = V442SignatureManager()
    result = manager.process(test_email, test_profile)
    print(json.dumps(result, indent=2))
