import React from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorHandler = ({ className = '', children }) => {
  return (
<div className={`errorhandler-component ${className}`}>
      {children}
    </div>
  );
};

ErrorHandler.displayName = 'ErrorHandler';export default ErrorHandler;