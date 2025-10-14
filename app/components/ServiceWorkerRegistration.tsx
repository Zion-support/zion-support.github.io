import React from 'react';

interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className = '', children }) => {
  return (
    <div className={`serviceworkerregistration ${className}`}>
      {children}
    </div>
  );
};

export default ServiceWorkerRegistration;