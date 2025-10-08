// Performance monitoring setup
import analytics from './utils/analytics';
import ErrorHandler from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/advancedPerformanceOptimizer';
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

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };
