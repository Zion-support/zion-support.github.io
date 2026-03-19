export interface WhatsNewItem {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

export const whatsNewItems: WhatsNewItem[] = [
  {
    id: 'ai-site-evolution-advisor',
    title: 'AI Site Evolution Advisor',
    description:
      'Explore how autonomous pipelines evolve ziontechgroup.com in real time.',
    href: '/ai-lab/ai-site-evolution-advisor',
    tag: 'AI Lab',
  },
  {
    id: 'idea-to-feature-blueprint',
    title: 'AI Idea-to-Feature Blueprint',
    description:
      'Explore how autonomous pipelines evolve ziontechgroup.com in real time.',
    href: '/ai-lab/idea-to-feature-blueprint',
    tag: 'AI Lab',
  },
  {
    id: 'zion-ai-chatbot-playground',
    title: 'Zion AI Chatbot Playground',
    description:
      'In-browser demo',
    href: '/zion-ai-chatbot-playground',
    tag: 'New app',
  },
  {
    id: 'zion-ai-code-sandbox',
    title: 'Zion AI Code Sandbox',
    description:
      'Live code analysis demo',
    href: '/zion-ai-code-sandbox',
    tag: 'New app',
  },
  {
    id: 'ai-system-health-monitor',
    title: 'AI System Health Monitor',
    description:
      'Real-time monitoring and autonomous system optimization dashboard',
    href: '/ai-system-health-monitor',
    tag: 'New feature',
  },
  {
    id: 'autonomous-ci-cd-pipeline',
    title: 'Autonomous CI/CD Pipeline',
    description:
      'Self-testing, deployment, and monitoring automation engine',
    href: '/autonomous-ci-cd',
    tag: 'Automation',
  },
  {
    id: 'blockchain-security-agent',
    title: 'Blockchain Security Agent',
    description:
      'Real-time blockchain monitoring and security intelligence',
    href: '/blockchain-security',
    tag: 'Security',
  },
  {
    id: 'ai-content-optimizer',
    title: 'AI Content Optimizer',
    description:
      'Intelligent content generation and optimization for marketing',
    href: '/ai-content-optimizer',
    tag: 'Marketing',
  },
  {
    id: 'smart-analytics-dashboard',
    title: 'Smart Analytics Dashboard',
    description:
      'Predictive analytics and business intelligence platform',
    href: '/smart-analytics',
    tag: 'Analytics',
  },
  {
    id: 'customer-success-ai',
    title: 'Customer Success AI',
    description:
      'Proactive customer health scoring and retention automation',
    href: '/customer-success-ai',
    tag: 'Customer Experience',
  },
];