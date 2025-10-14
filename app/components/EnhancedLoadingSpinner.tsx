import React from 'react';

interface EnhancedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedloadingspinner ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedLoadingSpinner;