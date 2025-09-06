import React from 'react';

interface ServiceProcessStepsProps {
  className?: string;
}

const ServiceProcessSteps: React.FC<ServiceProcessStepsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceProcessSteps</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceProcessSteps;