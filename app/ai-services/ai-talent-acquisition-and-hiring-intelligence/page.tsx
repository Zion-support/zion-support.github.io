import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Talent Acquisition & Hiring Intelligence — Zion Tech Group",
  description: "End-to-end AI recruiting platform — candidate sourcing, resume screening, bias-free scoring, interview scheduling, and predictive hiring success modeling.",
  keywords: "AI services, IT services, AI Talent Acquisition & Hiring Intelligence",
  openGraph: {
    title: "AI Talent Acquisition & Hiring Intelligence",
    description: "End-to-end AI recruiting platform — candidate sourcing, resume screening, bias-free scoring, interview scheduling, and predictive hiring success modeling.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Acquisition & Hiring Intelligence",
    description: "End-to-end AI recruiting platform — candidate sourcing, resume screening, bias-free scoring, interview scheduling, and predictive hiring success modeling."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-talent-acquisition',
    title: 'AI Talent Acquisition & Hiring Intelligence',
    description: 'End-to-end AI recruiting platform — candidate sourcing, resume screening, bias-free scoring, interview scheduling, and predictive hiring success modeling.',
    features: ['Multi-platform AI candidate sourcing', 'Bias-free resume scoring & ranking', 'Automated interview scheduling & coordination', 'Predictive hiring success modeling', 'Competitor talent mapping & intelligence', 'DEI analytics & reporting dashboard'],
    benefits: ['Reduce time-to-hire by 60% with AI sourcing', 'Eliminate unconscious bias in screening', 'Predict candidate retention probability before hiring', 'Access passive candidates through intelligent mapping'],
    pricing: { basic: '449', pro: '999', enterprise: '2299' },
    contactInfo: { website: '/ai-services/ai-talent-acquisition', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🎯',
    href: '/ai-services/ai-talent-acquisition',
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

export default function AiTalentAcquisitionAndHiringIntelligencePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
