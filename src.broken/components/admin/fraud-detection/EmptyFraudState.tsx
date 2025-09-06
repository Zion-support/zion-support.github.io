import React from 'react';

interface EmptyFraudStateProps {
  className?: string;
}

const EmptyFraudState: React.FC<EmptyFraudStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EmptyFraudState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EmptyFraudState;