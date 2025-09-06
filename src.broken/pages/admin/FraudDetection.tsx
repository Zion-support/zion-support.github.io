import React from 'react';

interface FraudDetectionProps {
  className?: string;
}

const FraudDetection: React.FC<FraudDetectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FraudDetection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FraudDetection;