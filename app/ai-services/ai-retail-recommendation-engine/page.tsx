import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Retail Recommendation Engine — Zion Tech Group",
  description: "AI Retail Recommendation Engine",
  keywords: "AI services, IT services, AI Retail Recommendation Engine",
  openGraph: {
    title: "AI Retail Recommendation Engine",
    description: "AI Retail Recommendation Engine",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Retail Recommendation Engine",
    description: "AI Retail Recommendation Engine"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-retail-recommendation-engine',
    title: 'AI Retail Recommendation Engine',
    description: `Product recommendation engine for e-commerce that increases AOV by 15–25% using collaborative filtering, basket analysis, and real-time behavior.`,
    features: ["Real-time personalization", "A/B testing built-in", "Cross-sell & upsell suggestions", "Seasonal trend integration"],
    benefits: ["Boosts average order value", "Reduces cart abandonment", "Increases customer LTV"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-retail-recommendation-engine',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛒',
    href: '/ai-services/ai-retail-recommendation-engine',
    category: 'ai'
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

export default function AiRetailRecommendationEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
