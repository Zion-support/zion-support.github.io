import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
cursor/fix-errors-and-merge-to-main-7271
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`globalerrorboundary-component ${className}`}>
      {children}
    </div>
  );
};

GlobalErrorBoundary.displayName = 'GlobalErrorBoundary';export default GlobalErrorBoundary;
cursor/fix-errors-and-merge-to-main-7271