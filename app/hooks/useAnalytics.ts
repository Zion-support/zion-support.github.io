import { AnalyticsContext } from '../contexts/AnalyticsContext';
import { useContext } from 'react';
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}
