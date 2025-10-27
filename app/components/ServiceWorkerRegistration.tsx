import React from 'react';

interface _ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}


const ServiceWorkerRegistration: React.FC<_ServiceWorkerRegistrationProps> = ({ className = '', children }) => {
  return (
    <div className={`erviceworkerregistration ${className}`}>
      {children}
    </div>
  );
};

ServiceWorkerRegistration.displayName = 'ServiceWorkerRegistration';

export default ServiceWorkerRegistration;