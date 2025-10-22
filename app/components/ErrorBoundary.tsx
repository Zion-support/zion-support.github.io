import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>ErrorBoundary</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default ErrorBoundary;