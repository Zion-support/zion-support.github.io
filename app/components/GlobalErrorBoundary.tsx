import React from 'react';
'use client';

const GlobalErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default GlobalErrorBoundary;