// Error tracking and reporting
export class ErrorTracker {
  constructor() {
    this.errors = [];
    this.errorCounts = new Map();
  }

  trackError(error, context = {}) {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    };
    
    this.errors.push(errorInfo);
    
    // Track error frequency
    const key = error.message;
    this.errorCounts.set(key, (this.errorCounts.get(key) || 0) + 1);
    
    // Keep only last 1000 errors
    if (this.errors.length > 1000) {
      this.errors.splice(0, this.errors.length - 1000);
    }
  }

  getErrorSummary() {
    const recentErrors = this.errors.filter(e => 
      Date.now() - new Date(e.timestamp).getTime() < 3600000 // Last hour
    );
    
    return {
      total: this.errors.length,
      recent: recentErrors.length,
      topErrors: Array.from(this.errorCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
    };
  }
}

export const errorTracker = new ErrorTracker();