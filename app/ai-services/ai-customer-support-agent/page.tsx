import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Customer Support Agent — Zion Tech Group",
  description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.",
  keywords: "AI services, IT services, AI Customer Support Agent",
  openGraph: {
    title: "AI Customer Support Agent",
    description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Support Agent",
    description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-customer-support-agent',
     title: 'AI Customer Support Agent',
     description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.",
     features: [
       'Multilingual support (50+ languages)',
       'Integrations: Zendesk, Intercom, Salesforce',
       'Document retrieval from knowledge base (RAG)',
       'Sentiment-aware responses & escalation',
       'Analytics: resolution rate, CSAT impact'
     ],
     benefits: [
       'Cut support costs by 70%',
       'Instant responses (sub-second)',
       '80%+ ticket deflection from humans',
       'Always-on coverage across timezones'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2499' },
     contactInfo: { website: '/ai-services/ai-customer-support-agent', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '🤖',
     href: '/ai-services/ai-customer-support-agent',
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

export default function AiCustomerSupportAgentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
