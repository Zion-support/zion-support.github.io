import React, { useEffect, useState, useCallback } from 'react';

interface AnalyticsEvent {
  id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number | string;
  timestamp: number;
  sessionId: string;
  userId?: string;
  url: string;
  userAgent: string;
  metadata?: Record<string, any>;
}

interface UserSession {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: number;
  userId?: string;
}

interface AnalyticsConfig {
  enableHeatmaps: boolean;
  enableScrollTracking: boolean;
  enableClickTracking: boolean;
  enableFormTracking: boolean;
  enablePerformanceTracking: boolean;
  enableErrorTracking: boolean;
  batchSize: number;
  flushInterval: number;
}

class AdvancedAnalytics {
  private static instance: AdvancedAnalytics;
  private events: AnalyticsEvent[] = [];
  private session: UserSession;
  private config: AnalyticsConfig;
  private flushTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.config = {
      enableHeatmaps: true,
      enableScrollTracking: true,
      enableClickTracking: true,
      enableFormTracking: true,
      enablePerformanceTracking: true,
      enableErrorTracking: true,
      batchSize: 10,
      flushInterval: 30000 // 30 seconds
    };

    this.session = {
      sessionId: this.generateSessionId(),
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: 0,
      events: 0
    };

    this.initializeTracking();
  }

  static getInstance(): AdvancedAnalytics {
    if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new AdvancedAnalytics();
    }
    return AdvancedAnalytics.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking(): void {
    if (typeof window === 'undefined') return;

    // Track page views
    this.trackPageView();

    // Track performance metrics
    if (this.config.enablePerformanceTracking) {
      this.trackPerformanceMetrics();
    }

    // Track errors
    if (this.config.enableErrorTracking) {
      this.trackErrors();
    }

    // Track clicks
    if (this.config.enableClickTracking) {
      this.trackClicks();
    }

    // Track scroll behavior
    if (this.config.enableScrollTracking) {
      this.trackScrollBehavior();
    }

    // Track form interactions
    if (this.config.enableFormTracking) {
      this.trackFormInteractions();
    }

    // Start flush timer
    this.startFlushTimer();
  }

  private trackPageView(): void {
    this.track('page_view', 'navigation', 'view', window.location.pathname);
    this.session.pageViews++;
    this.session.lastActivity = Date.now();
  }

  private trackPerformanceMetrics(): void {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            this.track('performance', 'timing', 'page_load', navigation.loadEventEnd - navigation.loadEventStart);
            this.track('performance', 'timing', 'dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
          }
        }, 0);
      });
    }
  }

  private trackErrors(): void {
    window.addEventListener('error', (event) => {
      this.track('error', 'javascript', 'error', event.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.track('error', 'promise', 'rejection', event.reason?.message || 'Unhandled promise rejection', {
        reason: event.reason
      });
    });
  }

  private trackClicks(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const text = target.textContent?.trim().substring(0, 100) || '';
      const href = target.getAttribute('href') || '';
      
      this.track('click', 'interaction', 'click', `${tagName}: ${text}`, {
        tagName,
        href,
        className: target.className,
        id: target.id
      });
    });
  }

  private trackScrollBehavior(): void {
    let scrollTimeout: NodeJS.Timeout;
    let maxScroll = 0;

    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        maxScroll = Math.max(maxScroll, scrollPercent);
        
        if (scrollPercent % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          this.track('scroll', 'engagement', 'scroll', scrollPercent);
        }
      }, 150);
    });

    // Track max scroll on page unload
    window.addEventListener('beforeunload', () => {
      if (maxScroll > 0) {
        this.track('scroll', 'engagement', 'max_scroll', maxScroll);
      }
    });
  }

  private trackFormInteractions(): void {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formId = form.id || form.className || 'unknown';
      
      this.track('form', 'interaction', 'submit', formId, {
        formId,
        action: form.action,
        method: form.method
      });
    });

    document.addEventListener('focus', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
        this.track('form', 'interaction', 'focus', (target as HTMLInputElement).name || target.id || 'unknown');
      }
    }, true);
  }

  private startFlushTimer(): void {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  track(
    category: string,
    action: string,
    label?: string,
    value?: number | string,
    metadata?: Record<string, any>
  ): void {
    const event: AnalyticsEvent = {
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: 'custom',
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.session.sessionId,
      userId: this.session.userId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      metadata
    };

    this.events.push(event);
    this.session.events++;
    this.session.lastActivity = Date.now();

    // Flush if batch size reached
    if (this.events.length >= this.config.batchSize) {
      this.flush();
    }
  }

  private async flush(): Promise<void> {
    if (this.events.length === 0) return;

    const eventsToFlush = [...this.events];
    this.events = [];

    try {
      // Send to analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: eventsToFlush,
          session: this.session
        })
      });
    } catch (error) {
      console.error('Failed to send analytics data:', error);
      // Re-add events to queue for retry
      this.events.unshift(...eventsToFlush);
    }
  }

  setUserId(userId: string): void {
    this.session.userId = userId;
  }

  getSession(): UserSession {
    return { ...this.session };
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  updateConfig(config: Partial<AnalyticsConfig>): void {
    this.config = { ...this.config, ...config };
  }

  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flush();
  }
}

export function useAdvancedAnalytics() {
  const [analytics] = useState(() => AdvancedAnalytics.getInstance());
  const [session, setSession] = useState<UserSession>(analytics.getSession());

  useEffect(() => {
    // Update session info periodically
    const interval = setInterval(() => {
      setSession(analytics.getSession());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [analytics]);

  const track = useCallback((
    category: string,
    action: string,
    label?: string,
    value?: number | string,
    metadata?: Record<string, any>
  ) => {
    analytics.track(category, action, label, value, metadata);
  }, [analytics]);

  const setUserId = useCallback((userId: string) => {
    analytics.setUserId(userId);
    setSession(analytics.getSession());
  }, [analytics]);

  const updateConfig = useCallback((config: Partial<AnalyticsConfig>) => {
    analytics.updateConfig(config);
  }, [analytics]);

  return {
    track,
    setUserId,
    updateConfig,
    session,
    events: analytics.getEvents()
  };
}