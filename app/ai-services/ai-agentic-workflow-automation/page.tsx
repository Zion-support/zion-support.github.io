import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Agentic Workflow Automation — Zion Tech Group",
  description: "Autonomous AI agents that plan, execute, and monitor multi-step business workflows — from data gathering to decision execution with human-in-the-loop oversight.",
  keywords: "AI services, IT services, AI Agentic Workflow Automation",
  openGraph: {
    title: "AI Agentic Workflow Automation",
    description: "Autonomous AI agents that plan, execute, and monitor multi-step business workflows — from data gathering to decision execution with human-in-the-loop oversight.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agentic Workflow Automation",
    description: "Autonomous AI agents that plan, execute, and monitor multi-step business workflows — from data gathering to decision execution with human-in-the-loop oversight."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-agentic-workflows',
    title: 'AI Agentic Workflow Automation',
    description: 'Autonomous AI agents that plan, execute, and monitor multi-step business workflows — from data gathering to decision execution with human-in-the-loop oversight.',
    features: ['Multi-agent orchestration with role specialization', 'Natural language workflow design', 'Human-in-the-loop approval gates', 'Self-healing workflows with error recovery', 'Real-time monitoring dashboards', 'Integration with 200+ enterprise tools'],
    benefits: ['Replace 70% of repetitive operational workflows', '24/7 autonomous execution without human intervention', 'Faster workflow creation with natural language design', 'Seamless integration with existing tool stack'],
    pricing: { basic: '399', pro: '899', enterprise: '2499' },
    contactInfo: { website: '/ai-services/ai-agentic-workflows', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-agentic-workflows',
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

export default function AiAgenticWorkflowAutomationPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
