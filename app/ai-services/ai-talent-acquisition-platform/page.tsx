import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Talent Acquisition Platform — Zion Tech Group",
  description: "AI Talent Acquisition Platform",
  keywords: "AI services, IT services, AI Talent Acquisition Platform",
  openGraph: {
    title: "AI Talent Acquisition Platform",
    description: "AI Talent Acquisition Platform",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Talent Acquisition Platform",
    description: "AI Talent Acquisition Platform"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-talent-acquisition-platform',
    title: 'AI Talent Acquisition Platform',
    description: `End-to-end recruiting: resume parsing, candidate matching, interview scheduling, bias detection. Integrates with Greenhouse, Lever.`,
    features: ["Resume parsing & scoring", "Candidate-job fit matching", "Automated interview scheduling", "Bias detection", "Offer management"],
    benefits: ["Hire 40% faster", "Reduce bias in hiring", "Improve candidate quality"],
    pricing: {"basic":"249","pro":"599","enterprise":"1499"},
    contactInfo: {
      website: '/ai-services/ai-talent-acquisition-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👥',
    href: '/ai-services/ai-talent-acquisition-platform',
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

export default function AiTalentAcquisitionPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
