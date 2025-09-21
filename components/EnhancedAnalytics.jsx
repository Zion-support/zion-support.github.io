import React, { useEffect } from 'react';


const EnhancedAnalytics = () => {
  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Google Analytics 4
        if (window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
          });
        }

        // Custom analytics
        const analyticsData = {
          page: window.location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        };

        // Send to custom analytics endpoint
        fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(analyticsData),
        }).catch(console.error);
      }
    };

    // Track user interactions
    const trackInteraction = (event) => {
      if (typeof window !== 'undefined') {
        // Google Analytics 4
        if (window.gtag) {
          window.gtag('event', event.event, event.properties);
        }

        // Custom tracking
        console.log('Analytics Event:', event);
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          trackInteraction({
            event: 'scroll_depth',
            properties: { depth: scrollPercent }
          });
        }
      };

      window.addEventListener('scroll', trackScroll);
      return () => window.removeEventListener('scroll', trackScroll);
    };

    // Track form submissions
    const trackFormSubmissions = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', () => {
          trackInteraction({
            event: 'form_submit',
            properties: { form_id: form.id || 'unnamed' }
          });
        });
      });
    };

    // Track button clicks
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], button');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          trackInteraction({
            event: 'button_click',
            properties: { 
              text: button.textContent?.trim(),
              href: button.getAttribute('href'),
              type: button.tagName.toLowerCase()
            }
          });
        });
      });
    };

    // Initialize tracking
    trackPageView();
    const cleanupScroll = trackScrollDepth();
    trackFormSubmissions();
    trackButtonClicks();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  return null;
};


export default EnhancedAnalytics;