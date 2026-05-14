import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Talent Acquisition and Hiring Intelligence | Zion Tech Group',
  description: 'End-to-end AI recruiting platform minus candidate sourcing, resume screening, bias-free scoring, and predictive hiring modeling.',
  alternates: { canonical: '/ai-services/ai-talent-acquisition' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Talent Acquisition and Hiring Intelligence',
        category: 'AI Services',
        description: 'End-to-end AI recruiting platform minus candidate sourcing, resume screening, bias-free scoring, and predictive hiring modeling.',
        iconEmoji: '🎯',
        features: [
          { title: 'AI-Powered Analysis', description: 'Machine learning models trained on industry-specific data for superior accuracy.' },
          { title: 'Real-Time Processing', description: 'Instant insights and alerts with sub-second response times.' },
          { title: 'Seamless Integration', description: 'REST API, webhooks, and pre-built connectors for common enterprise systems.' },
          { title: 'Enterprise Security', description: 'SOC 2 Type II certified with end-to-end encryption and role-based access.' },
          { title: 'Custom Dashboards', description: 'Build and share visualizations tailored to your KPIs.' },
          { title: '24/7 Monitoring and Support', description: 'Always-on infrastructure with dedicated technical support.' },
        ],
        useCases: [
          { title: 'Enterprise Deployment', description: 'Full-scale implementation across multiple departments and regions.', icon: '\U0001F3E2' },
          { title: 'Mid-Market', description: 'Right-sized solutions for growing companies with specific needs.', icon: '\U0001F4C8' },
          { title: 'Regulated Industries', description: 'Compliance-ready deployments for healthcare, finance, and government.', icon: '\U0001F512' },
        ],
        benefits: [
          'Reduce operational costs by 30-50%',
          'Accelerate decision-making with real-time AI insights',
          'Eliminate manual analysis and reporting overhead',
          'Scale seamlessly with your business growth',
          'Meet compliance requirements out of the box',
          'Achieve ROI within the first 90 days',
        ],
        ctaLabel: 'Schedule Your Consultation',
        pricing: [
          { tier: 'Starter', price: '$599', period: '/month', features: ['Core AI features', 'Up to 10K requests/month', 'Standard analytics', 'Email support'] },
          { tier: 'Professional', price: '$1299', period: '/month', features: ['All Starter features', 'Up to 100K requests/month', 'Advanced analytics', 'Priority support', 'API access'] },
          { tier: 'Enterprise', price: '$2999', period: '/month', features: ['Everything in Pro', 'Unlimited requests', 'Dedicated model training', '24/7 support', 'SLA guarantee', 'On-premise option'] },
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
