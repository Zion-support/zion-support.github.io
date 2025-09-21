import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Simple analytics tracking
    const trackEvent = (eventName, properties = {}) => {
      // In a real app, you would send this to your analytics service
      console.log('Analytics Event:', eventName, properties);
      
      // Example: Send to Google Analytics or other service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, properties);
      }
    };

    // Track page view
    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString()
    });

    // Track user interactions
    const trackClick = (event) => {
      const element = event.target;
      if (element.tagName === 'A' || element.tagName === 'BUTTON') {
        trackEvent('click', {
          element_type: element.tagName.toLowerCase(),
          element_text: element.textContent?.slice(0, 50),
          element_href: element.href || null
        });
      }
    };

    document.addEventListener('click', trackClick);

    return () => {
      document.removeEventListener('click', trackClick);
    };
  }, []);

  return null;
};

export default Analytics;