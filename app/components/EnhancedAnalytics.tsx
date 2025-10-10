'use client';
import React, { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

const EnhancedAnalytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics 4
    const initGA = () => {
      if (typeof window !== 'undefined' && !window.gtag) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };

    // Track user interactions
    const trackInteraction = (event: AnalyticsEvent) => {
      if (window.gtag) {
        window.gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const scrollThresholds = [25, 50, 75, 90, 100];
      const trackedThresholds = new Set();

      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
        }

        scrollThresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold);
            trackInteraction({
              action: 'scroll',
              category: 'engagement',
              label: `${threshold}%`,
              value: threshold
            });
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Track form submissions
    const trackFormSubmissions = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formName = form.getAttribute('name') || 'unknown_form';
          trackInteraction({
            action: 'form_submit',
            category: 'engagement',
            label: formName
          });
        });
      });
    };

    // Track button clicks
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll('button, a[role="button"]');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const buttonText = button.textContent?.trim() || 'unknown_button';
          const buttonClass = button.className || '';
          
          trackInteraction({
            action: 'click',
            category: 'engagement',
            label: buttonText
          });
        });
      });
    };

    // Track external links
    const trackExternalLinks = () => {
      const links = document.querySelectorAll('a[href^="http"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && !href.includes('ziontechgroup.com')) {
            trackInteraction({
              action: 'click',
              category: 'outbound',
              label: href
            });
          }
        });
      });
    };

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            const paint = performance.getEntriesByType('paint');
            
            // Track Core Web Vitals
            const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
            const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
            
            if (fcp) {
              trackInteraction({
                action: 'timing',
                category: 'performance',
                label: 'first_contentful_paint',
                value: Math.round(fcp.startTime)
              });
            }
            
            if (lcp) {
              trackInteraction({
                action: 'timing',
                category: 'performance',
                label: 'largest_contentful_paint',
                value: Math.round(lcp.startTime)
              });
            }
            
            // Track page load time
            trackInteraction({
              action: 'timing',
              category: 'performance',
              label: 'page_load_time',
              value: Math.round(navigation.loadEventEnd - navigation.navigationStart)
            });
          }, 0);
        });
      }
    };

    // Track errors
    const trackErrors = () => {
      window.addEventListener('error', (e) => {
        trackInteraction({
          action: 'error',
          category: 'javascript',
          label: e.message,
          value: 1
        });
      });

      window.addEventListener('unhandledrejection', (e) => {
        trackInteraction({
          action: 'error',
          category: 'promise',
          label: e.reason?.toString() || 'unknown',
          value: 1
        });
      });
    };

    // Initialize all tracking
    initGA();
    trackPageView();
    const cleanupScroll = trackScrollDepth();
    trackFormSubmissions();
    trackButtonClicks();
    trackExternalLinks();
    trackPerformance();
    trackErrors();

    // Cleanup
    return () => {
      if (cleanupScroll) {
        cleanupScroll();
      }
    };
  }, []);

  return null;
};

export default EnhancedAnalytics;