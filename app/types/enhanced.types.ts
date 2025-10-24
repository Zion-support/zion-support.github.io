import React from 'react';
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
  url?: string
  userAgent?: string
  timestamp?: string
  userId?: string
  sessionId?: string
  component?: string
  action?: string
  stack?: string
}
  id: string
  message: string
  stack?: string
  context: ErrorContext
  severity: ErrorSeverity
  resolved: boolean
  createdAt: string
  updatedAt?: string
}
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
  category: 'ai' | 'it' | '5g' | 'blockchain' | 'iot'
  tags: string[]
}
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'guest'
  preferences?: UserPreferences
  createdAt: string
  lastLogin?: string
}
  theme: 'light' | 'dark' | 'auto'
  language: string
  notifications: boolean
  analytics: boolean
}
  name: string
  email: string
  company: string
  message: string
  service: string
  phone?: string
  budget?: string
  timeline?: string
}
  name: string
  timestamp: number
  properties?: Record<string, string | number | boolean | null>
  userId?: string
  sessionId?: string
}
  title: string
  description: string
  keywords: string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  structuredData?: Record<string, unknown>
}
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  submenu?: NavigationItem[]
  external?: boolean
}
  enableLazyLoading: boolean
  enablePreloading: boolean
  enableCodeSplitting: boolean
  enableImageOptimization: boolean
  enableBundleAnalysis: boolean
  enableServiceWorker: boolean
}
  enableKeyboardNavigation: boolean
  enableScreenReader: boolean
  enableHighContrast: boolean
  enableReducedMotion: boolean
  enableFocusIndicators: boolean
}
// Utility types
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
// API Response types
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: string
}
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
// Form validation types
  field: string
  message: string
  code: string
}
  values: T
  errors: ValidationError[]
  touched: Record<keyof T, boolean>
  isSubmitting: boolean
  isValid: boolean
}
// Component props types
  className?: string
  children?: React.ReactNode
  id?: string
  'data-testid'?: string
}
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'white'
  text?: string
}
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'search'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
  disabled?: boolean
  required?: boolean
  error?: string
  label?: string
}