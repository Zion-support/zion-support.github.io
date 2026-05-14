import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Legal Contract Redaction — Zion Tech Group",
  description: "AI Legal Contract Redaction",
  keywords: "AI services, IT services, AI Legal Contract Redaction",
  openGraph: {
    title: "AI Legal Contract Redaction",
    description: "AI Legal Contract Redaction",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Legal Contract Redaction",
    description: "AI Legal Contract Redaction"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-legal-contract-redaction',
    title: 'AI Legal Contract Redaction',
    description: `Automatically redacts PII, trade secrets, and privileged information from legal documents before sharing or discovery.`,
    features: ["Entity recognition (PII, PHI, PCI)", "Custom redaction rules per jurisdiction", "Audit trail of redactions", "Secure workspace with encryption"],
    benefits: ["Prevents data leaks during M&A", "Speeds up e-discovery", "Ensures GDPR/CCPA compliance"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-legal-contract-redaction',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔒',
    href: '/ai-services/ai-legal-contract-redaction',
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

export default function AiLegalContractRedactionPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
