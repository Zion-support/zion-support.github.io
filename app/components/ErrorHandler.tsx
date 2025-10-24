import React from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default ErrorHandler;
