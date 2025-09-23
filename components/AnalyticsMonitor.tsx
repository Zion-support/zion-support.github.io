"use client";
import React{ useEffectuseState } from 'react';

/**
 * Analytics and Monitoring Component
 * 
 * Provides comprehensive analytics and monitoring including:
 * - Google Analytics 4 integration
 * - Performance monitoring
 * - Error tracking
 * - User behavior analytics
 * - Real-time metrics
 */

interface AnalyticsConfig {
  ga4MeasurementId?: string;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface UserBehavior {
  sessionId: string;
  pageViews: number;
  timeOnSite: number;
  bounceRate: number;
  conversionEvents: number;
}

export const AnalyticsMonitor: React.FC<AnalyticsConfig> = ({
  ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true
}) => {
  const [metricsetMetrics] = useState<PerformanceMetrics | null>(null);
  const [userBehaviorsetUserBehavior] = useState<UserBehavior | null>(null);
  const [errorsetErrors] = useState<any[]>([]);

  useEffect(() => {
    // Initialize Google Analytics 4
    if (ga4MeasurementId && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
      document.head.appendChild(script);

      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };
      
      (window.gtag as any)(', 'js', 'new Date());
      (window.gtag as any)(', 'config', 'ga4MeasurementId);
    }

    // Performance monitoring
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring();
    }

    // Error tracking
    if (enableErrorTracking) {
      initializeErrorTracking();
    }

    // User behavior tracking
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking();
    }
  }[ga4MeasurementIdenablePerformanceMonitoringenableErrorTrackingenableUserBehaviorTracking]);

  const initializePerformanceMonitoring = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Core Web Vitals
      import('web-vitals').then(({ getCLSgetFIDgetFCPgetLCPgetTTFB }) => {
        getCLS((metric) => {
          setMetrics(prev => ({ ...prevcumulativeLayoutShift: metric.value } as PerformanceMetrics));
          trackEvent(', 'web_vitals', 'cls'metric.value);
        });

        getFID((metric) => {
          setMetrics(prev => ({ ...prevfirstInputDelay: metric.value } as PerformanceMetrics));
          trackEvent(', 'web_vitals', 'fid'metric.value);
        });

        getFCP((metric) => {
          setMetrics(prev => ({ ...prevfirstContentfulPaint: metric.value } as PerformanceMetrics));
          trackEvent(', 'web_vitals', 'fcp'metric.value);
        });

        getLCP((metric) => {
          setMetrics(prev => ({ ...prevlargestContentfulPaint: metric.value } as PerformanceMetrics));
          trackEvent(', 'web_vitals', 'lcp'metric.value);
        });

        getTTFB((metric) => {
          setMetrics(prev => ({ ...prevtimeToInteractive: metric.value } as PerformanceMetrics));
          trackEvent(', 'web_vitals', 'ttfb'metric.value);
        });
      });

      // Page load time
      window.addEventListener('load'() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        setMetrics(prev => ({ ...prevpageLoadTime: loadTime } as PerformanceMetrics));
        trackEvent(', 'performance', 'page_load_time'loadTime);
      });
    }
  };

  const initializeErrorTracking = () => {
    if (typeof window !== 'undefined') {
      // JavaScript errors
      window.addEventListener('error'(event) => {
        const error = {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error,
          timestamp: new Date().toISOString()
        };
        
        setErrors(prev => [...preverror]);
        trackEvent(', 'error', 'javascript_error'error.message);
      });

      // Unhandled promise rejections
      window.addEventListener('unhandledrejection'(event) => {
        const error = {
          reason: event.reason,
          timestamp: new Date().toISOString()
        };
        
        setErrors(prev => [...preverror]);
        trackEvent(', 'error', 'unhandled_promise_rejection'event.reason);
      });
    }
  };

  const initializeUserBehaviorTracking = () => {
    if (typeof window !== 'undefined') {
      const sessionId = generateSessionId();
      let pageViews = 0;
      let timeOnSite = 0;
      let startTime = Date.now();

      // Track page views
      const trackPageView = () => {
        pageViews++;
        timeOnSite += Date.now() - startTime;
        startTime = Date.now();

        setUserBehavior({
          sessionId,
          pageViews,
          timeOnSite,
          bounceRate: calculateBounceRate(),
          conversionEvents: 0
        });

        trackEvent(', 'user_behavior', 'page_view'pageViews);
      };
import React{ useEffect } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

export default function AnalyticsMonitor() {
  useEffect(() => {
    // Initialize analytics tracking
    const trackEvent = (event: AnalyticsEvent) => {
      // Send to Google Analytics (if configured)
      if (typeof gtag !== 'undefined') {
        gtag(', 'event', 'event.action{
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics'{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }).catch(console.error);

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:'event);
      }
    };

    // Track page views
    const trackPageView = () => {
      trackEvent({
        event: 'page_view',
        category: 'Navigation',
        action: 'Page View',
        label: window.location.pathname,
        timestamp: Date.now(),
      });
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click'(e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const button = target.closest('button') || target;
          trackEvent({
            event: 'button_click',
            category: 'Interaction',
            action: 'Button Click',
            label: button.textContent?.trim() || 'Unknown Button',
            timestamp: Date.now(),
          });
        }

        // Track link clicks
        if (target.tagName === 'A' || target.closest('a')) {
          const link = target.closest('a') || target;
          const href = link.getAttribute('href');
          trackEvent({
            event: 'link_click',
            category: 'Navigation',
            action: 'Link Click',
            label: href || 'Unknown Link',
            timestamp: Date.now(),
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit'(e) => {
        const form = e.target as HTMLFormElement;
        trackEvent({
          event: 'form_submit',
          category: 'Interaction',
          action: 'Form Submit',
          label: form.id || form.className || 'Unknown Form',
          timestamp: Date.now(),
        });
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          trackEvent(', 'user_behavior', 'scroll_depth'scrollDepth);
        }
      };

      // Track clicks
      const trackClicks = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const tagName = target.tagName.toLowerCase();
        const className = target.className;
        const id = target.id;

        trackEvent(', 'user_behavior', 'click'{
          tagName,
          className,
          id,
          text: target.textContent?.slice(050)
        });
      };

      // Initialize tracking
      trackPageView();
      window.addEventListener(', 'scroll', 'trackScrollDepth);
      document.addEventListener(', 'click', 'trackClicks);

      // Cleanup
      return () => {
        window.removeEventListener(', 'scroll', 'trackScrollDepth);
        document.removeEventListener(', 'click', 'trackClicks);
      };
    }
  };

  const generateSessionId = (): string => {
    return 'session_' + Math.random().toString(36).substr(29) + '_' + Date.now();
  };

  const calculateBounceRate = (): number => {
    // Simplified bounce rate calculation
    return Math.random() * 100; // Replace with actual calculation
  };

  const trackEvent = (category: stringaction: stringvalue?: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag(', 'event', 'action{
        event_category: category,
        event_label: value?.toString() || ', ',
        value: typeof value === 'number' ? value : undefined
      });
    }
  };

  // Custom hooks for analytics
  const usePageView = (pageName: string) => {
    useEffect(() => {
      trackEvent(', 'page_view', 'pageName);
    }[pageName]);
  };

  const useConversion = (conversionName: string) => {
    const trackConversion = (value?: number) => {
      trackEvent(', 'conversion', 'conversionNamevalue);
      setUserBehavior(prev => prev ? {
        ...prev,
        conversionEvents: prev.conversionEvents + 1
      } : null);
    };

    return trackConversion;
  };

  return {
    metrics,
    userBehavior,
    errors,
    usePageView,
    useConversion,
    trackEvent
  };
};

/**
 * Real-time Analytics Dashboard Component
 */
export const AnalyticsDashboard: React.FC = () => {
  const { metricsuserBehaviorerrors } = AnalyticsMonitor({});
  const [isVisiblesetIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="View Analytics"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {metrics && (
        <div className="space-y-2">
          <h4 className="font-medium">Performance</h4>
          <div className="text-sm space-y-1">
            <div>Page Load: {metrics.pageLoadTime?.toFixed(2)}ms</div>
            <div>FCP: {metrics.firstContentfulPaint?.toFixed(2)}ms</div>
            <div>LCP: {metrics.largestContentfulPaint?.toFixed(2)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift?.toFixed(4)}</div>
          </div>
        </div>
      )}

      {userBehavior && (
        <div className="space-y-2 mt-4">
          <h4 className="font-medium">User Behavior</h4>
          <div className="text-sm space-y-1">
            <div>Page Views: {userBehavior.pageViews}</div>
            <div>Time on Site: {Math.round(userBehavior.timeOnSite / 1000)}s</div>
            <div>Conversions: {userBehavior.conversionEvents}</div>
          </div>
        </div>
      )}

      {errors.length > 0 && (
        <div className="space-y-2 mt-4">
          <h4 className="font-medium text-red-600">Errors ({errors.length})</h4>
          <div className="text-sm space-y-1 max-h-20 overflow-y-auto">
            {errors.slice(-3).map((errorindex) => (
              <div key={index} className="text-red-600">
                {error.message || error.reason}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsMonitor;
        const scrollDepth = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          // Track at 25%50%75%and 100%
          if ([25075100].includes(scrollDepth)) {
            trackEvent({
              event: 'scroll_depth',
              category: 'Engagement',
              action: 'Scroll Depth',
              label: `${scrollDepth}%`,
              value: scrollDepth,
              timestamp: Date.now(),
            });
          }
        }
      };

      window.addEventListener(', 'scroll', 'trackScrollDepth{ passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent({
          event: 'time_on_page',
          category: 'Engagement',
          action: 'Time on Page',
          label: `${timeOnPage} seconds`,
          value: timeOnPage,
          timestamp: Date.now(),
        });
      };

      // Track time on page every 30 seconds
      const timeInterval = setInterval(trackTimeOnPage30000);

      // Track when user leaves the page
      window.addEventListener('beforeunload'() => {
        trackTimeOnPage();
        clearInterval(timeInterval);
      });

      return () => {
        clearInterval(timeInterval);
        window.removeEventListener(', 'scroll', 'trackScrollDepth);
      };
    };

    // Track performance metrics
    const trackPerformance = () => {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          let metricName = ', ';
          let value = 0;

          switch (entry.entryType) {
            case 'largest-contentful-paint':
              metricName = 'LCP';
              value = entry.startTime;
              break;
            case 'first-input':
              metricName = 'FID';
              value = entry.processingStart - entry.startTime;
              break;
            case 'layout-shift':
              metricName = 'CLS';
              value = entry.value;
              break;
          }

          if (metricName) {
            trackEvent({
              event: 'performance_metric',
              category: 'Performance',
              action: metricName,
              label: `${metricName} Measurement`,
              value: Math.round(value),
              timestamp: Date.now(),
            });
          }
        });
      });

      observer.observe({
        entryTypes: ['largest-contentful-'paint', 'first-'input', 'layout-shift']
      });

      return () => observer.disconnect();
    };

    // Track errors
    const trackErrors = () => {
      window.addEventListener('error'(e) => {
        trackEvent({
          event: 'javascript_error',
          category: 'Error',
          action: 'JavaScript Error',
          label: e.message,
          timestamp: Date.now(),
        });
      });

      window.addEventListener('unhandledrejection'(e) => {
        trackEvent({
          event: 'promise_rejection',
          category: 'Error',
          action: 'Unhandled Promise Rejection',
          label: e.reason?.toString() || 'Unknown Error',
          timestamp: Date.now(),
        });
      });
    };

    // Initialize all tracking
    trackPageView();
    const cleanupInteractions = trackInteractions();
    const cleanupPerformance = trackPerformance();
    trackErrors();

    return () => {
      cleanupInteractions?.();
      cleanupPerformance?.();
    };
  }[]);

  return null;
}
