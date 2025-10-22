'use client';
import React from "react";

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children }) => {
  return <>{children}</>;
};

export default GlobalErrorBoundary;