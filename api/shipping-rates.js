import React from 'react';

interface shipping-ratesProps {
  className?: string;
  children?: React.ReactNode;
}

const shipping-rates: React.FC<shipping-ratesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`shipping-rates ${className}`}>
      {children}
    </div>
  );
};

export default shipping-rates;