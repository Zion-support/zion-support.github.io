/**
 * Application Types
 * Core type definitions for the Zion Tech Group website
 */

/**
 * Performance Metrics Interface
 * Web Vitals and performance measurement types
 */
export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Performance Report Interface
 */
export interface PerformanceReport {
  webVitals: Partial<PerformanceMetrics>;
  resources: ResourceStats;
  memory: MemoryStats | null;
  timestamp: number;
}

/**
 * Resource Statistics Interface
 */
export interface ResourceStats {
  total: number;
  scripts: number;
  styles: number;
  images: number;
  fonts: number;
}

/**
 * Memory Statistics Interface
 */
export interface MemoryStats {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

/**
 * Layout Shift Interface
 */
export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Performance with Memory Interface
 */
export interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

/**
 * Service Configuration Interface
 */
export interface ServiceConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricing?: {
    starting: number;
    currency: string;
  };
}

/**
 * Blog Post Interface
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  featured: boolean;
  readingTime: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/**
 * Contact Form Interface
 */
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
  consent: boolean;
}

/**
 * API Response Interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: number;
}

/**
 * SEO Metadata Interface
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Navigation Item Interface
 */
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

/**
 * Testimonial Interface
 */
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  avatar?: string;
  featured: boolean;
}

/**
 * Case Study Interface
 */
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  technologies: string[];
  duration: string;
  teamSize: number;
  featured: boolean;
  images: string[];
  publishedAt: string;
}

/**
 * Team Member Interface
 */
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
  expertise: string[];
  featured: boolean;
}

/**
 * FAQ Item Interface
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

/**
 * Newsletter Subscription Interface
 */
export interface NewsletterSubscription {
  email: string;
  name?: string;
  interests: string[];
  subscribedAt: string;
  active: boolean;
}

/**
 * Error Boundary Props Interface
 */
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * Error Boundary State Interface
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Theme Configuration Interface
 */
export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  borderRadius: number;
}

/**
 * Analytics Event Interface
 */
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

/**
 * User Preferences Interface
 */
export interface UserPreferences {
  theme: ThemeConfig;
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
  };
}

/**
 * Utility Types
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * API Endpoint Types
 */
export type ApiEndpoint = 
  | '/api/contact'
  | '/api/newsletter'
  | '/api/analytics'
  | '/api/performance'
  | '/api/health';

/**
 * HTTP Method Types
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Environment Types
 */
export type Environment = 'development' | 'staging' | 'production';

/**
 * Build Configuration Interface
 */
export interface BuildConfig {
  environment: Environment;
  version: string;
  buildTime: string;
  features: {
    analytics: boolean;
    performanceMonitoring: boolean;
    errorReporting: boolean;
    pwa: boolean;
  };
}