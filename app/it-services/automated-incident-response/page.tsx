import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automated Incident Response — Zion Tech Group",
  description: "Automated Incident Response",
  keywords: "AI services, IT services, Automated Incident Response",
  openGraph: {
    title: "Automated Incident Response",
    description: "Automated Incident Response",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Incident Response",
    description: "Automated Incident Response"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-automated-incident-response',
    title: 'Automated Incident Response',
    description: `SOAR platform: ingest alerts from any monitoring tool, run playbooks, remediate automatically. 500+ community playbooks included.`,
    features: ["50+ integration adapters", "Visual playbook builder", "Automated remediation", "Case management", "Post-incident reports"],
    benefits: ["MTTR reduced by 80%", "Free up on-call engineers", "Consistent response procedures"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/it-services/it-automated-incident-response',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🚨',
    href: '/it-services/it-automated-incident-response',
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

export default function AutomatedIncidentResponsePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
