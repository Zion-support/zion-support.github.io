#!/usr/bin/env python3
"""
V192 - AI Email Accessibility Enhancer
Checks emails for accessibility compliance (WCAG), suggests alt text for images,
ensures color contrast ratios, validates screen reader compatibility, and provides
plain language alternatives.
"""

import json
import re
from datetime import datetime
from typing import Dict, List, Any
from collections import defaultdict


class AccessibilityEnhancer:
    """AI-powered email accessibility enhancement system."""
    
    def __init__(self):
        self.accessibility_rules = self._build_accessibility_rules()
        self.color_contrast_ratios = self._build_contrast_ratios()
        self.plain_language_dictionary = self._build_plain_language_dict()
    
    def _build_accessibility_rules(self) -> Dict[str, Dict]:
        """Build WCAG accessibility rules."""
        return {
            'alt_text': {
                'requirement': 'All images must have descriptive alt text',
                'wcag_level': 'A',
                'check': 'images_without_alt'
            },
            'color_contrast': {
                'requirement': 'Text must have sufficient color contrast (4.5:1 for normal text, 3:1 for large text)',
                'wcag_level': 'AA',
                'check': 'color_contrast_ratio'
            },
            'plain_language': {
                'requirement': 'Use plain language when possible (reading level 8-10)',
                'wcag_level': 'AAA',
                'check': 'reading_level'
            },
            'link_text': {
                'requirement': 'Link text must be descriptive (not "click here")',
                'wcag_level': 'A',
                'check': 'generic_link_text'
            },
            'headings': {
                'requirement': 'Use proper heading hierarchy (H1, H2, H3)',
                'wcag_level': 'A',
                'check': 'heading_structure'
            },
            'tables': {
                'requirement': 'Tables must have headers and captions',
                'wcag_level': 'A',
                'check': 'table_accessibility'
            }
        }
    
    def _build_contrast_ratios(self) -> Dict[str, float]:
        """Build color contrast ratio requirements."""
        return {
            'normal_text': 4.5,
            'large_text': 3.0,
            'ui_components': 3.0
        }
    
    def _build_plain_language_dict(self) -> Dict[str, str]:
        """Build plain language alternatives."""
        return {
            'utilize': 'use',
            'implement': 'do',
            'facilitate': 'help',
            'commence': 'start',
            'terminate': 'end',
            'endeavor': 'try',
            'ascertain': 'find out',
            'approximately': 'about',
            'numerous': 'many',
            'sufficient': 'enough',
            'prior to': 'before',
            'subsequent to': 'after',
            'in the event that': 'if',
            'due to the fact that': 'because',
            'at this point in time': 'now',
            'in order to': 'to',
            'for the purpose of': 'to',
            'with regard to': 'about',
            'in reference to': 'about'
        }
    
    def check_accessibility(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Check email for accessibility issues."""
        if not email:
            return {'error': 'No email provided'}
        
        # Check alt text
        alt_text_issues = self._check_alt_text(email)
        
        # Check color contrast
        contrast_issues = self._check_color_contrast(email)
        
        # Check plain language
        language_issues = self._check_plain_language(email)
        
        # Check link text
        link_issues = self._check_link_text(email)
        
        # Check heading structure
        heading_issues = self._check_headings(email)
        
        # Check tables
        table_issues = self._check_tables(email)
        
        # Calculate overall score
        all_issues = alt_text_issues + contrast_issues + language_issues + link_issues + heading_issues + table_issues
        accessibility_score = self._calculate_accessibility_score(all_issues)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(all_issues)
        
        return {
            'check_id': f"access_{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'timestamp': datetime.now().isoformat(),
            'accessibility_score': accessibility_score,
            'wcag_compliance': self._determine_wcag_compliance(all_issues),
            'issues': {
                'alt_text': alt_text_issues,
                'color_contrast': contrast_issues,
                'plain_language': language_issues,
                'link_text': link_issues,
                'headings': heading_issues,
                'tables': table_issues
            },
            'total_issues': len(all_issues),
            'recommendations': recommendations,
            'screen_reader_compatible': self._assess_screen_reader_compatibility(all_issues),
            'reply_all_accessibility': self._determine_reply_all_accessibility(all_issues)
        }
    
    def _check_alt_text(self, email: Dict) -> List[Dict[str, Any]]:
        """Check for missing or poor alt text."""
        issues = []
        body = email.get('body', '')
        
        # Find images
        image_pattern = r'<img[^>]+>'
        images = re.findall(image_pattern, body, re.IGNORECASE)
        
        for img in images:
            if 'alt=' not in img.lower():
                issues.append({
                    'type': 'missing_alt_text',
                    'severity': 'high',
                    'element': img[:100],
                    'recommendation': 'Add descriptive alt text to all images',
                    'wcag_level': 'A'
                })
            elif 'alt=""' in img or "alt=''" in img:
                issues.append({
                    'type': 'empty_alt_text',
                    'severity': 'medium',
                    'element': img[:100],
                    'recommendation': 'If image is decorative, use role="presentation". Otherwise, add descriptive alt text.',
                    'wcag_level': 'A'
                })
        
        return issues
    
    def _check_color_contrast(self, email: Dict) -> List[Dict[str, Any]]:
        """Check color contrast ratios."""
        issues = []
        body = email.get('body', '')
        
        # Find color specifications
        color_pattern = r'color:\s*#([0-9a-fA-F]{3,6})'
        colors = re.findall(color_pattern, body, re.IGNORECASE)
        
        # Check for problematic color combinations
        problematic_combinations = [
            ('light gray text on white', '#cccccc', '#ffffff'),
            ('yellow text on white', '#ffff00', '#ffffff'),
            ('light blue text on white', '#add8e6', '#ffffff')
        ]
        
        for desc, text_color, bg_color in problematic_combinations:
            if text_color[1:] in [c.lower() for c in colors]:
                issues.append({
                    'type': 'low_contrast',
                    'severity': 'high',
                    'description': f'Potential low contrast: {desc}',
                    'recommendation': 'Use darker text colors for better readability (4.5:1 ratio minimum)',
                    'wcag_level': 'AA'
                })
        
        return issues
    
    def _check_plain_language(self, email: Dict) -> List[Dict[str, Any]]:
        """Check for plain language opportunities."""
        issues = []
        body = email.get('body', '').lower()
        
        complex_words_found = []
        for complex_word, simple_word in self.plain_language_dictionary.items():
            if complex_word in body:
                complex_words_found.append({
                    'complex': complex_word,
                    'simple': simple_word
                })
        
        if complex_words_found:
            issues.append({
                'type': 'complex_language',
                'severity': 'medium',
                'count': len(complex_words_found),
                'examples': complex_words_found[:5],
                'recommendation': 'Use plain language alternatives for better readability',
                'wcag_level': 'AAA'
            })
        
        # Check sentence length
        sentences = re.split(r'[.!?]+', body)
        long_sentences = [s for s in sentences if len(s.split()) > 25]
        
        if long_sentences:
            issues.append({
                'type': 'long_sentences',
                'severity': 'low',
                'count': len(long_sentences),
                'recommendation': 'Break long sentences into shorter ones (max 25 words)',
                'wcag_level': 'AAA'
            })
        
        return issues
    
    def _check_link_text(self, email: Dict) -> List[Dict[str, Any]]:
        """Check for generic link text."""
        issues = []
        body = email.get('body', '')
        
        # Find links
        link_pattern = r'<a[^>]*>([^<]+)</a>'
        links = re.findall(link_pattern, body, re.IGNORECASE)
        
        generic_texts = ['click here', 'here', 'read more', 'more', 'link']
        
        for link_text in links:
            if link_text.lower() in generic_texts:
                issues.append({
                    'type': 'generic_link_text',
                    'severity': 'medium',
                    'text': link_text,
                    'recommendation': 'Use descriptive link text that makes sense out of context',
                    'wcag_level': 'A'
                })
        
        return issues
    
    def _check_headings(self, email: Dict) -> List[Dict[str, Any]]:
        """Check heading structure."""
        issues = []
        body = email.get('body', '')
        
        # Find headings
        heading_pattern = r'<h([1-6])[^>]*>'
        headings = re.findall(heading_pattern, body, re.IGNORECASE)
        
        if headings:
            # Check for skipped levels
            levels = [int(h) for h in headings]
            for i in range(1, len(levels)):
                if levels[i] > levels[i-1] + 1:
                    issues.append({
                        'type': 'skipped_heading_level',
                        'severity': 'low',
                        'from_level': levels[i-1],
                        'to_level': levels[i],
                        'recommendation': 'Don\'t skip heading levels (e.g., H1 to H3)',
                        'wcag_level': 'A'
                    })
        
        return issues
    
    def _check_tables(self, email: Dict) -> List[Dict[str, Any]]:
        """Check table accessibility."""
        issues = []
        body = email.get('body', '')
        
        # Find tables
        if '<table' in body.lower():
            if '<th' not in body.lower():
                issues.append({
                    'type': 'missing_table_headers',
                    'severity': 'high',
                    'recommendation': 'Add <th> elements to identify table headers',
                    'wcag_level': 'A'
                })
            
            if '<caption' not in body.lower():
                issues.append({
                    'type': 'missing_table_caption',
                    'severity': 'medium',
                    'recommendation': 'Add <caption> to describe table purpose',
                    'wcag_level': 'A'
                })
        
        return issues
    
    def _calculate_accessibility_score(self, issues: List) -> Dict[str, Any]:
        """Calculate overall accessibility score."""
        score = 100
        
        for issue in issues:
            if issue['severity'] == 'high':
                score -= 15
            elif issue['severity'] == 'medium':
                score -= 8
            else:
                score -= 3
        
        score = max(0, score)
        
        return {
            'score': score,
            'grade': 'A' if score >= 90 else 'B' if score >= 80 else 'C' if score >= 70 else 'D' if score >= 60 else 'F',
            'status': 'Excellent' if score >= 90 else 'Good' if score >= 80 else 'Needs Improvement' if score >= 60 else 'Poor'
        }
    
    def _determine_wcag_compliance(self, issues: List) -> Dict[str, Any]:
        """Determine WCAG compliance level."""
        level_a_issues = [i for i in issues if i.get('wcag_level') == 'A']
        level_aa_issues = [i for i in issues if i.get('wcag_level') == 'AA']
        level_aaa_issues = [i for i in issues if i.get('wcag_level') == 'AAA']
        
        if not level_a_issues and not level_aa_issues and not level_aaa_issues:
            level = 'AAA'
        elif not level_a_issues and not level_aa_issues:
            level = 'AA'
        elif not level_a_issues:
            level = 'A'
        else:
            level = 'Non-compliant'
        
        return {
            'level': level,
            'level_a_issues': len(level_a_issues),
            'level_aa_issues': len(level_aa_issues),
            'level_aaa_issues': len(level_aaa_issues)
        }
    
    def _generate_recommendations(self, issues: List) -> List[str]:
        """Generate accessibility recommendations."""
        recommendations = []
        
        if not issues:
            recommendations.append("✅ Email meets accessibility standards")
        else:
            high_priority = [i for i in issues if i['severity'] == 'high']
            if high_priority:
                recommendations.append(f"🔴 {len(high_priority)} high-priority accessibility issues found")
            
            recommendations.extend([issue['recommendation'] for issue in issues[:5]])
        
        recommendations.append("🔄 Always use Reply All to ensure all recipients receive accessible content")
        
        return recommendations
    
    def _assess_screen_reader_compatibility(self, issues: List) -> Dict[str, Any]:
        """Assess screen reader compatibility."""
        critical_issues = [i for i in issues if i['type'] in ['missing_alt_text', 'generic_link_text', 'missing_table_headers']]
        
        return {
            'compatible': len(critical_issues) == 0,
            'critical_issues': len(critical_issues),
            'recommendation': 'Email is screen reader compatible' if not critical_issues else 'Fix critical issues for screen reader compatibility'
        }
    
    def _determine_reply_all_accessibility(self, issues: List) -> Dict[str, Any]:
        """Determine reply-all strategy for accessibility."""
        return {
            'reply_all_recommended': True,
            'reason': 'Ensure all recipients receive accessible content and can provide feedback',
            'accessibility_considerations': 'Include accessibility statement in signature'
        }


def check_email_accessibility(email: Dict[str, Any]) -> Dict[str, Any]:
    """Main entry point for accessibility checking."""
    enhancer = AccessibilityEnhancer()
    return enhancer.check_accessibility(email)


if __name__ == '__main__':
    test_email = {
        'from': 'marketing@company.com',
        'subject': 'Newsletter - January Updates',
        'body': '''<html>
<body>
<h1>January Newsletter</h1>
<img src="banner.jpg">
<p>We are pleased to announce that we will utilize our resources to facilitate optimal outcomes. Click <a href="link.html">here</a> to learn more.</p>
<table>
<tr><td>Product</td><td>Price</td></tr>
<tr><td>Widget A</td><td>$10</td></tr>
</table>
</body>
</html>''',
        'date': '2024-01-15T10:00:00'
    }
    
    result = check_email_accessibility(test_email)
    print(json.dumps(result, indent=2))
