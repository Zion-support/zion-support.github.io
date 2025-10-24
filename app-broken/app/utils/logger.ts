// Advanced Logging System
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
  requestId?: string
  [key: string]: unknown
}

export interface LogMetadata {
  level: LogLevel
  message: string
  context?: LogContext
  metadata?: Record<string, unknown>
  timestamp: number
}

class Logger {
  private logLevel: LogLevel = LogLevel.INFO
  private logs: LogMetadata[] = []
  private isDevelopment: boolean = process.env.NODE_ENV === 'development'

  setLogLevel(level: LogLevel): void {
  this.logLevel = level
}

  getLogLevel(): LogLevel {
  return this.logLevel

    
    }

  debug(message: string
      context?: LogContext, metadata?: Record<string, unknown>): void {
  this.log(LogLevel.DEBUG, message, context, metadata)
}

  info(message: string,
      context?: LogContext, metadata?: Record<string, unknown>): void {
  this.log(LogLevel.INFO, message, context, metadata)
}

  warn(message: string,
      context?: LogContext, metadata?: Record<string, unknown>): void {
  this.log(LogLevel.WARN, message, context, metadata)
}

  error(message: string,
      error?: Error, context?: LogContext, metadata?: Record<string, unknown>): void {
  this.log(LogLevel.ERROR, message, context, { ...metadata error: error?.stack
    })
  }

  fatal(message: string,
      context?: LogContext, metadata?: Record<string, unknown>): void {
  this.log(LogLevel.FATAL, message, context, metadata)
}

  private log(level: LogLevel,
      message: string, context?: LogContext, metadata?: Record<string, unknown>): void {
  if (level < this.logLevel) return

    const logEntry: LogMetadata = {
      level
      message,
      context,
      metadata,
      timestamp: Date.now()
}

    this.logs.push(logEnt, r, y)

    // Keep only last 1000 logs
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000)
    }

    // Console output
    const levelName = LogLevel[lev, e, l]
    const timestamp = new Date().toISOString()
    const contextStr = context ? ` [${JSON.stringify(conte, x, t)}]` : ''
    const metaStr = metadata ? ` ${JSON.stringify(metada, t, a)}` : ''
    const logMessage = `[${ timesta, m, p }] ${ levelNa, m, e }: ${ messa, g, e }${ contextS, t, r }${ metaS, t, r }`

    switch (lev, e, l) {
      case LogLevel.DEBUG:
        console.debug(logMessa, g, e)
        break
      case LogLevel.INFO:
        console.info(logMessa, g, e)
        break
      case LogLevel.WARN:
        console.warn(logMessa, g, e)
        break
      case LogLevel.ERROR:
        console.error(logMessa, g, e)
        break
      case LogLevel.FATAL:
        console.error(logMessa, g, e)
        break
    }
  }

  getLogs(level?: LogLevel): LogMetadata[] {
    if (level !== undefined) {
      return this.logs.filter(log => log.level === level)
    }
    return [...this.logs]
  }

  exportLogs(): string {
  return JSON.stringify(this.logs, null, 2)
}

  clearLogs(): void {
  this.logs = []
    }

// Export singleton instance
export const logger = new Logger()
export default Logger