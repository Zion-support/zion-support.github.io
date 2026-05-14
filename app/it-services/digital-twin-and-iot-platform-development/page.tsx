import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Twin & IoT Platform Development — Zion Tech Group",
  description: "Build real-time digital replicas of physical systems — factory floors, supply chains, and smart cities with predictive simulation and optimization capabilities.",
  keywords: "AI services, IT services, Digital Twin & IoT Platform Development",
  openGraph: {
    title: "Digital Twin & IoT Platform Development",
    description: "Build real-time digital replicas of physical systems — factory floors, supply chains, and smart cities with predictive simulation and optimization capabilities.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Twin & IoT Platform Development",
    description: "Build real-time digital replicas of physical systems — factory floors, supply chains, and smart cities with predictive simulation and optimization capabilities."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-digital-twin-platform',
    title: 'Digital Twin & IoT Platform Development',
    description: 'Build real-time digital replicas of physical systems — factory floors, supply chains, and smart cities with predictive simulation and optimization capabilities.',
    features: ['3D digital twin modeling and visualization', 'Real-time IoT sensor data ingestion and mapping', 'Predictive simulation and what-if scenario analysis', 'Integration with CAD, BIM, and ERP systems', 'Automated alerts and anomaly detection'],
    benefits: ['Simulate changes before real-world implementation', 'Reduce operational downtime by 40%', 'Optimize resource allocation with predictive modeling', 'Unified visibility across complex physical-digital systems'],
    pricing: { basic: '5999', pro: '12999', enterprise: '29999' },
    contactInfo: { website: '/it-services/digital-twin-platform', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🏗️',
    href: '/it-services/digital-twin-platform',
    category: 'automation'
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

export default function DigitalTwinAndIotPlatformDevelopmentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
