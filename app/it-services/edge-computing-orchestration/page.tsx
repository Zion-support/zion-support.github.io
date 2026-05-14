import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edge Computing Orchestration — Zion Tech Group",
  description: "Edge Computing Orchestration",
  keywords: "AI services, IT services, Edge Computing Orchestration",
  openGraph: {
    title: "Edge Computing Orchestration",
    description: "Edge Computing Orchestration",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Computing Orchestration",
    description: "Edge Computing Orchestration"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-edge-computing-orchestration',
    title: 'Edge Computing Orchestration',
    description: `Deploy and manage containerized workloads across distributed edge nodes. Auto-scaling, zero-trust networking, and offline sync for true edge-native applications.`,
    features: ["Multi-cluster management", "GitOps-driven deployment", "Edge-native storage", "Offline-first sync", "Observability across regions"],
    benefits: ["Sub-10ms latency for local users", "Reduce cloud egress costs by 70%", "Operate\u54ea\u6015\u7f51\u7edc\u4e2d\u65ad"],
    pricing: {"basic":"349","pro":"799","enterprise":"2099"},
    contactInfo: {
      website: '/it-services/it-edge-computing-orchestration',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌍',
    href: '/it-services/it-edge-computing-orchestration',
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

export default function EdgeComputingOrchestrationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
