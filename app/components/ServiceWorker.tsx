import React from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className = '', children }) => {
  return (
<div className={`serviceworker-component ${className}`}>
      {children}
cursor/fix-errors-and-merge-to-main-7271
    </div>
  );
};

ServiceWorker.displayName = 'ServiceWorker';export default ServiceWorker;
cursor/fix-errors-and-merge-to-main-7271