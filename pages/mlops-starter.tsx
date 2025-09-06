import React from 'react';

interface MlopsStarterProps {
  className?: string;
}

const MlopsStarter: React.FC<MlopsStarterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MlopsStarter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MlopsStarter;