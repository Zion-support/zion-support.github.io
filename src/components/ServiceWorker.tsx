import React from 'react';

interface ServiceWorkerProps {
  className?: string;
}

export default function ServiceWorker({ className }: ServiceWorkerProps) {
  return (
    <div className={className}>
      <h1>ServiceWorker</h1>
      <p>Component content</p>
    </div>
  );
}