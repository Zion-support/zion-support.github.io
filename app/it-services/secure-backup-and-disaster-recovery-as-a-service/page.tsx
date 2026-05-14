import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secure Backup & Disaster Recovery as a Service — Zion Tech Group",
  description: "Enterprise IT service: Secure Backup & Disaster Recovery as a Service. Robust, scalable, secure.",
  keywords: "AI services, IT services, Secure Backup & Disaster Recovery as a Service",
  openGraph: {
    title: "Secure Backup & Disaster Recovery as a Service",
    description: "Enterprise IT service: Secure Backup & Disaster Recovery as a Service. Robust, scalable, secure.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Backup & Disaster Recovery as a Service",
    description: "Enterprise IT service: Secure Backup & Disaster Recovery as a Service. Robust, scalable, secure."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-new-013",
    href: "/it-services/secure-backup-and-disaster-recovery-as-a-service",
    icon: "⚙️",
    category: "it",
    title: "Secure Backup & Disaster Recovery as a Service",
    description: "Enterprise IT service: Secure Backup & Disaster Recovery as a Service. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/secure-backup-and-disaster-recovery-as-a-service",
    tags: ["it","enterprise","2026"]
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

export default function SecureBackupAndDisasterRecoveryAsAServicePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
