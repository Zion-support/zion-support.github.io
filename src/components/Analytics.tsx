'use client';
import React, { useEffect } from "react"
interface AnalyticsProps {
className?: string
}
}
const Analytics: React.FC = () => {
:all-pages-backup/components/Analytics.tsx
useEffect(() => {
    const initAnalytics = () => {;,if(typeof, window !== &quot;undefined&quot; && window.gtag) {
window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
page_title: document.title,page_location: window.location.href)
useEffect(() => {
const initAnalytics = () => {;,if(typeof, window !== &quot;undefined&quot; && window.gtag) {
window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
page_title: document.title
page_locatio,n: window.location.href)
        ,})
      }
    }
    initAnalytics()
  }, [])
return (
null
  ); // Analytics component doesn&apos;t render anything
}
;
export default Analytics;: all-pages-backup/components/Analytics.tsx
{,}
export default AnalyticsPage;
}
export default AnalyticsPage;
}}