import React from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default ServiceWorker;
