import React from 'react';

interface ServiceworkerregistrationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Serviceworkerregistration({ className = '', children }: ServiceworkerregistrationProps) {
  return (
    <div className={`ServiceWorkerRegistration-component ${className}`}>
      {children}
    </div>
  );
}