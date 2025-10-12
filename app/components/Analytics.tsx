
'use client';
import { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;

    // Initialize analytics tracking
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
    };

    initAnalytics();
  }, []);

<<<<<<< HEAD
  return <React.Fragment >{children}</React.Fragment ></React.Fragment>;
}
=======
  return <React.Fragment />{children}</React.Fragment>;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882

// Extend Window interface for gtag
declare global {
  interface Window {
 void;