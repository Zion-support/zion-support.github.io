interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void
  identify: (userId: string, traits?: Record<string, any>) => void
  page: (name: string, properties?: Record<string, any>) => void}
const AnalyticsContext  = createContext<AnalyticsContextType | undefined>(undefined)
interface AnalyticsProviderProps {
  children: ReactNode}
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track  = (event: string, properties?: Record<string, any>) => {// Analytics tracking implementation
    console.log('Analytics Event:'
    if (typeof window !== 'undefined'
      (window as any).gtag('event'
    console.log('Analytics Identify:'
    if (typeof window !== 'undefined'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID'
    console.log('Analytics Page:'
    if (typeof window !== 'undefined'
      (window as any).gtag('config', 'GA_MEASUREMENT_ID'
    if (typeof window !== 'undefined'
      console.log('Analytics initialized'
    throw new Error('useAnalytics must be used within an AnalyticsProvider'
import React from '
import SEOHead from '