export interface RevOpsContent {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content?: string;
  author?: string;
  valueProposition?: string;
  highlights: string[];
  metrics: {
    [key: string]: string;
  };
  icon?: string;
  gradient?: string;
  breaking?: boolean;
  cta?: {
    text: string;
    link: string;
  };
}

export const octoberNewestRevOpsContent: RevOpsContent[] = [
  {
    id: 'ai-revops-automation-2025',
    title: 'AI RevOps Automation 2025: 3.2x Pipeline Velocity',
    description:
      'Revolutionary AI-powered RevOps automation delivering 3.2x pipeline velocity and 127% ROI.',
    category: 'RevOps',
    date: '2025-10-01',
    readTime: '16 min',
    icon: '💰',
    gradient: 'from-emerald-600 to-teal-600',
    featured: true,
    breaking: true,
    tags: ['RevOps', 'Revenue Intelligence', 'AI Automation', 'Sales Optimization'],
    highlights: [
      '127% ROI within first year',
      '89% forecast accuracy (vs 52% traditional)',
      '3.2x pipeline velocity improvement',
      '$127M incremental revenue (Fortune 500 case study)',
      '85% reduction in manual RevOps tasks',
      '4.7x faster response times',
    ],
    metrics: {
      roi: '127%',
      forecastAccuracy: '89%',
      pipelineVelocity: '3.2x',
      revenue: '$127M',
      efficiency: '85%',
    },
    cta: {
      text: 'Read the Complete RevOps Guide',
      link: '/blog/ai-2025-oct-01-autonomous-revenue-operations-revolution',
    },
  },
  {
    id: 'autonomous-revenue-operations-2025',
    title: 'Autonomous Revenue Operations 2025: Self-Healing Systems',
    description: 'Self-healing RevOps systems with 99.9% uptime and 85% cost reduction.',
    category: 'RevOps',
    date: '2025-10-02',
    readTime: '18 min read',
    tags: [
      'RevOps',
      'Autonomous',
      'Self-Healing',
      '2025',
      'Case Study',
      'SaaS',
      'Revenue Operations',
      'Enterprise AI',
    ],
    featured: true,
    breaking: true,
    highlights: [
      '$127M incremental annual revenue',
      '89% forecast accuracy (from 49%)',
      '42% increase in win rates',
      '3.2x pipeline velocity improvement',
      '12-month transformation timeline',
      '704% three-year ROI',
    ],
    metrics: {
      revenue: '$127M',
      accuracy: '89%',
      winRate: '+42%',
      velocity: '3.2x',
      roi: '704%',
    },
  },
];

export const getFeaturedRevOpsContent = () => {
  return octoberNewestRevOpsContent.filter(content => content.featured);
};

export const getBreakingRevOpsContent = () => {
  return octoberNewestRevOpsContent.filter(content => content.tags.includes('Breaking'));
};

export const getAllRevOpsContent = () => {
  return octoberNewestRevOpsContent;
};
