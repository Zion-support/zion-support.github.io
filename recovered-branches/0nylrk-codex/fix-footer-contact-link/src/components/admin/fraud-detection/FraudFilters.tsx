import React from 'react';

interface FraudFiltersProps {
  className?: string;
}

const FraudFilters: React.FC<FraudFiltersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FraudFilters</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FraudFilters;