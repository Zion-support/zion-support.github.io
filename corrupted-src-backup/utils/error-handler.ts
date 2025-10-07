/**
 * Advanced Error Handling and Reporting System
 * Captures, categorizes, and reports errors with detailed context
 */

interface ErrorContext {
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId: string;
  stackTrace?: string;
  componentStack?: string;
  props?: any;
  state?: any;
}

interface ErrorReport {
  id: string;
  type: 'javascript' | 'network' | 'react' | 'promise' | 'resource';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  context: ErrorContext;
  frequency: number;
  firstOccurrence: string;
  lastOccurrence: string;
  resolved: boolean;
}

interface ErrorMetrics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  errorRate: number;
  averageResolutionTime: number;
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: Map<string, ErrorReport> = new Map();
  private isInitialized: boolean = false;
  private sessionId: string;
  private errorCount: number = 0;
  private maxErrors: number = 1000;

  private constructor() {
    this.sessionId = this.generateSessionId();
  }

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  init(): void {
    if (this.isInitialized) {
      return;
    }

    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupNetworkErrorHandler();
    this.setupReactErrorBoundary();

    this.isInitialized = true;
    console.log('Error handling system initialized');
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Global JavaScript error handler
    window.addEventListener('error', event => {
      this.handleError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', event => {
      this.handleError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled promise rejection',
        error: event.reason,
      });
    });
  }

  private setupUnhandledRejectionHandler(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('unhandledrejection', event => {
      this.handleError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled promise rejection',
        error: event.reason,
      });
    });
  }

  private setupNetworkErrorHandler(): void {
    if (typeof window === 'undefined') return;

    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.handleError({
            type: 'network',
            message: `HTTP ${response.status}: ${response.statusText}`,
            url: args[0] as string,
            status: response.status,
          });
        }
        return response;
      } catch (error) {
        this.handleError({
          type: 'network',
          message: error.message,
          url: args[0] as string,
          error,
        });
        throw error;
      }
    };
  }

  private setupReactErrorBoundary(): void {
    // This would integrate with React Error Boundary
    console.log('React Error Boundary setup complete');
  }

  handleError(errorData: {
    type: ErrorReport['type'];
    message: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    error?: Error;
    url?: string;
    status?: number;
    componentStack?: string;
    props?: any;
    state?: any;
  }): void {
    const errorId = this.generateErrorId(errorData);
    const now = new Date().toISOString();

    const context: ErrorContext = {
      timestamp: now,
      url: errorData.url || window.location.href,
      userAgent: navigator.userAgent,
      sessionId: this.sessionId,
      stackTrace: errorData.error?.stack,
      componentStack: errorData.componentStack,
      props: errorData.props,
      state: errorData.state,
    };

    const severity = this.determineSeverity(errorData);

    if (this.errors.has(errorId)) {
      // Update existing error
      const existingError = this.errors.get(errorId)!;
      existingError.frequency += 1;
      existingError.lastOccurrence = now;
      this.errors.set(errorId, existingError);
    } else {
      // Create new error report
      const errorReport: ErrorReport = {
        id: errorId,
        type: errorData.type,
        severity,
        message: errorData.message,
        context,
        frequency: 1,
        firstOccurrence: now,
        lastOccurrence: now,
        resolved: false,
      };

      this.errors.set(errorId, errorReport);
    }

    this.errorCount++;

    // Log error for development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error captured:', errorData);
    }

    // Send to error reporting service in production
    if (process.env['NODE_ENV'] === 'production') {
      this.sendErrorReport(this.errors.get(errorId)!);
    }

    // Cleanup old errors if we exceed the limit
    if (this.errors.size > this.maxErrors) {
      this.cleanupOldErrors();
    }
  }

  private generateErrorId(errorData: any): string {
    const key = `${errorData.type}_${errorData.message}_${errorData.filename || ''}_${errorData.lineno || ''}`;
    return btoa(key)
      .replace(/[^a-zA-Z0-9]/g, '')
      .substr(0, 16);
  }

  private determineSeverity(errorData: any): ErrorReport['severity'] {
    // Critical: Network errors, unhandled rejections
    if (errorData.type === 'network' || errorData.type === 'promise') {
      return 'critical';
    }

    // High: JavaScript errors in production
    if (
      errorData.type === 'javascript' &&
      process.env['NODE_ENV'] === 'production'
    ) {
      return 'high';
    }

    // Medium: React errors, resource loading errors
    if (errorData.type === 'react' || errorData.type === 'resource') {
      return 'medium';
    }

    // Low: Everything else
    return 'low';
  }

  private sendErrorReport(errorReport: ErrorReport): void {
    // In a real application, this would send to an error reporting service
    // like Sentry, LogRocket, or a custom API endpoint
    console.log('Sending error report:', errorReport.id);

    // Example: Send to external service
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorReport)
    // }).catch(err => console.error('Failed to send error report:', err));
  }

  private cleanupOldErrors(): void {
    const errorsArray = Array.from(this.errors.values());
    errorsArray.sort(
      (a, b) =>
        new Date(b.lastOccurrence).getTime() -
        new Date(a.lastOccurrence).getTime()
    );

    // Keep only the most recent 500 errors
    const errorsToKeep = errorsArray.slice(0, 500);
    this.errors.clear();

    errorsToKeep.forEach(error => {
      this.errors.set(error.id, error);
    });
  }

  getErrors(): ErrorReport[] {
    return Array.from(this.errors.values());
  }

  getErrorById(id: string): ErrorReport | undefined {
    return this.errors.get(id);
  }

  getErrorMetrics(): ErrorMetrics {
    const errors = this.getErrors();
    const totalErrors = errors.length;

    const errorsByType = errors.reduce(
      (acc, error) => {
        acc[error.type] = (acc[error.type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const errorsBySeverity = errors.reduce(
      (acc, error) => {
        acc[error.severity] = (acc[error.severity] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const errorRate =
      (this.errorCount / (Date.now() - new Date().getTime())) * 1000; // errors per second

    return {
      totalErrors,
      errorsByType,
      errorsBySeverity,
      errorRate,
      averageResolutionTime: 0, // This would be calculated based on resolution tracking
    };
  }

  markErrorResolved(errorId: string): void {
    const error = this.errors.get(errorId);
    if (error) {
      error.resolved = true;
      this.errors.set(errorId, error);
    }
  }

  generateErrorReport(): string {
    const metrics = this.getErrorMetrics();
    const errors = this.getErrors();
    const criticalErrors = errors.filter(e => e.severity === 'critical');
    const unresolvedErrors = errors.filter(e => !e.resolved);

    return `
Error Handling Report:
Total Errors: ${metrics.totalErrors}
Error Rate: ${metrics.errorRate.toFixed(4)} errors/second

Errors by Type:
${Object.entries(metrics.errorsByType)
  .map(([type, count]) => `- ${type}: ${count}`)
  .join('\n')}

Errors by Severity:
${Object.entries(metrics.errorsBySeverity)
  .map(([severity, count]) => `- ${severity}: ${count}`)
  .join('\n')}

Critical Errors: ${criticalErrors.length}
Unresolved Errors: ${unresolvedErrors.length}

Recent Errors:
${errors
  .slice(-5)
  .map(
    error =>
      `- [${error.severity.toUpperCase()}] ${error.type}: ${error.message} (${error.frequency}x)`
  )
  .join('\n')}

Session ID: ${this.sessionId}
Last Updated: ${new Date().toISOString()}
    `.trim();
  }

  cleanup(): void {
    this.errors.clear();
    this.isInitialized = false;
    this.errorCount = 0;
    console.log('Error handling system cleaned up');
  }
}

export default ErrorHandler;
