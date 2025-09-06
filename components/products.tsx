import React from 'react';

interface ProductsProps {
  className?: string;
}

const Products: React.FC<ProductsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Products</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Products;