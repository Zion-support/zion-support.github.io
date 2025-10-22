interface TrackingEvent {
  event: string
  properties?: Record<string, any>
  timestamp?: number
  userId?: string
  sessionId?: string
}

interface TrackingConfig {
  apiKey: string
  endpoint: string
  batchSize?: number
  flushInterval?: number
  debug?: boolean
}

export class AnalyticsTracker {
  private config: TrackingConfig
  private eventQueue: TrackingEvent[] = []
  private flushTimer?: NodeJS.Timeout

  constructor(config: TrackingConfig) {
    this.config = {
      batchSize: 10,
      flushInterval: 5000,
      debug: false,
      ...config
    }
    
    this.startFlushTimer()
  }

  track(event: string, properties?: Record<string, any>): void {
    const trackingEvent: TrackingEvent = {
      event,
      properties,
      timestamp: Date.now(),
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    }

    this.eventQueue.push(trackingEvent)

    if (this.config.debug) {
      console.log('Analytics event tracked:', trackingEvent)
    }

    // Flush if batch size is reached
    if (this.eventQueue.length >= this.config.batchSize!) {
      this.flush()
    }
  }

  identify(userId: string, traits?: Record<string, any>): void {
    this.track('User Identified', {
      userId,
      traits
    })
  }

  page(pageName: string, properties?: Record<string, any>): void {
    this.track('Page Viewed', {
      page: pageName,
      ...properties
    })
  }

  screen(screenName: string, properties?: Record<string, any>): void {
    this.track('Screen Viewed', {
      screen: screenName,
      ...properties
    })
  }

  group(groupId: string, traits?: Record<string, any>): void {
    this.track('Group Identified', {
      groupId,
      traits
    })
  }

  alias(previousId: string, userId: string): void {
    this.track('User Aliased', {
      previousId,
      userId
    })
  }

  private async flush(): Promise<void> {
    if (this.eventQueue.length === 0) return

    const events = [...this.eventQueue]
    this.eventQueue = []

    try {
      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          events,
          batchId: this.generateBatchId()
        })
      })

      if (!response.ok) {
        throw new Error(`Analytics tracking failed: ${response.status}`)
      }

      if (this.config.debug) {
        console.log(`Analytics batch sent: ${events.length} events`)
      }
    } catch (error) {
      console.error('Analytics tracking error:', error)
      // Re-queue events for retry
      this.eventQueue.unshift(...events)
    }
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush()
    }, this.config.flushInterval)
  }

  private stopFlushTimer(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = undefined
    }
  }

  private getUserId(): string | undefined {
    // Get user ID from localStorage or session
    if (typeof window !== 'undefined') {
      return localStorage.getItem('analytics_user_id') || undefined
    }
    return undefined
  }

  private getSessionId(): string {
    // Get or create session ID
    if (typeof window !== 'undefined') {
      let sessionId = sessionStorage.getItem('analytics_session_id')
      if (!sessionId) {
        sessionId = this.generateSessionId()
        sessionStorage.setItem('analytics_session_id', sessionId)
      }
      return sessionId
    }
    return this.generateSessionId()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private generateBatchId(): string {
    return `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Public method to manually flush
  async flushNow(): Promise<void> {
    await this.flush()
  }

  // Cleanup method
  destroy(): void {
    this.stopFlushTimer()
    this.flush() // Flush remaining events
  }
}

// Default tracker instance
export const analyticsTracker = new AnalyticsTracker({
  apiKey: process.env.NEXT_PUBLIC_ANALYTICS_API_KEY || 'default-key',
  endpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT || '/api/analytics',
  debug: process.env.NODE_ENV === 'development'
})