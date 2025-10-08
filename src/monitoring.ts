// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler, ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

/**
 * Initialize comprehensive monitoring
 */
export const initializeMonitoring = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  // Initialize performance monitoring
  performanceOptimizer.init();
  
  // Track page load performance
  window.addEventListener('load', () => {
    const metrics = performanceOptimizer.measurePageLoad();
    if (metrics) {
      performanceOptimizer.reportWebVitals(metrics);
      logger.info('Page load metrics collected', 'Monitoring', metrics);
    }
  });

  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries) => {
    entries.forEach((entry) => {
      if (entry.duration > 50) {
        logger.warn(`Long task detected: ${entry.duration}ms`, 'Performance');
        analytics.trackPerformance('long_task', entry.duration, 'ms');
      }
    });
  });

  // Global error handler
  window.addEventListener('error', (event) => {
    errorHandler.logError(new Error(event.message), {
      stack: event.error?.stack,
      url: event.filename,
      metadata: {
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });

  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.logError(new Error(event.reason), {
      metadata: {
        type: 'unhandled_promise_rejection',
      },
    });
  });

  logger.info('Monitoring initialized', 'Monitoring');
};

// Initialize monitoring on load
if (typeof window !== 'undefined') {
  initializeMonitoring();
}

export { analytics, errorHandler, ErrorHandler, performanceOptimizer };