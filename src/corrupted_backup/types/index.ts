export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  published: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default {};