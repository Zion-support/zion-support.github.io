import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Managed SOC 2 Compliance Platform — Zion Tech Group",
  description: "Enterprise IT service: Managed SOC 2 Compliance Platform. Robust, scalable, secure.",
  keywords: "AI services, IT services, Managed SOC 2 Compliance Platform",
  openGraph: {
    title: "Managed SOC 2 Compliance Platform",
    description: "Enterprise IT service: Managed SOC 2 Compliance Platform. Robust, scalable, secure.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed SOC 2 Compliance Platform",
    description: "Enterprise IT service: Managed SOC 2 Compliance Platform. Robust, scalable, secure."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-new-019",
    href: "/it-services/managed-soc-2-compliance-platform",
    icon: "⚙️",
    category: "it",
    title: "Managed SOC 2 Compliance Platform",
    description: "Enterprise IT service: Managed SOC 2 Compliance Platform. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/managed-soc-2-compliance-platform",
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

export default function ManagedSoc2CompliancePlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
