import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Legal Document Analysis & Contract Review — Zion Tech Group",
  description: "Automated legal document review, clause extraction, risk assessment, and contract comparison powered by advanced NLP trained on legal corpora.",
  keywords: "AI services, IT services, AI Legal Document Analysis & Contract Review",
  openGraph: {
    title: "AI Legal Document Analysis & Contract Review",
    description: "Automated legal document review, clause extraction, risk assessment, and contract comparison powered by advanced NLP trained on legal corpora.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Legal Document Analysis & Contract Review",
    description: "Automated legal document review, clause extraction, risk assessment, and contract comparison powered by advanced NLP trained on legal corpora."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-legal-document-analysis',
    title: 'AI Legal Document Analysis & Contract Review',
    description: 'Automated legal document review, clause extraction, risk assessment, and contract comparison powered by advanced NLP trained on legal corpora.',
    features: ['Intelligent clause extraction and classification', 'Risk scoring and compliance flagging', 'Contract comparison and gap analysis', 'Legal precedent research automation', 'Multi-language contract processing'],
    benefits: ['Reduce legal review time by 80%', 'Catch hidden risks before signing', 'Standardize contract terminology', 'Accelerate M&A due diligence'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/ai-services/ai-legal-doc-analysis', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚖️',
    href: '/ai-services/ai-legal-doc-analysis',
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

export default function AiLegalDocumentAnalysisAndContractReviewPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
