import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
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
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Google Analytics 4
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href
        });

        (window as any).gtag = gtag;
      }
    };

    initGoogleAnalytics();
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', event, properties);
      }

      // Custom analytics
      console.log('Analytics Event:', event, properties);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }

      // Custom analytics
      console.log('Analytics Page:', name, properties);
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
          user_id: userId,
          ...traits
        });
      }

      // Custom analytics
      console.log('Analytics Identify:', userId, traits);
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};