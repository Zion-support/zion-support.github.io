// Analytics hook
import { useState, useEffect } from 'react';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

export const useAnalytics = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    // Initialize analytics
    setIsEnabled(true);
  }, []);

  const trackEvent = (event: AnalyticsEvent) => {
    if (isEnabled) {
      setEvents(prev => [...prev, event]);
      // Send to analytics service
      console.log('Analytics event:', event);
    }
  };

  const trackPageView = (page: string) => {
    trackEvent({
      name: 'page_view',
      properties: { page }
    });
  };

  return {
    trackEvent,
    trackPageView,
    isEnabled,
    events
  };
};

export default useAnalytics;