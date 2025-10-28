<<<<<<< HEAD
=======
import { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

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