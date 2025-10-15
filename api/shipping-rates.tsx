import React from 'react';

interface ShippingRatesProps {
  className?: string;
  children?: React.ReactNode;
}

const ShippingRates: React.FC<ShippingRatesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`shipping-rates ${className}`}>
      {children}
    </div>
  );
};

export default ShippingRates;