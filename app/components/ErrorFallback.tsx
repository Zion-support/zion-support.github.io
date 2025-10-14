import React from "react";

type ErrorFallbackProps = Record<string, unknown>;

const ErrorFallback: React.FC<ErrorFallbackProps> = () => {
  return (
    <div className="errorfallback">
      {/* Component content */}
    </div>
  );
};

export default ErrorFallback;