import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Full-Stack Observability Platform — Zion Tech Group",
  description: "Full-Stack Observability Platform",
  keywords: "AI services, IT services, Full-Stack Observability Platform",
  openGraph: {
    title: "Full-Stack Observability Platform",
    description: "Full-Stack Observability Platform",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Observability Platform",
    description: "Full-Stack Observability Platform"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-observability-platform',
    title: 'Full-Stack Observability Platform',
    description: `Unified logs, metrics, traces, and profiling with AI-powered root-cause analysis. Self-hosted or cloud-hosted options.`,
    features: ["Distributed tracing (OpenTelemetry)", "Log aggregation with semantic search", "Custom dashboard builder", "Anomaly detection + alert routing"],
    benefits: ["Reduces MTTR by 50%", "Eliminates tool sprawl", "Provides single pane of glass"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-observability-platform',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📡',
    href: '/it-services/it-observability-platform',
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

export default function FullstackObservabilityPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
