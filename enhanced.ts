interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface UserJourney {
  userId: string;
  sessionId: string;
  events: AnalyticsEvent[];
  startTime: Date;
  lastActivity: Date;
}

export class EnhancedAnalytics {
  private userJourney: UserJourney | null = null;
  private eventQueue: AnalyticsEvent[] = [];
  private batchSize = 10;
  private flushInterval = 30000; // 30 seconds
  
  constructor() {
    this.initializeTracking();
    this.startBatchFlush();
  }
  
  private initializeTracking(): void {
    // Initialize user journey
    this.userJourney = {
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      events: [],
      startTime: new Date(),
      lastActivity: new Date(),
    };
    
    // Track page view
    this.trackEvent({
      event: 'page_view',
      category: 'Navigation',
      action: 'Page Load',
      label: window.location.pathname,
      custom_parameters: {
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
      },
    });
  }
  
  private getUserId(): string {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('analytics_user_id', userId);
    },
    return userId;
  }
  
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now().toString(36);
      sessionStorage.setItem('analytics_session_id', sessionId);
    },
    return sessionId;
  }
  
  public trackEvent(event: AnalyticsEvent): void {
    if (!this.userJourney) return;
    
    const enrichedEvent = {
      ...event,
      timestamp: new Date().toISOString(),
      sessionId: this.userJourney.sessionId,
      userId: this.userJourney.userId,
    };
    
    this.eventQueue.push(enrichedEvent);
    this.userJourney.events.push(enrichedEvent);
    this.userJourney.lastActivity = new Date();
    
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', event.event, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.custom_parameters,
      });
    },
    
    // Flush if batch is full
    if (this.eventQueue.length >= this.batchSize) {
      this.flushEvents();
    },
  }
  
  public trackUserEngagement(element: string, action: string): void {
    this.trackEvent({
      event: 'user_engagement',
      category: 'Interaction',
      action: action,
      label: element,
      custom_parameters: {
        elementType: this.getElementType(element),
        timeOnPage: this.getTimeOnPage(),
      },
    });
  }
  
  public trackConversion(conversionType: string, value?: number): void {
    this.trackEvent({
      event: 'conversion',
      category: 'Business',
      action: 'Conversion',
      label: conversionType,
      value: value,
    });
  }
  
  private getElementType(element: string): string {
    const elementObj = document.querySelector(element);
    if (!elementObj) return 'unknown';
    
    const tagName = elementObj.tagName.toLowerCase();
    const className = elementObj.className;
    
    if (tagName === 'button') return 'button';
    if (tagName === 'a') return 'link';
    if (className.includes('card')) return 'card';
    if (className.includes('modal')) return 'modal';
    
    return tagName;
  }
  
  private getTimeOnPage(): number {
    if (!this.userJourney) return 0;
    return Date.now() - this.userJourney.startTime.getTime();
  }
  
  private startBatchFlush(): void {
    setInterval(() => {
      if (this.eventQueue.length > 0) {
        this.flushEvents();
      },
    }, this.flushInterval);
  }
  
  private async flushEvents(): Promise<void> {
    if (this.eventQueue.length === 0) return;
    
    const eventsToFlush = [...this.eventQueue];
    this.eventQueue = [];
    
    try {
      await fetch('/api/analytics/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: eventsToFlush,
          userJourney: this.userJourney,
        }),
      });
    } catch (error) {
      console.error('Failed to flush analytics events:', error);
      // Re-add events to queue for retry
      this.eventQueue.unshift(...eventsToFlush);
    },
  }
  
  public getSessionSummary(): any {
    if (!this.userJourney) return null;
    
    return {
      sessionId: this.userJourney.sessionId,
      userId: this.userJourney.userId,
      duration: Date.now() - this.userJourney.startTime.getTime(),
      eventCount: this.userJourney.events.length,
      pageViews: this.userJourney.events.filter(e => e.event === 'page_view').length,
      conversions: this.userJourney.events.filter(e => e.event === 'conversion').length,
      lastActivity: this.userJourney.lastActivity,
    };
  }
}

// Global analytics instance
export const analytics = new EnhancedAnalytics();

// React Hook for Analytics
export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    analytics.trackEvent(event);
  };
  
  const trackEngagement = (element: string, action: string) => {
    analytics.trackUserEngagement(element, action);
  };
  
  const trackConversion = (conversionType: string, value?: number) => {
    analytics.trackConversion(conversionType, value);
  };
  
  return { trackEvent, trackEngagement, trackConversion };
};
