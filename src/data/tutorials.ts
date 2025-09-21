export interface Tutorial {
  id: string,
  title: string,
  description: string,
  duration: string,
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  category: string}

export const TUTORIALS: Tutorial[] = [
  {
    id: '1',
    title: 'Getting Started with AI',
    description: 'Learn the basics of artificial intelligence',
    duration: '30 minutes',
    difficulty: 'beginner',
    category: 'AI'
  }
];