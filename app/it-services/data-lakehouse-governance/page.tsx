import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Lakehouse Governance — Zion Tech Group",
  description: "Data Lakehouse Governance",
  keywords: "AI services, IT services, Data Lakehouse Governance",
  openGraph: {
    title: "Data Lakehouse Governance",
    description: "Data Lakehouse Governance",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Lakehouse Governance",
    description: "Data Lakehouse Governance"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-data-lakehouse-governance',
    title: 'Data Lakehouse Governance',
    description: `Metadata management, lineage tracking, and access controls for Delta Lake, Apache Iceberg, or Snowflake environments.`,
    features: ["Automated data catalog", "Column-level lineage", "Policy-based access control (RBAC/ABAC)", "Quality scorecard per dataset"],
    benefits: ["Accelerates data discovery", "Ensures regulatory compliance (GDPR, CCPA)", "Reduces data swamp risk"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-data-lakehouse-governance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗄️',
    href: '/it-services/it-data-lakehouse-governance',
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

export default function DataLakehouseGovernancePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
