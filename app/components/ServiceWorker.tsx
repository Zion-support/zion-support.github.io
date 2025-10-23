"use client";
import React from 'react';

interface ServiceWorkerProps {
  className?: string;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ServiceWorker
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ServiceWorker;