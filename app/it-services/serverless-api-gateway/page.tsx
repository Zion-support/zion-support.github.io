import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serverless API Gateway — Zion Tech Group",
  description: "Serverless API Gateway",
  keywords: "AI services, IT services, Serverless API Gateway",
  openGraph: {
    title: "Serverless API Gateway",
    description: "Serverless API Gateway",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Serverless API Gateway",
    description: "Serverless API Gateway"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-serverless-api-gateway',
    title: 'Serverless API Gateway',
    description: `Fully managed API gateway with rate limiting, auth, caching, and transformation. Pay-per-request pricing, auto-scaling to millions of RPS.`,
    features: ["JWT/OAuth validation", "Request/response transformation", "Response caching (Redis)", "Rate limiting & quotas", "WebSocket support"],
    benefits: ["Zero ops overhead", "Scale automatically", "Cut API management costs by 80%"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/it-services/it-serverless-api-gateway',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚪',
    href: '/it-services/it-serverless-api-gateway',
    category: 'it'
  }
;

const mergedService = {
  ...service,
  contactInfo: {
    website: 'https://ziontechgroup.com',
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }
};

export default function ServerlessApiGatewayPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
