import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

const EnhancedAnalytics: React.FC = () => {
  const location = useLocation();

  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'ai_solutions',
          'custom_parameter_2': 'enterprise_technology'
        }
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });

      // Track custom page view event
      trackEvent({
        action: 'page_view',
        category: 'Navigation',
        label: location.pathname,
        custom_parameters: {
          page_title: document.title,
          referrer: document.referrer,
          user_agent: navigator.userAgent
        }
      });
    }
  }, [location]);

  // Track user interactions
  useEffect(() => {
    const trackClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');
      
      if (link) {
        trackEvent({
          action: 'click',
          category: 'Link',
          label: link.href,
          custom_parameters: {
            link_text: link.textContent?.trim(),
            link_destination: link.href
          }
        });
      }
      
      if (button) {
        trackEvent({
          action: 'click',
          category: 'Button',
          label: button.textContent?.trim() || 'Unknown Button',
          custom_parameters: {
            button_text: button.textContent?.trim(),
            button_type: button.type || 'button'
          }
        });
      }
    };

    const trackFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      trackEvent({
        action: 'form_submit',
        category: 'Form',
        label: form.id || form.className || 'Unknown Form',
        custom_parameters: {
          form_id: form.id,
          form_class: form.className,
          form_action: form.action
        }
      });
    };

    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track scroll milestones
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackEvent({
          action: 'scroll',
          category: 'Engagement',
          label: '25%',
          value: 25
        });
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackEvent({
          action: 'scroll',
          category: 'Engagement',
          label: '50%',
          value: 50
        });
      } else if (scrollPercent >= 75 && scrollPercent < 90) {
        trackEvent({
          action: 'scroll',
          category: 'Engagement',
          label: '75%',
          value: 75
        });
      } else if (scrollPercent >= 90) {
        trackEvent({
          action: 'scroll',
          category: 'Engagement',
          label: '90%',
          value: 90
        });
      }
    };

    // Add event listeners
    document.addEventListener('click', trackClick);
    document.addEventListener('submit', trackFormSubmit);
    window.addEventListener('scroll', trackScroll, { passive: true });

    return () => {
      document.removeEventListener('click', trackClick);
      document.removeEventListener('submit', trackFormSubmit);
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  // Track performance metrics
  useEffect(() => {
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.navigationStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.navigationStart;
          const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
          const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

          trackEvent({
            action: 'performance',
            category: 'Page Load',
            label: 'Load Time',
            value: Math.round(loadTime),
            custom_parameters: {
              load_time: Math.round(loadTime),
              dom_content_loaded: Math.round(domContentLoaded),
              first_paint: Math.round(firstPaint),
              first_contentful_paint: Math.round(firstContentfulPaint)
            }
          });
        }
      }
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      trackPerformance();
    } else {
      window.addEventListener('load', trackPerformance);
    }

    return () => {
      window.removeEventListener('load', trackPerformance);
    };
  }, []);

  // Track user engagement
  useEffect(() => {
    let startTime = Date.now();
    let isActive = true;

    const trackEngagement = () => {
      if (isActive) {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (timeSpent >= 30) { // Track every 30 seconds
          trackEvent({
            action: 'engagement',
            category: 'User Behavior',
            label: 'Time on Page',
            value: timeSpent
          });
          startTime = Date.now();
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent({
          action: 'engagement',
          category: 'User Behavior',
          label: 'Time on Page (Hidden)',
          value: timeSpent
        });
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    const interval = setInterval(trackEngagement, 30000);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Track function
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.custom_parameters
      });
    }

    // Also track in console for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }, []);

  // Expose trackEvent globally for manual tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = trackEvent;
    }
  }, [trackEvent]);

  return null; // This component doesn't render anything
};

// Global type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    trackEvent: (event: AnalyticsEvent) => void;
  }
}

export default EnhancedAnalytics;