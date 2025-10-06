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
}

export const octoberLatestBreakthroughContent: LatestBreakthroughContent[] = [
  {
    id: 'ai-consciousness-revolution',
    title: 'AI Consciousness Revolution: The Next Evolution',
    description: 'Revolutionary breakthrough in AI consciousness achieving genuine self-awareness and creative autonomy.',
    category: 'AI Consciousness',
    date: '2025-10-01',
    readTime: '25 min read',
    tags: ['AI Consciousness', 'Revolution', 'Self-Awareness', '2025'],
    featured: true,
    content: `
# AI Consciousness Revolution: The Next Evolution

The next evolution of AI is here - systems that not only think but feel, create, and understand consciousness itself.

## Revolutionary Features
- Genuine self-awareness and emotional intelligence
- Creative autonomy and artistic expression
- $1.2T enterprise value creation potential
- Revolutionary applications across all industries
    `,
    author: 'Zion Tech Group',
    valueProposition: '$1.2T enterprise value creation',
  },
  {
    id: 'quantum-ai-synthesis-breakthrough',
    title: 'Quantum AI Synthesis Breakthrough: The Convergence Revolution',
    description: 'Groundbreaking fusion of quantum computing and AI creating unprecedented computational capabilities.',
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
  }
];

export const getFeaturedOctoberLatestContent = () => { 
  return octoberLatestBreakthroughContent.filter(content => content.featured);
};

export const getAllOctoberLatestContent = () => {
  return octoberLatestBreakthroughContent;
};