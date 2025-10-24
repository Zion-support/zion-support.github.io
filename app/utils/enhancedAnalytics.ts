// Enhanced analytics utility
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  timestamp?: Date
  userId?: string
  sessionId?: string
}

export interface AnalyticsConfig {
  trackingId: string
  enabled: boolean
  debug?: boolean
  batchSize?: number
  flushInterval?: number
}

export class EnhancedAnalytics {
  private config: AnalyticsConfig
  private events: AnalyticsEvent[] = [];
  private flushTimer?: NodeJS.Timeout

  constructor(config: AnalyticsConfig) {
    this.config = {
      batchSize: 10,
      flushInterval: 30000,
      ...config
    }
  }

  track(event: AnalyticsEvent): void {
    if (!this.config.enabled) return

    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || new Date()
    }

    this.events.push(eventWithTimestamp)

    if (this.config.debug) {
      console.log('Analytics event:', eventWithTimestamp)
    }

    // Auto-flush if batch size reached
    if (this.events.length >= this.config.batchSize!) {
      this.flush(
  )
  );
}
  pageView(page: string, properties?: Record<string, any>): void {
    this.track({
      name: 'page_view',
      properties: {
        page,
        ...properties
      }
    })
  }

  identify(userId: string, traits?: Record<string, any>): void {
    this.track({
      name: 'identify',
      userId,
      properties: traits
    })
  }

  flush(): void {
    if (this.events.length === 0) return

    // In a real implementation, you would send events to your analytics service
    if (this.config.debug) {
      console.log('Flushing analytics events:', this.events)
    }

    this.events = [];
  }

  startAutoFlush(): void {
    if (this.flushTimer) return

    this.flushTimer = setInterval(() => {
      this.flush()
    }, this.config.flushInterval)
  }

  stopAutoFlush(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = undefined
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

export default EnhancedAnalytics;
