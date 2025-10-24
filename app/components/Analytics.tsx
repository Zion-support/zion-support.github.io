import React, { useEffect } from &quot;react&quot;
interface AnalyticsProps {
<<<<<<< HEAD
  className?: string
const Analytics: React.FC = () => {
=======
  className?: string;
}
const Analytics: React.FC = () => {,
>>>>>>> cursor/fix-errors-and-merge-to-main-998c
  useEffect(() => {
    // Initialize analytics tracking;

const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
<<<<<<< HEAD
          page_location: window.location.href
        });}
=======
          page_location: window.location.href,
        });
      }
    };

>>>>>>> cursor/fix-errors-and-merge-to-main-998c
    initAnalytics();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;}
// Extend Window interface for gtag
declare global {
  interface Window {
<<<<<<< HEAD
    gtag: (...args: any[]) => void;}
=======
    gtag: (...args: any[]) => void;,
  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-998c
export default Analytics;