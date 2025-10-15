interface LoggerOptions {
<<<<<<< HEAD
  level: 'debug' | 'info' | 'warn' | 'error';
  context?: string;
  timestamp?: boolean;
}

interface LogEntry {
  level: string;
  message: string;
  context?: string;
  timestamp: string;
  data?: any;
}

class Logger {
  private options: LoggerOptions;

  constructor(options: LoggerOptions = { level: 'info' }) {
    this.options = {
      timestamp: true,
      ...options
    };
  }

  private formatMessage(level: string, message: string, data?: any): LogEntry {
    return {
      level,
      message,
      context: this.options.context,
      timestamp: this.options.timestamp ? new Date().toISOString() : '',
      data
    };
  }

  debug(message: string, data?: any): void {
    if (this.options.level === 'debug') {
      const entry = this.formatMessage('debug', message, data);
      console.debug(entry);
    }
  }

  info(message: string, data?: any): void {
    if (['debug', 'info'].includes(this.options.level)) {
      const entry = this.formatMessage('info', message, data);
      console.info(entry);
    }
  }

  warn(message: string, data?: any): void {
    if (['debug', 'info', 'warn'].includes(this.options.level)) {
      const entry = this.formatMessage('warn', message, data);
      console.warn(entry);
    }
  }

  error(message: string, data?: any): void {
    const entry = this.formatMessage('error', message, data);
    console.error(entry);
  }

  setLevel(level: LoggerOptions['level']): void {
    this.options.level = level;
  }

  setContext(context: string): void {
    this.options.context = context;
  }
}

// Create default logger instances
export const logger = new Logger({ level: 'info' });
export const debugLogger = new Logger({ level: 'debug' });
export const errorLogger = new Logger({ level: 'error' });

export default Logger;
=======
});

// Add your hooks logic here;
useEffect(() => {
// Add your effect logic here;
}, [
]);

return {
// Return your hook values here;
};
};
export default Logger'";"
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
