import React from 'react';

interface PressProps {
  className?: string;
}

const Press: React.FC<PressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Press</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Press;