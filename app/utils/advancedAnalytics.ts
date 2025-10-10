'use client';

/**
 * Advanced Analytics utilities
 */

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface UserSession {
  sessionId: string;
  startTime: number;
  pageViews: number;
  events: AnalyticsEvent[];
  userAgent: string;
  referrer: string;
}

class AnalyticsManager {
  private session: UserSession;
  private isInitialized = false;

  constructor() {
    this.session = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: 0,
      events: [],
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    };
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  public initialize(): void {
    if (this.isInitialized) return;
    
    this.isInitialized = true;
    this.trackPageView();
    this.setupEventListeners();
  }

  private trackPageView(): void {
    this.session.pageViews++;
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.matches('a[href], button, [role="button"]')) {
        this.trackEvent({
          name: 'click',
          category: 'engagement',
          action: 'click',
          label: target.textContent || target.getAttribute('aria-label') || 'unknown',
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent({
        name: 'form_submit',
        category: 'engagement',
        action: 'submit',
        label: form.id || form.className || 'form',
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent({
          name: 'scroll_depth',
          category: 'engagement',
          action: 'scroll',
          value: maxScrollDepth,
        });
      }
    });
  }

  public trackEvent(event: AnalyticsEvent): void {
    this.session.events.push({
      ...event,
      customParameters: {
        ...event.customParameters,
        timestamp: Date.now(),
        sessionId: this.session.sessionId,
      },
    });

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.customParameters,
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(event);
  }

  private async sendToCustomEndpoint(event: AnalyticsEvent): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          session: this.session,
        }),
      });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }

  public getSessionData(): UserSession {
    return { ...this.session };
  }

  public resetSession(): void {
    this.session = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      pageViews: 0,
      events: [],
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    };
  }
}

// Create singleton instance
export const analytics = new AnalyticsManager();

// Auto-initialize when module loads
if (typeof window !== 'undefined') {
  analytics.initialize();
}

/**
 * Track custom events
 */
export function trackEvent(event: AnalyticsEvent): void {
  analytics.trackEvent(event);
}

/**
 * Track page views
 */
export function trackPageView(pageName?: string): void {
  analytics.trackEvent({
    name: 'page_view',
    category: 'navigation',
    action: 'view',
    label: pageName || document.title,
  });
}

/**
 * Track user interactions
 */
export function trackInteraction(element: string, action: string, label?: string): void {
  analytics.trackEvent({
    name: 'interaction',
    category: 'engagement',
    action,
    label: label || element,
  });
}

/**
 * Track performance metrics
 */
export function trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
  analytics.trackEvent({
    name: 'performance',
    category: 'performance',
    action: metric,
    value,
    customParameters: {
      unit,
    },
  });
}

/**
 * Track errors
 */
export function trackError(error: Error, context?: string): void {
  analytics.trackEvent({
    name: 'error',
    category: 'error',
    action: 'occurred',
    label: error.message,
    customParameters: {
      stack: error.stack,
      context,
    },
  });
}