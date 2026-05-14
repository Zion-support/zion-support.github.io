import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Continuity & Disaster Recovery — Zion Tech Group",
  description: "Business Continuity & Disaster Recovery",
  keywords: "AI services, IT services, Business Continuity & Disaster Recovery",
  openGraph: {
    title: "Business Continuity & Disaster Recovery",
    description: "Business Continuity & Disaster Recovery",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Continuity & Disaster Recovery",
    description: "Business Continuity & Disaster Recovery"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-business-continuity-dr',
    title: 'Business Continuity & Disaster Recovery',
    description: `Automated backup, replication, and failover orchestration across cloud and on-premise. RPOs as low as 15 seconds, RTOs under 5 minutes.`,
    features: ["Application-consistent backups", "Cross-region replication", "Automated failover testing", "DR runbook automation", "Compliance (ISO 27001, SOC 2)"],
    benefits: ["Guaranteed uptime", "Minimize data loss", "Pass DR audits"],
    pricing: {"basic":"349","pro":"799","enterprise":"2099"},
    contactInfo: {
      website: '/it-services/it-business-continuity-dr',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔄',
    href: '/it-services/it-business-continuity-dr',
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

export default function BusinessContinuityAndDisasterRecoveryPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
