import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chaos Engineering as a Service — Zion Tech Group",
  description: "Proactively test system resilience by injecting failures — VM kill, network latency, dependency outage — in production-like environments. Improve reliability before incidents happen.",
  keywords: "AI services, IT services, Chaos Engineering as a Service",
  openGraph: {
    title: "Chaos Engineering as a Service",
    description: "Proactively test system resilience by injecting failures — VM kill, network latency, dependency outage — in production-like environments. Improve reliability before incidents happen.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaos Engineering as a Service",
    description: "Proactively test system resilience by injecting failures — VM kill, network latency, dependency outage — in production-like environments. Improve reliability before incidents happen."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-chaos-engineering",
    href: "/it-services/chaos-engineering",
    icon: "🌪️",
    category: "it",
    title: "Chaos Engineering as a Service",
    description: "Proactively test system resilience by injecting failures — VM kill, network latency, dependency outage — in production-like environments. Improve reliability before incidents happen.",
    features: [
      "Custom experiment design for your architecture",
      "Steady-state hypothesis validation",
      "Automatic blast radius containment",
      "Post-experiment forensic reports",
      "Runbooks updated based on findings"
    ],
    benefits: [
      "Reduces P0 incidents by 50% year-over-year",
      "Builds confidence in auto-scaling and failover",
      "Identifies single points of failure before customers do"
    ],
    pricing: { per_experiment: "199", retainer: "2499/mo" }
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

export default function ChaosEngineeringAsAServicePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
