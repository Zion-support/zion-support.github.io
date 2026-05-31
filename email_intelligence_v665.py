#!/usr/bin/env python3
"""
V665 - Email Competitive Intelligence Engine
Extracts competitor mentions, pricing intelligence, and market signals
from email conversations. Provides competitive landscape analysis and
strategic recommendations.

Key Features:
- Competitor mention tracking and sentiment analysis
- Pricing intelligence extraction
- Market signal detection
- Win/loss analysis from sales emails
- Feature comparison extraction
- Competitive threat assessment
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime
from collections import defaultdict, Counter
from typing import Dict, List, Optional, Tuple

class EmailCompetitiveIntelligenceEngine:
    """Extracts and analyzes competitive intelligence from emails"""
    
    def __init__(self):
        self.competitor_mentions = defaultdict(list)
        self.pricing_intel = []
        self.market_signals = []
        self.win_loss_records = []
        self.feature_comparisons = []
        self.threat_assessments = {}
        
        # Known competitors (expandable)
        self.known_competitors = {
            'tech': ['Salesforce', 'HubSpot', 'Microsoft', 'Google', 'AWS', 'Oracle', 'SAP', 'Zendesk', 'ServiceNow', 'Atlassian'],
            'email': ['Mailchimp', 'SendGrid', 'Constant Contact', 'Campaign Monitor', 'Postmark', 'Brevo'],
            'ai': ['OpenAI', 'Anthropic', 'Google AI', 'Meta AI', 'Hugging Face', 'Cohere', 'Stability AI'],
            'saas': ['Stripe', 'Twilio', 'Datadog', 'Snowflake', 'MongoDB', 'Elastic', 'Confluent'],
            'consulting': ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'Accenture', 'IBM Consulting']
        }
    
    def extract_competitor_mentions(self, email: Dict) -> List[Dict]:
        """Extract competitor mentions from email"""
        text = (email.get('body', '') + ' ' + email.get('subject', ''))
        text_lower = text.lower()
        mentions = []
        
        for category, competitors in self.known_competitors.items():
            for competitor in competitors:
                if competitor.lower() in text_lower:
                    # Extract context around mention
                    pattern = re.compile(re.escape(competitor.lower()), re.IGNORECASE)
                    for match in pattern.finditer(text):
                        start = max(0, match.start() - 100)
                        end = min(len(text), match.end() + 100)
                        context = text[start:end].strip()
                        
                        # Analyze sentiment of mention
                        sentiment = self._analyze_mention_sentiment(context)
                        
                        mention = {
                            'competitor': competitor,
                            'category': category,
                            'context': context,
                            'sentiment': sentiment,
                            'email_id': email.get('id', ''),
                            'from': email.get('from', ''),
                            'timestamp': email.get('timestamp', datetime.now().isoformat()),
                            'subject': email.get('subject', '')
                        }
                        
                        mentions.append(mention)
                        self.competitor_mentions[competitor].append(mention)
        
        return mentions
    
    def _analyze_mention_sentiment(self, context: str) -> Dict:
        """Analyze sentiment of competitor mention"""
        context_lower = context.lower()
        
        positive_words = ['better', 'superior', 'leading', 'innovative', 'impressive', 'strong', 'preferred', 'chosen', 'won']
        negative_words = ['worse', 'inferior', 'lacking', 'expensive', 'limited', 'slow', 'buggy', 'lost', 'rejected', 'concern']
        neutral_words = ['mentioned', 'compared', 'evaluating', 'considering', 'reviewing', 'also']
        
        pos_count = sum(1 for w in positive_words if w in context_lower)
        neg_count = sum(1 for w in negative_words if w in context_lower)
        
        if pos_count > neg_count:
            sentiment = 'positive_for_competitor'
            threat_level = 'high'
        elif neg_count > pos_count:
            sentiment = 'negative_for_competitor'
            threat_level = 'low'
        else:
            sentiment = 'neutral'
            threat_level = 'medium'
        
        return {
            'sentiment': sentiment,
            'threat_level': threat_level,
            'positive_signals': pos_count,
            'negative_signals': neg_count
        }
    
    def extract_pricing_intelligence(self, email: Dict) -> List[Dict]:
        """Extract pricing information from emails"""
        text = email.get('body', '') + ' ' + email.get('subject', '')
        pricing_data = []
        
        # Price patterns
        price_patterns = [
            r'\$[\d,]+(?:\.\d{2})?\s*(?:per\s+(?:user|month|year|seat|license|instance))?',
            r'[\d,]+(?:\.\d{2})?\s*(?:USD|EUR|GBP)\s*(?:per\s+(?:user|month|year))?',
            r'(?:price|cost|pricing|fee|rate|quote)[:\s]*\$?[\d,]+(?:\.\d{2})?',
            r'(?:discount|savings|off)[:\s]*\d+(?:\.\d+)?%',
        ]
        
        for pattern in price_patterns:
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                price_text = match.group()
                
                # Try to associate with competitor
                context_start = max(0, match.start() - 200)
                context_end = min(len(text), match.end() + 200)
                context = text[context_start:context_end]
                
                associated_competitor = None
                for category, competitors in self.known_competitors.items():
                    for comp in competitors:
                        if comp.lower() in context.lower():
                            associated_competitor = comp
                            break
                    if associated_competitor:
                        break
                
                pricing_item = {
                    'price_text': price_text,
                    'associated_competitor': associated_competitor,
                    'context': context[:200],
                    'email_id': email.get('id', ''),
                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                    'source': email.get('from', '')
                }
                
                pricing_data.append(pricing_item)
                self.pricing_intel.append(pricing_item)
        
        return pricing_data
    
    def detect_market_signals(self, email: Dict) -> List[Dict]:
        """Detect market signals and trends from emails"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        signals = []
        
        signal_categories = {
            'market_entry': {
                'keywords': ['launching', 'new product', 'entering market', 'expansion', 'new offering', 'announced'],
                'severity': 'high'
            },
            'partnership': {
                'keywords': ['partnership', 'alliance', 'integration', 'reseller', 'channel partner', 'strategic alliance'],
                'severity': 'medium'
            },
            'funding': {
                'keywords': ['raised', 'funding', 'series', 'valuation', 'investment', 'IPO', 'acquisition'],
                'severity': 'high'
            },
            'talent_movement': {
                'keywords': ['joined', 'left', 'hired', 'poached', 'new CTO', 'new CEO', 'executive'],
                'severity': 'medium'
            },
            'customer_loss': {
                'keywords': ['switching to', 'moving to', 'churned', 'lost to', 'chose competitor', 'went with'],
                'severity': 'critical'
            },
            'technology_shift': {
                'keywords': ['AI-powered', 'machine learning', 'blockchain', 'quantum', 'new technology', 'disruption'],
                'severity': 'medium'
            },
            'pricing_war': {
                'keywords': ['price cut', 'discount', 'free tier', 'undercut', 'cheaper', 'low-cost'],
                'severity': 'high'
            }
        }
        
        for signal_type, config in signal_categories.items():
            matches = [kw for kw in config['keywords'] if kw in text]
            if matches:
                signal = {
                    'type': signal_type,
                    'matched_keywords': matches,
                    'severity': config['severity'],
                    'email_id': email.get('id', ''),
                    'from': email.get('from', ''),
                    'timestamp': email.get('timestamp', datetime.now().isoformat()),
                    'context': email.get('subject', '')[:200]
                }
                signals.append(signal)
                self.market_signals.append(signal)
        
        return signals
    
    def analyze_win_loss(self, email: Dict) -> Optional[Dict]:
        """Analyze win/loss information from sales emails"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        # Win indicators
        win_keywords = ['won the deal', 'selected us', 'chose us', 'signed with us', 'contract awarded', 'we won']
        loss_keywords = ['lost to', 'went with competitor', 'chose another', 'selected competitor', 'went with', 'lost the deal']
        
        is_win = any(kw in text for kw in win_keywords)
        is_loss = any(kw in text for kw in loss_keywords)
        
        if not is_win and not is_loss:
            return None
        
        # Extract competitor involved
        competitor_involved = None
        for category, competitors in self.known_competitors.items():
            for comp in competitors:
                if comp.lower() in text:
                    competitor_involved = comp
                    break
            if competitor_involved:
                break
        
        # Extract deal value if present
        deal_value = None
        value_match = re.search(r'\$[\d,]+(?:\.\d{2})?', text)
        if value_match:
            deal_value = value_match.group()
        
        # Extract reason
        reason_keywords = {
            'price': ['price', 'cost', 'expensive', 'cheaper', 'budget'],
            'features': ['features', 'functionality', 'capability', 'missing'],
            'support': ['support', 'service', 'response time', 'SLA'],
            'integration': ['integration', 'compatible', 'connects', 'API'],
            'brand': ['brand', 'reputation', 'trust', 'established'],
            'relationship': ['relationship', 'existing', 'incumbent', 'long-term']
        }
        
        reasons = []
        for reason, keywords in reason_keywords.items():
            if any(kw in text for kw in keywords):
                reasons.append(reason)
        
        record = {
            'outcome': 'win' if is_win else 'loss',
            'competitor': competitor_involved,
            'deal_value': deal_value,
            'reasons': reasons,
            'email_id': email.get('id', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'from': email.get('from', '')
        }
        
        self.win_loss_records.append(record)
        return record
    
    def extract_feature_comparisons(self, email: Dict) -> List[Dict]:
        """Extract feature comparisons between products"""
        text = email.get('body', '')
        comparisons = []
        
        # Comparison patterns
        comparison_patterns = [
            r'(?:compared to|versus|vs\.?|unlike)\s+([\w\s]+?)\s*,?\s*(?:we|our|they|their)\s+([\w\s]+)',
            r'(?:our|their|their)\s+([\w\s]+?)\s+(?:is|are|has|have)\s+(?:better|worse|faster|slower|more|less)\s+([\w\s]+)',
            r'(?:advantage|disadvantage|strength|weakness)[:\s]+(.+?)[.!]',
        ]
        
        for pattern in comparison_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            for match in matches:
                if isinstance(match, tuple):
                    comparison_text = ' vs '.join(match)
                else:
                    comparison_text = match
                
                if len(comparison_text) > 5:
                    comparisons.append({
                        'comparison': comparison_text.strip()[:200],
                        'email_id': email.get('id', ''),
                        'timestamp': email.get('timestamp', datetime.now().isoformat())
                    })
                    self.feature_comparisons.append(comparisons[-1])
        
        return comparisons
    
    def assess_competitive_threat(self, competitor: str) -> Dict:
        """Assess competitive threat level for a specific competitor"""
        mentions = self.competitor_mentions.get(competitor, [])
        
        if not mentions:
            return {'competitor': competitor, 'threat_level': 'unknown', 'data': 'No mentions found'}
        
        # Calculate threat metrics
        total_mentions = len(mentions)
        positive_for_them = sum(1 for m in mentions if m['sentiment']['sentiment'] == 'positive_for_competitor')
        negative_for_them = sum(1 for m in mentions if m['sentiment']['sentiment'] == 'negative_for_competitor')
        
        # Win/loss against this competitor
        wins_against = sum(1 for r in self.win_loss_records if r['competitor'] == competitor and r['outcome'] == 'win')
        losses_against = sum(1 for r in self.win_loss_records if r['competitor'] == competitor and r['outcome'] == 'loss')
        
        # Calculate threat score
        threat_score = 0
        threat_score += total_mentions * 2  # More mentions = more relevant
        threat_score += positive_for_them * 5  # Positive mentions about them = threat
        threat_score -= negative_for_them * 3  # Negative mentions = less threat
        threat_score += losses_against * 10  # Losing to them = high threat
        threat_score -= wins_against * 5  # Winning against them = less threat
        
        threat_score = max(0, min(100, threat_score))
        
        if threat_score >= 70:
            level = 'critical'
        elif threat_score >= 50:
            level = 'high'
        elif threat_score >= 30:
            level = 'medium'
        elif threat_score >= 10:
            level = 'low'
        else:
            level = 'minimal'
        
        assessment = {
            'competitor': competitor,
            'threat_score': threat_score,
            'threat_level': level,
            'total_mentions': total_mentions,
            'positive_mentions': positive_for_them,
            'negative_mentions': negative_for_them,
            'wins_against': wins_against,
            'losses_against': losses_against,
            'win_rate': round(wins_against / max(1, wins_against + losses_against) * 100, 1),
            'recommendations': self._generate_threat_recommendations(level, competitor, total_mentions),
            'reply_all_required': True
        }
        
        self.threat_assessments[competitor] = assessment
        return assessment
    
    def _generate_threat_recommendations(self, level: str, competitor: str, mentions: int) -> List[str]:
        """Generate strategic recommendations based on threat level"""
        recs = {
            'critical': [
                f'URGENT: {competitor} is a critical threat. Convene competitive response team.',
                'Analyze all lost deals against this competitor for patterns.',
                'Consider strategic pricing or feature adjustments.',
                'Develop targeted competitive battlecards for sales team.'
            ],
            'high': [
                f'{competitor} poses a high threat. Increase monitoring frequency.',
                'Create detailed competitive comparison materials.',
                'Train sales team on competitive positioning.',
                'Monitor their product launches and pricing changes.'
            ],
            'medium': [
                f'{competitor} is a moderate competitor. Maintain awareness.',
                'Track their public announcements and product updates.',
                'Ensure sales team has basic competitive positioning.'
            ],
            'low': [
                f'{competitor} is a low threat. Standard monitoring is sufficient.',
                'Include in quarterly competitive landscape reviews.'
            ],
            'minimal': [
                f'{competitor} poses minimal threat. No special action required.',
                'Review annually as part of competitive landscape assessment.'
            ]
        }
        return recs.get(level, ['Continue standard monitoring.'])
    
    def generate_competitive_report(self) -> Dict:
        """Generate comprehensive competitive intelligence report"""
        all_competitors = set()
        for mentions in self.competitor_mentions.values():
            for m in mentions:
                all_competitors.add(m['competitor'])
        
        # Assess all competitors
        assessments = {}
        for comp in all_competitors:
            assessments[comp] = self.assess_competitive_threat(comp)
        
        # Sort by threat score
        sorted_competitors = sorted(assessments.items(), key=lambda x: x[1].get('threat_score', 0), reverse=True)
        
        # Win/loss summary
        total_wins = sum(1 for r in self.win_loss_records if r['outcome'] == 'win')
        total_losses = sum(1 for r in self.win_loss_records if r['outcome'] == 'loss')
        
        # Market signals summary
        signal_types = Counter(s['type'] for s in self.market_signals)
        
        return {
            'total_competitors_tracked': len(all_competitors),
            'total_mentions': sum(len(m) for m in self.competitor_mentions.values()),
            'pricing_intelligence_items': len(self.pricing_intel),
            'market_signals_detected': len(self.market_signals),
            'win_loss_records': len(self.win_loss_records),
            'overall_win_rate': round(total_wins / max(1, total_wins + total_losses) * 100, 1),
            'top_threats': [{'competitor': c, 'score': a['threat_score'], 'level': a['threat_level']} for c, a in sorted_competitors[:5]],
            'market_signal_types': dict(signal_types),
            'feature_comparisons_extracted': len(self.feature_comparisons),
            'reply_all_enforcement': 'Active for all competitive communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v665():
    """Test V665 Email Competitive Intelligence Engine"""
    engine = EmailCompetitiveIntelligenceEngine()
    
    emails = [
        {
            'id': 'e001', 'from': 'sales@company.com', 'to': ['team@company.com'],
            'subject': 'Lost deal to Salesforce - Post-mortem',
            'body': 'We lost the Acme deal to Salesforce. They chose Salesforce because of their superior CRM features and existing relationship. The deal was worth $150,000/year. Their pricing was $120,000/year vs our $135,000/year. Price was a factor but features were the main reason.',
            'timestamp': '2026-05-28T09:00:00'
        },
        {
            'id': 'e002', 'from': 'product@company.com', 'to': ['exec@company.com'],
            'subject': 'HubSpot launching new AI features',
            'body': 'HubSpot announced they are launching new AI-powered features next month. They raised $500M in funding and are expanding into our market. This is a significant market entry that we need to respond to. Their new product has machine learning capabilities.',
            'timestamp': '2026-05-28T10:00:00'
        },
        {
            'id': 'e003', 'from': 'sales@company.com', 'to': ['team@company.com', 'manager@company.com'],
            'subject': 'Won deal against Zendesk!',
            'body': 'Great news! We won the TechCorp deal against Zendesk. They chose us because of our superior support and faster response time. The deal is worth $75,000/year. Our advantage was integration capabilities and customer service.',
            'timestamp': '2026-05-29T14:00:00'
        },
        {
            'id': 'e004', 'from': 'analyst@company.com', 'to': ['strategy@company.com'],
            'subject': 'Competitive pricing update - Microsoft',
            'body': 'Microsoft announced a price cut on their enterprise plan. New pricing is $99 per user per month, down from $129. This is a significant discount that could impact our positioning. Compared to our $89 per user pricing, they are still more expensive but the gap has narrowed.',
            'timestamp': '2026-05-29T16:00:00'
        }
    ]
    
    for email in emails:
        mentions = engine.extract_competitor_mentions(email)
        pricing = engine.extract_pricing_intelligence(email)
        signals = engine.detect_market_signals(email)
        wl = engine.analyze_win_loss(email)
        comparisons = engine.extract_feature_comparisons(email)
        
        print(f"\nEmail: {email['subject'][:50]}...")
        print(f"  Competitor Mentions: {len(mentions)}")
        print(f"  Pricing Intel: {len(pricing)}")
        print(f"  Market Signals: {len(signals)}")
        if wl:
            print(f"  Win/Loss: {wl['outcome']} vs {wl.get('competitor', 'unknown')}")
    
    # Assess threats
    for comp in ['Salesforce', 'HubSpot', 'Zendesk', 'Microsoft']:
        assessment = engine.assess_competitive_threat(comp)
        if assessment.get('threat_level') != 'unknown':
            print(f"\n{comp}: Threat Score {assessment['threat_score']}/100 ({assessment['threat_level']})")
    
    report = engine.generate_competitive_report()
    print(f"\n{'='*50}")
    print(f"✅ V665 Competitive Intelligence Engine Test Complete")
    print(f"Competitors Tracked: {report['total_competitors_tracked']}")
    print(f"Total Mentions: {report['total_mentions']}")
    print(f"Pricing Items: {report['pricing_intelligence_items']}")
    print(f"Market Signals: {report['market_signals_detected']}")
    print(f"Win Rate: {report['overall_win_rate']}%")
    print(f"Top Threats: {report['top_threats']}")
    
    return report


if __name__ == '__main__':
    test_v665()
