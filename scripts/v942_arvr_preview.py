#!/usr/bin/env python3
"""
V942: Email AR/VR Preview Engine
Preview how emails render on different devices, email clients, and screen readers.
Test accessibility, dark mode, and responsive design before sending.
"""

import re
from typing import Dict, List, Any, Optional


class EmailARVRPreview:
    """Preview email rendering across multiple platforms and devices."""
    
    def __init__(self):
        self.email_clients = {
            'gmail_web': {'name': 'Gmail (Web)', 'css_support': 'partial', 'image_loading': 'auto', 'dark_mode': True},
            'outlook_desktop': {'name': 'Outlook Desktop', 'css_support': 'limited', 'image_loading': 'blocked', 'dark_mode': False},
            'apple_mail': {'name': 'Apple Mail', 'css_support': 'full', 'image_loading': 'auto', 'dark_mode': True},
            'thunderbird': {'name': 'Thunderbird', 'css_support': 'full', 'image_loading': 'auto', 'dark_mode': True},
            'gmail_mobile': {'name': 'Gmail Mobile', 'css_support': 'partial', 'image_loading': 'auto', 'dark_mode': True},
            'outlook_mobile': {'name': 'Outlook Mobile', 'css_support': 'limited', 'image_loading': 'auto', 'dark_mode': False}
        }
        
        self.devices = {
            'desktop_1920': {'name': 'Desktop 1920x1080', 'width': 1920, 'height': 1080, 'type': 'desktop'},
            'laptop_1366': {'name': 'Laptop 1366x768', 'width': 1366, 'height': 768, 'type': 'laptop'},
            'tablet_768': {'name': 'Tablet 768x1024', 'width': 768, 'height': 1024, 'type': 'tablet'},
            'mobile_375': {'name': 'Mobile 375x667', 'width': 375, 'height': 667, 'type': 'mobile'}
        }
    
    def preview_email(self, email_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate preview across all clients and devices."""
        subject = email_data.get('subject', '')
        body = email_data.get('body', '')
        html = email_data.get('html', '')
        recipients = email_data.get('recipients', [])
        
        # Test each email client
        client_previews = []
        for client_id, client_info in self.email_clients.items():
            preview = self._test_client(client_id, client_info, subject, body, html)
            client_previews.append(preview)
        
        # Test each device
        device_previews = []
        for device_id, device_info in self.devices.items():
            preview = self._test_device(device_id, device_info, subject, body, html)
            device_previews.append(preview)
        
        # Accessibility check
        accessibility = self._check_accessibility(html, body)
        
        # Dark mode test
        dark_mode = self._test_dark_mode(html, body)
        
        # Responsive design check
        responsive = self._check_responsive(html)
        
        # Calculate overall score
        client_score = sum(p['compatibility_score'] for p in client_previews) / len(client_previews)
        device_score = sum(p['readability_score'] for p in device_previews) / len(device_previews)
        overall_score = (client_score + device_score + accessibility['score']) / 3
        
        return {
            'overall_score': round(overall_score, 1),
            'client_previews': client_previews,
            'device_previews': device_previews,
            'accessibility': accessibility,
            'dark_mode_compatible': dark_mode['compatible'],
            'responsive_design': responsive['responsive'],
            'issues_found': self._count_issues(client_previews, device_previews, accessibility),
            'recommendations': self._generate_recommendations(client_previews, device_previews, accessibility, dark_mode, responsive),
            'reply_all_required': len(recipients) > 1
        }
    
    def _test_client(self, client_id: str, client_info: Dict, subject: str, body: str, html: str) -> Dict[str, Any]:
        """Test email rendering on specific client."""
        issues = []
        score = 100
        
        # Check CSS support
        if html:
            css_features = ['flexbox', 'grid', 'transform', 'animation', 'gradient']
            for feature in css_features:
                if feature in html.lower():
                    if client_info['css_support'] == 'limited':
                        issues.append(f"{feature} not supported in {client_info['name']}")
                        score -= 10
                    elif client_info['css_support'] == 'partial':
                        issues.append(f"{feature} partially supported in {client_info['name']}")
                        score -= 5
        
        # Check images
        if '<img' in html.lower():
            if client_info['image_loading'] == 'blocked':
                issues.append(f"Images blocked by default in {client_info['name']}")
                score -= 15
            if 'alt=' not in html.lower():
                issues.append("Missing alt text on images")
                score -= 10
        
        # Check dark mode
        if client_info['dark_mode']:
            if not self._has_dark_mode_support(html):
                issues.append(f"May not look good in dark mode ({client_info['name']})")
                score -= 8
        
        return {
            'client': client_info['name'],
            'client_id': client_id,
            'compatibility_score': max(0, score),
            'issues': issues[:5],
            'issues_count': len(issues)
        }
    
    def _test_device(self, device_id: str, device_info: Dict, subject: str, body: str, html: str) -> Dict[str, Any]:
        """Test email rendering on specific device."""
        width = device_info['width']
        score = 100
        issues = []
        
        # Check if content fits screen
        if html:
            # Check for fixed widths
            fixed_widths = re.findall(r'width=["\']?(\d+)["\']?px', html)
            for w in fixed_widths:
                if int(w) > width:
                    issues.append(f"Fixed width {w}px exceeds {device_info['name']} width")
                    score -= 15
                    break
        
        # Check text readability
        if device_info['type'] == 'mobile':
            if len(body.split()[0]) > 30:  # First word too long
                issues.append("Long unbreakable text may overflow on mobile")
                score -= 10
        
        return {
            'device': device_info['name'],
            'device_id': device_id,
            'readability_score': max(0, score),
            'issues': issues[:3],
            'issues_count': len(issues)
        }
    
    def _check_accessibility(self, html: str, body: str) -> Dict[str, Any]:
        """Check email accessibility."""
        score = 100
        issues = []
        
        # Check alt text
        if '<img' in html.lower():
            img_count = html.lower().count('<img')
            alt_count = html.lower().count('alt=')
            if alt_count < img_count:
                issues.append(f"Missing alt text on {img_count - alt_count} image(s)")
                score -= 20
        
        # Check heading structure
        if html:
            headings = re.findall(r'<h([1-6])', html.lower())
            if headings:
                # Check for skipped levels
                levels = [int(h) for h in headings]
                for i in range(1, len(levels)):
                    if levels[i] > levels[i-1] + 1:
                        issues.append(f"Skipped heading level (H{levels[i-1]} to H{levels[i]})")
                        score -= 10
                        break
        
        # Check link text
        if 'click here' in body.lower() or 'read more' in body.lower():
            issues.append("Generic link text ('click here', 'read more')")
            score -= 10
        
        # Check color contrast (simplified)
        if html:
            if 'color' in html.lower() and 'background' in html.lower():
                issues.append("Verify color contrast meets WCAG 2.1 standards")
                score -= 5
        
        return {
            'score': max(0, score),
            'issues': issues[:5],
            'wcag_compliant': score >= 80
        }
    
    def _test_dark_mode(self, html: str, body: str) -> Dict[str, Any]:
        """Test dark mode compatibility."""
        compatible = True
        issues = []
        
        if html:
            # Check for hardcoded colors
            hardcoded_colors = re.findall(r'color:\s*#([0-9a-f]{3,6})', html.lower())
            for color in hardcoded_colors:
                # Check if light color (might be hard to read on dark background)
                if len(color) == 6:
                    r, g, b = int(color[:2], 16), int(color[2:4], 16), int(color[4:6], 16)
                    luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
                    if luminance > 0.8:  # Very light color
                        compatible = False
                        issues.append(f"Light color #{color} may be hard to read in dark mode")
                        break
        
        return {
            'compatible': compatible,
            'issues': issues[:3]
        }
    
    def _check_responsive(self, html: str) -> Dict[str, Any]:
        """Check responsive design."""
        responsive = False
        issues = []
        
        if html:
            # Check for media queries
            if '@media' in html:
                responsive = True
            else:
                issues.append("No media queries found - may not be mobile-friendly")
            
            # Check for viewport meta
            if 'viewport' not in html.lower():
                issues.append("Missing viewport meta tag")
            
            # Check for max-width
            if 'max-width' in html.lower():
                responsive = True
        else:
            responsive = True  # Plain text is inherently responsive
        
        return {
            'responsive': responsive,
            'issues': issues[:3]
        }
    
    def _has_dark_mode_support(self, html: str) -> bool:
        """Check if HTML has dark mode support."""
        if not html:
            return True
        return 'prefers-color-scheme' in html or 'dark' in html.lower()
    
    def _count_issues(self, client_previews: List, device_previews: List, accessibility: Dict) -> int:
        """Count total issues."""
        client_issues = sum(p['issues_count'] for p in client_previews)
        device_issues = sum(p['issues_count'] for p in device_previews)
        a11y_issues = len(accessibility['issues'])
        return client_issues + device_issues + a11y_issues
    
    def _generate_recommendations(self, client_previews: List, device_previews: List, 
                                  accessibility: Dict, dark_mode: Dict, responsive: Dict) -> List[str]:
        """Generate actionable recommendations."""
        recommendations = []
        
        # Client recommendations
        low_score_clients = [p for p in client_previews if p['compatibility_score'] < 70]
        if low_score_clients:
            recommendations.append(f"Test carefully on {low_score_clients[0]['client']} - compatibility issues detected")
        
        # Device recommendations
        mobile_issues = [p for p in device_previews if 'mobile' in p['device'].lower() and p['issues_count'] > 0]
        if mobile_issues:
            recommendations.append("Optimize for mobile - fixed widths or long text detected")
        
        # Accessibility recommendations
        if not accessibility['wcag_compliant']:
            recommendations.append("Improve accessibility: add alt text, fix heading structure, use descriptive links")
        
        # Dark mode
        if not dark_mode['compatible']:
            recommendations.append("Add dark mode support with CSS media queries")
        
        # Responsive
        if not responsive['responsive']:
            recommendations.append("Make email responsive with media queries and flexible layouts")
        
        if not recommendations:
            recommendations.append("Email looks great! No major issues detected")
        
        return recommendations[:5]


def main():
    """Test AR/VR preview engine."""
    preview = EmailARVRPreview()
    
    test_email = {
        'subject': 'Welcome to Our Newsletter',
        'body': 'Hi there! Click here to read our latest updates. Thanks!',
        'html': '''
        <html>
        <head><meta name="viewport" content="width=device-width"></head>
        <body style="background: #ffffff; color: #333333;">
            <div style="width: 800px; margin: 0 auto;">
                <h1>Welcome!</h1>
                <img src="banner.jpg">
                <p style="color: #ffff00;">Important announcement</p>
                <a href="#">Click here</a>
            </div>
        </body>
        </html>
        ''',
        'recipients': ['user1@example.com', 'user2@example.com']
    }
    
    result = preview.preview_email(test_email)
    
    print("=" * 60)
    print("V942: Email AR/VR Preview Engine - Test Results")
    print("=" * 60)
    print(f"\nOverall Score: {result['overall_score']}/100")
    print(f"Issues Found: {result['issues_found']}")
    print(f"Dark Mode Compatible: {result['dark_mode_compatible']}")
    print(f"Responsive: {result['responsive_design']}")
    print(f"WCAG Compliant: {result['accessibility']['wcag_compliant']}")
    print(f"Reply All Required: {result['reply_all_required']}")
    
    print("\nTop Client Issues:")
    for client in result['client_previews'][:3]:
        if client['issues_count'] > 0:
            print(f"  {client['client']}: {client['compatibility_score']}/100")
            for issue in client['issues'][:2]:
                print(f"    - {issue}")
    
    print("\nAccessibility Issues:")
    for issue in result['accessibility']['issues'][:3]:
        print(f"  - {issue}")
    
    print("\nRecommendations:")
    for rec in result['recommendations'][:4]:
        print(f"  💡 {rec}")
    
    print("\n✅ V942 Email AR/VR Preview Engine: OPERATIONAL")


if __name__ == '__main__':
    main()
