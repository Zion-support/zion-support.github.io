import { createContext } from 'react
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void}

<<<<<<< HEAD
const  createContext<AnalyticsContextType | undefined>(undefined);
export type { AnalyticsContextType }
=======
const  createContext<AnalyticsContextType | undefined>(undefined)
export type { AnalyticsContextType }'
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
