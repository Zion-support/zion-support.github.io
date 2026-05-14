import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Supply Chain Intelligence & Optimization — Zion Tech Group",
  description: "End-to-end supply chain visibility and optimization with demand forecasting, supplier risk scoring, route planning, and inventory optimization powered by ML.",
  keywords: "AI services, IT services, AI Supply Chain Intelligence & Optimization",
  openGraph: {
    title: "AI Supply Chain Intelligence & Optimization",
    description: "End-to-end supply chain visibility and optimization with demand forecasting, supplier risk scoring, route planning, and inventory optimization powered by ML.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Supply Chain Intelligence & Optimization",
    description: "End-to-end supply chain visibility and optimization with demand forecasting, supplier risk scoring, route planning, and inventory optimization powered by ML."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-supply-chain',
    title: 'AI Supply Chain Intelligence & Optimization',
    description: 'End-to-end supply chain visibility and optimization with demand forecasting, supplier risk scoring, route planning, and inventory optimization powered by ML.',
    features: ['Real-time supply chain visibility with digital twin', 'ML demand forecasting at SKU and location level', 'Supplier risk monitoring with alternative sourcing', 'Multi-echelon inventory optimization', 'Carbon footprint tracking and sustainability reporting'],
    benefits: ['Reduce supply chain costs by 25-40%', 'Improve forecast accuracy by 35%', 'Prevent disruptions with early risk signals', 'Optimize inventory to reduce carrying costs by 30%'],
    pricing: { basic: '699', pro: '1599', enterprise: '3499' },
    contactInfo: { website: '/ai-services/ai-supply-chain', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📦',
    href: '/ai-services/ai-supply-chain',
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

export default function AiSupplyChainIntelligenceAndOptimizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
