import React from 'react';

interface It-servicesProps {
  className?: string;
}

const It-services: React.FC<It-servicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>It-services</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default It-services;