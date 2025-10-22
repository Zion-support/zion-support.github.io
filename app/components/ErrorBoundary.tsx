import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default ErrorBoundary;
