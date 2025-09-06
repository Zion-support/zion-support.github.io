import React from 'react';

interface CurrencySelectorProps {
  className?: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CurrencySelector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CurrencySelector;