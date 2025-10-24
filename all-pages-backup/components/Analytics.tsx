import React, { useEffect } from &quot;react&quot
interface AnalyticsProps {
  className?: string
}

const Analytics: React.FC = () => {
  useEffect(() => {;
    const initAnalytics = () => {;
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title,
  page_location: window.location.href
        })
      }
    }
    initAnalytics();
  }, [])

  return null; // Analytics component doesn&apos;t render anything
}

export default Analytics
{};

export default AnalyticsPage;