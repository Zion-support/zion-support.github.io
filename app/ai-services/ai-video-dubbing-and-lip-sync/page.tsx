import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Video Dubbing and Lip-Sync — Zion Tech Group",
  description: "Translate and dub videos with AI-generated voice plus perfect lip-sync. Supports 70+ languages and preserves speaker intonation and emotion.",
  keywords: "AI services, IT services, AI Video Dubbing and Lip-Sync",
  openGraph: {
    title: "AI Video Dubbing and Lip-Sync",
    description: "Translate and dub videos with AI-generated voice plus perfect lip-sync. Supports 70+ languages and preserves speaker intonation and emotion.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Dubbing and Lip-Sync",
    description: "Translate and dub videos with AI-generated voice plus perfect lip-sync. Supports 70+ languages and preserves speaker intonation and emotion."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-video-dubbing",
    href: "/ai-services/video-dubbing",
    icon: "🎬",
    category: "ai",
    title: "AI Video Dubbing and Lip-Sync",
    description: "Translate and dub videos with AI-generated voice plus perfect lip-sync. Supports 70+ languages and preserves speaker intonation and emotion.",
    features: [
      "Voice cloning per original speaker",
      "Phoneme-aware lip movement adjustment",
      "Background music and sound effect retention",
      "Subtitle generation in SRT and VTT",
      "YouTube and TikTok multi-language upload automation"
    ],
    benefits: [
      "Expands global reach without separate shoots",
      "Saves $15K–$50K per video vs traditional dubbing",
      "Maintains brand voice consistency across locales"
    ],
    pricing: { per_minute: "12", monthly: "contact" }
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

export default function AiVideoDubbingAndLipsyncPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
