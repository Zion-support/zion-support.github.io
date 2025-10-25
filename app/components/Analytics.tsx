<<<<<<< HEAD
import React, { useEffect } from "react"
interface AnalyticsProps {

;
  className?: string;


}
const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href});
        });}
    initAnalytics();
  }, []);

  return (
    <React.Fragment>{children}</React.Fragment>
  );}
// Extend Window interface for gtag
declare global {
  interface Window {}
    gtag: (...arg,
  s: any[]) => void;};
export default Analytics;
=======
'use client';

import React, { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag
      (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag = (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag || function() {
        ((window as unknown as { gtag: { q: unknown[] } }).gtag.q = (window as unknown as { gtag: { q: unknown[] } }).gtag.q || []).push(arguments);
      };

      // Load GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize GA
      (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('js', new Date());
      (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return <>{children}</>;
};

export default Analytics;
>>>>>>> origin/main
