import ErrorBoundary from '../components/ErrorBoundary';
import React, { ReactNode } from 'react';

interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundarywrapper-component ${className}`}>
      {children}
    </div>
  );
};

ErrorBoundaryWrapper.displayName = 'ErrorBoundaryWrapper';

export default ErrorBoundaryWrapper;
