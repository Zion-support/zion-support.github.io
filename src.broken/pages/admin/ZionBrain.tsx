import React from 'react';

interface ZionBrainProps {
  className?: string;
}

const ZionBrain: React.FC<ZionBrainProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ZionBrain</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ZionBrain;