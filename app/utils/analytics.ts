import React from 'react';
/**
 * Enhanced Analytics Utility
 * Provides type-safe analytics tracking with error handling
 */

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
  initialize(): void {
    if (this.isInitialized) return;
    
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined') return;

      // Process queued events
      this.processQueue();
      this.isInitialized = true;
    } catch (error) {
      console.error('Analytics initialization failed:', error);
    }
  }

  /**
   * Track a custom event
   */
  trackEvent(event: AnalyticsEvent): void {
    try {
      if (!this.isInitialized) {
        this.queueEvent(event);
        return;
      }

      // Send to Google Analytics if available
      if (this.hasGtag()) {
        (window as unknown as { gtag: Function }).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.metadata,
        });
      }

      // Log in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Analytics Event:', event);
      }
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  }

  /**
   * Track page view
   */
  trackPageView(page: string, title?: string): void {
    this.trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: page,
      metadata: {
        page_title: title || document.title,
        page_location: window.location.href,
      },
    });
  }

  /**
   * Track user interaction
   */
  trackInteraction(element: string, action: string, category = 'interaction'): void {
    this.trackEvent({
      action,
      category,
      label: element,
    });
  }

  /**
   * Track performance metrics
   */
  trackPerformance(metric: string, value: number, category = 'performance'): void {
    this.trackEvent({
      action: 'performance_metric',
      category,
      label: metric,
      value: Math.round(value),
    });
  }

  /**
   * Track error events
   */
  trackError(error: Error, context?: string): void {
    this.trackEvent({
      action: 'error',
      category: 'error',
      label: error.message,
      metadata: {
        error_name: error.name,
        error_stack: error.stack,
        context,
      },
    });
  }

  /**
   * Set user properties
   */
  setUser(user: AnalyticsUser): void {
    try {
      if (this.hasGtag()) {
        (window as unknown as { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID', {
          user_id: user.id,
          custom_map: user.properties,
        });
      }
    } catch (error) {
      console.error('Failed to set user properties:', error);
    }
  }

  /**
   * Check if gtag is available
   */
  private hasGtag(): boolean {
    return typeof window !== 'undefined' && 'gtag' in window;
  }

  /**
   * Queue event for later processing
   */
  private queueEvent(event: AnalyticsEvent): void {
    if (this.queue.length >= this.maxQueueSize) {
      this.queue.shift(); // Remove oldest event
    }
    this.queue.push(event);
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
   * Get analytics data
   */
  getAnalyticsData(): { events: AnalyticsEvent[]; isInitialized: boolean } {
    return {
      events: [...this.queue],
      isInitialized: this.isInitialized,
    };
  }

  /**
   * Clear analytics data
   */
  clearData(): void {
    this.queue = [];
  }
}

// Create singleton instance
export const analytics = new AnalyticsService();

// Export convenience functions
export const trackEvent = (event: AnalyticsEvent) => analytics.trackEvent(event);
export const trackPageView = (page: string, title?: string) => analytics.trackPageView(page, title);
export const trackInteraction = (element: string, action: string, category?: string) => 
  analytics.trackInteraction(element, action, category);
export const trackPerformance = (metric: string, value: number, category?: string) => 
  analytics.trackPerformance(metric, value, category);
export const trackError = (error: Error, context?: string) => analytics.trackError(error, context);
export const setUser = (user: AnalyticsUser) => analytics.setUser(user);

export default analytics;