import React from 'react';

interface QuantumComputingAsAServiceProps {
  className?: string;
}

const QuantumComputingAsAService: React.FC<QuantumComputingAsAServiceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuantumComputingAsAService</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuantumComputingAsAService;