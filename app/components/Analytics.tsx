'use client';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
const initializeGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName}_${location}`);
};

// Track service page views
const trackServiceView = (serviceName: string) => {
  trackEvent('view_service', 'engagement', serviceName);
};

// Track contact interactions
const trackContactInteraction = (interactionType: string) => {
  trackEvent('contact_interaction', 'engagement', interactionType);
};

// Performance monitoring
const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          // Core Web Vitals
          lcp: 0, // Will be updated by LCP observer
          fid: 0, // Will be updated by FID observer
          cls: 0, // Will be updated by CLS observer
          
          // Navigation timing
          dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          load_complete: navigation.loadEventEnd - navigation.loadEventStart,
          first_byte: navigation.responseStart - navigation.requestStart,
          
          // Paint timing
          first_paint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
          first_contentful_paint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        };

        // Send performance data to Google Analytics
        if (window.gtag) {
          window.gtag('event', 'performance_metrics', {
            event_category: 'performance',
            custom_map: {
              metric1: 'dom_content_loaded',
              metric2: 'load_complete',
              metric3: 'first_byte',
              metric4: 'first_paint',
              metric5: 'first_contentful_paint',
            },
            value: Math.round(metrics.dom_content_loaded),
          });
        }
      }, 0);
    });
  }
};

// Core Web Vitals monitoring
const trackCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    // Track LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (window.gtag) {
          window.gtag('event', 'lcp', {
            event_category: 'Web Vitals',
            value: Math.round(lastEntry.startTime),
            non_interaction: true,
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (window.gtag) {
            window.gtag('event', 'fid', {
              event_category: 'Web Vitals',
              value: Math.round(entry.processingStart - entry.startTime),
              non_interaction: true,
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        if (window.gtag) {
          window.gtag('event', 'cls', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }
};

// Analytics component
const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    initializeGA();
    
    // Track performance
    trackPerformance();
    
    // Track Core Web Vitals
    trackCoreWebVitals();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(window.location.href, document.title);
  }, [location]);

  return null;
};

// Export functions for use in other components
export {
  trackEvent,
  trackFormSubmission,
  trackButtonClick,
  trackServiceView,
  trackContactInteraction,
};

export default Analytics;
