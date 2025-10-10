import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath?: string) => void;
  trackConversion: (conversionName: string, value?: number, currency?: string) => void;
  trackUserEngagement: (action: string, element?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // Initialize Google Analytics
  useEffect(() => {
    const initGA = () => {
      // Google Analytics 4
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    initGA();
  }, []);

  // Track custom events
  const trackEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
          event_category: parameters.category || 'engagement',
          event_label: parameters.label,
          value: parameters.value,
          ...parameters
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          userId: localStorage.getItem('userId') || null
        })
      }).catch(err => {
        console.error('Failed to track event:', err);
      });
    }

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  }, []);

  // Track page views
  const trackPageView = useCallback((pageName: string, pagePath?: string) => {
    const path = pagePath || window.location.pathname;
    
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
          page_title: pageName,
          page_location: window.location.origin + path,
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/pageviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: pageName,
          path,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          userId: localStorage.getItem('userId') || null
        })
      }).catch(err => {
        console.error('Failed to track page view:', err);
      });
    }

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, path);
    }
  }, []);

  // Track conversions
  const trackConversion = useCallback((conversionName: string, value?: number, currency: string = 'USD') => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Google Analytics 4
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          send_to: process.env.VITE_GA_MEASUREMENT_ID,
          event_category: 'conversion',
          event_label: conversionName,
          value: value,
          currency: currency
        });
      }

      // Custom analytics endpoint
      fetch('/api/analytics/conversions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversion: conversionName,
          value,
          currency,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          userId: localStorage.getItem('userId') || null
        })
      }).catch(err => {
        console.error('Failed to track conversion:', err);
      });
    }

    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion:', conversionName, value, currency);
    }
  }, []);

  // Track user engagement
  const trackUserEngagement = useCallback((action: string, element?: string) => {
    trackEvent('user_engagement', {
      action,
      element,
      timestamp: Date.now()
    });
  }, [trackEvent]);

  // Track scroll depth
  useEffect(() => {
    let maxScrollDepth = 0;
    let scrollDepthMarkers = [25, 50, 75, 90, 100];
    let reportedDepths: number[] = [];

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((scrollTop / documentHeight) * 100);

      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Report scroll depth milestones
        scrollDepthMarkers.forEach(marker => {
          if (scrollDepth >= marker && !reportedDepths.includes(marker)) {
            reportedDepths.push(marker);
            trackEvent('scroll_depth', {
              depth: marker,
              page: window.location.pathname
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEvent]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        duration: timeOnPage,
        page: window.location.pathname
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [trackEvent]);

  // Track clicks on external links
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
          trackEvent('external_link_click', {
            url: href,
            text: link.textContent?.trim(),
            page: window.location.pathname
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [trackEvent]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
    trackUserEngagement
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}