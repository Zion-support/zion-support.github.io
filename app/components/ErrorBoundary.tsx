import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return (
    <div className="error-boundary">
      {children}
    </div>
  );
};

export default ErrorBoundary;
