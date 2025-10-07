/**
 * Analytics utility for tracking events and performance
 */
export interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string | undefined;
  label?: string | undefined;
  value?: number | undefined;
  properties?: Record<string, unknown> | undefined;
  timestamp: number;
}

export interface UserProperties {
  userId?: string | undefined;
  sessionId: string;
  userAgent: string;
  language: string;
  timezone: string;
  referrer?: string | undefined;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties;
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.userProperties = this.initializeUserProperties();
  }

  /**
   * Track a custom event
   */
  track(
    name: string,
    category: string,
    action?: string,
    label?: string,
    value?: number,
    properties?: Record<string, unknown>
  ): void {
    const event: AnalyticsEvent = {
      name,
      category,
<<<<<<< HEAD:src/utils/analytics.ts
      action,
      label,
      value,
      properties,
=======
>>>>>>> main
>>>>>>> main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
>>>>>>> cursor/fix-errors-and-merge-to-main-cfd1:src.disabled/utils/analytics.ts
      timestamp: Date.now(),
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.track('page_view', 'navigation', 'view', page, undefined, {
      page_title: title,
      page_url: window.location.href,
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, value?: number): void {
    this.track('interaction', 'user_action', action, element, value);
  }

  /**
   * Track performance metrics
   */
  trackPerformance(name: string, value: number, unit: string = 'ms'): void {
    this.track('performance', 'metrics', 'measure', name, value, {
      unit,
    });
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: string): void {
    this.track('error', 'exception', 'thrown', context, undefined, {
      error_message: error.message,
      error_stack: error.stack,
    });
  }

  /**
   * Get all events
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Clear all events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Get user properties
   */
  getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }

  /**
   * Update user properties
   */
  updateUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeUserProperties(): UserProperties {
    return {
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer || undefined,
    };
  }

  private sendEvent(event: AnalyticsEvent): void {
    // In a real implementation, this would send the event to your analytics service
    console.log('Analytics Event:', event);
  }
}

// Create singleton instance
const analytics = new Analytics();

export default analytics;