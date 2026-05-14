import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Translation & Localization — Zion Tech Group",
  description: "Enterprise translation engine with 100+ language support, context-aware Neural MT, terminology management, and human review workflows.",
  keywords: "AI services, IT services, AI Translation & Localization",
  openGraph: {
    title: "AI Translation & Localization",
    description: "Enterprise translation engine with 100+ language support, context-aware Neural MT, terminology management, and human review workflows.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Translation & Localization",
    description: "Enterprise translation engine with 100+ language support, context-aware Neural MT, terminology management, and human review workflows."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-translation-services',
    title: 'AI Translation & Localization',
    description: 'Enterprise translation engine with 100+ language support, context-aware Neural MT, terminology management, and human review workflows.',
    features: ['100+ language Neural Machine Translation', 'Domain-specific model fine-tuning', 'Translation memory & glossary integration', 'Quality scoring & consistency checks', 'API integration for real-time translation'],
    benefits: ['80% reduction in translation costs', '10x faster content localization', 'Brand-consistent terminology', 'Built-in QA workflow'],
    pricing: { basic: '249', pro: '599', enterprise: '1499' },
    contactInfo: { website: '/ai-services/ai-translation-services', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🌐',
    href: '/ai-services/ai-translation-services',
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

export default function AiTranslationAndLocalizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
