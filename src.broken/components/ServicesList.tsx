import React from 'react';

interface ServicesListProps {
  className?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesList;