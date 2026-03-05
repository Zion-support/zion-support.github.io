/**
 * Shared blog data for sitemap, structured data, and blog index.
 * Single source of truth for blog post slugs.
 */

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
};

/** All blog post slugs for sitemap and routing */
export const BLOG_SLUGS = [
  '5-proven-ai-automation-strategies-for-enterprise-workflow-optimization',
  'agentic-ai-autonomous-agents-enterprise-2026',
  'ai-customer-support-playbook',
  'ai-driven-customer-experience-from-chatbots-to-hyper-personalization',
  'ai-for-financial-services-automating-risk-compliance-and-customer-growth',
  'ai-governance-and-responsible-ai-a-practical-enterprise-framework',
  'ai-in-healthcare-how-intelligent-automation-is-transforming-patient-care-in-2026',
  'ai-in-legal-professional-services-automating-contract-review',
  'ai-in-logistics-and-supply-chain-cutting-costs-and-improving-visibility',
  'ai-pilot-to-production',
  'ai-powered-devops-automating-the-entire-software-delivery-lifecycle',
  'ai-security-best-practices-protecting-your-ai-systems-from-emerging-threats',
  'autonomous-ai-agents-the-next-frontier-in-enterprise-automation',
  'building-a-winning-ai-team-roles-skills-and-organizational-structure',
  'building-resilient-automation',
  'building-your-first-ai-chatbot-a-step-by-step-technical-guide',
  'cloud-migration-and-ai-modernizing-infrastructure-for-intelligent-workloads',
  'data-strategy-for-ai-building-the-foundation-for-machine-learning-success',
  'devops-ai-integration',
  'how-to-calculate-ai-roi-a-framework-for-enterprise-decision-makers',
  'implementing-ai-powered-document-processing-from-paper-to-insights',
  'measuring-ai-roi',
  'retail-ai-playbook-personalization-inventory-and-customer-experience-at-scale',
  'securing-ai-models-a-practical-guide-to-threat-mitigation-in-production',
  'security-first-ai-deployment',
  'small-business-ai-adoption-guide-start-fast-scale-smart',
  'smart-manufacturing-how-ai-is-powering-the-next-industrial-revolution',
  'the-complete-guide-to-ai-powered-predictive-analytics-for-business',
  'the-future-of-work-how-ai-is-redefining-every-role-in-the-enterprise',
  'top-10-ai-trends-reshaping-enterprise-technology-in-2026',
] as const;
