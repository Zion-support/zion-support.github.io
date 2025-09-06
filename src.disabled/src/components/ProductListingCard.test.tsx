import React from 'react';

interface ProductListingCard.testProps {
  className?: string;
}

const ProductListingCard.test: React.FC<ProductListingCard.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductListingCard.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductListingCard.test;