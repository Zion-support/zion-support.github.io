export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user" | "guest";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href: string;
  category: "ai" | "it" | "consulting";
  features: string[];
  pricing?: {
    starting: number;
    currency: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
  service?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client?: string;
  year: number;
  link?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}

export interface AnalyticsEvent {
  name: string;
  properties: Record<string, any>;
  timestamp: number;
}

export interface PerformanceData {
  url: string;
  loadTime: number;
  timestamp: number;
  userAgent: string;
}

export interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: number;
  url: string;
  userAgent: string;
}