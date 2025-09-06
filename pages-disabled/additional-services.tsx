import React from 'react';

interface Additional-servicesProps {
  className?: string;
}

const Additional-services: React.FC<Additional-servicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Additional-services</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Additional-services;