import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Sales Intelligence — Zion Tech Group",
  description: "Boost revenue with AI-driven lead scoring, pipeline prediction, deal insights, and automated outreach sequencing.",
  keywords: "AI services, IT services, AI Sales Intelligence",
  openGraph: {
    title: "AI Sales Intelligence",
    description: "Boost revenue with AI-driven lead scoring, pipeline prediction, deal insights, and automated outreach sequencing.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Intelligence",
    description: "Boost revenue with AI-driven lead scoring, pipeline prediction, deal insights, and automated outreach sequencing."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-sales-intelligence',
    title: 'AI Sales Intelligence',
    description: 'Boost revenue with AI-driven lead scoring, pipeline prediction, deal insights, and automated outreach sequencing.',
    features: [
      'Predictive lead scoring (0-100)',
      'Sales pipeline forecasting',
      'Deal risk detection & alerts',
      'Automated email sequences',
      'Competitive intelligence briefs'
    ],
    benefits: [
      'Higher conversion rates',
      'Shorter sales cycles',
      'Data-driven deal prioritization',
      'Revenue forecasting accuracy'
    ],
    pricing: {
      basic: '399',
      pro: '799',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-sales-intelligence',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/ai-services/ai-sales-intelligence',
    popular: true,
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

export default function AiSalesIntelligencePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
