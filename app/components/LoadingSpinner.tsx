import React from "react";

type LoadingSpinnerProps = Record<string, unknown>;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="loadingspinner" data-testid="loading-spinner">
      {/* Component content */}
    </div>
  );
};

export default LoadingSpinner;