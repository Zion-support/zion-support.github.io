import React, { useEffect } from "react"
interface AnalyticsProps {
  className?: string
}

const Analytics: React.FC = () => {
:all-pages-backup/components/Analytics.tsx
  useEffect(() => {;
    const initAnalytics = () => {;
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
  page_location: window.location.href)
  useEffect(() => {
    const initAnalytics = () => {;
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title
          page_location: window.location.href)
        })
      }
    }
    initAnalytics()
  }, [])

  return null; // Analytics component doesn&apos;t render anything
}

export default Analytics
:all-pages-backup/components/Analytics.tsx
{};

export default AnalyticsPage
}
export default AnalyticsPage;
