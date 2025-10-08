// Performance monitoring setup
import { analytics } from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

// Initialize error handler
const errorHandler = ErrorHandler.getInstance();

export function initializeMonitoring() {
  try {
    if (typeof window === 'undefined') return;

    // Initialize error tracking
    errorHandler.logError = errorHandler.logError.bind(errorHandler);
    
    // Log initialization
    logger.info('Monitoring initialized', 'Monitoring');
  } catch (error) {
    console.error('Failed to initialize monitoring:', error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };