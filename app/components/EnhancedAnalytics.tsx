'use client';
import React, { useEffect } from 'react';

interface AnalyticsEvent {
  name: string;
  category: string;
  value?: number;
  label?: string;
}

class AnalyticsService {
  private isInitialized = false;

  init() {
    if (typeof window !== 'undefined' && !this.isInitialized) {
      // Initialize analytics service
      this.isInitialized = true;
    }
  }

  trackEvent(name: string, parameters: Record<string, any> = {}) {
    if (typeof window !== 'undefined' && this.isInitialized) {
      // Track event with analytics service
      console.log('Analytics Event:', name, parameters);
    }
  }

  trackPageView(page: string) {
    this.trackEvent('page_view', { page });
  }

  trackPerformance(metric: { name: string; value: number; id: string }) {
    this.trackEvent(metric.name, {
      category: 'performance',
      value: Math.round(metric.value),
      label: metric.id
    });
  }
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
    trackEvent: analyticsService.trackEvent.bind(analyticsService),
    trackPageView: analyticsService.trackPageView.bind(analyticsService),
    trackPerformance: analyticsService.trackPerformance.bind(analyticsService)
  };
};

export default AnalyticsService;