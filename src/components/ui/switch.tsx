import React from 'react';

interface SwitchProps {
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Switch</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Switch;