<<<<<<< HEAD
<<<<<<< HEAD
"use client";

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-778a
=======
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user" | "guest";
}

export interface Service {
<<<<<<< HEAD
  id: string,
      title: string,
      description: string,
      shortDescription: string,
      icon: string,
      features: string[  ];
=======
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
<<<<<<< HEAD
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
  company: string;
  message: string;
  service: string;
}

export interface AnalyticsEvent {
  name: string;
  timestamp: number;
  properties?: Record<string, string | number | boolean | null>;
}

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export interface ErrorContext {
  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
  component?: string;
  action?: string;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: ErrorSeverity;
  resolved: boolean;
  createdAt: string;
}

export type ErrorSeverity = "low" | "medium" | "high" | "critical";
=======
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  service?: string;
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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featuredImage?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
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
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlowConnection: boolean;
}
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
