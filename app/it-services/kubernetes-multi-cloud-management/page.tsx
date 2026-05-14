import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kubernetes Multi-Cloud Management — Zion Tech Group",
  description: "Kubernetes Multi-Cloud Management",
  keywords: "AI services, IT services, Kubernetes Multi-Cloud Management",
  openGraph: {
    title: "Kubernetes Multi-Cloud Management",
    description: "Kubernetes Multi-Cloud Management",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kubernetes Multi-Cloud Management",
    description: "Kubernetes Multi-Cloud Management"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-kubernetes-multicloud',
    title: 'Kubernetes Multi-Cloud Management',
    description: `Deploy and manage Kubernetes clusters across AWS, GCP, Azure, and on-prem with a single control plane. Includes GitOps and policy enforcement.`,
    features: ["Cluster lifecycle automation", "Cost allocation per namespace", "Security policy as code (OPA/Gatekeeper)", "Cross-cloud service mesh"],
    benefits: ["Avoids vendor lock-in", "Optimizes spend by 30%", "Standardizes deployments"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-kubernetes-multicloud',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '☸️',
    href: '/it-services/it-kubernetes-multicloud',
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

export default function KubernetesMulticloudManagementPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
