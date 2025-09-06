import React from 'react';

interface Quantum-computing-as-a-serviceProps {
  className?: string;
}

const Quantum-computing-as-a-service: React.FC<Quantum-computing-as-a-serviceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Quantum-computing-as-a-service</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Quantum-computing-as-a-service;