import React from 'react';

interface ErrorfallbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorfallback({ className = '', children }: ErrorfallbackProps) {
  return (
    <div className={`ErrorFallback-component ${className}`}>
      {children}
    </div>
  );
}