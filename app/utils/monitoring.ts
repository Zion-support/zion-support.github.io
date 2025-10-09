/**
 * Monitoring utilities for error tracking and performance monitoring
 */

export interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
}

export interface MonitoringConfig {
  enableErrorTracking: boolean;
  enablePerformanceTracking: boolean;
  enableAnalytics: boolean;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
}

const defaultConfig: MonitoringConfig = {
  enableErrorTracking: true,
  enablePerformanceTracking: true,
  enableAnalytics: true,
  logLevel: 'error'
};

class MonitoringService {
  private config: MonitoringConfig;

  constructor(config: Partial<MonitoringConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
  }

  trackError(error: Error, errorInfo?: ErrorInfo, context?: Record<string, any>) {
    if (!this.config.enableErrorTracking) return;

    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      url: typeof window !== 'undefined' ? window.location.href : 'server',
      ...errorInfo,
      ...context
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', errorData);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService('error', errorData);
    }
  }

  trackPerformance(metric: string, value: number, context?: Record<string, any>) {
    if (!this.config.enablePerformanceTracking) return;

    const performanceData = {
      metric,
      value,
      timestamp: new Date().toISOString(),
      ...context
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance tracked:', performanceData);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService('performance', performanceData);
    }
  }

  trackEvent(event: string, properties?: Record<string, any>) {
    if (!this.config.enableAnalytics) return;

    const eventData = {
      event,
      timestamp: new Date().toISOString(),
      ...properties
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Event tracked:', eventData);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService('event', eventData);
    }
  }

  private sendToExternalService(type: string, data: any) {
    // In a real implementation, this would send data to an external service
    // For now, we'll just log it
    console.log(`Sending ${type} to external service:`, data);
  }

  updateConfig(newConfig: Partial<MonitoringConfig>) {
    this.config = { ...this.config, ...newConfig };
  }
}

// Export singleton instance
export const monitoring = new MonitoringService();

// Export individual functions for convenience
export const trackError = (error: Error, errorInfo?: ErrorInfo, context?: Record<string, any>) => 
  monitoring.trackError(error, errorInfo, context);

export const trackPerformance = (metric: string, value: number, context?: Record<string, any>) => 
  monitoring.trackPerformance(metric, value, context);

export const trackEvent = (event: string, properties?: Record<string, any>) => 
  monitoring.trackEvent(event, properties);

export default monitoring;