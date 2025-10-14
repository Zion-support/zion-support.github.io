'use client';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
}

export const errorHandler = {
  // Log error to console and external service
  logError: (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error:', error);
    if (errorInfo) {
      console.error('Error Info:', errorInfo);
    }
    
    // In production, send to error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: send to Sentry, LogRocket, etc.
      console.log('Sending error to monitoring service...');
    }
  },

  // Handle API errors
  handleApiError: (error: any) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
  },

  // Create user-friendly error messages
  getUserFriendlyMessage: (error: Error): string => {
    if (error.message.includes('Network Error')) {
      return 'Please check your internet connection and try again.';
    }
    if (error.message.includes('404')) {
      return 'The requested resource was not found.';
    }
    if (error.message.includes('500')) {
      return 'Something went wrong on our end. Please try again later.';
    }
    return 'An unexpected error occurred. Please try again.';
  }
};

export default errorHandler;