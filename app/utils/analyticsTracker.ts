'use client'

// Analytics Tracker utility functions
export interface TrackerEvent {
  name: string
  properties?: Record<string, any>
  timestamp?: number
}

export interface TrackerConfig {
  enabled: boolean
  debug: boolean
  batchSize: number
  flushInterval: number
}

class AnalyticsTracker {
  private config: TrackerConfig
  private events: TrackerEvent[] = []
  private flushTimer: NodeJS.Timeout | null = null

  constructor(config: Partial<TrackerConfig> = {}) {
    this.config = {
      enabled: true,
      debug: false,
      batchSize: 10,
      flushInterval: 5000,
      ...config
    }
    this.startFlushTimer()
  }

  track(eventName: string, properties?: Record<string, any>): void {
    if (!this.config.enabled) return

    const event: TrackerEvent = {
      name: eventName,
      properties,
      timestamp: Date.now()
    }

    this.events.push(event)

    if (this.config.debug) {
      console.log('Event tracked:', event)
    }

    if (this.events.length >= this.config.batchSize) {
      this.flush()
    }
  }

  page(pageName: string, properties?: Record<string, any>): void {
    this.track('Page View', {
      page: pageName,
      ...properties
    })
  }

  identify(userId: string, traits?: Record<string, any>): void {
    this.track('User Identified', {
      userId,
      traits
    })
  }

  private startFlushTimer(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
    }
    this.flushTimer = setInterval(() => {
      this.flush()
    }, this.config.flushInterval)
  }

  private async flush(): Promise<void> {
    if (this.events.length === 0) return

    const eventsToFlush = [...this.events]
    this.events = []

    try {
      // In a real implementation, you would send to your analytics service
      if (this.config.debug) {
        console.log('Flushing events:', eventsToFlush)
      }
    } catch (error) {
      console.error('Failed to flush events:', error)
      // Re-add events to queue
      this.events.unshift(...eventsToFlush)
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
export const analyticsTracker = new AnalyticsTracker({
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development'
})

export default analyticsTracker
