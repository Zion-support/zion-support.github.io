import React from 'react';

interface It-onsite-servicesProps {
  className?: string;
}

const It-onsite-services: React.FC<It-onsite-servicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>It-onsite-services</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default It-onsite-services;