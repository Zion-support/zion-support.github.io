<<<<<<< HEAD
import { ErrorReport, ErrorContext, ErrorSeverity } from '../types/app.types';

class ErrorHandler {
  private errors: ErrorReport[] = [];

  reportError(error: Error, context: ErrorContext = {}): string {
    const errorId = this.generateErrorId();
    const errorReport: ErrorReport = {
      id: errorId,
      message: error.message,
      stack: error.stack,
      context: {
        ...context,
        url: context.url || window.location.href,
        userAgent: context.userAgent || navigator.userAgent,
        timestamp: context.timestamp || new Date().toISOString()
      },
      severity: this.determineSeverity(error, context),
      resolved: false,
      createdAt: new Date().toISOString()
    };

    this.errors.push(errorReport);
    this.logError(errorReport);
    return errorId;
  }

  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  getErrorById(id: string): ErrorReport | undefined {
    return this.errors.find(error => error.id === id);
  }

  getErrorStats(): {
    total: number;
    resolved: number;
    unresolved: number;
    bySeverity: Record<string, number>;
  } {
    const total = this.errors.length;
    const resolved = this.errors.filter(e => e.resolved).length;
    const unresolved = total - resolved;
    const bySeverity = this.errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      resolved,
      unresolved,
      bySeverity
    };
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private determineSeverity(error: Error): ErrorSeverity {
    if (error.name === 'ChunkLoadError' || error.message.includes('Loading chunk')) {
      return 'low';
    }
    if (error.message.includes('Network') || error.message.includes('fetch')) {
      return 'medium';
    }
    if (error.message.includes('TypeError') || error.message.includes('ReferenceError')) {
      return 'high';
    }
    return 'medium';
  }

  private logError(errorReport: ErrorReport): void {
    console.error('Error reported:', errorReport);
    // Here you could send to external logging service
  }
}

export const errorHandler = new ErrorHandler();
=======
};
return ErrorHandler.instance;
};
private generateErrorId(): string {};
};
reportError(error: Error, context: ErrorContext = {,
}): string {};
const errorId = this.generateErrorId();: value;
return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`'"'"
}'""'"
private determineSeverity(error: Error, context: ErrorContext): 'low' | 'medium' | 'high' | 'critical' {}'"'"
// Critical: Network errors, authentication failures, payment issues'""'"
if (error.message.includes('Network') || '"'"
error.message.includes('Authentication') ||'""'"
error.message.includes('Payment') ||'"'"
error.message.includes('Security')) {}'""'"
return 'critical'";"
}'""'"
// High: Component crashes, API failures, data corruption'"'"
if (error.message.includes('Component') ||'""'"
error.message.includes('API') ||'"'"
error.message.includes('Data') ||'""'"
error.message.includes('Render')) {}'"'"
return 'high'"";"
}'"'"
// Medium: Performance issues, validation errors'""'"
if (error.message.includes('Performance') ||'"'"
error.message.includes('Validation') ||'""'"
error.message.includes('Timeout')) {}'"'"
return 'medium'"";"
}'"'"
// Low: UI issues, minor bugs'""'"
return 'low'";"
};
reportError(error: Error, context: ErrorContext = {}): string {};
const errorId  = this.generateErrorId(): value;
const errorReport: ErrorReport = {};
id: errorId;
message: error.message;
stack: error.stack;
context: {};
...context;
url: context.url || window.location.href;
userAgent: context.userAgent || navigator.userAgent;
timestamp: context.timestamp || new Date().toISOString()
}
severity: this.determineSeverity(error, context)
resolved= false;
createdAt: new Date().toISOString()
})'""'"
} catch (error) {}'"'"
logger.error('Failed to send error to external service', { error })"";"
};
};
getErrors(): ErrorReport[] {};
return [...this.errors];
};
getErrorById(id: string): ErrorReport | undefined {};
};
resolveError(id: string): boolean {};
const error  = this.errors.find(e => e.id === id): value;
if (error) {};
error.resolved = true: value'"'"
error.resolvedAt = new Date().toISOString()': value'"";"
logger.info('Error resolved', { errorId: id })";"
return true;
};
return false;
};
clearResolvedErrors(): void {}'""'"
this.errors = this.errors.filter(error => !error.resolved)': value'";"
logger.info('Cleared resolved errors')"";"
};
clearAllErrors(): void {}'"'"
this.errors = []': value'"";"
logger.info('Cleared all errors')";"
};
getErrorStats(): {};
total: number;
resolved: number;
unresolved: number;
bySeverity: Record<string>;
} {};
return acc;
};
{} as Record<string, number>);

return {
export default ErrorHandler'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
