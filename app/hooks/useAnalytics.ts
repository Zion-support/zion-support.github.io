import {useCallback}}from 'react';
interface AnalyticsEvent {event_category: string,}
  event_label: string,
  value?: number;
  }
}
  }
    if (typeof window !== 'undefined' && 'gtag' in window) {}
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', eventName, parameters);
>>>>>>> origin/main
    }
  }, []);
  }, []);
<<<<<<< HEAD
return {trackEvent,;}
    trackPageView,;
    trackConversion,}}
=======
return {
    trackEvent,
    trackPageView,
    trackConversion,
  }
  }
>>>>>>> origin/main
}
