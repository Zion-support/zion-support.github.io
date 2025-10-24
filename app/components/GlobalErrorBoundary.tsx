import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`globalerrorboundary ${className}`}>
      {children}
    </div>
  );
};

export default GlobalErrorBoundary;