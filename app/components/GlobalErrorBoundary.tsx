'use client';
import React from 'react';

const GlobalErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default GlobalErrorBoundary;