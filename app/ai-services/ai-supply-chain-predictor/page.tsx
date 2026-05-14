import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Supply Chain Predictor — Zion Tech Group",
  description: "Predicts supply chain disruptions 14–30 days in advance using multi-source data — weather, geopolitical events, shipping delays, and supplier health scores.",
  keywords: "AI services, IT services, AI Supply Chain Predictor",
  openGraph: {
    title: "AI Supply Chain Predictor",
    description: "Predicts supply chain disruptions 14–30 days in advance using multi-source data — weather, geopolitical events, shipping delays, and supplier health scores.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Supply Chain Predictor",
    description: "Predicts supply chain disruptions 14–30 days in advance using multi-source data — weather, geopolitical events, shipping delays, and supplier health scores."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-supply-chain-predictor",
    href: "/ai-services/supply-chain-predictor",
    icon: "🚢",
    category: "ai",
    title: "AI Supply Chain Predictor",
    description: "Predicts supply chain disruptions 14–30 days in advance using multi-source data — weather, geopolitical events, shipping delays, and supplier health scores.",
    features: [
      "Demand forecasting with 94% accuracy",
      "Alternative routing suggestions",
      "Supplier risk scoring",
      "Real-time anomaly alerts"
    ],
    benefits: [
      "Reduces stockouts by 35%",
      "Cuts expedited shipping costs by 22%",
      "Improves supplier negotiation leverage"
    ],
    pricing: { basic: "299", pro: "799", enterprise: "2499" }
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

export default function AiSupplyChainPredictorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
