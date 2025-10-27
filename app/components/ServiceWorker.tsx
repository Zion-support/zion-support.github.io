import React from 'react';

interface ServiceWorkerProps {
  className?: string;
  children?: React.ReactNode;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'serviceworker ' + className}>
      {children || <p>ServiceWorker component</p>}
    </div>
  );
};

export default ServiceWorker;
