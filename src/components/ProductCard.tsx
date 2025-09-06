import React from 'react';

interface ProductCardProps {
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductCard;