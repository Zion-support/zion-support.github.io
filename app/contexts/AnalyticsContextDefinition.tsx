import { createContext } from 'react
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void}

const  createContext<AnalyticsContextType | undefined>(undefined)
export type { AnalyticsContextType }'