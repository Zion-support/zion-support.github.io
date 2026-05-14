import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent (Phone) — Zion Tech Group",
  description: "Human-like conversational AI for phone calls: inbound customer service, outbound sales calls, appointment scheduling, and support ticket creation.",
  keywords: "AI services, IT services, AI Voice Agent (Phone)",
  openGraph: {
    title: "AI Voice Agent (Phone)",
    description: "Human-like conversational AI for phone calls: inbound customer service, outbound sales calls, appointment scheduling, and support ticket creation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent (Phone)",
    description: "Human-like conversational AI for phone calls: inbound customer service, outbound sales calls, appointment scheduling, and support ticket creation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-voice-agent',
    title: 'AI Voice Agent (Phone)',
    description: 'Human-like conversational AI for phone calls: inbound customer service, outbound sales calls, appointment scheduling, and support ticket creation.',
    features: [
      'Natural language understanding (NLU)',
      'Real-time speech synthesis & recognition',
      'Call routing & handoff to humans',
      'CRM integration (auto-log calls)',
      'Compliance recording & transcription'
    ],
    benefits: [
      'Handle 80% of calls without human agents',
      'Reduce call center costs by 70%',
      '24/7 availability across timezones',
      'Consistent, compliant call handling'
    ],
    pricing: {
      basic: '599',
      pro: '1499',
      enterprise: '4999'
    },
    contactInfo: {
      website: '/ai-services/ai-voice-agent',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📱',
    href: '/ai-services/ai-voice-agent',
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

export default function AiVoiceAgentPhonePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
