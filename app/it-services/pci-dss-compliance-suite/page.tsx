import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PCI DSS Compliance Suite — Zion Tech Group",
  description: "PCI DSS Compliance Suite",
  keywords: "AI services, IT services, PCI DSS Compliance Suite",
  openGraph: {
    title: "PCI DSS Compliance Suite",
    description: "PCI DSS Compliance Suite",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "PCI DSS Compliance Suite",
    description: "PCI DSS Compliance Suite"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-pcii-compliance-suite',
    title: 'PCI DSS Compliance Suite',
    description: `Automated PCI DSS v4.0 compliance monitoring, evidence collection, and reporting. Pre-built controls for 400+ requirements.`,
    features: ["Control mapping (PCI DSS 4.0)", "Automated evidence collection", "Vulnerability scanning integration", "Quarterly assessment workflow", "Executive dashboards"],
    benefits: ["Achieve compliance 10x faster", "Reduce audit costs", "Continuous monitoring"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/it-services/it-pcii-compliance-suite',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💳',
    href: '/it-services/it-pcii-compliance-suite',
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

export default function PciDssComplianceSuitePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
