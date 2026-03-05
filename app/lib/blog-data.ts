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
  'ai-pilot-to-production',
  'security-first-ai-deployment',
  'measuring-ai-roi',
  'building-resilient-automation',
  'ai-customer-support-playbook',
  'devops-ai-integration',
  'ai-in-healthcare-how-intelligent-automation-is-transforming-patient-care-in-2026',
  'smart-manufacturing-how-ai-is-powering-the-next-industrial-revolution',
  'retail-ai-playbook-personalization-inventory-and-customer-experience-at-scale',
  'how-to-calculate-ai-roi-a-framework-for-enterprise-decision-makers',
  'top-10-ai-trends-reshaping-enterprise-technology-in-2026',
  'ai-driven-customer-experience-from-chatbots-to-hyper-personalization',
  'data-strategy-for-ai-building-the-foundation-for-machine-learning-success',
  'ai-in-logistics-and-supply-chain-cutting-costs-and-improving-visibility',
  'building-a-winning-ai-team-roles-skills-and-organizational-structure',
  'ai-for-financial-services-automating-risk-compliance-and-customer-growth',
  'building-your-first-ai-chatbot-a-step-by-step-technical-guide',
  'the-complete-guide-to-ai-powered-predictive-analytics-for-business',
  'ai-powered-devops-automating-the-entire-software-delivery-lifecycle',
  'small-business-ai-adoption-guide-start-fast-scale-smart',
  'ai-governance-and-responsible-ai-a-practical-enterprise-framework',
  'implementing-ai-powered-document-processing-from-paper-to-insights',
  'the-future-of-work-how-ai-is-redefining-every-role-in-the-enterprise',
  'ai-security-best-practices-protecting-your-ai-systems-from-emerging-threats',
  'autonomous-ai-agents-the-next-frontier-in-enterprise-automation',
  'cloud-migration-and-ai-modernizing-infrastructure-for-intelligent-workloads',
] as const;
