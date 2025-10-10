'use client';

/**
 * Enhanced Analytics Utility
 * Provides comprehensive analytics tracking with event batching and offline support
 */

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export interface UserProperties {
  userId?: string;
  sessionId?: string;
  userType?: string;
  [key: string]: unknown;
}

class EnhancedAnalytics {
  private queue: AnalyticsEvent[] = [];
  private userProperties: UserProperties = {};
  private sessionId: string;
  private isInitialized = false;
  private batchSize = 10;
  private flushInterval = 30000; // 30 seconds
  private offlineQueue: AnalyticsEvent[] = [];

  constructor() {
    this.sessionId = this.generateSessionId();
    this.setupOfflineHandling();
    this.setupPeriodicFlush();
  }

  /**
   * Initialize analytics
   */
  initialize(): void {
    if (this.isInitialized) return;
    
    this.isInitialized = true;
    this.loadOfflineQueue();
    this.flush();
  }

  /**
   * Track an event
   */
  track(event: AnalyticsEvent): void {
    const enrichedEvent = {
      ...event,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userProperties: this.userProperties
    };

    this.queue.push(enrichedEvent);

    // Flush if batch size reached
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }

  /**
   * Set user properties
   */
  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.track({
      category: 'Page',
      action: 'view',
      label: page,
      metadata: {
        title: title || document.title,
        url: window.location.href,
        referrer: document.referrer
      }
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, value?: string): void {
    this.track({
      category: 'Interaction',
      action,
      label: element,
      metadata: {
        value,
        elementType: this.getElementType(element)
      }
    });
  }

  /**
   * Track conversion
   */
  trackConversion(conversionId: string, value?: number): void {
    this.track({
      category: 'Conversion',
      action: 'conversion',
      label: conversionId,
      value,
      metadata: {
        conversionId,
        timestamp: Date.now()
      }
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: string): void {
    this.track({
      category: 'Error',
      action: 'error',
      label: error.message,
      metadata: {
        errorName: error.name,
        errorStack: error.stack,
        context,
        url: window.location.href,
        userAgent: navigator.userAgent
      }
    });
  }

  /**
   * Track performance metric
   */
  trackPerformance(metric: string, value: number, unit?: string): void {
    this.track({
      category: 'Performance',
      action: 'metric',
      label: metric,
      value,
      metadata: {
        unit: unit || 'ms',
        timestamp: Date.now()
      }
    });
  }

  /**
   * Track custom event
   */
  trackCustom(eventName: string, properties?: Record<string, unknown>): void {
    this.track({
      category: 'Custom',
      action: eventName,
      metadata: properties
    });
  }

  /**
   * Flush queued events
   */
  flush(): void {
    if (this.queue.length === 0) return;

    const events = [...this.queue];
    this.queue = [];

    if (navigator.onLine) {
      this.sendEvents(events);
    } else {
      this.offlineQueue.push(...events);
    }
  }

  /**
   * Send events to analytics service
   */
  private async sendEvents(events: AnalyticsEvent[]): Promise<void> {
    try {
      // Replace with your analytics service endpoint
      const response = await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          events,
          sessionId: this.sessionId,
          userProperties: this.userProperties
        })
      });

      if (!response.ok) {
        throw new Error(`Analytics request failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to send analytics events:', error);
      // Re-queue events for retry
      this.queue.unshift(...events);
    }
  }

  /**
   * Setup offline handling
   */
  private setupOfflineHandling(): void {
    window.addEventListener('online', () => {
      this.flushOfflineQueue();
    });

    window.addEventListener('beforeunload', () => {
      this.flush();
    });
  }

  /**
   * Setup periodic flush
   */
  private setupPeriodicFlush(): void {
    setInterval(() => {
      this.flush();
    }, this.flushInterval);
  }

  /**
   * Flush offline queue
   */
  private flushOfflineQueue(): void {
    if (this.offlineQueue.length > 0) {
      this.queue.unshift(...this.offlineQueue);
      this.offlineQueue = [];
      this.flush();
    }
  }

  /**
   * Load offline queue from storage
   */
  private loadOfflineQueue(): void {
    try {
      const stored = localStorage.getItem('analytics-offline-queue');
      if (stored) {
        this.offlineQueue = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load offline analytics queue:', error);
    }
  }

  /**
   * Save offline queue to storage
   */
  private saveOfflineQueue(): void {
    try {
      localStorage.setItem('analytics-offline-queue', JSON.stringify(this.offlineQueue));
    } catch (error) {
      console.warn('Failed to save offline analytics queue:', error);
    }
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get element type for tracking
   */
  private getElementType(element: string): string {
    const el = document.querySelector(element);
    if (!el) return 'unknown';
    
    return el.tagName.toLowerCase();
  }

  /**
   * Get analytics summary
   */
  getSummary(): {
    queuedEvents: number;
    offlineEvents: number;
    sessionId: string;
    userProperties: UserProperties;
  } {
    return {
      queuedEvents: this.queue.length,
      offlineEvents: this.offlineQueue.length,
      sessionId: this.sessionId,
      userProperties: this.userProperties
    };
  }
}

// Create singleton instance
export const analytics = new EnhancedAnalytics();

// Auto-initialize in browser
if (typeof window !== 'undefined') {
  analytics.initialize();
}

export default analytics;