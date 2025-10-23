"use client";
import React from "react";

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({ children }) => {
  return (
    <div>
      <h1>GlobalErrorBoundary</h1>
      {children}
    </div>
  );
};

export default GlobalErrorBoundary;