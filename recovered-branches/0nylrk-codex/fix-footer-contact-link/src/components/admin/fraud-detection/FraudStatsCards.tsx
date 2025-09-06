import React from 'react';

interface FraudStatsCardsProps {
  className?: string;
}

const FraudStatsCards: React.FC<FraudStatsCardsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FraudStatsCards</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FraudStatsCards;