import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Video Generator & Editor — Zion Tech Group",
  description: "Generate professional videos from text prompts or scripts: auto-scene composition, voiceover, subtitles, and multi-format export (MP4, GIF, Reels).",
  keywords: "AI services, IT services, AI Video Generator & Editor",
  openGraph: {
    title: "AI Video Generator & Editor",
    description: "Generate professional videos from text prompts or scripts: auto-scene composition, voiceover, subtitles, and multi-format export (MP4, GIF, Reels).",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Generator & Editor",
    description: "Generate professional videos from text prompts or scripts: auto-scene composition, voiceover, subtitles, and multi-format export (MP4, GIF, Reels)."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-video-generator',
    title: 'AI Video Generator & Editor',
    description: 'Generate professional videos from text prompts or scripts: auto-scene composition, voiceover, subtitles, and multi-format export (MP4, GIF, Reels).',
    features: [
      'Text-to-video generation (diffusion + GANs)',
      'Auto storyboard & scene composition',
      'AI voiceover with 50+ languages',
      'Built-in captions & subtitles',
      'Export for social (9:16, 1:1, 16:9)'
    ],
    benefits: [
      'Produce 10x faster than manual editing',
      'No filming or editing experience needed',
      'Consistent brand style across videos',
      'Scale video content for marketing'
    ],
    pricing: {
      basic: '399',
      pro: '999',
      enterprise: '2999'
    },
    contactInfo: {
      website: '/ai-services/ai-video-generator',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎬',
    href: '/ai-services/ai-video-generator',
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

export default function AiVideoGeneratorAndEditorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
