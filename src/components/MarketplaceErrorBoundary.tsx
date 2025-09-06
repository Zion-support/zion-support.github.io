import React from 'react';

interface MarketplaceErrorBoundaryProps {
  className?: string;
}

const MarketplaceErrorBoundary: React.FC<MarketplaceErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MarketplaceErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MarketplaceErrorBoundary;