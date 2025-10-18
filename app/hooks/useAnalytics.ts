import { useState, useEffect } from 'react';

export function useAnalytics() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize analytics
    setIsInitialized(true);
  }, []);

  const trackEvent = (eventName: string, properties?: any) => {
    if (isInitialized) {
      console.log('Analytics event:', eventName, properties);
    }
  };

  const trackPageView = (page: string) => {
    if (isInitialized) {
      console.log('Page view:', page);
    }
  };

  return { isInitialized, trackEvent, trackPageView };
}
