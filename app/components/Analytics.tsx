import React, { useEffect } from &quot;react&quot;
interface AnalyticsProps {}
  className?: strin;g;
}
const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== &quo,t;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot, &quot;GA_MEASUREMENT_ID&quot, {
          page_title: document.titl,e,
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