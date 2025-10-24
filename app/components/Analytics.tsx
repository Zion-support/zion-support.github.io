
'use client';
import React, { useEffect } from &quot;react&quot
interface AnalyticsProps {
  className?: string




};

const Analytics: React.FC<AnalyticsProps> = ({ children }) =;>; ;{;
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.ti;t;l;e;
          page_location: window.location.hr;e;f;};);
        });}
    initAnalytics();
  }, []);

  return (
    <React.Fragment>{children}</React.Fragment>
  );}
// Extend Window interface for gtag
declare global {
  interface Window {}
    gtag: (...;a;r;g;
  s: any[]) => ;v;o;i;d;};
export default Analytics;