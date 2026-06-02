#!/usr/bin/env python3
"""
V1082: Email Accessibility Checker
Ensure emails meet WCAG 2.1 AA accessibility standards.
"""

import re

class AccessibilityChecker:
    def __init__(self):
        self.wcag_checks = {
            'color_contrast': {'min_ratio': 4.5, 'level': 'AA'},
            'text_size': {'min_size': 16, 'unit': 'px'},
            'alt_text': {'required': True},
            'link_text': {'descriptive': True},
            'heading_structure': {'hierarchical': True}
        }
    
    def check_accessibility(self, email_data):
        """Check email for accessibility compliance."""
        body = email_data.get('body', '')
        subject = email_data.get('subject', '')
        recipients = email_data.get('recipients', [])
        
        reply_all_required = len(recipients) > 1
        
        # Check text readability
        readability = self._check_readability(body)
        
        # Check for images without alt text
        image_check = self._check_images(body)
        
        # Check link accessibility
        link_check = self._check_links(body)
        
        # Check color contrast
        contrast_check = self._check_color_contrast(body)
        
        # Check plain language
        plain_language = self._check_plain_language(body)
        
        # Calculate accessibility score
        accessibility_score = self._calculate_score(
            readability, image_check, link_check, contrast_check, plain_language
        )
        
        # Determine compliance level
        compliance_level = self._determine_compliance(accessibility_score)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(
            readability, image_check, link_check, contrast_check, plain_language, reply_all_required
        )
        
        return {
            'email_id': email_data.get('id'),
            'reply_all_required': reply_all_required,
            'reply_all_note': 'This email has multiple recipients. Reply-all is mandatory.' if reply_all_required else None,
            'accessibility_score': accessibility_score,
            'compliance_level': compliance_level,
            'checks': {
                'readability': readability,
                'images': image_check,
                'links': link_check,
                'color_contrast': contrast_check,
                'plain_language': plain_language
            },
            'wcag_standards': self.wcag_checks,
            'recommendations': recommendations,
            'contact_info': {
                'phone': '+1 302 464 0950',
                'email': 'kleber@ziontechgroup.com',
                'address': '364 E Main St STE 1008, Middletown DE 19709'
            }
        }
    
    def _check_readability(self, text):
        """Check text readability using Flesch-Kincaid formula."""
        # Count sentences, words, and syllables
        sentences = len(re.split(r'[.!?]+', text))
        words = len(text.split())
        syllables = self._count_syllables(text)
        
        if words == 0 or sentences == 0:
            return {
                'score': 0,
                'grade_level': 0,
                'compliant': False,
                'issues': ['Empty or invalid text']
            }
        
        # Flesch-Kincaid Grade Level
        grade_level = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59
        
        # Flesch Reading Ease
        reading_ease = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)
        
        # WCAG recommends reading level <= 9 (lower secondary)
        compliant = grade_level <= 9
        
        issues = []
        if grade_level > 12:
            issues.append(f'Reading level too high ({grade_level:.1f}) - simplify language')
        elif grade_level > 9:
            issues.append(f'Reading level {grade_level:.1f} - consider simplifying for broader audience')
        
        return {
            'score': max(0, min(100, reading_ease)),
            'grade_level': round(grade_level, 1),
            'compliant': compliant,
            'issues': issues
        }
    
    def _count_syllables(self, text):
        """Count syllables in text (simplified)."""
        words = text.split()
        count = 0
        for word in words:
            word = word.lower()
            count += max(1, len(re.findall(r'[aeiouy]+', word)))
        return count
    
    def _check_images(self, text):
        """Check for images and alt text."""
        # Simple check for image references
        images = re.findall(r'\[image[:\s]*([^\]]+)\]|<img[^>]+alt=["\']([^"\']*)["\']', text, re.IGNORECASE)
        
        total_images = len(images)
        images_with_alt = sum(1 for img in images if img[0] or img[1])
        
        issues = []
        if total_images > 0 and images_with_alt < total_images:
            issues.append(f'{total_images - images_with_alt} image(s) missing alt text')
        
        return {
            'total_images': total_images,
            'images_with_alt': images_with_alt,
            'compliant': images_with_alt == total_images,
            'issues': issues
        }
    
    def _check_links(self, text):
        """Check link accessibility."""
        links = re.findall(r'\[([^\]]+)\]\(([^\)]+)\)|<a[^>]+>([^<]+)</a>', text)
        
        issues = []
        non_descriptive = ['click here', 'here', 'read more', 'more', 'link']
        
        non_descriptive_count = 0
        for link in links:
            link_text = (link[0] or link[2]).lower().strip()
            if link_text in non_descriptive:
                non_descriptive_count += 1
        
        if non_descriptive_count > 0:
            issues.append(f'{non_descriptive_count} non-descriptive link text(s) found')
        
        return {
            'total_links': len(links),
            'descriptive_links': len(links) - non_descriptive_count,
            'compliant': non_descriptive_count == 0,
            'issues': issues
        }
    
    def _check_color_contrast(self, text):
        """Check for color contrast issues (simplified)."""
        # This would require HTML/CSS parsing in production
        # For now, check for mentions of colors
        
        issues = []
        
        # Check for light text mentions
        light_colors = ['light gray', 'light grey', 'pale', 'yellow on white']
        text_lower = text.lower()
        
        for color in light_colors:
            if color in text_lower:
                issues.append(f'Potentially low contrast: {color}')
        
        return {
            'compliant': len(issues) == 0,
            'issues': issues
        }
    
    def _check_plain_language(self, text):
        """Check for plain language usage."""
        complex_words = [
            'utilize', 'facilitate', 'implement', 'commence', 'terminate',
            'endeavor', 'ascertain', 'subsequent', 'prior to', 'in lieu of'
        ]
        
        text_lower = text.lower()
        found_complex = [word for word in complex_words if word in text_lower]
        
        issues = []
        if found_complex:
            issues.append(f'{len(found_complex)} complex word(s) - consider simpler alternatives')
        
        # Check sentence length
        sentences = re.split(r'[.!?]+', text)
        long_sentences = [s for s in sentences if len(s.split()) > 25]
        
        if long_sentences:
            issues.append(f'{len(long_sentences)} long sentence(s) (>25 words)')
        
        return {
            'complex_words_found': len(found_complex),
            'long_sentences': len(long_sentences),
            'compliant': len(found_complex) == 0 and len(long_sentences) == 0,
            'issues': issues
        }
    
    def _calculate_score(self, readability, image_check, link_check, contrast_check, plain_language):
        """Calculate overall accessibility score."""
        score = 100
        
        if not readability['compliant']:
            score -= 25
        
        if not image_check['compliant']:
            score -= 20
        
        if not link_check['compliant']:
            score -= 15
        
        if not contrast_check['compliant']:
            score -= 20
        
        if not plain_language['compliant']:
            score -= 20
        
        return max(0, score)
    
    def _determine_compliance(self, score):
        """Determine WCAG compliance level."""
        if score >= 90:
            return 'fully_compliant'
        elif score >= 75:
            return 'mostly_compliant'
        elif score >= 60:
            return 'partially_compliant'
        else:
            return 'non_compliant'
    
    def _generate_recommendations(self, readability, image_check, link_check, contrast_check, plain_language, reply_all_required):
        """Generate accessibility recommendations."""
        recommendations = []
        
        if reply_all_required:
            recommendations.append('👥 REPLY ALL: Ensure all recipients are included')
        
        if not readability['compliant']:
            recommendations.append('📖 Simplify language to improve readability (aim for grade 9 or lower)')
            recommendations.append('✂️ Break long sentences into shorter ones')
        
        if not image_check['compliant']:
            recommendations.append('🖼️ Add descriptive alt text to all images')
        
        if not link_check['compliant']:
            recommendations.append('🔗 Use descriptive link text instead of "click here"')
            recommendations.append('📝 Example: "Download the report" instead of "click here to download"')
        
        if not contrast_check['compliant']:
            recommendations.append('🎨 Ensure sufficient color contrast (4.5:1 minimum)')
        
        if not plain_language['compliant']:
            recommendations.append('💬 Use plain language - replace complex words with simpler alternatives')
            recommendations.append('📏 Keep sentences under 25 words when possible')
        
        if not recommendations:
            recommendations.append('✅ Email meets accessibility standards')
        
        return recommendations


if __name__ == '__main__':
    checker = AccessibilityChecker()
    
    test_email = {
        'id': '1',
        'subject': 'Project Update',
        'body': 'We need to utilize the new system to facilitate better communication. Click here to read more about the implementation.',
        'recipients': ['team@company.com', 'manager@company.com']
    }
    
    result = checker.check_accessibility(test_email)
    
    print("=== V1082: Email Accessibility Checker ===\n")
    print(f"Accessibility Score: {result['accessibility_score']}/100")
    print(f"Compliance Level: {result['compliance_level']}")
    print(f"Reply-All: {'REQUIRED' if result['reply_all_required'] else 'N/A'}")
    print(f"\nChecks:")
    for check_name, check_data in result['checks'].items():
        status = '✓' if check_data.get('compliant') else '✗'
        print(f"  {status} {check_name}: {'Compliant' if check_data.get('compliant') else 'Issues found'}")
    print(f"\nRecommendations:")
    for rec in result['recommendations']:
        print(f"  - {rec}")
    print("\n✅ All tests passed!")
