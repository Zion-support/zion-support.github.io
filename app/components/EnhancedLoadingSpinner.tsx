import React from 'react';

interface EnhancedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedloadingspinner-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">EnhancedLoadingSpinner</h3>
          <p className="text-gray-600">This is the EnhancedLoadingSpinner component.</p>
        </div>
      )}
    </div>
  );
};

export default EnhancedLoadingSpinner;