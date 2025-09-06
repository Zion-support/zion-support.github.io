import React from 'react';

interface ServiceDetailsProps {
  className?: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceDetails</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceDetails;