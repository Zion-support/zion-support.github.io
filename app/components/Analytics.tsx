import React, { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    // Simple analytics tracking
    const trackPageView = () => {
      if (typeof window !== 'undefined') {
        // Track page view
        console.log('Page view tracked:', window.location.pathname);
        
        // Track user interactions
        const trackClick = (event: Event) => {
          const target = event.target as HTMLElement;
          if (target.tagName === 'A' || target.tagName === 'BUTTON') {
            console.log('Click tracked:', target.textContent || target.getAttribute('href'));
          }
        };

        document.addEventListener('click', trackClick);
        
        return () => {
          document.removeEventListener('click', trackClick);
        };
      }
    };

    const cleanup = trackPageView();
    return cleanup;
  }, []);

  return null;
}