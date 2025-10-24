import React, { useEffect } from 'react'

interface AnalyticsProps {
  className?: string
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const Analytics: React.FC<AnalyticsProps> = ({ className }) => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }
    initAnalytics()
  }, [])

  return null // Analytics component doesn't render anything
}

export default Analytics