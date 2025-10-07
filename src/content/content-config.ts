export interface BlogPost { 
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface CaseStudy { 
  id: string;
  title: string;
  excerpt: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface Service { 
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    starting: string;
    popular?: boolean;
  };
  features: string[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export const getRecentContent = (limit: number = 3) => { 
  const allContent = [
    ...blogPosts.map(post => ({ ...post, type: 'blog' as const })),
    ...caseStudies.map(study => ({ ...study, type: 'case-study' as const })),
    ...services.map(service => ({ ...service, type: 'service' as const })),
  ];
  
  return allContent
    .sort((a, b) => { 
      const aTime = 'date' in a ? new Date((a as { date: string }).date).getTime() : 0;
      const bTime = 'date' in b ? new Date((b as { date: string }).date).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, limit);
};

// Import the actual data
import { blogPosts } from './blog-posts';
import { caseStudies } from './case-studies';
import { services } from './services';