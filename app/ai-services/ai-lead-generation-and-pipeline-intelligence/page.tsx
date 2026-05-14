import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Lead Generation & Pipeline Intelligence — Zion Tech Group",
  description: "Intelligent lead generation platform — prospect identification, intent signal detection, personalized outreach automation, and pipeline conversion optimization.",
  keywords: "AI services, IT services, AI Lead Generation & Pipeline Intelligence",
  openGraph: {
    title: "AI Lead Generation & Pipeline Intelligence",
    description: "Intelligent lead generation platform — prospect identification, intent signal detection, personalized outreach automation, and pipeline conversion optimization.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Generation & Pipeline Intelligence",
    description: "Intelligent lead generation platform — prospect identification, intent signal detection, personalized outreach automation, and pipeline conversion optimization."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-lead-generation',
    title: 'AI Lead Generation & Pipeline Intelligence',
    description: 'Intelligent lead generation platform — prospect identification, intent signal detection, personalized outreach automation, and pipeline conversion optimization.',
    features: ['AI-powered prospect scoring and identification', 'Intent signal detection from web and social data', 'Personalized outreach generation at scale', 'Multi-channel engagement orchestration', 'Pipeline conversion prediction and bottleneck analysis'],
    benefits: ['Increase qualified leads by 300%', 'Reduce cost per acquisition by 70%', 'Automate top-of-funnel outreach without losing personalization', 'Predict pipeline revenue with 85%+ accuracy'],
    pricing: { basic: '399', pro: '899', enterprise: '2199' },
    contactInfo: { website: '/ai-services/ai-lead-generation', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎯',
    href: '/ai-services/ai-lead-generation',
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

export default function AiLeadGenerationAndPipelineIntelligencePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
