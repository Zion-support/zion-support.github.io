import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI SEO Content Optimizer — Zion Tech Group",
  description: "Real-time SEO analysis and content optimization: keyword suggestions, meta tag generation, readability scoring, and content gap analysis.",
  keywords: "AI services, IT services, AI SEO Content Optimizer",
  openGraph: {
    title: "AI SEO Content Optimizer",
    description: "Real-time SEO analysis and content optimization: keyword suggestions, meta tag generation, readability scoring, and content gap analysis.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Content Optimizer",
    description: "Real-time SEO analysis and content optimization: keyword suggestions, meta tag generation, readability scoring, and content gap analysis."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-seo-optimizer',
    title: 'AI SEO Content Optimizer',
    description: 'Real-time SEO analysis and content optimization: keyword suggestions, meta tag generation, readability scoring, and content gap analysis.',
    features: [
      'On-page SEO audit & recommendations',
      'Automated meta title & description generation',
      'Readability & grammar improvement',
      'Competitor content gap analysis',
      'Internal linking suggestions'
    ],
    benefits: [
      'Rank higher in search results',
      'Increase organic traffic by 40%',
      'Reduce content optimization time by 80%',
      'Stay ahead of algorithm updates'
    ],
    pricing: {
      basic: '199',
      pro: '499',
      enterprise: '1299'
    },
    contactInfo: {
      website: '/ai-services/ai-seo-optimizer',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔍',
    href: '/ai-services/ai-seo-optimizer',
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

export default function AiSeoContentOptimizerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
