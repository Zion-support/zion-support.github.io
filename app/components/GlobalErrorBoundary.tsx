import React from 'react';

interface _GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}


const GlobalErrorBoundary: React.FC<_GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`lobalerrorboundary ${className}`}>
      {children}
    </div>
  );
};

GlobalErrorBoundary.displayName = 'GlobalErrorBoundary';

export default GlobalErrorBoundary;