<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb

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
<<<<<<< HEAD
  url?: string
  userAgent?: string
  timestamp?: string
  userId?: string
  sessionId?: string
  component?: string
  action?: string
  stack?: string
}

export interface ErrorReport {
  id: string
  message: string
  stack?: string
  context: ErrorContext
  severity: ErrorSeverity
  resolved: boolean
  createdAt: string
  updatedAt?: string
}

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'

=======
  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
  component?: string;
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

>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
<<<<<<< HEAD
    basic: number
    pro: number
    enterprise: number
  }
  benefits: string[]
  useCases: string[]
  marketPrice: string
  contactInfo: {
    phone: string
    email: string
    website: string
  }
  link: string
}

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user" | "guest"
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
  service: string
}

export interface AnalyticsEvent {
  name: string
  timestamp: number
  properties?: Record<string, string | number | boolean | null>
}

export interface ApiResponse<T = unknown> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

export interface RequestOptions extends globalThis.RequestInit {
  timeout?: number
  retries?: number
}

export interface TestConfig {
  enableMocking: boolean
  enableCoverage: boolean
  enablePerformance: boolean
  enableAccessibility: boolean
}

export interface TestResult {
  name: string
  status: 'passed' | 'failed' | 'skipped'
  duration: number
  error?: string
}

export interface TestSuite {
  name: string
  tests: TestResult[]
  duration: number
  status: 'passed' | 'failed' | 'partial'
}

export interface PerformanceTestMetrics {
  renderTime: number
  memoryUsage: number
  timestamp: string
}

export interface CoverageMetrics {
  statements: number
  branches: number
  functions: number
  lines: number
}

export interface MockConfig {
  delay?: number
  shouldReject?: boolean
  rejectReason?: string
}

export interface ComponentProps {
  children?: React.ReactNode
  className?: string
  id?: string
  'data-testid'?: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: StructuredData
}

export interface StructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  logo?: string
  sameAs?: string[]
}

export interface AccessibilityFeatures {
  enableKeyboardNavigation: boolean
  enableScreenReader: boolean
  enableHighContrast: boolean
  enableReducedMotion: boolean
  enableFocusManagement: boolean
}

export interface PerformanceOptimization {
  enableLazyLoading: boolean
  enableCodeSplitting: boolean
  enableImageOptimization: boolean
  enableCaching: boolean
  enableCompression: boolean
}

export interface SecurityFeatures {
  enableCSP: boolean
  enableHTTPS: boolean
  enableXSSProtection: boolean
  enableCSRFProtection: boolean
  enableContentValidation: boolean
=======
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
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
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
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
}
