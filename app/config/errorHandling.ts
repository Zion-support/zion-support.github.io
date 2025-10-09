'use client';

/**
 * Error Handling Configuration
 * Centralized error tracking and reporting settings
 */

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  DATABASE = 'database',
  BUSINESS_LOGIC = 'business_logic',
  SYSTEM = 'system',
  THIRD_PARTY = 'third_party',
  UNKNOWN = 'unknown',
}

export interface ErrorConfig {
  enabled: boolean;
  logToConsole: boolean;
  sendToServer: boolean;
  sampleRate: number;
  maxStackTraceLength: number;
  ignoreErrors: RegExp[];
  severityThreshold: ErrorSeverity;
}

export const errorHandlingConfig: ErrorConfig = {
  enabled: true,
  logToConsole: process.env['NODE_ENV'] !== 'production',
  sendToServer: process.env['NODE_ENV'] === 'production',
  sampleRate: 1.0,
  maxStackTraceLength: 1000,
  ignoreErrors: [
    /ResizeObserver loop/i,
    /Non-Error promise rejection captured/i,
    /Loading chunk \d+ failed/i,
  ],
  severityThreshold: ErrorSeverity.LOW,
};

export const errorMessages = {
  network: {
    offline: 'You are currently offline. Please check your internet connection.',
    timeout: 'Request timed out. Please try again.',
    serverError: 'Server error occurred. Our team has been notified.',
  },
  validation: {
    required: 'This field is required.',
    invalid: 'Please enter a valid value.',
    format: 'Invalid format. Please check your input.',
  },
  authentication: {
    failed: 'Authentication failed. Please try logging in again.',
    expired: 'Your session has expired. Please log in again.',
    unauthorized: 'You are not authorized to access this resource.',
  },
  generic: {
    unknown: 'An unexpected error occurred. Please try again.',
    retry: 'Please try again in a few moments.',
  },
};

export class AppError extends Error {
  constructor(
    message: string,
    public category: ErrorCategory = ErrorCategory.UNKNOWN,
    public severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    public metadata?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export default errorHandlingConfig;
