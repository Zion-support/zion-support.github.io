export interface RevOpsContent {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
  author: string;
  valueProposition: string;
  highlights: string[];
  metrics: {
    [key: string]: string;
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
    readTime: '20 min read',
    tags: ['RevOps', 'Automation', 'AI', '2025'],
    featured: true,
    content: `
# AI RevOps Automation 2025: 3.2x Pipeline Velocity

Revolutionary AI-powered RevOps automation delivering unprecedented pipeline velocity and ROI.

## Key Features
- 3.2x pipeline velocity improvement
- 127% ROI in Fortune 500 deployments
- End-to-end RevOps automation
- Live scorecards and KPIs
    `,
    author: 'Zion Tech Group',
    valueProposition: '3.2x pipeline velocity, 127% ROI',
    highlights: [
      '3.2x pipeline velocity',
      '127% ROI',
      'End-to-end automation',
      'Live scorecards',
    ],
    metrics: {
      velocity: '3.2x',
      roi: '127%',
      efficiency: '95%',
      accuracy: '99.9%',
    },
  },
  {
    id: 'autonomous-revenue-operations-2025',
    title: 'Autonomous Revenue Operations 2025: Self-Healing Systems',
    description:
      'Self-healing RevOps systems with 99.9% uptime and 85% cost reduction.',
    category: 'RevOps',
    date: '2025-10-02',
    readTime: '18 min read',
    tags: ['RevOps', 'Autonomous', 'Self-Healing', '2025'],
    featured: true,
    content: `
# Autonomous Revenue Operations 2025: Self-Healing Systems

Self-healing RevOps systems delivering unprecedented reliability and cost efficiency.

## Revolutionary Features
- 99.9% uptime with self-healing
- 85% cost reduction
- Autonomous revenue operations
- Predictive maintenance
    `,
    author: 'Zion Tech Group',
    valueProposition: '99.9% uptime, 85% cost reduction',
    highlights: [
      '99.9% uptime',
      '85% cost reduction',
      'Self-healing systems',
      'Predictive maintenance',
    ],
    metrics: {
      uptime: '99.9%',
      costReduction: '85%',
      efficiency: '98%',
      reliability: '99.99%',
    },
  },
];

export const getFeaturedRevOpsContent = () => {
  return octoberNewestRevOpsContent.filter(content => content.featured);
};

export const getBreakingRevOpsContent = () => {
  return octoberNewestRevOpsContent.filter(content =>
    content.tags.includes('Breaking'),
  );
};

export const getAllRevOpsContent = () => {
  return octoberNewestRevOpsContent;
};
