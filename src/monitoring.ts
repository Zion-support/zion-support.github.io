// Performance monitoring setup
import { analytics } from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

// Create error handler instance
const errorHandler = ErrorHandler.getInstance();

// Initialize monitoring systems
export const initializeMonitoring = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  // Initialize performance monitoring
  try {
    performanceOptimizer.initialize();
    logger.info('Performance monitoring initialized', 'monitoring');
  } catch (error) {
    console.error('Failed to initialize performance monitoring:', error);
  }

  // Setup global error handlers
  window.addEventListener('error', (event) => {
    errorHandler.logError(new Error(event.message), {
      stack: event.error?.stack,
      url: event.filename,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.logError(new Error(event.reason), {
      message: 'Unhandled Promise Rejection',
    });
  });

  logger.info('Monitoring systems initialized', 'monitoring');
};

// Initialize monitoring on load
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    initializeMonitoring();
  } else {
    window.addEventListener('load', initializeMonitoring);
  }
}

export { analytics, errorHandler, ErrorHandler, performanceOptimizer };
