import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Voice Assistant Pro — Zion Tech Group",
  description: "Voice Assistant Pro",
  keywords: "AI services, IT services, Voice Assistant Pro",
  openGraph: {
    title: "Voice Assistant Pro",
    description: "Voice Assistant Pro",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Assistant Pro",
    description: "Voice Assistant Pro"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-voice-assistant-pro',
    title: 'Voice Assistant Pro',
    description: `Custom voice assistants for brands: wake-word detection, natural-language task execution, multi-turn dialog. Deploy on-premise or cloud.`,
    features: ["Custom wake-word training", "Task execution", "Multi-turn context", "On-premise deployment", "Twilio/Asterisk integration"],
    benefits: ["Automate 60% of inbound calls", "24/7 support without agents", "Consistent brand experience"],
    pricing: {"basic":"249","pro":"649","enterprise":"1699"},
    contactInfo: {
      website: '/ai-services/ai-voice-assistant-pro',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📞',
    href: '/ai-services/ai-voice-assistant-pro',
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

export default function VoiceAssistantProPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
