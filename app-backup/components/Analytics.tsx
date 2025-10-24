<<<<<<< HEAD:app-backup/components/Analytics.tsx
import React, { useEffect } from &quot;react&quot;
=======
<<<<<<< HEAD
'use client'
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-737c
import React, { useEffect } from "react"
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2:app/components/Analytics.tsx

interface AnalyticsProps {
  className?: string;
}

<<<<<<< HEAD
const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
<<<<<<< HEAD:app-backup/components/Analytics.tsx
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
=======
=======
const Analytics: React.FC = () =>{useEffect(() => {
    const initAnalytics = () =</ {
  return;
>>>>>>> cursor/fix-errors-and-merge-to-main-737c
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2:app/components/Analytics.tsx
          page_title: document.title,
          page_location: window.location.href})
      }
    }
    initAnalytics()
  }, [])

<<<<<<< HEAD:app-backup/components/Analytics.tsx
  return null; // Analytics component doesn&apos;t render anything
}

export default Analytics
};

export default AnalyticsPage;
=======
<<<<<<< HEAD
  return null; // Analytics component doesn't render anything
}

export default Analytics
=======
  return null; // Analytics component doesn&apos;t render anything;
}

export default Analytics;
};

export default AnalyticsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-737c
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2:app/components/Analytics.tsx
