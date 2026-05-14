import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed Endpoint Detection & Response (EDR) — Zion Tech Group",
  description: "Managed Endpoint Detection & Response (EDR)",
  keywords: "AI services, IT services, Managed Endpoint Detection & Response (EDR)",
  openGraph: {
    title: "Managed Endpoint Detection & Response (EDR)",
    description: "Managed Endpoint Detection & Response (EDR)",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Endpoint Detection & Response (EDR)",
    description: "Managed Endpoint Detection & Response (EDR)"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-endpoint-detection-response',
    title: 'Managed Endpoint Detection & Response (EDR)',
    description: `24/7 monitored EDR service with threat hunting, ransomware rollback, and 15-minute SLA for critical alerts. Includes managed SOC.`,
    features: ["Next-gen antivirus (NGAV)", "Behavior-based threat detection", "Incident response playbooks", "Quarterly threat hunting reports"],
    benefits: ["Blocks 99% of endpoint attacks", "Ransomware recovery within hours", "Frees internal IT from security chores"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-endpoint-detection-response',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/it-services/it-endpoint-detection-response',
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

export default function ManagedEndpointDetectionAndResponseEdrPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
