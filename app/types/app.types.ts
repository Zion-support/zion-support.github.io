export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

export interface Service {
  id: string
  name: string
  description: string
  category: string
  features: string[]
  pricing: {
    starter: number
    professional: number
    enterprise: number
  }
  icon: string
}

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}