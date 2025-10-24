/**
 * Analytics tracking utilities
 */

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

export interface AnalyticsConfig {
  trackingId: string;
  debug?: boolean;
  anonymizeIp?: boolean;
  customDimensions?: Record<string, string>;
}

export class AnalyticsTracker {
  private config: AnalyticsConfig;
  private isInitialized: boolean = false;

  constructor(config: AnalyticsConfig) {
    this.config = config;
  }

  /**
   * Initialize analytics tracking
   */
  init(): void {
    if (this.isInitialized) return;

    // Load Google Analytics
    if (typeof window !== 'undefined') {
      this.loadGoogleAnalytics();
      this.isInitialized = true;
    }
  }

  /**
   * Load Google Analytics script
   */
  private loadGoogleAnalytics(): void {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.config.trackingId, {
      anonymize_ip: this.config.anonymizeIp,
      debug_mode: this.config.debug,
    });
  }

  /**
   * Track an event
   */
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      console.warn('Analytics not initialized. Call init() first.');
      return;
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_map: event.custom_parameters,
      });
    }

    if (this.config.debug) {
      console.log('Analytics Event:', event);
    }
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle: string): void {
    if (!this.isInitialized) {
      console.warn('Analytics not initialized. Call init() first.');
      return;
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', this.config.trackingId, {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }

    if (this.config.debug) {
      console.log('Page View:', { pagePath, pageTitle });
    }
  }

  /**
   * Track custom event
   */
  trackCustomEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    customParameters?: Record<string, any>
  ): void {
    this.trackEvent({
      event: 'custom_event',
      category,
      action,
      label,
      value,
      custom_parameters: customParameters,
    });
  }

  /**
   * Track user engagement
   */
  trackEngagement(engagementType: string, details?: Record<string, any>): void {
    this.trackCustomEvent('engagement', engagementType, undefined, undefined, details);
  }

  /**
   * Track conversion
   */
  trackConversion(conversionId: string, value?: number, currency?: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency,
      });
    }
  }
}

// Export default instance
export const analyticsTracker = new AnalyticsTracker({
  trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'GA_MEASUREMENT_ID',
  debug: process.env.NODE_ENV === 'development',
  anonymizeIp: true,
});

// Export utility functions
export const trackEvent = (event: AnalyticsEvent) => {
  analyticsTracker.trackEvent(event);
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  analyticsTracker.trackPageView(pagePath, pageTitle);
};

export const trackCustomEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, any>
) => {
  analyticsTracker.trackCustomEvent(category, action, label, value, customParameters);
};