import React from 'react';

interface ServiceWorker.testProps {
  className?: string;
}

const ServiceWorker.test: React.FC<ServiceWorker.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceWorker.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceWorker.test;