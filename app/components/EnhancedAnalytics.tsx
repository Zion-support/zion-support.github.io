import React, { useEffect, useState, useCallback } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PageView {
  page_title: string;
  page_location: string;
  page_path: string;
  referrer?: string;
  user_agent: string;
  timestamp: string;
}

interface UserInteraction {
  element: string;
  action: string;
  page: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

const EnhancedAnalytics: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [userInteractions, setUserInteractions] = useState<UserInteraction[]>([]);

  // Initialize analytics
  useEffect(() => {
    const initializeAnalytics = () => {
      // Generate session ID
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);

      // Generate or retrieve user ID
      let storedUserId = localStorage.getItem('analytics_user_id');
      if (!storedUserId) {
        storedUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('analytics_user_id', storedUserId);
      }
      setUserId(storedUserId);

      // Initialize Google Analytics 4 if available
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          custom_map: {
            custom_parameter_1: 'session_id',
            custom_parameter_2: 'user_id',
          },
        });
      }

      setIsInitialized(true);
    };

    initializeAnalytics();
  }, []);

  // Track page views
  const trackPageView = useCallback((pageTitle: string, pagePath: string) => {
    if (!isInitialized) return;

    const pageView: PageView = {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    setPageViews(prev => [...prev, pageView]);

    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: pagePath,
        custom_parameter_1: sessionId,
        custom_parameter_2: userId,
      });
    }

    // Send to custom analytics endpoint
    sendToAnalytics('page_view', pageView);
  }, [isInitialized, sessionId, userId]);

  // Track custom events
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (!isInitialized) return;

    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter_1: sessionId,
        custom_parameter_2: userId,
        ...event.custom_parameters,
      });
    }

    // Send to custom analytics endpoint
    sendToAnalytics('event', {
      ...event,
      session_id: sessionId,
      user_id: userId,
      timestamp: new Date().toISOString(),
    });
  }, [isInitialized, sessionId, userId]);

  // Track user interactions
  const trackInteraction = useCallback((element: string, action: string, metadata?: Record<string, any>) => {
    if (!isInitialized) return;

    const interaction: UserInteraction = {
      element,
      action,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      metadata,
    };

    setUserInteractions(prev => [...prev, interaction]);

    // Send to analytics
    trackEvent({
      event: 'user_interaction',
      category: 'engagement',
      action,
      label: element,
      custom_parameters: {
        page: window.location.pathname,
        ...metadata,
      },
    });
  }, [isInitialized, trackEvent]);

  // Track performance metrics
  const trackPerformance = useCallback((metric: string, value: number, rating: string) => {
    if (!isInitialized) return;

    trackEvent({
      event: 'performance_metric',
      category: 'performance',
      action: 'measure',
      label: metric,
      value: Math.round(value),
      custom_parameters: {
        rating,
        page: window.location.pathname,
      },
    });
  }, [isInitialized, trackEvent]);

  // Track conversion events
  const trackConversion = useCallback((conversionType: string, value?: number, currency: string = 'USD') => {
    if (!isInitialized) return;

    trackEvent({
      event: 'conversion',
      category: 'conversion',
      action: conversionType,
      value,
      custom_parameters: {
        currency,
        page: window.location.pathname,
      },
    });
  }, [isInitialized, trackEvent]);

  // Track errors
  const trackError = useCallback((error: Error, errorInfo?: any) => {
    if (!isInitialized) return;

    trackEvent({
      event: 'error',
      category: 'error',
      action: 'javascript_error',
      label: error.message,
      custom_parameters: {
        error_stack: error.stack,
        error_info: errorInfo,
        page: window.location.pathname,
        user_agent: navigator.userAgent,
      },
    });
  }, [isInitialized, trackEvent]);

  // Send data to analytics endpoint
  const sendToAnalytics = useCallback(async (type: string, data: any) => {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          data,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }, []);

  // Set up global error tracking
  useEffect(() => {
    if (!isInitialized) return;

    const handleError = (event: ErrorEvent) => {
      trackError(new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(new Error(event.reason), {
        type: 'unhandled_promise_rejection',
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [isInitialized, trackError]);

  // Set up click tracking
  useEffect(() => {
    if (!isInitialized) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      const element = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;
      const text = target.textContent?.slice(0, 50) || '';

      trackInteraction(`${element}${id ? `#${id}` : ''}${className ? `.${className.split(' ').join('.')}` : ''}`, 'click', {
        text,
        href: (target as HTMLAnchorElement).href,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isInitialized, trackInteraction]);

  // Set up scroll tracking
  useEffect(() => {
    if (!isInitialized) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > 0 && scrollPercent % 25 === 0) {
          trackEvent({
            event: 'scroll',
            category: 'engagement',
            action: 'scroll_depth',
            label: `${scrollPercent}%`,
            value: scrollPercent,
          });
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isInitialized, trackEvent]);

  // Track time on page
  useEffect(() => {
    if (!isInitialized) return;

    const startTime = Date.now();
    
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent({
        event: 'time_on_page',
        category: 'engagement',
        action: 'page_duration',
        value: timeOnPage,
      });
    };

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      trackTimeOnPage();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Track time on page every 30 seconds
    const interval = setInterval(trackTimeOnPage, 30000);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(interval);
      trackTimeOnPage();
    };
  }, [isInitialized, trackEvent]);

  // Expose tracking functions globally for use in components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).analytics = {
        trackEvent,
        trackInteraction,
        trackPerformance,
        trackConversion,
        trackError,
        trackPageView,
      };
    }
  }, [trackEvent, trackInteraction, trackPerformance, trackConversion, trackError, trackPageView]);

  return null; // This component doesn't render anything
};

// Analytics Provider Context
interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackInteraction: (element: string, action: string, metadata?: Record<string, any>) => void;
  trackPerformance: (metric: string, value: number, rating: string) => void;
  trackConversion: (conversionType: string, value?: number, currency?: string) => void;
  trackError: (error: Error, errorInfo?: any) => void;
  trackPageView: (pageTitle: string, pagePath: string) => void;
}

const AnalyticsContext = React.createContext<AnalyticsContextType | null>(null);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnalyticsContext.Provider value={null}>
      <EnhancedAnalytics />
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = React.useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default EnhancedAnalytics;