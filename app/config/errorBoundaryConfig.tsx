'use client';
import React from 'react';

/**
 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
 */

export interface ErrorBoundaryConfig {
  /**
   * Whether to log errors to console
   */
  enableConsoleLogging: boolean;
  
  /**
   * Whether to send errors to external service
   */
  enableErrorReporting: boolean;
  
  /**
   * Custom error reporting function
   */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  
  /**
   * Fallback UI component
   */
  fallbackUI?: React.ComponentType<{ error: Error; resetError: () => void }>;
  
  /**
   * Whether to show error details in development
   */
  showErrorDetails: boolean;
  
  /**
   * Error boundary key for resetting
   */
  resetKey?: string;
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  enableConsoleLogging: true,
  enableErrorReporting: process.env.NODE_ENV === 'production',
  showErrorDetails: process.env.NODE_ENV === 'development',
  onError: (error, errorInfo) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }
  }
};

export const createErrorBoundaryConfig = (overrides: Partial<ErrorBoundaryConfig> = {}): ErrorBoundaryConfig => {
  return {
    ...defaultErrorBoundaryConfig,
    ...overrides
  };
};