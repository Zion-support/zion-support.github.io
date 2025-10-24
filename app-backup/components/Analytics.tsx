import React, { useEffect } from &quot;react&quot;
'use client'
import React, { useEffect } from "react"

interface AnalyticsProps {
  className?: string
}
const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href})
      }
    }
    initAnalytics()
  }, [])
  return null; // Analytics component doesn&apos;t render anything
}
export default Analytics
};

export default AnalyticsPage;
  return null; // Analytics component doesn't render anything
}

export default Analytics
