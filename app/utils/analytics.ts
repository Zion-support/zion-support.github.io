/**
 * Enhanced Analytics Utility
 * Provides type-safe analytics tracking with error handling
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export interface AnalyticsUser {
  id?: string;
  properties?: Record<string, unknown>;
}

class AnalyticsService {
  private isInitialized = false;
  private queue: AnalyticsEvent[] = [];
  private readonly maxQueueSize = 100;

  /**
   * Initialize analytics service
   */
  async initialize(trackingId?: string): Promise<void> {
    if (this.isInitialized) return;

    // Load analytics script if tracking ID is provided
    if (trackingId && typeof window !== 'undefined') {
      await this.loadScript(trackingId);
    }

    this.isInitialized = true;

    // Process queued events
    this.processQueue();
  }

  /**
   * Track an event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.queueEvent(event);
      return;
    }

    try {
      // Send to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics]', event);
      }

      // Send to Google Analytics if available
      if (this.hasGtag()) {
        window.gtag!('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.metadata,
        });
      }
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  /**
   * Track a page view
   */
  trackPageView(path: string): void {
    if (!this.isInitialized) {
      return;
    }

    try {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Page view:', path);
      }

      if (this.hasGtag()) {
        window.gtag!('event', 'page_view', {
          page_path: path,
        });
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  /**
   * Set user properties
   */
  setUser(user: AnalyticsUser): void {
    if (!this.isInitialized) return;

    try {
      if (this.hasGtag() && user.id) {
        window.gtag!('set', { user_id: user.id });

        if (user.properties) {
          window.gtag!('set', 'user_properties', user.properties);
        }
      }
    } catch (error) {
      console.error('Failed to set user:', error);
    }
  }

  /**
   * Track an exception
   */
  trackException(description: string, fatal = false): void {
    this.trackEvent({
      action: 'exception',
      category: 'Error',
      label: description,
      metadata: { fatal },
    });
  }

  /**
   * Track timing
   */
  trackTiming(category: string, variable: string, value: number, label?: string): void {
    if (!this.isInitialized) return;

    try {
      if (this.hasGtag()) {
        window.gtag!('event', 'timing_complete', {
          name: variable,
          value,
          event_category: category,
          event_label: label,
        });
      }
    } catch (error) {
      console.error('Failed to track timing:', error);
    }
  }

  /**
   * Check if gtag is available
   */
  private hasGtag(): boolean {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  /**
   * Queue an event for later processing
   */
  private queueEvent(event: AnalyticsEvent): void {
    if (this.queue.length < this.maxQueueSize) {
      this.queue.push(event);
    }
  }

  /**
   * Process queued events
   */
  private processQueue(): void {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.trackEvent(event);
      }
    }
  }

  /**
   * Load Google Analytics script
   */
  private async loadScript(trackingId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load analytics script'));

      document.head.appendChild(script);

      // Initialize gtag
      window.gtag = function(...args: unknown[]) {
        (window.gtag as unknown as { q?: unknown[] }).q = (window.gtag as unknown as { q?: unknown[] }).q || [];
        (window.gtag as unknown as { q: unknown[] }).q.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId);
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metricName: string, value: number): void {
    this.trackEvent({
      action: 'performance',
      category: 'Performance',
      label: metricName,
      value: Math.round(value),
    });
  }
}

// Export singleton instance
export const analytics = new AnalyticsService();

// Export convenience functions
export const trackEvent = (event: AnalyticsEvent) => analytics.trackEvent(event);
export const trackPageView = (path: string) => analytics.trackPageView(path);
export const setUser = (user: AnalyticsUser) => analytics.setUser(user);
export const trackException = (description: string, fatal?: boolean) =>
  analytics.trackException(description, fatal);
export const trackTiming = (category: string, variable: string, value: number, label?: string) =>
  analytics.trackTiming(category, variable, value, label);