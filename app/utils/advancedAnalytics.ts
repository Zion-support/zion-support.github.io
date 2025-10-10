// Advanced Analytics Utility with comprehensive tracking capabilities

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
  userAgent: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

interface AnalyticsConfig {
  trackingId: string;
  enabled: boolean;
  debug: boolean;
  batchSize: number;
  flushInterval: number;
  endpoint: string;
  customDimensions: Record<string, string>;
  enableHeatmaps: boolean;
  enableSessionRecording: boolean;
  enableA/BTesting: boolean;
}

interface HeatmapData {
  x: number;
  y: number;
  clicks: number;
  scrolls: number;
  time: number;
  element?: string;
}

interface ABTest {
  id: string;
  name: string;
  variants: string[];
  trafficAllocation: number;
  startDate: string;
  endDate?: string;
  status: 'active' | 'paused' | 'completed';
}

class AdvancedAnalytics {
  private config: AnalyticsConfig;
  private session: UserSession;
  private eventQueue: UserEvent[] = [];
  private heatmapData: HeatmapData[] = [];
  private abTests: Map<string, ABTest> = new Map();
  private flushTimer: NodeJS.Timeout | null = null;
  private sessionStartTime: number;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = {
      trackingId: config.trackingId || '',
      enabled: config.enabled !== false,
      debug: config.debug || false,
      batchSize: config.batchSize || 20,
      flushInterval: config.flushInterval || 10000,
      endpoint: config.endpoint || '/api/analytics/advanced',
      customDimensions: config.customDimensions || {},
      enableHeatmaps: config.enableHeatmaps || false,
      enableSessionRecording: config.enableSessionRecording || false,
      enableA/BTesting: config.enableA/BTesting || false,
      ...config
    };

    this.sessionStartTime = Date.now();
    this.session = this.createSession();
    this.initialize();
  }

  private createSession(): UserSession {
    const sessionId = this.generateSessionId();
    const startTime = new Date().toISOString();
    
    return {
      id: sessionId,
      startTime,
      pageViews: 0,
      events: [],
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      referrer: typeof document !== 'undefined' ? document.referrer : undefined,
      ...this.extractUTMParameters()
    };
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private extractUTMParameters(): Partial<UserSession> {
    if (typeof window === 'undefined') return {};

    const urlParams = new URLSearchParams(window.location.search);
    return {
      utmSource: urlParams.get('utm_source') || undefined,
      utmMedium: urlParams.get('utm_medium') || undefined,
      utmCampaign: urlParams.get('utm_campaign') || undefined,
      utmTerm: urlParams.get('utm_term') || undefined,
      utmContent: urlParams.get('utm_content') || undefined
    };
  }

  private initialize(): void {
    if (typeof window === 'undefined' || !this.config.enabled) return;

    this.setupEventListeners();
    this.setupHeatmapTracking();
    this.setupSessionRecording();
    this.setupABTesting();
    this.startFlushTimer();
  }

  private setupEventListeners(): void {
    // Track page views
    this.trackPageView();

    // Track clicks
    document.addEventListener('click', (e) => {
      this.trackClick(e);
    });

    // Track form interactions
    document.addEventListener('submit', (e) => {
      this.trackFormSubmit(e);
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', this.throttle(() => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent('scroll_depth', 'engagement', {
          depth: scrollDepth,
          maxDepth: maxScrollDepth
        });
      }
    }, 1000));

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      this.trackEvent('time_on_page', 'engagement', {
        timeOnPage: Math.round(timeOnPage / 1000)
      });
    });

    // Track errors
    window.addEventListener('error', (e) => {
      this.trackEvent('javascript_error', 'error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        stack: e.error?.stack
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
      this.trackEvent('unhandled_promise_rejection', 'error', {
        reason: e.reason,
        promise: e.promise
      });
    });
  }

  private setupHeatmapTracking(): void {
    if (!this.config.enableHeatmaps) return;

    document.addEventListener('click', (e) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      this.heatmapData.push({
        x: e.clientX,
        y: e.clientY,
        clicks: 1,
        scrolls: 0,
        time: Date.now() - this.sessionStartTime,
        element: (e.target as HTMLElement).tagName.toLowerCase()
      });
    });

    window.addEventListener('scroll', this.throttle(() => {
      this.heatmapData.push({
        x: window.scrollX,
        y: window.scrollY,
        clicks: 0,
        scrolls: 1,
        time: Date.now() - this.sessionStartTime
      });
    }, 100));
  }

  private setupSessionRecording(): void {
    if (!this.config.enableSessionRecording) return;

    // Record DOM mutations
    const observer = new MutationObserver((mutations) => {
      this.trackEvent('dom_mutation', 'session_recording', {
        mutations: mutations.length,
        addedNodes: mutations.reduce((acc, m) => acc + m.addedNodes.length, 0),
        removedNodes: mutations.reduce((acc, m) => acc + m.removedNodes.length, 0)
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
  }

  private setupABTesting(): void {
    if (!this.config.enableA/BTesting) return;

    // Load A/B tests from configuration
    this.loadABTests();
  }

  private loadABTests(): void {
    // This would typically load from a configuration file or API
    const tests: ABTest[] = [
      {
        id: 'button_color_test',
        name: 'Button Color Test',
        variants: ['blue', 'green', 'red'],
        trafficAllocation: 0.5,
        startDate: new Date().toISOString(),
        status: 'active'
      }
    ];

    tests.forEach(test => {
      this.abTests.set(test.id, test);
    });
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  private throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Public methods
  public trackEvent(type: string, category: string, metadata?: Record<string, unknown>): void {
    if (!this.config.enabled) return;

    const event: UserEvent = {
      id: this.generateEventId(),
      type,
      name: category,
      timestamp: new Date().toISOString(),
      sessionId: this.session.id,
      userId: this.session.userId,
      url: window.location.href,
      metadata: {
        ...this.config.customDimensions,
        ...metadata
      }
    };

    this.eventQueue.push(event);
    this.session.events.push(event);

    if (this.config.debug) {
      console.log('Advanced Analytics Event:', event);
    }

    if (this.eventQueue.length >= this.config.batchSize) {
      this.flush();
    }
  }

  public trackPageView(): void {
    this.session.pageViews++;
    this.trackEvent('page_view', 'navigation', {
      page: window.location.pathname,
      title: document.title,
      referrer: document.referrer
    });
  }

  public trackClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    this.trackEvent('click', 'interaction', {
      element: target.tagName.toLowerCase(),
      className: target.className,
      id: target.id,
      text: target.textContent?.trim(),
      x: e.clientX,
      y: e.clientY
    });
  }

  public trackFormSubmit(e: Event): void {
    const form = e.target as HTMLFormElement;
    this.trackEvent('form_submit', 'form', {
      formId: form.id,
      formClass: form.className,
      formAction: form.action,
      formMethod: form.method
    });
  }

  public trackConversion(conversionName: string, value?: number, metadata?: Record<string, unknown>): void {
    this.trackEvent('conversion', 'conversion', {
      conversionName,
      value,
      ...metadata
    });
  }

  public trackCustomEvent(
    eventName: string,
    category: string,
    value?: number,
    metadata?: Record<string, unknown>
  ): void {
    this.trackEvent(eventName, category, {
      value,
      ...metadata
    });
  }

  public setUserId(userId: string): void {
    this.session.userId = userId;
  }

  public setCustomDimension(key: string, value: string): void {
    this.config.customDimensions[key] = value;
  }

  public getABTestVariant(testId: string): string | null {
    const test = this.abTests.get(testId);
    if (!test || test.status !== 'active') return null;

    // Simple hash-based assignment
    const hash = this.hashString(this.session.id + testId);
    const variantIndex = Math.floor(hash * test.variants.length);
    return test.variants[variantIndex];
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) / 2147483647; // Normalize to 0-1
  }

  private generateEventId(): string {
    return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  public async flush(): Promise<void> {
    if (this.eventQueue.length === 0) return;

    const events = [...this.eventQueue];
    this.eventQueue = [];

    try {
      await this.sendData({
        events,
        session: this.session,
        heatmapData: this.heatmapData,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
      // Re-queue events on failure
      this.eventQueue.unshift(...events);
    }
  }

  private async sendData(data: any): Promise<void> {
    const response = await fetch(this.config.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public getSessionData(): UserSession {
    return { ...this.session };
  }

  public getHeatmapData(): HeatmapData[] {
    return [...this.heatmapData];
  }

  public getEventQueueSize(): number {
    return this.eventQueue.length;
  }

  public clearEventQueue(): void {
    this.eventQueue = [];
  }

  public destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
      this.flushTimer = null;
    }
    
    // Update session end time
    this.session.endTime = new Date().toISOString();
    this.session.duration = Date.now() - this.sessionStartTime;
    
    this.flush();
  }
}

// Create default instance
export const advancedAnalytics = new AdvancedAnalytics();

// Export the class and types
export { AdvancedAnalytics, type UserEvent, type UserSession, type AnalyticsConfig, type HeatmapData, type ABTest };

// Utility functions
export const trackEvent = (type: string, category: string, metadata?: Record<string, unknown>) => {
  advancedAnalytics.trackEvent(type, category, metadata);
};

export const trackConversion = (conversionName: string, value?: number, metadata?: Record<string, unknown>) => {
  advancedAnalytics.trackConversion(conversionName, value, metadata);
};

export const trackCustomEvent = (eventName: string, category: string, value?: number, metadata?: Record<string, unknown>) => {
  advancedAnalytics.trackCustomEvent(eventName, category, value, metadata);
};

export const setUserId = (userId: string) => {
  advancedAnalytics.setUserId(userId);
};

export const getABTestVariant = (testId: string) => {
  return advancedAnalytics.getABTestVariant(testId);
};