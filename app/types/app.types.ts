export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
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
  }
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  }
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

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

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

export interface ErrorInfo {
  componentStack: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export interface LoadingState {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'auto';
  primaryColor: string;
  secondaryColor: string;
}

export interface AppConfig {
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
  features: {
    analytics: boolean;
    accessibility: boolean;
    performance: boolean;
  };
}
