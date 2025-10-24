'use client';

/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */

interface MonitoringConfig {
  enableConsoleLogging: boolean;
  enablePerformanceTracking: boolean;
  enableErrorReporting: boolean;
  apiEndpoint?: string;
}

class MonitoringService {
  private config: MonitoringConfig;
  private performanceObserver: PerformanceObserver | null = null;

  constructor(config: MonitoringConfig) {
    this.config = config;
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    if (this.config.enablePerformanceTracking) {
      this.setupPerformanceObserver();
    }

    if (this.config.enableErrorReporting) {
      this.setupErrorReporting();
    }
  }

  private setupPerformanceObserver() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.performanceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (this.config.enableConsoleLogging) {
            console.log('Performance Entry:', entry);
          }
        });
      });

      this.performanceObserver.observe({ entryTypes: ['measure', 'navigation'] });
    }
  }

  private setupErrorReporting() {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.reportError('JavaScript Error', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error?.stack
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.reportError('Unhandled Promise Rejection', {
          reason: event.reason,
          promise: event.promise
        });
      });
    }
  }

  public trackEvent(eventName: string, properties?: Record<string, any>) {
    if (this.config.enableConsoleLogging) {
      console.log('Event Tracked:', eventName, properties);
    }

    if (this.config.apiEndpoint) {
      this.sendToAPI('event', { eventName, properties });
    }
  }

  public trackPageView(page: string) {
    if (this.config.enableConsoleLogging) {
      console.log('Page View:', page);
    }

    if (this.config.apiEndpoint) {
      this.sendToAPI('pageview', { page });
    }
  }

  private reportError(errorType: string, errorData: Record<string, any>) {
    if (this.config.enableConsoleLogging) {
      console.error('Error Reported:', errorType, errorData);
    }

    if (this.config.apiEndpoint) {
      this.sendToAPI('error', { errorType, errorData });
    }
  }

  private async sendToAPI(type: string, data: Record<string, any>) {
    if (!this.config.apiEndpoint) return;

    try {
      await fetch(this.config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, data, timestamp: new Date().toISOString() }),
      });
    } catch (error) {
      console.error('Failed to send monitoring data:', error);
    }
  }

  public destroy() {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
  }
}

// Default configuration
const defaultConfig: MonitoringConfig = {
  enableConsoleLogging: true,
  enablePerformanceTracking: true,
  enableErrorReporting: true,
};

// Create singleton instance
export const monitoring = new MonitoringService(defaultConfig);

// Export types and utilities
export type { MonitoringConfig };
export { MonitoringService };
