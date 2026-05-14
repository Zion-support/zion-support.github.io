import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Warehouse Modernization — Zion Tech Group",
  description: "Data Warehouse Modernization",
  keywords: "AI services, IT services, Data Warehouse Modernization",
  openGraph: {
    title: "Data Warehouse Modernization",
    description: "Data Warehouse Modernization",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Warehouse Modernization",
    description: "Data Warehouse Modernization"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-data-warehouse-modernization',
    title: 'Data Warehouse Modernization',
    description: `Migration from legacy data warehouses (Oracle, Teradata) to modern cloud-native stacks (Snowflake, BigQuery, Databricks) with zero downtime.`,
    features: ["Schema conversion tools", "ETL/ELT pipeline rebuild", "Query optimization", "Training for data team"],
    benefits: ["Lowers TCO by 40\u201360%", "Enables self-service analytics", "Scales compute & storage independently"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-data-warehouse-modernization',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🏢',
    href: '/it-services/it-data-warehouse-modernization',
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

export default function DataWarehouseModernizationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
