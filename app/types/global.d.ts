<<<<<<< HEAD
// Global type declarations

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    __NEXT_DATA__?: any;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL?: string;
      NEXT_PUBLIC_GA_ID?: string;
      NEXT_PUBLIC_SENTRY_DSN?: string;
    }
  }
}

// API Response types
export interface APIResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

// Error types
export interface APIError {
  message: string;
  status?: number;
  code?: string;
}

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'partner';
  createdAt: string;
  updatedAt: string;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
}

export interface NewsletterForm {
  email: string;
  name?: string;
  interests?: string[];
=======
<<<<<<< HEAD
import React from 'react';
// Global type definitions for the application;
declare global {interface Window {}
=======
// Global type definitions for the application
declare global {
    interface Window {
>>>>>>> origin/main
    gtag?: (...args: any[]) => void,
    dataLayer?: any[]}}
}
<<<<<<< HEAD
// Environment variables;
declare namespace NodeJS {interface ProcessEnv {}
    NODE_ENV: 'development' | 'production' | 'test',
=======
// Environment variables
declare namespace NodeJS {
    interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
>>>>>>> origin/main
    NEXT_PUBLIC_GA_ID?: string,
    NEXT_PUBLIC_SITE_URL?: string;}}
}
<<<<<<< HEAD
// Component props interfaces;
export interface BaseComponentProps {className?: string;}
  children?: React.ReactNode;}}
export interface PageProps {}}params: {[key: string]: string ,}searchParams: {[key: string]: string | string[] | undefined ,}}
// API response types;
export interface ApiResponse<T = any> {success: boolean;,
  data?: T;
  error?: string,
  message?: string;}}
// Form types;
export interface ContactFormData {name: string;,}
  email: string;,
  company?: string;
  message: string,
  phone?: string;}}
export interface NewsletterFormData {email: string,}
  name?: string;}}
// Service types;
export interface Service {id: string;,}
  title: string;,
  description: string;,
  icon: string;,
  features: string[],
  benefits: string[],}}
export interface BlogPost {id: string;,}
  title: string;,
  excerpt: string;,
  content: string;,
  slug: string;,
  publishedAt: string;,
  author: string;,
  tags: string[],
  featuredImage?: string;}}
// Navigation types;
export interface NavigationItem {label: string;,}
  href: string,
  children?: NavigationItem[]}}
// Analytics types;
export interface AnalyticsEvent {action: string;,}
  category: string;,
=======
// Component props interfaces
export interface BaseComponentProps {
    className?: string
  children?: React.ReactNode
  }
}
export interface PageProps {}
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
// API response types
export interface ApiResponse<T = any> {
    success: boolean
  data?: T
  error?: string,
  message?: string
  }
}
// Form types
export interface ContactFormData {
    name: string
  email: string
  company?: string
  message: string,
  phone?: string
  }
}
export interface NewsletterFormData {
    email: string,
  name?: string
  }
}
// Service types
export interface Service {
    id: string
  title: string
  description: string
  icon: string
  features: string[],
  benefits: string[]
  }
}
export interface BlogPost {
    id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: string
  author: string
  tags: string[],
  featuredImage?: string
  }
}
// Navigation types
export interface NavigationItem {
    label: string
  href: string,
  children?: NavigationItem[]
  }
}
// Analytics types
export interface AnalyticsEvent {
    action: string
  category: string
>>>>>>> origin/main
  label?: string,
<<<<<<< HEAD
  value?: number;}}
export {}}
=======
  value?: number
  }
}
export {}</T>
// Global type definitions for the application
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[];}
  }
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_GA_ID?: string
    NEXT_PUBLIC_SITE_URL?: string;}
  }
}

// Component props interfaces
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode;}
}

export interface PageProps {;}
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string;}
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  phone?: string;}
}

export interface NewsletterFormData {
  email: string
  name?: string;}
>>>>>>> origin/main
}

// Service types
export interface Service {
<<<<<<< HEAD
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    basic: number;
    pro: number;
    enterprise: number;
  };
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  featuredImage?: string;
}

// Case study types
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  featuredImage?: string;
  publishedAt: string;
}

// Partner types
export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'technology' | 'channel' | 'strategic';
  description: string;
  website: string;
  featured: boolean;
}

// Analytics types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

// Accessibility types
export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  announcePageChanges: boolean;
}

// Theme types
export interface Theme {
  mode: 'light' | 'dark' | 'auto';
  primaryColor: string;
  secondaryColor: string;
}

// Notification types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// Pagination
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Search
export interface SearchResult<T> {
  items: T[];
  pagination: Pagination;
  query: string;
  filters?: Record<string, any>;
}

export {};
=======
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  benefits: string[];}
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: string
  author: string
  tags: string[]
  featuredImage?: string;}
}

// Navigation types
export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[];}
}

// Analytics types
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number;}
}

export {}
>>>>>>> origin/main
>>>>>>> origin/main
