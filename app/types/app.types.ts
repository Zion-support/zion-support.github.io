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
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
}

/**
 * Memory Usage Interface
 */
export interface MemoryUsage {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

/**
 * Layout Shift Interface
 */
export interface LayoutShift {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
}

/**
 * Pricing Interface
 */
export interface Pricing {
  basic: number;
  pro: number;
  enterprise: number;
  currency: string;
}

/**
 * Service Interface
 */
export interface Service {
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
  pricing: Pricing;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

/**
 * SEO Data Interface
 */
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, any>;
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
 * Team Member Interface
 */
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar?: string;
  featured: boolean;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  expertise: string[];
}

/**
 * Project Interface
 */
export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
  active: boolean;
}

/**
 * Contact Form Interface
 */
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
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
 * Button Props Interface
 */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Analytics Event Interface
 */
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

/**
 * Accessibility Options Interface
 */
export interface AccessibilityOptions {
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableKeyboardNavigation: boolean;
  enableFocusManagement: boolean;
  enableScreenReaderSupport: boolean;
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
 * Theme Interface
 */
export interface Theme {
  mode: 'light' | 'dark';
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
  radius: number;
}