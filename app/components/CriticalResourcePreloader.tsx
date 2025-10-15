import React from 'react';

interface CriticalresourcepreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Criticalresourcepreloader({ className = '', children }: CriticalresourcepreloaderProps) {
  return (
    <div className={`CriticalResourcePreloader-component ${className}`}>
      {children}
    </div>
  );
}