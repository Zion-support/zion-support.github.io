
class Logger {
  private logLevel: LogLevel = LogLevel.INFO;
  private logs: Array<{
    level: LogLevel,
    message: string,
    context?: LogContext;
    metadata?: Record<string, unknown>
    timestamp: number,
  }> = []
