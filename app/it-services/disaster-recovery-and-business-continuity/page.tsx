import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Disaster Recovery & Business Continuity — Zion Tech Group",
  description: "Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations.",
  keywords: "AI services, IT services, Disaster Recovery & Business Continuity",
  openGraph: {
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-disaster-recovery',
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery planning, automated failover systems, and business continuity solutions ensuring zero data loss and minimal downtime for mission-critical operations.',
    features: ['RTO/RPO analysis & recovery strategy design', 'Multi-region backup & replication automation', 'Automated failover testing & validation', 'Runbook creation & disaster response playbooks', 'Continuous compliance monitoring for DR readiness'],
    benefits: ['Guarantee 99.99% uptime with automated failover', 'Reduce recovery time from days to minutes', 'Pass compliance DR audits on first attempt', 'Protect brand reputation with always-on services'],
    pricing: { basic: '699', pro: '1599', enterprise: '3499' },
    contactInfo: { website: '/it-services/disaster-recovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔄',
    href: '/it-services/disaster-recovery',
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

export default function DisasterRecoveryAndBusinessContinuityPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
