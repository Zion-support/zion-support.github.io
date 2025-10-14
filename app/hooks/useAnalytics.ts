import { useState, useEffect } from 'react';

export const useAnalytics = () => {
  const [data, setData] = useState<{ event: string; properties?: Record<string, unknown> } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    setLoading(true);
    try {
      // Simulate analytics tracking
      console.log('Analytics event:', eventName, properties);
      setData({ event: eventName, properties });
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const trackPageView = (page: string) => {
    trackEvent('page_view', { page });
  };

  useEffect(() => {
    // Initialize analytics if needed
  }, []);

  return {
    data,
    loading,
    error,
    trackEvent,
    trackPageView,
  };
};