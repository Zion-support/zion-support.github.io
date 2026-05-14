import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real-Time Fraud Detection Engine — Zion Tech Group",
  description: "ML-based fraud detection for fintech, e-commerce, and marketplaces. Adapts to new fraud patterns within hours, not weeks.",
  keywords: "AI services, IT services, Real-Time Fraud Detection Engine",
  openGraph: {
    title: "Real-Time Fraud Detection Engine",
    description: "ML-based fraud detection for fintech, e-commerce, and marketplaces. Adapts to new fraud patterns within hours, not weeks.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time Fraud Detection Engine",
    description: "ML-based fraud detection for fintech, e-commerce, and marketplaces. Adapts to new fraud patterns within hours, not weeks."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-fraud-detection-realtime",
    href: "/ai-services/fraud-detection-realtime",
    icon: "🛡️",
    category: "ai",
    title: "Real-Time Fraud Detection Engine",
    description: "ML-based fraud detection for fintech, e-commerce, and marketplaces. Adapts to new fraud patterns within hours, not weeks.",
    features: [
      "Custom model training on your transaction history",
      "3D Secure-like challenge without friction",
      "Synthetic identity detection",
      "Chargeback evidence auto-packager",
      "Regulatory reporting dashboard (FFIEC, PSD2)"
    ],
    benefits: [
      "Lowers false positives by 55% vs rule-based systems",
      "Reduces chargebacks by up to 80%",
      "Onboards in 48 hours with existing data"
    ],
    pricing: { starter: "199", growth: "699", enterprise: "contact" }
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

export default function RealtimeFraudDetectionEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
