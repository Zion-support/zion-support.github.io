import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '', children }) => {
  return (
    <div className={`serviceworkerregistration-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ServiceWorkerRegistration</h3>
          <p className="text-gray-600">This is the ServiceWorkerRegistration component.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceWorkerRegistration;