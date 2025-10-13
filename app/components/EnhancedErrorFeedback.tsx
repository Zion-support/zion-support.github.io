import React from 'react';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

export const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children }) => {
  return <>{children}</>;
};