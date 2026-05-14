import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disaster Recovery & Business Continuity | Zion Tech Group',
  description: 'Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations.',
  alternates: { canonical: '/it-services/disaster-recovery' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Disaster Recovery & Business Continuity',
        category: 'IT Services',
        description: 'Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations.',
        iconEmoji: '🔄',
        features: [
          { title: 'Enterprise-Grade Implementation', description: 'Production-ready infrastructure designed for scale and reliability.' },
          { title: '24/7 Monitoring & Support', description: 'Round-the-clock infrastructure monitoring with automated incident response.' },
          { title: 'Compliance-Ready Architecture', description: 'Built-in controls for SOC 2, ISO 27001, HIPAA, and PCI-DSS.' },
          { title: 'Scalable Infrastructure Design', description: 'Architected to grow seamlessly from startup to enterprise scale.' },
          { title: 'Automated Reporting', description: 'Scheduled compliance reports, performance dashboards, and SLA tracking.' },
          { title: 'System Integration', description: 'Seamless integration with your existing IT stack and business applications.' },
        ],
        useCases: [
          { title: 'Enterprise Operations', description: 'Large-scale deployments across multiple offices and data centers.', icon: '🏢' },
          { title: 'Hybrid Workforce', description: 'Secure and reliable access for distributed teams and remote workers.', icon: '🌐' },
          { title: 'Regulated Industries', description: 'Full compliance with industry-specific regulatory requirements.', icon: '🔒' },
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
          { tier: 'Starter', price: '$699', period: '/month', features: ['Core monitoring & alerting', 'Monthly compliance reports', 'Email support', 'Up to 50 endpoints'] },
          { tier: 'Professional', price: '$1599', period: '/month', features: ['All Starter features', 'Advanced analytics & dashboards', 'Priority support with SLA', 'Up to 500 endpoints', 'Custom integrations'] },
          { tier: 'Enterprise', price: '$3499', period: '/month', features: ['Everything in Professional', 'Dedicated account manager', '24/7 phone support', 'Unlimited endpoints', 'Custom SLA guarantees', 'On-site deployment support'] },
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
