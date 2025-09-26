import React, { useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path: string;
  custom_parameters?: Record<string, any>;
}

interface UserProperties {
  user_id?: string;
  session_id?: string;
  device_type?: 'mobile' | 'tablet' | 'desktop';
  browser?: string;
  os?: string;
  country?: string;
  language?: string;
}

class AnalyticsManager {
  private static instance: AnalyticsManager;
  private isInitialized = false;
  private sessionId: string;
  private userId: string | null = null;
  private eventQueue: AnalyticsEvent[] = [];
  private pageViewQueue: PageViewEvent[] = [];

  private constructor() {
    this.sessionId = this.generateSessionId();
  }

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUserProperties(): UserProperties {
    if (typeof window === 'undefined') return {};

    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?=.*\bMobile\b)/i.test(userAgent);

    return {
      user_id: this.userId || undefined,
      session_id: this.sessionId,
      device_type: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
      browser: this.getBrowserName(userAgent),
      os: this.getOSName(userAgent),
      country: this.getCountryFromTimezone(),
      language: navigator.language
    };
  }

  private getBrowserName(userAgent: string): string {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  }

  private getOSName(userAgent: string): string {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  }

  private getCountryFromTimezone(): string {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0];
    } catch {
      return 'Unknown';
    }
  }

  initialize(userId?: string): void {
    this.userId = userId || null;
    this.isInitialized = true;

    // Send queued events
    this.flushEventQueue();
    this.flushPageViewQueue();
  }

  private flushEventQueue(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) this.sendEvent(event);
    }
  }

  private flushPageViewQueue(): void {
    while (this.pageViewQueue.length > 0) {
      const pageView = this.pageViewQueue.shift();
      if (pageView) this.sendPageView(pageView);
    }
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.eventQueue.push(event);
      return;
    }

    this.sendEvent(event);
  }

  private sendEvent(event: AnalyticsEvent): void {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameters: event.custom_parameters,
        ...this.getUserProperties()
      });
    }

    // Custom analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'event',
        event,
        user_properties: this.getUserProperties(),
        timestamp: new Date().toISOString()
      })
    }).catch(console.error);
  }

  trackPageView(pageView: PageViewEvent): void {
    if (!this.isInitialized) {
      this.pageViewQueue.push(pageView);
      return;
    }

    this.sendPageView(pageView);
  }

  private sendPageView(pageView: PageViewEvent): void {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageView.page_title,
        page_location: pageView.page_location,
        page_path: pageView.page_path,
        custom_parameters: pageView.custom_parameters,
        ...this.getUserProperties()
      });
    }

    // Custom analytics endpoint
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'page_view',
        page_view: pageView,
        user_properties: this.getUserProperties(),
        timestamp: new Date().toISOString()
      })
    }).catch(console.error);
  }

  trackPerformance(metrics: {
    loadTime: number;
    domContentLoaded: number;
    firstPaint?: number;
    firstContentfulPaint?: number;
  }): void {
    this.trackEvent({
      action: 'performance_metrics',
      category: 'performance',
      label: 'page_load',
      value: Math.round(metrics.loadTime),
      custom_parameters: {
        load_time: metrics.loadTime,
        dom_content_loaded: metrics.domContentLoaded,
        first_paint: metrics.firstPaint,
        first_contentful_paint: metrics.firstContentfulPaint
      }
    });
  }

  trackError(error: Error, context?: string): void {
    this.trackEvent({
      action: 'error',
      category: 'error',
      label: context || 'unknown',
      custom_parameters: {
        error_message: error.message,
        error_stack: error.stack,
        error_name: error.name,
        context
      }
    });
  }

  trackUserEngagement(element: string, action: string): void {
    this.trackEvent({
      action: 'user_engagement',
      category: 'engagement',
      label: `${element}_${action}`,
      custom_parameters: {
        element,
        action,
        timestamp: Date.now()
      }
    });
  }
}

// React Hook for Analytics
export const useAnalytics = () => {
  const analytics = AnalyticsManager.getInstance();
  const router = useRouter();

  const trackEvent = useCallback((event: Omit<AnalyticsEvent, 'custom_parameters'> & { custom_parameters?: Record<string, any> }) => {
    analytics.trackEvent(event);
  }, [analytics]);

  const trackPageView = useCallback((pageView: Omit<PageViewEvent, 'custom_parameters'> & { custom_parameters?: Record<string, any> }) => {
    analytics.trackPageView(pageView);
  }, [analytics]);

  const trackPerformance = useCallback((metrics: {
    loadTime: number;
    domContentLoaded: number;
    firstPaint?: number;
    firstContentfulPaint?: number;
  }) => {
    analytics.trackPerformance(metrics);
  }, [analytics]);

  const trackError = useCallback((error: Error, context?: string) => {
    analytics.trackError(error, context);
  }, [analytics]);

  const trackUserEngagement = useCallback((element: string, action: string) => {
    analytics.trackUserEngagement(element, action);
  }, [analytics]);

  // Track page views on route changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      analytics.trackPageView({
        page_title: document.title,
        page_location: window.location.href,
        page_path: url
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, analytics]);

  return {
    trackEvent,
    trackPageView,
    trackPerformance,
    trackError,
    trackUserEngagement
  };
};

// Analytics Provider Component
interface AnalyticsProviderProps {
  children: React.ReactNode;
  userId?: string;
  measurementId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  userId,
  measurementId
}) => {
  const analytics = AnalyticsManager.getInstance();

  useEffect(() => {
    analytics.initialize(userId);

    // Initialize Google Analytics if measurement ID is provided
    if (measurementId && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [analytics, userId, measurementId]);

  return <>{children}</>;
};

// Higher-order component for automatic analytics
export const withAnalytics = <P extends object>(
  Component: React.ComponentType<P>,
  options?: {
    trackPageViews?: boolean;
    trackPerformance?: boolean;
    trackErrors?: boolean;
  }
) => {
  const WrappedComponent = (props: P) => {
    const { trackEvent, trackPerformance, trackError } = useAnalytics();

    useEffect(() => {
      if (options?.trackPerformance && typeof window !== 'undefined') {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              trackPerformance({
                loadTime: entry.loadEventEnd - entry.fetchStart,
                domContentLoaded: entry.domContentLoadedEventEnd - entry.fetchStart,
                firstPaint: performance.getEntriesByType('paint').find(e => e.name === 'first-paint')?.startTime,
                firstContentfulPaint: performance.getEntriesByType('paint').find(e => e.name === 'first-contentful-paint')?.startTime
              });
            }
          });
        });

        try {
          observer.observe({ entryTypes: ['navigation', 'paint'] });
        } catch (e) {
          console.warn('Performance observer not supported');
        }

        return () => observer.disconnect();
      }
    }, [trackPerformance]);

    useEffect(() => {
      if (options?.trackErrors) {
        const handleError = (event: ErrorEvent) => {
          trackError(new Error(event.message), 'global_error');
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
          trackError(new Error(event.reason), 'unhandled_promise_rejection');
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
          window.removeEventListener('error', handleError);
          window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
      }
    }, [trackError]);

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withAnalytics(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default AnalyticsManager;