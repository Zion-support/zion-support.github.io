"use client"

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user" | "guest";
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
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  link: string;
}

export interface ContactFormData {
<<<<<<< HEAD
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

export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
  totalBlockingTime: number
}

export interface ErrorContext {
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
=======
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

export type ErrorSeverity = "low" | "medium" | "high" | "critical";
>>>>>>> 2fd0a884c5aaa8069c99fecfcd0ce2f61751a2fb
