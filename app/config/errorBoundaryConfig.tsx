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
  logErrors: boolean;
  
  /**
   * Whether to show error UI in development
   */
  showErrorUI: boolean;
  
  /**
   * Custom error message
   */
  errorMessage?: string;
  
  /**
   * Fallback component
   */
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  logErrors: process.env.NODE_ENV === 'development',
  showErrorUI: process.env.NODE_ENV === 'development',
  errorMessage: 'Something went wrong. Please try again.',
};

export default defaultErrorBoundaryConfig;