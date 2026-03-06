import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Quote Generator | Zion Tech Group',
  description:
    'Generate accurate quotes and proposals from product catalogs with AI-powered pricing and configuration.',
  alternates: { canonical: '/zion-ai-quote-generator' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Zion AI Quote Generator',
        category: 'Growth',
        description:
          'Generate accurate quotes and proposals from product catalogs with AI-powered pricing and configuration.',
        iconEmoji: '💰',
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
            "description": "Deploy Zion AI Quote Generator to automate routine tasks and reduce manual errors.",
            "icon": "⚡"
          },
          {
            "title": "Scalable Growth",
            "description": "Use Zion AI Quote Generator to handle increasing complexity without proportional headcount.",
            "icon": "📈"
          }
        ],
        benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
        ctaLabel: 'Get Started with Zion AI Quote Generator',
      }}
    />
  );
}
