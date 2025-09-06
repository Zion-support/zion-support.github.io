import React from 'react';

interface Ai-copilotsProps {
  className?: string;
}

const Ai-copilots: React.FC<Ai-copilotsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ai-copilots</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ai-copilots;