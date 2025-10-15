import React from 'react';

const ShippingRates = ({ 
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