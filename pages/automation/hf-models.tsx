import React from 'react';

interface HfModelsProps {
  className?: string;
}

const HfModels: React.FC<HfModelsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HfModels</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HfModels;