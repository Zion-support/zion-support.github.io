import React from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceWorker({ className = '', children }: ServiceWorkerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}