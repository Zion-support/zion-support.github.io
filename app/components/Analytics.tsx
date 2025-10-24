import React, { useEffect } from "react"

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    };

  return null; // Analytics component doesn't render anything
}

export default Analytics
