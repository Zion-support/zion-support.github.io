import React from 'react';

interface AiProps {
  className?: string;
}

const Ai: React.FC<AiProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ai</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ai;