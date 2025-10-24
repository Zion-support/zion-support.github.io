'use client'
import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Service Worker Registration</h2>
      <p className="text-gray-600">This is a placeholder component for Service Worker Registration.</p>
    </div>
  );
};

export default ServiceWorkerRegistration;
