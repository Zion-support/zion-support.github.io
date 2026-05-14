import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Supply Chain Visibility Platform — Zion Tech Group",
  description: "End-to-end supply chain monitoring with AI-driven anomaly detection, predictive ETAs, and automated disruption alerts across suppliers, logistics, and inventory.",
  keywords: "AI services, IT services, AI Supply Chain Visibility Platform",
  openGraph: {
    title: "AI Supply Chain Visibility Platform",
    description: "End-to-end supply chain monitoring with AI-driven anomaly detection, predictive ETAs, and automated disruption alerts across suppliers, logistics, and inventory.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Supply Chain Visibility Platform",
    description: "End-to-end supply chain monitoring with AI-driven anomaly detection, predictive ETAs, and automated disruption alerts across suppliers, logistics, and inventory."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-supply-chain-visibility',
    title: 'AI Supply Chain Visibility Platform',
    description: 'End-to-end supply chain monitoring with AI-driven anomaly detection, predictive ETAs, and automated disruption alerts across suppliers, logistics, and inventory.',
    features: [
      'Real-time shipment tracking & ETA prediction',
      'Supplier risk scoring & early warning',
      'Inventory anomaly detection',
      'Automated disruption alerts (Slack/email)',
      'Root cause analysis & recommendation engine'
    ],
    benefits: [
      '85% on-time delivery improvement',
      '50% reduction in stockouts',
      '30% lower safety stock needs',
      'Proactive disruption mitigation'
    ],
    pricing: {
      basic: '549',
      pro: '1099',
      enterprise: '2799'
    },
    contactInfo: {
      website: '/ai-services/ai-supply-chain-visibility',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚢',
    href: '/ai-services/ai-supply-chain-visibility',
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

export default function AiSupplyChainVisibilityPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
