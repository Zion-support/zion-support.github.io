'use client';

import React, { useEffect, useState } from 'react';

interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

interface AnalyticsIntegrationProps {
  trackingId?: string;
  enableHeatmaps?: boolean;
  enableUserTracking?: boolean;
  enablePerformanceTracking?: boolean;
}

const AnalyticsIntegration: React.FC<AnalyticsIntegrationProps> = ({
  trackingId = 'G-XXXXXXXXXX',
  enableHeatmaps = true,
  enableUserTracking = true,
  enablePerformanceTracking = true
}) => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Generate session ID
    const generateSessionId = () => {
      return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    };

    setSessionId(generateSessionId());

    // Initialize Google Analytics
    const initializeGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && trackingId) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.gtag = window.gtag || function() {
          (window.gtag.q = window.gtag.q || []).push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'custom_parameter_1': 'session_id'
          }
        });

        // Set session ID
        window.gtag('config', trackingId, {
          custom_parameter_1: sessionId
        });
      }
    };

    initializeGoogleAnalytics();

    // Track page views
    const trackPageView = (url: string, title: string) => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: title,
          page_location: url,
          session_id: sessionId
        });
      }
    };

    // Track initial page view
    trackPageView(window.location.href, document.title);

    // Track navigation changes
    const trackNavigation = () => {
      let currentUrl = window.location.href;
      let currentTitle = document.title;

      const observer = new MutationObserver(() => {
        if (window.location.href !== currentUrl || document.title !== currentTitle) {
          currentUrl = window.location.href;
          currentTitle = document.title;
          trackPageView(currentUrl, currentTitle);
        }
      });

      observer.observe(document, {
        subtree: true,
        childList: true
      });

      return () => observer.disconnect();
    };

    const cleanup = trackNavigation();

    // Track user interactions
    const trackUserInteractions = () => {
      // Track clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const element = target.closest('button, a, input, select, textarea');
        
        if (element) {
          const eventData: AnalyticsEvent = {
            event: 'click',
            category: 'user_interaction',
            action: 'click',
            label: element.tagName + (element.className ? '.' + element.className : ''),
            timestamp: Date.now()
          };
          
          trackEvent(eventData);
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        const eventData: AnalyticsEvent = {
          event: 'form_submit',
          category: 'user_interaction',
          action: 'form_submit',
          label: form.id || form.className || 'form',
          timestamp: Date.now()
        };
        
        trackEvent(eventData);
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          
          if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            const eventData: AnalyticsEvent = {
              event: 'scroll_depth',
              category: 'engagement',
              action: 'scroll',
              label: `${scrollDepth}%`,
              value: scrollDepth,
              timestamp: Date.now()
            };
            
            trackEvent(eventData);
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        if (timeOnPage % 30 === 0 && timeOnPage > 0) { // Track every 30 seconds
          const eventData: AnalyticsEvent = {
            event: 'time_on_page',
            category: 'engagement',
            action: 'time_spent',
            label: `${timeOnPage}s`,
            value: timeOnPage,
            timestamp: Date.now()
          };
          
          trackEvent(eventData);
        }
      };

      const timeInterval = setInterval(trackTimeOnPage, 30000);

      return () => {
        clearInterval(timeInterval);
        window.removeEventListener('scroll', trackScrollDepth);
      };
    };

    const cleanupInteractions = trackUserInteractions();

    // Track performance metrics
    const trackPerformanceMetrics = () => {
      if (enablePerformanceTracking && 'performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paintEntries = performance.getEntriesByType('paint');
            
            const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
            const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
            
            const metrics = {
              load_time: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
              first_contentful_paint: fcp ? Math.round(fcp.startTime) : 0,
              largest_contentful_paint: lcp ? Math.round(lcp.startTime) : 0,
              dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
              first_byte: Math.round(navigation.responseStart - navigation.requestStart)
            };

            // Send performance metrics to analytics
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'performance',
                event_label: 'page_load',
                custom_parameter_2: JSON.stringify(metrics),
                session_id: sessionId
              });
            }
          }, 1000);
        });
      }
    };

    trackPerformanceMetrics();

    // Track errors
    const trackErrors = () => {
      window.addEventListener('error', (e) => {
        const eventData: AnalyticsEvent = {
          event: 'error',
          category: 'error',
          action: 'javascript_error',
          label: e.message,
          timestamp: Date.now()
        };
        
        trackEvent(eventData);
      });

      window.addEventListener('unhandledrejection', (e) => {
        const eventData: AnalyticsEvent = {
          event: 'error',
          category: 'error',
          action: 'unhandled_promise_rejection',
          label: e.reason?.toString() || 'Unknown error',
          timestamp: Date.now()
        };
        
        trackEvent(eventData);
      });
    };

    trackErrors();

    return () => {
      cleanup();
      cleanupInteractions();
    };
  }, [trackingId, sessionId, enablePerformanceTracking]);

  const trackEvent = (eventData: AnalyticsEvent) => {
    // Add to local events array
    setEvents(prev => [...prev, eventData]);

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', eventData.action, {
        event_category: eventData.category,
        event_label: eventData.label,
        value: eventData.value,
        session_id: sessionId
      });
    }

    // Send to custom analytics endpoint (if available)
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...eventData,
          session_id: sessionId,
          user_agent: navigator.userAgent,
          url: window.location.href,
          referrer: document.referrer
        })
      }).catch(error => {
        console.warn('Failed to send analytics event:', error);
      });
    }
  };

  const trackCustomEvent = (event: string, category: string, action: string, label?: string, value?: number) => {
    const eventData: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now()
    };
    
    trackEvent(eventData);
  };

  // Expose tracking function globally for use in other components
  useEffect(() => {
    (window as any).trackEvent = trackCustomEvent;
  }, []);

  return null; // This component doesn't render anything visible
};

export default AnalyticsIntegration;