export type SearchType = 'all' | 'talent' | 'jobs' | 'projects';

export type ParsedFilters = {
  type: SearchType,
  skills: string[],
  location?: string,
  minBudgetUsd?: number,
  maxBudgetUsd?: number,
  availability?: 'full-time' | 'part-time' | 'contract',
  keywords: string[]
};

function extractBudget(text: string): { minBudgetUsd?: number, maxBudgetUsd?: number } {
  const lower = text.toLowerCase();
  const budgetMatch = lower.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)\s*(?:to|-)?\s*\$?(\d+(?:,\d{3})*(?:\.\d{2})?)?/);
  
  if (budgetMatch) {
    const min = parseFloat(budgetMatch[1].replace(/,/g, ''));
    const max = budgetMatch[2] ? parseFloat(budgetMatch[2].replace(/,/g, '')) : undefined;
    
    return {
      minBudgetUsd: min,
      maxBudgetUsd: max
    };
  }
  
  return {};
}

function extractSkills(text: string): string[] {
  const skills = [
    'javascript', 'typescript', 'react', 'vue', 'angular', 'node.js', 'python', 'java', 'c#', 'php',
    'ruby', 'go', 'rust', 'swift', 'kotlin', 'dart', 'flutter', 'react native', 'next.js', 'nuxt.js',
    'express', 'django', 'flask', 'spring', 'laravel', 'rails', 'asp.net', 'graphql', 'rest api',
    'mongodb', 'postgresql', 'mysql', 'redis', 'elasticsearch', 'aws', 'azure', 'gcp', 'docker',
    'kubernetes', 'terraform', 'jenkins', 'git', 'ci/cd', 'microservices', 'serverless'
  ];
  
  const lower = text.toLowerCase();
  return skills.filter(skill => lower.includes(skill));
}

function extractLocation(text: string): string | null {
  const locationMatch = text.match(/(?:in|at|from)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/);
  return locationMatch ? locationMatch[1] : null;
}

function extractAvailability(text: string): 'full-time' | 'part-time' | 'contract' | undefined {
  const lower = text.toLowerCase();
  if (lower.includes('full-time') || lower.includes('fulltime')) return 'full-time';
  if (lower.includes('part-time') || lower.includes('parttime')) return 'part-time';
  if (lower.includes('contract') || lower.includes('freelance')) return 'contract';
  return undefined;
}

export function parseSearchQuery(query: string): ParsedFilters {
  const keywords = query.split(/\s+/).filter(word => word.length > 2);
  const skills = extractSkills(query);
  const location = extractLocation(query);
  const availability = extractAvailability(query);
  const budget = extractBudget(query);
  
  return {
    type: 'all',
    keywords,
    skills,
    location: location || undefined,
    availability,
    ...budget
  };
}

export const searchAll = (parsed: any, access: any) => {
  // Add search functionality here
  return {
    all: [],
    talent: [],
    jobs: [],
    projects: []
  };
};

export const suggestDidYouMean = (query: string) => {
  // Add did you mean functionality here
  return null;
}