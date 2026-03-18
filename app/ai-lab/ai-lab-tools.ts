export type AILabToolStatus = 'live' | 'experimental' | 'planned';

export type AILabToolId =
  | 'ai-site-evolution-advisor'
  | 'idea-to-feature-blueprint'
  | 'ai-rollout-blueprint'
  | 'ai-roi-ops-scorecard';

export interface AILabTool {
  id: AILabToolId;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  status: AILabToolStatus;
  href: string;
  badge?: string;
}

export const AI_LAB_TOOLS: AILabTool[] = [
  {
    id: 'ai-site-evolution-advisor',
    slug: 'ai-site-evolution-advisor',
    title: 'AI Site Evolution Advisor',
    shortDescription:
      'Visualize how Zion’s autonomous agents are improving ziontechgroup.com and what they will optimize next.',
    category: 'Platform Intelligence',
    status: 'live',
    href: '/ai-lab/ai-site-evolution-advisor',
    badge: 'New',
  },
  {
    id: 'idea-to-feature-blueprint',
    slug: 'idea-to-feature-blueprint',
    title: 'AI Idea-to-Feature Blueprint',
    shortDescription:
      'Describe an idea and see how Zion’s autonomous platform would turn it into a live feature on the site.',
    category: 'Product Ideation',
    status: 'experimental',
    href: '/ai-lab/idea-to-feature-blueprint',
    badge: 'Experimental',
  },
  {
    id: 'ai-rollout-blueprint',
    slug: 'rollout-blueprint',
    title: 'AI Rollout Blueprint Generator',
    shortDescription:
      'Answer a few questions about your team and goals to generate a phased AI rollout plan powered by Zion modules.',
    category: 'Rollout Design',
    status: 'live',
    href: '/ai-lab/rollout-blueprint',
    badge: 'New',
  },
  {
    id: 'ai-roi-ops-scorecard',
    slug: 'roi-ops-scorecard',
    title: 'AI ROI & Ops Scorecard',
    shortDescription:
      'Estimate impact across revenue, operations, and experience, then see where AI will likely move the needle first.',
    category: 'Impact Modeling',
    status: 'experimental',
    href: '/ai-lab/roi-ops-scorecard',
    badge: 'Beta',
  },
];

