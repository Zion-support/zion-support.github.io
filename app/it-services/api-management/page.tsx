import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Management & Gateway Services | Zion Tech Group',
  description: 'Complete API lifecycle management with gateway deployment, versioning, rate limiting, analytics, and developer portal.',
  alternates: { canonical: 'it-services/api-management' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'API Management & Gateway Services',
        category: 'API & Integration',
        description: 'Complete API lifecycle management with gateway deployment, versioning, rate limiting, analytics, and developer portal.',
        iconEmoji: '🌐',
        features: [
          {
            "title": "API Gateway Deployment",
            "description": "Set up Kong, Apigee, or AWS API Gateway with routing, caching, and transformation."
          },
          {
            "title": "Version Management",
            "description": "Manage versioning, deprecation, and backward compatibility with migration support."
          },
          {
            "title": "Rate Limiting & Throttling",
            "description": "Protect backends with intelligent rate limiting and burst handling per client."
          },
          {
            "title": "Developer Portal",
            "description": "Self-service portal with interactive documentation, API explorer, and sandbox testing."
          },
          {
            "title": "Analytics & Monitoring",
            "description": "Track usage, performance, errors, and consumer patterns with real-time alerting."
          },
          {
            "title": "Security & Authentication",
            "description": "OAuth 2.0, API keys, JWT validation, and mutual TLS implementation."
          }
        ],
        useCases: [
          {
            "title": "API Program Launch",
            "description": "Launch APIs with developer portal, documentation, rate limiting, and onboarding.",
            "icon": "🚀"
          },
          {
            "title": "Legacy API Modernization",
            "description": "Migrate SOAP to modern REST with improved performance and documentation.",
            "icon": "🔄"
          },
          {
            "title": "Partner Integration Hub",
            "description": "Build secure partner API endpoints with granular access controls.",
            "icon": "🤝"
          }
        ],
        benefits: ["Centralized API governance", "10x faster developer onboarding", "Built-in rate limiting", "Real-time usage analytics", "Developer self-service portal", "Automated documentation"],
        ctaLabel: 'Get Started with API Management & Gateway Services',
        pricing: [
          { tier: 'Starter', price: '$999', period: '/month', features: ['Core features', 'Up to 100 items/month', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$2,999', period: '/month', features: ['Advanced engine', 'Unlimited items', 'Priority support', 'API access', 'Team collaboration (10 users)', 'Custom integrations'], popular: true },
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
