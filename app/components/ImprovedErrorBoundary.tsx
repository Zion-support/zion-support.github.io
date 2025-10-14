import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedErrorBoundary: React.FC<ImprovedErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`improvederrorboundary-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ImprovedErrorBoundary</h3>
          <p className="text-gray-600">This is the ImprovedErrorBoundary component.</p>
        </div>
      )}
    </div>
  );
};

export default ImprovedErrorBoundary;