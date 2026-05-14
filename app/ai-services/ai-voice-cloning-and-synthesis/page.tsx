import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Cloning & Synthesis — Zion Tech Group",
  description: "Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications.",
  keywords: "AI services, IT services, AI Voice Cloning & Synthesis",
  openGraph: {
    title: "AI Voice Cloning & Synthesis",
    description: "Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Cloning & Synthesis",
    description: "Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-voice-cloning',
    title: 'AI Voice Cloning & Synthesis',
    description: 'Clone any voice with 30 seconds of audio for voiceovers, podcasts, audiobooks, and interactive voice applications.',
    features: ['Voice cloning from 30s audio sample', 'Emotion and tone control — adjust pitch, rate, emphasis', 'Real-time audio streaming for voice assistants', 'Multi-speaker conversation generation', 'Studio-quality audio with noise reduction', 'Ethical consent tracking and ownership verification'],
    benefits: ['Studio-quality from 30 seconds of audio', '50+ languages and dialects', 'Real-time streaming capability', 'Reduce voice talent costs by 80%', 'Ethical consent management', 'Custom emotion and tone controls'],
    pricing: { basic: '79', pro: '249', enterprise: '599' },
    contactInfo: { website: '/ai-services/ai-voice-cloning', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🗣️',
    href: '/ai-services/ai-voice-cloning',
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

export default function AiVoiceCloningAndSynthesisPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
