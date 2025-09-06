import React from 'react';

interface ProductListingCardProps {
  className?: string;
}

const ProductListingCard: React.FC<ProductListingCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductListingCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductListingCard;