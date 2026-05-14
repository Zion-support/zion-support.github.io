import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Multi-Cloud Cost Governance — Zion Tech Group",
  description: "Multi-Cloud Cost Governance",
  keywords: "AI services, IT services, Multi-Cloud Cost Governance",
  openGraph: {
    title: "Multi-Cloud Cost Governance",
    description: "Multi-Cloud Cost Governance",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Cloud Cost Governance",
    description: "Multi-Cloud Cost Governance"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-multi-cloud-cost-governance',
    title: 'Multi-Cloud Cost Governance',
    description: `Unified cost visibility and policy enforcement across AWS, Azure, GCP. budgets, alerts, rightsizing recommendations, and chargeback/showback.`,
    features: ["Multi-cloud ingestion", "Budget thresholds & alerts", "Rightsizing AI", "Tag compliance enforcement", "Department chargeback"],
    benefits: ["Prevent cost overruns", "Save 25%+ on cloud spend", "Align finance & engineering"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/it-services/it-multi-cloud-cost-governance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💸',
    href: '/it-services/it-multi-cloud-cost-governance',
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

export default function MulticloudCostGovernancePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
