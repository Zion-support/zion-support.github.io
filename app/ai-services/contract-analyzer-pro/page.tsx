import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contract Analyzer Pro — Zion Tech Group",
  description: "Contract Analyzer Pro",
  keywords: "AI services, IT services, Contract Analyzer Pro",
  openGraph: {
    title: "Contract Analyzer Pro",
    description: "Contract Analyzer Pro",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Analyzer Pro",
    description: "Contract Analyzer Pro"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-contract-analyzer-pro',
    title: 'Contract Analyzer Pro',
    description: `Automated legal contract review with risk scoring, clause extraction, and compliance checking against 200+ global regulations.`,
    features: ["Risk scoring 0\u2013100", "Clause extraction & classification", "Compliance matrix (GDPR, CCPA, HIPAA)", "Redline suggestions", "Audit trail"],
    benefits: ["Cut contract review time from hours to minutes", "Never miss a risky clause again", "Standardize across legal team"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/ai-services/ai-contract-analyzer-pro',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📜',
    href: '/ai-services/ai-contract-analyzer-pro',
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

export default function ContractAnalyzerProPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
