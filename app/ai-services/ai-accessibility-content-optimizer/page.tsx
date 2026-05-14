import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Accessibility Content Optimizer — Zion Tech Group",
  description: "AI Accessibility Content Optimizer",
  keywords: "AI services, IT services, AI Accessibility Content Optimizer",
  openGraph: {
    title: "AI Accessibility Content Optimizer",
    description: "AI Accessibility Content Optimizer",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Accessibility Content Optimizer",
    description: "AI Accessibility Content Optimizer"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-accessibility-optimizer',
    title: 'AI Accessibility Content Optimizer',
    description: `Suggests alt-text for images, transcript generation for videos, and semantic HTML improvements to boost accessibility and SEO simultaneously.`,
    features: ["Auto-alt-text for images", "Video transcript with speaker IDs", "Readability scoring", "WCAG 2.1 AA gap analysis"],
    benefits: ["Improves Google Lighthouse scores", "Meets legal compliance", "Enhances user experience"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-accessibility-optimizer',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔧',
    href: '/ai-services/ai-accessibility-optimizer',
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

export default function AiAccessibilityContentOptimizerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
