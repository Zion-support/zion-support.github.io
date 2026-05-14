import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "No-Code AI Chatbot Builder — Zion Tech Group",
  description: "Create custom GPT-like chatbots trained on your data — docs, FAQs, past tickets — and embed them anywhere. Fine-tune tone, guardrails, and escalation paths in minutes.",
  keywords: "AI services, IT services, No-Code AI Chatbot Builder",
  openGraph: {
    title: "No-Code AI Chatbot Builder",
    description: "Create custom GPT-like chatbots trained on your data — docs, FAQs, past tickets — and embed them anywhere. Fine-tune tone, guardrails, and escalation paths in minutes.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "No-Code AI Chatbot Builder",
    description: "Create custom GPT-like chatbots trained on your data — docs, FAQs, past tickets — and embed them anywhere. Fine-tune tone, guardrails, and escalation paths in minutes."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: "ai-chatbot-builder",
    href: "/ai-services/chatbot-builder",
    icon: "💬",
    category: "ai",
    title: "No-Code AI Chatbot Builder",
    description: "Create custom GPT-like chatbots trained on your data — docs, FAQs, past tickets — and embed them anywhere. Fine-tune tone, guardrails, and escalation paths in minutes.",
    features: [
      "Drag-and-drop conversation flow designer",
      "Multi-channel deploy — web, WhatsApp, Slack, FB Messenger",
      "Human handoff with full context preservation",
      "Analytics dashboard — resolution rate, escalation triggers",
      "Custom GPT actions — lookup order, create support ticket"
    ],
    benefits: [
      "Handles 65% of routine queries without agents",
      "Live in <1 hour from data upload",
      "Improves CSAT by 12 points with instant answers"
    ],
    pricing: { starter: "99", business: "299", unlimited: "799" }
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

export default function NocodeAiChatbotBuilderPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
