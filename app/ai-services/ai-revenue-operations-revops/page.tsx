import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Revenue Operations (RevOps) — Zion Tech Group",
  description: "Unify sales, marketing, and customer success data with AI-driven attribution, forecasting, and go-to-market (GTM) optimization.",
  keywords: "AI services, IT services, AI Revenue Operations (RevOps)",
  openGraph: {
    title: "AI Revenue Operations (RevOps)",
    description: "Unify sales, marketing, and customer success data with AI-driven attribution, forecasting, and go-to-market (GTM) optimization.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Revenue Operations (RevOps)",
    description: "Unify sales, marketing, and customer success data with AI-driven attribution, forecasting, and go-to-market (GTM) optimization."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-revenue-ops',
    title: 'AI Revenue Operations (RevOps)',
    description: 'Unify sales, marketing, and customer success data with AI-driven attribution, forecasting, and go-to-market (GTM) optimization.',
    features: [
      'Cross-channel attribution modeling',
      'Pipeline health scoring & prediction',
      'Customer churn prediction',
      'GTM motion analysis & recommendation',
      'Integration with Salesforce, HubSpot, Marketo'
    ],
    benefits: [
      'Increase forecast accuracy to >95%',
      'Identify at-risk accounts early',
      'Optimize marketing spend allocation',
      'Align GTM teams on one data source'
    ],
    pricing: {
      basic: '799',
      pro: '1699',
      enterprise: '4599'
    },
    contactInfo: {
      website: '/ai-services/ai-revenue-ops',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/ai-services/ai-revenue-ops',
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

export default function AiRevenueOperationsRevopsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
