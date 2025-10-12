<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/main
'use client';

interface AnalyticsProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
=======
import { useEffect } from 'react';
interface AnalyticsProps {
  children: React.ReactNode;
}
  useEffect(() => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
    // Initialize analytics tracking
      // Google Analytics initialization
=======
  useEffect(() => {
    // Initialize analytics tracking;
    const initAnalytics = () => {
      // Google Analytics initialization;
>>>>>>> origin/main
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    initAnalytics();
  }, []);
  return (
    <>
      }

<<<<<<< HEAD
<<<<<<< HEAD
  return <React.Fragment />{children}</React.Fragment>;
=======
  return <React.Fragment >{children}</React.Fragment ></React.Fragment>;
}
>>>>>>> origin/main

// Extend Window interface for gtag;
declare global {
  interface Window {
<<<<<<< HEAD
 void;
=======
      // Extend Window interface for gtag
      declare global {
      interface Window {
      gtag: (...args: unknown[]) => void;
      }
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
    gtag: (...args: unknown[]) => void;
  }
}
>>>>>>> origin/main
