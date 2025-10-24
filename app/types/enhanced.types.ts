import React from 'react'

// Enhanced type definitions for better type safety
export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
  timeToInteractive: number
  firstMeaningfulPaint: number
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

export interface Service {
  id: string
  title: string
  description: string
  shortDescription: string
  icon: string
  features: string[]
  pricing: {
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
}
