import React from 'react';

interface ServiceTypeStepProps {
  className?: string;
}

const ServiceTypeStep: React.FC<ServiceTypeStepProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceTypeStep</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceTypeStep;