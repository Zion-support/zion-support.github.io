import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Employee Experience Platform — Zion Tech Group",
  description: "End-to-end employee lifecycle automation from AI-powered onboarding to performance management, engagement tracking, and retention prediction.",
  keywords: "AI services, IT services, AI Employee Experience Platform",
  openGraph: {
    title: "AI Employee Experience Platform",
    description: "End-to-end employee lifecycle automation from AI-powered onboarding to performance management, engagement tracking, and retention prediction.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Employee Experience Platform",
    description: "End-to-end employee lifecycle automation from AI-powered onboarding to performance management, engagement tracking, and retention prediction."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-employee-experience',
    title: 'AI Employee Experience Platform',
    description: 'End-to-end employee lifecycle automation from AI-powered onboarding to performance management, engagement tracking, and retention prediction.',
    features: ['Automated onboarding workflow orchestration', 'Personalized training & development paths', 'Sentiment & engagement tracking', 'AI-powered retention risk prediction', 'Buddy & mentor matching algorithms'],
    benefits: ['50% faster onboarding to productivity', 'Proactive retention risk detection', 'Eliminate IT/HR coordination overhead', 'Personalized growth plans per employee'],
    pricing: { basic: '299', pro: '699', enterprise: '1599' },
    contactInfo: { website: '/ai-services/ai-employee-experience', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤝',
    href: '/ai-services/ai-employee-experience',
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

export default function AiEmployeeExperiencePlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
