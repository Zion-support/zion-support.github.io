import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Supply Chain Predictor — Zion Tech Group",
  description: "Supply Chain Predictor",
  keywords: "AI services, IT services, Supply Chain Predictor",
  openGraph: {
    title: "Supply Chain Predictor",
    description: "Supply Chain Predictor",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Supply Chain Predictor",
    description: "Supply Chain Predictor"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-supply-chain-predictor',
    title: 'Supply Chain Predictor',
    description: `Demand forecasting, inventory optimization, and route planning using time-series ML. Reduces stockouts by 45% and carrying costs by 30%.`,
    features: ["Demand forecasting (90-day)", "Inventory reorder points", "Route optimization", "Supplier risk scoring", "Real-time dashboards"],
    benefits: ["Never run out of stock", "Lower warehouse costs", "Faster delivery times"],
    pricing: {"basic":"399","pro":"899","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-supply-chain-predictor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚚',
    href: '/ai-services/ai-supply-chain-predictor',
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

export default function SupplyChainPredictorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
