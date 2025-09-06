import React from 'react';

interface GenesisProps {
  className?: string;
}

const Genesis: React.FC<GenesisProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Genesis</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Genesis;