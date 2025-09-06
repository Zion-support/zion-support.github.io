import React from 'react';

interface PricingPageProps {
  className?: string;
}

const PricingPage: React.FC<PricingPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PricingPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PricingPage;