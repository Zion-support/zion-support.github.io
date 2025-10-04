import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`errorboundary-component ${className}`}>
      {children || (
        <div className="p-4 text-center text-gray-600">
          <h3 className="text-lg font-semibold mb-2">ErrorBoundary</h3>
          <p>Component placeholder - implementation needed</p>
        </div>
      )}
    </div>
  );
};

export default ErrorBoundary;
