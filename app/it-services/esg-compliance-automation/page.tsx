import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ESG Compliance Automation — Zion Tech Group",
  description: "ESG Compliance Automation",
  keywords: "AI services, IT services, ESG Compliance Automation",
  openGraph: {
    title: "ESG Compliance Automation",
    description: "ESG Compliance Automation",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "ESG Compliance Automation",
    description: "ESG Compliance Automation"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-esg-compliance-automation',
    title: 'ESG Compliance Automation',
    description: `Automates ESG data collection from 100+ systems (cloud, HR, facilities) and generates SEC, EU CSRD, and SFDR reports.`,
    features: ["Carbon footprint calculation engine", "Diversity metrics dashboard", "Governance policy tracker", "Report generation (XBRL support)"],
    benefits: ["Saves 200+ manual hours per reporting cycle", "Ensures regulatory alignment", "Improves ESG ratings"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-esg-compliance-automation',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌍',
    href: '/it-services/it-esg-compliance-automation',
    category: 'it'
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

export default function EsgComplianceAutomationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
