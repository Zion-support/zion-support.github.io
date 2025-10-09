'use client'
/**
 * Advanced Logging System
 * Provides structured logging with different levels and context
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}

export interface LogContext {
  component?: string
  action?: string
  userId?: string
  sessionId?: string
  requestId?: string
  [key: string]: unknown
}

export interface LogMetadata {
  level: LogLevel
  message: string
  timestamp: number
  context?: LogContext
  metadata?: Record<string, unknown>
  error?: Error
}

class Logger {
  private logLevel: LogLevel = LogLevel.INFO
  private logs: LogMetadata[] = []
  private maxLogs = 1000

  /**
   * Set the minimum log level
   */
  setLogLevel(level: LogLevel): void {
    this.logLevel = level
  }

  /**
   * Get the current log level
   */
  getLogLevel(): LogLevel {
    return this.logLevel
  }

  /**
   * Log debug message
   */
  debug(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, metadata)
  }

  /**
   * Log info message
   */
  info(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, metadata)
  }

  /**
   * Log warning message
   */
  warn(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, metadata)
  }

  /**
   * Log error message
   */
  error(
    message: string,
    errorOrContextOrMetadata?: Error | string | Record<string, unknown>,
    contextOrMetadata?: string | Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): void {
    let error: Error | undefined
    let context: LogContext | undefined
    let meta: Record<string, unknown> | undefined

    if (errorOrContextOrMetadata instanceof Error) {
      error = errorOrContextOrMetadata
      if (typeof contextOrMetadata === 'string') {
        context = { action: contextOrMetadata }
      } else if (typeof contextOrMetadata === 'object') {
        context = contextOrMetadata as LogContext
      }
      meta = metadata
    } else if (typeof errorOrContextOrMetadata === 'string') {
      context = { action: errorOrContextOrMetadata }
      meta = contextOrMetadata as Record<string, unknown>
    } else if (typeof errorOrContextOrMetadata === 'object') {
      context = errorOrContextOrMetadata as LogContext
      meta = contextOrMetadata as Record<string, unknown>
    }

    this.log(LogLevel.ERROR, message, context, meta, error)
  }

  /**
   * Log fatal message
   */
  fatal(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.FATAL, message, context, metadata)
  }

  /**
   * Internal log method
   */
  private log(
    level: LogLevel,
    message: string,
    context?: LogContext,
    metadata?: Record<string, unknown>,
    error?: Error
  ): void {
    if (level < this.logLevel) {
      return
    }

    const logEntry: LogMetadata = {
      level,
      message,
      timestamp: Date.now(),
      context,
      metadata,
      error
    }

    this.logs.push(logEntry)

    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }

    // Output to console
    const formattedMessage = this.formatLogEntry(logEntry)
    console.log(formattedMessage)
  }

  /**
   * Format log entry for console output
   */
  private formatLogEntry(entry: LogMetadata): string {
    const timestamp = new Date(entry.timestamp).toISOString()
    const level = LogLevel[entry.level]
    const context = entry.context ? this.formatContext(entry.context) : ''
    const metadata = entry.metadata ? JSON.stringify(entry.metadata) : ''
    const error = entry.error ? `\nError: ${entry.error.message}\nStack: ${entry.error.stack}` : ''

    return `[${timestamp}] ${level}: ${entry.message} ${context} ${metadata}${error}`
  }

  /**
   * Format context for display
   */
  private formatContext(context: LogContext): string {
    const parts: string[] = []
    if (context.component) parts.push(`component:${context.component}`)
    if (context.action) parts.push(`action:${context.action}`)
    if (context.userId) parts.push(`userId:${context.userId}`)
    if (context.sessionId) parts.push(`sessionId:${context.sessionId}`)
    if (context.requestId) parts.push(`requestId:${context.requestId}`)

    return parts.length > 0 ? `[${parts.join(', ')}]` : ''
  }

  /**
   * Get all logs
   */
  getLogs(): LogMetadata[] {
    return [...this.logs]
  }

  /**
   * Get logs by level
   */
  getLogsByLevel(level: LogLevel): LogMetadata[] {
    return this.logs.filter(log => log.level === level)
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = []
  }

  /**
   * Get log statistics
   */
  getLogStats(): {
    total: number
    byLevel: Record<string, number>
    recentLogs: number
  } {
    const now = Date.now()
    const oneHourAgo = now - (60 * 60 * 1000)

    const byLevel = this.logs.reduce((acc, log) => {
      const level = LogLevel[log.level]
      acc[level] = (acc[level] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const recentLogs = this.logs.filter(log => log.timestamp > oneHourAgo).length

    return {
      total: this.logs.length,
      byLevel,
      recentLogs
    }
  }
}

// Export singleton instance
export const logger = new Logger()

// Export convenience functions
export const debug = (message: string, context?: LogContext, metadata?: Record<string, unknown>) =>
  logger.debug(message, context, metadata)

export const info = (message: string, context?: LogContext, metadata?: Record<string, unknown>) =>
  logger.info(message, context, metadata)

export const warn = (message: string, context?: LogContext, metadata?: Record<string, unknown>) =>
  logger.warn(message, context, metadata)

export const error = (
  message: string,
  errorOrContextOrMetadata?: Error | string | Record<string, unknown>,
  contextOrMetadata?: string | Record<string, unknown>,
  metadata?: Record<string, unknown>
) => logger.error(message, errorOrContextOrMetadata, contextOrMetadata, metadata)

export const fatal = (message: string, context?: LogContext, metadata?: Record<string, unknown>) =>
  logger.fatal(message, context, metadata)

export const setLogLevel = (level: LogLevel) => logger.setLogLevel(level)

export const getLogs = () => logger.getLogs()

export const getLogStats = () => logger.getLogStats()

export const clearLogs = () => logger.clearLogs()

export default logger
