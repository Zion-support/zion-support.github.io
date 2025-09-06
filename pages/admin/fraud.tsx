import React from 'react';

interface FraudProps {
  className?: string;
}

const Fraud: React.FC<FraudProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Fraud</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Fraud;