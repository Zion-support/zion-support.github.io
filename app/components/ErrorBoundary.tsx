import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default ErrorBoundary;