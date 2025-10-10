// Analytics tracker utility

export interface TrackerConfig {
  enabled?: boolean;
  debug?: boolean;
  batchSize?: number;
  flushInterval?: number;
}

export interface TrackedEvent {
  id: string;
  name: string;
  properties: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export class AnalyticsTracker {
  private config: Required<TrackerConfig>;
  private events: TrackedEvent[] = [];
  private flushTimer?: NodeJS.Timeout;
  private sessionId: string;

  constructor(config: TrackerConfig = {}) {
    this.config = {
      enabled: true,
      debug: false,
      batchSize: 10,
      flushInterval: 30000, // 30 seconds
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.startFlushTimer();
  }

  /**
   * Track an event
   */
  track(name: string, properties: Record<string, any> = {}): void {
    if (!this.config.enabled) return;

    const event: TrackedEvent = {
      id: this.generateEventId(),
      name,
      properties,
      timestamp: Date.now(),
      sessionId: this.sessionId
    };

    this.events.push(event);

    if (this.config.debug) {
      console.log('Tracked event:', event);
    }

    // Flush if batch size reached
    if (this.events.length >= this.config.batchSize) {
      this.flush();
    }
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.track('page_view', {
      page,
      title: title || document.title,
      url: window.location.href,
      referrer: document.referrer
    });
  }

  /**
   * Track user action
   */
  trackAction(action: string, target?: string, properties?: Record<string, any>): void {
    this.track('action', {
      action,
      target,
      ...properties
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionType: string, value?: number, properties?: Record<string, any>): void {
    this.track('conversion', {
      conversionType,
      value,
      ...properties
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    this.track('error', {
      errorMessage: error.message,
      errorStack: error.stack,
      ...context
    });
  }

  /**
   * Set user ID
   */
  setUserId(userId: string): void {
    // Update existing events with user ID
    this.events.forEach(event => {
      event.userId = userId;
    });
  }

  /**
   * Flush events to server
   */
  flush(): void {
    if (this.events.length === 0) return;

    const eventsToSend = [...this.events];
    this.events = [];

    this.sendEvents(eventsToSend);
  }

  /**
   * Get pending events count
   */
  getPendingCount(): number {
    return this.events.length;
  }

  /**
   * Clear all events
   */
  clear(): void {
    this.events = [];
  }

  private generateEventId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  private sendEvents(events: TrackedEvent[]): void {
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ events })
    }).catch(error => {
      if (this.config.debug) {
        console.error('Failed to send analytics events:', error);
      }
      // Re-add events to queue for retry
      this.events.unshift(...events);
    });
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flush();
  }
}

export default AnalyticsTracker;