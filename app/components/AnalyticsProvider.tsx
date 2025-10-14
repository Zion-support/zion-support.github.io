import React, { createContext, ReactNode } from 'react';
import { trackEvent, trackPageView } from '../utils/analytics';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
<<<<<<< HEAD
=======
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    // Basic analytics tracking
    console.log('Analytics Event:', eventName, properties);
    
    // In a real implementation, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, ...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (command: string, ...args: unknown[]) => void }).gtag('event', eventName, properties);
    }
  };

  const trackPageView = (pageName: string) => {
    console.log('Page View:', pageName);
    
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, ...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (command: string, ...args: unknown[]) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
  const value = {
    trackEvent,
    trackPageView,
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export default AnalyticsProvider;