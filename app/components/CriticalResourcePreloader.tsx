import React from 'react';

interface CriticalResourcePreloaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CriticalResourcePreloader({ className = '', children }: CriticalResourcePreloaderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}