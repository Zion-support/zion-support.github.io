'use client';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalErrorBoundary;