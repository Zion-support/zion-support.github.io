export type NavigationLink = {
  name: string;
  href: string;
  aliases?: readonly string[];
};

export const PRIMARY_NAV_LINKS: readonly NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export const RESOURCE_LINKS: readonly NavigationLink[] = [
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
];

export const AI_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
  {
    name: 'AI-Powered DevOps',
    href: '/ai-powered-devops',
    aliases: ['/zion-devops-automation'],
  },
  {
    name: 'AI Email Analyzer',
    href: '/ai-powered-email-analyzer',
    aliases: ['/zion-ai-email-assistant'],
  },
  { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
  { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
  { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
  { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
  { name: 'Zion Security Shield', href: '/zion-security-shield' },
  {
    name: 'Cybersecurity Audit',
    href: '/it-services/cybersecurity-audit',
    aliases: ['/zion-cybersecurity-audit'],
  },
  { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
  { name: 'Property Management AI', href: '/property-management-ai' },
  { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
  { name: 'Online Learning Platform', href: '/online-learning-platform' },
  { name: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
  { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' },
];
