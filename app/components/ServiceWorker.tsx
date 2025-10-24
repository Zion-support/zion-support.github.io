'use client'
import React from 'react';

interface ServiceWorkerProps {
  className?: string;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Service Worker</h2>
      <p className="text-gray-600">This is a placeholder component for Service Worker.</p>
    </div>
  );
};

export default ServiceWorker;
