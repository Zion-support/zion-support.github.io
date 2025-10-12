<<<<<<< HEAD
<<<<<<< HEAD

=======
'use client';
interface AnalyticsProps {
  children: React.ReactNode;
}
import { useEffect } from 'react';
interface AnalyticsProps {
  children: React.ReactNode;
}
  useEffect(() => {
    // Initialize analytics tracking
      // Google Analytics initialization
  useEffect(() => {
    // Initialize analytics tracking;
    const initAnalytics = () => {;
      // Google Analytics initialization;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
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
    <div>Content</div>
  );
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
  return <React.Fragment>{children}</React.Fragment>;
// Extend Window interface for gtag;
declare global {
  interface Window {
      // Extend Window interface for gtag
      declare global {
      interface Window {
      gtag: (...args: unknown[]) => void;
      }
      }
    gtag: (...args: unknown[]) => void;
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
