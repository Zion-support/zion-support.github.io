<<<<<<< HEAD
import React, { useEffect } from &quot;react&quot
interface AnalyticsProps {
  className?: string
}
const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title,
    page_location: window.location.href})
      }
    }
    initAnalytics()
  }, [])
  return null; // Analytics component doesn&apos;t render anything
}
export default Analytics
}
export default AnalyticsPage
=======
<<<<<<< HEAD
'use client';
import React, { useEffect } from 'react';

interface AnalyticsProps {
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  enableGoogleAnalytics = true,
  enablePerformanceMonitoring = true,
  enableErrorTracking = true,
  enableUserBehaviorTracking = true,
}) => {
  useEffect(() => {
    if (enableGoogleAnalytics) {
      initializeGoogleAnalytics();
    }
    if (enablePerformanceMonitoring) {
      initializePerformanceMonitoring();
    }
    if (enableErrorTracking) {
      initializeErrorTracking();
    }
    if (enableUserBehaviorTracking) {
      initializeUserBehaviorTracking();
    }
  }, [enableGoogleAnalytics, enablePerformanceMonitoring, enableErrorTracking, enableUserBehaviorTracking]);

  const initializeGoogleAnalytics = () => {
    // Load Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID');
    }
  };

  const initializePerformanceMonitoring = () => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Performance monitoring logic
    }
  };

  const initializeErrorTracking = () => {
    // Initialize error tracking
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Error tracked:', event.error);
      });
    }
  };

  const initializeUserBehaviorTracking = () => {
    // Initialize user behavior tracking
    if (typeof window !== 'undefined') {
      // User behavior tracking logic
    }
  };

  return null; // This component doesn't render anything visible
};

export default Analytics;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
>>>>>>> main
