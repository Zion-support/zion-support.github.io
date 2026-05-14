import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Media & News Monitoring — Zion Tech Group",
  description: "AI Media & News Monitoring",
  keywords: "AI services, IT services, AI Media & News Monitoring",
  openGraph: {
    title: "AI Media & News Monitoring",
    description: "AI Media & News Monitoring",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Media & News Monitoring",
    description: "AI Media & News Monitoring"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-media-monitoring',
    title: 'AI Media & News Monitoring',
    description: `Tracks global news, podcasts, and video transcripts for brand mentions, sentiment shifts, and crisis signals in real time.`,
    features: ["100K+ sources monitored", "Multilingual sentiment", "Trending topic detection", "Custom keyword & competitor alerts"],
    benefits: ["Early crisis detection", "Measure PR campaign reach", "Identify influencer opportunities"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-media-monitoring',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📰',
    href: '/ai-services/ai-media-monitoring',
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

export default function AiMediaAndNewsMonitoringPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
