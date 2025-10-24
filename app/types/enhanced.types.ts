<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-778a
=======
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
// Enhanced type definitions for better type safety
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  firstMeaningfulPaint: number;
}

export interface ErrorContext {
  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
  component?: string;
<<<<<<< HEAD
  action?: string;
  stack?: string;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: ErrorSeverity;
  resolved: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

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
  category: 'ai' | 'it' | '5g' | 'blockchain' | 'iot';
  tags: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  preferences?: UserPreferences;
  createdAt: string;
  lastLogin?: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: boolean;
  analytics: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
  phone?: string;
  budget?: string;
  timeline?: string;
}

export interface AnalyticsEvent {
  name: string;
  timestamp: number;
  properties?: Record<string, string | number | boolean | null>;
  userId?: string;
  sessionId?: string;
=======
  errorBoundary?: string;
  stackTrace?: string;
}

export interface AccessibilityMetrics {
  score: number;
  issues: AccessibilityIssue[];
  recommendations: string[];
}

export interface AccessibilityIssue {
  id: string;
  severity: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  helpUrl?: string;
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
<<<<<<< HEAD
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: Record<string, unknown>;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  submenu?: NavigationItem[];
  external?: boolean;
}

export interface PerformanceConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableBundleAnalysis: boolean;
  enableServiceWorker: boolean;
}

export interface AccessibilityConfig {
  enableKeyboardNavigation: boolean;
  enableScreenReader: boolean;
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableFocusIndicators: boolean;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface FormState<T = Record<string, unknown>> {
  values: T;
  errors: ValidationError[];
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface LoadingProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (_value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
}
=======
  canonicalUrl?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
}

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, unknown>;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  accessibility: {
    highContrast: boolean;
    reducedMotion: boolean;
    screenReader: boolean;
  };
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface SearchParams {
  query: string;
  filters?: Record<string, unknown>;
  pagination?: PaginationParams;
}

export interface CacheConfig {
  ttl: number;
  maxSize: number;
  strategy: 'lru' | 'fifo' | 'ttl';
}

export interface FeatureFlag {
  name: string;
  enabled: boolean;
  description?: string;
  rolloutPercentage?: number;
  targetUsers?: string[];
}
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
