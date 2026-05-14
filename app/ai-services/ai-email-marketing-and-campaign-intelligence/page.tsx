import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Email Marketing & Campaign Intelligence — Zion Tech Group",
  description: "AI-driven email marketing with intelligent subject line generation, send time optimization, content personalization, and automated A/B testing at enterprise scale.",
  keywords: "AI services, IT services, AI Email Marketing & Campaign Intelligence",
  openGraph: {
    title: "AI Email Marketing & Campaign Intelligence",
    description: "AI-driven email marketing with intelligent subject line generation, send time optimization, content personalization, and automated A/B testing at enterprise scale.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Email Marketing & Campaign Intelligence",
    description: "AI-driven email marketing with intelligent subject line generation, send time optimization, content personalization, and automated A/B testing at enterprise scale."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-email-marketing',
    title: 'AI Email Marketing & Campaign Intelligence',
    description: 'AI-driven email marketing with intelligent subject line generation, send time optimization, content personalization, and automated A/B testing at enterprise scale.',
    features: ['AI subject line and content generation', 'Predictive send time optimization per recipient', 'Dynamic content personalization at scale', 'Automated A/B/n testing with multi-armed bandits', 'Deliverability monitoring and inbox placement scoring'],
    benefits: ['Increase open rates by 40% with AI-optimized subjects', 'Boost click-through rates by 60% with personalized content', 'Reduce campaign setup time by 80%', 'Maintain high deliverability with proactive monitoring'],
    pricing: { basic: '149', pro: '349', enterprise: '899' },
    contactInfo: { website: '/ai-services/ai-email-marketing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📧',
    href: '/ai-services/ai-email-marketing',
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

export default function AiEmailMarketingAndCampaignIntelligencePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
