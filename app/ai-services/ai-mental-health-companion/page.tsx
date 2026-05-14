import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Mental Health Companion — Zion Tech Group",
  description: "AI Mental Health Companion",
  keywords: "AI services, IT services, AI Mental Health Companion",
  openGraph: {
    title: "AI Mental Health Companion",
    description: "AI Mental Health Companion",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Mental Health Companion",
    description: "AI Mental Health Companion"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-mental-health-chatbot',
    title: 'AI Mental Health Companion',
    description: `Empathetic, HIPAA-compliant chatbot providing CBT-based support, mood tracking, and crisis escalation to licensed professionals.`,
    features: ["Mood journal with trends", "Personalized coping strategies", "Crisis keyword detection to human handoff", "Weekly mental health reports"],
    benefits: ["24/7 anonymous support", "Reduces therapy wait times", "Scalable early intervention"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-mental-health-chatbot',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🧠',
    href: '/ai-services/ai-mental-health-chatbot',
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

export default function AiMentalHealthCompanionPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
