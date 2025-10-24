'use client';
import React from 'react';

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ children }) => {
  return <>{children}</>;
};

export default ErrorBoundaryWrapper;