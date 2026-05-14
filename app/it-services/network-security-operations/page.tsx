import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Network Security Operations Center | Zion Tech Group',
  description: '24/7 network security monitoring, threat detection, incident response, and vulnerability management.',
  alternates: { canonical: 'it-services/network-security-operations' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Network Security Operations Center',
        category: 'Cybersecurity',
        description: '24/7 network security monitoring, threat detection, incident response, and vulnerability management.',
        iconEmoji: '🛡️',
        features: [
          {
            "title": "24/7 Threat Monitoring",
            "description": "Continuous monitoring of network traffic, endpoints, and cloud."
          },
          {
            "title": "Intrusion Detection & Prevention",
            "description": "IDS/IPS with AI-powered detection and automated blocking."
          },
          {
            "title": "Incident Response & Forensics",
            "description": "Rapid containment, investigation, and post-incident reporting."
          },
          {
            "title": "Vulnerability Management",
            "description": "Continuous scanning, prioritization, and remediation tracking."
          },
          {
            "title": "SIEM Integration",
            "description": "Centralized log aggregation, correlation, and real-time alerting."
          },
          {
            "title": "Penetration Testing",
            "description": "Regular security assessments and red team exercises."
          }
        ],
        useCases: [
          {
            "title": "Enterprise SOC Deployment",
            "description": "Build SOC with threat detection, incident response, and monitoring.",
            "icon": "🏢"
          },
          {
            "title": "Threat Hunting & Intelligence",
            "description": "Proactively hunt for APTs with threat intelligence feeds.",
            "icon": "🔍"
          },
          {
            "title": "Regulatory Compliance",
            "description": "Meet requirements with log retention, access monitoring, and reporting.",
            "icon": "📋"
          }
        ],
        benefits: ["99.9% threat detection rate", "24/7 security monitoring", "Under 1-hour incident response", "Automated threat containment", "Comprehensive audit trails", "Regular penetration testing"],
        ctaLabel: 'Get Started with Network Security Operations Center',
        pricing: [
          { tier: 'Starter', price: '$4,999', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$12,999', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited usage', 'Dedicated support engineer', 'Custom configuration', 'SSO & advanced security', '99.99% SLA guarantee', 'On-premise deployment option'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
