import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edge Computing Deployment & Management — Zion Tech Group",
  description: "Enterprise IT service: Edge Computing Deployment & Management. Robust, scalable, secure.",
  keywords: "AI services, IT services, Edge Computing Deployment & Management",
  openGraph: {
    title: "Edge Computing Deployment & Management",
    description: "Enterprise IT service: Edge Computing Deployment & Management. Robust, scalable, secure.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Computing Deployment & Management",
    description: "Enterprise IT service: Edge Computing Deployment & Management. Robust, scalable, secure."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-new-007",
    href: "/it-services/edge-computing-deployment-and-management",
    icon: "⚙️",
    category: "it",
    title: "Edge Computing Deployment & Management",
    description: "Enterprise IT service: Edge Computing Deployment & Management. Robust, scalable, secure.",
    features: ["24/7 monitoring","SLA-backed","Compliance-ready"],
    benefits: ["Maximize uptime","Reduce IT overhead","Ensure compliance"],
    pricing: { basic: "149", pro: "499", enterprise: "1499" },
    marketPrice: "$149–$1,499/mo",
    link: "/it-services/edge-computing-deployment-and-management",
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

export default function EdgeComputingDeploymentAndManagementPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
