import React from 'react';

interface Ai-qaProps {
  className?: string;
}

const Ai-qa: React.FC<Ai-qaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ai-qa</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ai-qa;