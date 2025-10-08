/**
 * Enhanced Logger Utility
 * Production-ready logging with multiple levels and formatting
 */

// Helper to safely check if we're in production
function isProduction(): boolean {
  try {
    return typeof window !== 'undefined' 
      ? false // Client-side defaults to dev mode
      : false; // Server-side defaults to dev mode for safety
  } catch {
    return false
  }
}

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: string;
  metadata?: Record<string, unknown>;
  stack?: string;
}

export interface LoggerConfig {
  minLevel: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  maxBufferSize: number;
  batchSize: number;
  flushInterval: number;
}

class Logger {
  private config: LoggerConfig = {
    minLevel: isProduction() ? LogLevel.WARN : LogLevel.DEBUG,
    enableConsole: true,
    enableRemote: isProduction(),
    maxBufferSize: 100,
    batchSize: 10,
    flushInterval: 30000 // 30 seconds
  }
  private buffer: LogEntry[] = []
  private flushTimer?: NodeJS.Timeout

  constructor(config?: Partial<LoggerConfig>) {
    if (config) {
      this.config = { ...this.config, ...config }
    }
    this.startFlushTimer()
  }

  private startFlushTimer(): void {
    if (this.config.enableRemote && this.config.flushInterval > 0) {
      this.flushTimer = setInterval(() => {
        this.flush()
      }, this.config.flushInterval)
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.minLevel
  }

  private formatMessage(entry: LogEntry): string {
    const timestamp = entry.timestamp.toISOString()
    const level = this.getLevelString(entry.level)
    const context = entry.context ? `[${entry.context}]` : ''
    const metadata = entry.metadata ? ` ${JSON.stringify(entry.metadata)}` : ''
    return `${timestamp} ${level} ${context} ${entry.message}${metadata}`
  }

  private getLevelString(level: LogLevel): string {
    switch (level) {
      case LogLevel.DEBUG:
        return 'DEBUG'
      case LogLevel.INFO:
        return 'INFO'
      case LogLevel.WARN:
        return 'WARN'
      case LogLevel.ERROR:
        return 'ERROR'
      case LogLevel.FATAL:
        return 'FATAL'
      default:
        return 'UNKNOWN'
    }
  }

  private log(level: LogLevel, message: string, context?: string, metadata?: Record<string, unknown>, error?: Error): void {
    if (!this.shouldLog(level)) return

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context,
      metadata,
      stack: error?.stack
    }

    if (this.config.enableConsole) {
      const formattedMessage = this.formatMessage(entry)
      const consoleMethod = this.getConsoleMethod(level)
      consoleMethod(formattedMessage)
      if (error) {
        consoleMethod(error)
      }
    }

    if (this.config.enableRemote) {
      this.buffer.push(entry)
      if (this.buffer.length >= this.config.batchSize) {
        this.flush()
      }
    }
  }

  private getConsoleMethod(level: LogLevel): (...args: unknown[]) => void {
    switch (level) {
      case LogLevel.DEBUG:
        return console.debug
      case LogLevel.INFO:
        return console.info
      case LogLevel.WARN:
        return console.warn
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        return console.error
      default:
        return console.log
    }
  }

  private async flush(): Promise<void> {
    if (this.buffer.length === 0 || !this.config.remoteEndpoint) return

    const logsToSend = [...this.buffer]
    this.buffer = []

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logsToSend),
      })
    } catch (error) {
      console.error('Failed to send logs to remote endpoint:', error)
      // Re-add logs to buffer for retry
      this.buffer.unshift(...logsToSend)
    }
  }

  debug(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context, metadata)
  }

  info(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context, metadata)
  }

  warn(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context, metadata)
  }

  error(message: string, error?: Error, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.ERROR, message, context, metadata, error)
  }

  fatal(message: string, error?: Error, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.FATAL, message, context, metadata, error)
  }

  perf(metric: string, value: number, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, `PERF: ${metric} = ${value}ms`, 'performance', metadata)
  }

  lifecycle(message: string, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, `LIFECYCLE: ${message}`, context, metadata)
  }

  performance(message: string, data: unknown, context?: string, metadata?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, `PERFORMANCE: ${message}`, context, { ...metadata, data })
  }

  group(label: string, fn: () => void): void {
    if (this.config.enableConsole) {
      console.group(label)
    }
    try {
      fn()
    } finally {
      if (this.config.enableConsole) {
        console.groupEnd()
      }
    }
  }

  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
    }
    this.flush()
  }
}

/**
 * Context Logger - provides logging with a fixed context
 */
class ContextLogger {
  constructor(private logger: Logger, private context: string) {}
  
  debug(message: string, metadata?: Record<string, unknown>): void {
    this.logger.debug(message, this.context, metadata)
  }
  
  info(message: string, metadata?: Record<string, unknown>): void {
    this.logger.info(message, this.context, metadata)
  }
  
  warn(message: string, metadata?: Record<string, unknown>): void {
    this.logger.warn(message, this.context, metadata)
  }
  
  error(message: string, error?: Error, metadata?: Record<string, unknown>): void {
    this.logger.error(message, error, this.context, metadata)
  }
  
  fatal(message: string, error?: Error, metadata?: Record<string, unknown>): void {
    this.logger.fatal(message, error, this.context, metadata)
  }
  
  perf(metric: string, value: number, metadata?: Record<string, unknown>): void {
    this.logger.perf(metric, value, { ...metadata, context: this.context })
  }
  
  lifecycle(message: string, metadata?: Record<string, unknown>): void {
    this.logger.lifecycle(message, this.context, metadata)
  }
  
  performance(message: string, data: unknown, metadata?: Record<string, unknown>): void {
    this.logger.performance(message, data, this.context, metadata)
  }
  
  group(label: string, fn: () => void): void {
    this.logger.group(`${this.context}: ${label}`, fn)
  }
  
  child(subContext: string): ContextLogger {
    return new ContextLogger(this.logger, `${this.context}:${subContext}`)
  }
}

// Export singleton instance
export const logger = new Logger()

// Export convenience functions
export const debug = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.debug(message, context, metadata)

export const info = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.info(message, context, metadata)

export const warn = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.warn(message, context, metadata)

export const error = (
  message: string,
  err?: Error,
  context?: string,
  metadata?: Record<string, unknown>
) => logger.error(message, err, context, metadata)

export const fatal = (
  message: string,
  err?: Error,
  context?: string,
  metadata?: Record<string, unknown>
) => logger.fatal(message, err, context, metadata)

export const perf = (metric: string, value: number, metadata?: Record<string, unknown>) =>
  logger.perf(metric, value, metadata)

export const lifecycle = (message: string, context?: string, metadata?: Record<string, unknown>) =>
  logger.lifecycle(message, context, metadata)

export const performance = (
  message: string,
  data: unknown,
  context?: string,
  metadata?: Record<string, unknown>
) => logger.performance(message, data, context, metadata)

export const group = (label: string, fn: () => void) => logger.group(label, fn)

// Export types and classes
export { Logger, ContextLogger }