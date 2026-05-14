import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Microservices Architecture & API Gateway Design — Zion Tech Group",
  description: "Design and implement scalable microservices architectures with API gateways, service discovery, distributed tracing, and event-driven communication patterns.",
  keywords: "AI services, IT services, Microservices Architecture & API Gateway Design",
  openGraph: {
    title: "Microservices Architecture & API Gateway Design",
    description: "Design and implement scalable microservices architectures with API gateways, service discovery, distributed tracing, and event-driven communication patterns.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Microservices Architecture & API Gateway Design",
    description: "Design and implement scalable microservices architectures with API gateways, service discovery, distributed tracing, and event-driven communication patterns."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-microservices-architecture',
    title: 'Microservices Architecture & API Gateway Design',
    description: 'Design and implement scalable microservices architectures with API gateways, service discovery, distributed tracing, and event-driven communication patterns.',
    features: ['Domain-driven service decomposition', 'API gateway design and implementation (Kong, APISIX)', 'Service mesh deployment (Istio, Linkerd)', 'Distributed tracing and observability', 'Event-driven architecture with message brokers'],
    benefits: ['Independent deployment and scaling per service', 'Reduced blast radius for failures', 'Technology polyglotism for optimal tooling', 'Accelerated development velocity with team autonomy'],
    pricing: { basic: '1999', pro: '4999', enterprise: '12999' },
    contactInfo: { website: '/it-services/microservices-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🧩',
    href: '/it-services/microservices-architecture',
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

export default function MicroservicesArchitectureAndApiGatewayDesignPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
