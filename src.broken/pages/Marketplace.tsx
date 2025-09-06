import React from 'react';

interface MarketplaceProps {
  className?: string;
}

const Marketplace: React.FC<MarketplaceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Marketplace</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Marketplace;