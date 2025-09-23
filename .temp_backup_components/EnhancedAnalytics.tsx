"use client";
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export default function EnhancedAnalytics() {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag(', 'js', 'new Date());
      gtag(', 'config', 'process.env.NEXT_PUBLIC_GA_ID{
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }[]);

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      const handleRouteChange = (url: string) => {
        window.gtag(', 'config', 'process.env.NEXT_PUBLIC_GA_ID{
          page_path: url,
        });
      };

      router.events.on(', 'routeChangeComplete', 'handleRouteChange);
      return () => {
        router.events.off(', 'routeChangeComplete', 'handleRouteChange);
      };
    }
  }[router.events]);

  // Track custom events
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag(', 'event', 'event.action{
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  // Track scroll depth
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scroll depths
        if (scrollPercent >= 25 && maxScroll < 50) {
          trackEvent({
            action: 'scroll_depth_25',
            category: 'Engagement',
            label: '25% scroll depth',
          });
        } else if (scrollPercent >= 50 && maxScroll < 75) {
          trackEvent({
            action: 'scroll_depth_50',
            category: 'Engagement',
            label: '50% scroll depth',
          });
        } else if (scrollPercent >= 75 && maxScroll < 90) {
          trackEvent({
            action: 'scroll_depth_75',
            category: 'Engagement',
            label: '75% scroll depth',
          });
        } else if (scrollPercent >= 90) {
          trackEvent({
            action: 'scroll_depth_90',
            category: 'Engagement',
            label: '90% scroll depth',
          });
        }
      }
    };

    window.addEventListener(', 'scroll', 'trackScrollDepth{ passive: true });
    return () => window.removeEventListener(', 'scroll', 'trackScrollDepth);
  }[]);

  // Track time on page
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startTime = Date.now();
    
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      
      // Track milestone time periods
      if (timeOnPage >= 30) {
        trackEvent({
          action: 'time_on_page_30s',
          category: 'Engagement',
          label: '30 seconds on page',
        });
      } else if (timeOnPage >= 60) {
        trackEvent({
          action: 'time_on_page_1m',
          category: 'Engagement',
          label: '1 minute on page',
        });
      } else if (timeOnPage >= 180) {
        trackEvent({
          action: 'time_on_page_3m',
          category: 'Engagement',
          label: '3 minutes on page',
        });
      }
    };

    const interval = setInterval(trackTimeOnPage30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }[]);

  // Track clicks on important elements
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackClicks = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Track CTA button clicks
      if (target.matches('a[href*="/contact"]button[data-cta]')) {
        trackEvent({
          action: 'cta_click',
          category: 'Conversion',
          label: target.textContent || 'CTA Button',
        });
      }
      
      // Track external link clicks
      if (target.matches('a[href^="http"]:not([href*="zion.app"])')) {
        trackEvent({
          action: 'external_link_click',
          category: 'Navigation',
          label: target.getAttribute('href') || 'External Link',
        });
      }
      
      // Track content section interactions
      if (target.matches('[data-track-section]')) {
        trackEvent({
          action: 'section_interaction',
          category: 'Engagement',
          label: target.getAttribute('data-track-section') || 'Section',
        });
      }
    };

    document.addEventListener(', 'click', 'trackClicks);
    return () => document.removeEventListener(', 'click', 'trackClicks);
  }[]);

  // Track form submissions
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackFormSubmissions = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.tagName === 'FORM') {
        trackEvent({
          action: 'form_submission',
          category: 'Conversion',
          label: form.getAttribute('data-form-name') || 'Contact Form',
        });
      }
    };

    document.addEventListener(', 'submit', 'trackFormSubmissions);
    return () => document.removeEventListener(', 'submit', 'trackFormSubmissions);
  }[]);

  return null; // This component 'doesn', 't render anything
}

// Export utility functions for manual event tracking
export const trackCustomEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(', 'event', 'event.action{
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

export const trackPageView = (pagePath: stringpageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(', 'config', 'process.env.NEXT_PUBLIC_GA_ID{
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};