'use client';
import React, { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views
      const trackPageView = () => {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          custom_parameter_1: 'zion_tech_group',
        });
      };

      // Track user interactions
      const trackInteraction = (eventName: string, parameters: any = {}) => {
        gtag('event', eventName, {
          event_category: 'User Interaction',
          ...parameters,
        });
      };

      // Track button clicks
      const trackButtonClicks = () => {
        document.addEventListener('click', (event) => {
          const target = event.target as HTMLElement;
          const button = target.closest('button, a[role="button"]');
          if (button) {
            const buttonText = button.textContent?.trim() || 'Unknown Button';
            const buttonHref = button.getAttribute('href');
            
            trackInteraction('button_click', {
              button_text: buttonText,
              button_href: buttonHref,
              page_location: window.location.href,
            });
          }
        });
      };

      // Track form submissions
      const trackFormSubmissions = () => {
        document.addEventListener('submit', (event) => {
          const form = event.target as HTMLFormElement;
          const formId = form.id || 'unknown_form';
          
          trackInteraction('form_submit', {
            form_id: formId,
            page_location: window.location.href,
          });
        });
      };

      // Track scroll depth
      const trackScrollDepth = () => {
        let maxScroll = 0;
        const trackScroll = () => {
          const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
          if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
            maxScroll = scrollPercent;
            trackInteraction('scroll_depth', {
              scroll_percent: scrollPercent,
              page_location: window.location.href,
            });
          }
        };

        window.addEventListener('scroll', trackScroll, { passive: true });
        return () => window.removeEventListener('scroll', trackScroll);
      };

      // Track time on page
      const trackTimeOnPage = () => {
        const startTime = Date.now();
        
        const trackTime = () => {
          const timeOnPage = Math.round((Date.now() - startTime) / 1000);
          if (timeOnPage > 0 && timeOnPage % 30 === 0) {
            trackInteraction('time_on_page', {
              time_seconds: timeOnPage,
              page_location: window.location.href,
            });
          }
        };

        const interval = setInterval(trackTime, 30000);
        return () => clearInterval(interval);
      };

      // Track initial page view
      trackPageView();

      // Initialize all tracking
      trackButtonClicks();
      trackFormSubmissions();
      const cleanupScroll = trackScrollDepth();
      const cleanupTime = trackTimeOnPage();

      // Track navigation changes
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      window.addEventListener('popstate', trackPageView);

      return () => {
        window.removeEventListener('popstate', trackPageView);
        cleanupScroll();
        cleanupTime();
      };
    }
  }, []);

  return null;
};

export default Analytics;
