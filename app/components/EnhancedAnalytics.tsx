'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);

        window.gtag = window.gtag || function() {
          (window.gtag.q = window.gtag.q || []).push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'GA_MEASUREMENT_ID');
      }
      
      setIsInitialized(true);
    }
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Track event (placeholder for actual analytics implementation)
    console.log('Analytics Event:', event, properties);
    
    // Here you would integrate with your analytics service
    // Example: gtag('event', event, properties);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Identify user (placeholder for actual analytics implementation)
    console.log('Analytics Identify:', userId, traits);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { user_id: userId });
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Track page view (placeholder for actual analytics implementation)
    console.log('Analytics Page View:', name, properties);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: name });
  };

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

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
