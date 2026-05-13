import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Asset Management & Lifecycle | Zion Tech Group',
  description: 'Complete IT asset lifecycle management from procurement to disposal with automated discovery and license tracking.',
  alternates: { canonical: 'it-services/it-asset-management' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'IT Asset Management & Lifecycle',
        category: 'IT Operations',
        description: 'Complete IT asset lifecycle management from procurement to disposal with automated discovery and license tracking.',
        iconEmoji: '📦',
        features: [
          {
            "title": "Automated Asset Discovery",
            "description": "Continuously discover all hardware, software, cloud, and virtual assets."
          },
          {
            "title": "License Management & Compliance",
            "description": "Track software licenses, usage, and compliance to avoid penalties."
          },
          {
            "title": "Lifecycle & Deprecation Tracking",
            "description": "Monitor asset stages with alerts for upgrades and end-of-support."
          },
          {
            "title": "Cost Allocation & Chargeback",
            "description": "Track IT spending by department with automated chargeback reporting."
          },
          {
            "title": "Procurement Automation",
            "description": "Streamline procurement with approval workflows and vendor comparison."
          },
          {
            "title": "Security & Compliance Auditing",
            "description": "Maintain compliance with asset-based security policies and audit trails."
          }
        ],
        useCases: [
          {
            "title": "Enterprise Asset Inventory",
            "description": "Real-time inventory of all IT assets across locations and clouds.",
            "icon": "🏢"
          },
          {
            "title": "License Cost Optimization",
            "description": "Reduce annual licensing costs by 20-40% through right-sizing.",
            "icon": "💰"
          },
          {
            "title": "SOX & Audit Compliance",
            "description": "Audit-ready records with compliance reporting and change tracking.",
            "icon": "🔒"
          }
        ],
        benefits: ["Complete asset visibility", "20-40% license cost savings", "Automated compliance reporting", "Streamlined procurement", "Lifecycle cost tracking", "Audit-ready documentation"],
        ctaLabel: 'Get Started with IT Asset Management & Lifecycle',
        pricing: [
          { tier: 'Starter', price: '$799', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$1,999', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
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
