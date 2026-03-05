import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Sales Assistant | Zion Tech Group',
  description:
    'Accelerate sales cycles with AI-powered call summaries, follow-up suggestions, and competitive intelligence.',
  alternates: { canonical: '/zion-ai-sales-assistant' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Zion AI Sales Assistant',
        category: 'Growth',
        description:
          'Accelerate sales cycles with AI-powered call summaries, follow-up suggestions, and competitive intelligence.',
        iconEmoji: '📞',
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
            "description": "Deploy Zion AI Sales Assistant to automate routine tasks and reduce manual errors.",
            "icon": "⚡"
          },
          {
            "title": "Scalable Growth",
            "description": "Use Zion AI Sales Assistant to handle increasing complexity without proportional headcount.",
            "icon": "📈"
          }
        ],
        benefits: ["Reduced operational costs", "Faster time to value", "Enterprise-grade security"],
        ctaLabel: 'Get Started with Zion AI Sales Assistant',
      }}
    />
  );
}
