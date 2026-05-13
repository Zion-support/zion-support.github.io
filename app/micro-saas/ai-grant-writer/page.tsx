import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Grant Writer & Funding Matcher | Zion Tech Group',
  description: 'AI grant proposal generation, funder matching, compliance checking, and deadline management for nonprofits and research institutions.',
  alternates: { canonical: '/micro-saas/ai-grant-writer' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Grant Writer & Funding Matcher',
        category: 'Micro SaaS · Non-Profit & Education',
        description: 'AI grant proposal generation, funder matching, compliance checking, and deadline management for nonprofits and research institutions.',
        iconEmoji: '💰',
        features: [
          { title: 'AI-Powered Automation', description: 'Intelligent workflows that adapt to your business patterns and reduce manual effort.' },
          { title: 'Cloud-Hosted', description: 'Zero setup required, accessible from anywhere.' },
          { title: 'API Access', description: 'REST API for custom integrations and workflows.' },
          { title: 'Role-Based Access', description: 'Granular permissions for team security.' },
          { title: 'Analytics Dashboard', description: 'Real-time metrics, automated reports, and trend analysis.' },
          { title: 'Dedicated Support', description: 'Responsive support team with guided onboarding.' },
        ],
        useCases: [
          { title: 'Growing Teams', description: 'Scale operations efficiently without proportional headcount increases.', icon: '\U0001F680' },
          { title: 'Startups', description: 'Enterprise-grade tools from day one at startup-friendly prices.', icon: '\u26A1' },
          { title: 'Enterprise', description: 'Deploy within existing compliance frameworks and IT governance.', icon: '\U0001F3E2' },
        ],
        benefits: [
          'Reduce manual effort by 70% or more',
          'Launch in minutes with zero IT overhead',
          'Pay-as-you-grow subscription pricing',
          'Automatic updates with no downtime',
          'Enterprise-grade SOC 2 security',
          '99.9% uptime SLA guarantee',
        ],
        ctaLabel: 'Start Your Free Trial',
        pricing: [
          { tier: 'Starter', price: '$24', period: '/month', features: ['Core AI features', 'Up to 3 users', 'Basic analytics', 'Email support'] },
          { tier: 'Professional', price: '$59', period: '/month', features: ['All Starter features', 'Up to 25 users', 'Advanced analytics', 'Priority support', 'API access'] },
          { tier: 'Enterprise', price: '$149', period: '/month', features: ['Everything in Pro', 'Unlimited users', 'Custom workflows', '24/7 support', 'SLA guarantee', 'SSO'] },
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
