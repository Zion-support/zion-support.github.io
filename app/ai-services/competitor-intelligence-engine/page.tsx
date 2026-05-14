import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Competitor Intelligence Engine — Zion Tech Group",
  description: "Competitor Intelligence Engine",
  keywords: "AI services, IT services, Competitor Intelligence Engine",
  openGraph: {
    title: "Competitor Intelligence Engine",
    description: "Competitor Intelligence Engine",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Competitor Intelligence Engine",
    description: "Competitor Intelligence Engine"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-competitor-intelligence',
    title: 'Competitor Intelligence Engine',
    description: `Automated competitor tracking: pricing changes, feature releases, marketing campaigns from 10K+ sources. Weekly digest + real-time alerts.`,
    features: ["Daily web crawls", "Feature matrix auto-update", "Sentiment tracking", "Alert rules & thresholds", "Export to PDF/PPT"],
    benefits: ["Always know competitor moves", "Price with confidence", "Identify market gaps"],
    pricing: {"basic":"299","pro":"699","enterprise":"1999"},
    contactInfo: {
      website: '/ai-services/ai-competitor-intelligence',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎯',
    href: '/ai-services/ai-competitor-intelligence',
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

export default function CompetitorIntelligenceEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
