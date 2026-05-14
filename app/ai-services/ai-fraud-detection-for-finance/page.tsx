import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Fraud Detection for Finance — Zion Tech Group",
  description: "AI Fraud Detection for Finance",
  keywords: "AI services, IT services, AI Fraud Detection for Finance",
  openGraph: {
    title: "AI Fraud Detection for Finance",
    description: "AI Fraud Detection for Finance",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fraud Detection for Finance",
    description: "AI Fraud Detection for Finance"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-fraud-detection-finance',
    title: 'AI Fraud Detection for Finance',
    description: `Real-time transaction monitoring for banks, fintechs, and accounting firms with explainable AI decisions and SAR report generation.`,
    features: ["Rule-based plus ML hybrid model", "Explainable decision reasons (XAI)", "Adaptive learning from investigator feedback", "Automatic SAR filing templates"],
    benefits: ["Reduces false positives by 40%", "Meets FinCEN requirements", "Detects novel fraud patterns"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-fraud-detection-finance',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🛡️',
    href: '/ai-services/ai-fraud-detection-finance',
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

export default function AiFraudDetectionForFinancePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
