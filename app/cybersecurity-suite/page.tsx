import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Suite & Managed Security Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity including 24/7 threat monitoring, EDR, SOC 2 compliance automation, vulnerability management, and incident response. Protect your business with enterprise-grade security starting at $1,499/month.',
  alternates: { canonical: '/cybersecurity-suite' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Cybersecurity Suite',
        category: 'Security & Compliance',
        description:
          'Enterprise-grade cybersecurity without the enterprise price tag. Our managed suite provides 24/7 threat monitoring, endpoint detection and response (EDR), vulnerability management, and compliance automation (SOC 2, GDPR, HIPAA). AI-powered threat hunting reduces MTTR to under 15 minutes. Starting at $1,499/month per 50 endpoints.',
        iconEmoji: '🛡️',
        features: [
          {
            title: '24/7 Security Operations Center (SOC)',
            description:
              'Round-the-clock monitoring of endpoints, network, cloud workloads, and identity. AI triages alerts, correlates events, and escalates real threats to our human analysts.',
          },
          {
            title: 'Endpoint Detection & Response (EDR)',
            description:
              'Lightweight agents on all devices. Detect malware, ransomware, and insider threats. Automated quarantine and rollback for known attack patterns.',
          },
          {
            title: 'Vulnerability Management',
            description:
              'Continuous external and internal scanning. Risk-scored findings with step-by-step remediation guidance. Track progress over time and before audits.',
          },
          {
            title: 'SOC 2 & Compliance Automation',
            description:
              'Automated evidence collection, policy templates, and continuous compliance monitoring. Fast-track your audits with pre-built frameworks.',
          },
          {
            title: 'Incident Response & Forensics',
            description:
              'When breaches occur, our team responds within 15 minutes. Containment, root-cause analysis, and detailed post-mortem. Optional retainer for on-site presence.',
          },
          {
            title: 'Security Awareness Training',
            description:
              'Phishing simulation and annual training for your employees. Track completion rates and improve security culture with measurable results.',
          },
        ],
        useCases: [
          {
            title: 'SaaS & Tech Companies',
            description:
              'Meet customer security requirements quickly. SOC 2 Type II ready in weeks, not months. Continuous monitoring maintains compliance year-round.',
            icon: '💻',
          },
          {
            title: 'Healthcare & Fintech',
            description:
              'HIPAA and PCI-DSS compliant security stack. Automated audit trails and encryption controls meet strict regulatory mandates.',
            icon: '🏥',
          },
          {
            title: 'Manufacturing & Critical Infrastructure',
            description:
              'Protect OT/ICS environments with network segmentation monitoring, anomaly detection, and incident response playbooks for industrial systems.',
            icon: '🏭',
          },
        ],
        pricing: [
          {
            tier: 'Essentials',
            price: '$1,499',
            period: '/month',
            features: [
              'Up to 50 endpoints',
              'Basic EDR & antivirus',
              'Daily vulnerability scans',
              'Email alerts',
              'Quarterly compliance report',
              'Standard support',
            ],
          },
          {
            tier: 'Business',
            price: '$3,999',
            period: '/month',
            features: [
              'Up to 250 endpoints',
              '24/7 SOC monitoring',
              'Advanced threat hunting',
              'SOC 2 automation toolkit',
              'Incident response (15min)',
              'Phishing simulation',
              'Phone & Slack support',
            ],
            popular: true,
          },
          {
            tier: 'Enterprise',
            price: 'Custom',
            period: '',
            features: [
              'Unlimited endpoints',
              'Dedicated security analyst',
              'On-site incident response',
              'Custom compliance frameworks',
              'Penetration testing (quarterly)',
              'Executive risk reports',
              'SLA guarantees',
            ],
          },
        ],
        benefits: [
          'Reduce breach risk by 80%',
          'Achieve SOC 2 compliance in weeks',
          'Respond to incidents in <15 minutes',
          'Lower insurance premiums with demonstrated controls',
          'Proactive vulnerability management',
          'Meet regulatory requirements effortlessly',
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown, DE 19709',
        },
        ctaLabel: 'Schedule a Security Assessment',
      }}
    />
  );
}
