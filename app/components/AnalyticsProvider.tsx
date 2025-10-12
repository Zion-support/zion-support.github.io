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
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}