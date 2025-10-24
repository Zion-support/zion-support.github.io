import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
}

export default function ServiceWorkerRegistration({ className }: ServiceWorkerRegistrationProps) {
  return (
    <div className={className}>
      <h1>ServiceWorkerRegistration</h1>
      <p>Component content</p>
    </div>
  );
}