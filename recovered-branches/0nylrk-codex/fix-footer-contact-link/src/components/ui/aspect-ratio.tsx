import React from 'react';

interface Aspect-ratioProps {
  className?: string;
}

const Aspect-ratio: React.FC<Aspect-ratioProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Aspect-ratio</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Aspect-ratio;