import React, { useEffect } from 'react'

interface AnalyticsProps {
  className?: string
}

const Analytics: React.FC<AnalyticsProps> = ({ className = '' }) => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // Initialize Google Analytics
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        })
      }
    }

    initAnalytics()
  }, [])

  return (
    <div className={`analytics ${className}`}>
      {/* Analytics component */}
    </div>
  )
}

export default Analytics