import React from 'react';

interface MarketplacePageProps {
  className?: string;
}

const MarketplacePage: React.FC<MarketplacePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MarketplacePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MarketplacePage;