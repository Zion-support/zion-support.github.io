import React from 'react';

interface QuantumComputingProps {
  className?: string;
}

const QuantumComputing: React.FC<QuantumComputingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuantumComputing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuantumComputing;