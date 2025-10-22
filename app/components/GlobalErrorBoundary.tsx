import React from 'react';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default GlobalErrorBoundary;
