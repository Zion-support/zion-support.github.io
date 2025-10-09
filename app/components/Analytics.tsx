'use client';
import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 setup
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual tracking ID
    
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

    // Track page views
    const trackPageView = () => {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        gtag('event', 'scroll', {
          event_category: 'engagement',
          event_label: `${scrollPercent}%`,
          value: scrollPercent,
        });
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      gtag('event', 'timing_complete', {
        name: 'time_on_page',
        value: timeOnPage,
      });
    };

    // Track clicks on important elements
    const trackClicks = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');
      
      if (link) {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: link.href,
          link_url: link.href,
        });
      } else if (button) {
        gtag('event', 'click', {
          event_category: 'engagement',
          event_label: button.textContent || 'button',
        });
      }
    };

    // Track form submissions
    const trackFormSubmissions = (event: Event) => {
      const form = event.target as HTMLFormElement;
      gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: form.action || 'form',
      });
    };

    // Track phone number clicks
    const trackPhoneClicks = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.href && target.href.startsWith('tel:')) {
        gtag('event', 'phone_click', {
          event_category: 'engagement',
          event_label: target.href,
        });
      }
    };

    // Track email clicks
    const trackEmailClicks = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.href && target.href.startsWith('mailto:')) {
        gtag('event', 'email_click', {
          event_category: 'engagement',
          event_label: target.href,
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth);
    document.addEventListener('click', trackClicks);
    document.addEventListener('click', trackPhoneClicks);
    document.addEventListener('click', trackEmailClicks);
    document.addEventListener('submit', trackFormSubmissions);

    // Track page view on load
    trackPageView();

    // Track time on page before unload
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      document.removeEventListener('click', trackClicks);
      document.removeEventListener('click', trackPhoneClicks);
      document.removeEventListener('click', trackEmailClicks);
      document.removeEventListener('submit', trackFormSubmissions);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;