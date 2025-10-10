// Enhanced error handler utility

export interface ErrorHandlerConfig {
  enableLogging?: boolean;
  enableReporting?: boolean;
  enableRecovery?: boolean;
  maxRetries?: number;
  retryDelay?: number;
  logLevel?: 'error' | 'warn' | 'info' | 'debug';
}

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  timestamp?: number;
  [key: string]: any;
}

export interface ErrorReport {
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  id: string;
}

export class EnhancedErrorHandler {
  private config: Required<ErrorHandlerConfig>;
  private errorQueue: ErrorReport[] = [];
  private retryCount: Map<string, number> = new Map();
  private sessionId: string;

  constructor(config: ErrorHandlerConfig = {}) {
    this.config = {
      enableLogging: true,
      enableReporting: true,
      enableRecovery: true,
      maxRetries: 3,
      retryDelay: 1000,
      logLevel: 'error',
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.initializeGlobalHandlers();
  }

  /**
   * Handle an error
   */
  handleError(error: Error, context: ErrorContext = {}): void {
    const errorReport = this.createErrorReport(error, context);
    
    if (this.config.enableLogging) {
      this.logError(errorReport);
    }

    if (this.config.enableReporting) {
      this.reportError(errorReport);
    }

    if (this.config.enableRecovery) {
      this.attemptRecovery(error, context);
    }
  }

  /**
   * Handle async errors
   */
  handleAsyncError<T>(promise: Promise<T>, context: ErrorContext = {}): Promise<T> {
    return promise.catch(error => {
      this.handleError(error, context);
      throw error;
    });
  }

  /**
   * Wrap a function with error handling
   */
  wrapFunction<T extends (...args: any[]) => any>(
    fn: T,
    context: ErrorContext = {}
  ): T {
    return ((...args: any[]) => {
      try {
        const result = fn(...args);
        
        // Handle async functions
        if (result instanceof Promise) {
          return this.handleAsyncError(result, context);
        }
        
        return result;
      } catch (error) {
        this.handleError(error as Error, context);
        throw error;
      }
    }) as T;
  }

  /**
   * Create error boundary for React components
   */
  createErrorBoundary(componentName: string) {
    return class ErrorBoundary extends React.Component<
      { children: React.ReactNode },
      { hasError: boolean; error?: Error }
    > {
      constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
      }

      componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.handleError(error, {
          component: componentName,
          ...errorInfo
        });
      }

      render() {
        if (this.state.hasError) {
          return (
            <div className="error-boundary">
              <h2>Something went wrong in {componentName}</h2>
              <button onClick={() => this.setState({ hasError: false })}>
                Try again
              </button>
            </div>
          );
        }

        return this.props.children;
      }
    };
  }

  /**
   * Create error report
   */
  private createErrorReport(error: Error, context: ErrorContext): ErrorReport {
    return {
      message: error.message,
      stack: error.stack,
      context: {
        ...context,
        timestamp: Date.now(),
        sessionId: this.sessionId
      },
      severity: this.determineSeverity(error, context),
      timestamp: Date.now(),
      id: this.generateErrorId()
    };
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, context: ErrorContext): 'low' | 'medium' | 'high' | 'critical' {
    // Critical errors
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
      return 'critical';
    }

    // High severity errors
    if (error.name === 'TypeError' || error.name === 'ReferenceError') {
      return 'high';
    }

    // Medium severity errors
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      return 'medium';
    }

    // Low severity errors
    return 'low';
  }

  /**
   * Log error
   */
  private logError(errorReport: ErrorReport): void {
    const logMessage = `[${errorReport.severity.toUpperCase()}] ${errorReport.message}`;
    
    switch (this.config.logLevel) {
      case 'debug':
        console.debug(logMessage, errorReport);
        break;
      case 'info':
        console.info(logMessage, errorReport);
        break;
      case 'warn':
        console.warn(logMessage, errorReport);
        break;
      case 'error':
      default:
        console.error(logMessage, errorReport);
        break;
    }
  }

  /**
   * Report error to server
   */
  private reportError(errorReport: ErrorReport): void {
    this.errorQueue.push(errorReport);
    
    // Send immediately for critical errors
    if (errorReport.severity === 'critical') {
      this.flushErrorQueue();
    } else {
      // Batch send for other errors
      setTimeout(() => this.flushErrorQueue(), 5000);
    }
  }

  /**
   * Flush error queue
   */
  private flushErrorQueue(): void {
    if (this.errorQueue.length === 0) return;

    const errorsToSend = [...this.errorQueue];
    this.errorQueue = [];

    fetch('/api/errors/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ errors: errorsToSend })
    }).catch(error => {
      console.error('Failed to send error reports:', error);
      // Re-add errors to queue for retry
      this.errorQueue.unshift(...errorsToSend);
    });
  }

  /**
   * Attempt error recovery
   */
  private attemptRecovery(error: Error, context: ErrorContext): void {
    const errorId = this.generateErrorId();
    const retryCount = this.retryCount.get(errorId) || 0;

    if (retryCount >= this.config.maxRetries) {
      return;
    }

    this.retryCount.set(errorId, retryCount + 1);

    // Recovery strategies based on error type
    if (error.name === 'ChunkLoadError') {
      // Reload page for chunk load errors
      setTimeout(() => {
        window.location.reload();
      }, this.config.retryDelay * (retryCount + 1));
    } else if (error.message.includes('fetch')) {
      // Retry network requests
      setTimeout(() => {
        // Implement retry logic for network requests
        this.retryNetworkRequest(context);
      }, this.config.retryDelay * (retryCount + 1));
    }
  }

  /**
   * Retry network request
   */
  private retryNetworkRequest(context: ErrorContext): void {
    // Implement retry logic based on context
    if (context.action === 'fetch') {
      // Retry the fetch request
      console.log('Retrying network request...');
    }
  }

  /**
   * Initialize global error handlers
   */
  private initializeGlobalHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        type: 'unhandled_promise_rejection'
      });
    });
  }

  /**
   * Generate error ID
   */
  private generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get error statistics
   */
  getErrorStats(): { totalErrors: number; errorsBySeverity: Record<string, number> } {
    const errorsBySeverity: Record<string, number> = {};
    
    this.errorQueue.forEach(error => {
      errorsBySeverity[error.severity] = (errorsBySeverity[error.severity] || 0) + 1;
    });

    return {
      totalErrors: this.errorQueue.length,
      errorsBySeverity
    };
  }

  /**
   * Clear error queue
   */
  clearErrorQueue(): void {
    this.errorQueue = [];
    this.retryCount.clear();
  }
}

export default EnhancedErrorHandler;