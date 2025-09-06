import React from 'react';

interface SpaceTechnologyProps {
  className?: string;
}

const SpaceTechnology: React.FC<SpaceTechnologyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SpaceTechnology</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SpaceTechnology;