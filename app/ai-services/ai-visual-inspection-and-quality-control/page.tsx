import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Visual Inspection & Quality Control — Zion Tech Group",
  description: "Computer vision-powered quality control for manufacturing: detect defects, classify product flaws, and ensure consistent quality on the production line.",
  keywords: "AI services, IT services, AI Visual Inspection & Quality Control",
  openGraph: {
    title: "AI Visual Inspection & Quality Control",
    description: "Computer vision-powered quality control for manufacturing: detect defects, classify product flaws, and ensure consistent quality on the production line.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Visual Inspection & Quality Control",
    description: "Computer vision-powered quality control for manufacturing: detect defects, classify product flaws, and ensure consistent quality on the production line."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-visual-inspection',
    title: 'AI Visual Inspection & Quality Control',
    description: 'Computer vision-powered quality control for manufacturing: detect defects, classify product flaws, and ensure consistent quality on the production line.',
    features: [
      'Defect detection (scratches, dents, misalignments)',
      'Real-time inspection at line speed',
      'Anomaly detection on novel defect types',
      'Self-learning model improvement',
      'Integration with PLCs & MES systems'
    ],
    benefits: [
      'Reduce defect escape rate by 90%',
      'Lower QC labor costs by 60%',
      'Real-time quality dashboard',
      'Continuous model improvement'
    ],
    pricing: {
      basic: '599',
      pro: '1399',
      enterprise: '3999'
    },
    contactInfo: {
      website: '/ai-services/ai-visual-inspection',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '👁️',
    href: '/ai-services/ai-visual-inspection',
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

export default function AiVisualInspectionAndQualityControlPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
