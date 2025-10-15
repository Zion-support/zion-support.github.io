// Enhanced error handling utilities
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  isOperational?: boolean;
  stack?: string;
  context?: Record<string, any>;
  timestamp: string;
  userId?: string;
  sessionId?: string;
  details?: any;
}

export class CustomError extends Error {
  public code?: string;
  public statusCode?: number;
  public isOperational: boolean;
  public context?: Record<string, any>;
  public details?: any;

  constructor(
    message: string,
    code?: string,
    statusCode: number = 500,
    isOperational: boolean = true,
    context?: Record<string, any>,
    details?: any
  ) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.context = context;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (error: unknown): AppError => {
  const timestamp = new Date().toISOString();
  
  if (error instanceof CustomError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      isOperational: error.isOperational,
      stack: error.stack,
      context: error.context,
      details: error.details,
      timestamp,
      userId: getUserId(),
      sessionId: getSessionId(),
    };
  }

  if (error instanceof Error) {
    // Handle different error types
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      return {
        message: 'Network connection error. Please check your internet connection.',
        code: 'NETWORK_ERROR',
        statusCode: 0,
        isOperational: true,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    if (error.name === 'TimeoutError' || error.message.includes('timeout')) {
      return {
        message: 'Request timeout. Please try again.',
        code: 'TIMEOUT_ERROR',
        statusCode: 408,
        isOperational: true,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    if (error.message.includes('auth') || error.message.includes('unauthorized')) {
      return {
        message: 'Authentication required. Please log in.',
        code: 'AUTH_ERROR',
        statusCode: 401,
        isOperational: true,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    if (error.message.includes('permission') || error.message.includes('forbidden')) {
      return {
        message: 'You do not have permission to perform this action.',
        code: 'PERMISSION_ERROR',
        statusCode: 403,
        isOperational: true,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    if (error.message.includes('not found') || error.message.includes('404')) {
      return {
        message: 'The requested resource was not found.',
        code: 'NOT_FOUND_ERROR',
        statusCode: 404,
        isOperational: true,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    if (error.message.includes('rate limit') || error.message.includes('too many requests')) {
      return {
        message: 'Too many requests. Please wait before trying again.',
        code: 'RATE_LIMIT_ERROR',
        statusCode: 429,
        isOperational: true,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    if (error.message.includes('500') || error.message.includes('server error')) {
      return {
        message: 'Server error. Please try again later.',
        code: 'SERVER_ERROR',
        statusCode: 500,
        isOperational: false,
        stack: error.stack,
        context: { originalError: error.message },
        timestamp,
        userId: getUserId(),
        sessionId: getSessionId(),
      };
    }

    return {
      message: error.message,
      code: 'UNKNOWN_ERROR',
      statusCode: 500,
      isOperational: false,
      stack: error.stack,
      context: { originalError: error.message },
      timestamp,
      userId: getUserId(),
      sessionId: getSessionId(),
    };
  }

  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    statusCode: 500,
    isOperational: false,
    timestamp,
    userId: getUserId(),
    sessionId: getSessionId(),
  };
};

export const logError = (error: AppError, context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context || 'App'}] Error:`, error);
  }
  
  // Send to logging service in production
  if (process.env.NODE_ENV === 'production') {
    sendToLoggingService(error, context || 'App');
  }
};

const sendToLoggingService = async (error: AppError, context: string): Promise<void> => {
  try {
    await fetch('/api/logs/error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...error,
        context,
        url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
      }),
    });
  } catch (e) {
    // Fallback to console if logging service fails
    console.error('Failed to send error to logging service:', e);
  }
};

const getUserId = (): string | undefined => {
  try {
    return typeof window !== 'undefined' ? localStorage.getItem('userId') || undefined : undefined;
  } catch {
    return undefined;
  }
};

const getSessionId = (): string | undefined => {
  try {
    if (typeof window === 'undefined') return undefined;
    
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  } catch {
    return undefined;
  }
};

export const createError = (
  message: string, 
  code?: string, 
  statusCode?: number, 
  isOperational?: boolean,
  context?: Record<string, any>,
  details?: any
): CustomError => {
  return new CustomError(message, code, statusCode, isOperational, context, details);
};

// Global error handler for unhandled promise rejections
export const setupGlobalErrorHandlers = (): void => {
  if (typeof window === 'undefined') return;

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = new Error(`Unhandled Promise Rejection: ${event.reason}`);
    const appError = handleError(error);
    logError(appError, 'UnhandledPromiseRejection');
    
    // Prevent the default behavior
    event.preventDefault();
  });

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    const error = new Error(`Uncaught Error: ${event.message}`);
    const appError = handleError(error);
    logError(appError, 'UncaughtError');
  });
};