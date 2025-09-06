import React from 'react';

interface MarketplaceLayoutProps {
  className?: string;
}

const MarketplaceLayout: React.FC<MarketplaceLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MarketplaceLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MarketplaceLayout;