
import React from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
  error?: Error;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ className, children, error }) => {
  return (
    <div className={className} role="alert" aria-label="Error Handler">
      {error && <p>Error: {error.message}</p>}
      {children || <p>Error Handler</p>}
    </div>
  );
};

export default ErrorHandler;
