import React from 'react';

interface ErrorFallbackProps {
  children?: React.ReactNode;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ children }) => {
  return (
    <div className="errorfallback">
      {children}
    </div>
  );
};

export default ErrorFallback;