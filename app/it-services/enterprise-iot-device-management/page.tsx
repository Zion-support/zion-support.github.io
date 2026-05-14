import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enterprise IoT Device Management — Zion Tech Group",
  description: "Enterprise IoT Device Management",
  keywords: "AI services, IT services, Enterprise IoT Device Management",
  openGraph: {
    title: "Enterprise IoT Device Management",
    description: "Enterprise IoT Device Management",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise IoT Device Management",
    description: "Enterprise IoT Device Management"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-iot-device-management',
    title: 'Enterprise IoT Device Management',
    description: `Provision, monitor, and secure 10K+ IoT devices (sensors, cameras, gateways) from a single dashboard with OTA updates and zero-touch enrollment.`,
    features: ["Device inventory & health monitoring", "Remote command & control", "Firmware OTA scheduling", "Geofencing & alerting"],
    benefits: ["Reduces device management overhead by 70%", "Ensures firmware consistency", "Detects rogue devices"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/it-services/it-iot-device-management',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📱',
    href: '/it-services/it-iot-device-management',
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

export default function EnterpriseIotDeviceManagementPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
