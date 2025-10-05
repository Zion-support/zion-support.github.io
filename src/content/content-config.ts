/**
 * Content Configuration
 * Centralized configuration for all content types
 */

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
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    starting: string;
  };
  features: string[];
  metrics?: Array<{
    value: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
  };
  icon: string;
  featured?: boolean;
  slug: string;
}

export interface Notification {
  id: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  showClose: boolean;
  autoHide: boolean;
  hideAfter: number;
  active: boolean;
}

/**
 * Content configuration settings
 */
export const contentConfig = {
  blog: {
    postsPerPage: 10,
    featuredPostsCount: 3,
    categories: ["AI & Automation", "Data Analytics", "Software Solutions", "Digital Transformation"]
  },
  caseStudies: {
    featuredCount: 2,
    industries: ["Manufacturing", "Retail", "Healthcare", "Finance", "Technology"]
  },
  services: {
    featuredCount: 6,
    categories: ["AI Solutions", "Data Analytics", "Cloud Services", "Consulting"]
  }
};

export default contentConfig;