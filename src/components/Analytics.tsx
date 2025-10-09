'use client';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };

    // Track user interactions
    const trackInteractions = () => {
      // Track button clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const buttonText = target.textContent?.trim() || '';
          const buttonHref = target.getAttribute('href') || '';
          
          if (window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'engagement',
              event_label: buttonText,
              value: buttonHref
            });
          }
        }
      });

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement;
        const formName = form.getAttribute('name') || form.id || 'unknown_form';
        
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: formName
          });
        }
      });

      // Track phone number clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('tel:')) {
          if (window.gtag) {
            window.gtag('event', 'phone_click', {
              event_category: 'engagement',
              event_label: 'phone_number'
            });
          }
        }
      });

      // Track email clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('mailto:')) {
          if (window.gtag) {
            window.gtag('event', 'email_click', {
              event_category: 'engagement',
              event_label: 'email_address'
            });
          }
        }
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          if (window.gtag && (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 100)) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${scrollPercent}%`
            });
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (window.gtag && (timeSpent === 30 || timeSpent === 60 || timeSpent === 120 || timeSpent === 300)) {
          window.gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: `${timeSpent} seconds`
          });
        }
      };

      const interval = setInterval(trackTime, 1000);
      return () => clearInterval(interval);
    };

    // Initialize analytics
    initGA();
    trackPageView();
    trackInteractions();
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();

    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);

  return null;
};

export default Analytics;