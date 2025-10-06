import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface OptimizedAppProps {
  children: React.ReactNode;
}

export const OptimizedApp: React.FC<OptimizedAppProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </ErrorBoundary>
  );
};

export default OptimizedApp;