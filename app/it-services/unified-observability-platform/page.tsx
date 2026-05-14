import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Unified Observability Platform — Zion Tech Group",
  description: "Unified Observability Platform",
  keywords: "AI services, IT services, Unified Observability Platform",
  openGraph: {
    title: "Unified Observability Platform",
    description: "Unified Observability Platform",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified Observability Platform",
    description: "Unified Observability Platform"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-observability-unified',
    title: 'Unified Observability Platform',
    description: `Single pane of glass for logs, metrics, traces, and profiles. Powered by OpenTelemetry, with AI-assisted root cause analysis.`,
    features: ["OpenTelemetry auto-instrumentation", "Log aggregation & search", "Distributed tracing", "Profiling (CPU/memory)", "AI RCA (root cause)"],
    benefits: ["Reduce MTTR by 70%", "Cut monitoring tool sprawl", "Proactive anomaly detection"],
    pricing: {"basic":"299","pro":"699","enterprise":"1799"},
    contactInfo: {
      website: '/it-services/it-observability-unified',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📈',
    href: '/it-services/it-observability-unified',
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

export default function UnifiedObservabilityPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
