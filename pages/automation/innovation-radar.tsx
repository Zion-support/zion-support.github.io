import React from 'react';

interface InnovationRadarProps {
  className?: string;
}

const InnovationRadar: React.FC<InnovationRadarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InnovationRadar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InnovationRadar;