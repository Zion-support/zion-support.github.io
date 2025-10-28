'use client';

import React, { memo } from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`error-handler ${className}`}>
      {children}
    </div>
  );
});

ErrorHandler.displayName = 'ErrorHandler';

export default ErrorHandler;