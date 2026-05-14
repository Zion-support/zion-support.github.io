import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enterprise AI Question Answering (Internal Knowledge) — Zion Tech Group",
  description: "Chatbot that answers employee questions from internal docs: HR policies, engineering runbooks, sales playbooks; cite sources, track unanswered queries.",
  keywords: "AI services, IT services, Enterprise AI Question Answering (Internal Knowledge)",
  openGraph: {
    title: "Enterprise AI Question Answering (Internal Knowledge)",
    description: "Chatbot that answers employee questions from internal docs: HR policies, engineering runbooks, sales playbooks; cite sources, track unanswered queries.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Question Answering (Internal Knowledge)",
    description: "Chatbot that answers employee questions from internal docs: HR policies, engineering runbooks, sales playbooks; cite sources, track unanswered queries."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-powered-question-answering',
     title: 'Enterprise AI Question Answering (Internal Knowledge)',
     description: 'Chatbot that answers employee questions from internal docs: HR policies, engineering runbooks, sales playbooks; cite sources, track unanswered queries.',
     features: [
       'RAG over private document corpus',
       'Source citation & confidence scores',
       'Multi-department bots (HR, Eng, Sales, Support)',
       'Feedback loop to improve answers',
       'Analytics: most-asked questions, gaps in docs'
     ],
     benefits: [
       'Reduce internal support tickets by 50%',
       'Onboard new hires instantly with accurate answers',
       'Keep institutional knowledge accessible',
       'Identify undocumented processes'
     ],
     pricing: { basic: '299', pro: '799', enterprise: '2299' },
     contactInfo: { website: '/ai-services/ai-powered-question-answering', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '💬',
     href: '/ai-services/ai-powered-question-answering',
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

export default function EnterpriseAiQuestionAnsweringInternalKnowledgePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
