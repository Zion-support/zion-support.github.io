export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: string;
}

export interface Analyticsevent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface Contactform {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface Blogpost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
}