import React, { useEffect } from 'react';

interface AnalyticsTrackerProps {
  pageName?: string;
  customEvents?: Array<{
    event: string;
    category: string;
    action?: string;
    label?: string;
    value?: number;
  }>;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ pageName = 'Home', customEvents = [] }) => {
  useEffect(() => {
    const gtagFn = (window as any).gtag as undefined | ((...args: any[]) => void);

    // Track page view
    if (typeof gtagFn === 'function') {
      gtagFn('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }

    // Track custom events
    customEvents.forEach((evt) => {
      if (typeof gtagFn === 'function') {
        gtagFn('event', evt.event, {
          event_category: evt.category,
          event_label: evt.label,
          value: evt.value,
        });
      }
    });
  }, [pageName, customEvents]);

  return null;
};

export default AnalyticsTracker;