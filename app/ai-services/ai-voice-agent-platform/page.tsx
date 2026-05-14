import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Agent Platform — Zion Tech Group",
  description: "Deploy conversational AI voice agents for customer service, outbound calls, appointment scheduling, and lead qualification with natural speech.",
  keywords: "AI services, IT services, AI Voice Agent Platform",
  openGraph: {
    title: "AI Voice Agent Platform",
    description: "Deploy conversational AI voice agents for customer service, outbound calls, appointment scheduling, and lead qualification with natural speech.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agent Platform",
    description: "Deploy conversational AI voice agents for customer service, outbound calls, appointment scheduling, and lead qualification with natural speech."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-voice-agent-platform',
    title: 'AI Voice Agent Platform',
    description: 'Deploy conversational AI voice agents for customer service, outbound calls, appointment scheduling, and lead qualification with natural speech.',
    features: ['Natural voice synthesis', 'Real-time speech recognition', 'Multi-language support', 'CRM integration', 'Call analytics and scoring'],
    benefits: ['Handle 10x more calls', '24/7 customer availability', 'Reduce labor costs by 60%', 'Qualify leads automatically'],
    pricing: { basic: '499', pro: '1199', enterprise: '3999' },
    contactInfo: { website: '/ai-services/ai-voice-agent-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-voice-agent-platform',
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

export default function AiVoiceAgentPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
