"use client"

import React, { useEffect } from "react"

interface AnalyticsProps {
  className?: string}

const Analytics: React.FC<AnalyticsProps> = () => {
  useEffect(() => {
<<<<<<< HEAD
    // Analytics initialization would go here
    // For now, this is a placeholder component
    // console.log('Analytics component mounted');
  }, []);

  return null;
};

export default Analytics;
=======
    const initAnalytics = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href}))
      }
    }
    initAnalytics())
  }, []))
  return null; // Analytics component doesn't render anything
}

export default Analytics
>>>>>>> 37f1b5c5f3c3e6c4c4ce4d59d91fac2c3215daf9
