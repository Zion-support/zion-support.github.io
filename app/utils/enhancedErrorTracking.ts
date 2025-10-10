'use client'
/**
 * Enhanced Error Tracking Utility
 * Provides comprehensive error tracking with detailed context
 */export interface ErrorContext {
  component?: string
  action?: string
  userId?: string
  sessionId?: string}
  metadata?: Record<string, unknown>}
}
export interface TrackedError {
  message: string,
  stack?: string
  context: ErrorContext,
  timestamp: string,
  userAgent: string,}
export interface ErrorContext {}
  component?: string
  action?: string
  userId?: string
  sessionId?: string
  metadata?: Record<string, unknown>}</strin>
}
export interface TrackedError {}
  message: string
  stack?: string
  context: ErrorContext
  timestamp: string
  userAgent: string
  url: string}
}
class EnhancedErrorTracker {}
  private errors: TrackedError[] = []
  private maxErrors;

export default errorTracker
`