import React from 'react';

interface ProductsListProps {
  className?: string;
}

const ProductsList: React.FC<ProductsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductsList;