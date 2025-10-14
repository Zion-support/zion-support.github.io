import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`globalerrorboundary-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">GlobalErrorBoundary</h3>
          <p className="text-gray-600">This is the GlobalErrorBoundary component.</p>
        </div>
      )}
    </div>
  );
};

export default GlobalErrorBoundary;