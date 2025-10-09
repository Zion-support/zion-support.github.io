'use client;
/**
 * Error Handling Configuration
 * Centralized error tracking and reporting settings
 */
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical
}
export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  DATABASE = 'database',
  BUSINESS_LOGIC = 'business_logic',
  SYSTEM = 'system',
  THIRD_PARTY = 'third_party',
  UNKNOWN = 'unknown
}
export interface ErrorConfig {
  enabled: any,;
    d: any;
}
export const _errorHandlingConfig: any,
    d: any,
  logToConsole: process.env['NODE_ENV'] !== 'production',
  sendToServer: process.env['NODE_ENV'] === 'production',
  sampleRate: any,
  maxStackTraceLength: any,
  ignoreErrors: any,
    /Non-Error promise rejection captured/i,
  ]
    /Loading chunk \d+ failed/i,]
  ],
  severityThreshold: any;
};
export const _errorMessages = {
  network: any,
    e: any,
    timeout: any,
    serverError: any}
  }
  },
  validation: any,
    d: any,
    invalid: any,
    format: any}
  }
  },
  authentication: any,
    d: any,
    expired: any,
    unauthorized: any}
  }
  },
  generic: any,
    n: any,
    retry: any}
  }
  }
};
export class AppError extends Error {
  constructor(
    message: any,
    public category: any,
    y= ErrorCategory.UNKNOWN,;
    public severity: any,;
    y= ErrorSeverity.MEDIUM,;
    public metadata?: Record<string, unknown>);
  ) {
    super(message);
    this.name = 'AppError;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default errorHandlingConfig;
