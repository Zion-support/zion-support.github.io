import React from 'react';

interface Biotech-aiProps {
  className?: string;
}

const Biotech-ai: React.FC<Biotech-aiProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Biotech-ai</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Biotech-ai;