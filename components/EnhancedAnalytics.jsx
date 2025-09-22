import React, { useEffect, useState } from 'react';

const EnhancedAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Google Analytics 4 setup
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Load Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }

      // Track page view
      trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    };

    initAnalytics();

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (e) => {
        if (e.target.matches('button, a[href], [role="button"]')) {
          trackEvent('click', {
            element_type: e.target.tagName.toLowerCase(),
            element_text: e.target.textContent?.trim(),
            element_href: e.target.href || null,
            page_location: window.location.href
          });
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        trackEvent('form_submit', {
          form_id: e.target.id || 'unknown',
          form_action: e.target.action || null,
          page_location: window.location.href
        });
      });

      // Track scroll depth
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (scrollPercent >= 25 && scrollPercent < 50) {
            trackEvent('scroll', { scroll_depth: '25%' });
          } else if (scrollPercent >= 50 && scrollPercent < 75) {
            trackEvent('scroll', { scroll_depth: '50%' });
          } else if (scrollPercent >= 75 && scrollPercent < 90) {
            trackEvent('scroll', { scroll_depth: '75%' });
          } else if (scrollPercent >= 90) {
            trackEvent('scroll', { scroll_depth: '90%' });
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', { time_seconds: timeOnPage });
      };

      window.addEventListener('beforeunload', trackTimeOnPage);

      // Track exit intent
      let exitIntentTracked = false;
      const trackExitIntent = (e) => {
        if (e.clientY <= 0 && !exitIntentTracked) {
          exitIntentTracked = true;
          trackEvent('exit_intent', { page_location: window.location.href });
        }
      };

      document.addEventListener('mouseleave', trackExitIntent);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
        document.removeEventListener('mouseleave', trackExitIntent);
      };
    };

    const cleanup = trackInteractions();

    return cleanup;
  }, []);

  // Track custom events
  const trackEvent = (eventName, parameters = {}) => {
    const event = {
      name: eventName,
      parameters: {
        ...parameters,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    setEvents(prev => [...prev, event]);

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      }).catch(console.error);
    }

    console.log('Analytics Event:', event);
  };

  // Track performance metrics
  useEffect(() => {
    const trackPerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint');
        
        trackEvent('performance_metrics', {
          fcp: fcp ? Math.round(fcp.startTime) : 0,
          lcp: lcp.length > 0 ? Math.round(lcp[lcp.length - 1].startTime) : 0,
          ttfb: navigation ? Math.round(navigation.responseStart - navigation.requestStart) : 0,
          dom_content_loaded: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart) : 0,
          load_complete: navigation ? Math.round(navigation.loadEventEnd - navigation.navigationStart) : 0
        });
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }
  }, []);

  // Track errors
  useEffect(() => {
    const trackError = (error) => {
      trackEvent('javascript_error', {
        error_message: error.message,
        error_filename: error.filename,
        error_line: error.lineno,
        error_column: error.colno,
        error_stack: error.error?.stack || null
      });
    };

    window.addEventListener('error', trackError);
    window.addEventListener('unhandledrejection', (event) => {
      trackEvent('unhandled_promise_rejection', {
        error_message: event.reason?.message || 'Unknown error',
        error_stack: event.reason?.stack || null
      });
    });

    return () => {
      window.removeEventListener('error', trackError);
      window.removeEventListener('unhandledrejection', trackError);
    };
  }, []);

  // Development mode analytics display
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-sm">
        <div className="mb-2 font-bold">Analytics Events</div>
        <div className="max-h-40 overflow-y-auto">
          {events.slice(-5).map((event, index) => (
            <div key={index} className="mb-1 text-xs">
              <span className="text-blue-400">{event.name}</span>
              {event.parameters.element_text && (
                <span className="text-gray-400 ml-2">({event.parameters.element_text})</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-gray-400">
          Total Events: {events.length}
        </div>
      </div>
    );
  }

  return null;
};

export default EnhancedAnalytics;