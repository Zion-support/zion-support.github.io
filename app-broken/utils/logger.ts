
  userId?: string;
  sessionId?: string;
  [key: string]: unknown;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';



  private sendToLoggingService(level: string, message: string, context?: LogContext): void {
    // Implement your logging service integration here
    // Examples: Sentry, LogRocket, DataDog, etc.
    if (typeof window !== 'undefined' && (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', 'log', {
        event_category: 'logging',
        event_label: level,
        value: 1,
        custom_parameters: {
          message,
          context: JSON.stringify(context)
      });


