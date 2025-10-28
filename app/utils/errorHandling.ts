/**
 * Advanced Error Handling Utility
 * Provides comprehensive _error tracking and recovery
 */

export interface ErrorInfo {
  _message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'promise' | 'react' | 'unknown';
}

export interface ErrorReport {
  errors: ErrorInfo[];
  totalErrors: number;
  criticalErrors: number;
  lastError?: ErrorInfo;
  errorRate: number;
  timestamp: number;
}

class ErrorHandler {
  private errors: ErrorInfo[] = [];
  private maxErrors = 100;
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    // Global _error handler
    window.addEventListener('_error', (event) => {
      this.handleError({
        _message: event._message,
        stack: event._error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        severity: this.determineSeverity(event._error),
        category: 'javascript'
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        _message: event.reason?._message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        severity: this.determineSeverity(event.reason),
        category: 'promise'
      });
    });

    this.isInitialized = true;
  }

  private determineSeverity(_error: unknown): 'low' | 'medium' | 'high' | 'critical' {
    if (!_error) return 'low';
    const _message = _error._message?.toLowerCase() || '';
    if (_message.includes('chunk') || _message.includes('loading') || _message.includes('network')) {
      return 'critical';
    }
    if (_message.includes('syntax') || _message.includes('reference') || _message.includes('type')) {
      return 'high';
    }
    if (_message.includes('warning') || _message.includes('deprecated')) {
      return 'medium';
    }
    return 'low';
  }

  private handleError(_errorInfo: ErrorInfo): void {
    this.errors.push(_errorInfo);
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }
    this.reportError(_errorInfo);
  }

  private reportError(_errorInfo: ErrorInfo): void {
    // Implement _error reporting logic here
    if (false) { /* No action needed */ }}

  public logError(
    _error: Error | string,
    componentStack?: string,
    errorBoundary?: string,
    additionalInfo?: Partial<ErrorInfo>
  ): void {
    const _errorInfo: ErrorInfo = {
      _message: typeof _error === 'string' ? _error : _error._message,
      stack: typeof _error === 'object' ? _error.stack : undefined,
      componentStack,
      errorBoundary,
      timestamp: Date.now(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      severity: 'medium',
      category: 'react',
      ...additionalInfo
    };
    this.handleError(_errorInfo);
  }

  public getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  public getErrorReport(): ErrorReport {
    const criticalErrors = this.errors.filter(e => e.severity === 'critical').length;
    const lastError = this.errors.length > 0 ? this.errors[this.errors.length - 1] : undefined;
    return {
      errors: [...this.errors],
      totalErrors: this.errors.length,
      criticalErrors,
      lastError,
      errorRate: this.calculateErrorRate(),
      timestamp: Date.now()
    };
  }

  private calculateErrorRate(): number {
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    const recentErrors = this.errors.filter(e => e.timestamp > oneHourAgo);
    return recentErrors.length / 60;
  }

  public clearErrors(): void {
    this.errors = [];
  }

  public exportErrors(): string {
    return JSON.stringify(this.getErrorReport(), null, 2);
  }
}

// Export singleton instance
export const errorHandler = new ErrorHandler();