import React, { useCallback, useEffect, useState } from 'react';

declare global {
  interface Window {
    [key: string]: any;
    analyticsSessionInterval?: number;
  }
}

interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

const AnalyticsManagerComponent: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeAnalytics = useCallback(() => {
    setIsInitialized(true);
  }, []);

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!isInitialized) return;
    const gtagFn = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (typeof gtagFn === 'function') {
      gtagFn('event', event.name, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters,
      });
    }
  }, [isInitialized]);

  useEffect(() => {
    initializeAnalytics();

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a');
      const button = target?.closest('button');
      if (link) {
        trackEvent({ name: 'link_click', category: 'Interaction', action: 'click', label: (link as HTMLAnchorElement).href });
      } else if (button) {
        trackEvent({ name: 'button_click', category: 'Interaction', action: 'click', label: (button as HTMLButtonElement).textContent || '' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [initializeAnalytics, trackEvent]);

  return null;
};

export default AnalyticsManagerComponent;