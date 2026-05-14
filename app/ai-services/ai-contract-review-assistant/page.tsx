import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Contract Review Assistant — Zion Tech Group",
  description: "AI Contract Review Assistant",
  keywords: "AI services, IT services, AI Contract Review Assistant",
  openGraph: {
    title: "AI Contract Review Assistant",
    description: "AI Contract Review Assistant",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Contract Review Assistant",
    description: "AI Contract Review Assistant"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-contract-review',
    title: 'AI Contract Review Assistant',
    description: `Automatically reviews legal contracts, flags risky clauses, suggests amendments, and benchmarks against industry standards.`,
    features: ["Clause risk scoring (1-10)", "Comparison with 200K+ public contracts", "AI-suggested redlines", "Compliance checklist generation"],
    benefits: ["Cuts review time from hours to minutes", "Catches 95% of standard risks", "Reduces outside counsel dependency"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-contract-review',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📝',
    href: '/ai-services/ai-contract-review',
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

export default function AiContractReviewAssistantPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
