import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Container Security & Runtime Protection — Zion Tech Group",
  description: "Enterprise IT service: Container Security & Runtime Protection. Robust, scalable, secure.",
  keywords: "AI services, IT services, Container Security & Runtime Protection",
  openGraph: {
    title: "Container Security & Runtime Protection",
    description: "Enterprise IT service: Container Security & Runtime Protection. Robust, scalable, secure.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Container Security & Runtime Protection",
    description: "Enterprise IT service: Container Security & Runtime Protection. Robust, scalable, secure."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-new-014",
    href: "/it-services/container-security-and-runtime-protection",
    icon: "⚙️",
    category: "it",
    title: "Container Security & Runtime Protection",
    description: "Enterprise IT service: Container Security & Runtime Protection. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/container-security-and-runtime-protection",
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

export default function ContainerSecurityAndRuntimeProtectionPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
