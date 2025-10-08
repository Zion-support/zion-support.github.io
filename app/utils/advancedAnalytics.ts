/**
 * Advanced Analytics System for Zion Tech Group Website
 * Provides comprehensive user behavior tracking and insights
 */

interface UserEvent {
  id: string;
  type:
    | "page_view"
    | "click"
    | "scroll"
    | "form_submit"
    | "download"
    | "custom";
  category: string;
  action: string;
  label?: string;
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
  device: "desktop" | "mobile" | "tablet";
  browser: string;
  os: string;
  country?: string;
  city?: string;
}

interface AnalyticsConfig {
  enableTracking: boolean;
  enableHeatmaps: boolean;
  enableSessionRecording: boolean;
  enableA_BTesting: boolean;
  enableConversionTracking: boolean;
  enablePerformanceTracking: boolean;
  enableErrorTracking: boolean;
  enableUserJourneyTracking: boolean;
}

class AdvancedAnalytics {
  private static instance: AdvancedAnalytics;
  private config: AnalyticsConfig;
  private currentSession: UserSession;
  private eventQueue: UserEvent[] = [];
  private maxQueueSize = 1000;
  private isOnline = true;

  private constructor() {
    this.config = {
      enableTracking: true,
      enableHeatmaps: true,
      enableSessionRecording: false,
      enableA_BTesting: true,
      enableConversionTracking: true,
      enablePerformanceTracking: true,
      enableErrorTracking: true,
      enableUserJourneyTracking: true,
    };

    this.currentSession = this.createNewSession();
    this.initializeTracking();
  }

  static getInstance(): AdvancedAnalytics {
    if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new AdvancedAnalytics();
    }
    return AdvancedAnalytics.instance;
  }

  /**
   * Initialize comprehensive analytics tracking
   */
  private initializeTracking(): void {
    if (typeof window === "undefined" || !this.config.enableTracking) return;

    // Track page views
    this.trackPageView();

    // Track clicks
    this.trackClicks();

    // Track scrolls
    this.trackScrolls();

    // Track form submissions
    this.trackFormSubmissions();

    // Track downloads
    this.trackDownloads();

    // Track performance
    if (this.config.enablePerformanceTracking) {
      this.trackPerformance();
    }

    // Track user journey
    if (this.config.enableUserJourneyTracking) {
      this.trackUserJourney();
    }

    // Setup network monitoring
    this.setupNetworkMonitoring();
  }

  /**
   * Create new user session
   */
  private createNewSession(): UserSession {
    return {
      id: this.generateSessionId(),
      startTime: new Date().toISOString(),
      pageViews: 0,
      events: [],
      userAgent: navigator.userAgent,
      device: this.detectDevice(),
      browser: this.detectBrowser(),
      os: this.detectOS(),
      referrer: document.referrer,
    };
  }

  /**
   * Track page views
   */
  trackPageView(url?: string, title?: string): void {
    const event: UserEvent = {
      id: this.generateEventId(),
      type: "page_view",
      category: "navigation",
      action: "page_view",
      label: title || document.title,
      timestamp: new Date().toISOString(),
      sessionId: this.currentSession.id,
      userId: this.getUserId(),
      url: url || window.location.href,
      metadata: {
        referrer: document.referrer,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      },
    };

    this.trackEvent(event);
    this.currentSession.pageViews++;
  }

  /**
   * Track clicks
   */
  private trackClicks(): void {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const element = this.getElementInfo(target);

      const clickEvent: UserEvent = {
        id: this.generateEventId(),
        type: "click",
        category: element.category,
        action: "click",
        label: element.label,
        timestamp: new Date().toISOString(),
        sessionId: this.currentSession.id,
        userId: this.getUserId(),
        url: window.location.href,
        metadata: {
          element: element.tagName,
          id: element.id,
          className: element.className,
          text: element.text?.substring(0, 100),
          position: {
            x: event.clientX,
            y: event.clientY,
          },
        },
      };

      this.trackEvent(clickEvent);
    });
  }

  /**
   * Track scrolls
   */
  private trackScrolls(): void {
    let scrollTimeout: NodeJS.Timeout;

    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollEvent: UserEvent = {
          id: this.generateEventId(),
          type: "scroll",
          category: "engagement",
          action: "scroll",
          value: Math.round(
            (window.scrollY /
              (document.body.scrollHeight - window.innerHeight)) *
              100,
          ),
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
          url: window.location.href,
          metadata: {
            scrollY: window.scrollY,
            scrollPercentage: Math.round(
              (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
                100,
            ),
          },
        };

        this.trackEvent(scrollEvent);
      }, 100);
    });
  }

  /**
   * Track form submissions
   */
  private trackFormSubmissions(): void {
    document.addEventListener("submit", (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const formFields = Array.from(formData.keys());

      const submitEvent: UserEvent = {
        id: this.generateEventId(),
        type: "form_submit",
        category: "conversion",
        action: "form_submit",
        label: form.id || form.className || "unknown_form",
        timestamp: new Date().toISOString(),
        sessionId: this.currentSession.id,
        userId: this.getUserId(),
        url: window.location.href,
        metadata: {
          formId: form.id,
          formClass: form.className,
          formAction: form.action,
          formMethod: form.method,
          fields: formFields,
        },
      };

      this.trackEvent(submitEvent);
    });
  }

  /**
   * Track downloads
   */
  private trackDownloads(): void {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (link && this.isDownloadLink(link)) {
        const downloadEvent: UserEvent = {
          id: this.generateEventId(),
          type: "download",
          category: "conversion",
          action: "download",
          label: link.href,
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
          url: window.location.href,
          metadata: {
            downloadUrl: link.href,
            downloadText: link.textContent?.substring(0, 100),
          },
        };

        this.trackEvent(downloadEvent);
      }
    });
  }

  /**
   * Track performance metrics
   */
  private trackPerformance(): void {
    if ("PerformanceObserver" in window) {
      // Track Core Web Vitals
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "paint") {
            const paintEvent: UserEvent = {
              id: this.generateEventId(),
              type: "custom",
              category: "performance",
              action: entry.name,
              value: entry.startTime,
              timestamp: new Date().toISOString(),
              sessionId: this.currentSession.id,
              userId: this.getUserId(),
              url: window.location.href,
              metadata: {
                metric: entry.name,
                value: entry.startTime,
              },
            };

            this.trackEvent(paintEvent);
          }
        }
      }).observe({ entryTypes: ["paint"] });

      // Track navigation timing
      window.addEventListener("load", () => {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;

        const performanceEvent: UserEvent = {
          id: this.generateEventId(),
          type: "custom",
          category: "performance",
          action: "page_load",
          value: navigation.loadEventEnd - navigation.loadEventStart,
          timestamp: new Date().toISOString(),
          sessionId: this.currentSession.id,
          userId: this.getUserId(),
          url: window.location.href,
          metadata: {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded:
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart,
            firstByte: navigation.responseStart - navigation.requestStart,
          },
        };

        this.trackEvent(performanceEvent);
      });
    }
  }

  /**
   * Track user journey
   */
  private trackUserJourney(): void {
    // Track page transitions
    let lastUrl = window.location.href;

    const observer = new MutationObserver(() => {
      if (window.location.href !== lastUrl) {
        this.trackPageView();
        lastUrl = window.location.href;
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Setup network monitoring
   */
  private setupNetworkMonitoring(): void {
    window.addEventListener("online", () => {
      this.isOnline = true;
      this.flushEventQueue();
    });

    window.addEventListener("offline", () => {
      this.isOnline = false;
    });
  }

  /**
   * Track custom event
   */
  trackEvent(event: UserEvent): void {
    this.currentSession.events.push(event);
    this.eventQueue.push(event);

    // Keep queue size manageable
    if (this.eventQueue.length > this.maxQueueSize) {
      this.eventQueue.shift();
    }

    // Send to analytics service
    if (this.isOnline) {
      this.sendEvent(event);
    }
  }

  /**
   * Send event to analytics service
   */
  private async sendEvent(event: UserEvent): Promise<void> {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });
    } catch (error) {}
  }

  /**
   * Flush event queue when back online
   */
  private async flushEventQueue(): Promise<void> {
    if (!this.isOnline) return;

    const eventsToSend = [...this.eventQueue];
    this.eventQueue = [];

    for (const event of eventsToSend) {
      await this.sendEvent(event);
    }
  }

  /**
   * Get element information for tracking
   */
  private getElementInfo(element: HTMLElement): {
    category: string;
    label: string;
    tagName: string;
    id: string;
    className: string;
    text?: string;
  } {
    const tagName = element.tagName.toLowerCase();
    const id = element.id || "";
    const className = element.className || "";
    const text = element.textContent?.trim();

    // Determine category based on element type
    let category = "interaction";
    if (tagName === "button" || element.closest("button")) {
      category = "button";
    } else if (tagName === "a" || element.closest("a")) {
      category = "link";
    } else if (
      tagName === "input" ||
      tagName === "select" ||
      tagName === "textarea"
    ) {
      category = "form";
    }

    // Create label
    let label = id || className || text?.substring(0, 50) || tagName;

    return {
      category,
      label,
      tagName,
      id,
      className,
      text,
    };
  }

  /**
   * Check if link is a download
   */
  private isDownloadLink(link: HTMLAnchorElement): boolean {
    return (
      link.download !== "" ||
      !!link.href.match(
        /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|tar|gz)$/i,
      ) ||
      link.getAttribute("data-download") === "true"
    );
  }

  /**
   * Detect device type
   */
  private detectDevice(): "desktop" | "mobile" | "tablet" {
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }

  /**
   * Detect browser
   */
  private detectBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Safari")) return "Safari";
    if (userAgent.includes("Edge")) return "Edge";
    return "Unknown";
  }

  /**
   * Detect operating system
   */
  private detectOS(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Windows")) return "Windows";
    if (userAgent.includes("Mac")) return "macOS";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Android")) return "Android";
    if (userAgent.includes("iOS")) return "iOS";
    return "Unknown";
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate event ID
   */
  private generateEventId(): string {
    return `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get user ID from storage or generate one
   */
  private getUserId(): string | undefined {
    let userId = localStorage.getItem("analytics_user_id");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("analytics_user_id", userId);
    }
    return userId;
  }

  /**
   * Get analytics summary
   */
  getAnalyticsSummary(): {
    session: UserSession;
    totalEvents: number;
    eventsByType: Record<string, number>;
    eventsByCategory: Record<string, number>;
    topPages: Array<{ url: string; views: number }>;
    conversionRate: number;
  } {
    const events = this.currentSession.events;
    const totalEvents = events.length;

    const eventsByType = events.reduce(
      (acc, event) => {
        acc[event.type] = (acc[event.type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const eventsByCategory = events.reduce(
      (acc, event) => {
        acc[event.category] = (acc[event.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const pageViews = events.filter((e) => e.type === "page_view");
    const topPages = pageViews
      .reduce(
        (acc, event) => {
          const existing = acc.find((p) => p.url === event.url);
          if (existing) {
            existing.views++;
          } else {
            acc.push({ url: event.url, views: 1 });
          }
          return acc;
        },
        [] as Array<{ url: string; views: number }>,
      )
      .sort((a, b) => b.views - a.views);

    const conversions = events.filter(
      (e) => e.category === "conversion",
    ).length;
    const conversionRate =
      totalEvents > 0 ? (conversions / totalEvents) * 100 : 0;

    return {
      session: this.currentSession,
      totalEvents,
      eventsByType,
      eventsByCategory,
      topPages: topPages.slice(0, 10),
      conversionRate,
    };
  }

  /**
   * Send session data to analytics service
   */
  private async sendSessionData(session: UserSession): Promise<void> {
    try {
      await fetch("/api/analytics/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(session),
      });
    } catch (error) {}
  }

  /**
   * End current session
   */
  endSession(): void {
    this.currentSession.endTime = new Date().toISOString();
    this.currentSession.duration =
      new Date(this.currentSession.endTime).getTime() -
      new Date(this.currentSession.startTime).getTime();

    // Send session data
    if (this.isOnline) {
      this.sendSessionData(this.currentSession);
    }

    // Create new session
    this.currentSession = this.createNewSession();
  }
}

// Export singleton instance
export const advancedAnalytics = AdvancedAnalytics.getInstance();
export default advancedAnalytics;
