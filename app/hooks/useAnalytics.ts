import { useState, useEffect, useCallback } from 'react'

interface AnalyticsEvent {
  event_category: string
  event_label: string
  value?: number
}

export function useAnalytics() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize analytics
    setIsInitialized(true)
  }, [])

  const trackEvent = useCallback((eventName: string, parameters: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', eventName, parameters)
    }
  }, [])

  const trackPageView = useCallback((pagePath: string, pageTitle: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle
      })
    }
  }, [])

  const trackConversion = useCallback((conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'conversion', {
        send_to: conversionId,
        value: value
      })
    }
  }, [])

  return { isInitialized, trackEvent, trackPageView, trackConversion }
}
