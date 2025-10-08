// Performance monitoring setup
import { analytics } from './utils/analytics';
import { ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';
import { logger } from './utils/logger';

const errorHandler = ErrorHandler.getInstance();

function initializeMonitoring() {
  if (typeof window === 'undefined') return;

  // Initialize performance monitoring
  performanceOptimizer.initialize();

  // Log monitoring initialization
  logger.info('Monitoring initialized', 'Monitoring');
}

// Initialize monitoring on load
if (typeof window !== 'undefined') {
  initializeMonitoring();
}

export { analytics, errorHandler, initializeMonitoring, ErrorHandler, performanceOptimizer };