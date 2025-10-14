import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedErrorBoundary: React.FC<ImprovedErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`improvederrorboundary ${className}`}>
      {children}
    </div>
  );
};

export default ImprovedErrorBoundary;