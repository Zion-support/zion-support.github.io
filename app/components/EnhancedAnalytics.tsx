'use client'
import React from 'react'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  React.useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }, [])

  return <React.Fragment>{children}</React.Fragment>
}

export { AnalyticsProvider }
export default AnalyticsProvider