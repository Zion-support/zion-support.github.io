import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Secrets Management as a Service — Zion Tech Group",
  description: "Secrets Management as a Service",
  keywords: "AI services, IT services, Secrets Management as a Service",
  openGraph: {
    title: "Secrets Management as a Service",
    description: "Secrets Management as a Service",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Secrets Management as a Service",
    description: "Secrets Management as a Service"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-secrets-management',
    title: 'Secrets Management as a Service',
    description: `Centralized secrets vault with automatic rotation, audit logs, and Just-In-Time access. Integrates with Kubernetes, VSphere, and cloud providers.`,
    features: ["Vault as a service", "Auto-rotation (certificates, keys)", "Just-In-Time access approvals", "Audit trail & reporting", "K8s operator"],
    benefits: ["Eliminate hardcoded secrets", "Meet compliance requirements", "Reduce breach blast radius"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/it-services/it-secrets-management',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🔐',
    href: '/it-services/it-secrets-management',
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

export default function SecretsManagementAsAServicePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
