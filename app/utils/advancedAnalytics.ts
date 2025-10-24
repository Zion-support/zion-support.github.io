// Analytics utility functions
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
  timestamp?: Date
}

export interface AnalyticsConfig {
  trackingId: string
  enabled: boolean
  debug?: boolean
}

export class AnalyticsTracker {
  private config: AnalyticsConfig
  private events: AnalyticsEvent[] = []

  constructor(config: AnalyticsConfig) {
    this.config = config
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
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events]
  }

  clearEvents(): void {
    this.events = []
  }
}

export default AnalyticsTracker
