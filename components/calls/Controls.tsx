import React from 'react';

interface ControlsProps {
  className?: string;
}

const Controls: React.FC<ControlsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Controls</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Controls;