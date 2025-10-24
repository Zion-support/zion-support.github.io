import React from 'react';

interface ErrorBoundaryConfigProps {
  className?: string;
  children?: React.ReactNode;
}

export const ErrorBoundaryConfig: React.FC<ErrorBoundaryConfigProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundaryconfig ${className}`}>
      {children}
    </div>
  );
};

export default ErrorBoundaryConfig;