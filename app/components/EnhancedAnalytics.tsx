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
<<<<<<< HEAD
=======
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
<<<<<<< HEAD
<<<<<<< HEAD
  trackingId?: string;
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, parameters?: Record<string, any>) => {
    console.log('Analytics track:', event, parameters);
  };
=======
  trackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6

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
<<<<<<< HEAD
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
=======
  };

  return (
    <AnalyticsContext.Provider value={value}>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
      {children}
    </AnalyticsContext.Provider>
  );
};
