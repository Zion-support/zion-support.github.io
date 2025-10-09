import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  setUserId: (userId: string) => void
  setUserProperties: (properties: Record<string, unknown>) => void;
}

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
  enableDebug?: boolean
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps>= ({
  children,
  trackingId = 'G-XXXXXXXXXX',
  enableDebug = false,
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return null;
    // Initialize Google Analytics;
            }
        return null;
      }

      // Load Google Analytics script;
            script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag;
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function() {
        (window as any).dataLayer.push(arguments);
      }
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      setIsInitialized(true);

      if (enableDebug) {
        console.log('Analytics initialized with tracking ID:', trackingId);
      }
    }
    initAnalytics();
  }, [trackingId, enableDebug]);

      if (enableDebug) {
      console.log('Analytics Event:', eventName, parameters);
    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, parameters);
    }
  }
      if (enableDebug) {
      console.log('Analytics Page View:', pageName, pagePath);
    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
        page_title: pageName,
        page_location: pagePath || window.location.href,
      });
    }
  }
      if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', trackingId, {
        user_id: userId,
      });
    }
  }
      if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('set', properties);
    }
  }
      if (enableDebug) {
      // eslint-disable-next-line no-console;
      console.error('Analytics Error:', error, context);
    }

    if ((window as unknown as { gtag: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          context: context || 'unknown',
        },
      })
    }
  }
  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUserId,
    setUserProperties,
  }
  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>);
}
export   if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}
export default AnalyticsProvider