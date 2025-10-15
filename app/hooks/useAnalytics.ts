<<<<<<< HEAD
import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window === 'undefined') return;
    
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
    
    // Custom analytics
    console.log('Analytics Event:', event);
  };

  const trackPageView = (page: string) => {
    if (typeof window === 'undefined') return;
    
    if ((window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page
      });
    }
    
    console.log('Page View:', page);
  };

  return { trackEvent, trackPageView };
};

export default useAnalytics;
=======
{ useContext } from 'react'";
{ AnalyticsContext } from '../contexts/AnalyticsContext'";
export const useAnalytics  = () => {const context  = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}'"'"
  return context};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
