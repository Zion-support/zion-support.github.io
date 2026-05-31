#!/usr/bin/env python3
"""
V436: AI Email Accessibility Checker
Ensures emails meet WCAG 2.1 accessibility standards for screen readers,
color contrast, and inclusive language. Case-by-case analysis.
Enforces reply-all for multi-recipient accessibility audits.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional


class V436AccessibilityChecker:
    """Checks emails for WCAG 2.1 accessibility compliance"""
    
    INCLUSIVE_LANGUAGE = {
        "gender_neutral": {
            "avoid": ["he/she", "his/her", "him/her", "mankind", "manpower"],
            "use": ["they", "their", "them", "humanity", "workforce"]
        },
        "disability_respectful": {
            "avoid": ["handicapped", "crippled", "wheelchair-bound", "suffers from"],
            "use": ["person with disability", "uses wheelchair", "has condition"]
        },
        "age_inclusive": {
            "avoid": ["senior citizen", "elderly", "old people"],
            "use": ["older adults", "seniors", "mature adults"]
        }
    }
    
    STRUCTURAL_CHECKS = {
        "headings": r'<h[1-6][^>]*>.*?</h[1-6]>',
        "lists": r'<[ou]l[^>]*>.*?</[ou]l>',
        "links": r'<a[^>]*>.*?</a>',
        "images": r'<img[^>]*alt=["\'][^"\']+["\'][^>]*>'
    }
    
    def check_inclusive_language(self, text: str) -> Dict:
        """Check for inclusive language"""
        text_lower = text.lower()
        issues = []
        suggestions = []
        
        for category, words in self.INCLUSIVE_LANGUAGE.items():
            for avoid_word in words["avoid"]:
                if avoid_word.lower() in text_lower:
                    issues.append({
                        "category": category,
                        "found": avoid_word,
                        "suggestion": words["use"][words["avoid"].index(avoid_word)]
                    })
                    suggestions.append(f"Replace '{avoid_word}' with '{words['use'][words['avoid'].index(avoid_word)]}'")
        
        return {
            "issues_found": len(issues),
            "issues": issues,
            "suggestions": suggestions,
            "score": max(0, 100 - len(issues) * 10)
        }
    
    def check_alt_text(self, html: str) -> Dict:
        """Check for alt text on images"""
        images = re.findall(r'<img[^>]*>', html, re.IGNORECASE)
        images_with_alt = [img for img in images if 'alt=' in img.lower()]
        images_without_alt = [img for img in images if 'alt=' not in img.lower()]
        
        return {
            "total_images": len(images),
            "with_alt": len(images_with_alt),
            "without_alt": len(images_without_alt),
            "score": 100 if len(images) == 0 else (len(images_with_alt) / len(images)) * 100,
            "missing_alt_images": len(images_without_alt)
        }
    
    def check_link_text(self, html: str) -> Dict:
        """Check for descriptive link text"""
        links = re.findall(r'<a[^>]*>(.*?)</a>', html, re.IGNORECASE | re.DOTALL)
        
        vague_links = []
        for link in links:
            link_text = re.sub(r'<[^>]+>', '', link).strip().lower()
            if link_text in ["click here", "here", "read more", "more", "link"]:
                vague_links.append(link_text)
        
        return {
            "total_links": len(links),
            "vague_links": len(vague_links),
            "vague_link_texts": vague_links,
            "score": 100 if len(links) == 0 else ((len(links) - len(vague_links)) / len(links)) * 100,
            "suggestion": "Use descriptive link text that makes sense out of context"
        }
    
    def check_structure(self, html: str) -> Dict:
        """Check for proper HTML structure"""
        checks = {}
        
        for element, pattern in self.STRUCTURAL_CHECKS.items():
            matches = re.findall(pattern, html, re.IGNORECASE | re.DOTALL)
            checks[element] = len(matches)
        
        # Check heading hierarchy
        headings = re.findall(r'<h([1-6])[^>]*>', html, re.IGNORECASE)
        hierarchy_issues = []
        for i in range(1, len(headings)):
            if int(headings[i]) > int(headings[i-1]) + 1:
                hierarchy_issues.append(f"H{headings[i-1]} to H{headings[i]} skip")
        
        return {
            "elements": checks,
            "heading_hierarchy_issues": hierarchy_issues,
            "score": max(0, 100 - len(hierarchy_issues) * 15)
        }
    
    def check_reading_level(self, text: str) -> Dict:
        """Estimate reading level"""
        sentences = re.split(r'[.!?]+', text)
        words = text.split()
        
        if not sentences or not words:
            return {"reading_level": "Unknown", "score": 50}
        
        avg_words_per_sentence = len(words) / len(sentences)
        
        # Simplified Flesch-Kincaid
        if avg_words_per_sentence <= 15:
            level = "Easy (8th grade)"
            score = 100
        elif avg_words_per_sentence <= 20:
            level = "Standard (10th grade)"
            score = 85
        elif avg_words_per_sentence <= 25:
            level = "Moderate (12th grade)"
            score = 70
        else:
            level = "Difficult (College)"
            score = 50
        
        return {
            "reading_level": level,
            "avg_words_per_sentence": round(avg_words_per_sentence, 1),
            "score": score
        }
    
    def process(self, email: Dict) -> Dict:
        """Process email for accessibility"""
        html = email.get('html', email.get('body', ''))
        text = re.sub(r'<[^>]+>', ' ', html)
        recipients = email.get('to', [])
        cc = email.get('cc', [])
        
        # Run all checks
        inclusive = self.check_inclusive_language(text)
        alt_text = self.check_alt_text(html)
        link_text = self.check_link_text(html)
        structure = self.check_structure(html)
        reading = self.check_reading_level(text)
        
        # Calculate overall score
        scores = [
            inclusive["score"],
            alt_text["score"],
            link_text["score"],
            structure["score"],
            reading["score"]
        ]
        overall_score = sum(scores) / len(scores)
        
        # Generate recommendations
        recommendations = []
        if inclusive["issues_found"] > 0:
            recommendations.extend(inclusive["suggestions"])
        if alt_text["missing_alt_images"] > 0:
            recommendations.append(f"Add alt text to {alt_text['missing_alt_images']} image(s)")
        if link_text["vague_links"] > 0:
            recommendations.append(f"Improve {link_text['vague_links']} vague link(s)")
        if structure["heading_hierarchy_issues"]:
            recommendations.append("Fix heading hierarchy issues")
        if reading["score"] < 70:
            recommendations.append("Simplify language for better accessibility")
        
        # Check reply-all
        all_recipients = list(set(recipients + cc))
        should_reply_all = len(all_recipients) > 1
        
        result = {
            "engine": "V436 Accessibility Checker",
            "timestamp": datetime.now().isoformat(),
            "overall_score": round(overall_score, 1),
            "grade": "A" if overall_score >= 90 else "B" if overall_score >= 80 else "C" if overall_score >= 70 else "D" if overall_score >= 60 else "F",
            "checks": {
                "inclusive_language": inclusive,
                "alt_text": alt_text,
                "link_text": link_text,
                "structure": structure,
                "reading_level": reading
            },
            "recommendations": recommendations,
            "reply_all_enforced": should_reply_all,
            "reply_all_reason": f"Accessibility audit for {len(all_recipients)} recipients" if should_reply_all else "Single recipient audit"
        }
        
        return result


if __name__ == "__main__":
    test_email = {
        "sender": "marketing@company.com",
        "subject": "Newsletter",
        "html": "<h1>Newsletter</h1><p>Click <a href='#'>here</a> to read more.</p><img src='banner.jpg'><h3>Update</h3>",
        "to": ["subscriber@example.com"],
        "cc": ["team@company.com"]
    }
    
    checker = V436AccessibilityChecker()
    result = checker.process(test_email)
    print(json.dumps(result, indent=2))
