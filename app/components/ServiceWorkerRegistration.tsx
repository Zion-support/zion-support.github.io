import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '', children }) => {
  return (
    <div className={`serviceworkerregistration-component ${className}`}>
{children || <h2>ServiceWorkerRegistration</h2>}

    </div>
  );
};

export default ServiceWorkerRegistration;