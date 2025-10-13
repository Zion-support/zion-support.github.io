import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceWorkerRegistration({ className = '', children }: ServiceWorkerRegistrationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}