import React from 'react';

interface InfrastructureProps {
  className?: string;
}

const Infrastructure: React.FC<InfrastructureProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Infrastructure</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Infrastructure;