import React from 'react';

interface PriceFilterProps {
  className?: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PriceFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PriceFilter;