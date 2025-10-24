'use client';

import React, { useEffect } from 'react';

<<<<<<< HEAD
// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (..._args: unknown[]) => void;
  }
}

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6f11
interface AnalyticsProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics()
    }
    
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring()
    }
    
    if (enableErrorTracking) {
      initializeErrorTracking()
    }
    
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking()
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking])

  const initializeGoogleAnalytics = () => {
    // Load Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID')
    }
  }

  const initializePerformanceMonitoring = () => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Performance monitoring logic
    }
  }

  const initializeErrorTracking = () => {
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Error tracked:', event.error)
      })
    }
  }

  const initializeUserBehaviorTracking = () => {
    // Initialize user behavior tracking
    if (typeof window !== 'undefined') {
      // User behavior tracking logic
    }
  }

  return null; // This component doesn't render anything visible
}

export default Analytics
=======
const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag
      (window as any).gtag = (window as any).gtag || function() {
        ((window as any).gtag.q = (window as any).gtag.q || []).push(arguments);
      };

      // Load GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize GA
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return <>{children}</>;
};

export default Analytics;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f11
