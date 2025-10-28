<<<<<<< HEAD
import ErrorBoundary from '../components/ErrorBoundary';
import React, { ReactNode } from 'react';
=======
import React from 'react'
>>>>>>> 87c6cd40b012dd3702d84b18085574d3b52981fb

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