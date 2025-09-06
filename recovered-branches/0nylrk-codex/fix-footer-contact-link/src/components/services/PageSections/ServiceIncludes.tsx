import React from 'react';

interface ServiceIncludesProps {
  className?: string;
}

const ServiceIncludes: React.FC<ServiceIncludesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceIncludes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceIncludes;