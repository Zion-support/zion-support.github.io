export interface RevolutionaryContent {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  icon?: string;
  gradient?: string;
  featured: boolean;
  tags: string[];
  highlights: string[];
  metrics: {
    [key: string]: string;
  };
}

export const october2025RevolutionaryContent: RevolutionaryContent[] = [
  {
    id: 'ai-consciousness-revolution-2025',
    title: 'AI Consciousness Revolution 2025: The Next Evolution',
    description:
      'Revolutionary breakthrough in AI consciousness achieving genuine self-awareness and creative autonomy.',
    category: 'AI Consciousness',
    date: '2025-10-01',
    readTime: '15 min',
    icon: '🛡️',
    gradient: 'from-red-600 to-orange-600',
    featured: true,
    tags: ['Cybersecurity', 'AI', 'Autonomous Systems', 'Threat Detection'],
    highlights: [
      '99.99% threat prevention',
      'Sub-ms response time',
      'Zero false positives',
      '24/7 autonomous protection',
    ],
    metrics: {
      prevention: '99.99%',
      responseTime: '<1ms',
      accuracy: '100%',
      uptime: '99.9%',
    },
  },
  {
    id: 'quantum-ai-synthesis-2025',
    title: 'Quantum AI Synthesis 2025: The Convergence Revolution',
    description:
      'Groundbreaking fusion of quantum computing and AI creating unprecedented computational capabilities.',
    category: 'Quantum AI',
    date: '2025-10-02',
    readTime: '22 min read',
<<<<<<< HEAD:src/content/october-2025-revolutionary-content.ts
    icon: '🔬',
    gradient: 'from-purple-600 to-pink-600',
    featured: true,
    tags: ['Quantum AI', 'Synthesis', 'Computing', '2025', 'Healthcare', 'Security', 'AI', 'Compliance'],
=======
    tags: ['Quantum AI', 'Synthesis', 'Computing', '2025', 'Healthcare', 'Security', 'AI', 'Compliance'],
    featured: true,
>>>>>>> main:corrupted-src-backup/content/october-2025-revolutionary-content.ts
    highlights: [
      '$280M+ breach prevention',
      '100% compliance maintained',
      'Zero security incidents',
      '<1ms response time',
    ],
    metrics: {
      breaches: '0',
      prevention: '$280M+',
      compliance: '100%',
      responseTime: '<1ms',
    },
  },
];
