import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Cost Allocation & Tag Governance — Zion Tech Group",
  description: "Enterprise IT service: Cloud Cost Allocation & Tag Governance. Robust, scalable, secure.",
  keywords: "AI services, IT services, Cloud Cost Allocation & Tag Governance",
  openGraph: {
    title: "Cloud Cost Allocation & Tag Governance",
    description: "Enterprise IT service: Cloud Cost Allocation & Tag Governance. Robust, scalable, secure.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Cost Allocation & Tag Governance",
    description: "Enterprise IT service: Cloud Cost Allocation & Tag Governance. Robust, scalable, secure."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-new-012",
    href: "/it-services/cloud-cost-allocation-and-tag-governance",
    icon: "⚙️",
    category: "it",
    title: "Cloud Cost Allocation & Tag Governance",
    description: "Enterprise IT service: Cloud Cost Allocation & Tag Governance. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/cloud-cost-allocation-and-tag-governance",
    tags: ["it","enterprise","2026"]
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

export default function CloudCostAllocationAndTagGovernancePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
