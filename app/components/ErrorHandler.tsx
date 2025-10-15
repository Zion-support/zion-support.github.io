import React from 'react';

interface ErrorhandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorhandler({ className = '', children }: ErrorhandlerProps) {
  return (
    <div className={`ErrorHandler-component ${className}`}>
      {children}
    </div>
  );
}