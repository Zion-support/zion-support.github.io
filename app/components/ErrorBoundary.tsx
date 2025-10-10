import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <div className="error-boundary">
      {children}
    </div>
  );
};

export default ErrorBoundary;
