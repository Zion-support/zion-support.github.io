import React from 'react';

interface MarketplaceLandingProps {
  className?: string;
}

const MarketplaceLanding: React.FC<MarketplaceLandingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MarketplaceLanding</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MarketplaceLanding;