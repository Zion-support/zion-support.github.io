import React from 'react';

interface ServiceWorkerProps {
  className?: string;
}

const ServiceWorker: React.FC<ServiceWorkerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceWorker</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceWorker;