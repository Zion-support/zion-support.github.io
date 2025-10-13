import React from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorHandler({ className = '', children }: ErrorHandlerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}