import React from 'react';

interface CountryServiceCardProps {
  className?: string;
}

const CountryServiceCard: React.FC<CountryServiceCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CountryServiceCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CountryServiceCard;