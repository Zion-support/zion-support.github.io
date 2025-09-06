import React from 'react';

interface ManufacturingProps {
  className?: string;
}

const Manufacturing: React.FC<ManufacturingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Manufacturing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Manufacturing;