import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Enterprise Chatbot Builder Platform — Zion Tech Group",
  description: "Build and deploy enterprise-grade AI chatbots with multi-language support, knowledge base integration, human handoff, and advanced analytics dashboard.",
  keywords: "AI services, IT services, AI Enterprise Chatbot Builder Platform",
  openGraph: {
    title: "AI Enterprise Chatbot Builder Platform",
    description: "Build and deploy enterprise-grade AI chatbots with multi-language support, knowledge base integration, human handoff, and advanced analytics dashboard.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Enterprise Chatbot Builder Platform",
    description: "Build and deploy enterprise-grade AI chatbots with multi-language support, knowledge base integration, human handoff, and advanced analytics dashboard."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-chatbot-builder-pro',
    title: 'AI Enterprise Chatbot Builder Platform',
    description: 'Build and deploy enterprise-grade AI chatbots with multi-language support, knowledge base integration, human handoff, and advanced analytics dashboard.',
    features: ['No-code conversational AI builder with drag-and-drop', 'Multi-language support with automatic translation', 'Knowledge base integration (SharePoint, Confluence, web)', 'Intelligent human handoff with context transfer', 'Conversation analytics and sentiment tracking'],
    benefits: ['Deflect 60% of support tickets with intelligent chatbots', 'Provide 24/7 multilingual customer support', 'Reduce average resolution time by 70%', 'Capture valuable customer insights from conversations'],
    pricing: { basic: '199', pro: '499', enterprise: '1199' },
    contactInfo: { website: '/ai-services/ai-chatbot-builder-pro', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-chatbot-builder-pro',
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

export default function AiEnterpriseChatbotBuilderPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
