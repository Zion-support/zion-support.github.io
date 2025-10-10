'use client'

interface UserEvent {
  id: string;
  type: string;
  name: string;
  value?: number;
  timestamp: string;
  sessionId: string;
  userId?: string;
  url: string;
  metadata?: Record<string, unknown>;
}

interface UserSession {
  id: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  pageViews: number;
  events: UserEvent[];
  referrer?: string;
  userAgent: string;
  device: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
  country?: string;
  city?: string;
}

interface AnalyticsConfig {
  trackingId: string;
  apiEndpoint: string;
  batchSize: number;
  flushInterval: number;
  enableDebug: boolean;
  enablePerformanceTracking: boolean;
  enableErrorTracking: boolean;
  enableUserTracking: boolean;
  enablePageTracking: boolean;
  enableEventTracking: boolean;
}

interface PageView {
  url: string;
  title: string;
  timestamp: string;
  sessionId: string;
  userId?: string;
  referrer?: string;
  loadTime?: number;
  viewportWidth?: number;
  viewportHeight?: number;
}

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: string;
  sessionId: string;
  url: string;
  category: 'navigation' | 'resource' | 'paint' | 'layout' | 'script';
}

interface ErrorEvent {
  message: string;
  stack?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  timestamp: string;
  sessionId: string;
  userId?: string;
  url: string;
  userAgent: string;
}

export class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private session: UserSession | null = null;
  private eventQueue: UserEvent[] = [];
  private pageViewQueue: PageView[] = [];
  private performanceQueue: PerformanceMetric[] = [];
  private errorQueue: ErrorEvent[] = [];
  private flushTimer: NodeJS.Timeout | null = null;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = {
      trackingId: 'default',
      apiEndpoint: '/api/analytics',
      batchSize: 10,
      flushInterval: 5000,
      enableDebug: false,
      enablePerformanceTracking: true,
      enableErrorTracking: true,
      enableUserTracking: true,
      enablePageTracking: true,
      enableEventTracking: true,
      ...config
    };

    this.initialize();
  }

  private initialize(): void {
    this.createSession();
    this.setupEventListeners();
    this.startFlushTimer();
  }

  private createSession(): void {
    const sessionId = this.generateId();
    const startTime = new Date().toISOString();
    
    this.session = {
      id: sessionId,
      startTime,
      pageViews: 0,
      events: [],
      userAgent: navigator.userAgent,
      device: this.detectDevice(),
      browser: this.detectBrowser(),
      os: this.detectOS(),
      country: this.detectCountry(),
      city: this.detectCity()
    };
  }

  private setupEventListeners(): void {
    if (this.config.enablePageTracking) {
      this.trackPageView();
    }

    if (this.config.enablePerformanceTracking) {
      this.setupPerformanceTracking();
    }

    if (this.config.enableErrorTracking) {
      this.setupErrorTracking();
    }

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('page_hidden', 'visibility');
      } else {
        this.trackEvent('page_visible', 'visibility');
      }
    });

    // Track beforeunload
    window.addEventListener('beforeunload', () => {
      this.trackEvent('page_unload', 'navigation');
      this.flush();
    });
  }

  private setupPerformanceTracking(): void {
    if ('performance' in window) {
      // Track navigation timing
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          this.trackPerformanceMetric('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, 'navigation');
          this.trackPerformanceMetric('load_complete', navigation.loadEventEnd - navigation.loadEventStart, 'navigation');
          this.trackPerformanceMetric('first_byte', navigation.responseStart - navigation.requestStart, 'navigation');
        }
      });

      // Track resource timing
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            this.trackPerformanceMetric(
              `resource_${entry.name.split('/').pop()}`,
              entry.duration,
              'resource'
            );
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  }

  private setupErrorTracking(): void {
    window.addEventListener('error', (event) => {
      this.trackError({
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        timestamp: new Date().toISOString(),
        sessionId: this.session?.id || '',
        url: window.location.href,
        userAgent: navigator.userAgent
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        timestamp: new Date().toISOString(),
        sessionId: this.session?.id || '',
        url: window.location.href,
        userAgent: navigator.userAgent
      });
    });
  }

  public trackEvent(name: string, type: string, value?: number, metadata?: Record<string, unknown>): void {
    if (!this.config.enableEventTracking) return;

    const event: UserEvent = {
      id: this.generateId(),
      type,
      name,
      value,
      timestamp: new Date().toISOString(),
      sessionId: this.session?.id || '',
      userId: this.session?.userId,
      url: window.location.href,
      metadata
    };

    this.eventQueue.push(event);
    this.session?.events.push(event);

    if (this.config.enableDebug) {
      console.log('Analytics Event:', event);
    }

    this.checkFlush();
  }

  public trackPageView(title?: string, url?: string): void {
    if (!this.config.enablePageTracking) return;

    const pageView: PageView = {
      url: url || window.location.href,
      title: title || document.title,
      timestamp: new Date().toISOString(),
      sessionId: this.session?.id || '',
      userId: this.session?.userId,
      referrer: document.referrer,
      loadTime: performance.now(),
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    };

    this.pageViewQueue.push(pageView);
    
    if (this.session) {
      this.session.pageViews++;
    }

    if (this.config.enableDebug) {
      console.log('Page View:', pageView);
    }

    this.checkFlush();
  }

  public trackPerformanceMetric(name: string, value: number, category: PerformanceMetric['category']): void {
    if (!this.config.enablePerformanceTracking) return;

    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: new Date().toISOString(),
      sessionId: this.session?.id || '',
      url: window.location.href,
      category
    };

    this.performanceQueue.push(metric);

    if (this.config.enableDebug) {
      console.log('Performance Metric:', metric);
    }

    this.checkFlush();
  }

  public trackError(error: Omit<ErrorEvent, 'timestamp' | 'sessionId' | 'url' | 'userAgent'>): void {
    if (!this.config.enableErrorTracking) return;

    const errorEvent: ErrorEvent = {
      ...error,
      timestamp: new Date().toISOString(),
      sessionId: this.session?.id || '',
      url: window.location.href,
      userAgent: navigator.userAgent
    };

    this.errorQueue.push(errorEvent);

    if (this.config.enableDebug) {
      console.log('Error Event:', errorEvent);
    }

    this.checkFlush();
  }

  public setUserId(userId: string): void {
    if (this.session) {
      this.session.userId = userId;
    }
  }

  public setUserProperties(properties: Record<string, unknown>): void {
    if (this.session) {
      this.session.metadata = { ...this.session.metadata, ...properties };
    }
  }

  private checkFlush(): void {
    const totalItems = this.eventQueue.length + this.pageViewQueue.length + this.performanceQueue.length + this.errorQueue.length;
    
    if (totalItems >= this.config.batchSize) {
      this.flush();
    }
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  public async flush(): Promise<void> {
    const data = {
      session: this.session,
      events: [...this.eventQueue],
      pageViews: [...this.pageViewQueue],
      performance: [...this.performanceQueue],
      errors: [...this.errorQueue]
    };

    if (this.config.enableDebug) {
      console.log('Flushing analytics data:', data);
    }

    try {
      await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      // Clear queues after successful send
      this.eventQueue = [];
      this.pageViewQueue = [];
      this.performanceQueue = [];
      this.errorQueue = [];
    } catch (error) {
      console.error('Failed to send analytics data:', error);
    }
  }

  private detectDevice(): 'desktop' | 'mobile' | 'tablet' {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/tablet|ipad|playbook|silk/.test(userAgent)) {
      return 'tablet';
    }
    
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/.test(userAgent)) {
      return 'mobile';
    }
    
    return 'desktop';
  }

  private detectBrowser(): string {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    
    return 'Unknown';
  }

  private detectOS(): string {
    const userAgent = navigator.userAgent;
    
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    
    return 'Unknown';
  }

  private detectCountry(): string | undefined {
    // This would typically use a geolocation service
    return undefined;
  }

  private detectCity(): string | undefined {
    // This would typically use a geolocation service
    return undefined;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  public destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flush();
  }
}

// Create global analytics instance
let analyticsInstance: AdvancedAnalytics | null = null;

export function initializeAnalytics(config?: Partial<AnalyticsConfig>): AdvancedAnalytics {
  if (!analyticsInstance) {
    analyticsInstance = new AdvancedAnalytics(config);
  }
  return analyticsInstance;
}

export function getAnalytics(): AdvancedAnalytics | null {
  return analyticsInstance;
}

// Convenience functions
export function trackEvent(name: string, type: string, value?: number, metadata?: Record<string, unknown>): void {
  getAnalytics()?.trackEvent(name, type, value, metadata);
}

export function trackPageView(title?: string, url?: string): void {
  getAnalytics()?.trackPageView(title, url);
}

export function trackPerformanceMetric(name: string, value: number, category: PerformanceMetric['category']): void {
  getAnalytics()?.trackPerformanceMetric(name, value, category);
}

export function trackError(error: Omit<ErrorEvent, 'timestamp' | 'sessionId' | 'url' | 'userAgent'>): void {
  getAnalytics()?.trackError(error);
}

export function setUserId(userId: string): void {
  getAnalytics()?.setUserId(userId);
}

export function setUserProperties(properties: Record<string, unknown>): void {
  getAnalytics()?.setUserProperties(properties);
}