import React from 'react';

interface ServiceShowcaseProps {
  className?: string;
}

const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceShowcase</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceShowcase;