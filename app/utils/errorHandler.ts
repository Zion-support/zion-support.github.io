interface ErrorHandlerOptions {
  enableLogging?: boolean;
  enableReporting?: boolean;
  enableRetry?: boolean;
  maxRetries?: number;
  retryDelay?: number;
}

interface ErrorHandlerState {
  error: Error | null;
  isRetrying: boolean;
  retryCount: number;
}

class ErrorHandler {
  private options: ErrorHandlerOptions;
  private state: ErrorHandlerState;

  constructor(options: ErrorHandlerOptions = {}) {
    this.options = {
      enableLogging: true,
      enableReporting: false,
      enableRetry: false,
      maxRetries: 3,
      retryDelay: 1000,
      ...options
    };
    
    this.state = {
      error: null,
      isRetrying: false,
      retryCount: 0
    };
  }

  handleError(error: Error, context?: string): void {
    this.state.error = error;
    
    if (this.options.enableLogging) {
      console.error(`Error${context ? ` in ${context}` : ''}:`, error);
    }
    
    if (this.options.enableReporting) {
      this.reportError(error, context);
    }
  }

  private reportError(error: Error, context?: string): void {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    console.log('Reporting error:', {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    });
  }

  async retry<T>(fn: () => Promise<T>): Promise<T> {
    if (!this.options.enableRetry) {
      throw this.state.error || new Error('No error to retry');
    }

    this.state.isRetrying = true;
    
    for (let i = 0; i < this.options.maxRetries!; i++) {
      try {
        this.state.retryCount = i + 1;
        const result = await fn();
        this.state.isRetrying = false;
        this.state.retryCount = 0;
        return result;
      } catch (error) {
        if (i === this.options.maxRetries! - 1) {
          this.state.isRetrying = false;
          throw error;
        }
        
        await new Promise(resolve => 
          setTimeout(resolve, this.options.retryDelay! * (i + 1))
        );
      }
    }
    
    throw new Error('Max retries exceeded');
  }

  getState(): ErrorHandlerState {
    return { ...this.state };
  }

  clearError(): void {
    this.state.error = null;
    this.state.isRetrying = false;
    this.state.retryCount = 0;
  }
}

export default ErrorHandler;