import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quantum Readiness Assessment — Zion Tech Group",
  description: "Evaluate your cryptographic infrastructure against future quantum threats. We inventory all PKI assets, identify vulnerable algorithms, and produce a migration roadmap to post-quantum cryptography.",
  keywords: "AI services, IT services, Quantum Readiness Assessment",
  openGraph: {
    title: "Quantum Readiness Assessment",
    description: "Evaluate your cryptographic infrastructure against future quantum threats. We inventory all PKI assets, identify vulnerable algorithms, and produce a migration roadmap to post-quantum cryptography.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Readiness Assessment",
    description: "Evaluate your cryptographic infrastructure against future quantum threats. We inventory all PKI assets, identify vulnerable algorithms, and produce a migration roadmap to post-quantum cryptography."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "it-quantum-readiness-assessment",
    href: "/it-services/quantum-readiness-assessment",
    icon: "⚛️",
    category: "it",
    title: "Quantum Readiness Assessment",
    description: "Evaluate your cryptographic infrastructure against future quantum threats. We inventory all PKI assets, identify vulnerable algorithms, and produce a migration roadmap to post-quantum cryptography.",
    features: [
      "Automated crypto-asset discovery across clouds and data centers",
      "PQ algorithm readiness score — NIST finalists assessment",
      "Migration cost estimation and phased plan",
      "Hybrid cipher deployment guidance",
      "Executive dashboard with risk heat map"
    ],
    benefits: [
      "Avoids 'harvest now, decrypt later' data breaches",
      "Meets compliance timelines — e.g., NSA CNS 2.0 deadline 2025",
      "Smooth transition with zero downtime"
    ],
    pricing: { assessment: "4999", full_engagement: "contact" }
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

export default function QuantumReadinessAssessmentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
