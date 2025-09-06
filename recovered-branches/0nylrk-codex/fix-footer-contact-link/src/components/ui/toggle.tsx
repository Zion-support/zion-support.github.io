import React from 'react';

interface ToggleProps {
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Toggle</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Toggle;