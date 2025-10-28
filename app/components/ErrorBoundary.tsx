import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary = ({ 
  className = '', 
  children 
}: ErrorBoundaryProps) => {
  return (
    <div className={'errorboundary ' + className}>
      {children || <p>ErrorBoundary component</p>}
    </div>
  );
};

export default ErrorBoundary;