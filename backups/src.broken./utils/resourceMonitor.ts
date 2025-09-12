interface ResourceError {
  timestamp: number;
  type: string;
  message: string;
  url?: string;
  source?: string;
  line?: number;
  column?: number;
}

class ResourceMonitor {
  private errors: ResourceError[] = [];
  private isMonitoring = false;

  start() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    // // // console.log('🔍 Resource Monitor started');
    this.setupErrorListeners();
  }

  stop() {
    this.isMonitoring = false;
    // // // console.log('🔍 Resource Monitor stopped');
  }

  private setupErrorListeners() {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.recordError({
        timestamp: Date.now(),
        type: 'javascript',
        message: event.message,
        source: event.filename,
        line: event.lineno,
        column: event.colno,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.recordError({
        timestamp: Date.now(),
        type: 'promise',
        message: event.reason?.message || String(event.reason),
      });
    });

    // Resource loading error handler
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.recordError({
          timestamp: Date.now(),
          type: 'resource',
          message: `Failed to load resource: ${(event.target as any)?.src || (event.target as any)?.href}`,
          url: (event.target as any)?.src || (event.target as any)?.href,
        });
      }
    }, true);
  }

  private recordError(error: ResourceError) {
    this.errors.push(error);
    // // console.error('Resource Error:', error);
  }

  getErrors(): ResourceError[] {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
  }

  getErrorCount(): number {
    return this.errors.length;
  }

  getErrorsByType(type: string): ResourceError[] {
    return this.errors.filter(error => error.type === type);
  }
}

export default ResourceMonitor;