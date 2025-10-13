<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null;
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
}

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  // Initialize Google Analytics
=======

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
=======
'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
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
  trackingId?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  useEffect(() => {
<<<<<<< HEAD
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script['src'] = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId);
=======
    if (typeof window === 'undefined') return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script['src'] = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, [trackingId]);

  const track = (event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, parameters);
    }
  };

  const page = (pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
<<<<<<< HEAD
        ...traits
      });
    }
=======
        custom_map: traits
      });
    }
  }, [trackingId]);

  const value: AnalyticsContextType = {
    track,
    page,
    identify
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  };

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script['src'] = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

<<<<<<< HEAD
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [enableTracking]);

  return <>{children}</>;
export default EnhancedAnalytics;
=======
  const trackPageView = (page: string) => {
    if (!isInitialized) return;
    
    // Track page view (placeholder for actual analytics implementation)
    console.log('Page View:', page);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: page });
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Set user properties (placeholder for actual analytics implementation)
    console.log('User Set:', userId, properties);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { user_id: userId });
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
