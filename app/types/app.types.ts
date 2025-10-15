<<<<<<< HEAD
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
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  navigation: {
    type: string;
    redirectCount: number;
  };
}

/**
 * Layout Shift Interface
 */
export interface LayoutShift {
  value: number;
  hadRecentInput: boolean;
  sources: Array<{
    node: Element;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }>;
}

/**
 * Error Report Interface
 */
export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: ErrorSeverity;
  resolved: boolean;
  createdAt: string;
}

/**
 * Error Context Interface
 */
export interface ErrorContext {
  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
  componentStack?: string;
  errorBoundary?: string;
}

/**
 * Error Severity Type
 */
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

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
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  featured: boolean;
  published: boolean;
}

/**
 * Service Interface
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    starting: number;
    currency: string;
  };
  category: string;
  featured: boolean;
  active: boolean;
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
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  expertise: string[];
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
  results: string;
  technologies: string[];
  duration: string;
  budget?: string;
  timeline?: string;
  consent: boolean;
  featured: boolean;
  published: boolean;
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
 * API Response Interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
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
 * User Interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
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
  consent: boolean;
}

/**
 * Newsletter Subscription Interface
 */
export interface NewsletterSubscription {
  email: string;
  consent: boolean;
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
 * Button Variants Interface
 */
export interface ButtonVariants {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  loading: boolean;
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
 * Accessibility Features Interface
 */
export interface AccessibilityFeatures {
  highContrast: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  functional: boolean;
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
  surface: string;
  text: string;
  border: string;
  borderRadius: number;
}

/**
 * PWA Features Interface
 */
export interface PWAFeatures {
  installable: boolean;
  offline: boolean;
  pushNotifications: boolean;
  backgroundSync: boolean;
  periodicSync: boolean;
=======
/// Comment

export interface app.types {
  id: string;
  name: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
}