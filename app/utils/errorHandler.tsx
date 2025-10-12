import React from 'react';

/**
 * Advanced Error Handler
 * Comprehensive error handling utilities for React applications
 */

export interface AppError {
  message: string;
  code?: string;
  stack?: string;
  timestamp: number;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: AppError | null;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<Record<string, never>>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<Record<string, never>>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: {
        message: error.message,
        code: error.name,
        stack: error.stack,
        timestamp: Date.now()
      }
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export const errorHandler = {
  logError: (error: Error, context?: string): void => {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  },
  
  createError: (message: string, code?: string): AppError => ({
    message,
    code,
    timestamp: Date.now()
  })
};