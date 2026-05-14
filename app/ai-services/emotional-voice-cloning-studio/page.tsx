import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Emotional Voice Cloning Studio — Zion Tech Group",
  description: "Clone any voice with full emotional control — happiness, sadness, anger, urgency — for audiobooks, games, and accessibility. Supports 40+ languages and real-time modulation.",
  keywords: "AI services, IT services, Emotional Voice Cloning Studio",
  openGraph: {
    title: "Emotional Voice Cloning Studio",
    description: "Clone any voice with full emotional control — happiness, sadness, anger, urgency — for audiobooks, games, and accessibility. Supports 40+ languages and real-time modulation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Emotional Voice Cloning Studio",
    description: "Clone any voice with full emotional control — happiness, sadness, anger, urgency — for audiobooks, games, and accessibility. Supports 40+ languages and real-time modulation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-voice-cloning-emotion",
    href: "/ai-services/voice-cloning-emotion",
    icon: "🎭",
    category: "ai",
    title: "Emotional Voice Cloning Studio",
    description: "Clone any voice with full emotional control — happiness, sadness, anger, urgency — for audiobooks, games, and accessibility. Supports 40+ languages and real-time modulation.",
    features: [
      "Zero-shot voice cloning from 10-second sample",
      "Per-sentence emotion injection (8 basic + complex blends)",
      "Real-time voice conversion during calls",
      "Speaker diarization and multi-voice projects",
      "Ethical consent layer and watermarking"
    ],
    benefits: [
      "Cuts dubbing costs by 70%",
      "Enables dynamic NPC voices in games",
      "Restores speech for ALS patients with their own voiceprint"
    ],
    pricing: { basic: "99", pro: "299", enterprise: "999" }
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

export default function EmotionalVoiceCloningStudioPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
