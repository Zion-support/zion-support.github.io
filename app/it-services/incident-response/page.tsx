import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Incident Response and Security Operations Center | Zion Tech Group',
  description: '24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics.',
  alternates: { canonical: '/it-services/incident-response' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Incident Response and Security Operations Center',
        category: 'IT Services',
        description: '24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics.',
        iconEmoji: '🚨',
        features: [
          { title: 'Enterprise-Grade Implementation', description: 'Production-ready infrastructure designed for scale and reliability.' },
          { title: '24/7 Monitoring', description: 'Round-the-clock monitoring with automated incident response.' },
          { title: 'Compliance-Ready', description: 'Built-in controls for SOC 2, ISO 27001, HIPAA, and PCI-DSS.' },
          { title: 'Scalable Architecture', description: 'Architected to grow seamlessly from startup to enterprise scale.' },
          { title: 'Automated Reporting', description: 'Scheduled compliance reports, performance dashboards, and SLA tracking.' },
          { title: 'System Integration', description: 'Seamless integration with your existing IT stack.' },
        ],
        useCases: [
          { title: 'Enterprise Operations', description: 'Large-scale deployments across offices and data centers.', icon: '\U0001F3E2' },
          { title: 'Hybrid Workforce', description: 'Secure access for distributed teams and remote workers.', icon: '\U0001F310' },
          { title: 'Regulated Industries', description: 'Full compliance with industry-specific requirements.', icon: '\U0001F512' },
        ],
        benefits: [
          'Reduced operational risk and unplanned downtime',
          'Faster incident detection and automated response',
          'Compliance audit readiness with automated evidence',
          'Lower total cost of ownership through optimization',
          'Scalable architecture that grows with your business',
          'Proactive threat and issue prevention',
        ],
        ctaLabel: 'Schedule Your Consultation',
        pricing: [
          { tier: 'Starter', price: '$899', period: '/month', features: ['Core features', 'Monthly reports', 'Email support', 'Up to 50 endpoints'] },
          { tier: 'Professional', price: '$1999', period: '/month', features: ['All Starter', 'Advanced analytics', 'Priority SLA', 'Up to 500 endpoints', 'Custom integrations'] },
          { tier: 'Enterprise', price: '$4499', period: '/month', features: ['Everything in Pro', 'Dedicated manager', '24/7 phone support', 'Unlimited', 'Custom SLA', 'On-site'] },
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
