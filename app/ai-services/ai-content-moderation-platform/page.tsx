import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Content Moderation Platform — Zion Tech Group",
  description: "Automated content review for user-generated platforms — detect spam, harassment, and policy violations across text, image, and video.",
  keywords: "AI services, IT services, AI Content Moderation Platform",
  openGraph: {
    title: "AI Content Moderation Platform",
    description: "Automated content review for user-generated platforms — detect spam, harassment, and policy violations across text, image, and video.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Moderation Platform",
    description: "Automated content review for user-generated platforms — detect spam, harassment, and policy violations across text, image, and video."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-content-moderation',
    title: 'AI Content Moderation Platform',
    description: 'Automated content review for user-generated platforms — detect spam, harassment, and policy violations across text, image, and video.',
    features: ['Multi-modal content analysis', 'Custom policy rule engine', 'Real-time moderation workflows', 'Appeal and escalation handling', 'Compliance audit logging'],
    benefits: ['Moderate 99% of content automatically', 'Reduce review team costs by 75%', 'Maintain community safety standards', 'Scale to millions of posts daily'],
    pricing: { basic: '399', pro: '999', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-content-moderation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🛡️',
    href: '/ai-services/ai-content-moderation',
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

export default function AiContentModerationPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
