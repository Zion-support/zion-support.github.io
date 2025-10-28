'use client';

import React, { memo } from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`service-worker ${className}`}>
      {children}
    </div>
  );
});

ServiceWorker.displayName = 'ServiceWorker';

export default ServiceWorker;