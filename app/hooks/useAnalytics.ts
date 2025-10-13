<<<<<<< HEAD
  const trackEvent = useCallback((eventName: string, parameters: AnalyticsEvent) => {,
    ) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return($3;)
  )}if (typeof window !== 'undefined' && 'gtag' in window) {}(window as Window & {gtag?: (...args: unknown[]) => void ,}).gtag?.('event', eventName, parameters);';
const trackEvent = useCallback((eventName: string, parameters: AnalyticsEvent) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return ()
  )
  }
    if (typeof window !== 'undefined' && 'gtag' in window) {}'
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', eventName, parameters);'
    }
  }, []);
const trackPageView = useCallback((pagePath: string, pageTitle: string) => {,
    if (typeof window !== 'undefined' && 'gtag' in window) {}(window as Window & {gtag?: (...args: unknown[]) => void ,}).gtag?.('config', 'GA_MEASUREMENT_ID', {page_path: pagePath,'
        page_title: pageTitle,}})
    }
  }, []);
const trackConversion = useCallback((conversionId: string, value?: number) => {if (typeof window !== 'undefined' && 'gtag' in window) {}(window as Window & {gtag?: (...args: unknown[]) => void ,}).gtag?.('event', 'conversion', {send_to: conversionId,'
        value: value,}})
    }
  }, []);
return {trackEvent,;}
    trackPageView,;
    trackConversion,}}
return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    trackEvent,
    trackPageView,
    trackConversion,
  }
  }
}
=======
import { useContext } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
