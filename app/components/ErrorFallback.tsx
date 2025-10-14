import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ className = '', children }) => {
  return (
    <div className={`errorfallback-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ErrorFallback</h3>
          <p className="text-gray-600">This is the ErrorFallback component.</p>
        </div>
      )}
    </div>
  );
};

export default ErrorFallback;