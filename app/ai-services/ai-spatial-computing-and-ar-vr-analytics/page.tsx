import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Spatial Computing & AR/VR Analytics — Zion Tech Group",
  description: "AI-powered spatial computing platform for augmented and virtual reality experiences — 3D scene understanding, gesture recognition, and immersive analytics.",
  keywords: "AI services, IT services, AI Spatial Computing & AR/VR Analytics",
  openGraph: {
    title: "AI Spatial Computing & AR/VR Analytics",
    description: "AI-powered spatial computing platform for augmented and virtual reality experiences — 3D scene understanding, gesture recognition, and immersive analytics.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Spatial Computing & AR/VR Analytics",
    description: "AI-powered spatial computing platform for augmented and virtual reality experiences — 3D scene understanding, gesture recognition, and immersive analytics."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-spatial-computing',
    title: 'AI Spatial Computing & AR/VR Analytics',
    description: 'AI-powered spatial computing platform for augmented and virtual reality experiences — 3D scene understanding, gesture recognition, and immersive analytics.',
    features: ['Real-time 3D scene reconstruction and understanding', 'AI-driven gesture and gaze tracking', 'Spatial audio processing and acoustic mapping', 'Immersive analytics dashboard creation', 'Cross-platform AR/VR deployment (Vision Pro, Quest, HoloLens)'],
    benefits: ['Create next-generation immersive experiences', 'Enable spatial data visualization for complex datasets', 'Reduce training costs with VR simulations', 'Bridge physical and digital workspaces'],
    pricing: { basic: '899', pro: '2199', enterprise: '4999' },
    contactInfo: { website: '/ai-services/ai-spatial-computing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🥽',
    href: '/ai-services/ai-spatial-computing',
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

export default function AiSpatialComputingAndArvrAnalyticsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
