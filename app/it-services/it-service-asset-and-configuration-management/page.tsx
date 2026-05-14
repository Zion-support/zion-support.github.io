import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Service Asset & Configuration Management — Zion Tech Group",
  description: "Complete IT asset discovery, configuration mapping, and dependency visualization for cloud and on-prem environments.",
  keywords: "AI services, IT services, IT Service Asset & Configuration Management",
  openGraph: {
    title: "IT Service Asset & Configuration Management",
    description: "Complete IT asset discovery, configuration mapping, and dependency visualization for cloud and on-prem environments.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Service Asset & Configuration Management",
    description: "Complete IT asset discovery, configuration mapping, and dependency visualization for cloud and on-prem environments."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-sam-platform',
    title: 'IT Service Asset & Configuration Management',
    description: 'Complete IT asset discovery, configuration mapping, and dependency visualization for cloud and on-prem environments.',
    features: [
      'Automated discovery of servers, cloud resources, IoT devices',
      'Configuration item (CI) relationship mapping',
      'Change impact analysis',
      'License compliance & inventory tracking',
      'Integration with ITSM tools (ServiceNow, Jira)'
    ],
    benefits: [
      'Reduce unplanned downtime by 40%',
      'Accelerate change planning with dependency graphs',
      'Maintain software license compliance',
      'Single source of truth for CMDB'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/it-services/it-sam-platform',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🗺️',
    href: '/it-services/it-sam-platform',
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

export default function ItServiceAssetAndConfigurationManagementPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
