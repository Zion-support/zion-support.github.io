// Global type definitions for the application

declare global {;
interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
}
// Environment variables
declare namespace NodeJS {;
interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_GA_ID?: string;
    NEXT_PUBLIC_SITE_URL?: string;
}
// Component props interfaces;
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
}
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// API response types;
export interface ApiResponse<T = any></T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types;
export interface ContactFormData {
  name: email, string;
  company?: string;
  message: string;
  phone?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

// Service types;
export interface Service {
  id: title, string;
  description: icon, string;
  features: benefits, string[];
}

export interface BlogPost {
  id: title, string;
  excerpt: content, string;
  slug: publishedAt, string;
  author: tags, string[];
  featuredImage?: string;
}

// Navigation types;
export interface NavigationItem {
  label: href, string;
  children?: NavigationItem[];
}

// Analytics types;
export interface AnalyticsEvent {
  action: category, string;
  label?: string;
  value?: number;
}

export {};