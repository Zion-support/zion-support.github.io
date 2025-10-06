/**
 * Blog Content Index
 * Centralized index of all blog posts for easy discovery and navigation
 */

export interface BlogPost { 
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  valueProposition: string;
}

/**
 * October 2025 Breakthrough Content
 */
export const october2025Breakthroughs: BlogPost[] = [
  {
    slug: 'ai-2025-oct-01-neural-architecture-evolution-breakthrough',
    title: 'Neural Architecture Evolution 2025',
    description: 'Self-designing AI models achieving 10,000x faster development, 97% accuracy improvement, and $25M annual savings through autonomous model evolution.',
    category: 'AI Innovation',
    date: '2025-10-01',
    readTime: '25 min',
    tags: [
      'neural architecture search',
      'AutoML',
      'model optimization',
      'AI evolution',
      'machine learning',
      'enterprise AI',
    ],
    featured: true,
    valueProposition: '$25M annual savings',
  },
  {
    slug: 'ai-2025-oct-01-quantum-inspired-optimization-enterprise',
    title: 'Quantum-Inspired Optimization 2025',
    description: 'Revolutionary quantum-inspired algorithms solving enterprise problems 1000x faster with 99.8% optimality, delivering $42M annual value.',
    category: 'Quantum Computing',
    date: '2025-10-01',
    readTime: '22 min',
    tags: [
      'quantum optimization',
      'quantum computing',
      'enterprise optimization',
      'quantum algorithms',
      'supply chain',
      'portfolio optimization',
    ],
    featured: true,
    valueProposition: '$42M annual value creation',
  },
  {
    slug: 'ai-2025-oct-01-intelligent-automation-orchestration-platform',
    title: 'Intelligent Automation Orchestration 2025',
    description: 'AI-powered automation platform achieving 98% process automation, 85% cost reduction, and $67M annual savings through intelligent orchestration.',
    category: 'Enterprise Automation',
    date: '2025-10-01',
    readTime: '28 min',
    tags: [
      'intelligent automation',
      'process automation',
      'RPA',
      'AI orchestration',
      'workflow automation',
      'digital transformation',
    ],
    featured: true,
    valueProposition: '$67M annual savings',
  },
  {
    slug: 'ai-2025-oct-03-continuous-intelligence-platforms',
    title: 'Continuous Intelligence 2025',
    description: '100M+ events/sec with sub-50ms decisions, KPI scorecards, and safe rollback.',
    category: 'Real-Time AI',
    date: '2025-10-03',
    readTime: '10 min',
    tags: ['streaming', 'decisioning', 'feature store', 'KPIs'],
    featured: true,
    valueProposition: '$215M annual value',
  },
  {
    slug: 'ai-2025-oct-03-autonomous-cloud-security',
    title: 'Autonomous Cloud Security 2025',
    description: '99.98% threat neutralization under 5 seconds with policy-backed automations.',
    category: 'Security',
    date: '2025-10-03',
    readTime: '9 min',
    tags: ['security', 'zero trust', 'automation', 'rollback'],
    featured: true,
    valueProposition: '$42M annual savings',
  },
  {
    slug: 'ai-2025-oct-03-quantum-supply-chain-optimization',
    title: 'Quantum Supply Chain 2025',
    description: '10,000x faster plans with hybrid quantum-inspired optimization and ML heuristics.',
    category: 'Quantum Computing',
    date: '2025-10-03',
    readTime: '11 min',
    tags: ['quantum', 'optimization', 'supply chain'],
    featured: true,
    valueProposition: '$127M annual savings',
  },
  {
    slug: 'ai-2025-oct-02-rollback-guardrails-blueprint',
    title: 'Runtime Rollback Guardrails Blueprint',
    description: 'Implement instant rollbacks, canary scorecards, and objective quality budgets.',
    category: 'Reliability',
    date: '2025-10-02',
    readTime: '9 min',
    tags: ['Rollback', 'Canary', 'Guardrails', 'Budgets'],
    featured: true,
    valueProposition: 'Instant reversibility, resilient releases',
  },
];

// Combine all blog posts
export const allBlogPosts: BlogPost[] = [
  ...october2025Breakthroughs,
];

// Helper functions
export const getFeaturedPosts = (): BlogPost[] => {
  return allBlogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return allBlogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(allBlogPosts.map(post => post.category))];
};

export const getAllTags = (): string[] => {
  return [...new Set(allBlogPosts.flatMap(post => post.tags))];
};

export const getTotalValueProposition = (): string => {
  const totalValue = allBlogPosts.reduce((sum, post) => {
    const value = post.valueProposition.match(/\$[\d.]+[MBK]?/);
    if (value) {
      const num = parseFloat(value[0].replace(/[$,MBK]/g, ''));
      const multiplier = value[0].includes('M') ? 1000000 : value[0].includes('B') ? 1000000000 : value[0].includes('K') ? 1000 : 1;
      return sum + (num * multiplier);
    }
    return sum;
  }, 0);
  
  if (totalValue >= 1000000000) {
    return `$${(totalValue / 1000000000).toFixed(1)}B`;
  } else if (totalValue >= 1000000) {
    return `$${(totalValue / 1000000).toFixed(1)}M`;
  } else if (totalValue >= 1000) {
    return `$${(totalValue / 1000).toFixed(1)}K`;
  }
  return `$${totalValue.toFixed(0)}`;
};

export const blogStats = {
  totalPosts: allBlogPosts.length,
  featuredPosts: getFeaturedPosts().length,
  categories: getAllCategories().length,
  tags: getAllTags().length,
  totalValue: getTotalValueProposition(),
};