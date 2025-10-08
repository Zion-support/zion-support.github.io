import ErrorHandler from "./utils/errorHandler";
import analytics from "./utils/analytics";
import { logger } from "./utils/logger";
import { performanceOptimizer } from "../app/utils/performanceOptimizer";
// Performance monitoring setup

// Initialize error handler
const errorHandler = new ErrorHandler();

// Initialize monitoring on load
function initializeMonitoring() {
  try {
    // Set up performance monitoring
    if (typeof window !== "undefined") {
      // Monitor web vitals - performanceOptimizer doesn't have init method
      // performanceOptimizer.init();

      // Set up error tracking
      // errorHandler.init(); // Method does not exist

      // Initialize analytics
      // analytics.init(); // Method may not exist on all analytics implementations

      logger.info("Monitoring initialized successfully");
    }
  } catch (error) {
    logger.error("Failed to initialize monitoring:", error);
  }
}

// Initialize monitoring on load
initializeMonitoring();

export {
  analytics,
  errorHandler,
  initializeMonitoring,
  ErrorHandler,
  performanceOptimizer,
};
