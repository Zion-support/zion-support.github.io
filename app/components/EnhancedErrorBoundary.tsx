import React from 'react';

interface EnhancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedErrorBoundary;
