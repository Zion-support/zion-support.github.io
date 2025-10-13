import React from 'react';

interface ErrorFallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorFallback({ className = '', children }: ErrorFallbackProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}