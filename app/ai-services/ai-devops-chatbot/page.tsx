import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI DevOps Chatbot — Zion Tech Group",
  description: "Natural language interface to your infrastructure: ask for logs, deployments, metrics, and incidents; get instant answers and auto-remediation suggestions.",
  keywords: "AI services, IT services, AI DevOps Chatbot",
  openGraph: {
    title: "AI DevOps Chatbot",
    description: "Natural language interface to your infrastructure: ask for logs, deployments, metrics, and incidents; get instant answers and auto-remediation suggestions.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI DevOps Chatbot",
    description: "Natural language interface to your infrastructure: ask for logs, deployments, metrics, and incidents; get instant answers and auto-remediation suggestions."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-devops-chatbot',
    title: 'AI DevOps Chatbot',
    description: 'Natural language interface to your infrastructure: ask for logs, deployments, metrics, and incidents; get instant answers and auto-remediation suggestions.',
    features: [
      'Natural language queries over logs & metrics',
      'Incident root cause summarization',
      'Automated runbook execution (via chat)',
      'Slack/MS Teams integration',
      'Access control & audit logging'
    ],
    benefits: [
      'Reduce MTTR by 50%',
      'Empower juniors to troubleshoot like seniors',
      'Eliminate context switching between tools',
      'Document tribal knowledge automatically'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-devops-chatbot',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🤖',
    href: '/ai-services/ai-devops-chatbot',
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

export default function AiDevopsChatbotPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
