import React from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export const ErrorHandler: React.FC<ErrorHandlerProps> = ({ className = '', children }) => {
  return (
    <div className={`errorhandler ${className}`}>
      {children}
    </div>
  );
};

export default ErrorHandler;