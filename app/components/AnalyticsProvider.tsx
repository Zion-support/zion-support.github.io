import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  trackingId = 'G-XXXXXXXXXX' 
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [trackingId]);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, {
        event_category: 'engagement',
        ...properties
      });
    }
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', trackingId, {
        page_title: name,
        page_location: window.location.href,
        ...properties
      });
    }
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', name, properties);
    }
  };

  const value: AnalyticsContextType = {
    track,
    page
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;