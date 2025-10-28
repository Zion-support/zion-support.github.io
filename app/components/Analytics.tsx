'use client';

import React, { memo, useEffect } from 'react';

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
  gaId?: string;
  gtmId?: string;
  enabled?: boolean;
}

// Extend Window interface for analytics
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Type definitions for Performance API entries
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftAttribution[];
}

interface LayoutShiftAttribution {
  node?: Node;
  previousRect: DOMRectReadOnly;
  currentRect: DOMRectReadOnly;
}

const Analytics: React.FC<AnalyticsProps> = memo(({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  enabled = process.env.NODE_ENV === 'production'
}) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Enhanced Google Analytics with performance monitoring
    if (gaId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.onerror = () => {
        console.warn('Failed to load Google Analytics script');
      };
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      }
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });

      window.gtag = gtag;

      // Track Core Web Vitals
      const trackWebVitals = () => {
        if ('PerformanceObserver' in window) {
          // Track LCP
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(lastEntry.startTime),
              event_category: 'Web Vitals'
            });
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // Track FID
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const fidEntry = entry as PerformanceEventTiming;
              const fid = fidEntry.processingStart - entry.startTime;
              gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fid),
                event_category: 'Web Vitals'
              });
            });
          }).observe({ entryTypes: ['first-input'] });

          // Track CLS
          let clsValue = 0;
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              const clsEntry = entry as LayoutShiftEntry;
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
                gtag('event', 'web_vitals', {
                  name: 'CLS',
                  value: Math.round(clsValue * 1000),
                  event_category: 'Web Vitals'
                });
              }
            });
          }).observe({ entryTypes: ['layout-shift'] });
        }
      };

      // Track page load performance
      const trackPageLoad = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            gtag('event', 'page_load_time', {
              value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
              event_category: 'Performance'
            });
          }
        }
      };

      // Track user engagement
      const trackEngagement = () => {
        let startTime = Date.now();
        let maxScrollDepth = 0;
        let timeOnPage = 0;

        // Track scroll depth
        const trackScroll = () => {
          const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
          maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
        };

        // Track time on page
        const trackTime = () => {
          timeOnPage = Date.now() - startTime;
        };

        window.addEventListener('scroll', trackScroll, { passive: true });
        
        // Track when user leaves page
        window.addEventListener('beforeunload', () => {
          trackTime();
          gtag('event', 'user_engagement', {
            value: Math.round(timeOnPage / 1000),
            scroll_depth: maxScrollDepth,
            event_category: 'Engagement'
          });
        });
      };

      // Initialize tracking
      trackWebVitals();
      trackPageLoad();
      trackEngagement();
    }

    // Google Tag Manager
    if (gtmId) {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  }, [gaId, gtmId, enabled]);

  return null;
});

Analytics.displayName = 'Analytics';

export default Analytics;