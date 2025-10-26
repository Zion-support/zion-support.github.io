import React, { useEffect } from &quot;react&quot
interface AnalyticsProps {
  className?: string
}

const Analytics: React.FC = () => {
<<<<<<< HEAD:all-pages-backup/components/Analytics.tsx
  useEffect(() => {;
    const initAnalytics = () => {;
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title,
  page_location: window.location.href
=======
  useEffect(() => {
    const initAnalytics = () => {;
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title
          page_location: window.location.href
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/Analytics.tsx
        })
      }
    }
    initAnalytics()
  }, [])

  return null; // Analytics component doesn&apos;t render anything
}

export default Analytics
<<<<<<< HEAD:all-pages-backup/components/Analytics.tsx
{};

export default AnalyticsPage
=======
}
export default AnalyticsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/Analytics.tsx
