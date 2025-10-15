interface AppError {
  message: string;
  code?: string;
  stack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export class CustomError extends Error {
  public code: string;
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, code: string = 'UNKNOWN_ERROR', statusCode: number = 500) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (error: Error): AppError => {
  const appError: AppError = {
    message: error.message || 'An unknown error occurred',
    code: error instanceof CustomError ? error.code : 'UNKNOWN_ERROR',
    stack: error.stack,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    userId: getUserId(),
    sessionId: getSessionId(),
  };

  return appError;
};

export const logError = (error: AppError, context: string = 'Application') => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${context}] Error:`, error);
  }

  // Send to error tracking service in production
  if (process.env.NODE_ENV === 'production') {
    sendErrorToService(error, context);
  }
};

const sendErrorToService = async (error: AppError, context: string) => {
  try {
    // Replace with your error tracking service (e.g., Sentry, LogRocket, etc.)
    await fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...error,
        context,
        environment: process.env.NODE_ENV,
      }),
    });
  } catch (sendError) {
    console.error('Failed to send error to service:', sendError);
  }
};

const getUserId = (): string | undefined => {
  // Implement user ID retrieval logic
  return localStorage.getItem('userId') || undefined;
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

const generateSessionId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Error boundary helper - returns error info for React component
export const getErrorBoundaryFallback = (error: Error, resetError: () => void) => {
  return {
    error,
    resetError,
    message: error.message || 'An unexpected error occurred',
  };
};