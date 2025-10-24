"use client"

export interface User {
  
}

  id: strin,g;
  email: strin,g;
  name: strin,g;
  role: "admin" | "user" | "guest,"
}

export interface Service {
  
}

  id: strin,g;
  title: strin,g;
  description: strin,g;
  shortDescription: strin,g;
  icon: strin,g;
  features: string[]
  pricing:  ,{
    basic: numbe,r;
    pro: numbe,r;
    enterprise: numbe,r;
  }

  benefits: string[]
  useCases: string[]
  marketPrice: strin,g;
  contactInfo:  ,{
    phone: strin,g;
    email: strin,g;
    website: strin,g;
  }

  link: strin,g;
}

export interface ContactFormData {
  
}

  name: strin,g;
  email: strin,g;
  company: strin,g;
  message: strin,g;
  service: strin,g;
  phone?: string;
  budget?: string;
  timeline?: string;
}

export interface AnalyticsEvent {
  
}

  name: strin,g;
  timestamp: numbe,r;
  properties?: Record<string, string | number | boolean | null>
    </string>
}

export interface PerformanceMetrics {
  
}

  loadTime: numbe,r;
  firstContentfulPaint: numbe,r;
  largestContentfulPaint: numbe,r;
  cumulativeLayoutShift: numbe,r;
  firstInputDelay: numbe,r;
}

export interface ErrorContext {
  
}

  url?: string;
  userAgent?: string;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
  component?: string;
  action?: string;
}

export interface ErrorReport {
  
}

  id: strin,g;
  message: strin,g;
  stack?: string;
  context: ErrorContex,t;
  severity: ErrorSeverit,y;
  resolved: boolea,n;
  createdAt: strin,g;
}

export type ErrorSeverity = "low" | "medium" | "high" | "critical"