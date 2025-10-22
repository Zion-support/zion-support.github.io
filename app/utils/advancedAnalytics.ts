interface AnalyticsEvent {
  event_name: string
  event_category: string
  event_label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

interface UserProperties {
  user_id?: string
  session_id?: string
  user_type?: string
  custom_properties?: Record<string, any>
}

interface AnalyticsConfig {
  measurement_id: string
  api_secret?: string
  debug_mode?: boolean
  enhanced_ecommerce?: boolean
}

export class AdvancedAnalytics {
  private config: AnalyticsConfig
  private userProperties: UserProperties = {}

  constructor(config: AnalyticsConfig) {
    this.config = config
    this.initialize()
  }

  private initialize(): void {
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics 4
      this.loadGA4()
      
      // Initialize custom event tracking
      this.setupCustomEvents()
    }
  }

  private loadGA4(): void {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.measurement_id}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', this.config.measurement_id, {
      debug_mode: this.config.debug_mode || false
    })
  }

  private setupCustomEvents(): void {
    // Track page views
    this.trackPageView(window.location.pathname)
    
    // Track scroll depth
    this.trackScrollDepth()
    
    // Track time on page
    this.trackTimeOnPage()
  }

  trackEvent(event: AnalyticsEvent): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.event_name, {
        event_category: event.event_category,
        event_label: event.event_label,
        value: event.value,
        ...event.custom_parameters
      })
    }
  }

  trackPageView(page_path: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', this.config.measurement_id, {
        page_path
      })
    }
  }

  trackConversion(conversion_id: string, value?: number): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversion_id,
        value: value
      })
    }
  }

  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', this.config.measurement_id, {
        user_id: this.userProperties.user_id,
        custom_map: this.userProperties.custom_properties
      })
    }
  }

  private trackScrollDepth(): void {
    let maxScroll = 0
    const scrollThresholds = [25, 50, 75, 90, 100]
    const trackedThresholds = new Set<number>()

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        
        scrollThresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
            trackedThresholds.add(threshold)
            this.trackEvent({
              event_name: 'scroll_depth',
              event_category: 'engagement',
              event_label: `${threshold}%`,
              value: threshold
            })
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
  }

  private trackTimeOnPage(): void {
    const startTime = Date.now()
    
    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      
      this.trackEvent({
        event_name: 'time_on_page',
        event_category: 'engagement',
        value: timeOnPage
      })
    }

    // Track time on page every 30 seconds
    setInterval(trackTime, 30000)
    
    // Track final time on page when user leaves
    window.addEventListener('beforeunload', trackTime)
  }

  trackEcommerceEvent(eventName: string, parameters: Record<string, any>): void {
    if (this.config.enhanced_ecommerce && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        currency: 'USD',
        ...parameters
      })
    }
  }

  trackCustomEvent(eventName: string, parameters: Record<string, any> = {}): void {
    this.trackEvent({
      event_name: eventName,
      event_category: 'custom',
      custom_parameters: parameters
    })
  }
}

// Default analytics instance
export const analytics = new AdvancedAnalytics({
  measurement_id: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  debug_mode: process.env.NODE_ENV === 'development'
})