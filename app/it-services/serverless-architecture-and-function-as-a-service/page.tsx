import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serverless Architecture & Function-as-a-Service — Zion Tech Group",
  description: "Design and migrate to serverless architectures - automatic scaling, pay-per-use pricing, and zero infrastructure management across AWS Lambda, Azure, and GCP Cloud Run.",
  keywords: "AI services, IT services, Serverless Architecture & Function-as-a-Service",
  openGraph: {
    title: "Serverless Architecture & Function-as-a-Service",
    description: "Design and migrate to serverless architectures - automatic scaling, pay-per-use pricing, and zero infrastructure management across AWS Lambda, Azure, and GCP Cloud Run.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Serverless Architecture & Function-as-a-Service",
    description: "Design and migrate to serverless architectures - automatic scaling, pay-per-use pricing, and zero infrastructure management across AWS Lambda, Azure, and GCP Cloud Run."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-serverless-architecture',
    title: 'Serverless Architecture & Function-as-a-Service',
    description: 'Design and migrate to serverless architectures - automatic scaling, pay-per-use pricing, and zero infrastructure management across AWS Lambda, Azure, and GCP Cloud Run.',
    features: ['Serverless architecture design and migration', 'Cold start optimization', 'Event-driven architecture', 'Cost monitoring and function optimization', 'Multi-cloud serverless deployment'],
    benefits: ['Reduce infrastructure costs by 80%', 'No server management', 'Auto-scaling', 'Pay per compute execution'],
    pricing: { basic: '1799', pro: '3999', enterprise: '8999' },
    contactInfo: { website: '/it-services/serverless-architecture', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '☁️',
    href: '/it-services/serverless-architecture',
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

export default function ServerlessArchitectureAndFunctionasaservicePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
