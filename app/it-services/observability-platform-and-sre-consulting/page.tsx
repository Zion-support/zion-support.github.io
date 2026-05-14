import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Observability Platform & SRE Consulting — Zion Tech Group",
  description: "End-to-end observability implementation with distributed tracing, log aggregation, metrics collection, and Site Reliability Engineering best practices.",
  keywords: "AI services, IT services, Observability Platform & SRE Consulting",
  openGraph: {
    title: "Observability Platform & SRE Consulting",
    description: "End-to-end observability implementation with distributed tracing, log aggregation, metrics collection, and Site Reliability Engineering best practices.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Observability Platform & SRE Consulting",
    description: "End-to-end observability implementation with distributed tracing, log aggregation, metrics collection, and Site Reliability Engineering best practices."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-observability-platform',
    title: 'Observability Platform & SRE Consulting',
    description: 'End-to-end observability implementation with distributed tracing, log aggregation, metrics collection, and Site Reliability Engineering best practices.',
    features: ['Unified observability stack (Prometheus, Grafana, Jaeger)', 'Custom SLO/SLI definition and dashboard creation', 'Incident management with automated runbooks', 'Chaos engineering and resilience testing', 'SRE consulting and reliability maturity assessment'],
    benefits: ['Reduce MTTR by 60% with intelligent alerting', 'Eliminate alert fatigue with smart correlation', 'Proactive issue detection before user impact', 'Build engineering team reliability practices'],
    pricing: { basic: '1299', pro: '2999', enterprise: '6999' },
    contactInfo: { website: '/it-services/observability-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📊',
    href: '/it-services/observability-platform',
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

export default function ObservabilityPlatformAndSreConsultingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
