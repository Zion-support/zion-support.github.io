<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
=======
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRate: number;
}

interface AnalyticsContextType {
  data: AnalyticsData;
  loading: boolean;
  error: string | null;
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-01e6
=======
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-4ebb
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
<<<<<<< HEAD
<<<<<<< HEAD
  children: ReactNode;
=======
  children: React.ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-4ebb
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
<<<<<<< HEAD
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
=======
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        window.gtag = window.gtag || function(...args: any[]) {
          (window.gtag as any).q = (window.gtag as any).q || [];
          (window.gtag as any).q.push(args);
        };
        window.gtag('js', new Date());
        window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || '');
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-4ebb
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

<<<<<<< HEAD
  const trackPageView = (pageName: string) => {
=======
  const trackPage = (pageName: string) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-4ebb
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || '', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

<<<<<<< HEAD
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
=======
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate loading analytics data
    const loadAnalytics = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setData({
          pageViews: 12345,
          uniqueVisitors: 8765,
          bounceRate: 0.35,
          avgSessionDuration: 180,
          conversionRate: 0.032
        });
      } catch {
        setError('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, []);

  const trackEvent = (event: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', event, properties);
    // In a real app, this would send data to your analytics service
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', page);
    setData(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1
    }));
  };

  const value: AnalyticsContextType = {
    data,
    loading,
    error,
    trackEvent,
    trackPageView
>>>>>>> cursor/fix-errors-and-merge-to-main-01e6
=======
  const identifyUser = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID || '', {
        user_id: userId,
        custom_map: traits,
      });
    }
  };

  const value: AnalyticsContextType = {
    track: trackEvent,
    identify: identifyUser,
    page: trackPage,
>>>>>>> cursor/fix-errors-and-merge-to-main-4ebb
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

<<<<<<< HEAD
export default AnalyticsProvider;
=======
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-4ebb
