  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')}return context;
=======

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}
=======
'use client'
import React, { createContext, useContext, useEffect, ReactNode } from 'react'
interface AnalyticsContextType {
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void
  trackPageView: (pageName: string, pagePath: string) => void
  }
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

const AnalyticsContext = createContext</string><AnalyticsContextType | undefined>(undefined)
export const useAnalytics = () => {
}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

    if (typeof window === 'undefined') return;

    }
  }

        page_title: pageName,
        page_location: window.location.origin + pagePath,})
    }

    // Console logging for development;
    if (process.env.NODE_ENV === 'development') {console.log('Page View:', pageName, pagePath)}}
=======
  const trackPageView = (pageName: string) => {
    if (!isInitialized) return

    // Track page view
    if (typeof window !== 'undefined') {
      console.log('Page View:', pageName)
      
      // Example: Send to Google Analytics
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_title: pageName,
      //   page_location: window.location.href
      // })
    }
  }
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

      // Custom analytics tracking
      if (enableDebug) {
        console.log('Analytics Event:', eventName, parameters);
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        if (enableDebug) {
          console.error('Analytics tracking error:', error);
        }
      });

    } catch (error) {
      if (enableDebug) {
        console.error('Analytics error:', error);
      }
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {

  const value: AnalyticsContextType = {,
    trackEvent,
  );
};

export { AnalyticsProvider };
export default AnalyticsProvider;

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
=======
  )
}

export default undefined
  )
}

export default AnalyticsProvider
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
