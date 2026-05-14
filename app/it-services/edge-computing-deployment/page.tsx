import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edge Computing Deployment — Zion Tech Group",
  description: "Edge Computing Deployment",
  keywords: "AI services, IT services, Edge Computing Deployment",
  openGraph: {
    title: "Edge Computing Deployment",
    description: "Edge Computing Deployment",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Computing Deployment",
    description: "Edge Computing Deployment"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-edge-computing-deploy',
    title: 'Edge Computing Deployment',
    description: `Deploys containerized workloads to global edge locations (Cloudflare Workers, Fastly Compute, AWS Lambda@Edge) for sub-10ms latency.`,
    features: ["Multi-provider edge orchestration", "Edge cache strategy design", "Local data residency compliance", "Edge function monitoring"],
    benefits: ["Reduces API latency by 60\u201380%", "Improves global user experience", "Lowers origin server load"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-edge-computing-deploy',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🌍',
    href: '/it-services/it-edge-computing-deploy',
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

export default function EdgeComputingDeploymentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
