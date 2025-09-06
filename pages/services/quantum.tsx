import React from 'react';

interface QuantumProps {
  className?: string;
}

const Quantum: React.FC<QuantumProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Quantum</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Quantum;