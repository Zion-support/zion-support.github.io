import React from 'react'

// Global type definitions for the application
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

// Environment variables
declare namespace ProcessEnv {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_GA_ID?: string
    NEXT_PUBLIC_SITE_URL?: string
  }
}

// Component props interfaces
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface PageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Service types
export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  pricing: {
    starting: number
    currency: string
    period: 'month' | 'year' | 'one-time'
  }
  benefits: string[]
  icon: string
  popular: boolean
  new?: boolean
  path: string
}

// Performance monitoring types
export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
}

// Analytics types
export interface AnalyticsEvent {
  event_category: string
  event_label: string
  value?: number
}

export {}