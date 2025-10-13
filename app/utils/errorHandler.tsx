import React from 'react';

interface errorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function errorHandler({ className = '', children }: errorHandlerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}