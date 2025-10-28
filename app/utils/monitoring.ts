'use client';

interface MonitoringEvent {
  type: string;
  data: any;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

class Monitoring {
  private events: MonitoringEvent[] = [];
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  // Set user ID for tracking
  setUserId(userId: string): void {
    this.userId = userId;
  }

  // Track an event
  track(type: string, data: any): void {
    const event: MonitoringEvent = {
      type,
      data,
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    };

    this.events.push(event);
    this.sendToMonitoringService(event);
  }

  // Track performance metrics
  trackPerformance(metrics: PerformanceMetrics): void {
    this.track('performance', metrics);
  }

  // Track user interaction
  trackInteraction(action: string, target: string, properties?: any): void {
    this.track('interaction', {
      action,
      target,
      ...properties,
    });
  }

  // Track page view
  trackPageView(page: string, properties?: any): void {
    this.track('page_view', {
      page,
      ...properties,
    });
  }

  // Track error
  trackError(error: Error, context?: string): void {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      context,
    });
  }

  // Get all events
  getEvents(): MonitoringEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents(): void {
    this.events = [];
  }

  // Generate session ID
  private generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  // Send to monitoring service
  private sendToMonitoringService(event: MonitoringEvent): void {
    if (typeof window === 'undefined') return;

    // Send to Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', event.type, event.data);
    }

    // Send to custom monitoring endpoint
    fetch('/api/monitoring', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).catch(() => {
      // Silently fail if monitoring fails
    });
  }
}

// Export singleton instance
export const monitoring = new Monitoring();
export default monitoring;