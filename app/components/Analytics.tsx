import {useEffect} from 'react';
'use client';


interface Analytics Props {
  children: React.React Node;
}

  use Effect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeofwindow !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    init Analytics();
  }, []);

  return <React.Fragment />{children}</React.Fragment>;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}