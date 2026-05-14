import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Edge Computing & IoT Infrastructure — Zion Tech Group",
  description: "Deploy compute closer to your data sources with edge computing architecture — low-latency processing, distributed AI inference, and resilient IoT device management.",
  keywords: "AI services, IT services, Edge Computing & IoT Infrastructure",
  openGraph: {
    title: "Edge Computing & IoT Infrastructure",
    description: "Deploy compute closer to your data sources with edge computing architecture — low-latency processing, distributed AI inference, and resilient IoT device management.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Computing & IoT Infrastructure",
    description: "Deploy compute closer to your data sources with edge computing architecture — low-latency processing, distributed AI inference, and resilient IoT device management."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-edge-computing-solutions',
    title: 'Edge Computing & IoT Infrastructure',
    description: 'Deploy compute closer to your data sources with edge computing architecture — low-latency processing, distributed AI inference, and resilient IoT device management.',
    features: ['Edge server deployment & configuration', 'Container orchestration at the edge (K3s, KubeEdge)', 'IoT device provisioning & lifecycle management', 'Low-latency AI inference on edge hardware', 'Offline-first data synchronization with cloud'],
    benefits: ['Sub-10ms response times for critical applications', 'Reduce cloud data transfer costs by 60%', 'Operate autonomously during network outages', 'Scale IoT deployments to thousands of devices'],
    pricing: { basic: '1299', pro: '2999', enterprise: '6499' },
    contactInfo: { website: '/it-services/edge-computing', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '📡',
    href: '/it-services/edge-computing',
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

export default function EdgeComputingAndIotInfrastructurePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
