'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page view
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  const track = useCallback((event: string, properties?: Record<string, any>) => {
    if (typeof window === 'undefined' || !(window as any).gtag) return;

    (window as any).gtag('event', event, {
      event_category: 'engagement',
      event_label: properties?.label || '',
      value: properties?.value || 0,
      ...properties,
    });

    // Also send to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, properties);
    }
  }, []);

  const page = useCallback((name: string, properties?: Record<string, any>) => {
    if (typeof window === 'undefined' || !(window as any).gtag) return;

    (window as any).gtag('event', 'page_view', {
      page_title: name,
      page_location: window.location.href,
      page_path: window.location.pathname,
      ...properties,
    });
  }, []);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window === 'undefined' || !(window as any).gtag) return;

    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
      user_id: userId,
      custom_map: traits,
    });
  }, []);

  // Track performance metrics
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp_connection: navigation.connectEnd - navigation.connectStart,
            request_response: navigation.responseEnd - navigation.requestStart,
            dom_processing: navigation.domComplete - navigation.domLoading,
            total_load_time: navigation.loadEventEnd - navigation.navigationStart,
          };

          track('performance_metrics', metrics);
        }
      }
    };

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
      return () => window.removeEventListener('load', trackPerformance);
    }
  }, [track]);

  // Track scroll depth
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        track('scroll_depth', {
          scroll_percent: scrollPercent,
          page: window.location.pathname,
        });
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, [track]);

  const value: AnalyticsContextType = {
    track,
    page,
    identify,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;