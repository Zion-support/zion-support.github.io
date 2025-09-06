import React from 'react';

interface FraudTabContentProps {
  className?: string;
}

const FraudTabContent: React.FC<FraudTabContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FraudTabContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FraudTabContent;