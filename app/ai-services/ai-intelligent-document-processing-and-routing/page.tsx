import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Intelligent Document Processing & Routing — Zion Tech Group",
  description: "Automated document intake with AI extraction, classification, and intelligent routing to the right team or workflow — invoices, claims, applications, and contracts.",
  keywords: "AI services, IT services, AI Intelligent Document Processing & Routing",
  openGraph: {
    title: "AI Intelligent Document Processing & Routing",
    description: "Automated document intake with AI extraction, classification, and intelligent routing to the right team or workflow — invoices, claims, applications, and contracts.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Intelligent Document Processing & Routing",
    description: "Automated document intake with AI extraction, classification, and intelligent routing to the right team or workflow — invoices, claims, applications, and contracts."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-intelligent-routing',
    title: 'AI Intelligent Document Processing & Routing',
    description: 'Automated document intake with AI extraction, classification, and intelligent routing to the right team or workflow — invoices, claims, applications, and contracts.',
    features: ['OCR + AI document understanding (99.5% accuracy)', 'Intelligent document classification and tagging', 'Automated data extraction to structured formats', 'Smart routing to teams based on content', 'Integration with RPA for downstream automation'],
    benefits: ['Eliminate 90% of manual data entry', 'Reduce document processing time from hours to seconds', 'Improve data accuracy and compliance', 'Seamless integration with existing ERP/CRM'],
    pricing: { basic: '349', pro: '799', enterprise: '1799' },
    contactInfo: { website: '/ai-services/ai-intelligent-routing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📋',
    href: '/ai-services/ai-intelligent-routing',
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

export default function AiIntelligentDocumentProcessingAndRoutingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
