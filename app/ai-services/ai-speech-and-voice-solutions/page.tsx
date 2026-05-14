import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Speech & Voice Solutions — Zion Tech Group",
  description: "Enterprise-grade speech technology including high-accuracy transcription, AI voice cloning, real-time translation, voice biometrics, and conversational AI for customer service.",
  keywords: "AI services, IT services, AI Speech & Voice Solutions",
  openGraph: {
    title: "AI Speech & Voice Solutions",
    description: "Enterprise-grade speech technology including high-accuracy transcription, AI voice cloning, real-time translation, voice biometrics, and conversational AI for customer service.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Speech & Voice Solutions",
    description: "Enterprise-grade speech technology including high-accuracy transcription, AI voice cloning, real-time translation, voice biometrics, and conversational AI for customer service."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-speech-voice-solutions',
    title: 'AI Speech & Voice Solutions',
    description: 'Enterprise-grade speech technology including high-accuracy transcription, AI voice cloning, real-time translation, voice biometrics, and conversational AI for customer service.',
    features: ['99.2% accuracy speech-to-text in 60+ languages', 'Real-time voice translation for live meetings', 'Voice cloning for personalized brand audio content', 'Voice biometrics for secure identity verification', 'Conversational IVR with natural language understanding', 'Meeting transcription with speaker diarization & summaries'],
    benefits: ['Automate call center transcription at scale', 'Provide multilingual support without hiring translators', 'Secure authentication via voice fingerprinting', 'Create branded audio content with AI voice cloning'],
    pricing: { basic: '279', pro: '649', enterprise: '1599' },
    contactInfo: { website: '/ai-services/ai-speech-voice-solutions', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎙️',
    href: '/ai-services/ai-speech-voice-solutions',
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

export default function AiSpeechAndVoiceSolutionsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
