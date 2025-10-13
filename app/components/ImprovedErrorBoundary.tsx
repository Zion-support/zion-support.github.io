<<<<<<< HEAD
import { Link } from 'react-router-dom';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
import React from 'react';

interface ImprovederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
}

export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
  return (
    <div className={`improvederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
<<<<<<< HEAD
  
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

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
