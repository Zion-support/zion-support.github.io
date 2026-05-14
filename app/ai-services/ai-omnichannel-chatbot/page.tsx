import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Omnichannel Chatbot — Zion Tech Group",
  description: "Unified AI assistant across website chat, Messenger, WhatsApp, SMS, and voice. Context-aware conversations with seamless human handoff.",
  keywords: "AI services, IT services, AI Omnichannel Chatbot",
  openGraph: {
    title: "AI Omnichannel Chatbot",
    description: "Unified AI assistant across website chat, Messenger, WhatsApp, SMS, and voice. Context-aware conversations with seamless human handoff.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Omnichannel Chatbot",
    description: "Unified AI assistant across website chat, Messenger, WhatsApp, SMS, and voice. Context-aware conversations with seamless human handoff."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-chatbot-omnichannel',
    title: 'AI Omnichannel Chatbot',
    description: 'Unified AI assistant across website chat, Messenger, WhatsApp, SMS, and voice. Context-aware conversations with seamless human handoff.',
    features: [
      'Multichannel conversation orchestration',
      'Context memory across channels',
      'Fallback to live agents with full context',
      'Built-in analytics & conversation flows',
      'CRM & helpdesk integration'
    ],
    benefits: [
      '80% of queries resolved without human',
      'Consistent CX across all touchpoints',
      'Reduced agent handle time by 50%',
      '24/7/365 availability'
    ],
    pricing: {
      basic: '399',
      pro: '899',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-omnichannel-chatbot',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💬',
    href: '/ai-services/ai-omnichannel-chatbot',
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

export default function AiOmnichannelChatbotPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
