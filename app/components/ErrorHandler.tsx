<<<<<<< HEAD
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
=======
'use client'

import React from 'react'

interface ErrorHandlerProps {
  error?: Error
  children: React.ReactNode
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error, children }) => {
  if (error) {
    return (
      <div className="error-handler">
        <h2>An error occurred</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return <>{children}</>
}

export default ErrorHandler
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
