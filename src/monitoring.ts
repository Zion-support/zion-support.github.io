// Performance monitoring setup
import { analytics } from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

// Initialize error handler
const errorHandler = new ErrorHandler();

// Initialize monitoring system
function initializeMonitoring() {
  try {
    // Set up error tracking
    errorHandler.initialize();
    
    // Start performance monitoring
    if (typeof window !== 'undefined' && window.performance) {
      performanceOptimizer.initialize();
    }
    
    // Initialize analytics
    analytics.initialize();
    
    logger.info('Monitoring initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };