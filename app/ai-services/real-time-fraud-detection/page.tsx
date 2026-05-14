import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real-Time Fraud Detection — Zion Tech Group",
  description: "Real-Time Fraud Detection",
  keywords: "AI services, IT services, Real-Time Fraud Detection",
  openGraph: {
    title: "Real-Time Fraud Detection",
    description: "Real-Time Fraud Detection",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time Fraud Detection",
    description: "Real-Time Fraud Detection"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-fraud-detection-real-time',
    title: 'Real-Time Fraud Detection',
    description: `ML models trained on transaction data to detect anomalies in milliseconds. Adaptive learning reduces false positives over time.`,
    features: ["Real-time scoring (<50ms)", "Adaptive thresholds", "Case management dashboard", "Investigation tools", "PCI DSS compliant"],
    benefits: ["Catch fraud before it happens", "Reduce false positives by 40%", "Save millions in chargebacks"],
    pricing: {"basic":"399","pro":"899","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-fraud-detection-real-time',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-fraud-detection-real-time',
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

export default function RealtimeFraudDetectionPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
