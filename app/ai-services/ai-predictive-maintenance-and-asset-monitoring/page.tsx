import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Predictive Maintenance & Asset Monitoring — Zion Tech Group",
  description: "IoT-enabled predictive maintenance that monitors equipment health in real time, predicts failures before they happen, and optimizes maintenance schedules to reduce downtime.",
  keywords: "AI services, IT services, AI Predictive Maintenance & Asset Monitoring",
  openGraph: {
    title: "AI Predictive Maintenance & Asset Monitoring",
    description: "IoT-enabled predictive maintenance that monitors equipment health in real time, predicts failures before they happen, and optimizes maintenance schedules to reduce downtime.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Predictive Maintenance & Asset Monitoring",
    description: "IoT-enabled predictive maintenance that monitors equipment health in real time, predicts failures before they happen, and optimizes maintenance schedules to reduce downtime."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance & Asset Monitoring',
    description: 'IoT-enabled predictive maintenance that monitors equipment health in real time, predicts failures before they happen, and optimizes maintenance schedules to reduce downtime.',
    features: ['IoT sensor data ingestion & real-time monitoring', 'ML-based remaining useful life (RUL) prediction', 'Anomaly detection for early fault signatures', 'Automated maintenance scheduling & work order generation', 'Fleet-wide asset health dashboards', 'Integration with CMMS, SAP, and ERP systems'],
    benefits: ['Reduce unplanned downtime by 40-60%', 'Extend equipment lifespan by 20-30%', 'Cut maintenance costs by 25% through optimization', 'Eliminate expensive emergency repairs'],
    pricing: { basic: '499', pro: '1199', enterprise: '2799' },
    contactInfo: { website: '/ai-services/ai-predictive-maintenance', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/ai-services/ai-predictive-maintenance',
    category: 'ai'
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

export default function AiPredictiveMaintenanceAndAssetMonitoringPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
