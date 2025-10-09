'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Analytics: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);

      // Initialize GA
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }

    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            
            if (window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime),
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
    }

    // Track user interactions
    const trackInteraction = (eventName: string, category: string, label?: string) => {
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: category,
          event_label: label,
        });
      }
    };

    // Track button clicks
    const buttons = document.querySelectorAll('button, a[href^="tel:"], a[href^="mailto:"]');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const text = target.textContent || target.getAttribute('aria-label') || 'Unknown';
        trackInteraction('click', 'button', text);
      });
    });

    // Track form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        const formData = new FormData(form as HTMLFormElement);
        const formName = form.getAttribute('name') || 'contact_form';
        trackInteraction('form_submit', 'form', formName);
      });
    });

    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        trackInteraction('scroll', 'engagement', `${scrollPercent}%`);
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, [pathname]);

  return null;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;