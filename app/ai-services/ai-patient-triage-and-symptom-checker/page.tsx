import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Patient Triage & Symptom Checker — Zion Tech Group",
  description: "Advanced AI service: AI Patient Triage & Symptom Checker. Deliver cutting-edge intelligence for enterprise workflows.",
  keywords: "AI services, IT services, AI Patient Triage & Symptom Checker",
  openGraph: {
    title: "AI Patient Triage & Symptom Checker",
    description: "Advanced AI service: AI Patient Triage & Symptom Checker. Deliver cutting-edge intelligence for enterprise workflows.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Patient Triage & Symptom Checker",
    description: "Advanced AI service: AI Patient Triage & Symptom Checker. Deliver cutting-edge intelligence for enterprise workflows."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-new-009",
    href: "/ai-services/ai-patient-triage-and-symptom-checker",
    icon: "🤖",
    category: "ai",
    title: "AI Patient Triage & Symptom Checker",
    description: "Advanced AI service: AI Patient Triage & Symptom Checker. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/ai-patient-triage-and-symptom-checker",
    tags: ["ai","enterprise","2026"]
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

export default function AiPatientTriageAndSymptomCheckerPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
