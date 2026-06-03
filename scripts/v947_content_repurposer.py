#!/usr/bin/env python3
"""
V947: Email Content Repurposer
Transforms email content into multiple formats: blog posts, social media,
presentations, documentation, and marketing materials.
"""

import re
from datetime import datetime
from typing import Dict, List, Any

class ContentRepurposer:
    def __init__(self):
        self.formats = {
            'blog_post': {'min_words': 300, 'tone': 'informative', 'structure': 'narrative'},
            'social_media': {'max_chars': 280, 'tone': 'engaging', 'structure': 'punchy'},
            'presentation': {'slides': 5, 'tone': 'professional', 'structure': 'bullet_points'},
            'documentation': {'sections': 4, 'tone': 'technical', 'structure': 'structured'},
            'marketing': {'cta_required': True, 'tone': 'persuasive', 'structure': 'benefit_focused'}
        }
    
    def analyze_email(self, email: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze email content for repurposing potential."""
        subject = email.get('subject', '')
        body = email.get('body', '')
        recipients = email.get('recipients', [])
        
        # Case-by-case content analysis
        word_count = len(body.split())
        has_data = bool(re.search(r'\d+%|\$\d+|\d+ users', body))
        has_story = bool(re.search(r'(customer|client|user|story|case study)', body, re.I))
        has_tech = bool(re.search(r'(API|integration|technical|architecture)', body, re.I))
        has_benefit = bool(re.search(r'(benefit|advantage|improve|increase|reduce)', body, re.I))
        
        # Determine best formats
        suitable_formats = []
        
        if word_count >= 300 and (has_data or has_story):
            suitable_formats.append('blog_post')
        
        if has_benefit or has_data:
            suitable_formats.append('social_media')
        
        if word_count >= 200 and (has_data or has_tech):
            suitable_formats.append('presentation')
        
        if has_tech:
            suitable_formats.append('documentation')
        
        if has_benefit and word_count >= 150:
            suitable_formats.append('marketing')
        
        # Generate repurposed content
        repurposed_content = {}
        for fmt in suitable_formats:
            repurposed_content[fmt] = self._generate_content(fmt, subject, body)
        
        # Calculate repurposing score
        repurposing_score = len(suitable_formats) * 20
        
        # Reply-all check
        reply_all_required = len(recipients) > 1
        
        return {
            'email_id': email.get('id'),
            'word_count': word_count,
            'suitable_formats': suitable_formats,
            'repurposing_score': repurposing_score,
            'content_indicators': {
                'has_data': has_data,
                'has_story': has_story,
                'has_tech': has_tech,
                'has_benefit': has_benefit
            },
            'repurposed_content': repurposed_content,
            'reply_all_required': reply_all_required,
            'recommendations': self._generate_recommendations(suitable_formats, repurposing_score)
        }
    
    def _generate_content(self, format_type: str, subject: str, body: str) -> Dict[str, Any]:
        """Generate repurposed content for specific format."""
        if format_type == 'blog_post':
            return {
                'title': subject,
                'word_count': len(body.split()),
                'structure': 'Introduction → Problem → Solution → Results → Conclusion',
                'seo_keywords': self._extract_keywords(body)[:5],
                'estimated_read_time': f"{max(1, len(body.split()) // 200)} min"
            }
        
        elif format_type == 'social_media':
            snippet = body[:250] + '...' if len(body) > 250 else body
            return {
                'tweet': snippet[:280],
                'hashtags': ['#Innovation', '#Technology', '#Business'],
                'engagement_prediction': 'high' if any(w in body.lower() for w in ['breakthrough', 'new', 'launch']) else 'medium'
            }
        
        elif format_type == 'presentation':
            sentences = [s.strip() for s in body.split('.') if len(s.strip()) > 20][:5]
            return {
                'slide_count': min(5, len(sentences)),
                'slide_titles': [f"Slide {i+1}: {s[:50]}" for i, s in enumerate(sentences)],
                'visual_suggestions': ['Charts', 'Infographics', 'Screenshots']
            }
        
        elif format_type == 'documentation':
            return {
                'sections': ['Overview', 'Requirements', 'Implementation', 'Examples'],
                'code_examples': bool(re.search(r'(code|example|snippet)', body, re.I)),
                'api_references': bool(re.search(r'API|endpoint|request|response', body, re.I))
            }
        
        elif format_type == 'marketing':
            return {
                'headline': subject,
                'key_benefits': self._extract_benefits(body)[:3],
                'call_to_action': 'Learn More' if 'learn' in body.lower() else 'Get Started',
                'target_audience': 'Business Decision Makers'
            }
        
        return {}
    
    def _extract_keywords(self, text: str) -> List[str]:
        """Extract SEO keywords from text."""
        words = re.findall(r'\b[a-z]{4,}\b', text.lower())
        stop_words = {'this', 'that', 'with', 'from', 'have', 'been', 'will', 'would', 'could', 'should'}
        filtered = [w for w in words if w not in stop_words]
        return list(set(filtered))[:10]
    
    def _extract_benefits(self, text: str) -> List[str]:
        """Extract benefit statements from text."""
        benefits = []
        patterns = [
            r'(?:improve|increase|reduce|save|enhance)\s+[a-z\s]+\s+by\s+\d+%',
            r'(?:benefit|advantage|feature)[:\s]+[^\n\.]+',
            r'(?:help|enable|allow)\s+you\s+to\s+[^\n\.]+'
        ]
        for pattern in patterns:
            matches = re.findall(pattern, text, re.I)
            benefits.extend(matches[:2])
        return benefits[:5]
    
    def _generate_recommendations(self, formats: List[str], score: int) -> List[str]:
        """Generate content repurposing recommendations."""
        recommendations = []
        
        if 'blog_post' in formats:
            recommendations.append("Expand into long-form blog post with case studies")
        
        if 'social_media' in formats:
            recommendations.append("Create social media campaign with multiple posts")
        
        if 'presentation' in formats:
            recommendations.append("Develop slide deck for webinars or sales meetings")
        
        if 'documentation' in formats:
            recommendations.append("Create technical documentation with code examples")
        
        if 'marketing' in formats:
            recommendations.append("Build landing page with benefit-focused messaging")
        
        if score >= 80:
            recommendations.append("High repurposing potential - consider multi-channel campaign")
        
        if not formats:
            recommendations.append("Content not suitable for repurposing - internal communication")
        
        return recommendations


def main():
    """Test V947 Content Repurposer."""
    repurposer = ContentRepurposer()
    
    test_emails = [
        {
            'id': 'case_study',
            'subject': 'Customer Success Story: 50% Efficiency Increase',
            'body': 'Our customer Acme Corp achieved 50% efficiency increase using our platform. They reduced processing time from 10 hours to 5 hours. The API integration was seamless and their team saved $100K annually. This breakthrough solution helps businesses automate workflows and improve productivity.',
            'recipients': ['marketing@company.com', 'sales@company.com']
        },
        {
            'id': 'tech_update',
            'subject': 'New API Features Released',
            'body': 'We released new API endpoints for batch processing. Technical documentation includes code examples and integration guides. The architecture supports 10,000 requests per second with 99.9% uptime.',
            'recipients': ['dev-team@company.com']
        },
        {
            'id': 'meeting_notes',
            'subject': 'Weekly Team Standup',
            'body': 'Discussed project status. John working on feature A. Mary on bug fixes. Next meeting Friday.',
            'recipients': ['team@company.com']
        }
    ]
    
    print("=" * 60)
    print("V947: Email Content Repurposer - Test Results")
    print("=" * 60)
    
    for email in test_emails:
        result = repurposer.analyze_email(email)
        print(f"\nEmail: {email['subject']}")
        print(f"  Word Count: {result['word_count']}")
        print(f"  Suitable Formats: {result['suitable_formats']}")
        print(f"  Score: {result['repurposing_score']}")
        print(f"  Reply-All: {result['reply_all_required']}")
        if result['repurposed_content']:
            first_format = list(result['repurposed_content'].keys())[0]
            print(f"  Sample ({first_format}): {list(result['repurposed_content'][first_format].keys())[:3]}")
        if result['recommendations']:
            print(f"  Top Recommendation: {result['recommendations'][0]}")
    
    print("\n✅ V947 Content Repurposer: OPERATIONAL")


if __name__ == '__main__':
    main()
