import React from 'react';
interface EnhancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}
const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancederrorboundary-component ${className}`}>
      {children}
    </div>
  );
};
EnhancedErrorBoundary.displayName = 'EnhancedErrorBoundary';
export default EnhancedErrorBoundary;
