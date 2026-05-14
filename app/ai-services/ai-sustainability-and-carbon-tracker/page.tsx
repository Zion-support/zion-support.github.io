import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Sustainability & Carbon Tracker — Zion Tech Group",
  description: "AI Sustainability & Carbon Tracker",
  keywords: "AI services, IT services, AI Sustainability & Carbon Tracker",
  openGraph: {
    title: "AI Sustainability & Carbon Tracker",
    description: "AI Sustainability & Carbon Tracker",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sustainability & Carbon Tracker",
    description: "AI Sustainability & Carbon Tracker"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-sustainability-carbon-tracker',
    title: 'AI Sustainability & Carbon Tracker',
    description: `Automatically calculates organizational carbon footprint from operational data (energy, travel, cloud usage) and suggests reduction strategies.`,
    features: ["Integration with AWS/GCP carbon APIs", "Travel emission estimation from calendars", "Supply chain scope 3 modeling", "Regulatory reporting templates (ESG)"],
    benefits: ["Achieve ESG reporting compliance", "Identify top emission sources", "Set science-based reduction targets"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-sustainability-carbon-tracker',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌱',
    href: '/ai-services/ai-sustainability-carbon-tracker',
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

export default function AiSustainabilityAndCarbonTrackerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
