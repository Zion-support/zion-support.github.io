import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Supply Chain Optimization — Zion Tech Group",
  description: "Predictive demand forecasting, inventory optimization, and supplier risk management powered by machine learning.",
  keywords: "AI services, IT services, AI Supply Chain Optimization",
  openGraph: {
    title: "AI Supply Chain Optimization",
    description: "Predictive demand forecasting, inventory optimization, and supplier risk management powered by machine learning.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Supply Chain Optimization",
    description: "Predictive demand forecasting, inventory optimization, and supplier risk management powered by machine learning."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-supply-chain',
    title: 'AI Supply Chain Optimization',
    description: 'Predictive demand forecasting, inventory optimization, and supplier risk management powered by machine learning.',
    features: [
      'Demand forecasting (ARIMA + ML)',
      'Inventory optimization & reorder points',
      'Supplier risk scoring & monitoring',
      'Logistics route optimization',
      'Real-time shipment tracking'
    ],
    benefits: [
      '30% reduction in inventory costs',
      'Improved demand forecast accuracy by 45%',
      'Proactive supplier risk mitigation',
      'Faster delivery times'
    ],
    pricing: {
      basic: '449',
      pro: '899',
      enterprise: '2199'
    },
    contactInfo: {
      website: '/ai-services/ai-supply-chain',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
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

export default function AiSupplyChainOptimizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
