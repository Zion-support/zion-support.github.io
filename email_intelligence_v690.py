#!/usr/bin/env python3
"""
V690 - Email Cultural Sensitivity Analyzer
Detects culturally insensitive language, suggests alternatives for global
communication, and ensures respectful cross-cultural interactions.
"""

import json
import re
from datetime import datetime
from collections import Counter, defaultdict
from typing import Dict, List, Optional, Tuple

class EmailCulturalSensitivityAnalyzer:
    def __init__(self):
        self.analysis_history = []
        self.cultural_contexts = defaultdict(list)
    
    # Cultural sensitivity categories
    CULTURAL_PATTERNS = {
        'religious_references': {
            'patterns': [
                r'(?:pray|praying|prayer) (?:for|that)',
                r'(?:god|jesus|christ|allah|buddha) (?:willing|help|bless)',
                r'(?:blessed|blessing|miracle|divine)',
                r'(?:inshallah|mashallah|alhamdulillah)',
                r'(?:baruch hashem|bezrat hashem)',
            ],
            'sensitivity': 'medium',
            'suggestion': 'Consider using secular alternatives for diverse audiences'
        },
        'cultural_idioms': {
            'patterns': [
                r'(?:hit it out of the park|knock it out of the park|home run)',
                r'(?:touch base|circle back|take this offline)',
                r'(?:think outside the box|low-hanging fruit|move the needle)',
                r'(?:ballpark (?:figure|estimate)|ball is in your court)',
                r'(?:bite the bullet|cut to the chase|elephant in the room)',
                r'(?:grandfather (?:in|clause)|powwow|spirit animal|tribe)',
                r'(?:guru|ninja|rockstar|wizard)',
            ],
            'sensitivity': 'low',
            'suggestion': 'Use plain language for international audiences'
        },
        'gendered_language': {
            'patterns': [
                r'\b(?:guys|dudes|lads|fellas)\b(?!\s*(?:and\s*gals|and\s*ladies))',
                r'\b(?:manpower|man-made|manhole|chairman|mankind)\b',
                r'\b(?:he|his|him)\b(?=\s+(?:or\s+she|/\s*she))',
                r'\b(?:boys will be boys|like a girl|man up)\b',
            ],
            'sensitivity': 'medium',
            'suggestion': 'Use gender-neutral alternatives (team, folks, everyone, workforce, artificial, access point, chairperson, humanity)'
        },
        'age_discrimination': {
            'patterns': [
                r'(?:too old|too young|over the hill|past (?:your|their) prime)',
                r'(?:boomer|millennial|gen z|ok boomer)',
                r'(?:digital native|digital immigrant)',
                r'(?:not tech-savvy|set in (?:your|their) ways)',
                r'(?:young and inexperienced|old-fashioned)',
            ],
            'sensitivity': 'medium',
            'suggestion': 'Avoid age-based stereotypes; focus on skills and experience'
        },
        'cultural_appropriation': {
            'patterns': [
                r'(?:spirit animal|totem|tribe|powwow)',
                r'(?:guru|ninja|samurai|karma|zen)\b(?!\s*(?:training|arts))',
                r'(?:sacred|ritual|ceremonial)\b',
                r'(?:exotic|ethnic|oriental)\b',
            ],
            'sensitivity': 'high',
            'suggestion': 'Use culturally respectful alternatives; avoid trivializing sacred concepts'
        },
        'disability_language': {
            'patterns': [
                r'(?:crippled|handicapped|wheelchair-bound|suffers from)',
                r'(?:blind to|deaf to|turn a blind eye|fall on deaf ears)',
                r'(?:insane|crazy|lunatic|psycho|schizophrenic|bipolar)\b',
                r'(?:retarded|moron|idiot|imbecile|dumb)',
                r'(?:confined to a wheelchair|afflicted with)',
            ],
            'sensitivity': 'high',
            'suggestion': 'Use person-first language (person with disability, unaware of, unreasonable, unintelligent)'
        },
        'racial_ethnic_stereotypes': {
            'patterns': [
                r'(?:gypped|jewed|chink|spic|wetback)',
                r'(?:grandfathered in|peanut gallery|uppity|sold down the river)',
                r'(?:whitelist|blacklist|master/slave)',
                r'(?:dark (?:pattern|UX)|white hat|black hat)',
                r'(?:inner city|urban|ghetto)\b',
                r'(?:articulate|well-spoken|exotic)\b(?=\s*(?:for|considering))',
            ],
            'sensitivity': 'critical',
            'suggestion': 'Replace with neutral terms (allowlist/denylist, primary/secondary, legacy, inner city → specific neighborhood names)'
        },
        'holiday_assumptions': {
            'patterns': [
                r'(?:merry christmas|happy thanksgiving|happy easter|happy new year)\b(?!\s*(?:to those who celebrate))',
                r'(?:christmas break|christmas party|christmas gift)',
                r'(?:holiday party)(?!\s*(?:celebration|gathering))',
            ],
            'sensitivity': 'low',
            'suggestion': 'Use inclusive greetings: "Happy Holidays", "Season\'s Greetings", "Happy [Holiday] to those who celebrate"'
        },
        'time_zone_assumptions': {
            'patterns': [
                r'(?:this afternoon|this evening|tonight|this morning)\b(?!\s*(?:your time|in your timezone))',
                r'(?:end of day|eod|cob|close of business)\b(?!\s*(?:your time|in your timezone))',
                r'(?:first thing tomorrow|start of day)\b(?!\s*(?:your time|in your timezone))',
            ],
            'sensitivity': 'low',
            'suggestion': 'Specify timezone: "by 5pm EST" or "end of day your time"'
        },
        'measurement_assumptions': {
            'patterns': [
                r'\b\d+\s*(?:miles|feet|inches|pounds|ounces|fahrenheit|gallons)\b(?!\s*(?:\(|/))',
            ],
            'sensitivity': 'low',
            'suggestion': 'Include metric equivalents: "50 miles (80 km)" or "100°F (38°C)"'
        }
    }
    
    # Positive inclusive language indicators
    INCLUSIVE_PATTERNS = [
        r'(?:everyone|all|team|folks|people|colleagues)',
        r'(?:they/them|their|theirs)',
        r'(?:person with|people who|individuals who)',
        r'(?:diverse|inclusive|equitable|accessible)',
        r'(?:your time|your timezone|local time)',
        r'(?:happy holidays|season\'s greetings)',
    ]
    
    def analyze_email(self, email: Dict, target_audience: str = 'global') -> Dict:
        """Analyze email for cultural sensitivity issues"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        text_lower = text.lower()
        
        # Detect issues in each category
        issues = []
        for category, config in self.CULTURAL_PATTERNS.items():
            for pattern in config['patterns']:
                matches = re.findall(pattern, text_lower, re.IGNORECASE)
                if matches:
                    for match in matches:
                        issues.append({
                            'category': category,
                            'matched_text': match if isinstance(match, str) else str(match),
                            'sensitivity': config['sensitivity'],
                            'suggestion': config['suggestion'],
                            'context': self._extract_context(text, match)
                        })
        
        # Check for inclusive language (positive signals)
        inclusive_found = []
        for pattern in self.INCLUSIVE_PATTERNS:
            matches = re.findall(pattern, text_lower, re.IGNORECASE)
            if matches:
                inclusive_found.extend(matches)
        
        # Calculate sensitivity score (0-100, lower = more sensitive)
        sensitivity_score = self._calculate_sensitivity_score(issues, inclusive_found)
        
        # Determine risk level
        critical_issues = [i for i in issues if i['sensitivity'] == 'critical']
        high_issues = [i for i in issues if i['sensitivity'] == 'high']
        
        if critical_issues:
            risk_level = 'critical'
        elif high_issues:
            risk_level = 'high'
        elif len(issues) > 3:
            risk_level = 'medium'
        elif issues:
            risk_level = 'low'
        else:
            risk_level = 'minimal'
        
        # Generate recommendations
        recommendations = self._generate_recommendations(issues, target_audience)
        
        # Suggest alternatives
        alternatives = self._suggest_alternatives(issues)
        
        result = {
            'email_id': email.get('id', ''),
            'sensitivity_score': round(sensitivity_score, 1),
            'risk_level': risk_level,
            'total_issues': len(issues),
            'critical_issues': len(critical_issues),
            'high_issues': len(high_issues),
            'issues': issues,
            'inclusive_language_found': inclusive_found,
            'inclusive_score': round(len(inclusive_found) * 10, 1),
            'recommendations': recommendations,
            'alternatives': alternatives,
            'target_audience': target_audience,
            'reply_all_required': len(email.get('to', [])) > 1,
            'reply_all_warning': risk_level in ['critical', 'high'] and len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
        
        self.analysis_history.append(result)
        return result
    
    def _extract_context(self, text: str, match: str, window: int = 50) -> str:
        """Extract surrounding context for a match"""
        idx = text.lower().find(match.lower())
        if idx == -1:
            return ''
        start = max(0, idx - window)
        end = min(len(text), idx + len(match) + window)
        return text[start:end].strip()
    
    def _calculate_sensitivity_score(self, issues: List[Dict], inclusive: List) -> float:
        """Calculate cultural sensitivity score (100 = fully sensitive, 0 = insensitive)"""
        score = 100.0
        
        severity_weights = {
            'critical': 30,
            'high': 20,
            'medium': 10,
            'low': 5
        }
        
        for issue in issues:
            score -= severity_weights.get(issue['sensitivity'], 5)
        
        # Bonus for inclusive language
        score += min(20, len(inclusive) * 5)
        
        return max(0, min(100, score))
    
    def _generate_recommendations(self, issues: List[Dict], audience: str) -> List[str]:
        """Generate cultural sensitivity recommendations"""
        recommendations = []
        categories = set(i['category'] for i in issues)
        
        if audience == 'global':
            recommendations.append("For global audiences, use plain English and avoid culture-specific references")
        
        if 'racial_ethnic_stereotypes' in categories:
            recommendations.append("URGENT: Replace racially charged terms with neutral alternatives immediately")
        
        if 'disability_language' in categories:
            recommendations.append("Use person-first language and avoid disability metaphors")
        
        if 'gendered_language' in categories:
            recommendations.append("Replace gendered terms with inclusive alternatives")
        
        if 'cultural_appropriation' in categories:
            recommendations.append("Avoid using sacred or culturally significant terms casually")
        
        if 'religious_references' in categories:
            recommendations.append("Use secular language for diverse religious backgrounds")
        
        if 'cultural_idioms' in categories:
            recommendations.append("Replace idioms with direct, clear language for international readers")
        
        if not recommendations:
            recommendations.append("Email appears culturally appropriate for the target audience")
        
        return recommendations
    
    def _suggest_alternatives(self, issues: List[Dict]) -> List[Dict]:
        """Suggest specific word/phrase alternatives"""
        alternatives_map = {
            'guys': 'team, everyone, folks',
            'manpower': 'workforce, staff, personnel',
            'master/slave': 'primary/secondary, leader/follower',
            'whitelist': 'allowlist, approved list',
            'blacklist': 'denylist, blocked list',
            'grandfathered': 'legacy, exempted',
            'sanity check': 'confidence check, verification',
            'spirit animal': 'favorite, kindred',
            'tribe': 'community, group, team',
            'guru': 'expert, specialist',
            'ninja': 'expert, specialist',
            'crippled': 'disabled, impaired',
            'blind to': 'unaware of',
            'crazy': 'unusual, unexpected',
            'insane': 'remarkable, extreme',
            'merry christmas': 'Happy Holidays, Season\'s Greetings',
        }
        
        suggestions = []
        seen = set()
        for issue in issues:
            matched = issue['matched_text'].strip()
            for original, alt in alternatives_map.items():
                if original in matched.lower() and original not in seen:
                    suggestions.append({
                        'original': original,
                        'suggested': alt,
                        'category': issue['category']
                    })
                    seen.add(original)
        
        return suggestions
    
    def generate_report(self) -> Dict:
        """Generate comprehensive cultural sensitivity report"""
        if not self.analysis_history:
            return {'message': 'No analysis data available'}
        
        total = len(self.analysis_history)
        risk_dist = Counter(a['risk_level'] for a in self.analysis_history)
        category_dist = Counter(
            i['category'] for a in self.analysis_history for i in a['issues']
        )
        avg_score = sum(a['sensitivity_score'] for a in self.analysis_history) / total
        
        return {
            'total_emails_analyzed': total,
            'avg_sensitivity_score': round(avg_score, 1),
            'risk_distribution': dict(risk_dist),
            'issue_categories': dict(category_dist),
            'critical_email_rate': round(risk_dist.get('critical', 0) / total * 100, 1),
            'inclusive_language_rate': round(
                sum(1 for a in self.analysis_history if a['inclusive_score'] > 30) / total * 100, 1
            ),
            'cultural_health': 'excellent' if avg_score > 80 else 'good' if avg_score > 60 else 'fair' if avg_score > 40 else 'poor',
            'timestamp': datetime.now().isoformat()
        }


def test_v690():
    """Test V690 Email Cultural Sensitivity Analyzer"""
    analyzer = EmailCulturalSensitivityAnalyzer()
    
    emails = [
        {
            'id': 'e001',
            'from': 'manager@company.com',
            'to': ['global-team@company.com'],
            'subject': 'Project Kickoff',
            'body': "Hey guys, let's circle back on this tomorrow. The new feature is a real game-changer - it's insane how good it is. Our ninja developer really knocked it out of the park. Let's have a powwow to discuss next steps. The whitelist approach is better than the blacklist. Merry Christmas everyone!"
        },
        {
            'id': 'e002',
            'from': 'inclusive@company.com',
            'to': ['team@company.com'],
            'subject': 'Team Update',
            'body': "Hi everyone, I'd like to share an update on our project. The team has done excellent work this quarter. Each person contributed meaningfully to our diverse and inclusive workplace. Happy Holidays to those who celebrate. Please review by end of day your time. Thanks team!"
        },
        {
            'id': 'e003',
            'from': 'problematic@company.com',
            'to': ['all@company.com'],
            'subject': 'Legacy System Migration',
            'body': "We need to migrate the master/slave database configuration. The old system was grandfathered in years ago. Let's do a sanity check before we proceed. The chairman will approve the budget. Don't be blind to the risks - this is a crazy complex migration."
        },
        {
            'id': 'e004',
            'from': 'neutral@company.com',
            'to': ['colleague@company.com'],
            'subject': 'Meeting Notes',
            'body': "Hi, here are the notes from today's meeting. Action items: Update the API documentation by Friday. Schedule follow-up with the client next week. Let me know if anything was missed."
        },
        {
            'id': 'e005',
            'from': 'global@company.com',
            'to': ['international-team@company.com'],
            'subject': 'Quarterly Review',
            'body': "Hello team across all offices! Our Q4 results show 50 miles of progress (80 km for our metric friends). Revenue grew 20% year-over-year. The team in Tokyo showed exceptional performance. Let's schedule a call at 3pm EST (your local time will vary). Great work everyone!"
        }
    ]
    
    for email in emails:
        result = analyzer.analyze_email(email, 'global')
        print(f"\n{'='*50}")
        print(f"Email: {email['subject'][:40]}...")
        print(f"Sensitivity Score: {result['sensitivity_score']}/100")
        print(f"Risk Level: {result['risk_level']}")
        print(f"Issues Found: {result['total_issues']} (Critical: {result['critical_issues']}, High: {result['high_issues']})")
        print(f"Inclusive Score: {result['inclusive_score']}")
        if result['alternatives']:
            print(f"Alternatives: {', '.join(a['original'] + ' → ' + a['suggested'] for a in result['alternatives'][:3])}")
        if result['recommendations']:
            print(f"Top Recommendation: {result['recommendations'][0]}")
    
    report = analyzer.generate_report()
    print(f"\n{'='*50}")
    print(f"✅ V690 Cultural Sensitivity Analyzer Test Complete")
    print(f"Total Analyzed: {report['total_emails_analyzed']}")
    print(f"Avg Sensitivity: {report['avg_sensitivity_score']}/100")
    print(f"Critical Rate: {report['critical_email_rate']}%")
    print(f"Cultural Health: {report['cultural_health']}")
    
    return report


if __name__ == '__main__':
    test_v690()
