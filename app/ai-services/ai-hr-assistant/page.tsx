import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI HR Assistant — Zion Tech Group",
  description: "Intelligent HR automation for recruitment, onboarding, employee engagement, and policy Q&A using conversational AI.",
  keywords: "AI services, IT services, AI HR Assistant",
  openGraph: {
    title: "AI HR Assistant",
    description: "Intelligent HR automation for recruitment, onboarding, employee engagement, and policy Q&A using conversational AI.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI HR Assistant",
    description: "Intelligent HR automation for recruitment, onboarding, employee engagement, and policy Q&A using conversational AI."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-hr-assistant',
    title: 'AI HR Assistant',
    description: 'Intelligent HR automation for recruitment, onboarding, employee engagement, and policy Q&A using conversational AI.',
    features: [
      'AI resume screening & ranking',
      'Automated interview scheduling',
      'Employee onboarding chatbot',
      'Policy Q&A knowledge base',
      'Engagement & sentiment tracking'
    ],
    benefits: [
      '70% faster hiring pipeline',
      'Reduced HR administrative load',
      'Improved candidate experience',
      'Better employee retention insights'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1599'
    },
    contactInfo: {
      website: '/ai-services/ai-hr-assistant',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👥',
    href: '/ai-services/ai-hr-assistant',
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

export default function AiHrAssistantPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
