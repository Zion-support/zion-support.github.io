import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Supply & Demand Planner — Zion Tech Group",
  description: "Demand forecasting, inventory optimization, and replenishment planning with AI-driven scenario modeling for manufacturing and retail.",
  keywords: "AI services, IT services, AI Supply & Demand Planner",
  openGraph: {
    title: "AI Supply & Demand Planner",
    description: "Demand forecasting, inventory optimization, and replenishment planning with AI-driven scenario modeling for manufacturing and retail.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Supply & Demand Planner",
    description: "Demand forecasting, inventory optimization, and replenishment planning with AI-driven scenario modeling for manufacturing and retail."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-supply-demand-planner',
    title: 'AI Supply & Demand Planner',
    description: 'Demand forecasting, inventory optimization, and replenishment planning with AI-driven scenario modeling for manufacturing and retail.',
    features: [
      'Demand forecasting (SKU-level, multi-channel)',
      'Inventory optimization & safety stock calc',
      'Automatic purchase order suggestions',
      'What-if scenario modeling',
      'Supplier lead time prediction'
    ],
    benefits: [
      'Reduce stockouts by 60%',
      'Lower inventory carrying costs by 30%',
      ' Improve order fill rate to >98%',
      'Respond faster to demand shocks'
    ],
    pricing: {
      basic: '599',
      pro: '1299',
      enterprise: '3599'
    },
    contactInfo: {
      website: '/ai-services/ai-supply-demand-planner',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📦',
    href: '/ai-services/ai-supply-demand-planner',
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

export default function AiSupplyAndDemandPlannerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
