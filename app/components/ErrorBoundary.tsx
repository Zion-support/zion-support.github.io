"use client";
import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <div>
      <h1>ErrorBoundary</h1>
      {children}
    </div>
  );
};

export default ErrorBoundary;