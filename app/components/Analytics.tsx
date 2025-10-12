'use client';
import { useEffect } from 'react';


interface AnalyticsPro p s {
  children: React.ReactNode;
}

  useEffect(() => {)
    // Initialize analytics tracking;
    const initAnalytics= () => {
      // Google Analytics initializati o n;
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ I D', {)
          page_title: document.title,
          page_locati o n: window.location.href,
        });
      }
    };

    initAnalyti c s();
  }, []);

  return <React.Fragment >{children}</React.Fragment ></React.Fragment>;
}

// Extend Window interface for gtag;
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}