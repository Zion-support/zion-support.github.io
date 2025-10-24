import React from 'react';

interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundarywrapper ${className}`}>
      {children}
    </div>
  );
};

export default ErrorBoundaryWrapper;