import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Backup & Disaster Recovery Solutions — Zion Tech Group",
  description: "Enterprise-grade backup, replication, and disaster recovery — automated backups, immutable storage, multi-region replication, and one-click failover.",
  keywords: "AI services, IT services, Backup & Disaster Recovery Solutions",
  openGraph: {
    title: "Backup & Disaster Recovery Solutions",
    description: "Enterprise-grade backup, replication, and disaster recovery — automated backups, immutable storage, multi-region replication, and one-click failover.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Backup & Disaster Recovery Solutions",
    description: "Enterprise-grade backup, replication, and disaster recovery — automated backups, immutable storage, multi-region replication, and one-click failover."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-backup-disaster-recovery',
    title: 'Backup & Disaster Recovery Solutions',
    description: 'Enterprise-grade backup, replication, and disaster recovery — automated backups, immutable storage, multi-region replication, and one-click failover.',
    features: ['Automated incremental and full backup scheduling', 'Immutable backup storage (WORM) for ransomware protection', 'Multi-region replication for geographic redundancy', 'One-click disaster recovery with tested failover scripts', 'Compliance reporting and backup integrity verification'],
    benefits: ['Guarantee RPO of minutes, RTO of hours', 'Protect against ransomware with immutable backups', 'Meet all regulatory data retention requirements', 'Eliminate backup failures with automated monitoring'],
    pricing: { basic: '599', pro: '1299', enterprise: '2999' },
    contactInfo: { website: '/it-services/backup-recovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💾',
    href: '/it-services/backup-recovery',
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

export default function BackupAndDisasterRecoverySolutionsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
