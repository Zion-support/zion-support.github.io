import React from 'react';

interface ITInfrastructureProps {
  className?: string;
}

const ITInfrastructure: React.FC<ITInfrastructureProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITInfrastructure</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITInfrastructure;