import React from 'react';

interface Market-researchProps {
  className?: string;
}

const Market-research: React.FC<Market-researchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Market-research</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Market-research;