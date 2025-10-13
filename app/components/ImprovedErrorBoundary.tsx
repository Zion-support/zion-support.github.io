<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
import { Link } from 'react-router-dom';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Hand } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
  return (
    <div className={`improvederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

// Hook for functional components to handle errors
export const _useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by hook:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  };
};

