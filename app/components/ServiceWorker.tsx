'use client';
import React from 'react';

interface ServiceWorkerProps {
  className?: string;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ServiceWorker</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ServiceWorker;
