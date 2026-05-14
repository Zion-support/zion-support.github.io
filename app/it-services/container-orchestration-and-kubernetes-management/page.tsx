import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Container Orchestration & Kubernetes Management — Zion Tech Group",
  description: "Enterprise Kubernetes deployment, management, and optimization — multi-cluster orchestration, GitOps workflows, and service mesh implementation.",
  keywords: "AI services, IT services, Container Orchestration & Kubernetes Management",
  openGraph: {
    title: "Container Orchestration & Kubernetes Management",
    description: "Enterprise Kubernetes deployment, management, and optimization — multi-cluster orchestration, GitOps workflows, and service mesh implementation.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Container Orchestration & Kubernetes Management",
    description: "Enterprise Kubernetes deployment, management, and optimization — multi-cluster orchestration, GitOps workflows, and service mesh implementation."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-kubernetes-management',
    title: 'Container Orchestration & Kubernetes Management',
    description: 'Enterprise Kubernetes deployment, management, and optimization — multi-cluster orchestration, GitOps workflows, and service mesh implementation.',
    features: ['Multi-cluster Kubernetes orchestration', 'GitOps deployment pipelines with ArgoCD', 'Service mesh implementation (Istio, Linkerd)', 'Automated scaling and self-healing', 'Cost optimization and resource right-sizing'],
    benefits: ['Reduce infrastructure costs by 40%', 'Zero-downtime deployments with blue-green', 'Accelerate developer velocity 3x', 'Enterprise-grade reliability and observability'],
    pricing: { basic: '799', pro: '1799', enterprise: '3999' },
    contactInfo: { website: '/it-services/kubernetes-management', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🐳',
    href: '/it-services/kubernetes-management',
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

export default function ContainerOrchestrationAndKubernetesManagementPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
