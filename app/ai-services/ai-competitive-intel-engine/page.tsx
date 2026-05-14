import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Competitive Intel Engine — Zion Tech Group",
  description: "AI Competitive Intel Engine",
  keywords: "AI services, IT services, AI Competitive Intel Engine",
  openGraph: {
    title: "AI Competitive Intel Engine",
    description: "AI Competitive Intel Engine",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Competitive Intel Engine",
    description: "AI Competitive Intel Engine"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-competitive-intel-engine',
    title: 'AI Competitive Intel Engine',
    description: `Tracks competitors' pricing changes, feature launches, hiring patterns, and customer reviews to deliver weekly strategic insights.`,
    features: ["Price monitoring across 50+ sources", "Feature gap analysis vs your product", "Hiring intent detection (e.g. 'hiring 20 engineers')", "Sentiment on competitor brands"],
    benefits: ["Informs pricing strategy", "Prioritizes product roadmap", "Anticipates competitor moves"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-competitive-intel-engine',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔍',
    href: '/ai-services/ai-competitive-intel-engine',
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

export default function AiCompetitiveIntelEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
