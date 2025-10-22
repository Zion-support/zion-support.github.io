import React from "react";
'use client';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalErrorBoundary;