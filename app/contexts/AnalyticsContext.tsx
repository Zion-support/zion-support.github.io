'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Initialize analytics
    setIsEnabled(true);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    
    console.log('Analytics Event:', eventName, properties);
    
    // In a real implementation, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, properties?: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, eventName: string, properties?: Record<string, unknown>) => void }).gtag('event', eventName, properties);
    }
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    
    console.log('Page View:', pageName);
    
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, configId: string, config: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, configId: string, config: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const setUser = (newUserId: string, properties?: Record<string, unknown>) => {
    setUserId(newUserId);
    trackEvent('user_identified', { userId: newUserId, ...properties });
  };

  const value = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;
