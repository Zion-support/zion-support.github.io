import React from 'react';

interface CountryServiceSelectorProps {
  className?: string;
}

const CountryServiceSelector: React.FC<CountryServiceSelectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CountryServiceSelector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CountryServiceSelector;