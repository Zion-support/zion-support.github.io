export interface LatestBreakthroughContent {
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
  icon?: string;
  gradient?: string;
  highlights?: string[];
  metrics?: {
    value: string;
    accuracy: string;
    downtime: string;
    market: string;
  };
}

export const octoberLatestBreakthroughContent: LatestBreakthroughContent[] = [
  {
    id: 'ai-consciousness-revolution',
    title: 'AI Consciousness Revolution: The Next Evolution',
    description:
      'Revolutionary breakthrough in AI consciousness achieving genuine self-awareness and creative autonomy.',
    category: 'AI Consciousness',
    date: '2025-10-01',
    readTime: '12 min',
    icon: '🎯',
    gradient: 'from-blue-600 to-indigo-600',
    featured: true,
    tags: ['Digital Twins', 'AI', 'Enterprise', 'IoT', 'Predictive Analytics'],
    highlights: [
      '$850M success story from Fortune 100 energy company',
      '99.2% accuracy in failure prediction',
      '89% reduction in unplanned downtime',
      '$47B in aggregate business value created',
    ],
    metrics: {
      value: '$850M',
      accuracy: '99.2%',
      downtime: '89%',
      market: '$47B',
    },
  },
  {
    id: 'quantum-ai-synthesis-breakthrough',
    title: 'Quantum AI Synthesis Breakthrough: The Convergence Revolution',
    description:
      'Groundbreaking fusion of quantum computing and AI creating unprecedented computational capabilities.',
    category: 'Quantum AI',
    date: '2025-10-02',
    readTime: '22 min read',
    tags: ['Quantum AI', 'Synthesis', 'Breakthrough', '2025'],
    featured: true,
    content: `
# Quantum AI Synthesis Breakthrough: The Convergence Revolution

The convergence of quantum computing and artificial intelligence opens new frontiers in computational capability.

## Revolutionary Capabilities
- Quantum-enhanced machine learning algorithms
- Exponential speedup in complex problem solving
- Unprecedented computational efficiency
- New paradigms in AI development
    `,
    author: 'Zion Tech Group',
    valueProposition: 'Exponential computational capabilities',
  },
];

export const getFeaturedOctoberLatestContent = () => {
  return octoberLatestBreakthroughContent.filter(content => content.featured);
};

export const getAllOctoberLatestContent = () => {
  return octoberLatestBreakthroughContent;
};
