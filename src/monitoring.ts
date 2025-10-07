// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';
import logger from '../lib/logger';

/**
 * Initialize performance monitoring for the application
 * Tracks page views, web vitals, and long tasks
 */
function initializeMonitoring(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Track initial page load
    analytics.trackPageView(window.location.pathname);

    // Track Web Vitals for performance insights
    const metrics = measurePageLoad();
    if (metrics) {
      reportWebVitals(metrics);
    }

    // Monitor long tasks that may impact user experience
    if ('monitorLongTasks' in performanceOptimizer) {
      performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.duration > 50) { // Only track tasks longer than 50ms
            analytics.track(
              'long_task',
              'performance',
              'detected',
              undefined,
              entry.duration
            );
          }
        });
      });
    }

    // Setup navigation tracking
    window.addEventListener('popstate', () => {
      analytics.trackPageView(window.location.pathname);
    });

    // Track errors globally
    window.addEventListener('error', (event) => {
      errorHandler.logError(
        event.error || new Error(event.message),
        {
          message: `${event.message} at ${event.filename}:${event.lineno}:${event.colno}`,
        }
      );
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      errorHandler.logError(
        new Error(`Unhandled Promise Rejection: ${event.reason}`),
        {
          message: `Unhandled Promise Rejection: ${event.reason}`,
        }
      );
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, performanceOptimizer, initializeMonitoring };