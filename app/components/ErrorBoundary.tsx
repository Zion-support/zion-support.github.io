"use client"
import React from "react";
interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}
interface ErrorBoundaryProps {
   className, children 
}
const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({  className, children  }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ErrorBoundary;