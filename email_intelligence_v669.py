#!/usr/bin/env python3
"""
V669 - Email Vendor Management
Tracks vendor communications, SLA compliance, contract renewals, and
performance metrics. Provides vendor relationship intelligence and
risk assessment.

Key Features:
- Vendor relationship tracking
- SLA compliance monitoring
- Contract renewal alerts
- Performance metric extraction
- Vendor risk assessment
- Communication pattern analysis
- Reply-all enforcement for all multi-recipient communications
"""

import json
import re
from datetime import datetime, timedelta
from collections import Counter, defaultdict
from typing import Dict, List, Optional, Tuple, Set

class EmailVendorManagement:
    """Intelligent vendor relationship management from email communications"""
    
    def __init__(self):
        self.vendor_registry = {}
        self.sla_tracking = {}
        self.contract_alerts = []
        self.performance_metrics = defaultdict(list)
        self.communication_logs = defaultdict(list)
    
    VENDOR_CATEGORIES = {
        'technology': ['software', 'hardware', 'cloud', 'saas', 'it service', 'infrastructure'],
        'professional_services': ['consulting', 'legal', 'accounting', 'marketing', 'hr'],
        'supplies': ['office supplies', 'equipment', 'materials', 'inventory'],
        'facilities': ['maintenance', 'cleaning', 'security', 'utilities'],
        'telecom': ['internet', 'phone', 'mobile', 'communications'],
        'financial': ['banking', 'insurance', 'payment processing', 'payroll']
    }
    
    SLA_KEYWORDS = {
        'uptime': ['uptime', 'availability', '99.9%', '99.99%', 'downtime'],
        'response_time': ['response time', 'reply within', 'acknowledge within', 'sla'],
        'resolution_time': ['resolution time', 'resolve within', 'fix within', 'mttr'],
        'support_hours': ['support hours', '24/7', 'business hours', '9-5'],
        'performance': ['latency', 'throughput', 'bandwidth', 'speed']
    }
    
    CONTRACT_KEYWORDS = {
        'renewal': ['renewal', 'renew', 'expires', 'expiration', 'end date', 'term ends'],
        'termination': ['terminate', 'termination', 'cancel', 'end contract'],
        'amendment': ['amendment', 'modify', 'change terms', 'addendum'],
        'pricing': ['pricing', 'price increase', 'rate change', 'new rates', 'cost adjustment']
    }
    
    PERFORMANCE_INDICATORS = {
        'positive': ['excellent', 'great', 'satisfied', 'impressed', 'exceeded', 'outstanding', 'reliable'],
        'neutral': ['acceptable', 'adequate', 'meets expectations', 'standard', 'normal'],
        'negative': ['poor', 'unacceptable', 'disappointed', 'issues', 'problems', 'delays', 'unreliable', 'concerns']
    }
    
    def identify_vendor(self, email: Dict) -> Dict:
        """Identify vendor from email sender/domain"""
        sender = email.get('from', '')
        subject = email.get('subject', '')
        body = email.get('body', '')
        text = (subject + ' ' + body).lower()
        
        # Extract domain
        domain = ''
        if '@' in sender:
            domain = sender.split('@')[1].lower()
        
        # Check if internal (skip internal emails)
        internal_domains = ['company.com', 'yourcompany.com', 'internal.com']
        if any(internal in domain for internal in internal_domains):
            return {'is_vendor': False, 'reason': 'Internal email'}
        
        # Categorize vendor
        category_scores = {}
        for category, keywords in self.VENDOR_CATEGORIES.items():
            score = sum(1 for kw in keywords if kw in text)
            category_scores[category] = score
        
        # Determine category
        if max(category_scores.values()) > 0:
            vendor_category = max(category_scores.items(), key=lambda x: x[1])[0]
        else:
            vendor_category = 'other'
        
        # Generate vendor ID
        vendor_id = domain.replace('.', '_') if domain else 'unknown'
        
        # Check if vendor already registered
        is_new = vendor_id not in self.vendor_registry
        
        # Register vendor if new
        if is_new:
            self.vendor_registry[vendor_id] = {
                'vendor_id': vendor_id,
                'domain': domain,
                'name': self._extract_vendor_name(sender, domain),
                'category': vendor_category,
                'first_contact': email.get('timestamp', datetime.now().isoformat()),
                'last_contact': email.get('timestamp', datetime.now().isoformat()),
                'total_emails': 0,
                'relationship_status': 'active',
                'risk_level': 'unknown'
            }
        
        # Update contact count
        if vendor_id in self.vendor_registry:
            self.vendor_registry[vendor_id]['total_emails'] += 1
            self.vendor_registry[vendor_id]['last_contact'] = email.get('timestamp', datetime.now().isoformat())
        
        return {
            'is_vendor': True,
            'vendor_id': vendor_id,
            'vendor_name': self.vendor_registry.get(vendor_id, {}).get('name', domain),
            'domain': domain,
            'category': vendor_category,
            'is_new': is_new,
            'total_interactions': self.vendor_registry.get(vendor_id, {}).get('total_emails', 1)
        }
    
    def _extract_vendor_name(self, sender: str, domain: str) -> str:
        """Extract vendor name from sender or domain"""
        # Try to extract from sender name
        if '<' in sender and '>' in sender:
            name_part = sender.split('<')[0].strip()
            if name_part:
                return name_part
        
        # Use domain as fallback
        domain_name = domain.split('.')[0]
        return domain_name.capitalize()
    
    def track_sla_compliance(self, email: Dict, vendor_id: str) -> Dict:
        """Track SLA compliance from email communications"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        sla_issues = []
        sla_metrics = {}
        
        # Check for SLA-related keywords
        for metric, keywords in self.SLA_KEYWORDS.items():
            matches = [kw for kw in keywords if kw in text]
            if matches:
                sla_metrics[metric] = {
                    'mentioned': True,
                    'keywords': matches,
                    'context': self._extract_context(text, matches[0])
                }
                
                # Check for SLA breaches
                breach_indicators = ['breach', 'violation', 'missed', 'failed to meet', 'not met', 'below sla']
                if any(indicator in text for indicator in breach_indicators):
                    sla_issues.append({
                        'metric': metric,
                        'issue': f'SLA breach detected for {metric}',
                        'severity': 'high'
                    })
        
        # Extract specific SLA values
        sla_values = self._extract_sla_values(text)
        
        # Track in SLA database
        if vendor_id not in self.sla_tracking:
            self.sla_tracking[vendor_id] = []
        
        sla_record = {
            'vendor_id': vendor_id,
            'email_id': email.get('id', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'sla_metrics': sla_metrics,
            'sla_issues': sla_issues,
            'sla_values': sla_values,
            'compliance_status': 'breach' if sla_issues else 'compliant'
        }
        
        self.sla_tracking[vendor_id].append(sla_record)
        
        return sla_record
    
    def _extract_context(self, text: str, keyword: str, window: int = 100) -> str:
        """Extract context around keyword"""
        idx = text.find(keyword)
        if idx == -1:
            return ''
        
        start = max(0, idx - window)
        end = min(len(text), idx + len(keyword) + window)
        
        return text[start:end].strip()
    
    def _extract_sla_values(self, text: str) -> Dict:
        """Extract specific SLA values from text"""
        values = {}
        
        # Uptime percentages
        uptime_match = re.search(r'(\d{2,3}(?:\.\d+)?)\s*%\s*(?:uptime|availability)', text)
        if uptime_match:
            values['uptime_percentage'] = float(uptime_match.group(1))
        
        # Response times
        response_match = re.search(r'(?:response|reply)\s*(?:time|within)?\s*(\d+)\s*(hour|minute|min|hr)', text)
        if response_match:
            value = int(response_match.group(1))
            unit = response_match.group(2)
            if unit in ['hour', 'hr']:
                values['response_time_hours'] = value
            else:
                values['response_time_minutes'] = value
        
        # Resolution times
        resolution_match = re.search(r'(?:resolution|resolve|fix)\s*(?:time|within)?\s*(\d+)\s*(hour|minute|min|hr|day)', text)
        if resolution_match:
            value = int(resolution_match.group(1))
            unit = resolution_match.group(2)
            if unit == 'day':
                values['resolution_time_days'] = value
            elif unit in ['hour', 'hr']:
                values['resolution_time_hours'] = value
            else:
                values['resolution_time_minutes'] = value
        
        return values
    
    def detect_contract_events(self, email: Dict, vendor_id: str) -> Dict:
        """Detect contract-related events"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        events = []
        
        for event_type, keywords in self.CONTRACT_KEYWORDS.items():
            matches = [kw for kw in keywords if kw in text]
            if matches:
                events.append({
                    'event_type': event_type,
                    'keywords': matches,
                    'context': self._extract_context(text, matches[0])
                })
        
        # Extract dates
        date_patterns = [
            r'(\d{1,2}/\d{1,2}/\d{2,4})',
            r'(\w+\s+\d{1,2},?\s+\d{4})',
            r'(\d{4}-\d{2}-\d{2})',
        ]
        
        dates_found = []
        for pattern in date_patterns:
            matches = re.findall(pattern, text)
            dates_found.extend(matches)
        
        # Check for renewal alerts
        renewal_alert = False
        if any(event['event_type'] == 'renewal' for event in events):
            renewal_alert = True
            
            # Create alert
            alert = {
                'vendor_id': vendor_id,
                'alert_type': 'contract_renewal',
                'email_id': email.get('id', ''),
                'timestamp': email.get('timestamp', datetime.now().isoformat()),
                'dates_mentioned': dates_found,
                'urgency': 'high' if 'urgent' in text or 'asap' in text else 'normal'
            }
            
            self.contract_alerts.append(alert)
        
        return {
            'vendor_id': vendor_id,
            'events': events,
            'dates_found': dates_found,
            'renewal_alert': renewal_alert,
            'event_count': len(events)
        }
    
    def assess_vendor_performance(self, email: Dict, vendor_id: str) -> Dict:
        """Assess vendor performance from email sentiment"""
        text = (email.get('body', '') + ' ' + email.get('subject', '')).lower()
        
        performance_scores = {}
        
        for sentiment, keywords in self.PERFORMANCE_INDICATORS.items():
            matches = [kw for kw in keywords if kw in text]
            performance_scores[sentiment] = {
                'count': len(matches),
                'keywords': matches
            }
        
        # Calculate overall performance score
        positive = performance_scores['positive']['count']
        neutral = performance_scores['neutral']['count']
        negative = performance_scores['negative']['count']
        
        total = positive + neutral + negative
        if total > 0:
            performance_score = ((positive * 100) + (neutral * 50) + (negative * 0)) / total
        else:
            performance_score = 50  # Neutral default
        
        # Determine performance level
        if performance_score >= 80:
            level = 'excellent'
        elif performance_score >= 60:
            level = 'good'
        elif performance_score >= 40:
            level = 'satisfactory'
        elif performance_score >= 20:
            level = 'poor'
        else:
            level = 'critical'
        
        # Record performance metric
        metric_record = {
            'vendor_id': vendor_id,
            'email_id': email.get('id', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'performance_score': performance_score,
            'performance_level': level,
            'sentiment_breakdown': performance_scores
        }
        
        self.performance_metrics[vendor_id].append(metric_record)
        
        return metric_record
    
    def assess_vendor_risk(self, vendor_id: str) -> Dict:
        """Assess vendor risk based on communication patterns"""
        if vendor_id not in self.vendor_registry:
            return {'error': 'Vendor not found'}
        
        vendor = self.vendor_registry[vendor_id]
        
        risk_factors = []
        risk_score = 0
        
        # Check SLA breaches
        sla_records = self.sla_tracking.get(vendor_id, [])
        sla_breaches = sum(1 for r in sla_records if r['compliance_status'] == 'breach')
        
        if sla_breaches > 0:
            risk_factors.append({
                'factor': 'SLA Breaches',
                'count': sla_breaches,
                'severity': 'high' if sla_breaches > 3 else 'medium'
            })
            risk_score += sla_breaches * 10
        
        # Check performance issues
        performance_records = self.performance_metrics.get(vendor_id, [])
        poor_performance = sum(1 for r in performance_records if r['performance_level'] in ['poor', 'critical'])
        
        if poor_performance > 0:
            risk_factors.append({
                'factor': 'Performance Issues',
                'count': poor_performance,
                'severity': 'high' if poor_performance > 2 else 'medium'
            })
            risk_score += poor_performance * 15
        
        # Check communication frequency
        total_emails = vendor.get('total_emails', 0)
        if total_emails < 5:
            risk_factors.append({
                'factor': 'Low Communication',
                'count': total_emails,
                'severity': 'low'
            })
            risk_score += 10
        
        # Check contract status
        contract_events = [a for a in self.contract_alerts if a['vendor_id'] == vendor_id]
        if any(e['alert_type'] == 'contract_renewal' for e in contract_events):
            risk_factors.append({
                'factor': 'Contract Renewal Pending',
                'count': 1,
                'severity': 'medium'
            })
            risk_score += 20
        
        # Calculate risk level
        risk_score = min(100, risk_score)
        
        if risk_score >= 80:
            risk_level = 'critical'
        elif risk_score >= 60:
            risk_level = 'high'
        elif risk_score >= 40:
            risk_level = 'medium'
        elif risk_score >= 20:
            risk_level = 'low'
        else:
            risk_level = 'minimal'
        
        # Update vendor registry
        self.vendor_registry[vendor_id]['risk_level'] = risk_level
        
        return {
            'vendor_id': vendor_id,
            'risk_score': risk_score,
            'risk_level': risk_level,
            'risk_factors': risk_factors,
            'recommendations': self._generate_risk_recommendations(risk_level, risk_factors)
        }
    
    def _generate_risk_recommendations(self, risk_level: str, risk_factors: List[Dict]) -> List[str]:
        """Generate risk mitigation recommendations"""
        recommendations = []
        
        if risk_level == 'critical':
            recommendations.append('Consider alternative vendors immediately')
            recommendations.append('Escalate to executive management')
            recommendations.append('Review contract termination clauses')
        elif risk_level == 'high':
            recommendations.append('Schedule vendor review meeting')
            recommendations.append('Implement performance improvement plan')
            recommendations.append('Increase monitoring frequency')
        elif risk_level == 'medium':
            recommendations.append('Address specific risk factors')
            recommendations.append('Monitor closely for next quarter')
        elif risk_level == 'low':
            recommendations.append('Continue standard monitoring')
            recommendations.append('Address minor issues proactively')
        else:
            recommendations.append('Maintain current relationship')
            recommendations.append('Consider for strategic partnership')
        
        return recommendations
    
    def process_vendor_email(self, email: Dict) -> Dict:
        """Process vendor-related email"""
        # Identify vendor
        vendor_info = self.identify_vendor(email)
        
        if not vendor_info['is_vendor']:
            return {
                'email_id': email.get('id', ''),
                'is_vendor_email': False,
                'message': 'Not a vendor email'
            }
        
        vendor_id = vendor_info['vendor_id']
        
        # Track SLA compliance
        sla_tracking = self.track_sla_compliance(email, vendor_id)
        
        # Detect contract events
        contract_events = self.detect_contract_events(email, vendor_id)
        
        # Assess performance
        performance = self.assess_vendor_performance(email, vendor_id)
        
        # Log communication
        self.communication_logs[vendor_id].append({
            'email_id': email.get('id', ''),
            'timestamp': email.get('timestamp', datetime.now().isoformat()),
            'subject': email.get('subject', ''),
            'sender': email.get('from', ''),
            'recipients': email.get('to', [])
        })
        
        # Assess risk
        risk_assessment = self.assess_vendor_risk(vendor_id)
        
        return {
            'email_id': email.get('id', ''),
            'is_vendor_email': True,
            'vendor_info': vendor_info,
            'sla_tracking': sla_tracking,
            'contract_events': contract_events,
            'performance': performance,
            'risk_assessment': risk_assessment,
            'reply_all_required': len(email.get('to', [])) > 1,
            'timestamp': datetime.now().isoformat()
        }
    
    def generate_vendor_report(self) -> Dict:
        """Generate comprehensive vendor management report"""
        if not self.vendor_registry:
            return {'message': 'No vendors tracked'}
        
        # Calculate metrics
        total_vendors = len(self.vendor_registry)
        
        # Category distribution
        categories = Counter(v['category'] for v in self.vendor_registry.values())
        
        # Risk distribution
        risk_levels = Counter(v['risk_level'] for v in self.vendor_registry.values())
        
        # Top vendors by interaction
        top_vendors = sorted(
            self.vendor_registry.values(),
            key=lambda v: v['total_emails'],
            reverse=True
        )[:10]
        
        # SLA compliance
        total_sla_records = sum(len(records) for records in self.sla_tracking.values())
        sla_breaches = sum(
            1 for records in self.sla_tracking.values()
            for r in records if r['compliance_status'] == 'breach'
        )
        sla_compliance_rate = ((total_sla_records - sla_breaches) / total_sla_records * 100) if total_sla_records > 0 else 100
        
        # Contract alerts
        active_alerts = len(self.contract_alerts)
        
        return {
            'total_vendors': total_vendors,
            'category_distribution': dict(categories),
            'risk_distribution': dict(risk_levels),
            'top_vendors': [
                {
                    'name': v['name'],
                    'category': v['category'],
                    'emails': v['total_emails'],
                    'risk': v['risk_level']
                }
                for v in top_vendors
            ],
            'sla_compliance_rate': round(sla_compliance_rate, 1),
            'total_sla_records': total_sla_records,
            'sla_breaches': sla_breaches,
            'active_contract_alerts': active_alerts,
            'reply_all_enforcement': 'Active for all vendor communications',
            'timestamp': datetime.now().isoformat()
        }


def test_v669():
    """Test V669 Email Vendor Management"""
    vendor_mgmt = EmailVendorManagement()
    
    # Test 1: Vendor SLA breach
    email1 = {
        'id': 'e001',
        'from': 'support@cloudprovider.com',
        'to': ['it@company.com', 'management@company.com'],
        'subject': 'Service Outage Report - SLA Breach Notification',
        'body': 'We experienced a service outage yesterday that lasted 4 hours, which is a breach of our 99.9% uptime SLA. We apologize for the inconvenience and are implementing fixes to prevent future occurrences.',
        'timestamp': '2026-05-30T09:00:00'
    }
    
    # Test 2: Contract renewal
    email2 = {
        'id': 'e002',
        'from': 'account@softwarevendor.com',
        'to': ['procurement@company.com', 'finance@company.com'],
        'subject': 'Contract Renewal - Expires June 30, 2026',
        'body': 'Your annual software license contract expires on June 30, 2026. Please review the renewal options and pricing. We\'ve attached the renewal proposal with updated rates.',
        'timestamp': '2026-05-30T10:00:00'
    }
    
    # Test 3: Positive performance feedback
    email3 = {
        'id': 'e003',
        'from': 'manager@company.com',
        'to': ['consulting@partner.com'],
        'subject': 'Excellent Work on Recent Project',
        'body': 'I wanted to express our satisfaction with your excellent work on the recent consulting engagement. The team was impressed with your outstanding delivery and reliable support. We look forward to working with you again.',
        'timestamp': '2026-05-30T11:00:00'
    }
    
    # Test 4: Performance concerns
    email4 = {
        'id': 'e004',
        'from': 'operations@company.com',
        'to': ['support@internetprovider.com'],
        'subject': 'Ongoing Internet Service Issues',
        'body': 'We continue to experience poor internet performance with frequent delays and unreliable connectivity. These issues are unacceptable and causing significant problems for our business. We need immediate resolution.',
        'timestamp': '2026-05-30T12:00:00'
    }
    
    for email in [email1, email2, email3, email4]:
        result = vendor_mgmt.process_vendor_email(email)
        
        if result['is_vendor_email']:
            print(f"\n{'='*50}")
            print(f"Email: {email['subject'][:40]}...")
            print(f"Vendor: {result['vendor_info']['vendor_name']} ({result['vendor_info']['category']})")
            print(f"SLA Status: {result['sla_tracking']['compliance_status']}")
            print(f"Performance: {result['performance']['performance_level']} ({result['performance']['performance_score']:.0f}/100)")
            print(f"Risk Level: {result['risk_assessment']['risk_level']} ({result['risk_assessment']['risk_score']}/100)")
            
            if result['contract_events']['renewal_alert']:
                print(f"🔔 Contract renewal alert!")
            
            if result['risk_assessment']['risk_factors']:
                print(f"Risk Factors: {len(result['risk_assessment']['risk_factors'])}")
    
    report = vendor_mgmt.generate_vendor_report()
    print(f"\n{'='*50}")
    print(f"✅ V669 Email Vendor Management Test Complete")
    print(f"Total Vendors: {report['total_vendors']}")
    print(f"SLA Compliance: {report['sla_compliance_rate']}%")
    print(f"Active Alerts: {report['active_contract_alerts']}")
    
    return report


if __name__ == '__main__':
    test_v669()
