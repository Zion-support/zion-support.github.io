import React, { useEffect } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

export class ErrorMonitor {
  private static instance: ErrorMonitor;
  private errors: ErrorInfo[] = [];
  private maxErrors = 100;

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor();
    }
    return ErrorMonitor.instance;
  }

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  private setupGlobalErrorHandlers() {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        componentStack: '',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        componentStack: '',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  captureError(errorInfo: ErrorInfo) {
    this.errors.push(errorInfo);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', errorInfo);
    }

    // In production, you would send this to your error monitoring service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorInfo);
    }
  }

  private async sendToErrorService(errorInfo: ErrorInfo) {
    try {
      // Replace with your actual error monitoring service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorInfo),
      });
    } catch (e) {
      console.error('Failed to send error to monitoring service:', e);
    }
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }
}

interface ErrorMonitorProps {
  children: React.ReactNode;
}

export const ErrorMonitorProvider: React.FC<ErrorMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Initialize error monitoring
    const errorMonitor = ErrorMonitor.getInstance();
    
    // Set up React error boundary integration
    const originalConsoleError = console.error;
    console.error = (...args) => {
      errorMonitor.captureError({
        message: args.join(' '),
        stack: new Error().stack,
        componentStack: '',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return <>{children}</>;
};

export default ErrorMonitor;