
<<<<<<< HEAD
export type AccessLevel = 'public' | 'private' | 'admin';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  rating?: number;
  price?: number;
  location?: string;
  skills?: string[];
  keywords?: string[];
}

export interface SearchResults {
  all: SearchResult[];
  talent: SearchResult[];
  jobs: SearchResult[];
  projects: SearchResult[];
}

export interface SearchFilters {
  keywords?: string[];
  skills?: string[];
  location?: string;
  type?: string;
  status?: string;
  minRating?: number;
  maxRating?: number;
  priceRange?: {
    min?: number;
    max?: number;
  };
}

// Mock data for search results
const mockTalent: SearchResult[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    description: 'Experienced React developer with 5+ years of experience',
    type: 'talent',
    rating: 4.8,
    price: 75,
    location: 'Remote',
    skills: ['react', 'javascript', 'typescript', 'node'],
    keywords: ['frontend', 'web', 'ui']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    description: 'Full stack developer specializing in modern web technologies',
    type: 'talent',
    rating: 4.6,
    price: 65,
    location: 'New York',
    skills: ['react', 'node', 'python', 'postgresql'],
    keywords: ['fullstack', 'web', 'api']
  }
];

const mockJobs: SearchResult[] = [
  {
    id: '3',
    title: 'Frontend Developer Position',
    description: 'Looking for a skilled frontend developer to join our team',
    type: 'job',
    rating: 4.5,
    price: 80000,
    location: 'San Francisco',
    skills: ['react', 'javascript', 'css'],
    keywords: ['frontend', 'web', 'ui']
  }
];

const mockProjects: SearchResult[] = [
  {
    id: '4',
    title: 'E-commerce Website',
    description: 'Build a modern e-commerce website with React and Node.js',
    type: 'project',
    rating: 4.7,
    price: 15000,
    location: 'Remote',
    skills: ['react', 'node', 'mongodb'],
    keywords: ['ecommerce', 'web', 'fullstack']
  }
];

export function searchAll(filters: SearchFilters, access: AccessLevel): SearchResults {
  const allResults = [...mockTalent, ...mockJobs, ...mockProjects];
  
  let filteredResults = allResults;
  
  // Apply keyword filter
  if (filters.keywords && filters.keywords.length > 0) {
    filteredResults = filteredResults.filter(result => {
      const searchText = `${result.title} ${result.description} ${(result.skills || []).join(' ')} ${(result.keywords || []).join(' ')}`.toLowerCase();
      return filters.keywords!.some(keyword => searchText.includes(keyword.toLowerCase()));
    });
  }
  
  // Apply skills filter
  if (filters.skills && filters.skills.length > 0) {
    filteredResults = filteredResults.filter(result => {
      return filters.skills!.some(skill => 
        (result.skills || []).some(resultSkill => 
          resultSkill.toLowerCase().includes(skill.toLowerCase())
        )
      );
    });
  }
  
  // Apply location filter
  if (filters.location) {
    filteredResults = filteredResults.filter(result => 
      result.location?.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }
  
  // Apply type filter
  if (filters.type) {
    filteredResults = filteredResults.filter(result => 
      result.type === filters.type
    );
  }
  
  // Apply rating filter
  if (filters.minRating !== undefined) {
    filteredResults = filteredResults.filter(result => 
      (result.rating || 0) >= filters.minRating!
    );
  }
  
  if (filters.maxRating !== undefined) {
    filteredResults = filteredResults.filter(result => 
      (result.rating || 0) <= filters.maxRating!
    );
  }
  
  // Apply price range filter
  if (filters.priceRange) {
    filteredResults = filteredResults.filter(result => {
      if (result.price === undefined) return true;
      if (filters.priceRange!.min !== undefined && result.price < filters.priceRange!.min) return false;
      if (filters.priceRange!.max !== undefined && result.price > filters.priceRange!.max) return false;
      return true;
    });
  }
  
  return {
    all: filteredResults,
    talent: filteredResults.filter(r => r.type === 'talent'),
    jobs: filteredResults.filter(r => r.type === 'job'),
    projects: filteredResults.filter(r => r.type === 'project')
  };
}

export function suggestDidYouMean(query: string): string[] {
  // Simple suggestion logic
  const suggestions: string[] = [];
  
  if (query.includes('react')) {
    suggestions.push('javascript', 'typescript', 'node');
  }
  
  if (query.includes('python')) {
    suggestions.push('django', 'flask', 'fastapi');
  }
  
  if (query.includes('frontend')) {
    suggestions.push('ui', 'ux', 'design');
  }
  
  return suggestions.slice(0, 3); // Return max 3 suggestions


}

:utils/search/filter.ts
// Search filter utilities
export const filterResults = (results: any[], filters: any) => {
  // Add search filtering functionality here;
  return results;
}
export const sortResults = (results: any[], sortBy: string) => {
  // Add search sorting functionality here;
  return results;
};
:backup-problematic-files/utils/search/filter.ts
import type { ParsedFilters } from './parser',;
import { TALENT_PROFILES } from '../../data/talent',;
import type { TalentProfile } from '../../data/talent',;
export type AccessLevel = 'public' | 'member' | 'admin',;
export type SearchResult = {;
  type: 'talent' | 'job' | 'project',;
  id: string,;
  slug?: string,;
  title: string,;
  subtitle?: string,;
  location?: string,;
  tags: string[],;
  hourlyRateUsd?: number,;
  availability?: 'full-time' | 'part-time' | 'contract',;
  verified?: boolean,;
  visibility?: AccessLevel,;
  description?: string,;
  relevance: number;
},;
function computeRelevanceScore(text: string, keywords: string[], weight = 1): number {;
  if (!keywords.length) return 0,;
  const lower = text.toLowerCase(),;
  let score = 0,;
  for (const k of keywords) {;
    if (lower.includes(k.toLowerCase())) score += 1 * weight;
  }
  return score;
}
;
function computeSkillOverlap(skills: string[], wanted: string[]): number {;
  const set = new Set(skills.map((s) => s.toLowerCase())),;
  let score = 0,;
  for (const w of wanted) if (set.has(w.toLowerCase())) score += 2,;
  return score;
}
;
function budgetScore(candidate?: number, min?: number, max?: number): number {;
  if (!candidate) return 0,;
  let score = 0,;
  if (max && candidate <= max) score += 1.5,;
  if (min && candidate >= min) score += 0.5,;
  return score;
}
;
function availabilityMatches(candidate?: string, requested?: string): boolean {;
  if (!requested) return true,;
  if (!candidate) return false,;
  return candidate.toLowerCase() === requested.toLowerCase();
}
;
function passesRls(visibility: AccessLevel | undefined, access: AccessLevel): boolean {;
  const level = visibility || 'public',;
  const order: AccessLevel[] = ['publicmemberadmin'],;
  return order.indexOf(access) >= order.indexOf(level);
}
;
export function searchAll(filters: ParsedFilters, access: AccessLevel = 'public'): { all: SearchResult[], talent: SearchResult[], jobs: SearchResult[], projects: SearchResult[] } {;
  const talent: SearchResult[] = TALENT_PROFILES;
    .filter((p) => availabilityMatches(p.availability, filters.availability));
    .filter((p) => {;
      if (filters.location) return p.location.toLowerCase().includes(filters.location.toLowerCase()),;
      return true;
    });
    .filter((p) => {;
      if (filters.minBudgetUsd || filters.maxBudgetUsd) {;
        if (filters.minBudgetUsd && p.hourlyRateUsd < filters.minBudgetUsd) return false,;
        if (filters.maxBudgetUsd && p.hourlyRateUsd > filters.maxBudgetUsd) return false;
      }
      return true;
    });
    .map<SearchResult>((p) => {;
      const skillScore = computeSkillOverlap(p.skills, filters.skills),;
      const textScore = computeRelevanceScore(`${p.name} ${p.title} ${p.bio}`, filters.keywords, 0.8),;
      const priceScore = budgetScore(p.hourlyRateUsd, filters.minBudgetUsd, filters.maxBudgetUsd),;
      const relevance = skillScore + textScore + priceScore,;
      return {;
        type: 'talent',;
        id: p.slug,;
        slug: p.slug,;
        title: p.name,;
        subtitle: p.title,;
        location: p.location,;
        tags: p.skills,;
        hourlyRateUsd: p.hourlyRateUsd,;
        availability: p.availability,;
        verified: true,;
        visibility: 'public',;
        description: p.bio,;
        relevance}
    });
    .filter((r) => passesRls(r.visibility, access));
    .sort((a, b) => b.relevance - a.relevance),;
  const jobs: SearchResult[] = [],;
  const projects: SearchResult[] = [],;
  const all = [...talent, ...jobs, ...projects].sort((a, b) => b.relevance - a.relevance),;
  return { all, talent, jobs, projects }
}
;
export function suggestDidYouMean(query: string): string | null {;
  // naive suggestion: if user says devops latam -> normalize to "DevOps jobs in LATAM";
  const q = query.toLowerCase(),;
  if (q.includes('devops') && q.includes('latam') && !q.includes('job')) return 'DevOps jobs in LATAM';
  if (q.includes('react') && q.includes('under') && q.match(/\d/)) return 'React developers under $' + (q.match(/\d{2,3}/)?.[0] || '50') + '/hr';
  return null;
=======
};

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type AccessLevel = 'public' | 'private' | 'admin';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  rating?: number;
  price?: number;
  location?: string;
  skills?: string[];
  keywords?: string[];
}

export interface SearchResults {
  all: SearchResult[];
  talent: SearchResult[];
  jobs: SearchResult[];
  projects: SearchResult[];
}

export interface SearchFilters {
  keywords?: string[];
  skills?: string[];
  location?: string;
  type?: string;
  status?: string;
  minRating?: number;
  maxRating?: number;
  priceRange?: {
    min?: number;
    max?: number;
  };
}

// Mock data for search results
const mockTalent: SearchResult[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    description: 'Experienced React developer with 5+ years of experience',
    type: 'talent',
    rating: 4.8,
    price: 75,
    location: 'Remote',
    skills: ['react', 'javascript', 'typescript', 'node'],
    keywords: ['frontend', 'web', 'ui']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    description: 'Full stack developer specializing in modern web technologies',
    type: 'talent',
    rating: 4.6,
    price: 65,
    location: 'New York',
    skills: ['react', 'node', 'python', 'postgresql'],
    keywords: ['fullstack', 'web', 'api']
  }
];

const mockJobs: SearchResult[] = [
  {
    id: '3',
    title: 'Frontend Developer Position',
    description: 'Looking for a skilled frontend developer to join our team',
    type: 'job',
    rating: 4.5,
    price: 80000,
    location: 'San Francisco',
    skills: ['react', 'javascript', 'css'],
    keywords: ['frontend', 'web', 'ui']
  }
];

const mockProjects: SearchResult[] = [
  {
    id: '4',
    title: 'E-commerce Website',
    description: 'Build a modern e-commerce website with React and Node.js',
    type: 'project',
    rating: 4.7,
    price: 15000,
    location: 'Remote',
    skills: ['react', 'node', 'mongodb'],
    keywords: ['ecommerce', 'web', 'fullstack']
  }
];

export function searchAll(filters: SearchFilters, access: AccessLevel): SearchResults {
  const allResults = [...mockTalent, ...mockJobs, ...mockProjects];
  
  let filteredResults = allResults;
  
  // Apply keyword filter
  if (filters.keywords && filters.keywords.length > 0) {
    filteredResults = filteredResults.filter(result => {
      const searchText = `${result.title} ${result.description} ${(result.skills || []).join(' ')} ${(result.keywords || []).join(' ')}`.toLowerCase();
      return filters.keywords!.some(keyword => searchText.includes(keyword.toLowerCase()));
    });
  }
  
  // Apply skills filter
  if (filters.skills && filters.skills.length > 0) {
    filteredResults = filteredResults.filter(result => {
      return filters.skills!.some(skill => 
        (result.skills || []).some(resultSkill => 
          resultSkill.toLowerCase().includes(skill.toLowerCase())
        )
      );
    });
  }
  
  // Apply location filter
  if (filters.location) {
    filteredResults = filteredResults.filter(result => 
      result.location?.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }
  
  // Apply type filter
  if (filters.type) {
    filteredResults = filteredResults.filter(result => 
      result.type === filters.type
    );
  }
  
  // Apply rating filter
  if (filters.minRating !== undefined) {
    filteredResults = filteredResults.filter(result => 
      (result.rating || 0) >= filters.minRating!
    );
  }
  
  if (filters.maxRating !== undefined) {
    filteredResults = filteredResults.filter(result => 
      (result.rating || 0) <= filters.maxRating!
    );
  }
  
  // Apply price range filter
  if (filters.priceRange) {
    filteredResults = filteredResults.filter(result => {
      if (result.price === undefined) return true;
      if (filters.priceRange!.min !== undefined && result.price < filters.priceRange!.min) return false;
      if (filters.priceRange!.max !== undefined && result.price > filters.priceRange!.max) return false;
      return true;
    });
  }
  
  return {
    all: filteredResults,
    talent: filteredResults.filter(r => r.type === 'talent'),
    jobs: filteredResults.filter(r => r.type === 'job'),
    projects: filteredResults.filter(r => r.type === 'project')
  };
}

export function suggestDidYouMean(query: string): string[] {
  // Simple suggestion logic
  const suggestions: string[] = [];
  
  if (query.includes('react')) {
    suggestions.push('javascript', 'typescript', 'node');
  }
  
  if (query.includes('python')) {
    suggestions.push('django', 'flask', 'fastapi');
  }
  
  if (query.includes('frontend')) {
    suggestions.push('ui', 'ux', 'design');
  }
  
  return suggestions.slice(0, 3); // Return max 3 suggestions
<<<<<<< HEAD
main:utils/search/filter.ts
:backup-problematic-files/utils/search/filter.ts
}
}
:backup-problematic-files/utils/search/filter.ts
=======


}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
