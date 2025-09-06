import React from 'react';

interface PitchGeneratorProps {
  className?: string;
}

const PitchGenerator: React.FC<PitchGeneratorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PitchGenerator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PitchGenerator;