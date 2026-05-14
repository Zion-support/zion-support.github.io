import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Content Generation — Zion Tech Group",
  description: "Generate high-quality blog posts, social media content, ad copy, product descriptions, and email campaigns powered by advanced LLMs.",
  keywords: "AI services, IT services, AI Content Generation",
  openGraph: {
    title: "AI Content Generation",
    description: "Generate high-quality blog posts, social media content, ad copy, product descriptions, and email campaigns powered by advanced LLMs.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Generation",
    description: "Generate high-quality blog posts, social media content, ad copy, product descriptions, and email campaigns powered by advanced LLMs."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Generate high-quality blog posts, social media content, ad copy, product descriptions, and email campaigns powered by advanced LLMs.',
    features: [
      'Blog post & article generation',
      'Social media content creation',
      'SEO-optimized copywriting',
      'Ad copy & landing page text',
      'Brand voice customization'
    ],
    benefits: [
      '10x content production speed',
      'Consistent brand messaging',
      'SEO-optimized output',
      'Reduced content creation costs'
    ],
    pricing: {
      basic: '149',
      pro: '349',
      enterprise: '799'
    },
    contactInfo: {
      website: '/ai-services/ai-content-generation',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '✍️',
    href: '/ai-services/ai-content-generation',
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

export default function AiContentGenerationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
