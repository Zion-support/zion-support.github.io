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
  { name: 'Contact', href: '/contact' },
];

export const SOLUTION_LINKS: readonly NavigationLink[] = [
  { name: 'All Solutions', href: '/solutions' },
  { name: 'Healthcare', href: '/solutions/healthcare' },
  { name: 'Financial Services', href: '/solutions/financial-services' },
  { name: 'Manufacturing & Industrial', href: '/solutions/manufacturing-industrial' },
  { name: 'E‑Commerce & Retail', href: '/solutions/ecommerce-retail' },
  { name: 'Technology & SaaS', href: '/solutions/technology-and-saas' },
  { name: 'Logistics & Supply Chain', href: '/solutions/logistics-supply-chain' },
  { name: 'Government & Public Sector', href: '/solutions/government-and-public-sector' },
  { name: 'Insurance', href: '/solutions/insurance' },
  { name: 'Industries', href: '/industries' },
];

export const RESOURCE_LINKS: readonly NavigationLink[] = [
  { name: 'Search', href: '/search' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Innovation Bundles', href: '/innovation-bundles' },
  { name: 'Community', href: '/community' },
  { name: 'Industries', href: '/industries' },
  { name: 'Products', href: '/products' },
  { name: 'AI Services', href: '/ai-services' },
  { name: 'Consultation', href: '/consultation' },
  { name: 'Automation', href: '/automation' },
  { name: 'Micro SAAS', href: '/micro-saas-services' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Site Map', href: '/site-map' },
];

export const FEATURED_AI_SERVICE_LINKS: readonly NavigationLink[] = [
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
];

export const AI_SERVICE_LINKS: readonly NavigationLink[] = [
  ...FEATURED_AI_SERVICE_LINKS,
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
  { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
  { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
  { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
  { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
  { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
  { name: 'Data Engineering', href: '/it-services/data-engineering' },
  { name: 'API Development', href: '/it-services/api-development' },
  { name: 'Mobile Development', href: '/it-services/mobile-development' },
  { name: 'Generative AI Enterprise', href: '/ai-services/generative-ai-enterprise' },
  { name: 'AI Agents & Autonomous Workflows', href: '/ai-services/ai-agents-autonomous' },
  { name: 'AI Multimodal Intelligence', href: '/ai-services/ai-multimodal-intelligence' },
  { name: 'AI RAG & Knowledge Systems', href: '/ai-services/ai-rag-knowledge-systems' },
  { name: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
  { name: 'AI Model Orchestration', href: '/ai-services/ai-model-orchestration' },
  { name: 'AI Copilot & Enterprise Assistants', href: '/ai-services/ai-copilot-enterprise' },
  { name: 'AI Observability & MLOps', href: '/ai-services/ai-observability-mlops' },
];

export const FEATURED_PRODUCT_LINKS: readonly NavigationLink[] = [
  { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
  { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
  { name: 'Zion Content Studio', href: '/zion-content-studio' },
  { name: 'Zion Project Master', href: '/zion-project-master' },
  { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
  { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
  { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
  { name: 'Zion Data Sync', href: '/zion-data-sync' },
];

export const AUTOMATION_LINKS: readonly NavigationLink[] = [
  { name: 'Automation', href: '/automation' },
  { name: 'Workflow Automation', href: '/workflow-automation' },
  {
    name: 'Smart CRM Automation',
    href: '/zion-smart-crm-automation',
    aliases: ['/crm-automation'],
  },
  { name: 'Email Automation', href: '/zion-email-automation' },
  { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
  { name: 'DevOps Automation', href: '/zion-devops-automation' },
  { name: 'AI Workflow Automator', href: '/zion-ai-workflow-automator' },
  { name: 'AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
  { name: 'Robotic Process Automation', href: '/robotic-process-automation' },
  { name: 'Process Automation', href: '/process-automation' },
  { name: 'Security Automation', href: '/security-automation' },
  { name: 'Compliance Automation', href: '/compliance-automation' },
];

export const PRODUCT_LINKS: readonly NavigationLink[] = [
  { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
  { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
  { name: 'Zion Content Studio', href: '/zion-content-studio' },
  { name: 'Zion Project Master', href: '/zion-project-master' },
  { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
  { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
  { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
  { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
  { name: 'Zion Data Sync', href: '/zion-data-sync' },
  { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
  { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
  { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
  { name: 'AI Social Media Manager', href: '/zion-ai-social-media-manager' },
  { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
  { name: 'AI Fraud Detection', href: '/zion-ai-fraud-detection' },
  { name: 'AI Voice Assistant', href: '/zion-ai-voice-assistant' },
];
