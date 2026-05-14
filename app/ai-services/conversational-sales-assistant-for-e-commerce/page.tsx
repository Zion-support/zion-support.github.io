import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conversational Sales Assistant for E-Commerce — Zion Tech Group",
  description: "Advanced AI service: Conversational Sales Assistant for E-Commerce. Deliver cutting-edge intelligence for enterprise workflows.",
  keywords: "AI services, IT services, Conversational Sales Assistant for E-Commerce",
  openGraph: {
    title: "Conversational Sales Assistant for E-Commerce",
    description: "Advanced AI service: Conversational Sales Assistant for E-Commerce. Deliver cutting-edge intelligence for enterprise workflows.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversational Sales Assistant for E-Commerce",
    description: "Advanced AI service: Conversational Sales Assistant for E-Commerce. Deliver cutting-edge intelligence for enterprise workflows."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-new-020",
    href: "/ai-services/conversational-sales-assistant-for-e-commerce",
    icon: "🤖",
    category: "ai",
    title: "Conversational Sales Assistant for E-Commerce",
    description: "Advanced AI service: Conversational Sales Assistant for E-Commerce. Deliver cutting-edge intelligence for enterprise workflows.",
    features: ["AI-powered automation","Scalable cloud-native architecture","Enterprise-grade security"],
    benefits: ["Increase efficiency","Reduce operational costs","Drive innovation"],
    pricing: { basic: "99", pro: "299", enterprise: "999" },
    marketPrice: "$99–$999/mo",
    link: "/ai-services/conversational-sales-assistant-for-e-commerce",
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

export default function ConversationalSalesAssistantForEcommercePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
