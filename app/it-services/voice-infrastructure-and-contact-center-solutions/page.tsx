import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Voice Infrastructure & Contact Center Solutions — Zion Tech Group",
  description: "Modern contact center infrastructure - SIP trunking, IVR design, call routing, quality monitoring, and AI agent assistance.",
  keywords: "AI services, IT services, Voice Infrastructure & Contact Center Solutions",
  openGraph: {
    title: "Voice Infrastructure & Contact Center Solutions",
    description: "Modern contact center infrastructure - SIP trunking, IVR design, call routing, quality monitoring, and AI agent assistance.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice Infrastructure & Contact Center Solutions",
    description: "Modern contact center infrastructure - SIP trunking, IVR design, call routing, quality monitoring, and AI agent assistance."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-voice-infrastructure',
    title: 'Voice Infrastructure & Contact Center Solutions',
    description: 'Modern contact center infrastructure - SIP trunking, IVR design, call routing, quality monitoring, and AI agent assistance.',
    features: ['SIP and VoIP infrastructure', 'Intelligent routing and IVR', 'Call quality monitoring', 'AI agent assistance', 'Omnichannel integration'],
    benefits: ['Reduce voice costs by 40%', 'Improve CSAT with smart routing', 'Call analytics insights', 'CRM integration ready'],
    pricing: { basic: '1299', pro: '2899', enterprise: '6499' },
    contactInfo: { website: '/it-services/voice-infrastructure', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📞',
    href: '/it-services/voice-infrastructure',
    category: 'cloud'
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

export default function VoiceInfrastructureAndContactCenterSolutionsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
