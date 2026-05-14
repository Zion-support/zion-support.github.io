import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud-Native Storage Optimizer — Zion Tech Group",
  description: "Cloud-Native Storage Optimizer",
  keywords: "AI services, IT services, Cloud-Native Storage Optimizer",
  openGraph: {
    title: "Cloud-Native Storage Optimizer",
    description: "Cloud-Native Storage Optimizer",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud-Native Storage Optimizer",
    description: "Cloud-Native Storage Optimizer"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-cloud-native-storage',
    title: 'Cloud-Native Storage Optimizer',
    description: `Automated storage tiering, snapshot management, and cost optimization for AWS S3, EBS, Azure Blob, GCP Cloud Storage.`,
    features: ["Lifecycle policy automation", "Intelligent tiering (Intelligent-Tiering, Glacier)", "Snapshot retention policies", "Cost anomaly detection", "Capacity forecasting"],
    benefits: ["Reduce storage costs by 60%", "Never run out of space", "Optimize performance tiers"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/it-services/it-cloud-native-storage',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '💾',
    href: '/it-services/it-cloud-native-storage',
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

export default function CloudnativeStorageOptimizerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
