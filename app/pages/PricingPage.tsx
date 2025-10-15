import React from 'react';

interface PricingPageProps {
  className?: string;
  children?: React.ReactNode;
}

const PricingPage: React.FC<PricingPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`pricingpage ${className}`}>
      {children}
    </div>
  );
};

export default PricingPage;