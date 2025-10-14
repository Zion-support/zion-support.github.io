import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ className = '', children }) => {
  return (
    <div className={`errorfallback ${className}`}>
      {children}
    </div>
  );
};

export default ErrorFallback;