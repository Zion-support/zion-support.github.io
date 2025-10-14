import React from "react";

type ErrorBoundaryProps = Record<string, unknown>;

const ErrorBoundary: React.FC<ErrorBoundaryProps> = () => {
  return (
    <div className="errorboundary">
      {/* Component content */}
    </div>
  );
};

export default ErrorBoundary;