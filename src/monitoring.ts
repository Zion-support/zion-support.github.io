// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler, ErrorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

/**
 * Initialize monitoring systems
 */
export const initializeMonitoring = (): void => {
  if (typeof window === 'undefined') return;

  // Initialize performance monitoring
  performanceOptimizer.initialize();
  
  // Log initialization
  logger.info('Monitoring systems initialized', 'Monitoring');
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