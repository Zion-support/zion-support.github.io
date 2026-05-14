import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Cost Optimization Platform — Zion Tech Group",
  description: "Automated cost governance for AWS, Azure, and GCP. Right-sizes resources, eliminates waste, and enforces budgets with predictive alerts before overspend.",
  keywords: "AI services, IT services, Cloud Cost Optimization Platform",
  openGraph: {
    title: "Cloud Cost Optimization Platform",
    description: "Automated cost governance for AWS, Azure, and GCP. Right-sizes resources, eliminates waste, and enforces budgets with predictive alerts before overspend.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Cost Optimization Platform",
    description: "Automated cost governance for AWS, Azure, and GCP. Right-sizes resources, eliminates waste, and enforces budgets with predictive alerts before overspend."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-cost-optimization-platform",
    href: "/it-services/cost-optimization-platform",
    icon: "💸",
    category: "it",
    title: "Cloud Cost Optimization Platform",
    description: "Automated cost governance for AWS, Azure, and GCP. Right-sizes resources, eliminates waste, and enforces budgets with predictive alerts before overspend.",
    features: [
      "Idle resource detection and auto-stop schedules",
      "Reserved instance and savings plan recommendation engine",
      "Tag-based cost allocation and showback",
      "Anomaly detection with root-cause tagging",
      "Custom budget thresholds with Slack and Teams alerts"
    ],
    benefits: [
      "Saves 25–40% on cloud spend without performance hit",
      "Prevents bill shock with 7-day spend forecast",
      "Provides finance-grade cost reporting"
    ],
    pricing: { basic: "299", pro: "799", enterprise: "contact" }
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

export default function CloudCostOptimizationPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
