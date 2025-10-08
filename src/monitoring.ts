// Performance monitoring setup
import { analytics } from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

const errorHandler = ErrorHandler.getInstance();

/**
 * Initialize monitoring systems
 */
export const initializeMonitoring = () => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Initialize error handler
    window.addEventListener('error', (event) => {
      errorHandler.logError(event.error || new Error(event.message));
    });

    window.addEventListener('unhandledrejection', (event) => {
      errorHandler.logError(new Error(event.reason));
    });

    // Initialize performance optimizer
    if (performanceOptimizer && typeof performanceOptimizer.init === 'function') {
      performanceOptimizer.init();
    }

    // Track page load
    if (typeof logger !== 'undefined' && logger) {
      logger.info('Monitoring initialized', 'monitoring');
    }

    console.log('✅ Monitoring systems initialized');
  } catch (error) {
    console.error('Failed to initialize monitoring:', error);
  }
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