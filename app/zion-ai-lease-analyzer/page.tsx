import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Lease Analyzer | Zion Tech Group',
  description:
    'Extract and analyze lease terms, obligations, and renewal dates across property portfolios.',
  alternates: { canonical: '/zion-ai-lease-analyzer' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Zion AI Lease Analyzer',
        category: 'Operations',
        description:
          'Extract and analyze lease terms, obligations, and renewal dates across property portfolios.',
        iconEmoji: '🏢',
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
            "description": "Deploy Zion AI Lease Analyzer to automate routine tasks and reduce manual errors.",
            "icon": "⚡"
          },
          {
            "title": "Scalable Growth",
            "description": "Use Zion AI Lease Analyzer to handle increasing complexity without proportional headcount.",
            "icon": "📈"
          }
        ],
        benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
        ctaLabel: 'Get Started with Zion AI Lease Analyzer',
      }}
    />
  );
}
