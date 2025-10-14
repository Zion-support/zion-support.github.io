import React from "react";

type LoadingSpinnerProps = Record<string, unknown>;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className="loadingspinner">
      LoadingSpinner
    </div>
  );
};

export default LoadingSpinner;