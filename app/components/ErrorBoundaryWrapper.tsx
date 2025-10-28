<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c408

interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundarywrapper-component ${className}`}>
      {children}
    </div>
  );
};

ErrorBoundaryWrapper.displayName = 'ErrorBoundaryWrapper';

export default ErrorBoundaryWrapper;