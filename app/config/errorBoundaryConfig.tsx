import React from 'react';

interface ErrorBoundaryConfigProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundaryConfig: React.FC<ErrorBoundaryConfigProps> = ({ className = '', children }) => {
  return (
    <div className={`error-boundary-config ${className}`}>
      {children}
    </div>
  );
};

export default ErrorBoundaryConfig;
