import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Assistant & Conversational IVR — Zion Tech Group",
  description: "Deploy intelligent voice assistants for customer service, internal IT support, and appointment scheduling with natural language understanding and seamless human escalation.",
  keywords: "AI services, IT services, AI Voice Assistant & Conversational IVR",
  openGraph: {
    title: "AI Voice Assistant & Conversational IVR",
    description: "Deploy intelligent voice assistants for customer service, internal IT support, and appointment scheduling with natural language understanding and seamless human escalation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Assistant & Conversational IVR",
    description: "Deploy intelligent voice assistants for customer service, internal IT support, and appointment scheduling with natural language understanding and seamless human escalation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-voice-assistant',
    title: 'AI Voice Assistant & Conversational IVR',
    description: 'Deploy intelligent voice assistants for customer service, internal IT support, and appointment scheduling with natural language understanding and seamless human escalation.',
    features: ['Natural language voice recognition across 100+ languages', 'Context-aware multi-turn conversation management', 'Sentiment analysis for real-time response adaptation', 'CRM and calendar integration for action completion', 'Analytics dashboard with call scoring and insights'],
    benefits: ['Handle 70% of calls without human intervention', 'Reduce average handle time by 50%', '24/7 availability for global customer bases', 'Seamless escalation with full context transfer'],
    pricing: { basic: '399', pro: '899', enterprise: '2199' },
    contactInfo: { website: '/ai-services/ai-voice-assistant', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-voice-assistant',
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

export default function AiVoiceAssistantAndConversationalIvrPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
