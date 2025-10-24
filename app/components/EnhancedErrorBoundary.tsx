'use client'
import React from 'react';

interface EnhancedErrorBoundaryProps {
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  className?: string;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ 
  children, 
  onError, 
  className 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedErrorBoundary;
