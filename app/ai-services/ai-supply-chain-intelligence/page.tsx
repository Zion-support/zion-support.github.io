import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Supply Chain Intelligence — Zion Tech Group",
  description: "End-to-end supply chain visibility with predictive disruption alerts, multi-tier vendor risk scoring, and AI-driven cost optimization.",
  keywords: "AI services, IT services, AI Supply Chain Intelligence",
  openGraph: {
    title: "AI Supply Chain Intelligence",
    description: "End-to-end supply chain visibility with predictive disruption alerts, multi-tier vendor risk scoring, and AI-driven cost optimization.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Supply Chain Intelligence",
    description: "End-to-end supply chain visibility with predictive disruption alerts, multi-tier vendor risk scoring, and AI-driven cost optimization."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-supply-chain-intelligence',
    title: 'AI Supply Chain Intelligence',
    description: 'End-to-end supply chain visibility with predictive disruption alerts, multi-tier vendor risk scoring, and AI-driven cost optimization.',
    features: ['Real-time multi-tier visibility', 'Predictive disruption alerts', 'Vendor risk assessment', 'Cost optimization engine', 'Scenario simulation and planning'],
    benefits: ['Reduce disruption by 50%', 'Optimize inventory costs', 'Strengthen vendor relationships', 'Enable proactive planning'],
    pricing: { basic: '1299', pro: '2999', enterprise: '7999' },
    contactInfo: { website: '/ai-services/ai-supply-chain-intelligence', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔗',
    href: '/ai-services/ai-supply-chain-intelligence',
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

export default function AiSupplyChainIntelligencePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
