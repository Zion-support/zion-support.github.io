import React from 'react';
cursor/fix-errors-and-merge-to-main-7271

interface ErrorBoundaryProps {
  className?: string;
  children?: ReactNode;
}const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundary-component ${className}`}>
      {children}
    </div>
  );
};

ErrorBoundary.displayName = 'ErrorBoundary';
cursor/fix-errors-and-merge-to-main-7271

export default ErrorBoundary;