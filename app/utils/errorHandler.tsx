import React from 'react';

interface ErrorHandlerProps {
  error?: Error;
  children?: React.ReactNode;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error, children }) => {
  if (error) {
    return (
      <div className="error-handler">
        <h2>Error Handler</h2>
        <p>An error occurred: {error.message}</p>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorHandler;