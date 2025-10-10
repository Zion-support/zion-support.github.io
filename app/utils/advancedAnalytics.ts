

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

        referrer: document.referrer,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }

      }
    }

    this.addEvent(event)
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

        const scrollEvent: UserEvent = {
          id: this.generateEventId(),
          type: 'scroll',
          category: 'engagement',
          action: 'scroll',
          value: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),

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
   * Add event to queue and session
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

  }

  /**
   * Send event to server
   */

  private async sendEventToServer(event: UserEvent): Promise<void> {

