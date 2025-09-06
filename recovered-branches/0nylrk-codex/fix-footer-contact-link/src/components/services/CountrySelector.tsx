import React from 'react';

interface CountrySelectorProps {
  className?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CountrySelector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CountrySelector;