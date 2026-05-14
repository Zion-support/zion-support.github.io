import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real-Time Translation Engine — Zion Tech Group",
  description: "Real-Time Translation Engine",
  keywords: "AI services, IT services, Real-Time Translation Engine",
  openGraph: {
    title: "Real-Time Translation Engine",
    description: "Real-Time Translation Engine",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time Translation Engine",
    description: "Real-Time Translation Engine"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-realtime-translation',
    title: 'Real-Time Translation Engine',
    description: `Sub-200ms speech-to-text and text-to-speech translation across 70+ languages with dialect preservation.`,
    features: ["70+ languages & dialects", "Sub-200ms latency", "Speaker diarization", "Custom glossary per client", "REST + WebSocket APIs"],
    benefits: ["Break language barriers in global meetings", "Instant customer support in any language", "Reduce translation costs by 90%"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/ai-services/ai-realtime-translation',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌐',
    href: '/ai-services/ai-realtime-translation',
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

export default function RealtimeTranslationEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
