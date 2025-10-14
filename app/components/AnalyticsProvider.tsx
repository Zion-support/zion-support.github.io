import React, { useEffect, ReactNode } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
}

interface AnalyticsProviderProps {
  children: ReactNode;
}
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', event, properties);
    // In a real implementation, you would send this to your analytics service
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      (window as unknown as { gtag: (event: string, eventName: string, properties?: Record<string, unknown>) => void }).gtag('event', event, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    console.log('Analytics Identify:', userId, traits);
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      (window as unknown as { gtag: (event: string, config: string, options?: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      });
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Page:', name, properties);
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      (window as unknown as { gtag: (event: string, config: string, options?: Record<string, unknown>) => void }).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: name,
        page_location: window.location.href,
        ...properties
      });
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Load Google Analytics or other analytics scripts here
      console.log('Analytics initialized');
    }
  }, []);

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
