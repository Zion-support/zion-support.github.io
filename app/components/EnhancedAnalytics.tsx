'use client';
import React, { createContext, useContext } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
<<<<<<< HEAD
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null;
=======
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
<<<<<<< HEAD
  trackingId?: string;
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, parameters?: Record<string, any>) => {
    console.log('Analytics track:', event, parameters);
  };

<<<<<<< HEAD
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId);
    }
  }, [trackingId]);

  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, parameters);
    }
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
  }, [trackingId]);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        custom_map: traits
      });
    }
  }, [trackingId]);

  const value: AnalyticsContextType = {
    track,
    page,
    identify
=======
  const page = (pageName: string, parameters?: Record<string, any>) => {
    console.log('Analytics page:', pageName, parameters);
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    console.log('Analytics identify:', userId, traits);
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  };

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
