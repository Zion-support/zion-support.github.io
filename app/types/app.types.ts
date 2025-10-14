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

export interface Analytics Event {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface Contact Form {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface Blog Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  published At: string;
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

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}