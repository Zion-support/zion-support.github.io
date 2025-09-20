/**
 * Advanced analytics and monitoring system
 */

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
}

export interface UserMetrics {
  pageViews: number;
  sessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  userFlow: Array<{ from: string; to: string; count: number }>;
  deviceInfo: {
    browser: string;
    os: string;
    device: string;
    screen: string;
  };
  location: {
    country: string;
    region: string;
    city: string;
  };
}

export class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId: string;
  private startTime: number;
  private pageStartTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getOrCreateUserId();
    this.startTime = Date.now();
    this.pageStartTime = Date.now();

    if (typeof window !== 'undefined') {
      this.initializeAnalytics();
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getOrCreateUserId(): string {
    if (typeof window !== 'undefined') {
      let userId = localStorage.getItem('analytics_user_id');
      if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('analytics_user_id', userId);
      }
      return userId;
    }
    return 'anonymous';
  }

  private initializeAnalytics() {
    // Track page view
    this.trackPageView();

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('page_hidden', 'engagement', 'visibility_change');
      } else {
        this.trackEvent('page_visible', 'engagement', 'visibility_change');
      }
    });

    // Track page unload
    window.addEventListener('beforeunload', () => {
      this.trackEvent('page_unload', 'engagement', 'page_exit');
      this.flushEvents();
    });

    // Track scroll depth
    this.trackScrollDepth();

    // Track click events
    this.trackClickEvents();

    // Track form submissions
    this.trackFormSubmissions();

    // Track errors
    this.trackErrors();
  }

  private trackPageView() {
    const page = window.location.pathname + window.location.search;
    this.trackEvent('page_view', 'navigation', 'page_load', page);
    this.pageStartTime = Date.now();
  }

  private trackScrollDepth() {
    let maxScrollDepth = 0;
    const checkScrollDepth = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if ([25, 50, 75, 90, 100].includes(scrollDepth)) {
          this.trackEvent('scroll_depth', 'engagement', 'scroll_milestone', `${scrollDepth}%`);
        }
      }
    };

    window.addEventListener('scroll', checkScrollDepth, { passive: true });
  }

  private trackClickEvents() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');
      
      if (link) {
        const href = link.getAttribute('href');
        const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'));
        
        this.trackEvent('link_click', 'engagement', 'link_click', href, undefined, {
          isExternal,
          linkText: link.textContent?.substring(0, 100)
        });
      } else if (button) {
        this.trackEvent('button_click', 'engagement', 'button_click', undefined, undefined, {
          buttonText: button.textContent?.substring(0, 100),
          buttonType: button.type || 'button'
        });
      }
    });
  }

  private trackFormSubmissions() {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className || 'unnamed_form';
      
      this.trackEvent('form_submit', 'conversion', 'form_submission', formId);
    });
  }

  private trackErrors() {
    window.addEventListener('error', (event) => {
      this.trackEvent('javascript_error', 'error', 'js_error', event.message, undefined, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent('promise_rejection', 'error', 'promise_error', event.reason?.toString(), undefined, {
        stack: event.reason?.stack
      });
    });
  }

  public trackEvent(
    event: string,
    category: string,
    action: string,
    label?: string,
    value?: number,
    customParameters?: Record<string, any>
  ) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      customParameters,
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId
    };

    this.events.push(analyticsEvent);

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...customParameters
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomAnalytics(analyticsEvent);
  }

  private async sendToCustomAnalytics(event: AnalyticsEvent) {
    try {
      // This would send to your custom analytics endpoint
      // await fetch('/api/analytics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(event)
      // });
    } catch (error) {
      console.warn('Failed to send analytics event:', error);
    }
  }

  public trackConversion(conversionType: string, value?: number, currency: string = 'USD') {
    this.trackEvent('conversion', 'conversion', conversionType, undefined, value, { currency });
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: this.generateTransactionId(),
        value: value,
        currency: currency
      });
    }
  }

  private generateTransactionId(): string {
    return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  public trackPerformance(metrics: Record<string, number>) {
    Object.entries(metrics).forEach(([metric, value]) => {
      this.trackEvent('performance', 'performance', metric, undefined, Math.round(value));
    });
  }

  public getUserMetrics(): UserMetrics {
    const pageViews = this.events.filter(e => e.event === 'page_view').length;
    const sessionDuration = Date.now() - this.startTime;
    
    // Calculate bounce rate (single page sessions)
    const bounceRate = pageViews === 1 ? 1 : 0;
    
    // Get top pages
    const pageViewsByPage = this.events
      .filter(e => e.event === 'page_view')
      .reduce((acc, e) => {
        const page = e.label || 'unknown';
        acc[page] = (acc[page] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const topPages = Object.entries(pageViewsByPage)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Get user flow
    const pageViewEvents = this.events.filter(e => e.event === 'page_view');
    const userFlow = [];
    for (let i = 0; i < pageViewEvents.length - 1; i++) {
      const from = pageViewEvents[i].label || 'unknown';
      const to = pageViewEvents[i + 1].label || 'unknown';
      const existing = userFlow.find(f => f.from === from && f.to === to);
      if (existing) {
        existing.count++;
      } else {
        userFlow.push({ from, to, count: 1 });
      }
    }

    return {
      pageViews,
      sessionDuration,
      bounceRate,
      conversionRate: 0, // Would be calculated based on conversion events
      topPages,
      userFlow,
      deviceInfo: this.getDeviceInfo(),
      location: this.getLocationInfo()
    };
  }

  private getDeviceInfo() {
    if (typeof window === 'undefined') {
      return { browser: 'unknown', os: 'unknown', device: 'unknown', screen: 'unknown' };
    }

    const ua = navigator.userAgent;
    const browser = this.getBrowserInfo(ua);
    const os = this.getOSInfo(ua);
    const device = this.getDeviceInfo(ua);
    const screen = `${window.screen.width}x${window.screen.height}`;

    return { browser, os, device, screen };
  }

  private getBrowserInfo(ua: string): string {
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  }

  private getOSInfo(ua: string): string {
    if (ua.includes('Windows')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS')) return 'iOS';
    return 'Other';
  }

  private getDeviceInfo(ua: string): string {
    if (ua.includes('Mobile')) return 'Mobile';
    if (ua.includes('Tablet')) return 'Tablet';
    return 'Desktop';
  }

  private getLocationInfo() {
    // This would typically use a geolocation service
    return {
      country: 'Unknown',
      region: 'Unknown',
      city: 'Unknown'
    };
  }

  public flushEvents() {
    // Send all pending events to analytics
    this.events.forEach(event => {
      this.sendToCustomAnalytics(event);
    });
    this.events = [];
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public clearEvents() {
    this.events = [];
  }
}

export const generateAnalyticsReport = (events: AnalyticsEvent[]) => {
  const totalEvents = events.length;
  const uniqueUsers = new Set(events.map(e => e.userId)).size;
  const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
  
  const eventTypes = events.reduce((acc, e) => {
    acc[e.event] = (acc[e.event] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topEvents = Object.entries(eventTypes)
    .map(([event, count]) => ({ event, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const conversionEvents = events.filter(e => e.category === 'conversion');
  const errorEvents = events.filter(e => e.category === 'error');

  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalEvents,
      uniqueUsers,
      uniqueSessions,
      conversionEvents: conversionEvents.length,
      errorEvents: errorEvents.length
    },
    topEvents,
    trends: {
      eventsPerHour: this.calculateEventsPerHour(events),
      conversionRate: conversionEvents.length / totalEvents,
      errorRate: errorEvents.length / totalEvents
    }
  };
};

export const calculateEventsPerHour = (events: AnalyticsEvent[]) => {
  if (events.length === 0) return 0;
  
  const firstEvent = Math.min(...events.map(e => e.timestamp || 0));
  const lastEvent = Math.max(...events.map(e => e.timestamp || 0));
  const durationHours = (lastEvent - firstEvent) / (1000 * 60 * 60);
  
  return durationHours > 0 ? events.length / durationHours : 0;
};