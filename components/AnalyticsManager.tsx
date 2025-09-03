"use client";

interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private trackingId: string;
  private isInitialized: boolean = false;

  private constructor(trackingId: string) {
    this.trackingId = trackingId;
  }

  public static getInstance(trackingId?: string): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      if (!trackingId) {
        throw new Error('Tracking ID is required for first initialization');
      }
      AnalyticsManager.instance = new AnalyticsManager(trackingId);
    }
    return AnalyticsManager.instance;
  }

  public initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', this.trackingId);

    this.isInitialized = true;
  }

  public trackEvent(event: AnalyticsEvent): void {
    if (typeof window === 'undefined' || !this.isInitialized) {
      return;
    }

    window.gtag('event', event.name, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    });
  }

  public trackPageView(pagePath: string, pageTitle?: string): void {
    if (typeof window === 'undefined' || !this.isInitialized) {
      return;
    }

    window.gtag('config', this.trackingId, {
      page_path: pagePath,
      page_title: pageTitle
    });
  }

  public trackPerformance(metrics: PerformanceMetrics): void {
    if (typeof window === 'undefined' || !this.isInitialized) {
      return;
    }

    Object.entries(metrics).forEach(([metric, value]) => {
      window.gtag('event', 'web_vitals', {
        name: metric,
        value: Math.round(value),
        event_category: 'Performance'
      });
    });
  }
}

export default AnalyticsManager;