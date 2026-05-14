import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Contract Manager — Zion Tech Group",
  description: "End-to-end contract lifecycle management: AI-powered drafting, review, clause library, obligation tracking, and renewal alerts.",
  keywords: "AI services, IT services, AI Contract Manager",
  openGraph: {
    title: "AI Contract Manager",
    description: "End-to-end contract lifecycle management: AI-powered drafting, review, clause library, obligation tracking, and renewal alerts.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Contract Manager",
    description: "End-to-end contract lifecycle management: AI-powered drafting, review, clause library, obligation tracking, and renewal alerts."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-contract-manager',
    title: 'AI Contract Manager',
    description: 'End-to-end contract lifecycle management: AI-powered drafting, review, clause library, obligation tracking, and renewal alerts.',
    features: [
      'Smart clause library & assembly',
      'Obligation & deadline tracking',
      'Risk scoring & non-standard clause flagging',
      'Automated renewal & expiration alerts',
      'Integration with DocuSign & Adobe Sign'
    ],
    benefits: [
      'Cut contract cycle time by 70%',
      'Never miss a renewal again',
      'Reduce legal review burden',
      'Standardize contract terms'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/ai-services/ai-contract-manager',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📝',
    href: '/ai-services/ai-contract-manager',
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

export default function AiContractManagerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
