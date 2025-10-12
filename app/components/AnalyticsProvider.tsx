import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

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
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
  refreshData: () => void;
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
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const refreshData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call - replace with actual analytics API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData({
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 2000,
        bounceRate: Math.random() * 0.3 + 0.2,
        avgSessionDuration: Math.random() * 300 + 120,
        conversionRate: Math.random() * 0.05 + 0.02,
      });
    } catch (err) {
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const value: AnalyticsContextType = {
    data,
    loading,
    error,
    trackEvent,
    trackPageView,
    refreshData,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;