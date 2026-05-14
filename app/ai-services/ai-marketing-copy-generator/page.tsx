import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Marketing Copy Generator — Zion Tech Group",
  description: "Generate high-converting ad copy, email campaigns, social posts, and landing page content in your brand voice across 30+ languages.",
  keywords: "AI services, IT services, AI Marketing Copy Generator",
  openGraph: {
    title: "AI Marketing Copy Generator",
    description: "Generate high-converting ad copy, email campaigns, social posts, and landing page content in your brand voice across 30+ languages.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Copy Generator",
    description: "Generate high-converting ad copy, email campaigns, social posts, and landing page content in your brand voice across 30+ languages."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-marketing-copy-generator',
    title: 'AI Marketing Copy Generator',
    description: 'Generate high-converting ad copy, email campaigns, social posts, and landing page content in your brand voice across 30+ languages.',
    features: [
      'Brand voice training & style guide adherence',
      'A/B variant generation',
      'SEO-optimized blog & ad copy',
      'Social media captions, hashtags',
      'Image-to-caption & video-to-description'
    ],
    benefits: [
      'Produce 50x content variations instantly',
      'Maintain consistent brand voice',
      'Reduce copywriter dependency',
      'Global reach with native-language copy'
    ],
    pricing: {
      basic: '199',
      pro: '499',
      enterprise: '1399'
    },
    contactInfo: {
      website: '/ai-services/ai-marketing-copy-generator',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '✍️',
    href: '/ai-services/ai-marketing-copy-generator',
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

export default function AiMarketingCopyGeneratorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
