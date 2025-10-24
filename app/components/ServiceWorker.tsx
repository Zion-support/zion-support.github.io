import React from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

export const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className = '', children }) => {
  return (
    <div className={`serviceworker ${className}`}>
      {children}
    </div>
  );
};

export default ServiceWorker;