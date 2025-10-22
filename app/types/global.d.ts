import React from 'react'

// Global type definitions for the application
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

// Environment variables
declare namespace NodeJS {
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

// Form types
export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  phone?: string
}

export interface NewsletterFormData {
  email: string
}

// Service types
export interface Service {
  id: string
  name: string
  description: string
  category: string
  pricing: {
    basic: number
    pro: number
    enterprise: number
    currency: string
  }
  features: string[]
  benefits: string[]
  useCases: string[]
  technologies: string[]
  demoUrl?: string
  documentationUrl?: string
  apiUrl?: string
  status: 'active' | 'beta' | 'coming-soon'
  launchDate: string
  lastUpdated: string
  icon: string
  gradient: string
  glow: string
  route: string
}

// Performance types
export interface PerformanceMetrics {
  fps: number
  memoryUsage: number
  loadTime: number
  renderTime: number
}

// Analytics types
export interface AnalyticsEvent {
  event_category: string
  event_label: string
  value?: number
}

export {}