import React from 'react';
import { Button } from './ui/Button';
import { Alert, AlertDescription, AlertTitle } from './ui/Alert';
import { cn } from '../lib/utils';

// Error boundary component
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Error fallback component
export function ErrorFallback({ error, resetError }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <Alert variant="destructive">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            We're sorry, but something unexpected happened. Please try again.
          </AlertDescription>
        </Alert>
        
        <div className="mt-6 space-y-4">
          <Button 
            onClick={() => window.location.reload()}
            className="w-full"
          >
            Reload Page
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            Go Back
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-4 p-4 bg-gray-100 rounded-md">
            <summary className="font-medium cursor-pointer">Error Details</summary>
            <pre className="mt-2 text-sm text-gray-600 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

// Error page component
export function ErrorPage({ 
  statusCode = 500, 
  title = 'An error occurred',
  message = 'Something went wrong. Please try again later.',
  className 
}) {
  const errorMessages = {
    404: {
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist.',
      icon: '🔍'
    },
    500: {
      title: 'Server Error',
      message: 'Something went wrong on our end. Please try again later.',
      icon: '⚠️'
    },
    503: {
      title: 'Service Unavailable',
      message: 'We are temporarily down for maintenance. Please check back soon.',
      icon: '🔧'
    }
  };

  const errorInfo = errorMessages[statusCode] || { title, message, icon: '❌' };

  return (
    <div className={cn('min-h-screen flex items-center justify-center bg-gray-50 px-4', className)}>
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-4">{errorInfo.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {errorInfo.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {errorInfo.message}
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full"
          >
            Go Home
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

// Toast notifications
export function Toast({ message, type = 'info', onClose }) {
  const types = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  return (
    <div className={cn(
      'fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm',
      types[type]
    )}>
      <div className="flex items-center justify-between">
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
}