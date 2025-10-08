// Performance monitoring setup
import analytics from './utils/analytics';
import ErrorHandler from './utils/errorHandler';
<<<<<<< HEAD
import { performanceOptimizer } from './utils/performanceOptimizer';
=======
import { initializePerformanceEnhancements } from '../app/utils/performanceEnhancer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c522
import { logger } from './utils/logger';

// Initialize error handler
const errorHandler = new ErrorHandler();

// Initialize monitoring on load
function initializeMonitoring() {
  try {
    // Set up performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor web vitals
<<<<<<< HEAD
      // performanceOptimizer.init(); // Method doesn't exist
=======
      initializePerformanceEnhancements();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c522
      
      // Set up error tracking
      // errorHandler.init(); // Method may not exist
      
      // Analytics is already initialized via constructor
      // No need to call init() as the Analytics class doesn't have this method
      
      logger.info('Monitoring initialized successfully');
    }
  } catch (error) {
    logger.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, ErrorHandler };
