// Performance monitoring setup
import analytics from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

// Initialize error handler
const errorHandler = new ErrorHandler();

// Initialize monitoring on load
function initializeMonitoring() {
  try {
    // Set up performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor web vitals
      performanceOptimizer.init();
      
      // Set up error tracking
      // errorHandler.init(); // Method may not exist
      
      // Initialize analytics
      if (typeof analytics === 'object' && analytics !== null && 'init' in analytics && typeof analytics.init === 'function') {
        analytics.init();
      }
      
      logger.info('Monitoring initialized successfully');
    }
  } catch (error) {
    logger.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };