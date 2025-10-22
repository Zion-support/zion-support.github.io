'use client'

// Logger utility functions
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}

export interface LoggerConfig {
  level: LogLevel
  enableConsole: boolean
  enableStorage: boolean
  maxStorageEntries: number
}

class Logger {
  private config: LoggerConfig
  private logs: Array<{ level: LogLevel; message: string; timestamp: number; data?: any }> = []

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableStorage: false,
      maxStorageEntries: 1000,
      ...config
    }
  }

  debug(message: string, data?: any): void {
    this.log(LogLevel.DEBUG, message, data)
  }

  info(message: string, data?: any): void {
    this.log(LogLevel.INFO, message, data)
  }

  warn(message: string, data?: any): void {
    this.log(LogLevel.WARN, message, data)
  }

  error(message: string, data?: any): void {
    this.log(LogLevel.ERROR, message, data)
  }

  private log(level: LogLevel, message: string, data?: any): void {
    if (level < this.config.level) return

    const logEntry = {
      level,
      message,
      timestamp: Date.now(),
      data
    }

    this.logs.push(logEntry)

    // Enforce max storage entries
    if (this.logs.length > this.config.maxStorageEntries) {
      this.logs.shift()
    }

    // Console output
    if (this.config.enableConsole) {
      const levelName = LogLevel[level]
      const timestamp = new Date().toISOString()
      const prefix = `[${timestamp}] [${levelName}]`

      switch (level) {
        case LogLevel.DEBUG:
          console.debug(prefix, message, data)
          break
        case LogLevel.INFO:
          console.info(prefix, message, data)
          break
        case LogLevel.WARN:
          console.warn(prefix, message, data)
          break
        case LogLevel.ERROR:
          console.error(prefix, message, data)
          break
      }
    }

    // Storage output
    if (this.config.enableStorage && typeof window !== 'undefined') {
      try {
        localStorage.setItem('logger_logs', JSON.stringify(this.logs))
      } catch (error) {
        console.warn('Failed to store logs:', error)
      }
    }
  }

  getLogs(): Array<{ level: LogLevel; message: string; timestamp: number; data?: any }> {
    return [...this.logs]
  }

  clearLogs(): void {
    this.logs = []
    if (typeof window !== 'undefined') {
      localStorage.removeItem('logger_logs')
    }
  }

  setLevel(level: LogLevel): void {
    this.config.level = level
  }
}

// Create default instance
export const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO,
  enableConsole: true,
  enableStorage: process.env.NODE_ENV === 'development'
})

export default logger
