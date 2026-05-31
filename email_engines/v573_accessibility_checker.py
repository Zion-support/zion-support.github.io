#!/usr/bin/env python3
"""
V573 - Email Accessibility Checker
Ensures emails meet WCAG 2.1 standards with screen reader compatibility and color contrast optimization.
Enforces reply-all for all communications.
"""
import json
from datetime import datetime
from typing import Dict, List
import re

class EmailAccessibilityChecker:
    def __init__(self):
        self.reply_all_enforced = True
        self.wcag_standards = {
            'A': ['1.1.1', '1.3.1', '1.3.2', '1.4.1', '2.1.1', '2.4.1', '3.1.1', '4.1.1'],
            'AA': ['1.4.3', '1.4.4', '1.4.5', '2.4.7', '3.2.3', '3.2.4'],
            'AAA': ['1.4.6', '1.4.7', '1.4.8', '2.4.8', '2.4.9', '2.4.10']
        }
    
    def check_accessibility(self, email: Dict) -> Dict:
        """Check email for accessibility compliance"""
        issues = []
        
        # Check text alternatives
        issues.extend(self._check_text_alternatives(email))
        
        # Check color contrast
        issues.extend(self._check_color_contrast(email))
        
        # Check screen reader compatibility
        issues.extend(self._check_screen_reader_compatibility(email))
        
        # Check keyboard navigation
        issues.extend(self._check_keyboard_navigation(email))
        
        # Check content structure
        issues.extend(self._check_content_structure(email))
        
        # Generate recommendations
        recommendations = self._generate_recommendations(issues)
        
        # Calculate accessibility score
        score = self._calculate_accessibility_score(issues)
        
        return {
            'engine': 'V573_Email_Accessibility_Checker',
            'timestamp': datetime.now().isoformat(),
            'email_id': email.get('id', 'unknown'),
            'accessibility_score': score,
            'wcag_compliance': self._determine_wcag_level(issues),
            'issues': issues,
            'recommendations': recommendations,
            'screen_reader_ready': self._is_screen_reader_ready(issues),
            'reply_all_enforced': self.reply_all_enforced,
            'all_recipients': email.get('to', []) + email.get('cc', [])
        }
    
    def _check_text_alternatives(self, email: Dict) -> List[Dict]:
        """Check for text alternatives (alt text)"""
        issues = []
        body = email.get('body', '')
        
        # Check for images without alt text
        img_pattern = r'<img[^>]*>'
        images = re.findall(img_pattern, body)
        
        for img in images:
            if 'alt=' not in img or 'alt=""' in img:
                issues.append({
                    'type': 'missing_alt_text',
                    'severity': 'high',
                    'wcag': '1.1.1',
                    'description': 'Image missing alt text',
                    'element': img[:50]
                })
        
        return issues
    
    def _check_color_contrast(self, email: Dict) -> List[Dict]:
        """Check color contrast ratios"""
        issues = []
        body = email.get('body', '')
        
        # Check for inline styles with low contrast
        style_pattern = r'color:\s*#([0-9a-fA-F]{3,6})'
        colors = re.findall(style_pattern, body)
        
        # Simplified contrast check
        for color in colors:
            if self._is_low_contrast(color):
                issues.append({
                    'type': 'low_contrast',
                    'severity': 'medium',
                    'wcag': '1.4.3',
                    'description': f'Low contrast color: #{color}',
                    'recommendation': 'Use higher contrast colors (4.5:1 ratio minimum)'
                })
        
        return issues
    
    def _is_low_contrast(self, color: str) -> bool:
        """Check if color has low contrast"""
        # Simplified check - in production use proper contrast calculation
        if len(color) == 3:
            color = ''.join([c*2 for c in color])
        r, g, b = int(color[:2], 16), int(color[2:4], 16), int(color[4:6], 16)
        luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        return luminance > 0.85 or luminance < 0.15
    
    def _check_screen_reader_compatibility(self, email: Dict) -> List[Dict]:
        """Check screen reader compatibility"""
        issues = []
        body = email.get('body', '')
        
        # Check for proper heading structure
        headings = re.findall(r'<h([1-6])[^>]*>', body)
        if headings:
            levels = [int(h) for h in headings]
            for i in range(1, len(levels)):
                if levels[i] > levels[i-1] + 1:
                    issues.append({
                        'type': 'heading_skip',
                        'severity': 'medium',
                        'wcag': '1.3.1',
                        'description': f'Heading level skipped from H{levels[i-1]} to H{levels[i]}'
                    })
        
        # Check for ARIA labels
        if '<button' in body and 'aria-label' not in body:
            issues.append({
                'type': 'missing_aria_label',
                'severity': 'high',
                'wcag': '4.1.2',
                'description': 'Button missing aria-label'
            })
        
        return issues
    
    def _check_keyboard_navigation(self, email: Dict) -> List[Dict]:
        """Check keyboard navigation support"""
        issues = []
        body = email.get('body', '')
        
        # Check for interactive elements
        if '<a' in body or '<button' in body:
            if 'tabindex' not in body and 'href' not in body:
                issues.append({
                    'type': 'keyboard_accessibility',
                    'severity': 'high',
                    'wcag': '2.1.1',
                    'description': 'Interactive elements may not be keyboard accessible'
                })
        
        return issues
    
    def _check_content_structure(self, email: Dict) -> List[Dict]:
        """Check content structure"""
        issues = []
        body = email.get('body', '')
        
        # Check for language declaration
        if 'lang=' not in body:
            issues.append({
                'type': 'missing_language',
                'severity': 'low',
                'wcag': '3.1.1',
                'description': 'Content language not declared'
            })
        
        # Check for tables without headers
        if '<table' in body and '<th' not in body:
            issues.append({
                'type': 'table_headers',
                'severity': 'medium',
                'wcag': '1.3.1',
                'description': 'Table missing header cells'
            })
        
        return issues
    
    def _generate_recommendations(self, issues: List[Dict]) -> List[str]:
        """Generate accessibility recommendations"""
        recommendations = []
        
        high_issues = [i for i in issues if i['severity'] == 'high']
        medium_issues = [i for i in issues if i['severity'] == 'medium']
        
        if high_issues:
            recommendations.append(f"Fix {len(high_issues)} critical accessibility issues immediately")
        if medium_issues:
            recommendations.append(f"Address {len(medium_issues)} moderate accessibility concerns")
        
        recommendations.append("Add alt text to all images")
        recommendations.append("Ensure color contrast ratio of at least 4.5:1")
        recommendations.append("Use semantic HTML structure")
        recommendations.append("Test with screen readers (NVDA, JAWS, VoiceOver)")
        
        return recommendations
    
    def _calculate_accessibility_score(self, issues: List[Dict]) -> int:
        """Calculate accessibility score (0-100)"""
        score = 100
        for issue in issues:
            if issue['severity'] == 'high':
                score -= 15
            elif issue['severity'] == 'medium':
                score -= 8
            else:
                score -= 3
        return max(0, score)
    
    def _determine_wcag_level(self, issues: List[Dict]) -> Dict:
        """Determine WCAG compliance level"""
        wcag_violations = [i['wcag'] for i in issues]
        
        a_violations = [v for v in wcag_violations if v in self.wcag_standards['A']]
        aa_violations = [v for v in wcag_violations if v in self.wcag_standards['AA']]
        aaa_violations = [v for v in wcag_violations if v in self.wcag_standards['AAA']]
        
        return {
            'A': len(a_violations) == 0,
            'AA': len(aa_violations) == 0,
            'AAA': len(aaa_violations) == 0,
            'violations': {
                'A': a_violations,
                'AA': aa_violations,
                'AAA': aaa_violations
            }
        }
    
    def _is_screen_reader_ready(self, issues: List[Dict]) -> bool:
        """Check if email is screen reader ready"""
        critical_issues = [i for i in issues if i['severity'] == 'high']
        return len(critical_issues) == 0

if __name__ == "__main__":
    checker = EmailAccessibilityChecker()
    test_email = {
        'id': 'test-573',
        'to': ['user@example.com'],
        'subject': 'Newsletter',
        'body': '<html><body><img src="banner.jpg"><h1>Welcome</h1><h3>News</h3><p>Content</p></body></html>'
    }
    result = checker.check_accessibility(test_email)
    print(json.dumps(result, indent=2))
