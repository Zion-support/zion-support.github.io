import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';

// Removed circular dependency with productionLogger - using direct console methods instead

// Removed unused LOG_LEVELS constant

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isDebugEnabled = process.env.DEBUG === 'true' || this.isDevelopment;

  debug(message: string, context?: Record<string, unknown>): void {
    if (this.isDebugEnabled) {
      logInfo(`[DEBUG] ${message}`, context);
    }
  }

  info(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      logInfo(`[INFO] ${message}`, context);
    }
  }

  warn(message: string, context?: Record<string, unknown>): void {
    logWarn(`[WARN] ${message}`, context);
  }

  error(message: string, error?: Error | unknown, context?: Record<string, unknown>): void {
    logErrorToProduction(`[ERROR] ${message}`, error, context);
    
    // In production, also send to error monitoring service
    if (!this.isDevelopment && typeof window !== 'undefined') {
      try {
        // Integration with Sentry or other error monitoring
        const globalWindow = window as typeof window & { Sentry?: { captureException: (error: Error) => void } };
        if (globalWindow.Sentry) {
          globalWindow.Sentry.captureException(error instanceof Error ? error : new Error(message));
        }
      } catch (sentryError) {
        // Fallback if Sentry fails
        logErrorToProduction('Failed to report error to monitoring service:', sentryError);
      }
    }
  }

  // Conditional development logging
  devLog(message: string, context?: Record<string, unknown>): void {
    if (this.isDevelopment) {
      logInfo(`[DEV] ${message}`, context);
    }
  }

  // Performance timing
  time(label: string): void {
    if (this.isDevelopment && typeof console !== 'undefined') {
      console.time(label);
    }
  }

  timeEnd(label: string): void {
    if (this.isDevelopment && typeof console !== 'undefined') {
      console.timeEnd(label);
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export for legacy compatibility
export default logger; 