
import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '', children }) => {
  return (
    <div className={`service-worker-registration ${className}`}>
      {children || <p>ServiceWorkerRegistration component</p>}
    </div>
  );
};

export default ServiceWorkerRegistration;