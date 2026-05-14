import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ITIL Service Management (ITSM) Platform — Zion Tech Group",
  description: "Full ITIL-aligned service management with AI-powered ticketing, change management automation, CMDB discovery, and self-service portal for enterprise IT operations.",
  keywords: "AI services, IT services, ITIL Service Management (ITSM) Platform",
  openGraph: {
    title: "ITIL Service Management (ITSM) Platform",
    description: "Full ITIL-aligned service management with AI-powered ticketing, change management automation, CMDB discovery, and self-service portal for enterprise IT operations.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIL Service Management (ITSM) Platform",
    description: "Full ITIL-aligned service management with AI-powered ticketing, change management automation, CMDB discovery, and self-service portal for enterprise IT operations."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-itil-service-management',
    title: 'ITIL Service Management (ITSM) Platform',
    description: 'Full ITIL-aligned service management with AI-powered ticketing, change management automation, CMDB discovery, and self-service portal for enterprise IT operations.',
    features: ['AI-powered incident classification & routing', 'Automated change approval workflows', 'Service catalog & self-service portal', 'CMDB auto-discovery & dependency mapping', 'SLA monitoring & escalation engine', 'Knowledge base integration with AI search'],
    benefits: ['Reduce ticket resolution time by 50%', 'Eliminate change-related outages with automated validation', 'Empower users with self-service capabilities', 'Maintain accurate service dependency maps'],
    pricing: { basic: '499', pro: '1099', enterprise: '2499' },
    contactInfo: { website: '/it-services/itil-service-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📋',
    href: '/it-services/itil-service-management',
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

export default function ItilServiceManagementItsmPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
