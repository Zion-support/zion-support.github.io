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

export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: Date
  context?: Record<string, any>
  error?: Error
  stack?: string
}

export interface LoggerConfig {
  level: LogLevel
  enableConsole: boolean
  enableStorage: boolean
  maxStorageEntries: number
  enableRemote: boolean
  remoteEndpoint?: string
}

export class Logger {
  private config: LoggerConfig
  private logs: LogEntry[] = []

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableStorage: false,
      maxStorageEntries: 1000,
      enableRemote: false,
      ...config
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level
  }

  private formatMessage(entry: LogEntry): string {
    const timestamp = entry.timestamp.toISOString()
    const levelName = LogLevel[entry.level]
    const context = entry.context ? ` ${JSON.stringify(entry.context)}` : ''
    const error = entry.error ? ` Error: ${entry.error.message}` : ''
    
    return `[${timestamp}] ${levelName}: ${entry.message}${context}${error}`
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>, error?: Error): void {
    if (!this.shouldLog(level)) return

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context,
      error,
      stack: error?.stack
    }

    // Add to memory logs
    this.logs.push(entry)
    if (this.logs.length > this.config.maxStorageEntries) {
      this.logs.shift()
    }

    // Console output
    if (this.config.enableConsole) {
      const formattedMessage = this.formatMessage(entry)
      
      switch (level) {
        case LogLevel.DEBUG:
          console.debug(formattedMessage)
          break
        case LogLevel.INFO:
          console.info(formattedMessage)
          break
        case LogLevel.WARN:
          console.warn(formattedMessage)
          break
        case LogLevel.ERROR:
        case LogLevel.FATAL:
          console.error(formattedMessage)
          break
      }
    }

    // Storage
    if (this.config.enableStorage && typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('logger_logs')
        const logs = stored ? JSON.parse(stored) : []
        logs.push(entry)
        
        // Keep only recent logs
        if (logs.length > this.config.maxStorageEntries) {
          logs.splice(0, logs.length - this.config.maxStorageEntries)
        }
        
        localStorage.setItem('logger_logs', JSON.stringify(logs))
      } catch (error) {
        console.warn('Failed to store log entry:', error)
      }
    }

    // Remote logging
    if (this.config.enableRemote && this.config.remoteEndpoint) {
      this.sendToRemote(entry)
    }
  }

  private async sendToRemote(entry: LogEntry): Promise<void> {
    try {
      await fetch(this.config.remoteEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
      })
    } catch (error) {
      console.warn('Failed to send log to remote:', error)
    }
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.DEBUG, message, context)
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.INFO, message, context)
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.WARN, message, context)
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    this.log(LogLevel.ERROR, message, context, error)
  }

  fatal(message: string, error?: Error, context?: Record<string, any>): void {
    this.log(LogLevel.FATAL, message, context, error)
  }

  getLogs(level?: LogLevel): LogEntry[] {
    if (level !== undefined) {
      return this.logs.filter(entry => entry.level === level)
    }
    return [...this.logs]
  }

  clearLogs(): void {
    this.logs = []
    
    if (this.config.enableStorage && typeof window !== 'undefined') {
      try {
        localStorage.removeItem('logger_logs')
      } catch (error) {
        console.warn('Failed to clear stored logs:', error)
      }
    }
  }

  setLevel(level: LogLevel): void {
    this.config.level = level
  }

  setConfig(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config }
  }

  getConfig(): LoggerConfig {
    return { ...this.config }
  }
}

// Default logger instance
export const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO,
  enableConsole: true,
  enableStorage: process.env.NODE_ENV === 'development',
  enableRemote: process.env.NODE_ENV === 'production'
})

// Utility functions
export const createLogger = (config: Partial<LoggerConfig> = {}): Logger => {
  return new Logger(config)
}

export const getStoredLogs = (): LogEntry[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem('logger_logs')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.warn('Failed to retrieve stored logs:', error)
    return []
  }
}