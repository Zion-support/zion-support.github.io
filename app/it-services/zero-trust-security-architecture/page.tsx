import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zero Trust Security Architecture — Zion Tech Group",
  description: "Implement Zero Trust principles across your enterprise — identity verification, micro-segmentation, least-privilege access, and continuous authentication for every request.",
  keywords: "AI services, IT services, Zero Trust Security Architecture",
  openGraph: {
    title: "Zero Trust Security Architecture",
    description: "Implement Zero Trust principles across your enterprise — identity verification, micro-segmentation, least-privilege access, and continuous authentication for every request.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Trust Security Architecture",
    description: "Implement Zero Trust principles across your enterprise — identity verification, micro-segmentation, least-privilege access, and continuous authentication for every request."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-zero-trust-architecture',
    title: 'Zero Trust Security Architecture',
    description: 'Implement Zero Trust principles across your enterprise — identity verification, micro-segmentation, least-privilege access, and continuous authentication for every request.',
    features: ['Identity & Access Management (IAM) modernization', 'Micro-segmentation of network workloads', 'Continuous adaptive risk & trust assessment', 'Device posture checking & conditional access', 'Privileged Access Management (PAM) integration'],
    benefits: ['Eliminate implicit trust across the network', 'Reduce breach impact with micro-segmentation', 'Meet CISA Zero Trust maturity requirements', 'Secure hybrid and remote workforces uniformly'],
    pricing: { basic: '1499', pro: '3499', enterprise: '7999' },
    contactInfo: { website: '/it-services/zero-trust-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🔐',
    href: '/it-services/zero-trust-architecture',
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

export default function ZeroTrustSecurityArchitecturePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
