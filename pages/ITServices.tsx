import React from 'react';

interface ITServicesProps {
  className?: string;
}

const ITServices: React.FC<ITServicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITServices</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITServices;