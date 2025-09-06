import React from 'react';

interface ServiceShowcase.testProps {
  className?: string;
}

const ServiceShowcase.test: React.FC<ServiceShowcase.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceShowcase.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceShowcase.test;