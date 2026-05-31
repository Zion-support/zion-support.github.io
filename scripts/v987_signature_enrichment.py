#!/usr/bin/env python3
"""
V987: Email Signature Enrichment Engine
Extracts company, role, social links, and contact info from email signatures.
Enables auto-CRM enrichment with strict reply-all enforcement.
"""

import re
import hashlib
from datetime import datetime, timezone
from typing import Dict, List, Any


class EmailSignatureEnrichment:
    """Enriches CRM data from email signatures."""

    def __init__(self):
        self.signature_log: List[Dict] = []
        self.reply_all_audit: List[Dict] = []
        self.enrichment_database: Dict[str, Dict] = {}

    def analyze_email_case_by_case(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email signature case by case."""
        analysis = {
            "engine": "V987",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "email_id": email.get("id", hashlib.md5(str(email).encode()).hexdigest()[:12]),
            "analysis_type": "signature_enrichment",
        }

        to_recipients = email.get("to", [])
        cc_recipients = email.get("cc", [])
        all_recipients = to_recipients + cc_recipients
        is_multi_recipient = len(all_recipients) > 1

        body = email.get("body", "")

        # 1. Extract signature block
        signature = self._extract_signature(body)
        analysis["signature_found"] = signature["found"]

        if not signature["found"]:
            analysis["recommended_action"] = "NO_SIGNATURE_FOUND"
            reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
            analysis["reply_all_enforcement"] = reply_all
            return analysis

        # 2. Extract contact information
        contact_info = self._extract_contact_info(signature["text"])
        analysis["contact_info"] = contact_info

        # 3. Extract company information
        company_info = self._extract_company_info(signature["text"])
        analysis["company_info"] = company_info

        # 4. Extract role/title
        role_info = self._extract_role_info(signature["text"])
        analysis["role_info"] = role_info

        # 5. Extract social links
        social_links = self._extract_social_links(signature["text"])
        analysis["social_links"] = social_links

        # 6. Extract location
        location_info = self._extract_location(signature["text"])
        analysis["location_info"] = location_info

        # 7. Enrichment score
        enrichment_score = self._calculate_enrichment_score(
            contact_info, company_info, role_info, social_links, location_info
        )
        analysis["enrichment_score"] = enrichment_score

        # 8. Generate enrichment data
        enrichment_data = self._generate_enrichment_data(
            contact_info, company_info, role_info, social_links, location_info
        )
        analysis["enrichment_data"] = enrichment_data

        # 9. Determine action
        action = self._determine_enrichment_action(enrichment_score, enrichment_data)
        analysis["recommended_action"] = action

        # REPLY-ALL ENFORCEMENT
        reply_all = self._enforce_reply_all(email, all_recipients, is_multi_recipient)
        analysis["reply_all_enforcement"] = reply_all

        self.signature_log.append({
            "email_id": analysis["email_id"],
            "signature_found": signature["found"],
            "enrichment_score": enrichment_score["score"],
            "contact_fields": len([v for v in contact_info.values() if v]),
            "reply_all": reply_all["enforced"],
            "timestamp": analysis["timestamp"],
        })

        return analysis

    def _extract_signature(self, body: str) -> Dict:
        """Extract signature block from email body."""
        # Look for signature delimiters
        delimiters = [
            r'\n--\s*\n',
            r'\n_{3,}\n',
            r'\n-{3,}\n',
            r'\n\*{3,}\n',
            r'\nRegards,\n',
            r'\nBest regards,\n',
            r'\nThanks,\n',
        ]
        
        for delimiter in delimiters:
            match = re.search(delimiter, body, re.IGNORECASE)
            if match:
                signature_text = body[match.end():].strip()
                if len(signature_text) > 20 and len(signature_text) < 2000:
                    return {
                        "found": True,
                        "text": signature_text,
                        "delimiter": delimiter,
                    }
        
        # Fallback: check last 500 characters
        last_part = body[-500:]
        if any(keyword in last_part.lower() for keyword in ["linkedin", "twitter", "phone", "mobile", "www."]):
            return {
                "found": True,
                "text": last_part,
                "delimiter": "fallback",
            }
        
        return {"found": False, "text": ""}

    def _extract_contact_info(self, signature: str) -> Dict:
        """Extract contact information from signature."""
        info = {}
        
        # Phone numbers
        phone_patterns = [
            r'(?:phone|tel|mobile|cell)[:\s]*([+\d\s\-\(\)]+)',
            r'([+]?[\d\s\-\(\)]{10,})',
        ]
        
        for pattern in phone_patterns:
            matches = re.findall(pattern, signature, re.IGNORECASE)
            if matches:
                info["phone"] = matches[0].strip()
                break
        
        # Email addresses
        emails = re.findall(r'[\w\.\-]+@[\w\.\-]+\.\w+', signature)
        if emails:
            info["emails"] = emails[:3]
        
        # Website
        websites = re.findall(r'(?:https?://)?(?:www\.)?([a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?)', signature)
        if websites:
            info["websites"] = [w for w in websites if not any(x in w for x in ["gmail", "yahoo", "hotmail", "outlook"])][:3]
        
        return info

    def _extract_company_info(self, signature: str) -> Dict:
        """Extract company information from signature."""
        info = {}
        
        # Company name patterns
        company_patterns = [
            r'(?:at|from|with)\s+([A-Z][a-zA-Z\s]+(?:Inc|LLC|Ltd|Corp|Company|Group|Technologies|Solutions))',
            r'([A-Z][a-zA-Z\s]+(?:Inc|LLC|Ltd|Corp|Company))',
        ]
        
        for pattern in company_patterns:
            matches = re.findall(pattern, signature)
            if matches:
                info["name"] = matches[0].strip()
                break
        
        # If no explicit company found, try to extract from domain
        if "name" not in info:
            domain_match = re.search(r'@([a-zA-Z0-9\-]+)\.', signature)
            if domain_match:
                domain = domain_match.group(1)
                if not any(x in domain for x in ["gmail", "yahoo", "hotmail", "outlook"]):
                    info["name"] = domain.replace("-", " ").title()
                    info["source"] = "domain"
        
        return info

    def _extract_role_info(self, signature: str) -> Dict:
        """Extract role/title information from signature."""
        info = {}
        
        # Common title patterns
        title_keywords = [
            "CEO", "CTO", "CFO", "COO", "President", "VP", "Vice President",
            "Director", "Manager", "Lead", "Senior", "Principal",
            "Engineer", "Developer", "Architect", "Designer", "Analyst",
            "Consultant", "Specialist", "Coordinator", "Assistant"
        ]
        
        for keyword in title_keywords:
            pattern = rf'\b({keyword}[^,\n]*)'
            match = re.search(pattern, signature, re.IGNORECASE)
            if match:
                info["title"] = match.group(1).strip()
                break
        
        # Department
        departments = ["Engineering", "Sales", "Marketing", "Support", "Operations", "HR", "Finance"]
        for dept in departments:
            if dept.lower() in signature.lower():
                info["department"] = dept
                break
        
        return info

    def _extract_social_links(self, signature: str) -> Dict:
        """Extract social media links from signature."""
        links = {}
        
        social_patterns = {
            "linkedin": r'linkedin\.com/(?:in/|company/)?([a-zA-Z0-9\-_]+)',
            "twitter": r'(?:twitter|x)\.com/([a-zA-Z0-9_]+)',
            "github": r'github\.com/([a-zA-Z0-9\-_]+)',
            "facebook": r'facebook\.com/([a-zA-Z0-9\-_.]+)',
            "instagram": r'instagram\.com/([a-zA-Z0-9_.]+)',
        }
        
        for platform, pattern in social_patterns.items():
            matches = re.findall(pattern, signature, re.IGNORECASE)
            if matches:
                links[platform] = matches[0]
        
        return links

    def _extract_location(self, signature: str) -> Dict:
        """Extract location information from signature."""
        info = {}
        
        # City, State patterns
        location_patterns = [
            r'([A-Z][a-zA-Z\s]+),\s*([A-Z]{2})',
            r'([A-Z][a-zA-Z\s]+),\s*([A-Z][a-zA-Z\s]+)',
        ]
        
        for pattern in location_patterns:
            matches = re.findall(pattern, signature)
            if matches:
                info["city"] = matches[0][0].strip()
                info["state_or_country"] = matches[0][1].strip()
                break
        
        # Country
        countries = ["USA", "United States", "Canada", "UK", "United Kingdom", "Germany", "France", "Australia"]
        for country in countries:
            if country.lower() in signature.lower():
                info["country"] = country
                break
        
        return info

    def _calculate_enrichment_score(self, contact: Dict, company: Dict, 
                                     role: Dict, social: Dict, location: Dict) -> Dict:
        """Calculate enrichment completeness score."""
        score = 0
        factors = []
        
        # Contact info (30 points)
        if contact.get("phone"):
            score += 10
            factors.append("Phone")
        if contact.get("emails"):
            score += 10
            factors.append("Emails")
        if contact.get("websites"):
            score += 10
            factors.append("Websites")
        
        # Company info (25 points)
        if company.get("name"):
            score += 25
            factors.append("Company")
        
        # Role info (20 points)
        if role.get("title"):
            score += 15
            factors.append("Title")
        if role.get("department"):
            score += 5
            factors.append("Department")
        
        # Social links (15 points)
        social_count = len(social)
        score += min(social_count * 5, 15)
        if social_count > 0:
            factors.append(f"Social ({social_count})")
        
        # Location (10 points)
        if location.get("city"):
            score += 10
            factors.append("Location")
        
        score = min(score, 100)
        
        if score >= 80:
            level = "EXCELLENT"
        elif score >= 60:
            level = "GOOD"
        elif score >= 40:
            level = "FAIR"
        else:
            level = "POOR"
        
        return {
            "score": score,
            "level": level,
            "factors": factors,
        }

    def _generate_enrichment_data(self, contact: Dict, company: Dict, 
                                   role: Dict, social: Dict, location: Dict) -> Dict:
        """Generate structured enrichment data for CRM."""
        return {
            "contact": {
                "phone": contact.get("phone"),
                "emails": contact.get("emails", []),
                "websites": contact.get("websites", []),
            },
            "company": {
                "name": company.get("name"),
                "source": company.get("source", "signature"),
            },
            "role": {
                "title": role.get("title"),
                "department": role.get("department"),
            },
            "social_profiles": social,
            "location": location,
        }

    def _determine_enrichment_action(self, score: Dict, data: Dict) -> str:
        """Determine enrichment action."""
        if score["level"] == "EXCELLENT":
            return "AUTO_UPDATE_CRM"
        elif score["level"] == "GOOD":
            return "UPDATE_CRM_WITH_REVIEW"
        elif score["level"] == "FAIR":
            return "PARTIAL_UPDATE"
        else:
            return "INSUFFICIENT_DATA"

    def _enforce_reply_all(self, email: Dict, all_recipients: List, is_multi: bool) -> Dict:
        """STRICT reply-all enforcement."""
        result = {
            "is_multi_recipient": is_multi,
            "recipient_count": len(all_recipients),
            "enforced": False,
            "reason": "",
        }
        if is_multi:
            result["enforced"] = True
            result["reason"] = f"REPLY-ALL ENFORCED: {len(all_recipients)} recipients."
            self.reply_all_audit.append({
                "email_id": email.get("id", "unknown"),
                "enforced": True,
                "timestamp": datetime.now(timezone.utc).isoformat(),
            })
        else:
            result["reason"] = "Single recipient."
        return result

    def get_stats(self) -> Dict:
        if not self.signature_log:
            return {"signatures_processed": 0}
        return {
            "signatures_processed": len(self.signature_log),
            "signatures_found": sum(1 for s in self.signature_log if s["signature_found"]),
            "avg_enrichment_score": sum(s["enrichment_score"] for s in self.signature_log) / len(self.signature_log),
            "reply_all_enforced": len(self.reply_all_audit),
        }


def test_v987():
    engine = EmailSignatureEnrichment()

    # Test 1: Rich signature
    email1 = {
        "id": "sig-001",
        "from": "john.smith@acme.com",
        "to": ["sales@ziontechgroup.com", "partnerships@ziontechgroup.com"],
        "subject": "Partnership inquiry",
        "body": "Hi, interested in partnership.\n\nBest regards,\n\nJohn Smith\nSenior Director of Business Development\nAcme Corporation\nPhone: +1 (555) 123-4567\nEmail: john.smith@acme.com\nLinkedIn: linkedin.com/in/johnsmith\nTwitter: twitter.com/johnsmith\n123 Business Ave, Suite 500\nSan Francisco, CA 94105\nwww.acme.com",
    }
    r1 = engine.analyze_email_case_by_case(email1)
    assert r1["reply_all_enforcement"]["enforced"] is True
    assert r1["signature_found"] is True
    assert r1["enrichment_score"]["score"] >= 70
    assert r1["contact_info"].get("phone")
    assert r1["company_info"].get("name")
    print(f"✅ Test 1 PASSED: Signature found, score={r1['enrichment_score']['score']}, company={r1['company_info'].get('name')}, reply-all enforced")

    # Test 2: No signature
    email2 = {
        "id": "sig-002",
        "from": "user@example.com",
        "to": ["support@ziontechgroup.com"],
        "subject": "Quick question",
        "body": "Hi, how do I reset my password?",
    }
    r2 = engine.analyze_email_case_by_case(email2)
    assert r2["signature_found"] is False
    assert r2["recommended_action"] == "NO_SIGNATURE_FOUND"
    print(f"✅ Test 2 PASSED: No signature correctly identified")

    stats = engine.get_stats()
    print(f"✅ Test 3 PASSED: {stats['signatures_processed']} signatures processed, avg score={stats['avg_enrichment_score']:.1f}")

    print("\n🎉 V987 ALL TESTS PASSED — Email Signature Enrichment operational!")
    return True


if __name__ == "__main__":
    test_v987()
