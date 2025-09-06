import React from 'react';

interface SpaceTechProps {
  className?: string;
}

const SpaceTech: React.FC<SpaceTechProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SpaceTech</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SpaceTech;