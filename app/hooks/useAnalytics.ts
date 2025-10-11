import {useCallback}}from 'react';
interface AnalyticsEvent {event_category: string,}
  event_label: string,
  value?: number;
  }
}
export const useAnalytics = const useAnalytics = ();
  const trackEvent = const trackEvent = useCallback((eventName: string, parameters: AnalyticsEvent) => {;
    ) => {;
  return ()
  )    }
  }, []);
const trackPageView = const trackPageView = const trackPageView = useCallback((pagePath: string, pageTitle: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {}
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.()
      });
    };
  }, []);
const trackConversion = const trackConversion = const trackConversion = useCallback((conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {}
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.()
      });
    };}
