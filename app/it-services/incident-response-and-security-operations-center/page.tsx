import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Incident Response & Security Operations Center — Zion Tech Group",
  description: "24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics.",
  keywords: "AI services, IT services, Incident Response & Security Operations Center",
  openGraph: {
    title: "Incident Response & Security Operations Center",
    description: "24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Incident Response & Security Operations Center",
    description: "24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-incident-response',
    title: 'Incident Response & Security Operations Center',
    description: '24/7 SOC and incident response - threat detection, investigation, containment, recovery with automated playbooks and forensics.',
    features: ['24/7 monitoring', 'Auto detection and classification', 'Response playbook automation', 'Digital forensics', 'Executive reporting'],
    benefits: ['Reduce MTTD by 80%', 'Automated containment', 'Compliance-ready docs', 'Expert IR on demand'],
    pricing: { basic: '2999', pro: '6499', enterprise: '14999' },
    contactInfo: { website: '/it-services/incident-response', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🚨',
    href: '/it-services/incident-response',
    category: 'security'
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

export default function IncidentResponseAndSecurityOperationsCenterPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
