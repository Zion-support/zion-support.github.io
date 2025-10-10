'use client';
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface AnalyticsEvent {
  name: string;
  value?: number;
  category?: string;
  label?: string;
}

class AnalyticsService {
  private isInitialized = false;

  init() {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    // Initialize Web Vitals
    this.initWebVitals();
    
    // Initialize custom event tracking
    this.initCustomEvents();
    
    this.isInitialized = true;
  }

  private initWebVitals() {
    onCLS(this.sendToAnalytics);
    onINP(this.sendToAnalytics);
    onFCP(this.sendToAnalytics);
    onLCP(this.sendToAnalytics);
    onTTFB(this.sendToAnalytics);
  }

  private initCustomEvents() {
    // Track page views
    this.trackPageView();
    
    // Track button clicks
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.matches('button, a[href]')) {
        this.trackEvent('click', {
          category: 'engagement',
          label: target.textContent || target.getAttribute('href') || 'unknown'
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        category: 'engagement',
        label: form.id || form.className || 'unknown_form'
      });
    });
  }

  private trackPageView() {
    this.trackEvent('page_view', {
      category: 'navigation',
      label: window.location.pathname
    });
  }

  trackEvent(name: string, params: Omit<AnalyticsEvent, 'name'> = {}) {
    const event: AnalyticsEvent = {
      name,
      ...params
    };

    // Send to analytics service (replace with your preferred service)
    console.log('Analytics Event:', event);
    
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: params.category,
        event_label: params.label,
        value: params.value
      });
    }
  }

  private sendToAnalytics = (metric: any) => {
    this.trackEvent(metric.name, {
      category: 'performance',
      value: Math.round(metric.value),
      label: metric.id
    });
  };
}

const analyticsService = new AnalyticsService();

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init();
  }, []);

  return <>{children}</>;
};

export const useAnalytics = () => {
  return {
    trackEvent: analyticsService.trackEvent.bind(analyticsService)
  };
};

export default AnalyticsService;