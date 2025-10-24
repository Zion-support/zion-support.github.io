'use client';
import React from 'react';

interface ErrorHandlerProps {
  className?: string;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ErrorHandler</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ErrorHandler;
