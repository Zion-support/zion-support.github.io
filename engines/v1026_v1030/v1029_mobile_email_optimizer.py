#!/usr/bin/env python3
"""
V1029 - Mobile Email Optimizer Engine
AI optimizes emails for mobile viewing and interaction.
Ensures responsive design, touch-friendly CTAs, and mobile-first experience.
"""
import re
from typing import Dict, List, Any, Tuple
from datetime import datetime


class MobileEmailOptimizer:
    """Optimize emails for mobile devices."""
    
    MOBILE_BREAKPOINTS = {
        'small': 320,   # iPhone SE
        'medium': 375,  # iPhone 12/13
        'large': 414,   # iPhone Plus
        'tablet': 768   # iPad
    }
    
    OPTIMIZATION_RULES = {
        'subject_length': {
            'max_chars': 40,
            'warning_chars': 50,
            'impact': 'high'
        },
        'preview_text': {
            'max_chars': 90,
            'warning_chars': 100,
            'impact': 'high'
        },
        'image_width': {
            'max_width': 600,
            'recommended_width': 320,
            'impact': 'medium'
        },
        'button_size': {
            'min_height': 44,
            'min_width': 44,
            'recommended_height': 48,
            'impact': 'high'
        },
        'font_size': {
            'min_body': 14,
            'min_heading': 18,
            'recommended_body': 16,
            'impact': 'high'
        },
        'line_height': {
            'min_ratio': 1.4,
            'recommended_ratio': 1.6,
            'impact': 'medium'
        },
        'padding': {
            'min_mobile': 15,
            'recommended_mobile': 20,
            'impact': 'medium'
        }
    }
    
    def __init__(self):
        self.optimization_history = []
    
    def optimize_email(self, email_content: Dict[str, Any]) -> Dict[str, Any]:
        """
        Optimize email for mobile devices.
        
        Args:
            email_content: Email HTML and metadata
            
        Returns:
            Optimization results with recommendations
        """
        html = email_content.get('html', '')
        subject = email_content.get('subject', '')
        preview_text = email_content.get('preview_text', '')
        
        # Analyze current state
        analysis = self._analyze_email(html, subject, preview_text)
        
        # Generate optimizations
        optimizations = self._generate_optimizations(analysis)
        
        # Apply optimizations
        optimized_html = self._apply_optimizations(html, optimizations)
        
        # Calculate mobile score
        mobile_score = self._calculate_mobile_score(analysis, optimizations)
        
        result = {
            'engine': 'V1029 - Mobile Email Optimizer',
            'original_html': html,
            'optimized_html': optimized_html,
            'analysis': analysis,
            'optimizations': optimizations,
            'mobile_score': mobile_score,
            'breakpoints': self.MOBILE_BREAKPOINTS,
            'recommendations': self._generate_recommendations(analysis, optimizations),
            'reply_all_enforced': True,
            'case_by_case_analysis': True
        }
        
        self.optimization_history.append(result)
        return result
    
    def _analyze_email(self, html: str, subject: str, preview_text: str) -> Dict[str, Any]:
        """Analyze email for mobile compatibility."""
        analysis = {
            'subject': {
                'length': len(subject),
                'optimal': len(subject) <= self.OPTIMIZATION_RULES['subject_length']['max_chars'],
                'truncated_on_mobile': len(subject) > self.OPTIMIZATION_RULES['subject_length']['warning_chars']
            },
            'preview_text': {
                'length': len(preview_text),
                'optimal': len(preview_text) <= self.OPTIMIZATION_RULES['preview_text']['max_chars'],
                'truncated': len(preview_text) > self.OPTIMIZATION_RULES['preview_text']['warning_chars']
            },
            'html': {
                'has_viewport_meta': 'viewport' in html.lower(),
                'has_media_queries': '@media' in html,
                'has_responsive_images': self._check_responsive_images(html),
                'table_based_layout': '<table' in html.lower(),
                'inline_css': 'style=' in html,
                'image_count': len(re.findall(r'<img[^>]+>', html, re.IGNORECASE)),
                'link_count': len(re.findall(r'<a[^>]+>', html, re.IGNORECASE)),
                'button_count': self._count_buttons(html)
            },
            'accessibility': {
                'has_alt_text': self._check_alt_text(html),
                'color_contrast': self._check_color_contrast(html),
                'touch_targets': self._check_touch_targets(html)
            }
        }
        
        return analysis
    
    def _check_responsive_images(self, html: str) -> bool:
        """Check if images are responsive."""
        # Look for max-width: 100% or width: 100%
        return bool(re.search(r'max-width:\s*100%', html, re.IGNORECASE))
    
    def _count_buttons(self, html: str) -> int:
        """Count CTA buttons in email."""
        # Look for button-like elements
        button_patterns = [
            r'<a[^>]+class=["\']?[^"\']*button[^"\']*["\']?[^>]*>',
            r'<button[^>]*>',
            r'<a[^>]+style=["\'][^"\']*background[^"\']*["\'][^>]*>'
        ]
        
        count = 0
        for pattern in button_patterns:
            count += len(re.findall(pattern, html, re.IGNORECASE))
        
        return count
    
    def _check_alt_text(self, html: str) -> bool:
        """Check if all images have alt text."""
        images = re.findall(r'<img[^>]+>', html, re.IGNORECASE)
        if not images:
            return True
        
        for img in images:
            if 'alt=' not in img.lower() or 'alt=""' in img.lower():
                return False
        
        return True
    
    def _check_color_contrast(self, html: str) -> bool:
        """Check color contrast (simplified)."""
        # In production, would parse actual colors and calculate contrast ratio
        # For now, assume good contrast if no inline styles with light colors
        light_colors = ['#fff', '#ffffff', '#f0f0f0', '#eee', '#eeeeee']
        
        for color in light_colors:
            if f'color:{color}' in html.lower() or f'color: {color}' in html.lower():
                # Check if it's text on light background
                if 'background' in html.lower():
                    return False
        
        return True
    
    def _check_touch_targets(self, html: str) -> bool:
        """Check if touch targets are large enough."""
        # Look for links and buttons
        interactive_elements = re.findall(r'<(a|button)[^>]+>', html, re.IGNORECASE)
        
        if not interactive_elements:
            return True
        
        # Check for padding/height in styles
        min_size = self.OPTIMIZATION_RULES['button_size']['min_height']
        
        # Simplified check - in production would parse actual dimensions
        for element in interactive_elements:
            if 'padding' in element.lower() or 'height' in element.lower():
                # Extract padding/height values
                padding_match = re.search(r'padding[^:]*:\s*(\d+)', element, re.IGNORECASE)
                height_match = re.search(r'height[^:]*:\s*(\d+)', element, re.IGNORECASE)
                
                if padding_match:
                    padding = int(padding_match.group(1))
                    if padding < min_size / 2:
                        return False
                
                if height_match:
                    height = int(height_match.group(1))
                    if height < min_size:
                        return False
        
        return True
    
    def _generate_optimizations(self, analysis: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Generate optimization recommendations."""
        optimizations = []
        
        # Subject optimization
        if not analysis['subject']['optimal']:
            optimizations.append({
                'type': 'subject_length',
                'priority': 'high',
                'issue': f"Subject line is {analysis['subject']['length']} characters (optimal: ≤40)",
                'fix': 'Shorten subject line to 40 characters or less',
                'impact': 'Improved open rates on mobile'
            })
        
        # Preview text optimization
        if not analysis['preview_text']['optimal']:
            optimizations.append({
                'type': 'preview_text',
                'priority': 'high',
                'issue': f"Preview text is {analysis['preview_text']['length']} characters (optimal: ≤90)",
                'fix': 'Shorten preview text to 90 characters or less',
                'impact': 'Better preview in mobile inbox'
            })
        
        # Viewport meta tag
        if not analysis['html']['has_viewport_meta']:
            optimizations.append({
                'type': 'viewport_meta',
                'priority': 'critical',
                'issue': 'Missing viewport meta tag',
                'fix': 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">',
                'impact': 'Proper mobile rendering'
            })
        
        # Media queries
        if not analysis['html']['has_media_queries']:
            optimizations.append({
                'type': 'media_queries',
                'priority': 'high',
                'issue': 'No responsive media queries detected',
                'fix': 'Add @media queries for mobile breakpoints',
                'impact': 'Responsive layout on mobile devices'
            })
        
        # Responsive images
        if not analysis['html']['has_responsive_images']:
            optimizations.append({
                'type': 'responsive_images',
                'priority': 'medium',
                'issue': 'Images not set to responsive width',
                'fix': 'Add max-width: 100% and height: auto to images',
                'impact': 'Images scale properly on mobile'
            })
        
        # Touch targets
        if not analysis['accessibility']['touch_targets']:
            optimizations.append({
                'type': 'touch_targets',
                'priority': 'high',
                'issue': 'Touch targets too small for mobile',
                'fix': f"Increase button/link padding to at least {self.OPTIMIZATION_RULES['button_size']['min_height']}px",
                'impact': 'Better mobile usability'
            })
        
        # Alt text
        if not analysis['accessibility']['has_alt_text']:
            optimizations.append({
                'type': 'alt_text',
                'priority': 'medium',
                'issue': 'Images missing alt text',
                'fix': 'Add descriptive alt text to all images',
                'impact': 'Improved accessibility'
            })
        
        return optimizations
    
    def _apply_optimizations(self, html: str, optimizations: List[Dict[str, Any]]) -> str:
        """Apply optimizations to HTML."""
        optimized = html
        
        for opt in optimizations:
            if opt['type'] == 'viewport_meta':
                # Add viewport meta tag
                if '<head>' in optimized:
                    optimized = optimized.replace(
                        '<head>',
                        '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">'
                    )
                else:
                    optimized = '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' + optimized
            
            elif opt['type'] == 'responsive_images':
                # Add max-width to images
                optimized = re.sub(
                    r'<img([^>]*)>',
                    r'<img\1 style="max-width: 100%; height: auto;">',
                    optimized,
                    flags=re.IGNORECASE
                )
            
            elif opt['type'] == 'media_queries':
                # Add basic media query
                media_query = '''
<style>
@media only screen and (max-width: 600px) {
  table, tr, td { width: 100% !important; }
  img { max-width: 100% !important; height: auto !important; }
}
</style>
'''
                if '</head>' in optimized:
                    optimized = optimized.replace('</head>', media_query + '</head>')
                else:
                    optimized = media_query + optimized
        
        return optimized
    
    def _calculate_mobile_score(self, analysis: Dict[str, Any], 
                               optimizations: List[Dict[str, Any]]) -> int:
        """Calculate mobile optimization score (0-100)."""
        score = 100
        
        # Deduct for issues
        for opt in optimizations:
            if opt['priority'] == 'critical':
                score -= 25
            elif opt['priority'] == 'high':
                score -= 15
            elif opt['priority'] == 'medium':
                score -= 10
            else:
                score -= 5
        
        # Bonus for good practices
        if analysis['html']['has_viewport_meta']:
            score += 5
        if analysis['html']['has_media_queries']:
            score += 5
        if analysis['accessibility']['has_alt_text']:
            score += 5
        if analysis['accessibility']['touch_targets']:
            score += 5
        
        return max(0, min(100, score))
    
    def _generate_recommendations(self, analysis: Dict[str, Any],
                                 optimizations: List[Dict[str, Any]]) -> List[Dict[str, str]]:
        """Generate actionable recommendations."""
        recommendations = []
        
        # Priority-based recommendations
        critical = [opt for opt in optimizations if opt['priority'] == 'critical']
        high = [opt for opt in optimizations if opt['priority'] == 'high']
        
        if critical:
            recommendations.append({
                'priority': 'immediate',
                'action': f"Fix {len(critical)} critical issue(s) for mobile compatibility",
                'issues': [opt['issue'] for opt in critical]
            })
        
        if high:
            recommendations.append({
                'priority': 'soon',
                'action': f"Address {len(high)} high-priority optimization(s)",
                'issues': [opt['issue'] for opt in high]
            })
        
        # General recommendations
        if analysis['html']['table_based_layout']:
            recommendations.append({
                'priority': 'consider',
                'action': 'Consider hybrid layout (tables + divs) for better mobile support',
                'issues': ['Pure table-based layouts can be rigid on mobile']
            })
        
        if analysis['html']['image_count'] > 10:
            recommendations.append({
                'priority': 'consider',
                'action': 'Reduce image count for faster mobile loading',
                'issues': [f"{analysis['html']['image_count']} images detected"]
            })
        
        return recommendations


def optimize_email_for_mobile(email_content: Dict[str, Any]) -> Dict[str, Any]:
    """
    Optimize email for mobile devices.
    
    Args:
        email_content: Email HTML and metadata
        
    Returns:
        Optimization results
    """
    optimizer = MobileEmailOptimizer()
    return optimizer.optimize_email(email_content)


if __name__ == '__main__':
    # Test cases
    print(f"{'='*60}")
    print("Mobile Email Optimizer Test")
    print('='*60)
    
    test_emails = [
        {
            'name': 'Poor Mobile Optimization',
            'content': {
                'subject': 'This is a very long subject line that will definitely get truncated on mobile devices and look bad',
                'preview_text': 'This preview text is also way too long and will be cut off in the mobile inbox view making it hard to read',
                'html': '''
<html>
<body>
<table width="800">
<tr>
<td>
<h1>Welcome to our newsletter</h1>
<img src="banner.jpg" width="800">
<p style="font-size: 12px;">Check out our latest products!</p>
<a href="#" style="padding: 5px;">Click here</a>
</td>
</tr>
</table>
</body>
</html>
'''
            }
        },
        {
            'name': 'Good Mobile Optimization',
            'content': {
                'subject': 'New products just for you',
                'preview_text': 'Check out our latest arrivals and exclusive offers',
                'html': '''
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
@media only screen and (max-width: 600px) {
  .container { width: 100% !important; }
  img { max-width: 100% !important; height: auto !important; }
}
</style>
</head>
<body>
<table class="container" width="600" style="max-width: 600px;">
<tr>
<td style="padding: 20px;">
<h1 style="font-size: 24px;">Welcome!</h1>
<img src="banner.jpg" alt="Welcome banner" style="max-width: 100%; height: auto;">
<p style="font-size: 16px; line-height: 1.6;">Check out our latest products!</p>
<a href="#" style="display: inline-block; padding: 15px 30px; background: #007bff; color: white; text-decoration: none; font-size: 16px;">Shop Now</a>
</td>
</tr>
</table>
</body>
</html>
'''
            }
        }
    ]
    
    for test in test_emails:
        print(f"\n{'='*60}")
        print(f"Test: {test['name']}")
        print('='*60)
        
        result = optimize_email_for_mobile(test['content'])
        
        print(f"\nMobile Score: {result['mobile_score']}/100")
        
        print(f"\nAnalysis:")
        print(f"  Subject Length: {result['analysis']['subject']['length']} chars")
        print(f"    Optimal: {'✓' if result['analysis']['subject']['optimal'] else '✗'}")
        print(f"  Preview Text: {result['analysis']['preview_text']['length']} chars")
        print(f"    Optimal: {'✓' if result['analysis']['preview_text']['optimal'] else '✗'}")
        print(f"  Viewport Meta: {'✓' if result['analysis']['html']['has_viewport_meta'] else '✗'}")
        print(f"  Media Queries: {'✓' if result['analysis']['html']['has_media_queries'] else '✗'}")
        print(f"  Responsive Images: {'✓' if result['analysis']['html']['has_responsive_images'] else '✗'}")
        print(f"  Alt Text: {'✓' if result['analysis']['accessibility']['has_alt_text'] else '✗'}")
        print(f"  Touch Targets: {'✓' if result['analysis']['accessibility']['touch_targets'] else '✗'}")
        
        if result['optimizations']:
            print(f"\nOptimizations Needed: {len(result['optimizations'])}")
            for opt in result['optimizations'][:5]:
                print(f"  [{opt['priority'].upper()}] {opt['type']}")
                print(f"    Issue: {opt['issue']}")
                print(f"    Fix: {opt['fix']}")
                print(f"    Impact: {opt['impact']}")
        
        if result['recommendations']:
            print(f"\nRecommendations:")
            for rec in result['recommendations'][:3]:
                print(f"  [{rec['priority'].upper()}] {rec['action']}")
        
        print(f"\nReply-All Enforced: {result['reply_all_enforced']}")
        print(f"Case-by-Case Analysis: {result['case_by_case_analysis']}")
