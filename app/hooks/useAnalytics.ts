import { useState, useEffect } from 'react';

export function useAnalytics() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(true);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (!isEnabled) return;
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    console.log('Page View:', pageName);
  };

  return {
    trackEvent,
    trackPageView,
    isEnabled
  };
}

export default useAnalytics;
