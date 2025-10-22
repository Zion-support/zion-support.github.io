'use client'

// Advanced Analytics utility functions
export interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  userId?: string
  sessionId?: string
  timestamp?: number
}

export interface AnalyticsConfig {
  apiKey: string
  endpoint: string
  debug?: boolean
  batchSize?: number
  flushInterval?: number
}

class AdvancedAnalytics {
  private config: AnalyticsConfig
  private eventQueue: AnalyticsEvent[] = []
  private flushTimer: NodeJS.Timeout | null = null

  constructor(config: AnalyticsConfig) {
    this.config = {
      batchSize: 10,
      flushInterval: 5000,
      debug: false,
      ...config
    }
    this.startFlushTimer()
  }

  private startFlushTimer(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
    }
    this.flushTimer = setInterval(() => {
      this.flush()
    }, this.config.flushInterval)
  }

  track(event: string, properties?: Record<string, any>): void {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      timestamp: Date.now()
    }

    this.eventQueue.push(analyticsEvent)

    if (this.config.debug) {
      console.log('Analytics event tracked:', analyticsEvent)
    }

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

  private getUserId(): string | undefined {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('analytics_user_id') || undefined
    }
    return undefined
  }

  private getSessionId(): string | undefined {
    if (typeof window !== 'undefined') {
      let sessionId = sessionStorage.getItem('analytics_session_id')
      if (!sessionId) {
        sessionId = this.generateSessionId()
        sessionStorage.setItem('analytics_session_id', sessionId)
      }
      return sessionId
    }
    return undefined
  }

  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
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
        body: JSON.stringify({ events })
      })

      if (!response.ok) {
        throw new Error(`Analytics flush failed: ${response.statusText}`)
      }

      if (this.config.debug) {
        console.log('Analytics events flushed:', events.length)
      }
    } catch (error) {
      console.error('Analytics flush error:', error)
      // Re-add events to queue for retry
      this.eventQueue.unshift(...events)
    }
  }

  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = null
    }
    this.flush()
  }
}

// Create default instance
export const advancedAnalytics = new AdvancedAnalytics({
  apiKey: process.env.NEXT_PUBLIC_ANALYTICS_API_KEY || '',
  endpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT || '/api/analytics',
  debug: process.env.NODE_ENV === 'development'
})

export default advancedAnalytics
