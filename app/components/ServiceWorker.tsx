import React from 'react';

interface ServiceworkerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Serviceworker({ className = '', children }: ServiceworkerProps) {
  return (
    <div className={`ServiceWorker-component ${className}`}>
      {children}
    </div>
  );
}