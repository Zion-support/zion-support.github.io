import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Database-as-a-Service & Managed Data Platforms — Zion Tech Group",
  description: "Fully managed databases - PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch with automated backups, scaling, and AI-powered optimization.",
  keywords: "AI services, IT services, Database-as-a-Service & Managed Data Platforms",
  openGraph: {
    title: "Database-as-a-Service & Managed Data Platforms",
    description: "Fully managed databases - PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch with automated backups, scaling, and AI-powered optimization.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Database-as-a-Service & Managed Data Platforms",
    description: "Fully managed databases - PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch with automated backups, scaling, and AI-powered optimization."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-database-as-a-service',
    title: 'Database-as-a-Service & Managed Data Platforms',
    description: 'Fully managed databases - PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch with automated backups, scaling, and AI-powered optimization.',
    features: ['Multi-engine provisioning', 'Automated backups and PITR', 'AI query optimization', 'Auto-scaling and HA', 'Encryption and compliance'],
    benefits: ['No DBA overhead needed', '99.99% uptime SLA', 'Optimize queries automatically', 'Scale effortlessly'],
    pricing: { basic: '799', pro: '1899', enterprise: '4499' },
    contactInfo: { website: '/it-services/database-as-a-service', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🗄️',
    href: '/it-services/database-as-a-service',
    category: 'cloud'
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

export default function DatabaseasaserviceAndManagedDataPlatformsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
