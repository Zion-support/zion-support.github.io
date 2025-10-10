'use client'
<<<<<<< HEAD
=======
/**
 * Advanced Analytics System for Zion Tech Group Website
 * Provides comprehensive user behavior tracking and insights
 */
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5

interface UserEvent {
  id: string
  type: string
  name: string
  value?: number
  timestamp: string
  sessionId: string
  userId?: string
  url: string
  metadata?: Record<string, unknown>
}

interface UserSession {
  id: string
  startTime: string
  endTime?: string
  duration?: number
  pageViews: number
  events: UserEvent[]
  referrer?: string
  userAgent: string
  device: 'desktop' | 'mobile' | 'tablet'
  browser: string
  os: string
  country?: string
  city?: string
}

interface AnalyticsConfig {
  enableTracking: boolean
  enableHeatmaps: boolean
  enableSessionRecording: boolean
  enableA_BTesting: boolean
  enableConversionTracking: boolean
  enablePerformanceTracking: boolean
  enableErrorTracking: boolean
  enableUserJourneyTracking: boolean
}

class AdvancedAnalytics {
  private static instance: AdvancedAnalytics
  private config: AnalyticsConfig
  private currentSession: UserSession
  private eventQueue: UserEvent[] = []
<<<<<<< HEAD

  constructor() {
=======
  private maxQueueSize = 1000
  private isOnline = true

  private constructor() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
    this.config = {
      enableTracking: true,
      enableHeatmaps: true,
      enableSessionRecording: false,
      enableA_BTesting: true,
      enableConversionTracking: true,
      enablePerformanceTracking: true,
      enableErrorTracking: true,
      enableUserJourneyTracking: true
    }
    this.currentSession = this.createNewSession()
    this.initializeTracking()
  }

  static getInstance(): AdvancedAnalytics {
    if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new AdvancedAnalytics()
    }
    return AdvancedAnalytics.instance
  }

  /**
   * Initialize comprehensive analytics tracking
   */
  private initializeTracking(): void {
    if (typeof window === 'undefined' || !this.config.enableTracking) return
<<<<<<< HEAD

=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
    // Track page views
    this.trackPageView()
    
    // Track clicks
    this.trackClicks()
    
    // Track scrolls
    this.trackScrolls()
    
    // Track form submissions
    this.trackFormSubmissions()
    
    // Track downloads
    this.trackDownloads()
    
    // Track performance
    if (this.config.enablePerformanceTracking) {
      this.trackPerformance()
    }
    
    // Track user journey
    if (this.config.enableUserJourneyTracking) {
      this.trackUserJourney()
    }
    
    // Setup network monitoring
    this.setupNetworkMonitoring()
  }

  /**
   * Create new user session
   */
  private createNewSession(): UserSession {
    return {
      id: this.generateSessionId(),
      startTime: new Date().toISOString(),
      pageViews: 0,
      events: [],
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : '',
      device: this.detectDevice(),
      browser: this.detectBrowser(),
      os: this.detectOS(),
<<<<<<< HEAD
<<<<<<< HEAD
      referrer: document.referrer
=======
      referrer: typeof window !== 'undefined' ? document.referrer : ''
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
=======
      referrer: document.referrer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
    }
  }

  /**
   * Track page views
   */
  trackPageView(url?: string, title?: string): void {
    if (typeof window === 'undefined') return
    
    const event: UserEvent = {
      id: this.generateEventId(),
      type: 'page_view',
      name: 'Page View',
      timestamp: new Date().toISOString(),
      sessionId: this.currentSession.id,
      url: url || window.location.href,
      metadata: {
<<<<<<< HEAD
        title: title || document.title,
        referrer: document.referrer
=======
        referrer: document.referrer,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
      }
    }

    this.addEvent(event)
    this.currentSession.pageViews++
  }

<<<<<<< HEAD
  /**
   * Track custom events
   */
  trackEvent(name: string, value?: number, metadata?: Record<string, unknown>): void {
    const event: UserEvent = {
      id: this.generateEventId(),
      type: 'custom_event',
      name,
      value,
      timestamp: new Date().toISOString(),
      sessionId: this.currentSession.id,
      url: window.location.href,
      metadata
    }

    this.addEvent(event)
  }

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
  /**
   * Track clicks
   */
  private trackClicks(): void {
<<<<<<< HEAD
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const element = target.closest('a, button, [role="button"]')
      
      if (element) {
        this.trackEvent('click', undefined, {
          element: element.tagName.toLowerCase(),
          text: element.textContent?.trim(),
          href: (element as HTMLAnchorElement).href,
          className: element.className
        })
=======
    if (typeof window === 'undefined') return
    
    document.addEventListener('click', event => {
      const target = event.target as HTMLElement
      const element = this.getElementInfo(target)
      const clickEvent: UserEvent = {
        id: this.generateEventId(),
        type: 'click',
        category: element.category,
        action: 'click',
        label: element.label,
        timestamp: new Date().toISOString(),
        sessionId: this.currentSession.id,
        userId: this.getUserId(),
        url: window.location.href,
        metadata: {
          element: element.tagName,
<<<<<<< HEAD
          text: element.text,
          position: element.position
=======
          id: element.id,
          className: element.className,
          text: element.text?.substring(0, 100),
          position: {
            x: event.clientX,
            y: event.clientY
          }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
        }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
      }
    })
  }

  /**
   * Track scrolls
   */
  private trackScrolls(): void {
    if (typeof window === 'undefined') return
    
    let scrollTimeout: NodeJS.Timeout
    
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
<<<<<<< HEAD
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        )
        
        this.trackEvent('scroll', scrollPercent, {
          scrollY: window.scrollY,
          scrollPercent
        })
=======
        const scrollEvent: UserEvent = {
          id: this.generateEventId(),
          type: 'scroll',
          category: 'engagement',
          action: 'scroll',
          value: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
<<<<<<< HEAD
          url: window.location.href
=======
          url: window.location.href,
          metadata: {
            scrollY: window.scrollY,
            scrollPercentage: Math.round(
              (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            )
          }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
        }
        this.trackEvent(scrollEvent)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
      }, 150)
    })
  }

  /**
   * Track form submissions
   */
  private trackFormSubmissions(): void {
<<<<<<< HEAD
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement
      this.trackEvent('form_submit', undefined, {
        formId: form.id,
        formAction: form.action,
        formMethod: form.method,
        fieldCount: form.elements.length
      })
=======
    if (typeof window === 'undefined') return
    
    document.addEventListener('submit', event => {
      const form = event.target as HTMLFormElement
      const formEvent: UserEvent = {
        id: this.generateEventId(),
        type: 'form_submit',
        category: 'conversion',
        action: 'form_submit',
        label: form.id || form.className || 'unknown_form',
        timestamp: new Date().toISOString(),
        sessionId: this.currentSession.id,
        userId: this.getUserId(),
        url: window.location.href,
        metadata: {
          formId: form.id,
          formClass: form.className,
<<<<<<< HEAD
          formAction: form.action
=======
          formAction: form.action,
          formMethod: form.method,
          fields: formFields
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
        }
      }
      this.trackEvent(formEvent)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
    })
  }

  /**
   * Track downloads
   */
  private trackDownloads(): void {
<<<<<<< HEAD
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement
      
      if (link && this.isDownloadLink(link.href)) {
        this.trackEvent('download', undefined, {
          fileName: link.href.split('/').pop(),
          fileType: link.href.split('.').pop(),
          href: link.href
        })
=======
    if (typeof window === 'undefined') return
    
    document.addEventListener('click', event => {
      const target = event.target as HTMLElement
      const link = target.closest('a')
      if (link && this.isDownloadLink(link)) {
        const downloadEvent: UserEvent = {
          id: this.generateEventId(),
          type: 'download',
          category: 'conversion',
          action: 'download',
          label: link.href.split('/').pop() || 'unknown_file',
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
          url: window.location.href,
          metadata: {
            downloadUrl: link.href,
<<<<<<< HEAD
            downloadText: link.textContent || ''
=======
            downloadText: link.textContent?.substring(0, 100)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
          }
        }
        this.trackEvent(downloadEvent)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
      }
    })
  }

  /**
   * Track performance metrics
   */
  private trackPerformance(): void {
<<<<<<< HEAD
<<<<<<< HEAD
    if (typeof window.performance === 'undefined') return

    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const paint = performance.getEntriesByType('paint')
        
        this.trackEvent('performance', undefined, {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
          firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime
        })
=======
    if (typeof window === 'undefined') return
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const perfEvent: UserEvent = {
=======
    if ('PerformanceObserver' in window) {
      // Track Core Web Vitals
      new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            const paintEvent: UserEvent = {
              id: this.generateEventId(),
              type: 'custom',
              category: 'performance',
              action: entry.name,
              value: entry.startTime,
              timestamp: new Date().toISOString(),
              sessionId: this.currentSession.id,
              userId: this.getUserId(),
              url: window.location.href,
              metadata: {
                metric: entry.name,
                value: entry.startTime
              }
            }
            this.trackEvent(paintEvent)
          }
        }
      }).observe({ entryTypes: ['paint'] })
      // Track navigation timing
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType(
          'navigation'
        )[0] as PerformanceNavigationTiming
        const performanceEvent: UserEvent = {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
          id: this.generateEventId(),
          type: 'custom',
          category: 'performance',
          action: 'page_load',
          value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
          url: window.location.href,
          metadata: {
<<<<<<< HEAD
            loadTime: perfData.loadEventEnd - perfData.loadEventStart,
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            firstPaint: this.getFirstPaint(),
            firstContentfulPaint: this.getFirstContentfulPaint()
=======
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded:
              navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstByte: navigation.responseStart - navigation.requestStart
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
          }
        }
        this.trackEvent(perfEvent)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
      }, 0)
    })
  }

  /**
   * Track user journey
   */
  private trackUserJourney(): void {
<<<<<<< HEAD
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.trackEvent('visibility_change', undefined, {
        hidden: document.hidden,
        visibilityState: document.visibilityState
      })
    })

    // Track focus changes
    window.addEventListener('focus', () => {
      this.trackEvent('window_focus')
    })

    window.addEventListener('blur', () => {
      this.trackEvent('window_blur')
    })
=======
    if (typeof window === 'undefined') return
    
    // Track page transitions
    let lastUrl = window.location.href
    const observer = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        this.trackPageView()
        lastUrl = window.location.href
      }
    })
<<<<<<< HEAD
    observer.observe(document, { subtree: true, childList: true })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
=======
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Setup network monitoring
   */
  private setupNetworkMonitoring(): void {
<<<<<<< HEAD
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      this.trackEvent('connection_info', undefined, {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      })
    }
=======
    if (typeof window === 'undefined') return
    
    window.addEventListener('online', () => {
      this.isOnline = true
      this.flushEventQueue()
    })
    
    window.addEventListener('offline', () => {
      this.isOnline = false
    })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
  }

  /**
   * Add event to queue and session
   */
<<<<<<< HEAD
  private addEvent(event: UserEvent): void {
    this.eventQueue.push(event)
    this.currentSession.events.push(event)
    
    // Send to analytics service (implement based on your needs)
    this.sendToAnalytics(event)
=======
  trackCustomEvent(category: string, action: string, label?: string, value?: number, metadata?: Record<string, unknown>): void {
    const event: UserEvent = {
      id: this.generateEventId(),
      type: 'custom',
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
      sessionId: this.currentSession.id,
      userId: this.getUserId(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      metadata
    }
    this.trackEvent(event)
  }

  /**
   * Track event (internal method)
   */
  private trackEvent(event: UserEvent): void {
    this.currentSession.events.push(event)
    this.eventQueue.push(event)
<<<<<<< HEAD
    
    if (this.eventQueue.length >= this.maxQueueSize) {
      this.flushEventQueue()
=======
    // Keep queue size manageable
    if (this.eventQueue.length > this.maxQueueSize) {
      this.eventQueue.shift()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
    }
    
    if (this.isOnline) {
<<<<<<< HEAD
      this.sendEventToServer(event)
=======
      this.sendEvent(event)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
  }

  /**
   * Send event to server
   */
<<<<<<< HEAD
  private sendToAnalytics(event: UserEvent): void {
    // Implement your analytics service integration here
    
=======
  private async sendEventToServer(event: UserEvent): Promise<void> {
    try {
<<<<<<< HEAD
      // In a real implementation, you would send to your analytics server
      console.log('Analytics event:', event)
    } catch (error) {
      console.error('Failed to send analytics event:', error)
=======
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
    } catch (error) {
      // Handle error silently
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
    }
  }

  /**
   * Flush event queue
   */
  private flushEventQueue(): void {
    if (this.eventQueue.length === 0) return
    
    const events = [...this.eventQueue]
    this.eventQueue = []
<<<<<<< HEAD
    
    // Send all events to server
    events.forEach(event => this.sendEventToServer(event))
=======
    for (const event of eventsToSend) {
      await this.sendEvent(event)
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Generate unique session ID
   */
<<<<<<< HEAD
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
=======
  private getElementInfo(element: HTMLElement): {
    category: string
    label: string
    tagName: string
    id: string
    className: string
    text?: string
  } {
    const tagName = element.tagName.toLowerCase()
    const id = element.id || ''
    const className = element.className || ''
    const text = element.textContent?.trim()
    // Determine category based on element type
    let category = 'interaction'
    if (tagName === 'button' || element.closest('button')) {
      category = 'button'
    } else if (tagName === 'a' || element.closest('a')) {
      category = 'link'
    } else if (tagName === 'input' || tagName === 'select' || tagName === 'textarea') {
      category = 'form'
    }
    // Create label
    let label = id || className || text?.substring(0, 50) || tagName
    return {
      category,
      label,
      tagName,
      id,
      className,
      text
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Generate unique event ID
   */
<<<<<<< HEAD
  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
=======
  private isDownloadLink(link: HTMLAnchorElement): boolean {
    return (
      link.download !== '' ||
      !!link.href.match(/\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|tar|gz)$/i) ||
      link.getAttribute('data-download') === 'true'
    )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Get user ID from storage or generate new one
   */
  private getUserId(): string | undefined {
    if (typeof window === 'undefined') return undefined
    
    let userId = localStorage.getItem('analytics_user_id')
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('analytics_user_id', userId)
    }
    return userId
  }

  /**
   * Detect device type
   */
  private detectDevice(): 'desktop' | 'mobile' | 'tablet' {
    if (typeof window === 'undefined') return 'desktop'
    
    const width = window.innerWidth
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
  }

  /**
   * Detect browser
   */
  private detectBrowser(): string {
    if (typeof window === 'undefined') return 'unknown'
    
    const userAgent = navigator.userAgent
    if (userAgent.includes('Chrome')) return 'Chrome'
    if (userAgent.includes('Firefox')) return 'Firefox'
    if (userAgent.includes('Safari')) return 'Safari'
    if (userAgent.includes('Edge')) return 'Edge'
<<<<<<< HEAD
    return 'Other'
=======
    return 'Unknown'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Detect operating system
   */
  private detectOS(): string {
    if (typeof window === 'undefined') return 'unknown'
    
    const userAgent = navigator.userAgent
    if (userAgent.includes('Windows')) return 'Windows'
    if (userAgent.includes('Mac')) return 'macOS'
    if (userAgent.includes('Linux')) return 'Linux'
    if (userAgent.includes('Android')) return 'Android'
    if (userAgent.includes('iOS')) return 'iOS'
<<<<<<< HEAD
    return 'Other'
=======
    return 'Unknown'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Get element information for click tracking
   */
<<<<<<< HEAD
  private getElementInfo(element: HTMLElement): {
    category: string
    label: string
    tagName: string
    text: string
    position: { x: number; y: number }
  } {
    const rect = element.getBoundingClientRect()
    return {
      category: this.getElementCategory(element),
      label: element.id || element.className || element.tagName,
      tagName: element.tagName,
      text: element.textContent?.substring(0, 100) || '',
      position: { x: rect.left, y: rect.top }
=======
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  /**
   * Generate event ID
   */
  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  /**
   * Get user ID from storage or generate one
   */
  private getUserId(): string | undefined {
    let userId = localStorage.getItem('analytics_user_id')
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem('analytics_user_id', userId)
    }
    return userId
  }
  /**
   * Get analytics summary
   */
  getAnalyticsSummary(): {
    session: UserSession
    totalEvents: number
    eventsByType: Record<string, number>
    eventsByCategory: Record<string, number>
    topPages: Array<{ url: string; views: number }>
    conversionRate: number
  } {
    const events = this.currentSession.events
    const totalEvents = events.length
    const eventsByType = events.reduce(
      (acc, event) => {
        acc[event.type] = (acc[event.type] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    const eventsByCategory = events.reduce(
      (acc, event) => {
        acc[event.category] = (acc[event.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    const pageViews = events.filter(e => e.type === 'page_view')
    const topPages = pageViews
      .reduce(
        (acc, event) => {
          const existing = acc.find(p => p.url === event.url)
          if (existing) {
            existing.views++
          } else {
            acc.push({ url: event.url, views: 1 })
          }
          return acc
        },
        [] as Array<{ url: string; views: number }>
      )
      .sort((a, b) => b.views - a.views)
    const conversions = events.filter(e => e.category === 'conversion').length
    const conversionRate = totalEvents > 0 ? (conversions / totalEvents) * 100 : 0
    return {
      session: this.currentSession,
      totalEvents,
      eventsByType,
      eventsByCategory,
      topPages: topPages.slice(0, 10),
      conversionRate
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
    }
  }

  /**
   * Get element category for analytics
   */
<<<<<<< HEAD
  private getElementCategory(element: HTMLElement): string {
    if (element.tagName === 'A') return 'link'
    if (element.tagName === 'BUTTON') return 'button'
    if (element.tagName === 'INPUT') return 'input'
    if (element.tagName === 'FORM') return 'form'
    return 'other'
=======
  private async sendSessionData(session: UserSession): Promise<void> {
    try {
      await fetch('/api/analytics/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(session)
      })
    } catch (error) {
      // Handle error silently
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }

  /**
   * Check if link is a download link
   */
<<<<<<< HEAD
  private isDownloadLink(link: HTMLAnchorElement): boolean {
    const downloadExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.zip', '.rar', '.exe', '.dmg']
    const href = link.href.toLowerCase()
    return downloadExtensions.some(ext => href.includes(ext)) || link.hasAttribute('download')
  }

  /**
   * Get first paint time
   */
  private getFirstPaint(): number | null {
    if (typeof window === 'undefined') return null
    
    const paintEntries = performance.getEntriesByType('paint')
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint')
    return firstPaint ? firstPaint.startTime : null
  }

  /**
   * Get first contentful paint time
   */
  private getFirstContentfulPaint(): number | null {
    if (typeof window === 'undefined') return null
    
    const paintEntries = performance.getEntriesByType('paint')
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    return firstContentfulPaint ? firstContentfulPaint.startTime : null
  }

  /**
   * Get current session data
   */
  getSessionData(): UserSession {
    return { ...this.currentSession }
  }

  /**
   * Get analytics configuration
   */
  getConfig(): AnalyticsConfig {
    return { ...this.config }
  }

  /**
   * Update analytics configuration
   */
  updateConfig(newConfig: Partial<AnalyticsConfig>): void {
    this.config = { ...this.config, ...newConfig }
=======
  endSession(): void {
    this.currentSession.endTime = new Date().toISOString()
    this.currentSession.duration =
      new Date(this.currentSession.endTime).getTime() -
      new Date(this.currentSession.startTime).getTime()
    // Send session data
    if (this.isOnline) {
      this.sendSessionData(this.currentSession)
    }
    // Create new session
    this.currentSession = this.createNewSession()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-66cb
  }
}

// Export singleton instance
export const analytics = AdvancedAnalytics.getInstance()
export default analytics
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5ee5
