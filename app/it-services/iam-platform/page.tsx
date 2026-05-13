import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Identity and Access Management (IAM) Platform | Zion Tech Group',
  description: 'Enterprise IAM with SSO, MFA, PAM, and automated access provisioning - Zero Trust-ready identity governance.',
  alternates: { canonical: '/it-services/iam-platform' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Identity and Access Management (IAM) Platform',
        category: 'IT Services',
        description: 'Enterprise IAM with SSO, MFA, PAM, and automated access provisioning - Zero Trust-ready identity governance.',
        iconEmoji: '🔑',
        features: [
          { title: 'Enterprise-Grade', description: 'Production-ready for scale and reliability.' },
          { title: '24/7 Monitoring', description: 'Round-the-clock with automated incident response.' },
          { title: 'Compliance-Ready', description: 'Built-in controls for SOC 2, ISO 27001, HIPAA.' },
          { title: 'Scalable Design', description: 'Grows from startup to enterprise seamlessly.' },
          { title: 'Automated Reporting', description: 'Scheduled compliance and SLA dashboards.' },
          { title: 'System Integration', description: 'Works with your existing IT stack.' },
        ],
        useCases: [
          { title: 'Enterprise', description: 'Multi-office and data center deployments.', icon: '\U0001F3E2' },
          { title: 'Hybrid Workforce', description: 'Secure distributed team access.', icon: '\U0001F310' },
          { title: 'Regulated Industries', description: 'Industry-specific compliance.', icon: '\U0001F512' },
        ],
        benefits: [
          'Reduced operational risk',
          'Faster incident detection',
          'Audit-ready evidence',
          'Lower total cost of ownership',
          'Scalable architecture',
          'Proactive threat prevention',
        ],
        ctaLabel: 'Schedule Your Consultation',
        pricing: [
          { tier: 'Starter', price: '$799', period: '/mo', features: ['Core features', 'Email support'] },
          { tier: 'Professional', price: '$1899', period: '/mo', features: ['All Starter', 'Priority SLA', 'Custom integrations'] },
          { tier: 'Enterprise', price: '$4499', period: '/mo', features: ['Everything', 'Dedicated manager', 'On-site support'] },
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
