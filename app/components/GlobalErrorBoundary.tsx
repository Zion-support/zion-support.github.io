import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default GlobalErrorBoundary;