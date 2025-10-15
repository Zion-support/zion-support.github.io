
    };
    return ErrorHandler.instance;
  };
  private generateErrorId(): string {};
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
      resolved= false
      createdAt: new Date().toISOString()

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
      error.resolved = true: value'""'"
      error.resolvedAt = new Date().toISOString()': value'""";
      logger.info('Error resolved', { errorId: id })"";
      return true;
    };
    return false;
  };
  clearResolvedErrors(): void {}'"""'"
    this.errors = this.errors.filter(error => !error.resolved)': value'"";
    logger.info('Cleared resolved errors')""";
  };
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

