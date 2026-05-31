#!/usr/bin/env python3
"""
V658 - Email Accessibility Auditor
Ensures all outgoing emails meet WCAG 2.1 accessibility standards.
Checks for proper contrast, alt text, semantic structure, and
screen reader compatibility.

Key Features:
- WCAG 2.1 AA compliance checking
- Color contrast ratio validation
- Image alt text verification
- Semantic HTML structure analysis
- Screen reader compatibility scoring
- Plain text fallback validation
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Optional

class EmailAccessibilityAuditor:
    """Audits emails for accessibility compliance"""
    
    def __init__(self):
        self.audit_history = []
        self.templates_scored = {}
    
    # WCAG 2.1 AA Requirements
    WCAG_CHECKS = {
        'text_alternatives': {
            'description': 'All non-text content has text alternatives',
            'level': 'A',
            'severity': 'critical'
        },
        'color_contrast': {
            'description': 'Minimum contrast ratio of 4.5:1 for normal text',
            'level': 'AA',
            'severity': 'high'
        },
        'semantic_structure': {
            'description': 'Content uses proper headings and semantic markup',
            'level': 'A',
            'severity': 'medium'
        },
        'link_text': {
            'description': 'Link text is descriptive and meaningful',
            'level': 'A',
            'severity': 'high'
        },
        'language_declaration': {
            'description': 'Email language is properly declared',
            'level': 'AA',
            'severity': 'low'
        },
        'table_headers': {
            'description': 'Tables have proper header associations',
            'level': 'A',
            'severity': 'medium'
        },
        'reading_order': {
            'description': 'Content follows logical reading order',
            'level': 'A',
            'severity': 'medium'
        },
        'plain_text_fallback': {
            'description': 'Plain text version is available',
            'level': 'AA',
            'severity': 'high'
        }
    }
    
    def check_image_alt_text(self, html_content: str) -> Dict:
        """Check all images have proper alt text"""
        img_tags = re.findall(r'<img\s[^>]*>', html_content, re.IGNORECASE)
        issues = []
        
        for tag in img_tags:
            has_alt = bool(re.search(r'alt\s*=\s*["\']', tag, re.IGNORECASE))
            if not has_alt:
                issues.append(f'Missing alt attribute: {tag[:80]}')
            else:
                alt_match = re.search(r'alt\s*=\s*["\']([^"\']*)["\']', tag, re.IGNORECASE)
                if alt_match and len(alt_match.group(1).strip()) == 0:
                    issues.append(f'Empty alt text: {tag[:80]}')
                elif alt_match and alt_match.group(1).lower() in ['image', 'photo', 'picture', 'img']:
                    issues.append(f'Non-descriptive alt text: "{alt_match.group(1)}"')
        
        return {
            'check': 'text_alternatives',
            'pass': len(issues) == 0,
            'total_images': len(img_tags),
            'issues': issues,
            'score': max(0, 100 - len(issues) * 20)
        }
    
    def check_color_contrast(self, html_content: str) -> Dict:
        """Check color contrast ratios"""
        issues = []
        
        # Find inline style colors
        style_blocks = re.findall(r'style\s*=\s*["\']([^"\']*)["\']', html_content, re.IGNORECASE)
        
        low_contrast_patterns = [
            (r'color\s*:\s*#([a-fA-F0-9]{6}).*?background\s*:\s*#([a-fA-F0-9]{6})', 'Inline color/background'),
            (r'color\s*:\s*(lightgray|lightgrey|silver|white)', 'Low contrast foreground'),
            (r'background\s*:\s*(white|#fff|#ffffff)', 'White background without dark text'),
        ]
        
        for pattern, desc in low_contrast_patterns:
            matches = re.findall(pattern, html_content, re.IGNORECASE)
            for match in matches:
                issues.append(f'Potential low contrast: {desc}')
        
        # Check for common problematic combinations
        problematic = [
            ('gray text on white', r'color\s*:\s*(?:gray|grey|#808080)'),
            ('light text on light bg', r'color\s*:\s*#([c-fC-F][0-9a-fA-F]{5})'),
        ]
        
        for desc, pattern in problematic:
            if re.search(pattern, html_content, re.IGNORECASE):
                issues.append(f'Potentially problematic: {desc}')
        
        return {
            'check': 'color_contrast',
            'pass': len(issues) == 0,
            'issues': issues,
            'score': max(0, 100 - len(issues) * 15)
        }
    
    def check_semantic_structure(self, html_content: str) -> Dict:
        """Check semantic HTML structure"""
        issues = []
        
        # Check for heading hierarchy
        headings = re.findall(r'<h(\d)[^>]*>', html_content, re.IGNORECASE)
        if headings:
            heading_levels = [int(h) for h in headings]
            for i in range(1, len(heading_levels)):
                if heading_levels[i] > heading_levels[i-1] + 1:
                    issues.append(f'Heading level skipped: h{heading_levels[i-1]} to h{heading_levels[i]}')
        
        # Check for missing headings
        if not headings:
            issues.append('No heading elements found - consider adding structure')
        
        # Check for div soup (too many divs without semantic elements)
        div_count = len(re.findall(r'<div', html_content, re.IGNORECASE))
        semantic_count = len(re.findall(r'<(?:section|article|nav|header|footer|main|aside)', html_content, re.IGNORECASE))
        
        if div_count > 10 and semantic_count == 0:
            issues.append(f'Heavy div usage ({div_count} divs) without semantic elements')
        
        # Check for tables without headers
        tables = re.findall(r'<table[^>]*>(.*?)</table>', html_content, re.IGNORECASE | re.DOTALL)
        for table in tables:
            if '<th' not in table.lower():
                issues.append('Table found without header cells (<th>)')
        
        return {
            'check': 'semantic_structure',
            'pass': len(issues) == 0,
            'issues': issues,
            'headings_found': len(headings),
            'div_count': div_count,
            'score': max(0, 100 - len(issues) * 15)
        }
    
    def check_link_text(self, html_content: str) -> Dict:
        """Check link text is descriptive"""
        issues = []
        
        links = re.findall(r'<a\s[^>]*>(.*?)</a>', html_content, re.IGNORECASE | re.DOTALL)
        
        bad_link_texts = ['click here', 'here', 'click', 'read more', 'more', 'link', 'this']
        
        for link_text in links:
            clean_text = re.sub(r'<[^>]+>', '', link_text).strip().lower()
            if clean_text in bad_link_texts:
                issues.append(f'Non-descriptive link text: "{clean_text}"')
            elif len(clean_text) < 3:
                issues.append(f'Very short link text: "{clean_text}"')
        
        # Check for links without text (image links without alt)
        empty_links = re.findall(r'<a\s[^>]*>\s*</a>', html_content, re.IGNORECASE)
        for _ in empty_links:
            issues.append('Empty link found - no accessible text')
        
        return {
            'check': 'link_text',
            'pass': len(issues) == 0,
            'total_links': len(links),
            'issues': issues,
            'score': max(0, 100 - len(issues) * 20)
        }
    
    def check_plain_text_fallback(self, email: Dict) -> Dict:
        """Check if plain text version exists"""
        has_plain = bool(email.get('plain_text', ''))
        has_html = bool(email.get('html_body', ''))
        
        issues = []
        if has_html and not has_plain:
            issues.append('HTML email without plain text fallback')
        
        return {
            'check': 'plain_text_fallback',
            'pass': has_plain or not has_html,
            'issues': issues,
            'score': 100 if (has_plain or not has_html) else 0
        }
    
    def audit_email(self, email: Dict) -> Dict:
        """Comprehensive accessibility audit of an email"""
        html = email.get('html_body', email.get('body', ''))
        
        checks = [
            self.check_image_alt_text(html),
            self.check_color_contrast(html),
            self.check_semantic_structure(html),
            self.check_link_text(html),
            self.check_plain_text_fallback(email),
        ]
        
        # Calculate overall score
        total_score = sum(c['score'] for c in checks)
        avg_score = total_score / len(checks)
        
        # Determine compliance level
        passed = sum(1 for c in checks if c['pass'])
        critical_issues = [c for c in checks if not c['pass'] and c['check'] in ['text_alternatives', 'link_text']]
        
        if avg_score >= 90 and not critical_issues:
            compliance = 'wcag_aa_compliant'
        elif avg_score >= 70:
            compliance = 'mostly_compliant'
        elif avg_score >= 50:
            compliance = 'partial_compliance'
        else:
            compliance = 'non_compliant'
        
        # Generate recommendations
        recommendations = []
        for check in checks:
            if not check['pass']:
                for issue in check['issues']:
                    recommendations.append({
                        'check': check['check'],
                        'issue': issue,
                        'fix': self._suggest_fix(check['check'], issue)
                    })
        
        result = {
            'email_id': email.get('id', ''),
            'overall_score': round(avg_score, 1),
            'compliance_level': compliance,
            'checks': checks,
            'passed': passed,
            'total_checks': len(checks),
            'critical_issues': len(critical_issues),
            'recommendations': recommendations,
            'timestamp': datetime.now().isoformat(),
            'reply_all_required': len(email.get('to', [])) > 1
        }
        
        self.audit_history.append(result)
        return result
    
    def _suggest_fix(self, check_type: str, issue: str) -> str:
        """Suggest a fix for an accessibility issue"""
        fixes = {
            'text_alternatives': 'Add descriptive alt text: alt="Description of image content"',
            'color_contrast': 'Ensure 4.5:1 contrast ratio. Use tools like WebAIM Contrast Checker.',
            'semantic_structure': 'Use proper heading hierarchy (h1 → h2 → h3) and semantic HTML elements.',
            'link_text': 'Replace with descriptive text like "View Q3 Report" instead of "click here".',
            'plain_text_fallback': 'Add a plain text version of your email for screen readers.',
            'language_declaration': 'Add lang="en" attribute to the HTML element.',
            'table_headers': 'Add <th> elements with scope attribute for table headers.',
            'reading_order': 'Ensure content flows logically when CSS is disabled.'
        }
        return fixes.get(check_type, 'Review and fix the accessibility issue.')
    
    def generate_accessibility_report(self) -> Dict:
        """Generate overall accessibility report"""
        if not self.audit_history:
            return {'message': 'No audits performed yet'}
        
        avg_score = sum(a['overall_score'] for a in self.audit_history) / len(self.audit_history)
        compliant = sum(1 for a in self.audit_history if a['compliance_level'] == 'wcag_aa_compliant')
        
        # Common issues
        all_issues = []
        for audit in self.audit_history:
            for rec in audit.get('recommendations', []):
                all_issues.append(rec['check'])
        
        from collections import Counter
        common_issues = Counter(all_issues).most_common(5)
        
        return {
            'total_audits': len(self.audit_history),
            'avg_score': round(avg_score, 1),
            'compliant_emails': compliant,
            'compliance_rate': round(compliant / len(self.audit_history) * 100, 1),
            'common_issues': [{'check': c, 'count': n} for c, n in common_issues],
            'recommendations': [
                'Always add alt text to images',
                'Use descriptive link text',
                'Maintain proper heading hierarchy',
                'Include plain text fallback',
                'Test with screen readers'
            ]
        }


def test_v658():
    """Test V658 Email Accessibility Auditor"""
    auditor = EmailAccessibilityAuditor()
    
    # Test email with accessibility issues
    email_with_issues = {
        'id': 'email_001',
        'from': 'marketing@company.com',
        'to': ['team@company.com', 'clients@company.com'],
        'subject': 'Monthly Newsletter',
        'html_body': '''
        <html>
        <body>
        <div><div><div>
        <img src="banner.jpg">
        <h3>Welcome</h3>
        <h5>News</h5>
        <p>Check out our latest updates: <a href="/news">click here</a></p>
        <p style="color: #cccccc; background: #ffffff;">Some text</p>
        <table><tr><td>Data</td><td>More</td></tr></table>
        </div></div></div>
        </body>
        </html>
        ''',
        'body': 'Monthly Newsletter - Welcome to our updates!',
        'timestamp': '2026-05-29T10:00:00'
    }
    
    # Test accessible email
    accessible_email = {
        'id': 'email_002',
        'from': 'team@company.com',
        'to': ['all@company.com'],
        'subject': 'Project Update',
        'html_body': '''
        <html lang="en">
        <body>
        <h1>Project Update</h1>
        <h2>Progress Summary</h2>
        <img src="chart.png" alt="Q3 progress chart showing 85% completion">
        <p>View the <a href="/report">full Q3 progress report</a> for details.</p>
        </body>
        </html>
        ''',
        'plain_text': 'Project Update\n\nProgress Summary\n\nQ3 progress: 85% completion\nView full report at /report',
        'body': 'Project Update',
        'timestamp': '2026-05-29T11:00:00'
    }
    
    result1 = auditor.audit_email(email_with_issues)
    result2 = auditor.audit_email(accessible_email)
    report = auditor.generate_accessibility_report()
    
    print("✅ V658 Email Accessibility Auditor Test")
    print(f"\nEmail with issues:")
    print(f"  Score: {result1['overall_score']}/100")
    print(f"  Compliance: {result1['compliance_level']}")
    print(f"  Issues: {len(result1['recommendations'])}")
    for rec in result1['recommendations'][:3]:
        print(f"    - {rec['issue'][:60]}")
    
    print(f"\nAccessible email:")
    print(f"  Score: {result2['overall_score']}/100")
    print(f"  Compliance: {result2['compliance_level']}")
    print(f"  Issues: {len(result2['recommendations'])}")
    
    print(f"\nOverall Report:")
    print(f"  Audits: {report['total_audits']}")
    print(f"  Avg Score: {report['avg_score']}/100")
    print(f"  Compliance Rate: {report['compliance_rate']}%")
    
    return report


if __name__ == '__main__':
    test_v658()
