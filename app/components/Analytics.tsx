<<<<<<< HEAD

'use client';
import { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;

=======
import { useEffect } from 'react';
interface AnalyticsProps {
  children: React.ReactNode;
}
  useEffect(() => {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
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
  return (
    <>
      }

<<<<<<< HEAD
  return <React.Fragment />{children}</React.Fragment>;

// Extend Window interface for gtag
declare global {
  interface Window {
 void;
=======
      // Extend Window interface for gtag
      declare global {
      interface Window {
      gtag: (...args: unknown[]) => void;
      }
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
