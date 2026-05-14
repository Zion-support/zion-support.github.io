import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Disaster Recovery as a Service (DRaaS) — Zion Tech Group",
  description: "Disaster Recovery as a Service (DRaaS)",
  keywords: "AI services, IT services, Disaster Recovery as a Service (DRaaS)",
  openGraph: {
    title: "Disaster Recovery as a Service (DRaaS)",
    description: "Disaster Recovery as a Service (DRaaS)",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Disaster Recovery as a Service (DRaaS)",
    description: "Disaster Recovery as a Service (DRaaS)"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-disaster-recovery',
    title: 'Disaster Recovery as a Service (DRaaS)',
    description: `Fully managed DR with automated backups, cross-region replication, and quarterly failover testing. RTO < 4 hours, RPO < 15 minutes.`,
    features: ["Continuous replication", "Automated failover orchestration", "DR runbook documentation", "Compliance-ready audit logs"],
    benefits: ["Guarantees business continuity", "Meets ISO 27001 & SOC2 requirements", "Reduces DR planning overhead"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-disaster-recovery',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔄',
    href: '/it-services/it-disaster-recovery',
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

export default function DisasterRecoveryAsAServiceDraasPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
