"use client"

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
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
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
  featuredImage?: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  avatar?: string;
  rating: number;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: number;
  featuredImage: string;
  gallery?: string[];
  testimonial?: Testimonial;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: string[];
  experience: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
  limitations?: string[];
  popular: boolean;
  cta: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}
