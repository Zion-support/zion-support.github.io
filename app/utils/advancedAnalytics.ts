'use client'
/**
 * Advanced Analytics System for Zion Tech Group Website
 * Provides comprehensive user behavior tracking and insights
 */

interface UserEvent {
  id: string
  type: 'page_view' | 'click' | 'scroll' | 'form_submit' | 'download' | 'custom'
  category: string
  action: string
  label?: string
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
  private maxQueueSize = 1000
  private isOnline = true

  private constructor() {
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
      referrer: typeof window !== 'undefined' ? document.referrer : ''
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
      category: 'navigation',
      action: 'page_view',
      label: title || document.title,
      timestamp: new Date().toISOString(),
      sessionId: this.currentSession.id,
      userId: this.getUserId(),
      url: url || window.location.href,
      metadata: {
        referrer: document.referrer,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }
    }
    this.trackEvent(event)
    this.currentSession.pageViews++
  }

  /**
   * Track clicks
   */
  private trackClicks(): void {
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
          text: element.text,
          position: element.position
        }
      }
      this.trackEvent(clickEvent)
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
        const scrollEvent: UserEvent = {
          id: this.generateEventId(),
          type: 'scroll',
          category: 'engagement',
          action: 'scroll',
          value: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
          url: window.location.href
        }
        this.trackEvent(scrollEvent)
      }, 150)
    })
  }

  /**
   * Track form submissions
   */
  private trackFormSubmissions(): void {
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
          formAction: form.action
        }
      }
      this.trackEvent(formEvent)
    })
  }

  /**
   * Track downloads
   */
  private trackDownloads(): void {
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
            downloadText: link.textContent || ''
          }
        }
        this.trackEvent(downloadEvent)
      }
    })
  }

  /**
   * Track performance metrics
   */
  private trackPerformance(): void {
    if (typeof window === 'undefined') return
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const perfEvent: UserEvent = {
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
            loadTime: perfData.loadEventEnd - perfData.loadEventStart,
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            firstPaint: this.getFirstPaint(),
            firstContentfulPaint: this.getFirstContentfulPaint()
          }
        }
        this.trackEvent(perfEvent)
      }, 0)
    })
  }

  /**
   * Track user journey
   */
  private trackUserJourney(): void {
    if (typeof window === 'undefined') return
    
    // Track page transitions
    let lastUrl = window.location.href
    const observer = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        this.trackPageView()
        lastUrl = window.location.href
      }
    })
    observer.observe(document, { subtree: true, childList: true })
  }

  /**
   * Setup network monitoring
   */
  private setupNetworkMonitoring(): void {
    if (typeof window === 'undefined') return
    
    window.addEventListener('online', () => {
      this.isOnline = true
      this.flushEventQueue()
    })
    
    window.addEventListener('offline', () => {
      this.isOnline = false
    })
  }

  /**
   * Track custom event
   */
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
    
    if (this.eventQueue.length >= this.maxQueueSize) {
      this.flushEventQueue()
    }
    
    if (this.isOnline) {
      this.sendEventToServer(event)
    }
  }

  /**
   * Send event to server
   */
  private async sendEventToServer(event: UserEvent): Promise<void> {
    try {
      // In a real implementation, you would send to your analytics server
      console.log('Analytics event:', event)
    } catch (error) {
      console.error('Failed to send analytics event:', error)
    }
  }

  /**
   * Flush event queue
   */
  private flushEventQueue(): void {
    if (this.eventQueue.length === 0) return
    
    const events = [...this.eventQueue]
    this.eventQueue = []
    
    // Send all events to server
    events.forEach(event => this.sendEventToServer(event))
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * Generate unique event ID
   */
  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
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
    return 'Other'
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
    return 'Other'
  }

  /**
   * Get element information for click tracking
   */
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
    }
  }

  /**
   * Get element category for analytics
   */
  private getElementCategory(element: HTMLElement): string {
    if (element.tagName === 'A') return 'link'
    if (element.tagName === 'BUTTON') return 'button'
    if (element.tagName === 'INPUT') return 'input'
    if (element.tagName === 'FORM') return 'form'
    return 'other'
  }

  /**
   * Check if link is a download link
   */
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
  }
}

// Export singleton instance
export const analytics = AdvancedAnalytics.getInstance()
export default analytics