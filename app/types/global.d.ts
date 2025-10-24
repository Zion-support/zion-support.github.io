// Global type definitions for the application

declare global {
  interface Window {
<<<<<<< HEAD
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_GA_ID?: string;
    NEXT_PUBLIC_SITE_URL?: string;
=======
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
  }
}

// Component props interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
  params: { [key: string]: string ,};
  searchParams: { [key: string]: string | string[] | undefined ,};
}

// API response types
<<<<<<< HEAD
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
=======
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: string;
  author: string;
  tags: string[];
  featuredImage?: string;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// Analytics types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export {};