import React from 'react';

interface EnhancedErrorBoundaryProps {
  className?: string;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>EnhancedErrorBoundary</h2>
      <p>This is a clean, functional component.
              </p>
            </div>
  );
};

export default EnhancedErrorBoundary;