// Performance monitoring setup
import { analytics } from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

// Create error handler instance
const errorHandler = new ErrorHandler();

/**
 * Initialize performance monitoring for the application
 * Tracks page views and errors
 */
function initializeMonitoring(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Track initial page load
    analytics.trackPageView(window.location.pathname);

    // Setup navigation tracking
    window.addEventListener('popstate', () => {
      analytics.trackPageView(window.location.pathname);
    });

    // Track errors globally
    window.addEventListener('error', (event) => {
      const error = event.error || new Error(event.message);
      errorHandler.logError(error, {
        errorId: `global_error_${Date.now()}`,
        componentStack: `${event.filename}:${event.lineno}:${event.colno}`,
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const error = new Error(`Unhandled Promise Rejection: ${event.reason}`);
      errorHandler.logError(error, {
        errorId: `unhandled_rejection_${Date.now()}`,
        componentStack: String(event.reason),
      });
    });

    // Initialize performance optimizer
    performanceOptimizer.optimizeImages();

    // Monitor long tasks using PerformanceObserver
    if (typeof PerformanceObserver !== 'undefined') {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            analytics.track('long_task', 'performance', 'detected', 'long_task', entry.duration);
          });
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch {
        // PerformanceObserver may not support 'longtask' in some environments
      }
    }

    // Get performance metrics
    const score = performanceOptimizer.getPerformanceScore();
    const metrics = performanceOptimizer.getMetrics();
    
    // Log performance data for monitoring
    logger.info('Performance metrics:', { score, metrics });
    
    // Track performance metrics
    analytics.track('performance_metrics', 'performance', 'measured', 'metrics', score);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };
