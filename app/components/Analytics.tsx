'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 setup
    if (typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with actual GA4 ID
      document.head.appendChild(script);

      // Initialize gtag
      window.gtag = window.gtag || function() {
        (window.gtag.q = window.gtag.q || []).push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      });

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

      // Track page view on load
      trackPageView();

      // Track page view on route change
      const handleRouteChange = () => {
        trackPageView();
      };

      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleRouteChange);

      // Track custom events
      const trackCustomEvent = (eventName: string, parameters: any = {}) => {
        if (window.gtag) {
          window.gtag('event', eventName, parameters);
        }
      };

      // Track phone clicks
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          trackCustomEvent('phone_click', {
            event_category: 'engagement',
            event_label: 'phone_number_click'
          });
        });
      });

      // Track email clicks
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
      emailLinks.forEach(link => {
        link.addEventListener('click', () => {
          trackCustomEvent('email_click', {
            event_category: 'engagement',
            event_label: 'email_click'
          });
        });
      });

      // Track service link clicks
      const serviceLinks = document.querySelectorAll('a[href*="/ai-"], a[href*="/it-"], a[href*="/micro-"]');
      serviceLinks.forEach(link => {
        link.addEventListener('click', () => {
          const href = link.getAttribute('href');
          trackCustomEvent('service_click', {
            event_category: 'engagement',
            event_label: href,
            service_name: href?.split('/').pop()
          });
        });
      });

      // Track scroll depth
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent;
          
          // Track at 25%, 50%, 75%, and 100%
          if ([25, 50, 75, 100].includes(scrollPercent)) {
            trackCustomEvent('scroll_depth', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`,
              value: scrollPercent
            });
          }
        }
      };

      window.addEventListener('scroll', trackScrollDepth);

      // Track form submissions
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', () => {
          trackCustomEvent('form_submit', {
            event_category: 'conversion',
            event_label: 'contact_form'
          });
        });
      });

      // Track time on page
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackCustomEvent('time_on_page', {
          event_category: 'engagement',
          event_label: 'page_duration',
          value: timeOnPage
        });
      };

      // Track time on page when user leaves
      window.addEventListener('beforeunload', trackTimeOnPage);

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, []);

  return null;
};

export default Analytics;