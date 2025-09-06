import React from 'react';

interface Ai-evalsProps {
  className?: string;
}

const Ai-evals: React.FC<Ai-evalsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ai-evals</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ai-evals;