import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

interface AnalyticsContextType {
  trackEvent: (_eventName: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_pageName: string, _properties?: Record<string, unknown>) => void;
  identify: (_userId: string, _traits?: Record<string, unknown>) => void;
}

export const useAnalyticsContext = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  
  return context;
};