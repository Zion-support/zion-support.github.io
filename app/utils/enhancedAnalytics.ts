'use client'
/**
 * Enhanced Analytics Utility
 * Provides comprehensive analytics tracking and reporting
 */

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface UserProperties {
  userId?: string;
  sessionId?: string;
  userType?: 'new' | 'returning' | 'premium';
  deviceType?: 'mobile' | 'tablet' | 'desktop';
  browser?: string;
  os?: string;
  location?: string;
}

export interface PageViewEvent {
  page: string;
  title: string;
  url: string;
  referrer?: string;
  timestamp: number;
}

class EnhancedAnalytics {
  private isInitialized = false;
  private userProperties: UserProperties = {};
  private sessionId: string = '';
  private eventQueue: AnalyticsEvent[] = [];

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initialize();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupUserProperties();
    this.setupEventListeners();
    this.processEventQueue();
  }

  private setupUserProperties(): void {
    this.userProperties = {
      sessionId: this.sessionId,
      deviceType: this.getDeviceType(),
      browser: this.getBrowser(),
      os: this.getOS(),
      location: this.getLocation()
    };
  }

  private getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getBrowser(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Other';
  }

  private getOS(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Other';
  }

  private getLocation(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return 'unknown';
    }
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.trackEvent({
        category: 'Engagement',
        action: 'Page Visibility',
        label: document.hidden ? 'Hidden' : 'Visible'
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent({
          category: 'Engagement',
          action: 'Scroll Depth',
          label: `${scrollDepth}%`
        });
      }
    });

    // Track clicks on external links
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && !link.href.startsWith(window.location.origin)) {
        this.trackEvent({
          category: 'Engagement',
          action: 'External Link Click',
          label: link.href
        });
      }
    });
  }

  private processEventQueue(): void {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (event) {
        this.sendEvent(event);
      }
    }
  }

  private sendEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.eventQueue.push(event);
      return;
    }

    // Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameters: event.customParameters
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(event);

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  private async sendToCustomEndpoint(event: AnalyticsEvent): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...event,
          userProperties: this.userProperties,
          timestamp: Date.now()
        })
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }

  trackEvent(event: AnalyticsEvent): void {
    this.sendEvent(event);
  }

  trackPageView(page: string, title: string, url: string, referrer?: string): void {
    const pageViewEvent: PageViewEvent = {
      page,
      title,
      url,
      referrer,
      timestamp: Date.now()
    };

    this.trackEvent({
      category: 'Page View',
      action: 'View',
      label: page,
      customParameters: pageViewEvent
    });
  }

  trackConversion(conversionType: string, value?: number, currency?: string): void {
    this.trackEvent({
      category: 'Conversion',
      action: conversionType,
      value,
      customParameters: { currency }
    });
  }

  trackError(error: Error, context?: string): void {
    this.trackEvent({
      category: 'Error',
      action: 'Error Occurred',
      label: error.message,
      customParameters: {
        errorName: error.name,
        errorStack: error.stack,
        context
      }
    });
  }

  setUserProperties(properties: Partial<UserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  setUserId(userId: string): void {
    this.setUserProperties({ userId });
  }

  setUserType(userType: 'new' | 'returning' | 'premium'): void {
    this.setUserProperties({ userType });
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }
}

// Create singleton instance
export const enhancedAnalytics = new EnhancedAnalytics();

export default EnhancedAnalytics;