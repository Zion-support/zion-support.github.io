<<<<<<< HEAD
// Error handling utilities
export interface AppError {
  message: string;
  code?: string | undefined;
  statusCode?: number | undefined;
  details?: Record<string, unknown> | undefined;
}

export class CustomError extends Error {
  public code?: string | undefined;
  public statusCode?: number | undefined;
  public details?: Record<string, unknown> | undefined;

  constructor(message: string, code: string = 'UNKNOWN_ERROR', statusCode: number = 500, details: Record<string, unknown> = {}) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof CustomError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      details: error.details,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR',
      statusCode: undefined,
      details: undefined
    };
  }

  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
    statusCode: undefined,
    details: undefined
  };
};

export const logError = (_error: AppError, _context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    // Error logging can be implemented here
    // console.log('Error:', error, 'Context:', context);
  }
  
  // In production, you would send this to your error monitoring service
  // Example: sendToErrorService(error, context);
};

export const createError = (message: string, code?: string, statusCode?: number, details?: Record<string, unknown>): CustomError => {
  return new CustomError(message, code, statusCode, details);
};
=======
import React from 'react';

interface errorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

const errorHandler: React.FC<errorHandlerProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`errorhandler-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">errorHandler</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default errorHandler;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
