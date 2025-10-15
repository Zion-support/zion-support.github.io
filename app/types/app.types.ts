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
  };
  benefits: string[];
  useCases: string[];
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
  properties?: Record<string, any>;
}

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}