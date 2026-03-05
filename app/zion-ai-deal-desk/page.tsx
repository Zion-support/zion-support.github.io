import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Deal Desk | Zion Tech Group',
  description:
    'Streamline quote-to-cash with automated pricing, approval routing, and contract generation.',
  alternates: { canonical: '/zion-ai-deal-desk' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Zion AI Deal Desk',
        category: 'Growth',
        description:
          'Streamline quote-to-cash with automated pricing, approval routing, and contract generation.',
        iconEmoji: '📋',
        features: [
          {
            "title": "Production-Ready",
            "description": "Enterprise-grade infrastructure with high availability and monitoring."
          },
          {
            "title": "Intelligent Automation",
            "description": "AI-powered workflows that learn from patterns and adapt over time."
          },
          {
            "title": "Seamless Integration",
            "description": "Connect with existing tools via pre-built connectors and webhooks."
          }
        ],
        useCases: [
          {
            "title": "Operational Efficiency",
            "description": "Deploy Zion AI Deal Desk to automate routine tasks and reduce manual errors.",
            "icon": "⚡"
          },
          {
            "title": "Scalable Growth",
            "description": "Use Zion AI Deal Desk to handle increasing complexity without proportional headcount.",
            "icon": "📈"
          }
        ],
        benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
        ctaLabel: 'Get Started with Zion AI Deal Desk',
      }}
    />
  );
}
