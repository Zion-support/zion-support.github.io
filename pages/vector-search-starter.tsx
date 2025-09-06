import React from 'react';

interface VectorSearchStarterProps {
  className?: string;
}

const VectorSearchStarter: React.FC<VectorSearchStarterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>VectorSearchStarter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default VectorSearchStarter;