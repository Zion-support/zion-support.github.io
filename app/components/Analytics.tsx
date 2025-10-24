import React from 'react';
<<<<<<< HEAD'use client'
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-737c;
import React, { useEffect } from "react"

interface AnalyticsProps {
  className?: string;
}

<<<<<<< HEADconst Analytics: "React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
=======
const Analytics: React.FC = () =>{useEffect(() => {
    ;
const initAnalytics = () =</ {  return;>>>>>>> cursor/fix-errors-and-merge-to-main-737c"      if (typeof window !== "undefined" && window.gtag) {"        window.gtag("config"", "GA_MEASUREMENT_ID", {          page_title="document.title,          page_location: "window.location.href""})
      }
    }
    initAnalytics()  }, [])<<<<<<< HEAD'
  return null; // Analytics component doesn't render anything
}

export default Analytics
=======
  return null; // Analytics component doesn&apos;t render anything;
}
export default Analytics;};export default AnalyticsPage;>>>>>>> cursor/fix-errors-and-merge-to-main-737c"'
})

export default ;
function Page() {
  return <div>Page content</div>;
}