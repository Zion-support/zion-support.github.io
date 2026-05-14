import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edge Computing Deployment and Ops — Zion Tech Group",
  description: "Deploy and manage containerized workloads on distributed edge nodes — factories, retail stores, telco sites. Unified control plane with zero-touch provisioning.",
  keywords: "AI services, IT services, Edge Computing Deployment and Ops",
  openGraph: {
    title: "Edge Computing Deployment and Ops",
    description: "Deploy and manage containerized workloads on distributed edge nodes — factories, retail stores, telco sites. Unified control plane with zero-touch provisioning.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Computing Deployment and Ops",
    description: "Deploy and manage containerized workloads on distributed edge nodes — factories, retail stores, telco sites. Unified control plane with zero-touch provisioning."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-edge-computing-deployment",
    href: "/it-services/edge-computing-deployment",
    icon: "📡",
    category: "it",
    title: "Edge Computing Deployment and Ops",
    description: "Deploy and manage containerized workloads on distributed edge nodes — factories, retail stores, telco sites. Unified control plane with zero-touch provisioning.",
    features: [
      "Kubernetes at the edge — K3s, k0s, MicroK8s",
      "Over-the-air updates with rollback",
      "Bandwidth-aware workload placement",
      "Edge AI model serving — ONNX, TensorFlow Lite",
      "Offline-first operation and sync queues"
    ],
    benefits: [
      "Reduces latency to <10ms for real-time applications",
      "Lowers bandwidth costs by up to 60%",
      "Enables AI inference in disconnected environments"
    ],
    pricing: { proof_of_concept: "4999", full_deployment: "contact" }
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

export default function EdgeComputingDeploymentAndOpsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
