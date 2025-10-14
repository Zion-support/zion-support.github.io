import React from "react";

type GlobalErrorBoundaryProps = Record<string, unknown>;

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = () => {
  return (
    <div className="globalerrorboundary">
      {/* Component content */}
    </div>
  );
};

export default GlobalErrorBoundary;