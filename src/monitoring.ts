// Performance monitoring setup
import analytics from './utils/analytics';
import errorHandler from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

// Initialize monitoring on load
function initializeMonitoring() {
  try {
    // Set up performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor web vitals
      performanceOptimizer.init();
      
      // Initialize analytics
      if ('init' in analytics && typeof analytics.init === 'function') { analytics.init(); }
      
      logger.info('Monitoring initialized successfully');
    }
  } catch (error) {
    logger.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, performanceOptimizer };