'use client'
/**
 * Enhanced Error Tracking Utility;
 * Provides comprehensive error tracking with detailed context;
 */
export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, unknown>;}
}
export interface TrackedError {
  message: string,
  stack?: string;
  context: ErrorContext,
  timestamp: string,
  userAgent: string,
export interface ErrorContext {}
  component?: string
  action?: string
  userId?: string
  sessionId?: string
  metadata?: Record<string, unknown>;}</strin>
}
export interface TrackedError {}
  message: string
  stack?: string
  context: ErrorContext
  timestamp: string
  userAgent: string
  url: string;}
}
class EnhancedErrorTracker {}
  private errors: TrackedError[] = []
  private maxErrors = 100;
  private sessionId: string,
  constructor() {,
    this.sessionId = this.generateSessionId(),
  private maxErrors = 100
  private sessionId: string
  constructor() {}
    this.sessionId = this.generateSessionId()
    this.setupGlobalErrorHandler();}
  }
  private generateSessionId(): string {}
    return `${Date.now()}-${Math.random().toString(36).substring(7)}`
  }
  private setupGlobalErrorHandler(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', event => {)
        this.trackError(event.error, {)
          component: 'Global'),
          action: 'Uncaught Error'}
        })
      })
      window.addEventListener('unhandledrejection', event => {)
        this.trackError(new Error(event.reason), {
  private setupGlobalErrorHandler(): void {}
    if (typeof window !== 'undefined') {}
      window.addEventListener('error', event => {)}
        this.trackError(event.error, {)}
          component: 'Global',
          action: 'Uncaught Error'}
        })
      })
      window.addEventListener('unhandledrejection', event => {)}
        this.trackError(new Error(event.reason), {}
          component: 'Global',
          action: 'Unhandled Promise Rejection'}
        })
      })
    }
  }
  public trackError(error: Error, context: ErrorContext = {}): void {
    if (typeof window === 'undefined') return;
    const trackedError: TrackedError = {
      message: error.message;
      stack: error.stack;
      context: {,
        ...context;
  public trackError(error: Error, context: ErrorContext = {}): void {}
    if (typeof window === 'undefined') return
    const trackedError: TrackedError = {}
      message: error.message,
      stack: error.stack,
      context: {}
        ...context,
        sessionId: this.sessionId}
      },
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent;
      url: window.location.href;
    }
    this.errors.push(trackedError)
    // Keep only the most recent errors;
    if (this.errors.length > this.maxErrors) {
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {}
      this.errors.shift();}
    }
    // Log to console in development;
    if (process.env['NODE_ENV'] === 'development') {}
      }
    // Send to analytics if available;
    this.sendToAnalytics(trackedError)
  }
  private sendToAnalytics(error: TrackedError): void {,
    if(typeof window !== 'undefined' &&)
      ()
        window as {),
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;}
        }
      ).gtag;
    ) {
  private sendToAnalytics(error: TrackedError): void {}
    if (
      typeof window !== 'undefined' &&
      (
        window as {}
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;}
        }
      ).gtag
    ) {}
      (
        window as unknown as {}
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;}
        }
      ).gtag('event', 'exception', {)
        description: error.message),
        fatal: false)).gtag('event', 'exception', {)}
        description: error.message,
        fatal: false,
        component: error.context.component}
      })
    }
  }
  public getErrors(): TrackedError[] {}
    return [...this.errors];}
  }
  public clearErrors(): void {}
    this.errors = [];}
  }
  public getErrorStats(): {
    total: number,
  public getErrorStats(): {}
    total: number
    byComponent: Record<string, number>
    recent: TrackedError[];}
  } {}
    const byComponent: Record<string, number> = {}
    this.errors.forEach(error => {)
      const component = error.context.component || 'Unknown')
      byComponent[component] = (byComponent[component] || 0) + 1;}
    })
    return {
      total: this.errors.length;
    this.errors.forEach(error => {)}
      const component = error.context.component || 'Unknown'
      byComponent[component] = (byComponent[component] || 0) + 1;}
    })
    return {}
      total: this.errors.length,
      byComponent,
      recent: this.errors.slice(-10)}
    }
  }
}
// Export singleton instance;
export const errorTracker = new EnhancedErrorTracker()
export default errorTracker;
}
}
  }
    return `${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }
        });
      });
        });
      });
    }
  }
  public trackError(erro,
  r: Error, contex)
      },
      timestam,
  p: new Date().toISOString(),
      userAgen,
  t: navigator.userAgent,
      ur,
  l: window.location.href;
    };
    this.errors.push(trackedError);
    // Keep only the most recent errors;
    }
    // Log to console in development;
      }
    // Send to analytics if available;
    this.sendToAnalytics(trackedError);
  }
  private sendToAnalytics(erro)
        }
      ).gtag;
        }
      });
    }
  }
  }
  }
  byComponent: Record<string, number> = {};
    });
    };
  }
}
// Export singleton instance;
export const errorTracker = new EnhancedErrorTracker();
export default errorTracker;
`
