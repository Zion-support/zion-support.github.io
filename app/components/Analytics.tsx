<<<<<<< HEAD
'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    initAnalytics();
  }, []);

  return <>{children}</>;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default Analytics;
=======
import React, { useEffect } from &quot;react&quot;

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }
    initAnalytics()
  }, [])

  return null; // Analytics component doesn&apos;t render anything
}

export default Analytics
};

export default AnalyticsPage;
>>>>>>> origin/main
