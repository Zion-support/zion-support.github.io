import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Voice Cloning for Marketing — Zion Tech Group",
  description: "AI Voice Cloning for Marketing",
  keywords: "AI services, IT services, AI Voice Cloning for Marketing",
  openGraph: {
    title: "AI Voice Cloning for Marketing",
    description: "AI Voice Cloning for Marketing",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Cloning for Marketing",
    description: "AI Voice Cloning for Marketing"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-voice-cloning-marketing',
    title: 'AI Voice Cloning for Marketing',
    description: `Clone your brand spokesperson's voice to produce personalized video ads, podcast intros, and multilingual marketing content.`,
    features: ["Voice clone with 5 min sample", "Emotion & tone control", "30+ language output", "Bulk video rendering API"],
    benefits: ["Reduces voiceover costs by 70%", "Scales personalized campaigns", "Maintains brand consistency"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-voice-cloning-marketing',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎙️',
    href: '/ai-services/ai-voice-cloning-marketing',
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

export default function AiVoiceCloningForMarketingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
