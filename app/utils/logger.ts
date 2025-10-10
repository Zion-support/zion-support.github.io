'use client'
/**
 * Advanced Logging System
 * Provides structured logging with multiple levels and context
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}

export interface LogContext {
  userId?: string
  sessionId?: string
  component?: string
  action?: string
  [key: string]: unknown
}

class Logger {
  private logLevel: LogLevel = LogLevel.INFO
  private logs: Array<{
    level: LogLevel
    message: string
    context?: LogContext
    metadata?: Record<string, unknown>
    timestamp: number
  }> = []

  setLogLevel(level: LogLevel): void {
    this.logLevel = level
  }

  getLogLevel(): LogLevel {
    return this.logLevel
  }

  debug(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, metadata)
  }

  info(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, metadata)
  }

  warn(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, metadata)
  }

  error(
    message: string,
    errorOrContextOrMetadata?: Error | string | Record<string, unknown>,
    contextOrMetadata?: string | Record<string, unknown>,
    metadata?: Record<string, unknown>
  ): void {
    let error: Error | undefined
    let context: LogContext | undefined
    let meta: Record<string, unknown> | undefined

    // Handle different parameter combinations
    if (errorOrContextOrMetadata instanceof Error) {
      error = errorOrContextOrMetadata
      context = typeof contextOrMetadata === 'string' ? { action: contextOrMetadata } : contextOrMetadata
      meta = metadata
    } else if (typeof errorOrContextOrMetadata === 'string') {
      context = { action: errorOrContextOrMetadata }
      meta = typeof contextOrMetadata === 'object' ? contextOrMetadata : undefined
    } else if (typeof errorOrContextOrMetadata === 'object') {
      context = errorOrContextOrMetadata
      meta = contextOrMetadata as Record<string, unknown>
    }

    this.log(LogLevel.ERROR, message, context, { ...meta, error: error?.stack })
  }

  fatal(message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.FATAL, message, context, metadata)
  }

  private log(
    level: LogLevel,
    message: string,
    context?: LogContext,
    metadata?: Record<string, unknown>
  ): void {
    if (level < this.logLevel) return

    const logEntry = {
      level,
      message,
      context,
      metadata,
      timestamp: Date.now()
    }

    this.logs.push(logEntry)

    // Keep only last 1000 logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000)
    }

    // Console output
    const levelName = LogLevel[level]
    const timestamp = new Date().toISOString()
    const contextStr = context ? ` [${JSON.stringify(context)}]` : ''
    const metaStr = metadata ? ` ${JSON.stringify(metadata)}` : ''

    const logMessage = `[${timestamp}] ${levelName}: ${message}${contextStr}${metaStr}`

    switch (level) {
      case LogLevel.DEBUG:
        break
      case LogLevel.INFO:
        break
      case LogLevel.WARN:
        break
      case LogLevel.ERROR:
        break
      case LogLevel.FATAL:
        break
    }
  }

  getLogs(level?: LogLevel): Array<{
    level: LogLevel
    message: string
    context?: LogContext
    metadata?: Record<string, unknown>
    timestamp: number
  }> {
    if (level !== undefined) {
      return this.logs.filter(log => log.level === level)
    }
    return [...this.logs]
  }
  /**
   * Send log entry to external logging service
   */
  private sendToLoggingService(entry: LogMetadata): void {
    // In a real application, you would send this to your logging service
    // For example: Sentry, LogRocket, DataDog, etc.
    // Example implementation:
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: {// 'Content-Type': 'application/json'},
    //   body: JSON.stringify(entry)
    // }).catch(err => {
    //   // });
  }

  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }
}

// Export singleton instance
export const logger = new Logger()