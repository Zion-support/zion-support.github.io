// Performance monitoring setup
import { analytics } from '../app/utils/analytics';
import { ErrorHandler } from '../src/utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';

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

    // Get performance metrics
    const score = performanceOptimizer.getPerformanceScore();
    
    // Track performance metrics
    analytics.track({
      event: 'performance_metrics',
      category: 'performance',
      label: 'measured',
      value: score
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };
