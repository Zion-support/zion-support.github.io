import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Legal Document Review — Zion Tech Group",
  description: "Accelerate legal document analysis with AI: extract clauses, flag risks, summarize contracts, and generate due diligence reports in minutes.",
  keywords: "AI services, IT services, AI Legal Document Review",
  openGraph: {
    title: "AI Legal Document Review",
    description: "Accelerate legal document analysis with AI: extract clauses, flag risks, summarize contracts, and generate due diligence reports in minutes.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Legal Document Review",
    description: "Accelerate legal document analysis with AI: extract clauses, flag risks, summarize contracts, and generate due diligence reports in minutes."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-legal-doc-review',
    title: 'AI Legal Document Review',
    description: 'Accelerate legal document analysis with AI: extract clauses, flag risks, summarize contracts, and generate due diligence reports in minutes.',
    features: [
      'Contract clause extraction & classification',
      'Risk flagging & compliance checking',
      'Document summarization (NLP)',
      'Due diligence report generation',
      'Multi-language support (20+ languages)'
    ],
    benefits: [
      '90% faster document review',
      'Reduce missed clauses by 95%',
      'Lower outside counsel spend',
      'Standardize review across matters'
    ],
    pricing: {
      basic: '399',
      pro: '899',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-legal-doc-review',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '⚖️',
    href: '/ai-services/ai-legal-doc-review',
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

export default function AiLegalDocumentReviewPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
