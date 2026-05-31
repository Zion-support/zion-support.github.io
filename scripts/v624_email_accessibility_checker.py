#!/usr/bin/env python3
"""V624 - Email Accessibility Checker
Ensure emails are accessible to all users including those with disabilities.
REPLY-ALL ENFORCED: Always replies to all recipients in multi-person threads.
"""
import json, re
from datetime import datetime
from typing import Dict, List, Any

class AccessibilityChecker:
    """Check and improve email accessibility."""
    
    WCAG_ISSUES = {
        "color_contrast": "Insufficient color contrast makes text hard to read",
        "alt_text": "Images missing alt text for screen readers",
        "heading_structure": "Improper heading hierarchy affects navigation",
        "link_text": "Non-descriptive link text (e.g., 'click here')",
        "table_headers": "Tables missing header information",
        "font_size": "Text too small for comfortable reading",
        "language": "Missing language declaration"
    }
    
    def __init__(self):
        self.checks = []
    
    def check_accessibility(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Check email for accessibility issues."""
        html_content = email.get("html_body", "")
        text_content = email.get("body", "")
        
        issues = []
        score = 100
        
        # Check color contrast
        contrast_issues = self._check_color_contrast(html_content)
        if contrast_issues:
            issues.append({
                "type": "color_contrast",
                "severity": "high",
                "description": self.WCAG_ISSUES["color_contrast"],
                "count": len(contrast_issues),
                "fix": "Use darker text colors or lighter backgrounds for better contrast"
            })
            score -= 20
        
        # Check alt text
        missing_alt = self._check_alt_text(html_content)
        if missing_alt > 0:
            issues.append({
                "type": "alt_text",
                "severity": "high",
                "description": self.WCAG_ISSUES["alt_text"],
                "count": missing_alt,
                "fix": "Add descriptive alt text to all images"
            })
            score -= 15
        
        # Check heading structure
        heading_issues = self._check_headings(html_content)
        if heading_issues:
            issues.append({
                "type": "heading_structure",
                "severity": "medium",
                "description": self.WCAG_ISSUES["heading_structure"],
                "count": len(heading_issues),
                "fix": "Use proper heading hierarchy (h1, h2, h3) without skipping levels"
            })
            score -= 10
        
        # Check link text
        poor_links = self._check_link_text(html_content)
        if poor_links > 0:
            issues.append({
                "type": "link_text",
                "severity": "medium",
                "description": self.WCAG_ISSUES["link_text"],
                "count": poor_links,
                "fix": "Use descriptive link text instead of 'click here' or 'read more'"
            })
            score -= 10
        
        # Check font size
        small_text = self._check_font_size(html_content)
        if small_text:
            issues.append({
                "type": "font_size",
                "severity": "low",
                "description": self.WCAG_ISSUES["font_size"],
                "count": 1,
                "fix": "Use minimum 14px font size for body text"
            })
            score -= 5
        
        # Check language
        has_lang = self._check_language(html_content)
        if not has_lang:
            issues.append({
                "type": "language",
                "severity": "low",
                "description": self.WCAG_ISSUES["language"],
                "count": 1,
                "fix": "Add lang attribute to HTML element"
            })
            score -= 5
        
        # Calculate accessibility score
        accessibility_score = max(0, score)
        compliance_level = self._get_compliance_level(accessibility_score)
        
        recommendations = self._generate_recommendations(issues)
        
        return {
            "engine": "V624",
            "email_subject": email.get("subject", ""),
            "accessibility_score": accessibility_score,
            "compliance_level": compliance_level,
            "total_issues": len(issues),
            "issues": issues,
            "recommendations": recommendations,
            "wcag_2.1_compliant": accessibility_score >= 90,
            "screen_reader_friendly": accessibility_score >= 80,
            "reply_all_enforced": len(email.get("to", []) + email.get("cc", [])) > 1,
            "timestamp": datetime.now().isoformat()
        }
    
    def _check_color_contrast(self, html: str) -> List[str]:
        """Check for color contrast issues."""
        issues = []
        # Simplified check - would use actual color contrast algorithm in production
        if "color: #fff" in html.lower() or "color: white" in html.lower():
            if "background: #fff" in html.lower() or "background: white" in html.lower():
                issues.append("White text on white background")
        return issues
    
    def _check_alt_text(self, html: str) -> int:
        """Check for missing alt text on images."""
        img_tags = re.findall(r'<img[^>]*>', html, re.IGNORECASE)
        missing_alt = sum(1 for tag in img_tags if 'alt=' not in tag.lower())
        return missing_alt
    
    def _check_headings(self, html: str) -> List[str]:
        """Check heading structure."""
        issues = []
        headings = re.findall(r'<h([1-6])[^>]*>', html, re.IGNORECASE)
        
        if headings:
            levels = [int(h) for h in headings]
            for i in range(1, len(levels)):
                if levels[i] > levels[i-1] + 1:
                    issues.append(f"Skipped heading level: h{levels[i-1]} to h{levels[i]}")
        
        return issues
    
    def _check_link_text(self, html: str) -> int:
        """Check for non-descriptive link text."""
        links = re.findall(r'<a[^>]*>(.*?)</a>', html, re.IGNORECASE)
        poor_text = ["click here", "read more", "here", "more", "link"]
        count = sum(1 for link in links if link.strip().lower() in poor_text)
        return count
    
    def _check_font_size(self, html: str) -> bool:
        """Check for small font sizes."""
        # Simplified check
        if "font-size: 10px" in html or "font-size: 11px" in html:
            return True
        return False
    
    def _check_language(self, html: str) -> bool:
        """Check for language declaration."""
        return 'lang=' in html.lower()
    
    def _get_compliance_level(self, score: int) -> str:
        """Get WCAG compliance level."""
        if score >= 90:
            return "AAA"
        elif score >= 80:
            return "AA"
        elif score >= 70:
            return "A"
        else:
            return "Non-compliant"
    
    def _generate_recommendations(self, issues: List[Dict]) -> List[str]:
        """Generate accessibility recommendations."""
        recommendations = []
        
        for issue in issues:
            recommendations.append(f"{issue['severity'].upper()}: {issue['fix']}")
        
        if not issues:
            recommendations.append("Email meets accessibility standards")
        
        return recommendations
    
    def process_batch(self, emails: List[Dict]) -> Dict[str, Any]:
        results = [self.check_accessibility(e) for e in emails]
        
        avg_score = sum(r["accessibility_score"] for r in results) / len(results) if results else 100
        total_issues = sum(r["total_issues"] for r in results)
        compliant_count = sum(1 for r in results if r["wcag_2.1_compliant"])
        
        return {
            "engine": "V624 - Accessibility Checker",
            "total_checked": len(results),
            "average_accessibility_score": round(avg_score, 1),
            "total_issues_found": total_issues,
            "wcag_compliant_emails": compliant_count,
            "compliance_rate_percent": round((compliant_count / len(results) * 100) if results else 100, 1),
            "reply_all_enforced": sum(1 for r in results if r["reply_all_enforced"]),
            "results": results
        }

if __name__ == "__main__":
    engine = AccessibilityChecker()
    test_emails = [
        {"subject": "Newsletter", "body": "Check out our latest updates!",
         "html_body": "<html><body><h1>Newsletter</h1><img src='logo.png'><a href='#'>Click here</a></body></html>",
         "to": ["subscribers@company.com"]},
        {"subject": "Product Update", "body": "We've improved our product!",
         "html_body": "<html lang='en'><body><h1>Update</h1><h2>Features</h2><img src='feature.png' alt='New feature'><a href='#'>Learn more about features</a></body></html>",
         "to": ["users@company.com", "team@company.com"]}
    ]
    result = engine.process_batch(test_emails)
    print(json.dumps(result, indent=2))
